import { GlobalModel } from './global.model';

export interface Doc extends GlobalModel {
  positivesCards?: [];
  negativesCards?: [];
  otherCards?: [];
  viewerId?: string;
  ownerId?: string;
  docsId?: string;
  completed?: boolean;
  teamId?: string;
}
