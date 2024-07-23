import {
  Bucket,
  type StackContext,
} from "sst/constructs";

/**
 * Creates a new stack that is responsible for creating an S3 bucket and
 * setting up a listener to fire a lambda function whenever objects are
 * created in the bucket.
 */
export const GlueBreachDataBucketStack = ({ stack, app }: StackContext) => {

  /**
   * Here we use SST's "Bucket" construct to create a new S3 bucket
   * named "BreachDataIngestBucket".
   */
  const bucket = new Bucket(stack, "GlueBreachDataBucket");
  /**
   * Add notification subscriptions after the bucket has been created.
   * 
   * objectCreated - A notification that triggers our lambda function
   *                 whenever an object is created in the bucket.
   */
  bucket.addNotifications(stack, {
    objectCreated: {
      function: "packages/triggers/src/trigger-glue-job-on-create.main",
      events: ["object_created"]
    }
  });

  // Output the bucket name and lambda function name.
  stack.addOutputs({
    BucketName: bucket.bucketName
  });
}