module.exports = {
  type: "custom",
  test: {
    body: { appId: "{{bundle.authData.app_id}}" },
    headers: { authorization: "Bearer {{bundle.authData.api_key}}" },
    url: "https://api.mindstudio.ai/developer/v2/apps/load",
  },
  fields: [
    {
      computed: false,
      key: "api_key",
      required: true,
      label: "API Key",
      type: "password",
      helpText:
        "You can create your API key by going to your workspace settings inside the [API keys](https://app.mindstudio.ai/workspace/settings/developer) page.",
    },
  ],
  customConfig: {},
  connectionLabel: "{{bundle.inputData.orgName}}",
};
