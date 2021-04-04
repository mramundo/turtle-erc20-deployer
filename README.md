# turtle-erc20-deployer

[![react](./src/resources/badges/badge-react.svg)](https://reactjs.org/)
[![mocha](./src/resources/badges/badge-mocha.svg)](https://mochajs.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![netlify status](https://api.netlify.com/api/v1/badges/792fe039-41a3-48c6-bae0-38b5c9701468/deploy-status)](https://app.netlify.com/sites/turtle-erc20-deployer/deploys)
[![github: mramundo](https://img.shields.io/github/followers/mramundo?label=Follow&style=social)](https://github.com/mramundo)

turtle-erc20-deployer aim to simplify the creation process of an ERC-20, giving to everyone the chance to test the technology without having the initial knowledge to do that at low level.

## Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run serve`

Serve the production build created in `build` folder.\
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

The page will not reload if you make edits as you are serving a static pre builded folder.\
Your app is ready to be tested in production mode!

### `npm run build-and-serve`

Shortand for the `build` and `serve` commands.\
Builds and serve the app for production using the `build` folder.\
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

The page will not reload if you make edits as you are serving a static pre builded folder.\
Your app is ready to be tested in production mode!

### `npm run build-contracts`

Build smart contracts using waffle.\
The builded contracts are placed in the `abi` folder under `src/contracts`.\
Build path can be modified changing `outputDirectory` parameter in waffle configuration file.

### `npm run test-contracts`

Launches the smart contracts tests.\
Tests are written using mocha.

### `npm run flatten-contracts`

Flatten smart contracts using waffle.\
The flattened contracts are placed in the `flatten` folder under `src/contracts`.\
Flatten path can be modified changing `flattenOutputDirectory` parameter in waffle configuration file.

### `npm run remixd`

Share the current directory using a web socket connection between the local computer and Remix IDE.\
The directory is shared with the `remixd` command.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Web3 Supported Providers

List of supported web3 providers:

-   [x] Metamask (Injected)
-   [x] WalletConnect
-   [x] WalletLink

## Netlify

Every commit pushed on branch `master` results in a Netlify CI deploy.\
You can browse the deployed version on [turtle-erc20-deployer.netlify.app](https://turtle-erc20-deployer.netlify.app).
