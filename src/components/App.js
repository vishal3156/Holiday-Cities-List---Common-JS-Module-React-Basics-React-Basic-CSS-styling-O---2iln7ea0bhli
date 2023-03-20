
import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.cityList = [{ name: 'Goa', country: 'India' },
    { name: 'Amsterdam', country: 'Netherlands' },
    { name: 'New York', country: 'USA' },
    { name: 'Darjeeling', country: 'India' },
    { name: 'Tokyo', country: 'Japan' },
    { name: 'Lonavala', country: 'India' },
    { name: 'Brandenburg Gate', country: 'Germany' },
    { name: 'Reichstag Building', country: 'Germany' },
    { name: 'Museum Island', country: 'Germany' },
    { name: 'Munnar', country: 'India' },
    { name: 'Leh Ladakh', country: 'India' },
    { name: 'Goa', country: 'India' },
    { name: 'Agra', country: 'India' },
    { name: 'Dalhousie', country: 'India' },
    { name: 'Coorg', country: 'India' },
    { name: 'Rome', country: 'Italy' },
    { name: 'Milan', country: 'Italy' },
    { name: 'Venice', country: 'Italy' },
    { name: 'Varanasai', country: 'India' },
    { name: 'Jaipur', country: 'India' },
    { name: 'The Hofburg', country: 'Austria' },
    { name: 'Belvedere Palace', country: 'Austria' },
    { name: 'St. Stephen Cathedral', country: 'Austria' },
    { name: 'Kahna National Park', country: 'India' },
    { name: 'Amritsar', country: 'India' },
    { name: 'Mussoorie', country: 'India' },
    { name: 'Mount Abu', country: 'India' },
    { name: 'Tirupati', country: 'India' },
    ]
  }

  render() {
    return (
      <div id="main">
        <ol>
          <li key={location1}>'Goa'</li>
          <li key={location2}>'Darjeeling'</li>
          <li key={location3}>'Lonavala'</li>
          <li key={location4}>'Munnar'</li>
          <li key={location5}>'Leh Ladakh'</li>
          <li key={location6}>'Goa'</li>
          <li key={location7}>'Agra'</li>
          <li key={location8}>'Dalhousia'</li>
          <li key={location9}>'Coorg'</li>
          <li key={location10}>'Varanasai'</li>
          <li key={location11}>'Jaipur'</li>
          <li key={location12}>'Kahna National Park'</li>
          <li key={location13}>'Amritsar'</li>
          <li key={location14}>'Mussoorie'</li>
          <li key={location15}>'Mount Abu'</li>
          <li key={location16}>'Tirupati'</li>
        </ol>
      </div>
    )
  }
}


export default App;
