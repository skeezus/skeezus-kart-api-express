
## project setup
* enter project directory
* if project exists clone repository; if not run `npm init && npm install` and add dependencies to packages.json
* run `docker-compose up --build` to create image and configure server environment
* note: make sure to create `.dockerignore` and add node_modules otherwise they can get overwritten src: https://stackoverflow.com/questions/57550927/npm-install-in-a-dockerfile-doesnt-install-any-dependencies

## db setup
* npx knex init
* npx knex migrate:make users
* `service postgresql start`
* enter database: `su postgres` && `psql`
* exit database: `\q`

## basics
* entry point of application: typically index.js or app.js 
* scaffolding: https://github.com/focusaurus/express_code_structure

## package manager / npm
* npm init creates packages.json file
* list packages installed globally: `npm list -g --depth=0`