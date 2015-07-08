meteor-accounts-auth0
=====================

Auth0 login service for use with Meteor Auth.

### Setup

1. Create an `OpenID Connect (OAuth2) Web` application from [Auth0 Dashboard](https://app.auth0.com/#/applications/create).
2. Set App Callbacks URLs to: `{YOUR_APP_BASE_URL}/_oauth/auth0`.
3. Go to your application and configure the login service from server-side code:

~~~js
ServiceConfiguration.configurations.remove({ service: 'auth0' });
ServiceConfiguration.configurations.insert({
  service:      'auth0',
  domain:       '{YOUR_AUTH0_DOMAIN}',
  clientId:     '{YOUR_AUTH0_CLIENT_ID}',
  clientSecret: '{YOUR_AUTH0_CLIENT_SECRET}'
});
~~~

ServiceConfiguration.configurations is exported by the service-configuration package:

    meteor add service-configuration

### Usage

1. `mrt add accounts-auth0`
2. Use [accounts-ui](http://docs.meteor.com/#accountsui) to handle login experience, or directly call:

~~~js
Meteor.loginWithAuth0();

// or specifying additional parameters like connection or popupOptions:
Meteor.loginWithAuth0({ connection: 'google-oauth2', popupOptions: { width: 320, height: 350 } });
~~~

> You can find useful info about the Meteor Accounts API from [here](http://docs.meteor.com/#accounts_api).

### Sample
Browse the sample on GitHub from [here](https://github.com/auth0/meteor-accounts-auth0-sample/)

![](http://blog.auth0.com.s3.amazonaws.com/meteor-accounts-auth0-0.gif)

### Package Dependencies

* accounts-base
* accounts-oauth
* auth0

### Credits
Closely based on the [accounts-github package](https://github.com/meteor/meteor/tree/master/packages/accounts-github).

## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, amont others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
* Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
* Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## Create a free Auth0 Account

1. Go to [Auth0](https://auth0.com) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE.txt) file for more info.
