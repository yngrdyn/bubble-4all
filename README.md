# \<bubble-4all>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
yarn
```

## Usage

```html
<script type="module">
  import 'bubble-4all/bubble-4all.js';
</script>

<bubble-4all></bubble-4all>
```

### Properties
All bubble properties are optional

| Property  | Default Value | Description |
| ------------- | ------------- | ----------|
| ariaLabelOpen | "Open bubble" | Used for a11 |
| ariaLabelClose | "Close bubble" | Used for a11 |
| bgColor | "#0059E1" | Bubble background color |
| icon | Chat icon | Icon inside the bubble |
| iconHovered | Chat icon variation | Icon inside the bubble when hovered |
| bounce | false | Determines whether the bubble bounces or not |

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
yarn lint
```

To automatically fix linting and formatting errors, run

```bash
yarn format
```

## Testing with Web Test Runner

To execute a single test run:

```bash
yarn test
```

To run the tests in interactive watch mode run:

```bash
yarn test:watch
```

## Demoing with Storybook

To run a local instance of Storybook for your component, run

```bash
yarn storybook
```

To build a production version of Storybook, run

```bash
yarn storybook:build
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
yarn start
```

To run a local development server that serves the basic demo located in `demo/index.html`
