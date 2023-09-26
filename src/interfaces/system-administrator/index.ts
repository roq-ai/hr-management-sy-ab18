import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SystemAdministratorInterface {
  id?: string;
  user_id: string;
  hire_date: any;
  department: string;
  position: string;
  access_level: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface SystemAdministratorGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  department?: string;
  position?: string;
  access_level?: string;
}
