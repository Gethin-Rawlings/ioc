import { Episode } from './Episode';


export interface IEpisodeRepository {
     get() : Episode[];
     add(track: Episode) : number;
     edit(id: number, track: Episode) : Episode;
}
