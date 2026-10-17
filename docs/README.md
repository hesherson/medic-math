# Medic Math, installable app

This folder is a complete Progressive Web App. Host it on any static web host over HTTPS and it installs on iPhone, iPad, Android and desktop, and runs offline after the first load.

## Host it (pick one)

**GitHub Pages**
1. Create a repository, for example `medic-math`.
2. Upload every file in this folder to the repository root (index.html, manifest.json, sw.js, icons/).
3. Settings, Pages, Source: Deploy from branch, main, root. Save.
4. Open `https://<your-user>.github.io/medic-math/`.

**Netlify or Cloudflare Pages**
Drag this folder onto the deploy page. Done.

**Your own server**
Copy the folder anywhere under an HTTPS site. The paths are relative, so a subfolder works.

## Install it

- iPhone and iPad: open the link in Safari, Share, Add to Home Screen.
- Android: open in Chrome, tap Install in the app (Settings tab) or the browser menu, Install app.
- Desktop: the install icon appears in the address bar.

## Update it

Replace index.html (and sw.js, which carries a build stamp). Installed copies pick up the new version the next time they open with a connection.

## Notes

- Progress lives on the device. Settings, Backup exports a JSON you can import on another phone.
- Printing (practice tests, lane cards) works from the installed app or a browser tab.
- Everything is standard published ranges and the WVFD profile set. Verify against your protocol.
