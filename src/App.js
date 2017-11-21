import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from "./components/Header/Header.js"
import Home from "./components/Events/Events.js"
import Create from "./components/Create/Create.js"
import FacebookAuth from 'react-facebook-auth';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const MyFacebookButton = ({ onClick }) => (
  <button id = "btnLogin" type= "submit" onClick={onClick} >
  Continue With Facebook
  </button>
);
var username = 'Login With Facebook!'
var street = []
var cover = []
var name = []
var location = []

var total = []

const authenticate = (response) => {
  if (response.status != "not_authorized"){
  console.log(response);
  username = 'Thanks for logging in '+ response.first_name +'!';
  console.log(username)

  console.log(response.last_name)
  console.log(response.email)
  console.log(response.accessToken)
  console.log(response.userID)
  console.log(response.events)
  var i = 0;
  for (i = 0; i < response.events.data.length; i++){
      if (response.events.data[i].is_viewer_admin != false)
      {
        cover.push(response.events.data[i].cover.source);
        street.push(response.events.data[i].place.location.street);
        name.push(response.events.data[i].name);
        location.push(response.events.data[i].place.name);
      }


  }
console.log(name)

  document.getElementById('lblLogin').innerHTML =
    'Thanks for logging in, ' + response.first_name + '!';
  document.getElementById('btnLogin').style.display = 'none';
  //call function in node function ()
}

  // Api call to server so we can validate the token
};



class App extends Component {

  render() {
    return (
      <Router>
        <div classhost="App">
        <Header />
        <main>
          <Route exact path="/" render={() => (
            <div id = "mainn" class = 'content'>
              <h1>Welcome To Chyp</h1>
              <h2>Chyp lets you collect payments for a conference, party, or any other event in a click</h2>
              <h3 id= 'lblLogin'>{username}</h3>
              <div id = "btnLogin" data-width="200" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="true">
              <FacebookAuth
                    appId="360886547672323"
                    callback={authenticate}
                    component={MyFacebookButton}
                    scope="public_profile,email,user_events"
                    fields="name,first_name,last_name,email,picture,events{is_viewer_admin,start_time,place,cover,description,name}"
              />
                  </div>
            </div>
          )}/>
          </main>
          <Route exact path="/events" render={(props) => (
            <Home {...props} /> )}/>/>

              <Route exact path="/create" render={(props) => (
                <Create {...props} name = {name} id = {street} cover = {cover} location = {location}/> )}/>/>

            }

        </div>
      </Router>
    );
  }
}


export default App;
