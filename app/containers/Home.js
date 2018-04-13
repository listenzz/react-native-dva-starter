import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

import { Button } from '../components'

@connect()
class Home extends Component {
  static navigationItem = {
    titleItem: {
      title: 'Home',
    },
    tabItem: {
      title: 'Home',
      // icon: Image.resolveAssetSource(require('../images/house.png')),
      hideTabBarWhenPush: true,
    },
  }

  gotoDetail = () => {
    this.props.navigation.push('Detail')
  }

  render() {
    return (
      <View style={styles.container}>
        <Button text="Goto Detail" onPress={this.gotoDetail} />
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
  icon: {
    width: 32,
    height: 32,
  },
})

export default Home
