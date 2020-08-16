import schema from './schema';
import { Api } from '@cmra/react';
const api = new Api(schema).build();

api.onFilterByTagCalled((tag) => {
  api.setFilterBy({
    tag,
  });
});

export default schema;
