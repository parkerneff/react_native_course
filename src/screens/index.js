import { Navigation } from 'react-native-navigation';

import AuthScreen from './Auth/Auth';
import SharePlaceScreen from "./SharePlace/SharePlace";
import FindPlaceScreen from "./FindPlace/FindPlace";

// register all screens of the app (including internal ones)
export function registerScreens() {
    Navigation.registerComponent('places.AuthScreen', () => AuthScreen);
    Navigation.registerComponent('places.SharePlaceScreen', () => SharePlaceScreen);
    Navigation.registerComponent('places.FindPlaceScreen', () => FindPlaceScreen);

}