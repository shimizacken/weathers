# ⛅️ weathers ☔️

Weathers is a simple web application for displaying the weather in the current location. It's a `React-TypeScript` app, and uses the [`openweathermap.org`](https://www.openweathermap.org/) api.

It have `Storybook` for developing the stateless component (`Views`) isolatedly.

## Demo

<a href="https://my-weathers.netlify.app" target="_blank">https://my-weathers.netlify.app</a>


## Architecture
Since the app is relatively small, so the the folder structure is flat. The code split into layers such as components, hooks and utils. Components are split into stateless "dumb" components, that focuses on the design called `Views`, while the business logic and internal states are done in `ViewModel` component (`Containers`). Layout is done in the components that called `Page`.

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


## Naming conventions

| type                | filename                      | suffix  | examples              |
| ------------------- | ----------------------------- | ------- | --------------------- |
| component           | PascalCase                    | \*.tsx  | MyComponent.[page|viewModel|view].tsx       |
| component folder    | PascalCase                     | -       | MyComponent           |
| vanilla JS          | camelCase                     | \*.ts   | userStoreValidator.ts |
| component test file | PascalCase and dot             | \*.ts   | MyButton.test.js      |
| component's scss    | PascalCase                    | \*.scss | MyControls.module.scss       |
| partial scss        | low dash prefix and camelCase | \*.scss | \_variables.scss      |
| image               | dash-separated                | \*.png  | logo-icon.png         |
| svg                 | dash-separated                | \*.svg  | logo-icon.svg         |


## To complete

-   [ ] Back button
-   [ ] Test coverage
-   [ ] Translations
-   [ ] Deployment + CI/CD
-   [ ] Support themes
    -   [ ] Shared common styles variables
-   [ ] History page
-   [ ] Forecast
-   [ ] Open street map view
-   [ ] Graphs
-   [ ] Personalization

### License

[MIT License](LICENSE)
