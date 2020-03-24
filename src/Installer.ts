import 'reflect-metadata';
import { Container } from 'inversify';

import SERVICE_IDENTIFIER from './Identifiers';
import { IEpisodeRepository } from './IEpisodeRepository';
import { EpisodeCatalog } from './EpisodeCatalog';

const container = new Container();
container.bind<IEpisodeRepository>(SERVICE_IDENTIFIER.IEpisodeRepository).to(EpisodeCatalog);

export default container;
