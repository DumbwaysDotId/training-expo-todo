import React, { Component } from 'react';
import { Container, Content, Text, Input, Label, Button, Item } from 'native-base';
import axios from 'axios';

export default class TodoAddScreen extends Component {

  static navigationOptions = {
    title: 'Add Todo',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor(){
    super();
    this.state = {
      title: ""
    }
  }

  handleSubmit(){
    const title = this.state.title;

    axios.post('http://10.10.20.207:3000/todos', {title, isCompleted: false}).then(()=>{
      // this.props.navigation.getParam('allTodos', [])();
      this.props.navigation.goBack();
    })
  }

  render(){
    return (
      <Container>
        <Content>
          <Item stackedLabel>
            <Label>What to do?</Label>
            <Input onChangeText={(title)=> this.setState({title})}/>
          </Item>

          <Button full danger onPress={()=> this.handleSubmit()}>
            <Text>Add</Text>
          </Button>
        </Content>
      </Container>
    )
  }

}
