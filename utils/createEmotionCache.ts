"use client";
import createCache from "@emotion/cache";

export function createEmotionCache() {
  let insertionPoint = document
    ? document.querySelector<HTMLMetaElement>(
        'meta[name="emotion-insertion-point"]'
      ) || undefined
    : undefined;

  return createCache({ key: "mui-style", insertionPoint });
}
