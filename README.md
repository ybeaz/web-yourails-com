# README React Typescript UI Native Template

## Revisions history notes

created 2022

based on [React Typescript UI Web Template](https://github.com/ybeaz/react-ui-template-2021)

updated 2022-10-05

## Plan for work

## How to, architecture / development notes

### How to (web) add screens

1.  Use one of two templates
    - TemplateScreen (more customized for a screen) > `TemplateScreen.tsx` && `TemplateScreen.less` from `src/ViewLayer/Screens/`
    - Template (more universal) `Template.tsx` && `Template.less` from `src/ViewLayer/Components/`
2.  Add a link to `....less` file into `src/ViewLayer/Styles/index.style.less`
3.  Add a router into `src/Constants/routes.const.ts`
4.  Add a component import and property to the object into `src/RouterScreensConfig.tsx`
5.  Add 2.4 to the screen component

### How to (web) manage color themes `GLOBAL_THEME.colors`, `BRIGHTNESS` and `ALPHAS`

1.  Setup colors in `src/Constants/globalTheme.const.ts` Pay attention [0, 0, 12.5, 1] means for HSLA [hue, saturation, lightness, alphas] and for RGBA [red, green, blue, alpha]
2.  Set a default theme in `rootStoreDefault.globalVars.theme` in `src/DataLayer/rootStoreDefault.ts`
3.  Global theme has been added with `<GlobalTheme>` in `src/initializeBrowserApp.tsx`, and then with `getCreatedGlobalStyle` in `src/ViewLayer/Styles/getCreatedGlobalStyle.ts`
4.  Change default theme on the screen level such has been done in `useEffect(...)` in `SkillExchangeSeach.tsx`
5.  Add a custom theme color to the element in `getCreatedGlobalStyle` in `src/ViewLayer/Styles/getCreatedGlobalStyle.ts`
6.  You can specify a separate colors for each theme as it is done for example for `.ModalFrames ._content`

### How to Input values. Passing input values from input component is implemented by event.target.value in handleEvents function of the related property name in `src/DataLayer/index.handleEvents.ts`

    1. Passing actions. Passing an action is made through the secuence `Component` => `handleEvents` => `dispatch` => `reducer`

### How to add an modal window is made by the following:

1.  Add `ModalFrames` component to `HeaderFrame` component (once)
2.  Add a specific new component to `CHILDREN` object in the `ModalFrames` component
3.  Add an object to the array that controls modal window appearance to state tree `state`: { `componentsState`: {
    `modalFrames`: [ ... ]

### How to use templates:

    A developer is better to use `Template` for creating

1.  functional Components
2.  handlers
3.  reducers
4.  sagas
5.  connectors

### To run the mobile app

1.  To build Docker image from `docker-compose-mongodb.yml`\
    See here [`Docker.md`](https://github.com/ybeaz/manuals/blob/main/Docker.md)

2.  To run Server\
    in server directory run `yarn dev`

3.  To go to the UI directory: `cd Dev/react-ui-native-template-2022`

4.  To make sure the right path to App in here: `node_modules/expo/AppEntry.js`
    Probably `import App from '../../src/App';`

5.  To run the app: `yarn expo:start`
    To check xCode version: `/usr/bin/xcodebuild -version`


### To troubleshoot running the app
1. if you have exception `CommandError: Can't determine id of Simulator app; the Simulator is most likely not installed on this machine. Run sudo xcode-select -s /Applications/Xcode.app` then I run xcode.app and macbook suggested to update xcode. This solved the issue


### To create/ update `src/types/graphql.tsx`

To run `yarn codegen`
Note: to config `codegen` edit ??? `codegen.yml`

### To use react-chat-elements

1. gfd
2. yarn `react-native link react-native-vector-icons`
