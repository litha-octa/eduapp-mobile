import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { LoginStyle } from '../components/auth/LoginStyle';

const Register = ({ navigation, route }) => {
    return (
        <View style={LoginStyle.body}>
            <Text style={LoginStyle.title}>Login</Text>
            <Text style={LoginStyle.descInput}>Username or Email</Text>
            <TextInput style={LoginStyle.inputLogin} />
            <Text style={LoginStyle.descInput}>Password</Text>
            <TextInput style={LoginStyle.inputLogin} />
            <TouchableOpacity
                style={LoginStyle.buttonLogin}>
                <Text style={LoginStyle.labelButtonLogin}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={LoginStyle.buttonLoginWithGoogle}>
                <Text style={LoginStyle.labelButtonLoginWithGoogle}>
                    Login with Google
            </Text>
            </TouchableOpacity>
        </View>
    );
};
export default Register;