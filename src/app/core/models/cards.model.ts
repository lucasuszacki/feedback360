import { GlobalModel } from './global.model';

export interface Cards extends GlobalModel {
  ownerId?: string;
  upVotes?: [];
  viewerReaction?: string;
}
