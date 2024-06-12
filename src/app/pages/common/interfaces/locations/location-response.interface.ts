import { IInfo } from '../info.interface';
import { ILocation } from './location.interface';

export interface ILocationResponse {
  info: IInfo;
  results: ILocation[];
}
