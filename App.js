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
