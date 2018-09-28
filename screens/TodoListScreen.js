import React, { Component } from 'react';
import { Container, Content, Text, List, ListItem, Fab, Icon, Spinner } from 'native-base';
import axios from 'axios';

export default class TodoListScreen extends Component {

  static navigationOptions = {
    title: 'Todo App',
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
      todos: [],
      isLoading: true
    }
  }

  componentDidMount(){
    axios.get('http://10.10.20.207:3000/todos').then((result)=>{
      this.setState({
        todos: result.data,
        isLoading: false
      })
    })
  }

  // allTodos(){
  //   axios.get('http://10.10.20.207:3000/todos').then((result)=>{
  //     this.setState({
  //       todos: result.data,
  //       isLoading: false
  //     })
  //   })
  // }

  render(){
    return (
      <Container>
        <Content>
          {this.state.isLoading? (
            <Spinner/>
          ): (
            <List>
              {this.state.todos.map((todo, index)=> (
                <ListItem key={todo.id}>
                  <Text>{todo.title}</Text>
                </ListItem>
              ))}
            </List>
          )}


        </Content>

        <Fab
          style={{ backgroundColor: '#f4511e' }}
          position="bottomRight"
          onPress={() => this.props.navigation.navigate('TodoAdd'})}
        >
          <Icon name="add" />
        </Fab>

      </Container>
    )
  }

}
