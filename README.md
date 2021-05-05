# kr-force

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

Node version: 10.16.0
Npm version: 6.9.0

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Ember CLI](https://ember-cli.com/)
- [Google Chrome](https://google.com/chrome/)

## Installation

Locally from a repo

- `git clone <repository-url>` this repository
- `cd kr-force`
- `npm install`

## Running / Development

- `ember serve`
- Visit your app at [http://localhost:4200](http://localhost:4200).
- Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

- `ember test`
- `ember test --server`

### Linting

- `npm run lint:hbs`
- `npm run lint:js`
- `npm run lint:js -- --fix`

### Building

- `ember build` (development)
- `ember build --environment production` (production)

### Deploying

Deployment will require building the application and pushing the code to a folder for your NGINX Proxy to serve for web-requests to the webpage. Building can happen in an ephemeral instance, but will require you to ammend the config/environment.js to specify where the javascript will route its api requests to.

Please note that building of the javascript must use the exact npm and node version as npm (package manager for node.js) will have different dependencies that may break.

The basic principle is to replicate what you did locally to make the javascript server run and build in an ephemeral server instance and push the build to a specific folder.

You can see some helpful tutorials on deploy ember here:

scp deploy: https://guides.emberjs.com/v2.14.0/tutorial/deploying/

ember cli deploy: https://github.com/ember-cli-deploy/ember-cli-deploy

You should house the api and the front end code in the same server but different folders.

## Further Reading / Useful Links

- [ember.js](https://emberjs.com/)
- [ember-cli](https://ember-cli.com/)
- Development Browser Extensions
  - [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  - [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
