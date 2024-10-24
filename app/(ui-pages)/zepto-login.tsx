import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, Image, TextInput } from "react-native"


const image = { uri: 'https://res.cloudinary.com/nithinmanda/image/upload/v1729523485/bg-login.32d6e9e5_gif0bz_yzx4vu.png' };

const ZeptoLoginComponent = () => {
    const [text, onChangeText] = useState('');

    return (
        <ImageBackground source={image} style={styles.image}>
            <View style={styles.container}>
                <View>
                    <Image style={styles.tinyLogo} source={{ uri: 'https://res.cloudinary.com/nithinmanda/image/upload/v1729524257/zepto-removebg-preview_ljtaiy.png' }} />
                    <View style={styles.groceries}>
                        <Text style={styles.text}>
                            Groceries Delivered in 10 Minutes
                        </Text>
                    </View><View >
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                            placeholder="Enter Phone Number"
                        />
                    </View>
                    <View style={styles.button}>
                        <Text style={{ color: 'white' }}>Continue</Text>
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.whiteColor}>By continuing, you agree to our</Text>
                    <View style={styles.bottomView}>
                        <Text style={styles.orangeColor}>Terms of Use</Text>
                        <Text style={styles.whiteColor}> & </Text>
                        <Text style={styles.orangeColor}>Privacy Policy</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    tinyLogo: {
        width: 200,
        height: 80,
        marginTop: 100
    },
    image: {
        flex: 1,
        // objectFit: 'fill'
    },
    text: {
        color: 'white',
        fontSize: 30,
        lineHeight: 40,
        display: 'flex',
        fontFamily: 'Poppins',
        fontWeight: '700'
    },
    groceries: {
        marginLeft: 30,
        width: 200
    },
    input: {
        height: 20,
        marginHorizontal: 30,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 30,
        marginTop: 20
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

export default ZeptoLoginComponent