"use client"

import Image from "next/image"

import { Rich, type VisualSource } from "@/components/visuals/kit"
import { cn } from "@/lib/utils"

export interface ImageCredit {
  /** Path under /public, e.g. /images/archaeology/tel-dan.jpg */
  readonly src: string
  readonly alt: string
  readonly width: number
  readonly height: number
  readonly caption: string
  /** Author or holding institution, as the licence requires it to be stated. */
  readonly credit: string
  readonly license: string
  readonly licenseUrl?: string
  /** File page the image was taken from. */
  readonly sourceUrl: string
}

/** An image with its caption and the attribution its licence requires. */
export function Figure({ image, className }: { readonly image: ImageCredit; readonly className?: string }) {
  return (
    <figure className={cn("viz-figure not-prose m-0 flex flex-col", className)} onClick={(e) => e.stopPropagation()}>
      <div className="overflow-hidden rounded-lg border bg-[color:var(--viz-hover)]">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="h-auto max-h-[26rem] w-full object-contain"
        />
      </div>
      <figcaption className="mt-2 text-[13px] leading-snug">
        <Rich text={image.caption} className="text-[color:var(--viz-ink)]" />
        <span className="block mt-1 text-[11px] text-[color:var(--viz-muted)]">
          <a href={image.sourceUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
            {image.credit}
          </a>
          {", "}
          {image.licenseUrl ? (
            <a href={image.licenseUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {image.license}
            </a>
          ) : (
            image.license
          )}
        </span>
      </figcaption>
    </figure>
  )
}

/**
 * One image placed directly under the point it illustrates: picture beside its
 * caption on wider screens, stacked on phones. Placed in prose with
 * `<?viz img/<key>?>`, keys in visuals/images.tsx.
 */
export function InlineFigure({
  image,
  sources = [],
}: {
  readonly image: ImageCredit
  readonly sources?: readonly VisualSource[]
}) {
  return (
    <figure
      className="viz-figure viz-inline-figure not-prose my-5 flex flex-col gap-3 rounded-lg border p-3 sm:flex-row sm:items-center sm:gap-5"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex shrink-0 justify-center overflow-hidden rounded-md bg-[color:var(--viz-hover)] sm:w-64">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(min-width: 640px) 16rem, 100vw"
          className="h-auto max-h-72 w-auto max-w-full object-contain"
        />
      </div>
      <figcaption className="text-[13px] leading-snug">
        <Rich text={image.caption} className="text-[color:var(--viz-ink)]" />
        <span className="block mt-1.5 text-[11px] text-[color:var(--viz-muted)]">
          <a href={image.sourceUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
            {image.credit}
          </a>
          {", "}
          {image.licenseUrl ? (
            <a href={image.licenseUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {image.license}
            </a>
          ) : (
            image.license
          )}
        </span>
        {sources.length > 0 && (
          <span className="block mt-1 text-[11px] text-[color:var(--viz-muted)]">
            {"Source: "}
            {sources.map((s, i) => (
              <span key={s.label}>
                {i > 0 && "; "}
                {s.url ? (
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:underline">
                    {s.label}
                  </a>
                ) : (
                  s.label
                )}
              </span>
            ))}
          </span>
        )}
      </figcaption>
    </figure>
  )
}

export function Gallery({ images, columns = 3 }: { readonly images: readonly ImageCredit[]; readonly columns?: 1 | 2 | 3 | 4 }) {
  const cols = { 1: "", 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" }[columns]
  return (
    <div className={cn("grid grid-cols-1 gap-4 items-start", cols)}>
      {images.map((img) => (
        <Figure key={img.src} image={img} />
      ))}
    </div>
  )
}
