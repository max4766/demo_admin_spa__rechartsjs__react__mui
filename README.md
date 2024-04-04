# Introduction

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a demo web page shows a datasheet with `react-datasheet-grid` and a chart  with `recharts`.

You can add rows and extra contents in the datasheet yet it doesn't save data you would type.

BarChart data here is locally defined as 'data'. You can check recharts UI.

When you hover Navigation bar, you can see the name of each icon.

All the components were made with `MUI`.

## Getting Started

First, copy this project's URL and clone this project into your local with git :

```bash
git clone [project URL]
```

FYI, No need to make a new folder for this project. 

it is already packed in the folder with it's project name when you clone.

Then, recover packages. update node_modules with the command below :

```bash
npm install
```

Next, run the development server with one of the commands below (npm recommended) :

```bash
npm run dev
```

```bash
yarn dev
```

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Congratulations! you can now see the view of this project! 

## About the source

- `src/components/Header.js` : This is the part where Navigationbar compromises using MUI components.

even if you click the items, it won't redirect to other pages yet it shows the name of what each icon stands for.

- `src/components/Main.js` : Main page where MainBarChart.js and MainDatasheet.js contents are mingled up in MUI grid component.

- `src/components/MainBarChart.js` : Barchart. Data is defined here. It doesn't get data from other servers.

this shows how recharts UI looks like.

- `src/components/MainDatasheet.js` : Datasheet. As a default, you can add items by click Add button in a combination with adjusting rows input.

there is no option to save data here.

## Goal

The goal of this project was `To swiftly ideate a concept with ready-made components with React and MUI`.

this project has taken only less than an hour thought it takes a huge amount of time if you markup without framework and library.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
