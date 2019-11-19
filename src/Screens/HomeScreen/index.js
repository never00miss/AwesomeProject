import React from 'react';
import {
    View,
    Text
} from 'react-native';

export default class HomeScreen extends React.Component {
    state = {
        username: ""
    }

    componentDidMount() {
        const { getParam } = this.props.navigation

        if (getParam("username")) {
            const username = getParam("username")
            this.setState({username: username})
        }
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <Text>Hallo {this.state.username}

                </Text>
            </View>
        );
    }
}
