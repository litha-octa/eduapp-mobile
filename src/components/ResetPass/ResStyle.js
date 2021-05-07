import { StyleSheet } from 'react-native';

export const ResStyle = StyleSheet.create({
    body:{
        backgroundColor:'#F9F9F9',
    },
    title:{
        fontFamily: 'Kanit',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 32,
        color: '#010620',
        textAlign: 'center',
    },
    img:{width:200,
        height :205,
        margin:'8%',
        alignSelf:'center',
    },
    subTitle:{
        textAlign:'center',
        fontFamily: 'Kanit',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#010620',
    },
    sendVer:{
            textAlign: 'center',
            fontFamily: 'Kanit',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: 16,
            color: '#837F8F',
    },
    input: {
        width: 310,
        height: 50,
        alignSelf: 'center',
        backgroundColor: '#F9F9F9',
        borderColor: '#ADA9BB',
        borderRadius: 10,
        color: 'black',
        borderWidth: 2,
        marginTop:'10%',
    },
    button: {
        backgroundColor: '#5784BA',
        top: 10,
        width: 310,
        height: 50,
        borderRadius: 10,
        alignSelf: 'center',
        padding: 10,
        marginBottom: 10,
    },
    labelButton: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Kanit',
        fontStyle: 'normal',
        fontWeight: '500',
    },
    link:{color:'blue',},

});