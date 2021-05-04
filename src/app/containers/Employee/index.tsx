/**
 *
 * Employee
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectEmployee } from './selectors';
import { employeeSaga } from './saga';

interface Props {}

export function Employee(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: employeeSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const employee = useSelector(selectEmployee);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>Employee</title>
        <meta name="description" content="Description of Employee" />
      </Helmet>
      <div></div>
    </>
  );
}
