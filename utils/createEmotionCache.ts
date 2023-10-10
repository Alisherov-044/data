"use client";
import createCache from "@emotion/cache";

export function createEmotionCache() {
  let insertionPoint;

  const emotionInsertionPoint = document.querySelector<HTMLMetaElement>(
    'meta[name="emotion-insertion-point"]'
  );
  insertionPoint = emotionInsertionPoint ?? undefined;

  return createCache({ key: "mui-style", insertionPoint });
}
