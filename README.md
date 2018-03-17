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


``` 
npm install --save lodash redux redux-thunk react-redux react-native-router-flux 
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
  mkdir App && mkdir App/Components && App/Screens && App/Redux
  ```
  
## STEP 3 - APP SET UP 
Because this is an example app with setting up the app and redux, I will only be creating two screens.
  
