# Table with Search and Sorting

This repository contains a versatile table component with search and sorting functionalities fully compatible with `iOS and Android`. The table is designed to handle generic data types, allowing it to be used with various datasets. It supports two fully sortable columns, making it easy to organize and display data based on specific criteria.

## Screen Recording
In this video, you can see the app running on an `iOS device 14 Pro iOS 16.4`. The React Native Debugger is open, allowing us to inspect the cache system. The data is fetched and updated every 20 seconds, and the debounced search provides real-time results as the user types.

Click the image below for the video showcase:

[<img src="https://drive.google.com/uc?id=1Qr79jDWoAkUNuucKPUVmhiEDW9qdhd8x" width="80%">](https://drive.google.com/file/d/1KZY1nOZmu43ooGbKhSipHihSqWus8i6Y)

This video showcases the app on an `Android device Pixel 5 API33`. The same features are demonstrated here, including sorting, search, and data caching. `Please note` that there are a few UI inconsistencies on Android, as refining the UI `was not part` of the initial goal.

Click the image below for the video showcase:

https://github.com/Gualberto-Vannini/sorting_table/assets/22340454/c15354da-013f-4a39-a9bc-f5a88d5d2ca1

## UI Differences

The User Interface (UI) of the application may vary slightly between iOS and Android due to platform-specific design guidelines and conventions. However, it's important to note that the overall user experience and functionality are consistent across both platforms.
Please keep in mind that the main focus of this repository is on the core functionality and codebase, and the UI was not the primary scope of this project. As a result, some platform-specific UI optimizations may not have been extensively implemented.


## Features

- **Search with Debounce:** The search functionality is optimized with a debounce mechanism, ensuring that the search logic is triggered only after the user pauses typing. This enhancement prevents excessive filtering, providing a seamless experience even with large datasets or complex search criteria.

- **Caching Data with Async Storage:** To improve data retrieval efficiency, the application caches data in the device's Async Storage. The cached data is fetched every 20 seconds (configurable), reducing the need for constant network requests and enhancing the overall performance of the application.

- **Refresh Data with Button:** A convenient "Refresh Data" button is provided to manually trigger data fetching from the Async Storage. This gives users the flexibility to update the data whenever needed, ensuring they always have access to the latest information without the need for automatic data refreshes.ù

- **API:**
The API used in this app is stored in my GitHub Gist. You can find it here: [APIs](https://gist.githubusercontent.com/Gualberto-Vannini/808e6e93e57da96c8e82a6991d1cf08b/raw/9a1b4eb83eb5707e7da4033645a06abde2dbed97/sorting_table.json)

## Pre requisites
- [Node.js > 14](https://nodejs.org) and yarn (Recommended: Use [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 14.3](https://developer.apple.com/xcode)
- [Cocoapods 1.11.3](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [min Android Studio canary 5 and Android SDK](https://developer.android.com/studio)

## Base dependencies
- [gist github APIs](https://gist.github.com/Gualberto-Vannini) personal github gist for APIs.
- [axios](https://github.com/axios/axios) for networking.
- [prop-types](https://github.com/facebook/prop-types) to type-check our components exposed properties.
- [react-native-config](https://github.com/luggit/react-native-config) to manage envionments.
- [react-navigation](https://reactnavigation.org/) navigation library.
- [stack-navigator](https://reactnavigation.org/docs/stack-navigator/) to handle stack navigation.
- [bottom-tabs-navigator](https://reactnavigation.org/docs/bottom-tab-navigator/) as bottom tab solution.
- [redux](https://redux.js.org/) for state management.
- [redux-persist](https://github.com/rt2zz/redux-persist) as persistance layer.
- [redux-thunk](https://github.com/gaearon/redux-thunk) to dispatch asynchronous actions.
- [redux-toolkit](https://github.com/reduxjs/redux-toolkit) toolset for efficient Redux development.
- [async-storage](https://react-native-async-storage.github.io/async-storage/docs/install/) data storage system for React Native.
- [styled-components](https://github.com/styled-components/styled-components) style your component with a custom theme app wrapper.
- [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context)flexible way to handle safe area.
- [react-native-rename](https://github.com/junedomingo/react-native-rename)rename easily the project.
- [react-native-svg](https://github.com/software-mansion/react-native-svg) svg for tab bar icons.
- [jest](https://facebook.github.io/jest/) for testing.

## Folder structure
- `__tests__`: Folder to store all unit tests
- `src`: This folder is the main container of all the code inside your application.
  - `api`: Folder to store all axios rest apis.
  - `components`: Folder to store any common component that you use through your app.
  - `hooks`: Folder to store custom hooks.
  - `navigation`: Folder to store all screens and possibile stacks.
  - `redux`: Folder to store all redux actions, selectors e the application storage logic.
  - `screens`: Folder to store all screens and possibile stacks.
  - `utils`: Folder to store utilities.
      - `helpers`: Folder to store helper functions.
  - `theme`: Folder to store all the styling concerns related to the application theme.
  - `App.tsx`: Main component that starts your whole app.
- `index.js`: Entry point of your application as per React-Native standards.

## Setup environments

### Using scripts from console

The template already has scripts to execute the project calling a specific environment defined into the package.json file.

#### iOS install
with M1 machine could happen sever problems connected with rosetta setup. Place check the scripts into the package.json
- M1: `yarn m1-ios-install`
- intel: `yarn intel-install`

#### iOS cleanup
with M1 machine could happen sever problems connected with rosetta setup. Place check the scripts into the package.json
- M1: `yarn m1-ios-cleanup`
- intel: `yarn intel-ios-cleanup`

#### iOS execute
- `ALWAYS raccomanded to execute the codebase with xcode`
- M1 and intel: `yarn ios`

#### Android cleanup
- `yarn android-cleanup`

#### Android execute
- `ALWAYS raccomanded to execute the codebase with Android Studio`
- `yarn android`


You can always execute both OS from Xcode and Android Studio. My suggestion is always execute with native IDE in order to see more logs.

## Jest Unit Tests

![tests](https://github.com/Gualberto-Vannini/sorting_table/assets/22340454/eaf600f1-d9d4-4509-b5c3-71199eb03fe8)


`schouldfetchData` - This test suite includes tests for the shouldFetchData utility function, which is part of the src/utils/helpers module and is responsible for checking the validity of cached data. The function is designed to determine whether data is available in AsyncStorage, whether it has expired, or whether it needs to be fetched.

`useHandleSort` - This test suite covers the useHandleSort custom hook, which is designed to manage sorting functionality in React components. The hook provides the ability to initialize with default values and update the sorting key and direction when calling the handleSort function..

`useSortData` - This test suite focuses on the useSortData custom hook, which is responsible for sorting data in React components based on a specified sort key and sort direction.

`useDebouncedSearch` - This test suite focuses on testing the useDebouncedSearch custom hook, which enhances search functionality in React components by providing debounce optimization. The hook is responsible for managing the search logic with a specified debounce time, allowing the search results to update only after a user pauses typing.

All test can be executed with `yarn test`

## Redux
Once the components are defined, they are tied to the management of information through the application. For this, Redux is implemented with the store-reducer-action structure as usual, however, not only the data is handled through the actions but the success, error and loading responses are also defined by the same form.

### Controllers folder and API connection handler

To keep the networking layer simple, the template uses a single Axios instance in the `src/api/Apis.ts`. It uses interceptors to define common side effects for the responses.

When you need communication with a service you have to create a function to manage the operation and grouping according to the kind of transaction inside a controller file, please keep all of those inside the controllers' folder.

While the data transfer between the API and the app is working you must use the success and error actions that help you to catch the result of the operation. With this method, you can track the interaction through the redux store. This is useful because you can create behaviors based on those states in a quick and simple way

### Redux folders

- `redux`
   - `users`: folder to store all redux information connected to users apis.
      - `users.ts` handle actions in your reducers:
      - `usersActions.ts` createAsyncThunk abstracts the standard recommended approach for handling async request lifecycles.
      - `usersSelector.ts`: selectors.
   - `loading`: folder to store all redux load state information.
   - `rootReducer`: combining reducers into RootState.
   - `store`: here you define the store shape and you can configure the persistReducer and middlewares.


## Screens

In this folder, you have the main objects to apply the composition architecture. Just create a folder for each screen you have in your application, call all the components and static resources you need to render the scene and finally use the corresponding hooks to interact with redux and create behaviors depending on the store.

## Debugging

For debugging, we use [React Native Debugger](https://github.com/jhen0409/react-native-debugger). After this has been installed, open the debugger and run the app. You should see the JavaScript logs appear in the debugger console. You can execute and runs using the shortcut `⌘ + D`.

## Generate production version

Not in scope of the project


## Personal Goals

This repository is a partial clone and reuse of my [personal RN template](https://github.com/Gualberto-Vannini/template_RN_2023) and also [card and calendar template](https://github.com/Gualberto-Vannini/opening_hours). My aim is to have a quick and easy way to start new projects using my preferred, adaptable, and scalable structure. I consider this repository a part of my personal development journey, as it allows me to swiftly create new apps whenever I have an idea.



License

This project is licensed under the MIT License.
