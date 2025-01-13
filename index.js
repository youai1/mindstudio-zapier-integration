const authentication = require("./authentication");
const runWorkflowCreate = require("./creates/run_workflow.js");
const loadCreate = require("./creates/load.js");
const getAppListTrigger = require("./triggers/get_app_list.js");

module.exports = {
  version: require("./package.json").version,
  platformVersion: require("zapier-platform-core").version,
  authentication: authentication,
  creates: {
    [runWorkflowCreate.key]: runWorkflowCreate,
    [loadCreate.key]: loadCreate,
  },
  searches: {},
  triggers: {
    [getAppListTrigger.key]: getAppListTrigger,
  },
};
