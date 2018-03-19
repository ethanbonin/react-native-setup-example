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

- This is an example of a button on the first screen to go to the second screen
```
// COMPONENT GOTO SCREEN BUTTON
import React, { Component } from 'react';
import {
  View,
  Button,
  StyleSheet
} from 'react-native';
import { Actions } from "react-native-router-flux"

class GoToSecondScreenButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => {
          console.log("Pushing to second Screen")
        }}
      title="Go To Second Screen"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GoToSecondScreenButton
``` 
- This is the first screen
```
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import GoToSecondScreenButton from '../Components/FirstScreen/GoToSecondScreenButton'

class FirstScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the MyComponent component</Text>
        <GoToSecondScreenButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FirstScreen
```


- This is the second Screen
```
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class SecondScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the MyComponent component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SecondScreen
```


- __LASTLY__ and most importantly, the set up for the App.js file
```
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";

//------ROUTER RELATED-----------------//
import { Scene, Router, Stack } from "react-native-router-flux";

import FirstScreen from "./App/Screens/FirstScreen";
import SecondScreen from "./App/Screens/SecondScreen";
//----------------------------//

//-------REDUX RELATED--------//
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducers from "./App/Redux/reducers/";
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
//--------------------------//

export default class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key={"root"}>
              <Scene
                key={"FirstScreen"}
                hideNavBar="true"
                component={FirstScreen}
                title="First Screen"
                initial
              />
              <Scene
                key={"SecondScreen"}
                component={SecondScreen}
                title="Second Screen"
              />
            </Stack>
        </Router>
      </Provider>
    );
  }
}
```

# STEP 3 - REDUX
Now the app won't run just yet because we have not conneted the redux. Lets do that now
__Create the folders__
``` 
mkdir App/Redux/actions && mkdir App/Redux/reducers
```

__Follow up creating the index files and User Reducer__
```
touch App/Redux/actions/index.js && touch App/Redux/actions/types.js &&  touch App/Redux/reducers/index.js && touch/App/Redux/reducers/userReducer.js
```


  
