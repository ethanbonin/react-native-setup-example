import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

//REDUX
import { connect } from "react-redux";
import * as actions from '../Redux/actions';

class SecondScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>You are on the second screen</Text>
        <Text>If you go back now, the name has changed to "Ethan"</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
  },
});

function mapStateToProps({user}) {
  return {user} ;
}
export default connect(mapStateToProps, null)(SecondScreen)
