// Imports
// ========================================================
import React from 'react';
import { renderSVGIcon } from '../dist'

// Component
// ========================================================
const RenderSVG = () => {
    return <div>
        <div role="container">{renderSVGIcon({ seed: '' })}</div>
    </div>;
};

// Exports
// ========================================================
export default RenderSVG;