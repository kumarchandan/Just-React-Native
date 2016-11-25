// components/MyScene.js

import React, { Component, PropTypes } from 'react'
import { View, Text, TouchableHighlight, Image } from 'react-native'

export default class MyScene extends Component {
    //
    static propTypes = {
        title: PropTypes.string.isRequired,
        onForward: PropTypes.func.isRequired,
        onBack: PropTypes.func.isRequired
    }
    //
    render() {
        //
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        }
        //
        return (
            <View>
                <Text>{ this.props.title }</Text>
                <TouchableHighlight onPress={this.props.onForward}>
                    <Text>Next</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.props.onBack}>
                    <Text>Go Back</Text>
                </TouchableHighlight>
                <Image source={pic} style={{width: 193, height: 110 }} />
            </View>
        )
    }
}