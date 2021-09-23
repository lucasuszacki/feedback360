import { GlobalModel } from './global.model';

export interface User extends GlobalModel {
  teams?: string[];
  userId?: string;
}
