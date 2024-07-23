import { SSTConfig } from "sst";
import { GlueBucketStack } from "./stacks/GlueBucketStack";

/**
 * Configures and deploys our projects.
 * 
 * Deploys our glue bucket stack which creates our bucket and
 * registers the object_created notification trigger.
 */
export default {
  config(_input) {
    return {
      name: "glue-rbr",
      region: "eu-west-2",
    };
  },
  stacks(app) {
    app.stack(GlueBucketStack);
  }
} satisfies SSTConfig;
