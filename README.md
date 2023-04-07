# Blockies TypeScript SVG DataURI Library

An TypeScript inspired repository from the original [@download/blockies](https://github.com/download13/blockies).

---

## Getting Start

```bash
# FROM: ./path/to/project

npm install @codingwithmanny/blockies; # pnpm add @codingwithmanny/blockies
```

###  Node

```ts
// Imports
// ========================================================
import { renderSVGIcon } from '@codingwithmanny/blockies';

// Main Script
// ========================================================
(async () => {
    const svg = await renderSVGIcon({ seed: '0xB3f03B93F0bd65B960EE950d9aFC6867D461C33f' });
    console.log({ svg });
    // '<svg width="32" height="32" viewBox="0 0 32 32" fill="hsl(0,40%,0%)"...'
})();
```

### NextJS

```tsx
// Imports
// ========================================================
import { type NextPage } from "next";
import { renderSVGIcon, renderDataURI } from '@codingwithmanny/blockies';

// Constants
// ========================================================
const WALLET_ADDRESS = '0xB3f03B93F0bd65B960EE950d9aFC6867D461C33f';

// Page Component
// ========================================================
const Home: NextPage = () => {
    return <div>
        {/* SVG */}
        {renderSVGIcon({ seed: WALLET_ADDRESS })}

        {/* Date URI */}
        <img src={renderDataURI({ seed: WALLET_ADDRESS })} />
    </div>
};
```

---

## Building

If cloning the repository.

```bash
# FROM: ./

pnpm build;

# Expected Output:
# > @cwm/blockies@1.0.0 build /Users/username/path/to/blockies-ts
# > tsup
# 
# CLI Building entry: src/index.ts
# CLI Using tsconfig: tsconfig.json
# CLI tsup v6.7.0
# CLI Using tsup config: /Users/username/path/to/blockies-ts/tsup.config.ts
# CLI Target: es2016
# CLI Cleaning output folder
# CJS Build start
# CJS dist/index.js     5.55 KB
# CJS dist/index.js.map 7.08 KB
# CJS ⚡️ Build success in 6ms
# DTS Build start
# DTS ⚡️ Build success in 520ms
# DTS dist/index.d.ts 1.33 KB
```

---

## Testing

If cloning the repository.

```bash
# FROM: ./

pnpm test;

# Expected Output:
# Expected Output:
# > @cwm/blockies@1.0.0 build /Users/username/path/to/blockies-ts
# > tsup
# 
# CLI Building entry: src/index.ts
# CLI Using tsconfig: tsconfig.json
# CLI tsup v6.7.0
# CLI Using tsup config: /Users/username/path/to/blockies-ts/tsup.config.ts
# CLI Target: es2016
# CLI Cleaning output folder
# CJS Build start
# CJS dist/index.js     5.55 KB
# CJS dist/index.js.map 7.08 KB
# CJS ⚡️ Build success in 6ms
# DTS Build start
# DTS ⚡️ Build success in 520ms
# DTS dist/index.d.ts 1.33 KB
# TAP version 13
# # Subtest: randSeed
#     # Subtest: isArray
#     ok 1 - isArray
#       ---
#       duration_ms: 0.306875
#       ...
#     # Subtest: length = 4
#     ok 2 - length = 4
#       ---
#       duration_ms: 0.040875
#       ...
#     1..2
# ...
# 1..8
# # tests 8
# # pass 8
# # fail 0
# # cancelled 0
# # skipped 0
# # todo 0
# # duration_ms 11.698916
```


