import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="password"
            placeholder="password"
          />
        </CardSection>

        <CardSection>
          <Button
            Login
          />
        </CardSection>
      </Card>
    );
  }
}

export default connect(null, { emailChanged })(LoginForm);

// const mapStateToProps = () => {
//   return {};
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     emailChanged: (text) => dispatch(emailChanged(text)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
