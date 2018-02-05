import * as React from 'react';
import './App.css';

const logo = require('./logo.svg');

class App extends React.Component<{}, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            beers: [],
            isLoading: false
        };
    }
    componentDidMount() {
        this.setState({isLoading: true});

        fetch('http://localhost:8080/good-beers')
            .then(response => response.json())
            .then(data => this.setState({beers: data, isLoading: false}));
    }
  render() {
      const {beers, isLoading} = this.state;

      if (isLoading) {
          return <p>Loading...</p>;
      }

      return (
          <div className="App">
              <div className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h2>Welcome to React</h2>
              </div>
              <div>
                  <h2>Beer List</h2>
                  {beers.map((beer: any) =>
                      <div key={beer.id}>
                          {beer.name}
                      </div>
                  )}
              </div>
          </div>
      );
  }
}

export default App;
