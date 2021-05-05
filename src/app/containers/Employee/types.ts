/* --- STATE --- */
import { Employee } from 'types/employee';

export interface EmployeeState {
  loading: boolean;
  listEmployees: Employee[];
  createEmployeeResult: Employee | null;
  error: string;
}

export type ContainerState = EmployeeState;
