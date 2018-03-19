import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

//REDUX
import { connect } from "react-redux";
import * as actions from '../Redux/actions';

//COMPONENTS
import GoToSecondScreenButton from '../Components/FirstScreen/GoToSecondScreenButton'


class FirstScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the userName: {this.props.user.first}</Text>
        <GoToSecondScreenButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 2,
  },
});


function mapStateToProps({user}) {
  return {user} ;
}
export default connect(mapStateToProps, actions)(FirstScreen)
