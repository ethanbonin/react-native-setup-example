# react-native-setup-example
I made this project to remind myself every time I set up a react native project
I'm going to break this into steps that best suit my setup




## STEP 1 - react init
Move the directory of choice

```
react-native init MY_CUSTOM_PROJECT
```

The list of modules to install
* __redux__ - For State Control
* __redux-thunk__ - For State Control
* __react-redux__ - For state control
* __react-native-router-flux__ - For Navigation
* __lodash__ - For better programming


Move into the directory, then install, then final up with npm install
``` 
cd MY_CUSTOM_PROJECT && npm install --save lodash redux redux-thunk react-redux react-native-router-flux  && npm install
``` 


## STEP 2 - SET UP DIRECTORIES
The best set up that I find for components and screen control.

- APP
  * COMPONENTS
    - SCREEN
      - STYLES
         CLASS/PURE COMPONENT STYLE.js
      * CLASS/PURE COMPONENT.js
  * SCREENS
    - STYLES
      * CLASS COMPONENT STYLE
    - COMPONENT_SCREEN.js
  * REDUX
  
  Make sure you're at inside the Main directory of the newly created Project Folder (aka: ```./MY_CUSTOM_PROJECT```)
  
  ```
  mkdir App && mkdir App/Components && mkdir App/Screens && mkdir App/Redux
  ```
  
## STEP 3 - APP SET UP 
Because this is an example app with setting up the app and redux, I will only be creating two screens.

- Create the first and second screen inside the screens folder. 
  - Then add the firstScreen folder to the components to add a button
```
touch App/Screens/FirstScreen.js && touch App/Screens/SecondScreen.js && mkdir App/Components/FirstScreen && touch App/Components/FirstScreen/GoToSecondScreenButton.js
```

- This is an example of a button on the first screen to go to the second screen. You can copy and paste this file into the __GoToSecondScreenButton.js__

[GoToSecondScreenButton.js](https://github.com/ethanbonin/react-native-setup-example/wiki/GoToSecondScreenButton.js)


- This is the first screen. Also, can copy and paste into the file if needed __FirstScreen.js__

[FirstScreen.js](https://github.com/ethanbonin/react-native-setup-example/wiki/FirstScreen.js)


- This is the second Screen code. You can copy and paste it into __SecondScreen.js__

[SecondScreen.js](https://github.com/ethanbonin/react-native-setup-example/wiki/SecondScreen.js)



- __LASTLY__ and most importantly, the set up for the App.js file. I would definitely copy and paste this.

[App.js](https://github.com/ethanbonin/react-native-setup-example/wiki/App.js)


# STEP 3 - REDUX
Now the app won't run just yet because we have not conneted the redux. Lets do that now
- __Create the folders__
``` 
mkdir App/Redux/actions && mkdir App/Redux/reducers
```

- __Follow up creating the index files and User Reducer__
```
touch App/Redux/actions/index.js && touch App/Redux/actions/types.js &&  touch App/Redux/reducers/index.js && touch/App/Redux/reducers/userReducer.js
```


- You'll want to copy and paste the index.js into the actions folder.
[actions/index.js](https://github.com/ethanbonin/react-native-setup-example/wiki/-actions-index.js)

-Then follow up with the types
[actions/types.js](https://github.com/ethanbonin/react-native-setup-example/wiki/actions-types.js)


- Here is the reducer Stuff
[reducer/index.js](https://github.com/ethanbonin/react-native-setup-example/wiki/reducers-index.js)

- Here is the userReducer 
[reducer/index.js](https://github.com/ethanbonin/react-native-setup-example/wiki/reducers-userReducer.js)
