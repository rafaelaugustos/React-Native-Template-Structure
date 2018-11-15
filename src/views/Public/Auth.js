import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native'
import { USER_KEY } from '@/config'
import GlobalStyle from '@/assets/styles'

class Home extends Component {
    static navigationOptions = {
        header: null
    }

    login = async () => {
        await AsyncStorage.setItem(USER_KEY, JSON.stringify(Math.floor((Math.random() * (999999999999, 100000)))))
        this.props.navigation.push('Home')
    }

    render(){
        return(
            <View
                style={[GlobalStyle.Container, { padding: 10 }]}
            >
                <TextInput 
                    style={styles.Input}
                    placeholder="Email" 
                />

                <TextInput 
                    style={styles.Input}
                    placeholder="Senha" 
                    secureTextEntry
                />

                <TouchableOpacity
                    style={styles.Button}
                    onPress={() => this.login()}
                >
                    <Text style={styles.WhiteText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Input: {
        backgroundColor: '#ffffff',
        height: 40,
        width: '100%',
        paddingLeft: 10,
        borderRadius: 5,
        marginBottom: 10
    },
    Button: {
        backgroundColor: '#3498db',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        width: '100%'
    },
    WhiteText: {
        color: '#ffffff'
    }
})

export default Home