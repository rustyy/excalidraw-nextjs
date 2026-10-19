"use client";

import { Excalidraw } from "@excalidraw/excalidraw";
import "@excalidraw/excalidraw/index.css";

declare global {
    interface Window {
        EXCALIDRAW_ASSET_PATH?: string;
    }
}

// Fonts are copied to public/ by scripts/copy-excalidraw-fonts.mjs to avoid CDN requests.
window.EXCALIDRAW_ASSET_PATH = "/excalidraw-assets/";

export default function ExcalidrawWrapper() {
    return (
        <div style={{ height: "100vh", width: "100vw" }}>
            <Excalidraw />
        </div>
    );
}
