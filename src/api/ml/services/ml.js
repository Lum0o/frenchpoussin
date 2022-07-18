'use strict';

/**
 * ml service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ml.ml');
