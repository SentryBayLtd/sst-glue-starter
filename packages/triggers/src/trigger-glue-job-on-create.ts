import {
  S3Event
} from "aws-lambda";
import {
  GlueClient
} from "@aws-sdk/client-glue";
import {
  StartJobRunCommand
} from "@aws-sdk/client-glue";

export const main = async (event: S3Event) => {

  const glueClient = new GlueClient({});

  console.log(event.Records[0].s3);

  let bucketName = event.Records[0].s3.bucket["name"]

  let object_key = event.Records[0].s3.object["key"]

  // Define the Glue job parameters
  const glueJobName = "sst_trigger_job";

  const glueParams = {
      JobName: glueJobName,
      Arguments: {
          "--BUCKET_NAME": bucketName,
          "--OBJECT_KEY": object_key,
      },
  };

  // Start the Glue job
  try {

      if (object_key.includes(".txt") || object_key.includes(".csv")) {

          console.log('Start glue job');

          const command = new StartJobRunCommand(glueParams);

          const response = await glueClient.send(command);

          console.log(`Started Glue job ${glueJobName}, run ID: ${response.JobRunId}`);
      } else {
          console.log("Object is not a file, glue job not triggered.")
      }

  } catch (error) {
      console.error("Error starting Glue job:", error);
  }
};