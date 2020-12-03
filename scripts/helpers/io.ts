import { dsvFormat } from 'd3-dsv';
import _ from 'lodash/fp';
import { readFileSync } from 'fs';

export const readUTF8 = fn => readFileSync(fn, 'utf-8');

export const readJSON = _.flow(
    readUTF8,
    JSON.parse
);

export const readCSV = _.flow(
    readUTF8,
    dsvFormat(',').parse
);

export const readCSV2 = _.flow(
    readUTF8,
    dsvFormat(';').parse
);
