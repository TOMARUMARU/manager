import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCPK19NEDjoEOlfTtPp9FOcpmZC39wv0BY',
      authDomain: 'manager-37ff2.firebaseapp.com',
      databaseURL: 'https://manager-37ff2.firebaseio.com',
      projectId: 'manager-37ff2',
      storageBucket: 'manager-37ff2.appspot.com',
      messagingSenderId: '613031742312'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
