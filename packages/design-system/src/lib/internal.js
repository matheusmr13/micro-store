import schema from './schema';
import { Api } from '@cmra/react';
import Button from '../components/Button';
const api = new Api(schema).build();

api.setComponents({
  Button,
});

export default schema;
