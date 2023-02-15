# ⛅️ weathers ☔️


Weathers is a simple web application for displaying the weather.

It's a `React` based and made usage of
[`openweathermap.org`](https://www.openweathermap.org/) api.

<div align="center">
    <img src="src/assets/png/wf-logo.png" />
</div>

## What’s Included?

-   [React](http://reactjs.org)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Storybook](https://storybook.js.org)


## Usage

For run the unit-tests of the application, run: and then:

For running the app

```bash
yarn start
```

For running `storybook`

```bash
yarn storybook
```

### Test

-   Unit tests with [`Jest`](https://jestjs.io/)


## Naming conventions

| type                | filename                      | suffix  | examples              |
| ------------------- | ----------------------------- | ------- | --------------------- |
| component           | PascalCase                    | \*.tsx  | MyComponent.tsx       |
| component folder    | camelCase                     | -       | myComponent           |
| vanilla JS          | camelCase                     | \*.ts   | userStoreValidator.ts |
| component test file | camelCase and dot             | \*.ts   | myButton.test.js      |
| component's scss    | PascalCase                    | \*.scss | MyControls.module.scss       |
| partial scss        | low dash prefix and camelCase | \*.scss | \_variables.scss      |
| image               | dash-separated                | \*.png  | logo-icon.png         |
| svg                 | dash-separated                | \*.svg  | logo-icon.svg         |


## Road map

-   [ ] Translations
-   [ ] History page
-   [ ] Forecast
-   [ ] Open street map view
-   [ ] Graphs
-   [ ] Personalization

### License

[MIT License](LICENSE)
