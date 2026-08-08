/**
 * Turn bare scripture references in authored prose into Bible Gateway links.
 *
 * Scripture is evidence the reader should be able to check in one click, not a
 * citation in the sources list, so references are linked where they appear and
 * are never numbered as sources.
 */

/** Canonical book names, longest first so "1 John" wins over "John". */
const BOOKS = [
  "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth",
  "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles",
  "Ezra", "Nehemiah", "Esther", "Job", "Psalms", "Psalm", "Proverbs", "Ecclesiastes",
  "Song of Solomon", "Song of Songs", "Isaiah", "Jeremiah", "Lamentations", "Ezekiel",
  "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk",
  "Zephaniah", "Haggai", "Zechariah", "Malachi",
  "Matthew", "Mark", "Luke", "John", "Acts", "Romans",
  "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians",
  "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy", "Titus", "Philemon",
  "Hebrews", "James", "1 Peter", "2 Peter", "1 John", "2 John", "3 John", "Jude",
  "Revelation",
]

/** "1 Corinthians" also appears as "1st Corinthians" and "I Corinthians". */
function bookAlternatives(book: string): string {
  const m = /^([123])\s+(.+)$/.exec(book)
  if (!m) return escapeRegex(book)
  const [, n, rest] = m
  const ordinal = { "1": "1st|First|I", "2": "2nd|Second|II", "3": "3rd|Third|III" }[n]
  return `(?:${n}|${ordinal})\\s+${escapeRegex(rest)}`
}

function escapeRegex(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

const BOOK_PATTERN = BOOKS.slice()
  .sort((a, b) => b.length - a.length)
  .map(bookAlternatives)
  .join("|")

/**
 * Book, chapter, then verses: "John 3:16", "1 Cor 2:3-5", "Psalm 22:16, 18".
 * Also matches a chapter-and-verse written with "v": "1 Corinthians 2 v 3".
 * A bare chapter with no verse is deliberately not matched, because "Daniel 9"
 * and "Daniel 9 people" cannot be told apart without more context.
 */
export const SCRIPTURE_REFERENCE = new RegExp(
  String.raw`\b(${BOOK_PATTERN})\s+(\d{1,3})\s*(?::|\s+vv?\.?\s*)\s*(\d{1,3}(?:\s*[-–]\s*\d{1,3})?(?:\s*,\s*\d{1,3}(?:\s*[-–]\s*\d{1,3})?)*)`,
  "g",
)

export function bibleGatewayUrl(reference: string) {
  return `https://www.biblegateway.com/passage/?search=${encodeURIComponent(reference)}&version=NIV`
}

/**
 * Link every scripture reference in `html` that is not already inside an anchor.
 * Operates on the segments between existing <a>...</a> tags so that references
 * inside authored markdown links are left exactly as they are.
 */
export function linkScriptureReferences(html: string, linkClass: string): string {
  const parts = html.split(/(<a\b[\s\S]*?<\/a>)/gi)

  return parts
    .map((part, index) => {
      // Odd indexes are the captured <a>...</a> blocks: never touch them.
      if (index % 2 === 1) return part

      // Do not link inside a tag's attributes, only in text nodes.
      return part.replace(/(^|>)([^<]+)/g, (_m, lead: string, text: string) => {
        const linked = text.replace(
          SCRIPTURE_REFERENCE,
          (match: string, book: string, chapter: string, verses: string) => {
            const normalisedBook = book
              .replace(/^(?:1st|First|I)\s+/i, "1 ")
              .replace(/^(?:2nd|Second|II)\s+/i, "2 ")
              .replace(/^(?:3rd|Third|III)\s+/i, "3 ")
            const reference = `${normalisedBook} ${chapter}:${verses.replace(/\s+/g, "")}`
            const url = bibleGatewayUrl(reference)
            return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="${linkClass}">${match}</a>`
          },
        )
        return `${lead}${linked}`
      })
    })
    .join("")
}
