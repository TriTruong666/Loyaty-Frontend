"use client"; // ✅ Ensure this is a Client Component
import { useTheme } from "@/hooks/useTheme";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useTheme(); // ✅ Now safe because we check for `window` in `useTheme`

  return <>{children}</>;
}
