import cheerio from 'cheerio';

export const transform = body =>
    cheerio.load(body, { decodeEntities: true, normalizeWhitespace: true });
