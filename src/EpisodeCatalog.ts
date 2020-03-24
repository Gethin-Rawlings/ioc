/* eslint-disable no-unused-vars */
import { injectable } from 'inversify';
import { IEpisodeRepository } from './IEpisodeRepository';
import { Episode } from './Episode';

@injectable()
export class EpisodeCatalog implements IEpisodeRepository {
    private episodeList : Episode[] = new Array(
      new Episode(1, 'Rose', 'Doctor Who series 1', 45),
      new Episode(2, 'The End of the World', 'Doctor Who series 1', 45),
      new Episode(3, 'Bad Wolf', 'Doctor Who series 1', 45),
      new Episode(4, 'Fear Her', 'Doctor Who series 2', 45),
      new Episode(5, 'Doomsday', 'Doctor Who series 2', 45),
    );

    get(): Episode[] {
      return this.episodeList;
    }

    add(Episode: Episode): number {
      return this.episodeList.push(Episode);
    }

    edit(id: number, Episode: Episode): Episode {
      const targetIndex = this.episodeList.findIndex(((Episode) => Episode.Id == id));

      this.episodeList[targetIndex].Series = Episode.Series;
      this.episodeList[targetIndex].Title = Episode.Title;
      this.episodeList[targetIndex].Duration = Episode.Duration;

      return this.episodeList[targetIndex];
    }
}
