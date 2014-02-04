Accounts.oauth.registerService('auth0');

if (Meteor.isClient) {
  Meteor.loginWithAuth0 = function (options, callback) {

    if (! callback && typeof options === 'function') {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Auth0.requestCredential(options, credentialRequestCompleteCallback);
  };
}
else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.auth0'],
    forOtherUsers: ['services.auth0.id']
  });
}
