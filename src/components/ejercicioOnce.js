import React from 'react';

const NonCitrus = () => {
    return (
      <div>
        <h2>Non-Citrus:</h2>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  };

  const Citrus = () => {
    return (
      <div>
        <h2>Citrus:</h2>
        <ul>
          <li>Lemon</li>
          <li>Lime</li>
          <li>Orange</li>
          <li>Grapefruit</li>
        </ul>
      </div>
    );
  };

  const Vegetables = () => {
    return (
      <div>
        <h2>Vegetables:</h2>
        <ul>
          <li>Brussel Sprouts</li>
          <li>Broccoli</li>
          <li>Squash</li>
        </ul>
      </div>
    );
  };

class Fruits extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h2>Fruits:</h2>
          { /* Change code below this line */}
          <NonCitrus />
          <Citrus />
          { /* Change code above this line */}
        </div>
      );
    }
  };
  
  class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          { /* Change code below this line */}
          <Fruits />
          { /* Change code above this line */}
          <Vegetables />
        </div>
      );
    }
  };

  export default TypesOfFood;