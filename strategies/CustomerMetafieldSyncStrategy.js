const logger = require("../utils/logger");
const BaseMetafieldSyncStrategy = require("./BaseMetafieldSyncStrategy");

class CustomerMetafieldSyncStrategy extends BaseMetafieldSyncStrategy {
  constructor(sourceClient, targetClient, options) {
    super(sourceClient, targetClient, options, "CUSTOMER");
  }
}

module.exports = CustomerMetafieldSyncStrategy;
