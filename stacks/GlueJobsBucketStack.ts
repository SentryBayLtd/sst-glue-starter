import {
  Bucket,
  type StackContext
} from "sst/constructs";

/**
 * Creates a new stack that is responsible for creating an S3 bucket and
 * setting up a listener to fire a lambda function whenever objects are
 * created in the bucket.
 */
export const GlueJobsBucketStack = ({ stack, app }: StackContext) => {

  /**
   * Here we use SST's "Bucket" construct to create a new S3 bucket
   * named "GlueJobsBucket".
   */
  const bucket = new Bucket(stack, "GlueJobsBucket");

  /**
   * Add notification subscriptions after the bucket has been created.
   * 
   * objectCreated - A notification that triggers a lambda function
   *                 whenever an object is created in the bucket.
   */
  // bucket.addNotifications(stack, {
  //   objectCreated: {
  //     function: lambda,
  //     events: ["object_created"]
  //   }
  // });

  // Output the bucket name and lambda function name.
  stack.addOutputs({
    BucketName: bucket.bucketName,
  });
}