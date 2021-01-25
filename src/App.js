import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import ContactCard from './ContactCard';

class App extends Component {

  constructor() {
    super()

    this.state = {
      arrayOfContacts: [],
    }
  }


  componentDidMount() {
    axios.get('https://randomuser.me/api?results=25')
      .then( res => {
        const arrayOfContacts = res.data.results
        console.log("axios", arrayOfContacts)
        this.setState({ arrayOfContacts })
      })
  }

  render() {
        return (
          <div className="App">
      <header className="App-header">
        {console.log("results", this.state.arrayOfContacts)}
        <div>
          <h1>Rolodex</h1>
        <ol>{this.state.arrayOfContacts.map((contact, index) => {
          return (
            
            <ContactCard key={index}
            firstName={contact.name.first}
            lastName={contact.name.last}
            picture={contact.picture.large}
            phone={contact.phone}
            cell={contact.cell}
            email={contact.email}
            city={contact.location.city}
            state={contact.location.state}
            country={contact.location.country}
            >
          </ContactCard>
        )  
      })}</ol>
      </div>
      </header>
    </div>
  );
}
}

export default App;