import React from 'react';
import {
    View,
    Button,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 2,
        flexDirection: "column",
    },
})

export default class CButton extends React.Component {
    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <View style={{
                ...styles.container,
                ...this.props.styleContainer
            }}> 
                <Button
                    color={this.props.color} title={this.props.title}
                />
            </View>
        )
    }
}