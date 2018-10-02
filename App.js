/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, Button} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

    state = {
        placeName: "",
        places: []
    }

    placeNameChangedHandler = (val) => {

        this.setState({
            placeName: val
        });
    };

    placeSubmitHandler = () => {
        if (this.state.placeName === "") {
            return;
        }
        this.setState(prevState => {
            return {
                places: prevState.places.concat(prevState.placeName)
            };
        });
    };

    render() {
        const placesOutput = this.state.places.map((place, i) => <Text key={i}>{place}</Text>);
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer} >
                    <TextInput placeholder="Enter something"
                               value={this.state.placeName}
                               style={{width: 300}}
                               onChangeText={this.placeNameChangedHandler}
                               style={styles.placeInput}/>
                    <Button title="Add"
                            style={styles.placeButton}
                            onPress={this.placeSubmitHandler} />
                </View>
                <View>
                    {placesOutput}
                </View>


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
    inputContainer: {
        //flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    placeInput: {
        width: "70%"

    },
    placeButton: {
        width: "30%"

    }
});
