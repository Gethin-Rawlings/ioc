/* eslint-disable import/prefer-default-export */
import { IEpisodeRepository } from './IEpisodeRepository';
import { Episode } from './Episode';

export class EpisodeCatalogService {
    private repository: IEpisodeRepository;

    constructor(repository:IEpisodeRepository) {
      this.repository = repository;
    }

    get(): Episode[] {
      return this.repository.get();
    }

    add(episode: Episode): number {
      return this.repository.add(episode);
    }

    edit(id: number, episode: Episode): Episode {
      return this.repository.edit(id, episode);
    }

}
