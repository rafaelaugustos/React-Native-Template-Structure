import { createStackNavigator } from 'react-navigation'
import { Animated, Easing } from 'react-native'
// Routes
import Initializing from '@/views/Public/Initializing'
import HomeScreen from '@/views/Public/Home'
import Auth from '@/views/Public/Auth'

const transitionConfig = () => {
    return {
        transitionSpec: {
            duration: 750,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            //useNativeDriver: true,
        },
        screenInterpolator: sceneProps => {      
            const { layout, position, scene } = sceneProps

            const thisSceneIndex = scene.index
            const width = layout.initWidth

            const translateX = position.interpolate({
                inputRange: [thisSceneIndex - 1, thisSceneIndex],
                outputRange: [width, 0]
            })

            const Opacity = position.interpolate({
                inputRange: [thisSceneIndex - 1, thisSceneIndex],
                outputRange: [0, 1]
            })

            if(scene.route.routeName === 'Auth' || scene.route.routeName === 'Initializing' || scene.route.routeName === 'Home'){
                return { opacity: Opacity }
            }
            
            return { transform: [ { translateX } ] }
            
        },
    }
}

const routes = createStackNavigator({
    Initializing: {
        screen: Initializing
    },
    Home: {
        screen: HomeScreen
    },
    Auth: {
        screen: Auth
    }
}, { transitionConfig })

export default routes