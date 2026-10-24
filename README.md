# adanaps.com

The studio's website: a plain static site, no build step.

- `/` the studio
- `/overpower/` the game's page
- `/overpower/privacy/` its privacy policy (the URL given to the Play Store)
- `/cargame/privacy/` Car Game's privacy policy (the URL given to the Play Store)

Every page holds its text in English and French (`.l-en` / `.l-fr`); `assets/site.js` shows
one, from the visitor's browser or the EN/FR buttons.

Published with GitHub Pages from the `main` branch, on the domain in `CNAME`.

Preview locally:

    python3 -m http.server 8070
