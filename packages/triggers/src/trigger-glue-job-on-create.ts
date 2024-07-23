import { S3Event } from "aws-lambda";
// import { GlueClient } from "@aws-sdk/client-glue";

export const main = (event: S3Event) => {

  // const glueClient = new GlueClient({});

  // Remember we made the bucket name available through the "environment"
  // property in GlueBucketStack? We can use it here in the lambda function.
  // const bucketName = (process.env.BUCKET_NAME as string);
  console.log(event.Records);
  console.log(event.Records[0].s3);
  console.log(event.Records[0].requestParameters);
  // console.log(bucketName);

  // Get the file information from the event (the "object_created" event).
  // const record = event.Records[0];
  // const key = record.s3.object.key;

  // Define the Glue job parameters
  // const glueJobName = "my-glue-job"; // Replace with your Glue job name
  // const glueParams = {
  //   JobName: glueJobName,
  //   Arguments: {
  //     bucketName: bucketName,
  //     key: key,
  //   },
  // };

  // Start the Glue job
  try {
    console.log('mock glue job');
    // const command = new StartJobRunCommand(glueParams);
    // const response = await glueClient.send(command);
    // console.log(`Started Glue job ${glueJobName}, run ID: ${response.JobRunId}`);
  } catch (error) {
    console.error("Error starting Glue job:", error);
  }
};