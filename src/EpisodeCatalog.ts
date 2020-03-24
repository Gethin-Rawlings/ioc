/* eslint-disable no-unused-vars */
import { injectable } from 'inversify';
import { IEpisodeRepository } from './IEpisodeRepository';
import { Episode } from './Episode';

@injectable()
export class EpisodeCatalog implements IEpisodeRepository {
    private episodeList : Episode[] = new Array(
      new Episode(1, 'DNA.', 'Kendrick Lamar', 340),
      new Episode(2, 'Come Down', 'Anderson Paak.', 430),
      new Episode(3, 'DNA.', 'Kendrick Lamar', 340),
      new Episode(4, 'DNA.', 'Kendrick Lamar', 340),
      new Episode(5, 'DNA.', 'Kendrick Lamar', 340),
    );

    get(): Episode[] {
      return this.episodeList;
    }

    add(Episode: Episode): number {
      return this.episodeList.push(Episode);
    }

    edit(id: number, Episode: Episode): Episode {
      const targetIndex = this.episodeList.findIndex(((Episode) => Episode.Id == id));

      this.episodeList[targetIndex].Artist = Episode.Artist;
      this.episodeList[targetIndex].Title = Episode.Title;
      this.episodeList[targetIndex].Duration = Episode.Duration;

      return this.episodeList[targetIndex];
    }
}
