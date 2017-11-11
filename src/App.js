import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Spinner, Header } from './components/common';
import axios from 'axios';
import Product from './components/Product'

class App extends Component {
    state = {
        dataLoaded: null,
        products: [],
        singleView: false
    };

    componentWillMount() {
        let url = 'https://rs-node-cms.herokuapp.com/products.json';
        axios.get(
            url
        ).then(
            response => {
                this.setState( { products: response.data, dataLoaded: true } );
            }
        ).catch(
            err => {
                console.log('Something went wrong while retrieving from API: ', err);
            }
        );
    }

    switchComponents() {
        if (this.state.dataLoaded) {
            return(
                <ScrollView>
                    { this.state.products.map( (product, i) => <Product key = { i } product = { product } />) }
                </ScrollView>
            );
        }
        return(
            <View style = { { display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 } } >
                <Spinner />
            </View>
        );
    }

    render() {
        return(
            <View style = { { flex: 1 } } >
                <Header headerText = 'Celebrations' />
                { this.switchComponents() }
            </View>
        );
    }
}

export default App;