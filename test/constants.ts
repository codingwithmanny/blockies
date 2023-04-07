/**
 * 
 */
export const WALLET_ADDRESS = "0xB3f03B93F0bd65B960EE950d9aFC6867D461C33f";

/**
 * createImageData(8)
 */
export const CREATE_IMAGE_DATA = [
    0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1,
    0, 0, 1, 0, 0, 1, 0, 0, 2, 1, 0, 2,
    2, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1,
    1, 1, 1, 1
];

/**
 * randSeed(WALLET_ADDRESS)
 */
export const RAND_SEED_WALLET = [-3700215717, -114118408, 1947710848, -1490468369];

/**
 * seedRand(WALLET_ADDRESS);
 */
export const RAND = 0.2313743499107659;

/**
 * createColor()
 */
export const CREATE_COLOR_BLANK = 'hsl(318,73.38088956661522%,36.8747214670293%)';

/**
 * createColor(WALLET_ADDRESS)
 */
export const CREATE_COLOR_WALLET = 'hsl(83,93.09402352198958%,50.17194307874888%)';

/**
 * buildOpts({ seed: '' })
 */
export const BUILD_OPTS_SEED_BLANK = {
    seed: '',
    size: 8,
    scale: 4,
    color: 'hsl(0,67.01273723505437%,41.16388673428446%)',
    bgColor: 'hsl(311,75.71845741011202%,20.539576676674187%)',
    spotColor: 'hsl(144,53.29441200941801%,47.72090929327533%)'
};

/**
 * buildOpts({ seed: WALLET_ADDRESS, size: 10, scale: 6 });
 */
export const BUILD_OPTS_SEED_WALLET = {
    size: 10,
    scale: 6,
    color: 'hsl(0,40%,0%)',
    bgColor: 'hsl(0,40%,0%)',
    spotColor: 'hsl(0,40%,0%)'
};

/**
 * renderSVGIcon({ seed: '' })
 */
export const SVG_ICON_BLANK = '<svg width="32" height="32" viewBox="0 0 32 32" fill="hsl(8,71.20013291016221%,27.043361437972635%)" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" fill="hsl(8,71.20013291016221%,27.043361437972635%)" /></svg>';

/**
 * renderSVGIcon({ seed: WALLET_ADDRESS });
 */
export const SVG_ICON_WALLET = '<svg width="32" height="32" viewBox="0 0 32 32" fill="hsl(0,40%,0%)" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" fill="hsl(0,40%,0%)" /><rect x="4" y="0" width="4" height="4" fill="hsl(0,40%,0%)" /><rect x="8" y="0" width="4" height="4" fill="hsl(0,40%,0%)" /><rect x="12" y="0" width="4" height="4" fill="hsl(0,40%,0%)" /><rect x="16" y="0" width="4" height="4" fill="hsl(0,40%,0%)" /><rect x="20" y="0" width="4" height="4" fill="hsl(0,40%,0%)" /><rect x="24" y="0" width="4" height="4" fill="hsl(0,40%,0%)" /><rect x="0" y="4" width="4" height="4" fill="hsl(0,40%,0%)" /><rect x="12" y="4" width="4" height="4" fill="hsl(0,40%,0%)" /><rect x="16" y="4" width="4" height="4" fill="hsl(0,40%,0%)" /><rect x="28" y="4" width="4" height="4" fill="hsl(0,40%,0%)" /><rect x="0" y="8" width="4" height="4" fill="hsl(0,40%,0%)" /><rect x="28" y="8" width="4" height="4" fill="hsl(0,40%,0%)" /><rect x="8" y="12" width="4" height="4" fill="hsl(0,40%,0%)" /><rect x="20" y="12" width="4" height="4" fill="hsl(0,40%,0%)" /><rect x="0" y="16" width="4" height="4" fill="hsl(0,40%,0%)" /><rect x="28" y="16" width="4" height="4" fill="hsl(0,40%,0%)" /><rect x="0" y="20" width="4" height="4" fill="hsl(0,40%,0%)" /><rect x="8" y="20" width="4" height="4" fill="hsl(0,40%,0%)" /><rect x="12" y="20" width="4" height="4" fill="hsl(0,40%,0%)" /><rect x="16" y="20" width="4" height="4" fill="hsl(0,40%,0%)" /><rect x="20" y="20" width="4" height="4" fill="hsl(0,40%,0%)" /><rect x="28" y="20" width="4" height="4" fill="hsl(0,40%,0%)" /><rect x="4" y="24" width="4" height="4" fill="hsl(0,40%,0%)" /><rect x="24" y="24" width="4" height="4" fill="hsl(0,40%,0%)" /><rect x="12" y="28" width="4" height="4" fill="hsl(0,40%,0%)" /><rect x="16" y="28" width="4" height="4" fill="hsl(0,40%,0%)" /></svg>';

/**
 * renderDataURI({ seed: '' })
 */
export const DATA_URI_BLANK = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0iaHNsKDAsNjcuMDEyNzM3MjM1MDU0MzclLDQxLjE2Mzg4NjczNDI4NDQ2JSkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJoc2woMCw2Ny4wMTI3MzcyMzUwNTQzNyUsNDEuMTYzODg2NzM0Mjg0NDYlKSIgLz48L3N2Zz4=';

/**
 * renderDataURI({ seed: WALLET_ADDRESS })
 */
export const DATA_URI_WALLET = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0iaHNsKDAsNDAlLDAlKSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9ImhzbCgwLDQwJSwwJSkiIC8+PHJlY3QgeD0iNCIgeT0iMCIgd2lkdGg9IjQiIGhlaWdodD0iNCIgZmlsbD0iaHNsKDAsNDAlLDAlKSIgLz48cmVjdCB4PSI4IiB5PSIwIiB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJoc2woMCw0MCUsMCUpIiAvPjxyZWN0IHg9IjEyIiB5PSIwIiB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJoc2woMCw0MCUsMCUpIiAvPjxyZWN0IHg9IjE2IiB5PSIwIiB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJoc2woMCw0MCUsMCUpIiAvPjxyZWN0IHg9IjIwIiB5PSIwIiB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJoc2woMCw0MCUsMCUpIiAvPjxyZWN0IHg9IjI0IiB5PSIwIiB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJoc2woMCw0MCUsMCUpIiAvPjxyZWN0IHg9IjAiIHk9IjQiIHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9ImhzbCgwLDQwJSwwJSkiIC8+PHJlY3QgeD0iMTIiIHk9IjQiIHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9ImhzbCgwLDQwJSwwJSkiIC8+PHJlY3QgeD0iMTYiIHk9IjQiIHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9ImhzbCgwLDQwJSwwJSkiIC8+PHJlY3QgeD0iMjgiIHk9IjQiIHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9ImhzbCgwLDQwJSwwJSkiIC8+PHJlY3QgeD0iMCIgeT0iOCIgd2lkdGg9IjQiIGhlaWdodD0iNCIgZmlsbD0iaHNsKDAsNDAlLDAlKSIgLz48cmVjdCB4PSIyOCIgeT0iOCIgd2lkdGg9IjQiIGhlaWdodD0iNCIgZmlsbD0iaHNsKDAsNDAlLDAlKSIgLz48cmVjdCB4PSI4IiB5PSIxMiIgd2lkdGg9IjQiIGhlaWdodD0iNCIgZmlsbD0iaHNsKDAsNDAlLDAlKSIgLz48cmVjdCB4PSIyMCIgeT0iMTIiIHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9ImhzbCgwLDQwJSwwJSkiIC8+PHJlY3QgeD0iMCIgeT0iMTYiIHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9ImhzbCgwLDQwJSwwJSkiIC8+PHJlY3QgeD0iMjgiIHk9IjE2IiB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJoc2woMCw0MCUsMCUpIiAvPjxyZWN0IHg9IjAiIHk9IjIwIiB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJoc2woMCw0MCUsMCUpIiAvPjxyZWN0IHg9IjgiIHk9IjIwIiB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJoc2woMCw0MCUsMCUpIiAvPjxyZWN0IHg9IjEyIiB5PSIyMCIgd2lkdGg9IjQiIGhlaWdodD0iNCIgZmlsbD0iaHNsKDAsNDAlLDAlKSIgLz48cmVjdCB4PSIxNiIgeT0iMjAiIHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9ImhzbCgwLDQwJSwwJSkiIC8+PHJlY3QgeD0iMjAiIHk9IjIwIiB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJoc2woMCw0MCUsMCUpIiAvPjxyZWN0IHg9IjI4IiB5PSIyMCIgd2lkdGg9IjQiIGhlaWdodD0iNCIgZmlsbD0iaHNsKDAsNDAlLDAlKSIgLz48cmVjdCB4PSI0IiB5PSIyNCIgd2lkdGg9IjQiIGhlaWdodD0iNCIgZmlsbD0iaHNsKDAsNDAlLDAlKSIgLz48cmVjdCB4PSIyNCIgeT0iMjQiIHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9ImhzbCgwLDQwJSwwJSkiIC8+PHJlY3QgeD0iMTIiIHk9IjI4IiB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJoc2woMCw0MCUsMCUpIiAvPjxyZWN0IHg9IjE2IiB5PSIyOCIgd2lkdGg9IjQiIGhlaWdodD0iNCIgZmlsbD0iaHNsKDAsNDAlLDAlKSIgLz48L3N2Zz4=';