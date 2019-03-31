<p align="center"><img src="https://storage.googleapis.com/time-to-coup-api/twitter_header_photo_2.png" alt="header image"></p>

[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/cfd1299c70da42249d9137a77add2478)](https://www.codacy.com/app/paxti/time-to-coup-app?utm_source=github.com&utm_medium=referral&utm_content=paxti/time-to-coup-app&utm_campaign=Badge_Grade)

# Time to Coup App

React-Native app to track history of Coup G54 games.

# ESLint rules

Notible rules

- `"no-unused-vars": ["error", { "argsIgnorePattern": "^_" }]`

# Prettier rules

```json
{
  "printWidth": 80,
  "singleQuote": true
}
```

# Install & Run

You can use `npm` or `yarn`, but i would suggest `yarn` :wink:. To run app use `react-native run-android` and `react-native run-ios`

# Assets

All graphics assets should be in `./img` at this point they are NOT a part of this repository, so you would have to add them manually. Please take a look at `./data/helper.js` to find a list of all used graphical assets.

# TODO

- Show all the cards :white_check_mark:
- Show set of cards for the current game
- Record/display historical data
- Create curated set of the cards
- Rate set of cards
- Record initial pair of cards
- Record results of the game
- Show scoreboard/statistics
- Ability to change groups

## 📄 License

MIT License
