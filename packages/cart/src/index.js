import {
  ExportMicrofrontend,
  TYPE
} from '@cmra/react';
import schema from './lib/internal';
import CartWidget from './CartWidget';
import CartScreen from './CartScreen';

ExportMicrofrontend({
  ...schema,
  view: {
    CartWidget,
    CartScreen,
  },
});