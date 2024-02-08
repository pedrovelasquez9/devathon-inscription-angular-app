import { Developer } from './developer.interface';

export interface Team {
  id: number;
  name: string;
  stack_front: string;
  stack_backend: string;
  available_frontend_quota: boolean;
  available_backend_quota: boolean;
  edition: number;
  status: boolean;
  created_by: string;
  created_at: Date;
  updated_by: string;
  updated_at: Date;
  developers: Developer[];
}
