"use client";
import { CacheProviderI } from "@/interface";
import { createEmotionCache } from "@/utils";
import { CacheProvider } from "@emotion/react";

export function EmotionCacheProvider({ children }: CacheProviderI) {
  const clientSideEmotionCache = createEmotionCache();

  return (
    <CacheProvider value={clientSideEmotionCache}>{children}</CacheProvider>
  );
}
