import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, Image, TextInput } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


const image = { uri: 'https://res.cloudinary.com/nithinmanda/image/upload/v1729523485/bg-login.32d6e9e5_gif0bz_yzx4vu.png' };

const SwiggyLoginComponent = () => {
    const [text, onChangeText] = useState('');

    return (
        <View>
            <Image style={styles.zomatoImage} source={{ uri: 'https://res.cloudinary.com/nithinmanda/image/upload/v1729741267/WhatsApp_Image_2024-10-24_at_9.10.02_AM_uqijwp.jpg' }} />
            <View style={styles.Viewtext1}>
                <Text style={styles.text1}>
                    India's #1 Food Delivery
                </Text>
                <Text style={styles.text1}>
                    and Dining App
                </Text>
            </View>
            <View style={styles.text2View}>
                <View style={styles.horizontalLine} />
                <View>
                    <Text style={styles.text2}> Log in or sign up</Text>
                </View>
                <View style={styles.horizontalLine} />
            </View>
            <View style={styles.inputsView}>
                <View style={styles.inputs}>
                    <Image source={require('../../assets/images/flag.png')} style={{ height: 20 }} />
                    <Ionicons name="caret-down" color={'#808080'}></Ionicons>
                </View>
                <View style={styles.inputs}>
                    <Ionicons name="add" color={'black'}></Ionicons>
                    <Text>91 </Text>
                    <Text>Enter Phone Number</Text>
                </View>
            </View>



        </View >
    )
}

const styles = StyleSheet.create({

    zomatoImage: {
        width: '100%',
        height: 300,
        objectFit: 'cover'
    },
    text1: {
        color: 'black',
        fontSize: 25,
        display: 'flex',
        fontFamily: 'sans-serif',
        fontWeight: '700'
    },
    Viewtext1: {
        marginTop: 20,
        alignItems: 'center'
    },
    text2View: {
        marginTop: 50,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 50,
    },
    text2: {
        width: 130, textAlign: 'center',
        color: 'black', fontFamily: 'SpaceMono'
    },
    horizontalLine: {
        flex: 1, height: 1, backgroundColor: 'grey'
    },
    inputsView: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 50,
        marginVertical: 15,
        gap: 10
    },
    inputs: {
        height: 35,
        flexGrow: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    button: {
        marginHorizontal: 30,
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: '#ff3269',
        borderRadius: 30,
        marginTop: 15,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    footer: {
        marginBottom: 50,
        alignItems: 'center',
        fontWeight: '400',
        lineHeight: 24
    },
    whiteColor: {
        color: 'white'
    },
    orangeColor: {
        color: '#ff3269'
    },
    bottomView: {
        display: 'flex', flexDirection: 'row'
    }
})

export default SwiggyLoginComponent