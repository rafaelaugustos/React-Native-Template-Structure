import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Home extends Component {
    static navigationOptions = {

    }

    render(){
        return(
            <View style={styles.Container}>
                <Text>Hi, Welcome</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Home