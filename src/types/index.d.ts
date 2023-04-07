export interface RenderIconOpts {
    seed: string;
    color?: `#${string}` | `hsl(${string},${string},${string})`;
    bgColor?: `#${string}` | `hsl(${string},${string},${string})`;
    spotColor?: `#${string}` | `hsl(${string},${string},${string})`;
    size?: number;
    scale?: number;
}