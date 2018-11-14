import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, AsyncStorage } from 'react-native'
import { USER_KEY } from '@/config';

class Initializing extends PureComponent {
    async componentDidMount(){
        try{
            const user = await AsyncStorage.getItem(USER_KEY)
            console.log(user)

            if(user){
                this.props.navigation.push('Home')
            }else{
                this.props.navigation.push('Auth')
            }
        }catch(err){
            console.log(err)
            this.props.navigation.push('Auth')
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>Loading...</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcome: {
        fontSize: 28
    }
})

export { Initializing }