import React from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
} from 'react-native';
import { LoginStyle } from '../components/auth/LoginStyle';
import { DashStyle } from '../components/Dash/DashStyle';

const DashStuAllSchedule = ({navigation})=> {
    const data ={
        username:'Emir',
        date: 'October 11'
    };
return(
    <View style={DashStyle.body}>
    <View style={DashStyle.header}>
        <Text style={DashStyle.welcome}>
                Welcome back,
        </Text>
        <Text style={DashStyle.username}>{data.username}</Text>
        
    </View>
        <Image source={require('../assets/Carousel.png')}
         style={DashStyle.imgNews}   />
        <Text>My Class</Text>
        <Text>  Today, {data.date}</Text>
    </View>

);
};

export default DashStuAllSchedule;