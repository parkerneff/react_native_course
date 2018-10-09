import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './Auth/Auth';
import SharePlaceScreen from "./SharePlace/SharePlace";
import FindPlaceScreen from "./FindPlace/FindPlace";
import configureStore from "../store/configureStore";




// register all screens of the app (including internal ones)
export function registerScreens() {
    const store = configureStore();

    Navigation.registerComponent('places.AuthScreen', () => AuthScreen, store, Provider);
    Navigation.registerComponent('places.SharePlaceScreen', () => SharePlaceScreen, store, Provider);
    Navigation.registerComponent('places.FindPlaceScreen', () => FindPlaceScreen, store, Provider);

}