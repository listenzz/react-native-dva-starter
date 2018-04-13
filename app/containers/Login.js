import React, { Component } from 'react'
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'

import { Button, Touchable } from '../components'

import { createAction } from '../utils'

@connect(({ app }) => ({ ...app }))
class Login extends Component {
  static navigationItem = {
    titleItem: {
      title: 'Login',
    },
  }

  onLogin = () => {
    this.props.dispatch(createAction('app/login')())
  }

  onClose = () => {
    this.props.navigation.dismiss()
  }

  render() {
    const { fetching } = this.props
    return (
      <View style={styles.container}>
        {fetching ? (
          <ActivityIndicator />
        ) : (
          <Button text="Login" onPress={this.onLogin} />
        )}
        {!fetching && (
          <Touchable style={styles.close} text="Close" onPress={this.onClose}>
            <Text>Close</Text>
          </Touchable>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  close: {
    position: 'absolute',
    right: 20,
    top: 80,
  },
})

export default Login
