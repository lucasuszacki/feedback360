import { GlobalModel } from './global.model';

export interface Docs extends GlobalModel {
  positivesCards?: [];
  negativesCards?: [];
  otherCards?: [];
  viewerId?: string;
  ownerId?: string;
  docsId?: string;
  completed?: boolean;
}
