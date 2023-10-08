"use client";
import { CacheProviderI } from "@/interface";
import { createEmotionCache } from "@/utils";
import { CacheProvider as EmotionCacheProvider } from "@emotion/react";

const clientSideEmotionCache = createEmotionCache();

export function CacheProvider({ children }: CacheProviderI) {
  return (
    <EmotionCacheProvider value={clientSideEmotionCache}>
      {children}
    </EmotionCacheProvider>
  );
}
