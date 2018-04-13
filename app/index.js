import React from 'react'
import { create } from 'dva-core'
import { Provider } from 'react-redux'
import {
  ReactRegistry,
  Garden,
  Navigation,
} from 'react-native-navigation-hybrid'
import Loading from './containers/Loading'
import Login from './containers/Login'
import Home from './containers/Home'
import Account from './containers/Account'
import Detail from './containers/Detail'

import appModel from './models/app'

// 配置全局样式
Garden.setStyle({
  topBarStyle: 'dark-content',
})

const options = {
  initialState: {},
  models: [appModel],
  onError(e) {
    console.log('onError', e)
  },
}

const app = create(options)
// HMR workaround
if (!global.registered) options.models.forEach(model => app.model(model))
global.registered = true
app.start()
// eslint-disable-next-line no-underscore-dangle
const store = app._store
app.getStore = () => store

function componentWrapper(componentProvider) {
  const InnerComponent = componentProvider()
  return props => (
    <Provider store={store}>
      <InnerComponent {...props} />
    </Provider>
  )
}

// 重要必须
ReactRegistry.startRegisterComponent(componentWrapper)

// 注意，你的每一个页面都需要注册
ReactRegistry.registerComponent('Home', () => Home)
ReactRegistry.registerComponent('Loading', () => Loading)
ReactRegistry.registerComponent('Login', () => Login)
ReactRegistry.registerComponent('Account', () => Account)
ReactRegistry.registerComponent('Detail', () => Detail)

// 重要必须
ReactRegistry.endRegisterComponent()

Navigation.setRoot({
  tabs: [
    {
      stack: {
        screen: { moduleName: 'Home' },
      },
    },
    {
      stack: {
        screen: { moduleName: 'Account' },
      },
    },
  ],
})
