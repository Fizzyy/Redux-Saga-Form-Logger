import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Test from './Test';
import store from './REDUX/Store';
import RForm from './RForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      string: ''
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Test />
        <RForm />
      </Provider>
    );
  }
}

export default App;
