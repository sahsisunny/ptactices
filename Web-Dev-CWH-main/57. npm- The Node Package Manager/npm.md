# npm

#### What is npm?
- npm stands for Node Package Manager
- npm is a package manager for the JavaScript programming language
- npm is the default package manager for the JavaScript runtime environment Node.js
- npm is a command line tool that installs, updates or uninstalls Node.js packages in your application

#### Most common npm commands
- `npm init` - for creating a package.json file
- `npm install` or `npm i` - for installing packages
- `npm install --global` or `npm i -g` - for installing packages globally
- `npm install --save` or `npm i -S` - for installing packages and adding them to the dependencies in the package.json file
- `npm install --save-dev` or `npm i -D` - for installing packages and adding them to the devDependencies in the package.json file
- `npm uninstall` or `npm un` - for uninstalling packages
- `npm update` or `npm up` - for updating packages
- `npm outdated` - for checking for outdated packages
- `npm list` - for listing installed packages
- `npm help` - for getting help
- `npm help <command>` - for getting help for a specific command
- `npm root` - for getting the root directory of the current project
- `npm root -g` - for getting the root directory of the global packages
- `npm config list` - for listing the npm configuration
- `npm fund` - for getting information about funding packages
- `npm version` - for getting the version of npm

#### module version symbols
- `~` - for installing the latest patch version
- `^` - for installing the latest minor version
- `*` - for installing the latest version
- `>` - for installing a version greater than the specified version
- `<` - for installing a version less than the specified version
- `>=` - for installing a version greater than or equal to the specified version
- `<=` - for installing a version less than or equal to the specified version
- `=` - for installing a specific version

#### npm scripts
- npm scripts are used to automate tasks
- npm scripts are defined in the package.json file
- npm scripts are run with the `npm run` command
- npm scripts can be run with the `npm start` command
- npm scripts can be run with the `npm test` command
- npm scripts can be run with the `npm stop` command
- npm scripts can be run with the `npm restart` command
- npm scripts can be run with the `npm publish` command
- npm scripts can be run with the `npm install` command
- npm scripts can be run with the `npm update` command
- npm scripts can be run with the `npm uninstall` command
- npm scripts can be run with the `npm version` command

#### npm scripts examples
- `"start": "node index.js"` - for running the index.js file with the `npm start` command
- `"test": "echo \"Error: no test specified\" && exit 1"` - for running the `npm test` command
- `"stop": "echo \"Error: no stop specified\" && exit 1"` - for running the `npm stop` command
- `"restart": "echo \"Error: no restart specified\" && exit 1"` - for running the `npm restart` command
- `"publish": "echo \"Error: no publish specified\" && exit 1"` - for running the `npm publish` command
- `"install": "echo \"Error: no install specified\" && exit 1"` - for running the `npm install` command
- `"update": "echo \"Error: no update specified\" && exit 1"` - for running the `npm update` command
- `"uninstall": "echo \"Error: no uninstall specified\" && exit 1"` - for running the `npm uninstall` command
- `"version": "echo \"Error: no version specified\" && exit 1"` - for running the `npm version` command

