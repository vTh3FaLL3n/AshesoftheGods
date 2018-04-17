import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import axios from 'axios';

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";

class App extends Component {
  state = {
    username: "",
    password: "",
    auth: {
      userId:"",
      username:"",
      isAuthenticated:false
    }
  };

  componentWillMount(){
    axios.get("/auth/isAuthenticated").then((result)=>{
      const {userId, isAuthenticated,username} = result.data
      this.setState({
        auth:{
          userId,
          isAuthenticated,
          username
        }
      });
    });
  }

  handleChange = (event) => {
    const {name, value} = event.target;    
        // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    //call a sign In function
    const newUser = {
      username: this.state.username,
      password: this.state.password
    };
    this.setState({
      username: "",
      password: ""
    }); 
    const {name} = event.target;
    axios.post(name, newUser).then((data) => {
      if (data.data.isAuthenticated){
        const {userId, isAuthenticated,username} = data.data;
        this.setState({
          auth:{
            userId,
            isAuthenticated,
            username
          }
        });
      }
    });
  }

  handleLogout = (event) => {
    event.preventDefault();
    axios.get("/auth/logout").then((result)=>{
      this.setState({
        auth:{
          userId: "",
          username: "",
          isAuthenticated: false
        }
      });
    })
  };

  render() {
    const loggedIn = this.state.auth.isAuthenticated;
    return (
      <Router>
        <div>
        <Route exact path = "/" render = {()=> {
          if(loggedIn){
            return <Redirect to = "/home" />
          } else{
            return <SignIn 
              handleChange= {this.handleChange} 
              handleSubmit = {this.handleSubmit}
              email = {this.state.email}
              password = {this.state.password}
            />
          } 
        }}/>
        <Route exact path = "/signup" render = {()=> {
          if(loggedIn){
            return <Redirect to = "/home" />
          } else{
            return <SignUp 
              handleChange= {this.handleChange} 
              handleSubmit = {this.handleSubmit}
              email = {this.state.email}
              password = {this.state.password}
            />
          }  
        }}/>
        <Route exact path = "/home" render = {()=> {
          if(!loggedIn){
            return <Redirect to = "/" />
          } else {
            return <Home handleLogout = {this.handleLogout} auth = { this.state.auth }/>
          } 
        }
        }/>
        </div>
      </Router>
    );
  }
}

export default App;


// class GameMaster extends Component {
//   state = {
//     entities:[
//       {
//         id:0,
//         name:"Perseus",
//         hp:100,
//         att:10
//       },{
//         id:1,
//         name: "Apollo",
//         hp:90,
//         att:15
//       },{
//         id:2,
//         name:"Artemis",
//         hp:120,
//         att:9
//       }
//     ]
//   };

//   handleAttack =(attacker, defender)=>{
//     console.log(defender.hp)
//     defender.hp -= attacker.att;
//     //set state
//     console.log(defender.hp)
//     this.setState({
//       entities: [...this.state.entities]
//     });
//   }

//   initFight=(attInd)=>{
//     this.handleAttack(this.state.entities[attInd],this.state.entities[0])
//   }

//   render() {
//     return (
//       <div>
//       <h1>hello</h1>
//       <p>{this.state.entities[0].name}</p>
//       <p>{this.state.entities[0].hp}</p>


//       <button onClick={ ()=>{this.initFight(1)} }  >fight Apollo</button>
//       <button onClick={ ()=>{this.initFight(2)} }  >fight Artemis</button>
//       </div>
//     );
//   }
// }

// export default GameMaster;