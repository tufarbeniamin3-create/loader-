TEXTURE LOADER - desktop app

EASIEST: double-click BUILD_EXE.bat (needs Node.js), your .exe will be in the dist folder.

RUN IT
1. Install Node.js (https://nodejs.org)
2. Open a terminal in this folder
3. npm install
4. npm start

MAKE A .EXE (Windows portable)
   npm run build
The exe appears in the "dist" folder.

HOW IT WORKS
- Pick a game. Minecraft auto-targets its resourcepacks folder.
- For other games click CHANGE and choose the folder once (it is remembered per game).
- Drop any files in, then press LOAD to copy them into that folder.

NO POWERFUL PC? BUILD ON GITHUB (FREE)
1. Make a free account at github.com and create a new repository.
2. Upload ALL files in this folder (including the .github folder).
3. Open the "Actions" tab and wait ~3 minutes for "Build EXE" to finish.
4. Click the finished run and download "TextureLoader-exe" at the bottom. Unzip it to get your .exe.

ROBLOX
- ROBLOX is selected by default. If Bloxstrap is installed, the app targets
  %LOCALAPPDATA%\Bloxstrap\Modifications automatically. Otherwise press CHANGE.
- Roblox has no official texture pack system and may block modified clients. Use at your own risk.

WINDOWS 10 APP - 3 TABS
- TEXTURE LOADER: pick a game, drop files, LOAD copies them to the install folder.
- CONSOLE: the HOLLOW-80 console toy (newest version, with the hero and dev commands).
- GAME LOADER: the custom game loading-screen maker.
Works on Windows 10 and 11 (64-bit). Fonts in the Console and Game Loader tabs load from the internet; offline they use a fallback font.

FISHSTRAP: if Fishstrap is installed, ROBLOX targets its Modifications folder (checked first, then Bloxstrap).
If the folder is wrong, press CHANGE once and pick the right one.
