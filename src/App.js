import React, { Component } from 'react';
import axios from 'axios'

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=10`)
      .then(res => {
        const persons = res.data.results;
        console.log(res)
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>
        {person.name.first}
        {person.name.last}
        {person.email}
      
        </li>)}
      </ul>
      
    )
  }
}

