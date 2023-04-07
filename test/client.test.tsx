// Imports
// ========================================================
import React from 'react';
import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import DataURI from './DataURI';
import RenderSVG from './RenderSVG';
import { DATA_URI_BLANK } from './constants';

// Imports
// ========================================================
/**
 * 
 */
test('Test renderDataURI', async () => {
  render(<DataURI />);
  const dataURI = await screen.getByRole('image');
  expect(dataURI).toBeInTheDocument();
  expect(dataURI.getAttribute('src')).toBe(DATA_URI_BLANK);
});

/**
 * 
 */
test('Test renderSVGIcon', async () => {
  render(<RenderSVG />);
  const div = await screen.getByRole('container');
  expect(div.innerHTML).not.toBeUndefined();
});