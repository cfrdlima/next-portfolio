"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n/locale-provider";

type Props = {
  name: string;
  images: string[];
  // "phone": telas em pé, mostradas inteiras sobre um fundo desfocado
  variant: "phone" | "desktop";
};

const smooth = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";

function Slide({
  src,
  alt,
  variant,
  sizes,
}: {
  src: string;
  alt: string;
  variant: Props["variant"];
  sizes: string;
}) {
  if (variant === "desktop") {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover object-top"
      />
    );
  }
  return (
    <>
      {/* mesma imagem desfocada como fundo (mesmo arquivo, vem do cache) */}
      <Image
        src={src}
        alt=""
        aria-hidden
        fill
        sizes={sizes}
        className="scale-110 object-cover opacity-50 blur-2xl"
      />
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-contain py-3 drop-shadow-xl"
      />
    </>
  );
}

export default function ProjectGallery({ name, images, variant }: Props) {
  const { t } = useI18n();
  const g = t.projects.gallery;
  const trackRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const multiple = images.length > 1;
  const cardSizes = "(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw";

  const goTo = (i: number) => {
    const next = (i + images.length) % images.length;
    const track = trackRef.current;
    if (track) {
      track.scrollTo({ left: next * track.clientWidth, behavior: smooth() });
    }
    setIndex(next);
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (track) setIndex(Math.round(track.scrollLeft / track.clientWidth));
  };

  const openLightbox = () => dialogRef.current?.showModal();

  return (
    <div
      role="region"
      aria-roledescription={g.roleDescription}
      aria-label={g.label(name)}
      className="group/gallery relative -mx-2 -mt-2 aspect-[16/10] overflow-hidden rounded-xl border bg-secondary"
    >
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="scrollbar-none flex h-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain"
      >
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => {
              setIndex(i);
              openLightbox();
            }}
            aria-roledescription={g.slide}
            aria-label={`${g.enlarge}: ${g.position(i + 1, images.length)}`}
            className="relative h-full w-full shrink-0 cursor-zoom-in snap-center overflow-hidden"
          >
            <Slide
              src={src}
              alt={g.alt(name, i + 1)}
              variant={variant}
              sizes={cardSizes}
            />
          </button>
        ))}
      </div>

      {multiple && (
        <>
          {(["prev", "next"] as const).map((dir) => (
            <button
              key={dir}
              type="button"
              onClick={() => goTo(index + (dir === "prev" ? -1 : 1))}
              aria-label={dir === "prev" ? g.previous : g.next}
              className={cn(
                "absolute top-1/2 flex size-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border bg-background/80 text-foreground opacity-0 backdrop-blur transition-opacity group-hover/gallery:opacity-100 focus-visible:opacity-100 pointer-coarse:hidden",
                dir === "prev" ? "left-2" : "right-2"
              )}
            >
              {dir === "prev" ? (
                <ChevronLeft className="size-5" />
              ) : (
                <ChevronRight className="size-5" />
              )}
            </button>
          ))}

          <div className="absolute inset-x-0 bottom-2 flex justify-center gap-1.5">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={g.position(i + 1, images.length)}
                aria-current={i === index ? "true" : undefined}
                className="flex size-6 cursor-pointer items-center justify-center"
              >
                <span
                  className={cn(
                    "block h-1.5 rounded-full bg-white/60 shadow transition-all",
                    i === index ? "w-4 bg-white" : "w-1.5"
                  )}
                />
              </button>
            ))}
          </div>
        </>
      )}

      {/* ampliação: <dialog> nativo fecha com Esc e prende o foco */}
      <dialog
        ref={dialogRef}
        aria-label={g.label(name)}
        onClick={(e) => {
          // clique fora da imagem (no fundo) fecha
          if (e.target === e.currentTarget) dialogRef.current?.close();
        }}
        className="m-auto max-h-none max-w-none bg-transparent p-0 backdrop:bg-black/85 backdrop:backdrop-blur-sm"
      >
        <div className="relative h-[85svh] w-[92vw] max-w-6xl">
          <Image
            src={images[index]}
            alt={g.alt(name, index + 1)}
            fill
            sizes="92vw"
            className="object-contain"
          />
        </div>
        <div className="mt-3 flex items-center justify-center gap-3 text-sm text-white">
          {multiple && (
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label={g.previous}
              className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <ChevronLeft className="size-5" />
            </button>
          )}
          <span className="min-w-16 text-center font-mono" aria-live="polite">
            {index + 1} / {images.length}
          </span>
          {multiple && (
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label={g.next}
              className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <ChevronRight className="size-5" />
            </button>
          )}
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label={g.close}
            className="ml-2 flex size-10 cursor-pointer items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
          >
            <X className="size-5" />
          </button>
        </div>
      </dialog>
    </div>
  );
}
