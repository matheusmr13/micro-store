import { ExportMicrofrontend } from '@cmra/react';
import schema from './lib/internal';

import Button from './components/Button';

ExportMicrofrontend({
  ...schema,
  view: { Button },
});
