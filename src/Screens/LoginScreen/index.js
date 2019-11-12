import React from 'react';
import {
    View,
    Text
} from 'react-native';
import CButton from '../../Components/CButton';
import CTextInput from '../../Components/CTextInput';
import { styleLogin } from './style';

export default class LoginScreen extends React.Component {
    state = {
        isLoading: false
    }

    _handlerGoToHome = () => {
        this.props.navigation.navigate("Home");
    }

    render() {
        return (
            <View
                style={{
                    flex: 10,
                    flexDirection: "column",
                    padding: 20
                }}>
                <Text style={{ alignSelf: "center" }}>Login Screen</Text>
                <CTextInput styleContainer={styleLogin.formInput} />
                <CTextInput styleContainer={styleLogin.formInput} />
                <CButton
                    onPress={() => {
                        this.setState({
                            isLoading: true
                        }, () => {
                            setTimeout(() => {
                                this.setState({
                                    isLoading: false
                                })

                            }, 5000)
                        })
                    }}
                    isLoading={this.state.isLoading}
                    styleContainer={{
                        flex: 1,
                        margin: 20,
                        flexDirection: "column",
                    }}
                    title={"LOGIN"}
                    color={"blue"}
                />
            </View>
        );
    }
}
