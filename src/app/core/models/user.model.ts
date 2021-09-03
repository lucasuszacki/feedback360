import { GlobalModel } from './global.model';

export interface User extends GlobalModel {
  team?: string;
  userId?: string;
}
