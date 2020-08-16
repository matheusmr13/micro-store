import { Api } from '@cmra/react';
export default {
  name: 'showcase',
  interface: {
    filterBy: {
      initialState: {},
    },
    filterByTag: {
      type: Api.TYPE.FUNCTION,
    },
  },
};
