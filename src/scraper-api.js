const CrawlingAPI = require('./crawling-api.js');

/**
 * A node class that acts as wrapper for Crawlbase Scraper API.
 *
 * Read Crawlbase Scraper API documentation https://crawlbase.com/docs/scraper-api
 *
 * Copyright Crawlbase
 * Licensed under the Apache License 2.0
 */
class ScraperAPI extends CrawlingAPI {
  /**
   * Returns the base path to use on the API calls. This is used internally in the class.
   * @type string
   * @private
   */
  get basePath() {
    return 'scraper';
  }

  /**
   * POST is not allowed.
   * @throws {Error}
   */
  post() {
    throw Error('Only GET is allowed for the ScraperAPI');
  }

  /**
   * PUT is not allowed.
   * @throws {Error}
   */
  put() {
    throw Error('Only GET is allowed for the ScraperAPI');
  }
}

module.exports = ScraperAPI;
