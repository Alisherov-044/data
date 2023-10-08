import { usePathname } from "next/navigation";

export function usePath() {
  const pathname = usePathname();

  function checkPath(path: string) {
    return pathname === path;
  }

  return { pathname, checkPath };
}
