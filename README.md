# excalidraw-nextjs

A Next.js app that hosts the [Excalidraw](https://github.com/excalidraw/excalidraw) whiteboard (`@excalidraw/excalidraw`) at the root route. Opening the app shows the full-screen Excalidraw editor.

- Excalidraw is rendered client-side only (dynamic import with `ssr: false`, see `app/page.tsx` and `app/excalidraw-wrapper.tsx`).
- Excalidraw's fonts are self-hosted, so the app makes no external requests. `scripts/copy-excalidraw-fonts.mjs` copies them from `node_modules` to `public/excalidraw-assets/fonts` on `npm install`, `npm run dev` and `npm run build`. This folder is generated and git-ignored.
- Drawings are not persisted on the server.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts: `npm run build` (production build), `npm start` (serve the build), `npm run lint`.

## Docker

The `Dockerfile` is a multi-stage build that produces a small image running the Next.js standalone server as a non-root user on port 3000.

### Build the image

```bash
docker build -t excalidraw-nextjs .
# or
npm run docker:build
```

### Run the image locally

```bash
docker run --rm -p 3000:3000 excalidraw-nextjs
# or
npm run docker:run
```

Open [http://localhost:3000](http://localhost:3000). To use a different host port, e.g. 8080: `-p 8080:3000`.

### Test the image

1. Check the page responds (expected: `200`):

   ```bash
   curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/
   ```

2. Open the app in a browser with the developer tools Network tab open, draw something, and use the text tool with different fonts. All requests should go to `localhost`, with none to a CDN.
