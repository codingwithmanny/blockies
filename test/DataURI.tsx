// Imports
// ========================================================
import React from 'react';
import { renderDataURI } from '../dist'

// Component
// ========================================================
const DataURI = () => {
    return <div>
        <img role="image" src={`${renderDataURI({ seed: '' })}`} />
    </div>;
};

// Exports
// ========================================================
export default DataURI;