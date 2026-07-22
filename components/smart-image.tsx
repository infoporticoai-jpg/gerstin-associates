"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Image loader built for a drag-and-drop workflow.
 * - Fades in once the file loads.
 * - If the file is missing (404) it renders `fallback` instead — or nothing,
 *   revealing the parent background — so the layout never looks broken.
 * - Because it references a plain public path, dropping a PNG into /public
 *   makes it appear with no code changes.
 *
 * For a full-bleed background layer, pass
 *   className="absolute inset-0 size-full object-cover".
 * For a contained portrait, pass className="size-full object-cover".
 */
export function SmartImage({
  src,
  alt,
  className,
  fallback = null,
  priority = false,
  objectPosition,
  onStatus,
}: {
  src: string;
  alt: string;
  className?: string;
  fallback?: React.ReactNode;
  priority?: boolean;
  objectPosition?: string;
  onStatus?: (loaded: boolean) => void;
}) {
  const ref = React.useRef<HTMLImageElement>(null);
  const [status, setStatus] = React.useState<"loading" | "loaded" | "error">(
    "loading",
  );

  // The image may finish loading (e.g. from cache) before React hydrates and
  // attaches onLoad. Reconcile against the actual element state on mount.
  React.useEffect(() => {
    const img = ref.current;
    if (!img) return;
    if (img.complete) {
      const ok = img.naturalWidth > 0;
      setStatus(ok ? "loaded" : "error");
      onStatus?.(ok);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  if (status === "error") return <>{fallback}</>;

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onLoad={() => {
        setStatus("loaded");
        onStatus?.(true);
      }}
      onError={() => {
        setStatus("error");
        onStatus?.(false);
      }}
      style={{
        opacity: status === "loaded" ? 1 : 0,
        ...(objectPosition ? { objectPosition } : {}),
      }}
      className={cn("transition-opacity duration-700 ease-out", className)}
    />
  );
}
