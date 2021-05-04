/**
 *
 * Counter
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectCounter } from './selectors';
import { counterSaga } from './saga';

interface Props {}

export function Counter(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: counterSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const counter = useSelector(selectCounter);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>Counter</title>
        <meta name="description" content="Description of Counter" />
      </Helmet>
      <div></div>
    </>
  );
}
