import { IInfo } from '../info.interface';
import { ICharacter } from './character.interface';

export interface ICharacterResponse {
  info: IInfo;
  results: ICharacter[];
}
