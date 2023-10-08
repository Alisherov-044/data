"use client";
import createCache from "@emotion/cache";

export function createEmotionCache() {
  let insertionPoint =
    document.querySelector<HTMLMetaElement>(
      'meta[name="emotion-insertion-point"]'
    ) || undefined;

  return createCache({ key: "mui-style", insertionPoint });
}
