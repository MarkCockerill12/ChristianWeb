import type { Topic } from './types'

export const nasa: Topic = {
  id: "nasa",
  title: "NASA & Space Science: Evidence for Biblical History",
  description: "How NASA satellite imagery, astrophysics, and atmospheric data provide scientific context for biblical events",
  icon: "Zap",
  color: "indigo",
  tags: ["Cosmology", "Archaeology", "Physics", "NASA"],
  subtopics: [
    {
      id: "joshua-long-day",
      title: "Joshua's Long Day - The 1207 BCE Eclipse",
      tags: ["joshua", "astronomy", "eclipse", "cambridge"],
      content: `<strong>The 'Missing Day' Myth vs. Astronomical Reality:</strong> While the popular urban legend of a 'missing day' found by NASA computers is fiction, modern astronomical analysis provides a more concrete scientific correlation: the oldest recorded annular solar eclipse.<a href="https://eclipse.gsfc.nasa.gov/SEcat5/SE1201-1300.html" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[1]</a><br><br>

      <strong>1. The Biblical Account & Hebrew Philology:</strong><br>
      • <strong><a href="https://www.biblegateway.com/passage/?search=Joshua+10%3A12-13&version=NIV" target="_blank" style="color: #007acc; text-decoration: none;">Joshua 10:12-13</a>:</strong> Joshua commands the sun to "stand still" (Hebrew: <em>dom</em>).<br>
      • <strong>Translation Analysis:</strong> Cambridge researchers argue the Hebrew word <em>dom</em> can mean "cease shining" or "grow dark," implying an eclipse rather than a halt in rotation.<a href="https://academic.oup.com/astrogeo/article/58/5/5.39/4159289" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[2]</a><br>
      • <strong>Context:</strong> Occurred during the conquest of Canaan, historically dated between 1500-1200 BCE.<br><br>

      <strong>2. NASA Data & The 1207 BCE Eclipse:</strong><br>
      • <strong>Precise Dating:</strong> Using NASA's solar eclipse records, researchers identified an annular solar eclipse on October 30, 1207 BCE.<a href="https://eclipse.gsfc.nasa.gov/SEcat5/SE1201-1300.html" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[3]</a><br>
      • <strong>Visibility:</strong> In Gibeon, the sun would have appeared as a "ring of fire," drastically reducing light levels in the afternoon.<br>
      • <strong>Chronological Anchor:</strong> This astronomical fix provides a precise date for the reign of Pharaoh Merneptah, aligning Egyptian history with the Israelite conquest.<br>`
    },
    {
      id: "red-sea-crossing",
      title: "The Red Sea Crossing - Fluid Dynamics",
      tags: ["exodus", "moses", "physics", "oceanography"],
      content: `<strong>Physics of the Parting:</strong> Research supported by the NASA Ocean Vector Wind Science Team demonstrates that a phenomenon called "wind setdown" can physically part a body of water as described in Exodus.<a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0012481" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[4]</a><br><br>

      <strong>1. The "East Wind" Mechanism:</strong><br>
      • <strong><a href="https://www.biblegateway.com/passage/?search=Exodus+14%3A21&version=NIV" target="_blank" style="color: #007acc; text-decoration: none;">Exodus 14:21</a>:</strong> "The Lord drove the sea back with a strong east wind all night."<br>
      • <strong>Computer Modeling:</strong> Simulations using the Regional Ocean Modeling System (ROMS) show that a 63 mph wind blowing for 12 hours could push water back, exposing a land bridge 2.5 miles long and 3 miles wide.<br>
      • <strong>Wall of Water:</strong> The fluid dynamics create a "wall" of water on both sides (the pushed-back lake and the river channel), matching the biblical description.<br><br>

      <strong>2. Location & Reversal:</strong><br>
      • <strong>The Lake of Tanis:</strong> The models work perfectly for the "Sea of Reeds" (Lake of Tanis) in the eastern Nile Delta.<br>
      • <strong>Rapid Return:</strong> When the wind drops, the water returns as a sudden bore wave, sufficient to drown an army—exactly as described in the text.<br>`
    },
    {
      id: "sodom-gomorrah",
      title: "Sodom & Gomorrah - Cosmic Airburst",
      tags: ["sodom", "asteroid", "impact", "fire"],
      content: `<strong>Planetary Defense & Ancient Impacts:</strong> NASA's Planetary Defense Coordination Office tracks Near-Earth Objects (NEOs). Data on "cosmic airbursts" (like the Tunguska event) provides a scientific mechanism for the destruction of Sodom.<a href="https://www.lpi.usra.edu/education/explore/planetary-defense/background/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[5]</a><br><br>

      <strong>1. The Tall el-Hammam Excavation:</strong><br>
      • <strong>Biblical Match:</strong> The site of Tall el-Hammam is a leading candidate for Sodom.<br>
      • <strong>Evidence of Heat:</strong> Archaeologists found pottery melted into glass and bubbled mudbricks, requiring temperatures above 4,000°F (hotter than any volcano or man-made fire of the era).<br>
      • <strong>Shocked Quartz:</strong> The presence of shocked quartz crystals confirms a high-pressure impact event.<a href="https://scitechdaily.com/sodom-and-gomorrah-evidence-that-a-cosmic-impact-destroyed-a-biblical-city-in-the-jordan-valley/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[6]</a><br><br>

      <strong>2. The Biblical Description:</strong><br>
      • <strong><a href="https://www.biblegateway.com/passage/?search=Genesis+19%3A24&version=NIV" target="_blank" style="color: #007acc; text-decoration: none;">Genesis 19:24</a>:</strong> "Rain of burning sulfur" aligns with the fallout from a meteor disintegrating in the atmosphere (an airburst).<br>
      • <strong>Salt Encrustation:</strong> The blast would have vaporized Dead Sea water, raining hyper-saline debris over the land, explaining the "pillar of salt" imagery and the subsequent agricultural sterility of the region.<br>`
    },
    {
      id: "lost-city-ubar",
      title: "The Lost City of Ubar - Space Archaeology",
      tags: ["archaeology", "radar", "shuttle", "arabia"],
      content: `<strong>Discovery from Space:</strong> NASA's Space Shuttle Endeavour used radar imaging to discover the "Lost City of Ubar" (the "Atlantis of the Sands"), confirming ancient trade routes described in scripture and ancient texts.<a href="https://earthobservatory.nasa.gov/images/90847/secrets-beneath-the-sand" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[7]</a><br><br>

      <strong>1. Space Shuttle Radar (SIR-C/X-SAR):</strong><br>
      • <strong>Technology:</strong> Radar can penetrate dry sand to see bedrock features underneath.<br>
      • <strong>The Find:</strong> In the 1990s, NASA imagery revealed ancient caravan tracks converging on a single point in the Empty Quarter of Arabia, leading to the discovery of the fortress city.<br>
      • <strong>Biblical Connection:</strong> Ubar is often associated with the people of Ad and the frankincense trade mentioned in the Old Testament (e.g., Jer 6:20, Isa 60:6).<br>`
    },
    {
      id: "crucifixion-earthquake",
      title: "Crucifixion - Earthquake & Darkness",
      tags: ["crucifixion", "seismology", "eclipse", "geology"],
      content: `<strong>Geological & Astronomical Convergence:</strong> NASA data on lunar eclipses and geological core samples from the Dead Sea converge on April 3, 33 AD as the date of the Crucifixion.<br><br>

      <strong>1. The Blood Moon (Lunar Eclipse):</strong><br>
      • <strong><a href="https://www.biblegateway.com/passage/?search=Acts+2%3A20&version=NIV" target="_blank" style="color: #007acc; text-decoration: none;">Acts 2:20</a>:</strong> "The sun will be turned to darkness and the moon to blood."<br>
      • <strong>NASA Data:</strong> NASA's eclipse catalog confirms a lunar eclipse occurred on April 3, 33 AD. It was visible at moonrise in Jerusalem, appearing blood-red due to atmospheric scattering.<a href="https://eclipse.gsfc.nasa.gov/LEcat5/LE0001-0100.html" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[8]</a><br>
      • <strong>Atmospheric Physics:</strong> A dust storm (causing the mid-day darkness) suspended in the atmosphere would have intensified the red color of the moon that evening.<a href="https://www.nasa.gov/image-article/blood-moon-lunar-eclipse/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[9]</a><br><br>

      <strong>2. The Earthquake:</strong><br>
      • <strong><a href="https://www.biblegateway.com/passage/?search=Matthew+27%3A51&version=NIV" target="_blank" style="color: #007acc; text-decoration: none;">Matthew 27:51</a>:</strong> "The earth quaked and the rocks were split."<br>
      • <strong>Seismic Record:</strong> Geologists analyzing sediment cores (varves) from the Dead Sea found a distinct "seismite" layer indicating a major earthquake in the region between 26-36 AD.<a href="https://ui.adsabs.harvard.edu/abs/2012IGRv...54.1219W/abstract" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[10]</a><br>`
    },
    {
      id: "star-bethlehem",
      title: "The Star of Bethlehem - Planetary Alignment",
      tags: ["bethlehem", "star", "conjunction", "magi"],
      content: `<strong>Celestial Mechanics:</strong> NASA's JPL Horizons system allows us to rewind the solar system, revealing rare planetary alignments that match the Star of Bethlehem account.<br><br>

      <strong>1. The Triple Conjunction (7 BCE):</strong><br>
      • <strong>Alignment:</strong> Jupiter and Saturn aligned three times in 7 BCE in the constellation Pisces.<br>
      • <strong>Significance:</strong> Jupiter (King) + Saturn (Shield/Judea) + Pisces (Birth) signaled a "King of the Jews" to ancient astronomers (Magi).<a href="https://ssd.jpl.nasa.gov/horizons/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[11]</a><br><br>

      <strong>2. The 'Fusion' Star (2 BCE):</strong><br>
      • <strong>Event:</strong> On June 17, 2 BCE, Venus and Jupiter passed so close they appeared as a single, blindingly bright star.<br>
      • <strong>NASA Verification:</strong> Modern orbital models confirm this was one of the brightest conjunctions in history, occurring in Leo (the Lion of Judah).<br>`
    },
    {
      id: "hezekiah-sundial",
      title: "Hezekiah's Sundial - Refraction",
      tags: ["hezekiah", "sundial", "refraction", "physics"],
      content: `<strong>Atmospheric Refraction:</strong> The "backward moving shadow" can be explained by anomalous atmospheric refraction, a phenomenon where light bends through air layers, shifting the sun's apparent position.<br><br>

      <strong>1. The Mechanism:</strong><br>
      • <strong>Physics:</strong> NASA explains that light bends when passing through different air densities. A rare atmospheric event (like a localized pressure front) can cause the sun's apparent position to "jump" or retrace its path on a sundial without the earth stopping its rotation.<a href="https://eclipse.gsfc.nasa.gov/LEcat5/appearance.html" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[12]</a><br>
      • <strong>Historical Context:</strong> This fits the description of a localized "sign" rather than a global cataclysm.<br>`
    }
  ],
  content: `<strong>Space-Age Verification of Ancient History:</strong> Modern science does not disprove the Bible; rather, tools developed for space exploration—satellite radar, orbital mechanics software, and atmospheric modeling—are uncovering the physical reality behind biblical narratives.`,
  verses: [
    "Joshua 10:12-13",
    "Exodus 14:21",
    "Genesis 19:24",
    "Acts 2:20",
    "Matthew 27:51",
    "Jeremiah 6:20",
    "Matthew 2:1-2"
  ],
  sources: [
    "[1] [NASA Eclipse Web Site] Solar Eclipses of History: 1207 BCE - https://eclipse.gsfc.nasa.gov/SEcat5/SE1201-1300.html",
    "[2] [Oxford Academic] Astronomy & Geophysics: Solar Eclipse of 1207 BC - https://academic.oup.com/astrogeo/article/58/5/5.39/4159289",
    "[3] [NASA Eclipse Catalog] Five Millennium Catalog of Solar Eclipses - https://eclipse.gsfc.nasa.gov/SEcat5/SE1201-1300.html",
    "[4] [PLOS One] Dynamics of Wind Setdown at Suez (Funded by NASA Ocean Vector Winds) - https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0012481",
    "[5] [NASA LPI] Planetary Defense Background: Airbursts & Impacts - https://www.lpi.usra.edu/education/explore/planetary-defense/background/",  
    "[6] [SciTechDaily] Evidence That a Cosmic Impact Destroyed Biblical City - https://scitechdaily.com/sodom-and-gomorrah-evidence-that-a-cosmic-impact-destroyed-a-biblical-city-in-the-jordan-valley/",
    "[7] [NASA Earth Observatory] Secrets Beneath the Sand (Discovery of Ubar) - https://earthobservatory.nasa.gov/images/90847/secrets-beneath-the-sand",
    "[8] [NASA Eclipse Web Site] Lunar Eclipses: 0001-0100 AD - https://eclipse.gsfc.nasa.gov/LEcat5/LE0001-0100.html",
    "[9] [NASA] Blood Moon Lunar Eclipse Explanation - https://www.nasa.gov/image-article/blood-moon-lunar-eclipse/",
    "[10] [NASA ADS / Int. Geology Review] An early first-century earthquake in the Dead Sea - https://ui.adsabs.harvard.edu/abs/2012IGRv...54.1219W/abstract",
    "[11] [NASA JPL] HORIZONS System (Planetary Ephemeris) - https://ssd.jpl.nasa.gov/horizons/",
    "[12] [NASA Eclipse Web Site] Atmospheric Refraction and Appearance - https://eclipse.gsfc.nasa.gov/LEcat5/appearance.html"
  ],
  lastUpdated: "10-09-2025",
}