/**
 *
 * Asynchronously loads the component for Counter
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Counter = lazyLoad(
  () => import('./index'),
  module => module.Counter,
);
