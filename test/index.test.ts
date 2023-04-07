// Imports
// ========================================================
import assert from 'node:assert';
import test from 'node:test';
import { WALLET_ADDRESS, CREATE_IMAGE_DATA, RAND_SEED_WALLET, RAND, CREATE_COLOR_BLANK, CREATE_COLOR_WALLET, BUILD_OPTS_SEED_BLANK, BUILD_OPTS_SEED_WALLET, SVG_ICON_BLANK, SVG_ICON_WALLET, DATA_URI_BLANK, DATA_URI_WALLET } from './constants';

// Testing
import { randSeed, seedRand, rand, createColor, createImageData, buildOpts, renderSVGIcon, renderDataURI } from '../dist';

// Tests
// ========================================================
/**
 * randSeed
 */
test('randSeed', async (subTest) => {
    /**
     * 
     */
    await subTest.test('isArray', () => {
        assert(Array.isArray(randSeed));
    });

    /**
     * 
     */
    await subTest.test('length = 4', () => {
        assert(randSeed.length === 4);
    });
});

/**
 * seedRand
 */
test('seedRand', async (subTest) => {
    /**
     * 
     */
    await subTest.test('blank', () => {
        seedRand('');
        assert(randSeed[0] === 0);
        assert(randSeed[1] === 0);
        assert(randSeed[2] === 0);
        assert(randSeed[3] === 0);
    });

    /**
     * 
     */
    await subTest.test(`${WALLET_ADDRESS}`, () => {
        seedRand(WALLET_ADDRESS);
        assert(randSeed[0] === RAND_SEED_WALLET[0]);
        assert(randSeed[1] === RAND_SEED_WALLET[1]);
        assert(randSeed[2] === RAND_SEED_WALLET[2]);
        assert(randSeed[3] === RAND_SEED_WALLET[3]);
    });
});

/**
 * rand
 */
test('rand', async (subTest) => {
    /**
     * 
     */
    await subTest.test('blank', () => {
        seedRand('');
        assert(rand() === 0);
    });

    /**
     * 
     */
    await subTest.test(`${WALLET_ADDRESS}`, () => {
        seedRand(WALLET_ADDRESS);
        assert(rand() === RAND);
    });
});

/**
 * createColor
 */
test('createColor', async (subTest) => {
    /**
     * 
     */
    await subTest.test('blank', () => {
        assert(createColor() === CREATE_COLOR_BLANK);
    });

    /**
     * 
     */
    await subTest.test(`${WALLET_ADDRESS}`, () => {
        seedRand(WALLET_ADDRESS);
        assert(createColor() === CREATE_COLOR_WALLET);
    });
});

/**
 * createImageData
 */
test('createImageData', async (subTest) => {
    /**
     * 
     */
    await subTest.test('zero (0)', () => {
        assert(createImageData(0).length === 0);
    });

    /**
     * 
     */
    await subTest.test('eight (8)', () => {
        const result = createImageData(8);
        assert(result.length === CREATE_IMAGE_DATA.length && result.every((value, index) => value === CREATE_IMAGE_DATA[index]));
    });
});

/**
 * buildOpts
 */
test('buildOpts', async (subTest) => {
    /**
     * 
     */
    await subTest.test('blank', () => {
        const result = buildOpts({ seed: '' });
        assert(result.size === BUILD_OPTS_SEED_BLANK.size);
        assert(result.scale === BUILD_OPTS_SEED_BLANK.scale);
        assert(result.color === BUILD_OPTS_SEED_BLANK.color);
        assert(result.bgColor === BUILD_OPTS_SEED_BLANK.bgColor);
        assert(result.spotColor === BUILD_OPTS_SEED_BLANK.spotColor);
    });

    /**
     * 
     */
    await subTest.test(`${WALLET_ADDRESS}`, () => {
        const result = buildOpts({ seed: WALLET_ADDRESS, size: 10, scale: 6 });
        assert(result.size === BUILD_OPTS_SEED_WALLET.size);
        assert(result.scale === BUILD_OPTS_SEED_WALLET.scale);
        assert(result.color === BUILD_OPTS_SEED_WALLET.color);
        assert(result.bgColor === BUILD_OPTS_SEED_WALLET.bgColor);
        assert(result.spotColor === BUILD_OPTS_SEED_WALLET.spotColor);
    });
});

/**
 * renderSVGIcon
 */
test('renderSVGIcon', async (subTest) => {
    /**
     * 
     */
    await subTest.test('blank', () => {
        const result = renderSVGIcon({ seed: '' });
        assert(result === SVG_ICON_BLANK);
    });
    
    /**
     * 
    */
   await subTest.test(`${WALLET_ADDRESS}`, () => {
       const result = renderSVGIcon({ seed: WALLET_ADDRESS });
        assert(result === SVG_ICON_WALLET);
    });
});

/**
 * renderDataURI
 */
test('renderDataURI', async (subTest) => {
    /**
     * 
     */
    await subTest.test('blank', () => {
        const result = renderDataURI({ seed: '' });
        assert(result === DATA_URI_BLANK);
    });
    
    /**
     * 
    */
   await subTest.test(`${WALLET_ADDRESS}`, () => {
       const result = renderDataURI({ seed: WALLET_ADDRESS });
        assert(result === DATA_URI_WALLET);
    });
});