import { IInfo } from '../info.interface';
import { IEpisode } from './episode.interface';

export interface IEpisodeResponse {
  info: IInfo;
  results: IEpisode[];
}
