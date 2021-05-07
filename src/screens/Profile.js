import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {ProfStyle} from '../components/Profile/ProfStyle';

const Profile = ({navigation, route}) => {
  return (
    <View>
      <View style={ProfStyle.Header}>
        <Text style={ProfStyle.caption}>Profile</Text>
        <Text style={ProfStyle.username}>Emir Kharisma</Text>
        <Text>online</Text>
      </View>
    </View>
  );
};


export default Profile;
