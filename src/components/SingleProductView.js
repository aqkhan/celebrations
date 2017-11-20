import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import { Header } from './common/';

const SingleProductView = ( { product } ) => {
    return(
        <View>
            <Header headerText='Sample' />
            <View style={styles.banner1}>
                <View style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                    <Image source={require('../imgs/banner1Bg.png')} style={{ flex: 1, resizeMode: 'cover' }} />
                </View>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        justifyContent: 'center'
                    }}
                >
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: 40
                        }}
                    >
                        Some text here
                    </Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        Bakery
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.banner1}>
                <TouchableOpacity style={styles.button}>

                    <Text style={styles.buttonText}>
                        Restaurants
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.banner1}>
                <TouchableOpacity style={styles.button}>

                    <Text style={styles.buttonText}>
                        Dry Fruits
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.banner1}>
                <TouchableOpacity style={styles.button}>

                    <Text style={styles.buttonText}>
                        Raw Fish
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = {
    buttonImg: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        padding: 20,

    },
    buttonText: {
        color: '#ffffff',
        fontFamily: 'helvetica',
        fontSize: 36
    },
    banner1: {
        height: 155,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5252A1',
        borderWidth: 0.5,
        borderColor: '#fff',

    }
};

export default SingleProductView;