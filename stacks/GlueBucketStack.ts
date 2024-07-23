import {
  Bucket,
  Function,
  type StackContext
} from "sst/constructs";

/**
 * Creates a new stack that is responsible for creating an S3 bucket and
 * setting up a listener to fire a lambda function whenever objects are
 * created in the bucket.
 */
export const GlueBucketStack = ({ stack, app }: StackContext) => {

  /**
   * Here we use SST's "Bucket" construct to create a new S3 bucket
   * named "BreachDataIngestBucket".
   */
  const bucket = new Bucket(stack, "BreachDataIngestBucket");

  /**
   * Here we use SST's "Function" construct to create a new lambda function
   * named "TriggerGlueJobOnBreachDataUpload".
   *
   * The "handler" is at "packages/triggers/src/trigger-glue-job.ts" and the
   * method invoked in the handler is named "main".
   * 
   * The environment object makes the name of the bucket available from inside
   * the lambda function, referenced by "BUCKET_NAME".
   */
  // const lambda = new Function(stack, "TriggerGlueJobOnBreachDataUpload", {
  //   handler: "packages/triggers/src/trigger-glue-job-on-create.main",
  //   environment: {
  //     BUCKET_NAME: bucket.bucketName,
  //   },
  // });

  /**
   * Grant the Lambda function permissions to read from the S3 bucket.
   * This can be fine-tuned for granularity.
   */
  // bucket.attachPermissions([lambda]);

  /**
   * Add notification subscriptions after the bucket has been created.
   * 
   * objectCreated - A notification that triggers our lambda function
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
    // LambdaFunctionName: lambda.functionName,
  });
}