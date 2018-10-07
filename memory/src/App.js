import React, { Component } from 'react';
import Navbar from "../src/components/Navbar"
import Jumbotron from "../src/components/Jumbotron"
import Friends from "./friends.json"
import Card from "./components/Card"
import './App.css';
import Wrapper from './components/Wrapper';




class App extends Component {
   styles={
    width:150,
    height:150
  }
state = {
  Friends,
  topScore:0,
  currentScore:0,
  correctIncorrect: "",
  clicked: []

}

styles={
  width:150,
  height:150
}

randomShuffle = (Friends) => {
  for (let i = Friends.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [Friends[i], Friends[j]] = [Friends[j], Friends[i]];
  }
  return Friends;
};

handleIncrement = () => {
  const newScore = this.state.currentScore + 1;
  this.setState({
    currentScore: newScore,
    correctIncorrect: "You guessed correctly!"
  });
  if (newScore >= this.state.topScore) {
    this.setState({ topScore: newScore, currentScore:newScore });
  }
  else if (newScore === 12) {
    this.setState({ correctIncorrect: "You win!" });
  }
  this.handleShuffle();
};


handleReset = () => {
 
  this.handleShuffle();
};

handleShuffle = () => {
  let shuffledFriends = this.randomShuffle(Friends);
  this.setState({ Friends: shuffledFriends });
};

handleClick = id => {
  if (this.state.clicked.indexOf(id) === -1) {
    this.handleIncrement();
    this.setState({ clicked: this.state.clicked.concat(id) });
  } else {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      correctIncorrect: "You guessed incorrectly!",
      clicked: []
    });
    this.handleReset();
    
  }
};
 



  render() {
    
   
    return (
      <div>
      <Navbar
      title="One Piece Clicky Game"
      topScore={this.state.topScore}
      score={this.state.currentScore}
      correctIncorrect={this.state.correctIncorrect}
      
      />
      <Jumbotron />
     <Wrapper>
      {this.state.Friends.map(item =>(
      
        <Card 
        handleClick={this.handleClick}
        handleIncrement={this.handleIncrement}
        handleReset={this.handleReset}
        handleShuffle={this.handleShuffle}
        image={item.image}
        id={item.id}
        key={item.id}
        style={this.styles}

      
      />
    
      ))}
      </Wrapper>
     </div>
    );
  }
}

export default App;
