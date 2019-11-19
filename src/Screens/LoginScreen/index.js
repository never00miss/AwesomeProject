import React from 'react';
import {
    View,
    Text,
    ToastAndroid
} from 'react-native';
import CButton from '../../Components/CButton';
import CTextInput from '../../Components/CTextInput';
import { styleLogin } from './style';

export default class LoginScreen extends React.Component {
    state = {
        isLoading: false,
        username: "",
        password: ""
    }

    _handlerGoToHome = () => {
        this.props.navigation.navigate("Home", { username: this.state.username });
    }

    _validateEmail = (text) => {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(text);
    }

    _toastMessage = (message) => {
        ToastAndroid.show(message, ToastAndroid.SHORT);
    }

    _handlerLogin = () => {
        this.setState({ isLoading: true });

        const { username, password } = this.state;

        if (!this._validateEmail(username)) {
            this._toastMessage("Email not valid");
            this.setState({ isLoading: false });
            return;
        }

        this.setState({ isLoading: false }, () => {
            this._handlerGoToHome()
        });
        return;
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
                <CTextInput
                    onChangeText={(val) => {
                        this.setState({ username: val })
                    }}
                    styleContainer={styleLogin.formInput} />
                <CTextInput
                    onChangeText={(val) => {
                        this.setState({ password: val })
                    }}
                    secureTextEntry={true}
                    styleContainer={styleLogin.formInput} />
                <CButton
                    onPress={() => {
                        this._handlerLogin();
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
