"use client";

import dynamic from "next/dynamic";

// Excalidraw relies on browser APIs, so it must not render on the server.
const ExcalidrawWrapper = dynamic(() => import("./excalidraw-wrapper"), {
  ssr: false,
});

export default function Home() {
  return <ExcalidrawWrapper />;
}
