# Bear Market Coin

A responsive, single-page BMC website with the supplied bear artwork, red accent lighting, animated ticker, scroll reveals, reduced-motion support, and accessible FAQ disclosures. Static HTML, CSS, and JavaScript; no build dependencies.

## Preview

Run `python3 -m http.server 4173` from this directory, then open http://localhost:4173.

## Deploy on Vercel

Import `Dev-builder-tech/bear-market` into Vercel. Select **Other** as the framework preset, keep the root directory at the repository root, leave the build command empty, and use `.` for the output directory. No environment variables are required.

## Launch updates

The contract address is intentionally empty. Set `CONTRACT_ADDRESS` in `script.js` to the verified Solana address after deployment; this enables the copy button. Update the pre-launch text in `index.html`, including the hero status, token details, launch section, FAQ, and metadata when launch details are confirmed. Add verified social links and tokenomics only when available.

## Assets and fonts

The user-supplied logo is in `assets/bear-market.png`. Google Fonts supplies Barlow Condensed and DM Sans, with local fallbacks if unavailable.
