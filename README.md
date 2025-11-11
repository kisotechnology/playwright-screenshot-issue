# playwright-screenshot-issues

`>> Playwright version: 1.56.1 (latest)`


We use Playwright for our browser automation agent, but we frequently encounter an issue where the screenshots captured by Playwright differ from what is actually rendered in Chromium. This discrepancy is especially noticeable when working with dropdown menus. Please see the screenshots below for examples.

On Mac, there are two issues:

1. When the page is opened via Playwright, the dropdown does not render correctly.
2. When Playwright takes a screenshot, the dropdown items are not captured.

On Windows 11, the dropdown menu renders correctly in Chromium when opend via playwright, however the `page.screenshot()` halts and the rendering looks strange after the freeze (see screenshot)





This issue exists on Mac, Windows and Ubuntu Linux (we have not examined other Linux distros)

# Issue reporocuded on Mac OS 

**The correct rendering of the page**

<img src="images/correct.png" alt="drawing" width="500"/>

**What we see on the screen when playwright opens the page in Chromium**

<img src="images/screenshot-mac.png" alt="drawing" width="500"/>

**What playwright captures**

<img src="images/screenshot-playwright.png" width="500"/>

# Issue on Windows 11
On windows 11 the following line `

```javascript
  await page.screenshot({ path: 'screenshot.png', fullPage: true });
```


 halts and freezes the Chromium rendering and the following is what we see after that line
<img src="images/windows-11-freeze.png" width="500"/>

we get a timeout 

```bash
❯ node scripts/capture-dropdown.js
Failed to capture dropdown screenshot: page.screenshot: Timeout 30000ms exceeded.
Call log:
  - taking page screenshot
  - waiting for fonts to load...
  - fonts loaded

    at C:\...\scripts\capture-dropdown.js:21:14 {
  name: 'TimeoutError'
}

```
Please note that the page looks file in Chrome and Chromium before that line 

<img src="images/windows-11-correct.png" width="500"/>

## Steps to reproduce

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Setup

Install the dependencies and Playwright browsers:

```bash
npm install
npx playwright install
```

## Capture the dropdown screenshot

1. Serve the static `single-drop-down.html` file:

   ```bash
   python -m http.server 8000
   ```
   Keep this server running while you execute the script.
2. In a new terminal, run the Playwright script:

   ```bash
   node scripts/capture-dropdown.js
   ```
   The script prints the installed Playwright version and the absolute path to the generated screenshot (saved in the `screenshots` directory).
