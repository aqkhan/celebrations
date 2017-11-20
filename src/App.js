import React, { Component } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import { Spinner, Header } from './components/common';
import axios from 'axios';
import Product from './components/Product';
import { StackNavigator } from 'react-navigation';
import SingleProductView from './components/SingleProductView';

class HomeScreen extends Component {
    static navigationOptions = {
        header: null
    };
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
                    { this.state.products.map( (product, i) => <Product key = { i } product = { product } navigation = { this.props.navigation } />) }
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

// Single product screen

class SingleProduct extends Component {
    static navigationOptions = {
        title: 'Back'
    };
    render() {
        console.log('Inside second screen', );
        const { params } = this.props.navigation.state;
        return(
            <View>
                <SingleProductView product = { params.product } />
            </View>

        );
    }
}

const MainNav = StackNavigator({
    Home: { screen: HomeScreen },
    Single: {
        screen: SingleProduct,
        navigationOptions: {
            header: null
        }
    }
});

class App extends Component {
    render() {
        return <MainNav />
    }
}

export default App;