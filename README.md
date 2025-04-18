# TUF Layout Fixer

A Chrome extension that improves the layout of TakeUForward (takeuforward.org) by:

1. Removing the sidebar advertisement div
2. Restoring the main content width from 80% to 100%

## Installation

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the folder containing these files
5. The extension is now installed and will automatically work when you visit takeuforward.org

## How it works

The extension uses a content script that runs on the takeuforward.org website and:
- Removes the ad div with class `hidden lg:block overflow-hidden...`
- Changes the main content width from 80% back to 100%
- Uses a MutationObserver to ensure changes persist even with dynamic content loading

## Files included

- `manifest.json`: The extension configuration file
- `content.js`: The script that performs the layout modifications
- `icon48.png` and `icon128.png`: Icons for the extension
- `README.md`: This documentation file 