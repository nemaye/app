/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { AuthContext } from './src/Context'
import Main from './Main'

AppRegistry.registerComponent(appName, () => Main);
