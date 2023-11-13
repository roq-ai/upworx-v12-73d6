import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface JobInterface {
  id?: string;
  freelancer_id: string;
  company_id: string;
  name: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {};
}

export interface JobGetQueryInterface extends GetQueryInterface {
  id?: string;
  freelancer_id?: string;
  company_id?: string;
  name?: string;
}
