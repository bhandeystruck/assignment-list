import React, {Component} from 'react'
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
 state = {
    userInput: ''
 }
 
 inputChangedHandler = (event) => {
    //take the input store it in state
    this.setState( {userInput:event.target.value} );
 }

removeCharacterHandler = (index) => {
  //get the text from the user input state
  const text = this.state.userInput.split('');
  //removing the character using spice at the index
  text.splice(index, 1);
  //the new update text we joi with empty character converting it into string
  const updatedText = text.join('');
  //updating the state
  this.setState({userInput:updatedText});

}

  render(){

    const charList = this.state.userInput.split('').map((ch,index)=>{
      return <Char character={ch} 
      key={index}
      clicked={() => this.removeCharacterHandler(index)}
      />;
    });

    return (
      <div className="App">

      {/*Binding the input to the latest value that is state.userInput */}
      <input type="text" onChange={this.inputChangedHandler} value={this.state.userInput}></input>

      {/*Dynamic content display the state here */}
      <p>{this.state.userInput}</p>
      <Validation inputLength={this.state.userInput.length}></Validation>
      {charList}
      </div>
     
    );
  }

}

export default App;
