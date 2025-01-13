module.exports = {
  display: {
    description: "Loads your authenticated MindStudio workspace.",
    hidden: true,
    label: "Load Workspace",
  },
  key: "load",
  noun: "Workspace",
  operation: {
    perform: {
      headers: {
        "Content-Type": "application/json",
        authorization: "{{bundle.authData.api_key}}",
      },
      url: "https://api.mindstudio.ai/developer/v2/apps/load",
    },
    sample: {
      orgId: "id",
      orgName: "Workspace name",
    },
    outputFields: [
      { key: "orgId", label: "Workspace ID", type: "string" },
      { key: "orgName", label: "Workspace name", type: "string" },
      { key: "apps", label: "Apps", type: "string" },
    ],
  },
};
