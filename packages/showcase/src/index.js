import { ExportMicrofrontend, TYPE } from '@cmra/react';
import schema from './lib/internal';
import Showcase from './Showcase';

ExportMicrofrontend({
  ...schema,
  view: Showcase,
});
