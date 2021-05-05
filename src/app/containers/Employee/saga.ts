import { call, put, takeLatest } from 'redux-saga/effects';

import { actions } from './slice';
import { EmployeeService } from 'lib/services/employee.service';

export function* getEmployees() {
  try {
    const sessionResponse = yield call([
      EmployeeService,
      EmployeeService.getEmployees,
    ]);
    const { data } = sessionResponse;
    yield put(actions.getEmployeesSuccess(data));
  } catch (err) {
    yield put(actions.getError(err.message));
  }
}

export function* createEmployee(action) {
  const infoCreateEmployee = action.payload;

  try {
    const sessionResponse = yield call(
      [EmployeeService, EmployeeService.createEmployee],
      infoCreateEmployee,
    );

    const { data } = sessionResponse;
    yield put(actions.createEmployeeSuccess(data));
  } catch (err) {
    yield put(actions.getError(err.message));
  }
}

export function* employeeSaga() {
  yield takeLatest(actions.getEmployees.type, getEmployees);
  yield takeLatest(actions.createEmployee.type, createEmployee);
}
