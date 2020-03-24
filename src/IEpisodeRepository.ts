import { Episode } from './Episode';


export interface IEpisodeRepository {
     get() : Episode[];
     getById(id: number) : Episode;
     add(track: Episode) : number;
     edit(id: number, track: Episode) : Episode;
     delete(id: number) : Episode;
}