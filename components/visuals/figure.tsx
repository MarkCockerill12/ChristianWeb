"use client"

import Image from "next/image"

import { Rich } from "@/components/visuals/kit"
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

export function Gallery({ images, columns = 3 }: { readonly images: readonly ImageCredit[]; readonly columns?: 2 | 3 | 4 }) {
  const cols = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" }[columns]
  return (
    <div className={cn("grid grid-cols-1 gap-4 items-start", cols)}>
      {images.map((img) => (
        <Figure key={img.src} image={img} />
      ))}
    </div>
  )
}
