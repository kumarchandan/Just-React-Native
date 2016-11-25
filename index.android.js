// @author: kchan react native app

import React  from 'react'
import { AppRegistry, View, Text, Navigator } from 'react-native'

import MyScene from './src/components/MyScene'

class HomeScreen extends React.Component {
  // Constructor
  constructor(props) {
    //
    super(props)
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    })
    //
    this.state = {
      dataSource: ds.cloneWithRows([
        'Valine', 'Supriya', 'Shreya', 'Shree', 'Daisy', 'Dimpal'
      ])
    }
    //
    render() {
      
    }
  }
}

//
AppRegistry.registerComponent('AwesomeProject', () => HomeScreen)   // If you change 'AwesomeProject' to other name -> err