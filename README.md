<h1 align="center" title="Vite Helper">
  Electron Vite Template
</h1>

<h2 align="center">Electron Vite Template is a easy template for using React, Electron, Vite and Node.</h2>

<div align="center">


[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.png?v=103)](https://opensource.org/licenses/mit-license.php)
[![npm version](https://img.shields.io/npm/v/electron-vite-template.svg?style=flat-square)](https://www.npmjs.com/package/electron-vite-template)
[![npm downloads](https://img.shields.io/npm/dm/electron-vite-template.svg?style=flat-square)](http://npm-stat.com/charts.html?package=cz-conventional-changelog&from=2015-08-01) <!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section --> [![All Contributors](https://img.shields.io/badge/all_contributors-1-green.svg?style=flat-square)](#contributors-) <!-- ALL-CONTRIBUTORS-BADGE:END -->

</div>

<h4 align="center">
 <a href="#-contributing">:pencil: Contributing</a> •
 <a href="#-thanks">:adult: Thanks</a> •
 <a href="#-license">:page_facing_up: License</a>
</h4>

<br>

# :pencil: Contributing

Your contribution to the `electron-vite-template` is essential for the evolution of the project, you can do it as follows:

- Open an [issue](https://github.com/wesleyara/electron-vite-template/issues) to clear doubts, report bugs or give ideas
- Open a [pull request](https://github.com/wesleyara/electron-vite-template/pulls) to give ideas for code improvement, implementation of new features and bug fixes

These are just some of the ways you can contribute to the project read the [CONTRIBUTING](https://github.com/wesleyara/electron-vite-template/blob/main/.github/CONTRIBUTING.md) for more information

# :adult: Authors

<table>
  <tr>
    <td align="center"><a href="https://wesleyaraujo.dev/"><img src="https://avatars.githubusercontent.com/u/89321125?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Wesley Araújo</b></sub></a><br /></td>
  </tr>
</table>

## ✨ Contributors

<table>
  <tr>
    <td align="center"><a href="https://github.com/pportella23"><img src="https://avatars.githubusercontent.com/u/49278720?v=4" width="100px;" alt=""/><br /><sub><b>Pedro Portella</b></sub></a><br /></td>
  </tr>
</table>

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):
Thanks for the contributors people in [electron-vite-react](https://github.com/electron-vite/electron-vite-react), this project is based in your template.

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

# :page_facing_up: License

electron-vite-template is a open source project licensed as [MIT](LICENSE).


# 🚨 Be aware

This template integrates Node.js API to the renderer process by default. If you want to follow **Electron Security Concerns** you might want to disable this feature. You will have to expose needed API by yourself.  

To get started, remove the option as shown below. This will [modify the Vite configuration and disable this feature](https://github.com/electron-vite/vite-plugin-electron/tree/main/packages/electron-renderer#config-presets-opinionated).

```diff
# vite.config.ts

export default {
  plugins: [
-   // Use Node.js API in the Renderer-process
-   renderer({
-     nodeIntegration: true,
-   }),
  ],
}
```
