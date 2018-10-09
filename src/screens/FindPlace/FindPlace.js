import React, {Component} from 'react';
import {View, Text} from 'react-native';
import PlaceList from "../../components/PlaceList/PlaceList";
import connect from "react-redux/es/connect/connect";

class FindPlaceScreen extends Component {
    render () {
        return (
            <View>
                <PlaceList places={this.props.places} />
            </View>
        );

    }

}
const mapStateToProps = state => {
  return {
      places: state.places.places
  }
};

export default connect(mapStateToProps)(FindPlaceScreen);