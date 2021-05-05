/**
 *
 * Employee
 *
 */

import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { actions, reducer, sliceKey } from './slice';
import { selectEmployee } from './selectors';
import { employeeSaga } from './saga';
import { Button, Flex, Link, Table } from 'app/components';
import { TableInfo } from 'types/table';
import { CreateEmployeeModal } from './components/CreateEmployeeModal';

const tableInfo: TableInfo = {
  tableName: 'employees',
  columns: [
    {
      id: 'name',
      label: 'name',
    },
    {
      id: 'email',
      label: 'email',
    },
    {
      id: 'position',
      label: 'position',
    },
  ],
};

export function Employee() {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: employeeSaga });

  const { listEmployees, createEmployeeResult, error } = useSelector(
    selectEmployee,
  );
  const dispatch = useDispatch();
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    dispatch(actions.getEmployees());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (createEmployeeResult) {
      setIsOpenModal(false);
      toast.success('New employee have been created.');
      dispatch(actions.resetStateResult());
    }

    if (error) {
      toast.error(error);
      dispatch(actions.resetStateResult());
    }
  }, [createEmployeeResult, dispatch, error]);

  const data = React.useMemo(
    () =>
      listEmployees.map(employee => {
        return {
          name: employee.name,
          email: employee.email,
          position: employee.position,
        };
      }),
    [listEmployees],
  );

  return (
    <div className="container-fluid mt-3">
      <Helmet>
        <title>Employee</title>
        <meta name="description" content="Description of Employee" />
      </Helmet>
      <Flex alignItems="center" justifyContent="space-between">
        <Link to="/" color="primaryBlue" fontWeight="bold">
          Return back
        </Link>
        <Button bg="primaryBlue" onClick={() => setIsOpenModal(true)}>
          New
        </Button>
      </Flex>
      <Table tableInfo={tableInfo} data={data} />
      <CreateEmployeeModal
        visible={isOpenModal}
        handleClose={() => setIsOpenModal(false)}
      />
    </div>
  );
}
