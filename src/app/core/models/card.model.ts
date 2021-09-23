import { GlobalModel } from './global.model';

export interface Card extends GlobalModel {
  content?: string;
  ownerId?: string;
  upVotes?: [];
  viewerReaction?: string;
}
