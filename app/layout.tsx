import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Excalidraw",
  description: "Excalidraw hosted in Next.js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
