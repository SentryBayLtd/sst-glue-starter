# Glue RBR

This is an SST project for managing the execution of Glue jobs responsible for ingesting S3 bucket files containing breach data
into our mongoDB document stores.

## Requirements

**Node (>=20)**: https://github.com/nvm-sh/nvm

**PNPM**: https://pnpm.io/installation

**AWS CLI v2**: https://aws.amazon.com/cli/

If you haven't done so already, then setup an [AWS profile](https://docs.aws.amazon.com/cli/latest/userguide/sso-configure-profile-token.html#sso-configure-profile-token-auto-sso) to the sandbox account.

1. Login using your provided AWS SSO start link

2. Select the desired sandbox account from the "AWS accounts" list

3. Click on "Access Keys"

4. Note the "SSO Start URL" and "SSO Region", you will need it.

5. In your terminal, run the configure SSO command:

    ```sh
    $ aws configure sso
    SSO session name (Recommended): <sso-session-name>
    SSO start URL [None]: <sandbox-start-url>
    SSO region [None]: <sandbox-region>
    SSO registration scopes [None]: sso:account:access
    ```

    (NOTE: Pick something unique but sensible for your session name i.e. `albertk-glue-rbr`)

## Quick Start

1. Clone the repository:

    ```sh
    git clone git@github.com:sentrybayltd/glue-rbr.git
    ```

2. Go to the project directory
    ```sh
    cd glue-rbr
    ```

3. Install all modules' dependencies
    ```sh
    pnpm install
    ```

4. Start the live development server
    ```sh
    npx sst dev --profile <sso-profile> --stage <sso-stage>
    ```

That's it! If everything is successfully deployed, you should be able to see a new S3 bucket, and when you upload objects to this bucket, you should see glue jobs being fired in response.

## Tech Stack

**Client:** TBD

**Server:** Lambda, S3, Glue

**Infrastructure:** SST, CDK, CloudFormation