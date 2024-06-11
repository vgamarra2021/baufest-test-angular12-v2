import { IOrigin } from './origin.interface';

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: IOrigin;
  location: { name: string; url: string };
  image: string;
  episode: string[];
  url: string;
  created: string;
  episodeName?: string;
  episodeId?: number;
}
