# CoreUI PRO React Admin Template (TypeScript)

Custom Children Repo

git clone https://github.com/your-username/original-repo.git
cd original-repo

git remote rename origin upstream
git remote add origin https://github.com/your-username/new-repo.git

git fetch upstream

git merge upstream/main

# Syncing a Forked Repository with Upstream Updates

This guide outlines the steps to maintain your forked repository while still incorporating updates from the original repository (referred to as "upstream"). This allows you to work independently while synchronizing updates when necessary.

---

## Prerequisites
Ensure you have Git installed and your forked repository cloned locally.

---

## Steps

### 1. **Add the Upstream Remote**
You need to add the original repository (upstream) as a remote.

```bash
# Navigate to your local repository
cd /path/to/your/repo

# Add the upstream remote
# Replace <original-repo-url> with the original repository's URL
git remote add upstream <original-repo-url>
```

### 2. **Verify the Remotes**
Ensure both `origin` (your fork) and `upstream` (the original repository) are set up.

```bash
git remote -v
```
You should see output similar to:
```
origin    https://github.com/your-username/your-repo.git (fetch)
origin    https://github.com/your-username/your-repo.git (push)
upstream  https://github.com/original-username/original-repo.git (fetch)
upstream  https://github.com/original-username/original-repo.git (push)
```

### 3. **Fetch Updates from Upstream**
Pull in the changes from the upstream repository without merging.

```bash
git fetch upstream
```
This fetches all branches from the upstream repository.

### 4. **Merge Upstream Changes**
Merge the changes from the upstream branch (e.g., `main`) into your local branch.

```bash
# Merge upstream changes into your local branch
git merge upstream/main --allow-unrelated-histories
```
The `--allow-unrelated-histories` flag is required if the histories of `origin` and `upstream` are unrelated.

### 5. **Resolve Merge Conflicts (If Any)**
If there are merge conflicts, Git will pause the merge and prompt you to resolve them. Use your text editor or IDE to resolve the conflicts.

After resolving the conflicts:

```bash
# Stage the resolved files
git add .

# Complete the merge
git commit -m "Merged upstream changes"
```

### 6. **Push the Changes to Your Fork**
Finally, push the merged changes to your fork (origin).

```bash
git push origin main
```

---

## Optional: **Rebase Instead of Merge**
If you prefer a linear history, you can rebase your changes on top of the upstream branch:

```bash
# Fetch upstream changes
git fetch upstream

# Rebase your branch onto upstream
git rebase upstream/main

# Push the rebased changes (force push is required)
git push origin main --force
```

---

## Automating the Process
For convenience, you can create a script to automate the synchronization process:

```bash
#!/bin/bash
# Sync script for forked repository

git fetch upstream
git merge upstream/main --allow-unrelated-histories

echo "Successfully synced with upstream."
```
Save this script (e.g., as `sync.sh`) and run it whenever you need to update your fork.

```bash
bash sync.sh
```

---

By following this guide, you can maintain a forked repository that stays updated with the original project while preserving your own changes.



CoreUI is meant to be the UX game changer. Pure & transparent code is devoid of redundant components, so the app is light enough to offer ultimate user experience. This means mobile devices also, where the navigation is just as easy and intuitive as on a desktop or laptop. The CoreUI Layout API lets you customize your project for almost any device – be it Mobile, Web or WebApp – CoreUI covers them all!

## Table of Contents

* [Versions](#versions)
* [Quick Start](#quick-start)
* [Installation](#installation)
* [Basic usage](#basic-usage)
* [What's included](#whats-included)
* [Documentation](#documentation)
* [Versioning](#versioning)
* [Creators](#creators)
* [Community](#community)
* [Copyright and License](#copyright-and-license)

## Versions

* [CoreUI Pro Angular Admin Template](https://coreui.io/product/angular-dashboard-template/)
* [CoreUI Pro Bootstrap Admin Template](https://coreui.io/product/bootstrap-dashboard-template/)
* [CoreUI Pro React Admin Template](https://coreui.io/product/react-dashboard-template/)
* [CoreUI Pro Vue Admin Template](https://coreui.io/product/vue-dashboard-template/)

## Quick Start

- [Download the latest release](https://github.com/coreui/coreui-pro-react-admin-template-typescript/archive/refs/heads/main.zip)
- Clone the repo: `git clone https://github.com/coreui/coreui-pro-react-admin-template-typescript.git`

### Installation

``` bash
$ npm install
```

or

``` bash
$ yarn install
```

### Basic usage

``` bash
# dev server with hot reload at http://localhost:3000
$ npm start 
```

or 

``` bash
# dev server with hot reload at http://localhost:3000
$ yarn start
```

Navigate to [http://localhost:3000](http://localhost:3000). The app will automatically reload if you change any of the source files.

#### Build

Run `build` to build the project. The build artifacts will be stored in the `build/` directory.

```bash
# build for production with minification
$ npm run build
```

or

```bash
# build for production with minification
$ yarn build
```

## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
coreui-pro-react-admin-template-typescript
├── public/          # static files
│   ├── locales/
│   ├── favicon.ico
│   └── manifest.json
│
├── src/             # project root
│   ├── assets/      # images, icons, etc.
│   ├── components/  # common components - header, footer, sidebar, etc.
│   ├── layouts/     # layout containers
│   ├── scss/        # scss styles
│   ├── views/       # application views
│   ├── _nav.tsx     # sidebar navigation config
│   ├── App.tsx
│   ├── index.tsx
│   ├── routes.tsx   # routes config
│   └── store.ts     # template state example 
│
├── index.html       # html template
├── ...
├── package.json
├── ...
└── vite.config.ts  # vite config
```

## Documentation

The documentation for the CoreUI Admin Template is hosted at our [website](https://coreui.io/react/docs/templates/installation/)

## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, CoreUI PRO React Admin Template is maintained under [the Semantic Versioning guidelines](http://semver.org/).

See [the Releases section of our project](https://github.com/coreui/coreui-pro-react-admin-template-typescript/releases) for changelogs for each release version.

## Creators

**Łukasz Holeczek**
* <https://twitter.com/lukaszholeczek>
* <https://github.com/mrholek>
* <https://github.com/coreui>

**CoreUI team**
* https://github.com/orgs/coreui/people

## Community

Get updates on CoreUI's development and chat with the project maintainers and community members.

- Follow [@core_ui on Twitter](https://twitter.com/core_ui).
- Read and subscribe to [CoreUI Blog](https://coreui.ui/blog/).

## Copyright and License

copyright 2024 creativeLabs Łukasz Holeczek.   

You must have a valid license purchased to legally use this product for
your projects.

You can buy a license on our website https://coreui.io
