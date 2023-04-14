import React, {Component} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

export default class Loader extends Component {

    render() {
        if (this.props.show) {
            return (
                <View style={[styles.containerStyle, this.props.style]}>
                    <ActivityIndicator size="large" color="#fff" />
                </View>
            );
        } else {
            return <View/>
        }
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 1000
    },
});
