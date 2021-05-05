import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';
import { CreateEmployee, Employee } from 'types/employee';

// The initial state of the Employee container
export const initialState: ContainerState = {
  loading: false,
  listEmployees: [],
  createEmployeeResult: null,
  error: '',
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    getEmployees(state) {
      state.loading = true;
    },
    getEmployeesSuccess(state, action: PayloadAction<Employee[]>) {
      state.loading = false;
      state.listEmployees = action.payload;
    },
    createEmployee(state, action: PayloadAction<CreateEmployee>) {},
    createEmployeeSuccess(state, action: PayloadAction<Employee>) {
      state.listEmployees.push(action.payload);
      state.createEmployeeResult = action.payload;
    },
    getError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    resetStateResult(state) {
      state.error = initialState.error;
      state.createEmployeeResult = initialState.createEmployeeResult;
    },
    resetState(state) {
      return { ...initialState };
    },
  },
});

export const { actions, reducer, name: sliceKey } = employeeSlice;
