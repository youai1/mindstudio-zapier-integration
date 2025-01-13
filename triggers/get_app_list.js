const getAppList = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.mindstudio.ai/developer/v2/apps/load",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${bundle.authData.api_key}`,
    },
  });

  response.throwForStatus();

  return response.json.apps;
};

module.exports = {
  key: "get_app_list",
  noun: "App",

  display: {
    label: "Get App List",
    description: "Triggers on a request to get app list",
    hidden: true,
  },

  operation: {
    perform: getAppList,

    sample: { id: "1234", name: "Sample App" },

    outputFields: [
      { key: "id", label: "App ID" },
      { key: "name", label: "App Name" },
    ],
  },
};
