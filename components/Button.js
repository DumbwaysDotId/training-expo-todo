import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default class Button extends Component {

    render(){
      return (
        <View>
          <TouchableOpacity
            style={{backgroundColor: this.props.color}}
          >
            <Text>{this.props.text}</Text>
          </TouchableOpacity>
        </View>
      )
    }
}
