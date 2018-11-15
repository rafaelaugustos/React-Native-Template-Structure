import React, { Component } from 'react'
import { View, Text, StyleSheet, AsyncStorage } from 'react-native'
import { USER_KEY } from '@/config'
import GlobalStyle from '@/assets/styles'

class Initializing extends Component {
    static navigationOptions = {
        header: null
    }

    async componentDidMount(){
        try{
            const user = await AsyncStorage.getItem(USER_KEY)
            console.log(user)

            setTimeout(() => {
                if(user){
                    this.props.navigation.push('Home')
                }else{
                    this.props.navigation.push('Auth')
                }
            }, 3000)
        }catch(err){
            console.log(err)
            this.props.navigation.push('Auth')
        }
    }

    render(){
        return(
            <View style={GlobalStyle.Container}>
                <Text style={styles.welcome}>Loading...</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 28
    }
})

export default Initializing 