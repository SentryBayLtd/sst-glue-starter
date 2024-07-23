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
    SSO session name (Recommended): <sso-session-name e.g. albertk-glue-rbr>
    SSO start URL [None]: <sandbox-start-url>
    SSO region [None]: <sandbox-region>
    SSO registration scopes [None]: sso:account:access

    Attempting to automatically open the SSO authorization page in your default browser.
    If the browser does not open or you wish to use a different device to authorize this request, open the following URL:

    https://device.sso.eu-west-2.amazonaws.com/

    Then enter the code:

    <SUPER-SECRET-CODE>
    Using the account ID 123456789
    The only role available to you is: AWSPowerUserAccess
    Using the role name "AWSPowerUserAccess"
    CLI default client Region [eu-west-1]: eu-west-2
    CLI default output format [None]: json
    CLI profile name [AWSPowerUserAccess-123456789]: <sso-session-name e.g. albertk-glue-rbr>
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

**Code:** TypeScript

## Project Structure

This project follows the typical [SST monorepo project structure](https://docs.sst.dev/learn/project-structure) with packages divided into [Workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces).

### stacks/

The `stacks/` directory contains the project's [infrastructure defined as code (IaC)](https://sst.dev/chapters/what-is-infrastructure-as-code.html).

### packages/

The `packages/` directory houses everything that powers our backend - our [business logic](https://en.wikipedia.org/wiki/Domain-driven_design).

- `packages/core`: Contains core business logic, widely used and reusable functions, handlers,utilities etc.

- `packages/triggers`: Contains S3 bucket event triggers.