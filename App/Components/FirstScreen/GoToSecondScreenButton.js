import React, { Component } from 'react';
import {
  View,
  Button,
  StyleSheet
} from 'react-native';
import { Actions } from "react-native-router-flux"

//REDUX
import { connect } from "react-redux";
import * as actions from '../../Redux/actions';

class GoToSecondScreenButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => {
          console.log("Pushing to second Screen and updating name with a reducer")

          //This is how you call the action for the reducers
          this.props.changeUserName()

          //example of how to push to second screen
          Actions.SecondScreen()
        }}
      title="Update State and Change name"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default connect(null, actions)(GoToSecondScreenButton)
