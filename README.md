# Simple Typescript React project

This repo allows you to quickly build a simple static site with react and typescript without installing the entire `create-react-app`.

It is meant primarily as reference as a minimal working example.

## Features
- Simple
    - Most dependencies are for the development server
- Hot-reloading
    - Uses the `concurrently` and `lite-server` packages for a simple hot-reloading dev server.
- Does **not** open a browser window when starting up
    - Includes a `bs-config.json` file to stop Browser Sync (from `lite-server`) from opening your default browser.

## Usage
Write your typescript and typescript react files in `src/`. Then run

```shell
npm run dev
```

to start the development server. This will hot-reload your page and recompile your typescript files on save.

## Even simpler
If you don't care about hot-reloading in your browser, you can remove the `concurrently`, and `lite-server` dependencies. Just build your project with

```shell
npx webpack --config webpack.config.js
```

Then just run your favorite server from `dist/`.