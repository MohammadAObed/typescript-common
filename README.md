# typescript-common

reusable typescript utilities for any JS/TS project

## installation

execute this command in your project: `npm i typescript-common`

## usage

the import functionality is as follows:

`import { getRandomNumber } from "typescript-common/utils";`
`import { Common } from "typescript-common/models";`

you do not import from the root of the package, you import from the specific module you want to use, for example "/utils" or "/models" etc...

## development

this package is built from scratch like:
`npm init -y` generates `package.json`
`npm i -D typescript tsup tsx` generates `package-lock.json` file and `node_modules` folder
create a `tsup.config.ts` file for the build configuration
create a `tsconfig.json` file for the TypeScript configuration
create a `dev.ts` file for testing the package locally
create a `src` folder for the source code
create a `dist` folder for the built code
create a `README.md` file for the documentation
create a `.gitignore` file
`npm run build` generates the files inside the dist

### cloning the repository

to contribute to this package, you can clone the repository and run the following command:

`git clone <repo>`

### testing the package

first hit ctrl+shift+p → type select typescript version → select the workspace version → again hit ctrl+shift+p → type & click on restart typescript
then you can run the following command to build the package:

to test the package locally, write your code in the `dev.ts` file, then you can run the following command:

`npm run dev`

it will run the code inside `dev.ts` file

### adding new folder under `src`

do the same steps as it was done for the `utils` folder:

so any folder you create in the `src` folder should have an `index.ts` file that exports the necessary modules from that folder.

then you should add the folder to the `tsup.config.ts` file under the `entry` property, so that it will be included in the build process.

then you should add the folder to the `package.json` file under the `exports` property, so that it will be included in the package.

# commands

`npm i` - installs the dependencies and updates the package-lock.json file after modifying the version in package.json file
`npm run clean` - cleans the `dist` folder
`npm run build` - builds the package, checks for errors and generates the files inside the `dist` folder
`npm run dev` - runs the `dev.ts` file
`npm publish --access public` - publishes the package to npm
