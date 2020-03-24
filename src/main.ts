import { IEpisodeRepository } from './IEpisodeRepository';
import container from './Installer';
import SERVICE_IDENTIFIER from './Identifiers';
import { EpisodeCatalogService } from './EpisodeCatalogService';

const episodeRepoo = container.get<IEpisodeRepository>(SERVICE_IDENTIFIER.IEpisodeRepository);
const service = new EpisodeCatalogService(episodeRepoo);

// eslint-disable-next-line no-console
console.log(service.get());
