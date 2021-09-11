import { GlobalModel } from './global.model';

export interface Card extends GlobalModel {
  ownerId?: string;
  upVotes?: [];
  viewerReaction?: string;
}
