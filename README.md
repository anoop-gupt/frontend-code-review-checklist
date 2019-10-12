## 🔥Frontend Code Review Checklist
An interactice application to provide a checklist on various aspect of frontend application's best practices during code review.

[![GitHub last commit](https://img.shields.io/github/last-commit/anoop-gupt/frontend-code-review-checklist?style=flat-square)](https://github.com/anoop-gupt/frontend-code-review-checklist/commits/master)
[![first-timers-only](https://img.shields.io/badge/first--timers--only-friendly-blue.svg?style=flat-square)](https://www.firsttimersonly.com/)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/anoop-gupt/frontend-code-review-checklist?style=flat-square)

[![All Contributors](https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat-square)](#contributors)

![GitHub](https://img.shields.io/github/license/anoop-gupt/frontend-code-review-checklist?color=blue&style=flat-square)
![Work in Progress](https://img.shields.io/badge/Status-Work%20in%20progress-orange?style=flat-square)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/anoop-gupt/frontend-code-review-checklist/pulls)

### Maintainers
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<table>
<tr>
   <td align="center"><a href="https://github.com/anoop-gupt"><img src="https://avatars2.githubusercontent.com/u/1118525?s=460&v=4" width="100px;" alt="Gopal Saini"/><br /><sub><b>Anoop Gupta</b></sub></a>
  </td>
   <td align="center"><a href="https://github.com/Mayank02"><img src="https://avatars1.githubusercontent.com/u/7802472?s=460&v=4" width="100px;" alt="Gopal Saini"/><br /><sub><b>Mayank Singh</b></sub></a>
  </td>
    <td align="center"><a href="https://github.com/gsaini"><img src="https://avatars3.githubusercontent.com/u/1699577?s=460&v=4" width="100px;" alt="Gopal Saini"/><br /><sub><b>Gopal Saini</b></sub></a>
  </td>  
  
  </tr>
  </table>

<br/>

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```
## Start your app 
By running `npm start`, and start debugging in VS Code by pressing `F5` or by clicking the green debug icon. You can now write code, set breakpoints, make changes to the code, and debug your newly modified code—all from your editor.

Having problems with VS Code Debugging? Please see their [troubleshooting guide](https://github.com/Microsoft/vscode-chrome-debug/blob/master/README.md#troubleshooting).

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

