import { Role } from './role.interface';
import { Seniority } from './seniority.interface';
import { Team } from './team.interface';

export interface Developer {
  id: number;
  fullname: string;
  email: string;
  github_link: string;
  linked_link: string;
  role: Role;
  ceremony_available: boolean;
  discord_usernane: string;
  Seniority: Seniority;
  looking_for_work: boolean;
  retire_probablity: boolean;
  condition_accepted: boolean;
  team: Team;
  status: boolean;
  created_by: number;
  created_at: Date;
  updated_by: number;
  updated_at: Date;
}
