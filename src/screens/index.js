import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './Auth/Auth';
import SharePlaceScreen from "./SharePlace/SharePlace";
import FindPlaceScreen from "./FindPlace/FindPlace";
import PlaceDetailScreen from "./PlaceDetail/PlaceDetail";
import configureStore from "../store/configureStore";
import SideDrawer from "./SideDrawer/SideDrawer";




// register all screens of the app (including internal ones)
export function registerScreens() {
    const store = configureStore();

    Navigation.registerComponent('places.AuthScreen', () => AuthScreen, store, Provider);
    Navigation.registerComponent('places.SharePlaceScreen', () => SharePlaceScreen, store, Provider);
    Navigation.registerComponent('places.FindPlaceScreen', () => FindPlaceScreen, store, Provider);
    Navigation.registerComponent('places.PlaceDetailScreen', () => PlaceDetailScreen, store, Provider);
    Navigation.registerComponent('places.SideDrawer', () => SideDrawer);


}