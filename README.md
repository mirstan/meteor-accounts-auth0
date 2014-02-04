meteor-accounts-auth0
=====================

Auth0 login service for use with Meteor Auth.

### Setup

1. Create an `OpenID Connect (OAuth2) Web` application from [Auth0 Dashboard](https://app.auth0.com/#/applications/create).
2. Set App Callbacks URLs to: `{YOUR_APP_BASE_URL}/_oauth/auth0`.
3. Go to your application and configure the login service from server-side code:

~~~js
Accounts.loginServiceConfiguration.remove({
  service: 'auth0'
});

Accounts.loginServiceConfiguration.insert({
  service:      'auth0',
  domain:       '{YOUR_AUTH0_DOMAIN}',
  clientId:     '{YOUR_AUTH0_CLIENT_ID}',
  clientSecret: '{YOUR_AUTH0_CLIENT_SECRET}'
});
~~~

### Usage

1. `meteor add accounts-auth0`
2. Use [accounts-ui](http://docs.meteor.com/#accountsui) to handle login experience, or directly call:

~~~js
Meteor.loginWithAuth0();

// or specifying additional parameters like connection or popupOptions:
Meteor.loginWithAuth0({ connection: 'google-oauth2', popupOptions: { width: 320, height: 350 } });
~~~

> You can find useful info about the Meteor Accounts API from [here](http://docs.meteor.com/#accounts_api).

### Sample
Browse the sample on GitHub from [here](https://github.com/auth0/meteor-accounts-auth0-sample/).

### Package Dependencies

* accounts-base
* accounts-oauth
* auth0

### Credits
Closely based on the [accounts-github package](https://github.com/meteor/meteor/tree/master/packages/accounts-github).

### About Auth0

[Auth0](https://www.auth0.com) provides identity infrastructure: **Single Sign On**, **User Management**, **Social**, **Enterprise** login, your own **database of users**, extensibility through **JavaScript rules** and **reporting and analytics**.

![Meteor + Auth0](https://docs.google.com/drawings/d/1I7ECtml8o4NKKwD7_RVqaW0vpAtr6b8S-JiQdbbspm4/pub?w=1219&amp;h=558)

### License
The MIT License (MIT)

Copyright (c) 2014 AUTH10 LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
