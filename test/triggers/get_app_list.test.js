const zapier = require("zapier-platform-core");

// Use this to make test calls into your app:
const App = require("../../index");
const appTester = zapier.createAppTester(App);
// read the `.env` file into the environment, if available
zapier.tools.env.inject();

describe("triggers.get_app_list", () => {
  it("should load apps", async () => {
    const bundle = {
      authData: {
        api_key: process.env.API_KEY,
      },
    };

    const results = await appTester(
      App.triggers.get_app_list.operation.perform,
      bundle
    );

    expect(results).toBeTruthy(); // Ensure we get a response
    expect(results.length).toBeGreaterThan(0); // Ensure we get at least one app

    // Check the properties of the first app in the result
    const app = results[0];
    expect(app).toHaveProperty("id");
    expect(app).toHaveProperty("name");
  });
});
