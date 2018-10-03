/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import placeImage from './src/assets/lanai-760x500.jpg';


type Props = {};

export default class App extends Component<Props> {

    state = {
        places: []
    }

    placeAddedHandler = placeName => {

        this.setState(prevState => {
            return {
                places: prevState.places.concat(
                    {
                        key: String(Math.random()),
                        name: placeName,
                        image: placeImage
                    })
            };
        });
    };

    placeDeletedHandler = key => {
        this.setState(prevState => {
            return {
                places: prevState.places.filter(place => {
                    return place.key !== key;
                })
            };
        });
    };

    render() {

        return (
            <View style={styles.container}>
                <PlaceInput onPlaceAdded={this.placeAddedHandler}/>

                <PlaceList places={this.state.places} onItemDeleted={this.placeDeletedHandler}/>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 26,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
