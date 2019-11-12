import React from 'react';
import {
    View,
    Button,
    StyleSheet,
    TextInput
} from 'react-native';
import {  } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container: {
        borderWidth: 1
    },
})

export default class CTextInput extends React.Component {
    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <View style={{
                ...styles.container,
                ...this.props.styleContainer
            }}> 
                <TextInput/>
            </View>
        )
    }
}