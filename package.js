Package.describe({
  summary: 'Login service for Auth0'
});

Package.on_use(function(api) {
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('auth0', ['client', 'server']);

  api.add_files('auth0_login_button.css', 'client');
  api.add_files('auth0.js');
});
