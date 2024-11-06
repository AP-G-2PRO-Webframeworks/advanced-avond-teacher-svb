npx create-expo-app -t expo-template-typescript-router example

npx expo install nativewind tailwindcss react-native-reanimated react-native-safe-area-context

npx expo customize metro.config.js

npx tailwindcss init

 -> in tailwind.config.js
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

maak een bestand "global.css" aan in de project folder (NIET de app folder)

-> global.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

-> babel.config.js

```
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
```

-> metro.config.js

```
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "./global.css" });
```

-> app/_layout.js

```
// Import your global CSS file
import "../global.css";

...
```

maak een bestand "nativewind-env.d.ts" aan in de project folder (NIET de app folder)

-> nativewind-env.d.ts
```
/// <reference types="nativewind/types" />
```