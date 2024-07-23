import { SSTConfig } from "sst";
import { GlueJobsBucketStack } from "./stacks/GlueJobsBucketStack";
import { GlueBreachDataBucketStack } from "./stacks/GlueBreachDataBucketStack";

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
    app
      .stack(GlueJobsBucketStack)
      .stack(GlueBreachDataBucketStack)
  }
} satisfies SSTConfig;
