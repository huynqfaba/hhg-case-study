/**
 *
 * Asynchronously loads the component for Employee
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Employee = lazyLoad(
  () => import('./index'),
  module => module.Employee,
);
