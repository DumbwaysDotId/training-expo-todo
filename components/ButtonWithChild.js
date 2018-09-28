import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default class ButtonWithChild extends Component {

    render(){
      return (
        <View>
          <TouchableOpacity
            style={{backgroundColor: 'green'}}
          >
            {this.props.children}
          </TouchableOpacity>
        </View>
      )
    }
}
