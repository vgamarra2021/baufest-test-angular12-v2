import { IInfo } from '../../common/interfaces/info.interface';
import { ICharacter } from './character.interface';

export interface ICharacterResponse {
  info: IInfo;
  results: ICharacter[];
}
