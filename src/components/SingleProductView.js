import React from 'react';
import { View, Text } from 'react-native';

const SingleProductView = ( { product } ) => {
    return(
        <View>
            <Text>
                { product.title }
            </Text>
            <Text>
                Go home chootiye
            </Text>
        </View>
    );
};

export default SingleProductView;