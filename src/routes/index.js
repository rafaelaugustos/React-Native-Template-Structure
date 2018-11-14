import { createStackNavigator } from 'react-navigation'

// Routes
import Initializing from '@/views/Public/Initializing'
import HomeScreen from '@/views/Public/Home'
import Auth from '@/views/Public/Auth'

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
})

export default routes