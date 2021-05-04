import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.counter || initialState;

export const selectCounter = createSelector(
  [selectDomain],
  counterState => counterState,
);
