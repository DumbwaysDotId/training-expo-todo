import React, { Component } from 'react';
import { Container, Content, Text, Input, Label, Button, Item } from 'native-base';
import axios from 'axios';

export default class TodoDetailScreen extends Component {

  static navigationOptions = {
    title: 'Todo Detail',
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
      todo: {}
    }
  }

  componentDidMount(){
    const id = this.props.navigation.getParam('id', null);

    axios.get('http://10.10.20.207:3000/todos/'+ id).then((result)=> {
      this.setState({todo: result.data})
    })
  }

  handleDelete(){
    const id = this.props.navigation.getParam('id', null);

    axios.delete('http://10.10.20.207:3000/todos/'+ id).then((result)=> {
      this.props.navigation.goBack();
    })
  }


  render(){
    return (
      <Container>
        <Content>
          <Text>{this.state.todo.id}</Text>
          <Text>{this.state.todo.title}</Text>
          <Text>{this.state.todo.isCompleted? "Done": "Not Done"}</Text>

          <Button danger full onPress={()=> this.handleDelete()}>
            <Text>Delete</Text>
          </Button>
        </Content>
      </Container>
    )
  }

}
