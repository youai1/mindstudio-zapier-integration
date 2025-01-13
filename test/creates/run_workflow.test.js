const zapier = require("zapier-platform-core");

// Use this to make test calls into your app:
const App = require("../../index");
const appTester = zapier.createAppTester(App);
// read the `.env` file into the environment, if available
zapier.tools.env.inject();

describe("creates.run_workflow", () => {
  it("should run", async () => {
    const bundle = {
      authData: {
        api_key: process.env.API_KEY,
      },
      inputData: {
        app_id: process.env.APP_ID,
      },
      meta: {
        isLoadingSample: true,
      },
    };

    const results = await appTester(
      App.creates["run_workflow"].operation.perform,
      bundle
    );
    expect(results).toBeDefined();
    // TODO: add more assertions
  }, 20000);
});
