import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeDataInterface {
  id?: string;
  address: string;
  phone_number: string;
  tax_id: string;
  start_date: any;
  end_date?: any;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface EmployeeDataGetQueryInterface extends GetQueryInterface {
  id?: string;
  address?: string;
  phone_number?: string;
  tax_id?: string;
  user_id?: string;
}
