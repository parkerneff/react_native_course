/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet,  View} from 'react-native';
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";



type Props = {};

export default class App extends Component<Props> {

    state = {
        places: []
    }

    placeAddedHandler = placeName => {

        this.setState(prevState => {
            return {
                places: prevState.places.concat(placeName)
            };
        });
    };

    render() {

        return (
            <View style={styles.container}>
                <PlaceInput onPlaceAdded={this.placeAddedHandler}/>

                <PlaceList places={this.state.places} />


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
    },
    zinputContainer: {
        //flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    zwelcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    zinstructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    zplaceInput: {
        width: "70%"

    },
    zplaceButton: {
        width: "30%"

    },
    zlistContainer: {
        width: "100%"
    }
});
