import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Container, Spinner } from 'native-base';

import TodoListScreen from './screens/TodoListScreen';
import TodoAddScreen from './screens/TodoAddScreen';

const RootStack = createStackNavigator(
  {
    TodoList: {
      screen: TodoListScreen
    },
    TodoAdd: {
      screen: TodoAddScreen
    },
  }, //first param
  {
    initialRouteName: 'TodoList',
  } //second param
)

export default class App extends React.Component {

  state = {
    fontLoaded: false,
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    if(!this.state.fontLoaded){
      return <Spinner/>
    }

    return <RootStack />;
  }

}
