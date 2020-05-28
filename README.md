# Simple Typescript React project

This repo allows you to quickly build a simple static site with react and
typescript without installing the entire `create-react-app`.

This repo is meant primarily as reference for a minimal working typescript
react project.

## Features
- Absolute path imports
    - You can now use absolute path imports to any file in the `src/`
    directory. This was set in the `tsconfig.json` file with the `"baseUrl"`
    option.

- Scoped css class names
    - Using the webpack `css-loader`, it is possible to use scoped css class
    names.

        UPDATE: There were some issues with typescript which were partially
        solved by the `global.d.ts` file, but are actually solved by the
        `css-modules-typescript-loader` package. This package will automatically
        generate `*.css.d.ts` files for each css file.

    - See [this page](https://webpack.js.org/loaders/css-loader/#modules) for
    more info.

    ```tsx
    import React from "react";
    import style from "./style.css";

    const MyComponent: React.FC = () => (
        <div className={ style["my-scoped-class-name"] }>
            My Component content
        </div>
    )
    ```

- Simple
    - Most dependencies are for the development server

- Hot-reloading
    - Uses the `concurrently` and `lite-server` packages for a simple
    hot-reloading dev server.

- Does **not** open a browser window when starting up
    - Includes a `bs-config.json` file to stop Browser Sync (from
    `lite-server`) from opening your default browser.

## Usage
Write your typescript and typescript react files in `src/`. Then run

```shell
$ npm run dev
```

to start the development server. This will hot-reload your page and recompile your typescript files on save.

## Even simpler
If you don't care about hot-reloading in your browser, you can remove the
`concurrently`, and `lite-server` dependencies. Just build your project with

```shell
$ npx webpack --config webpack.config.js
```

Then just run your favorite server from `dist/`.

Similarly, if you don't care about scoped css or just have a global css file,
you can remove the following packages
- `css-loader`
- `css-modules-typescript-loader`
- `style-loader`

and just import your css file(s) in `dist/index.html`.