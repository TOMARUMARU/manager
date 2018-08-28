import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
