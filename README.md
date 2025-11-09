# playwright-screenshot-issue

Exploring the Playwright screenshot issue.

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
