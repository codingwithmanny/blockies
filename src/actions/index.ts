// Imports
// ========================================================
import type { RenderIconOpts } from '../types';

// Main Functions
// ========================================================
/**
 * The random number is a js implementation of the Xorshift PRNG
 */
export const randSeed = new Array(4); // Xorshift: [x, y, z, w] 32 bit values

/**
 * 
 * @param seed 
 */
export const seedRand = (seed: string) => {
	randSeed.fill(0);

	for (let i = 0; i < seed.length; i++) {
		randSeed[i%4] = ((randSeed[i%4] << 5) - randSeed[i%4]) + seed.charCodeAt(i);
	}
};

/**
 * 
 * @returns 
 */
export const rand = () => {
	// based on Java's String.hashCode(), expanded to 4 32bit values
	const t = randSeed[0] ^ (randSeed[0] << 11);

	randSeed[0] = randSeed[1];
	randSeed[1] = randSeed[2];
	randSeed[2] = randSeed[3];
	randSeed[3] = (randSeed[3] ^ (randSeed[3] >> 19) ^ t ^ (t >> 8));

	return (randSeed[3] >>> 0) / ((1 << 31) >>> 0);
};

/**
 * 
 */
export const createColor = (): `hsl(${string},${string},${string})` => {
	//saturation is the whole color spectrum
	const h = Math.floor(rand() * 360);
	//saturation goes from 40 to 100, it avoids greyish colors
	const s = ((rand() * 60) + 40) + '%';
	//lightness can be anything from 0 to 100, but probabilities are a bell curve around 50%
	const l = ((rand() + rand() + rand() + rand()) * 25) + '%';
	return `hsl(${h},${s},${l})`;
};

/**
 * 
 * @param size 
 * @returns 
 */
export const createImageData = (size: number) => {
	const width = size; // Only support square icons for now
	const height = size;

	const dataWidth = Math.ceil(width / 2);
	const mirrorWidth = width - dataWidth;

	const data: Array<number> = [];
	for(let y = 0; y < height; y++) {
		let row: Array<number> = [];
		for(let x = 0; x < dataWidth; x++) {
			// this makes foreground and background color to have a 43% (1/2.3) probability
			// spot color has 13% chance
			row[x] = Math.floor(rand()*2.3);
		}
		const r = row.slice(0, mirrorWidth);
		r.reverse();
		row = row.concat(r);

		for(let i = 0; i < row.length; i++) {
			data.push(row[i]);
		}
	}

	return data;
};

/**
 * 
 * @param opts 
 * @returns 
 */
export const buildOpts = (opts: RenderIconOpts) => {
	const newOpts: RenderIconOpts = {
        seed: "",
        size: opts?.size ?? 8,
        scale: opts?.scale ?? 4,
        color: opts?.color ?? createColor(),
        bgColor: opts?.bgColor ?? createColor(),
        spotColor: opts?.spotColor ?? createColor()
    };

	newOpts.seed = opts?.seed ?? Math.floor((Math.random()*Math.pow(10,16))).toString(16);
	seedRand(newOpts.seed);
	return newOpts as {
        size: number; 
        scale: number; 
        color: `#${string}` | `hsl(${string},${string},${string})`;
        bgColor: `#${string}` | `hsl(${string},${string},${string})`;
        spotColor: `#${string}` | `hsl(${string},${string},${string})`;
    };
};

/**
 * 
 * @param param0 
 * @returns 
 */
export const renderSVGIcon = async (opts: RenderIconOpts) => {
	const newOpts = buildOpts(opts);
	const imageData = createImageData(newOpts.size);
	const width = Math.sqrt(imageData.length);
	const svgWidth = newOpts.size * newOpts.scale;
	const svgHeight = svgWidth;
    
    let svg = `<svg width="${svgWidth}" height="${svgHeight}" viewBox="0 0 ${svgWidth} ${svgHeight}" fill="${newOpts.bgColor}" xmlns="http://www.w3.org/2000/svg"><rect width="${svgWidth}" height="${svgHeight}" fill="${newOpts.bgColor}" />`;

	for await (const [i, _data] of imageData.entries()) {
		// if data is 0, leave the background
		if(imageData[i]) {
			const row = Math.floor(i / width);
			const col = i % width;

			// if data is 2, choose spot color, if 1 choose foreground
			const fill = (imageData[i] == 1) ? newOpts.color : newOpts.spotColor;

			svg += `<rect x="${col * newOpts.scale}" y="${row * newOpts.scale}" width="${newOpts.scale}" height="${newOpts.scale}" fill="${fill}" />`;
		}
	}

	svg += '</svg>';
    return svg;
};

/**
 * 
 * @param opts 
 */
export const renderDataURI = async (opts: RenderIconOpts) => {
	return `data:image/svg+xml;base64,${Buffer.from(await renderSVGIcon(opts)).toString('base64')}`;
};