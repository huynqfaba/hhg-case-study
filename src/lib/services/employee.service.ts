import { BaseApiService } from './base.service';
import { CreateEmployee } from 'types/employee';
import { ApiResponse } from 'types/api';

export class EmployeeAPIFactory extends BaseApiService {
  getEmployees(): Promise<ApiResponse> {
    return this.get(`/employee`);
  }

  createEmployee(data: CreateEmployee): Promise<ApiResponse> {
    return this.post(`/employee`, data);
  }
}

export const EmployeeService = new EmployeeAPIFactory();
