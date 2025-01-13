const performResume = async (z, bundle) => {
  const results = bundle.cleanedRequest;

  z.console.log(results);

  return [
    {
      success: results.success,
      result: results.result,
      thread: results.thread,
    },
  ];
};

const perform = async (z, bundle) => {
  const callbackUrl = z.generateCallbackUrl();

  const options = {
    url: "https://api.mindstudio.ai/developer/v2/apps/run",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${bundle.authData.api_key}`,
    },
    params: {},
    body: {
      variables: bundle.inputData.variables,
      workflow: bundle.inputData.workflow,
      appId: bundle.inputData.app_id,
      callbackUrl: callbackUrl,
    },
  };

  z.console.log(options);
  z.console.log("TEST", bundle.authData.api_key);

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = response.json;
    z.console.log("results", results);
    z.console.log(bundle.meta.isLoadingSample);

    return { results: results, isLoadingSample: bundle.meta.isLoadingSample };
  });
};

module.exports = {
  display: {
    description:
      "Runs a workflow from your MindStudio AI app and creates a new thread.",
    hidden: false,
    label: "Run Workflow",
  },
  key: "run_workflow",
  noun: "Workflow",
  operation: {
    inputFields: [
      {
        key: "app_id",
        label: "App ID",
        helpText: "The ID of the app to run the workflow from.",
        dict: false,
        required: true,
        altersDynamicFields: false,
        dynamic: "get_app_list.id.name",
      },
      {
        key: "variables",
        label: "Variables",
        helpText: "Invoke the app with specific variables.",
        dict: true,
        required: false,
        altersDynamicFields: false,
      },
      {
        key: "workflow",
        label: "Workflow",
        type: "string",
        helpText:
          "If not included, default entry workflow will be invoked. E.g. 'Main.flow'",
        default: "Main.flow",
        required: false,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: { success: true, result: "Hello, world!", thread: undefined },
    outputFields: [
      { key: "success", type: "boolean", label: "Success" },
      {
        key: "callbackInProgress",
        type: "boolean",
        label: "Callback in progress",
      },
      { key: "thread", label: "Thread", type: "string" },
      { key: "result", label: "Result", type: "string" }, // Content of the last system message
    ],
    perform: perform,
    performResume: performResume,
  },
};
