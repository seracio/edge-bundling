import _ from 'lodash/fp';

export const cl = _.flow(
    _.entries,
    _.filter(([, cond]) => cond),
    _.map(([key]) => key),
    _.join(' ')
);
