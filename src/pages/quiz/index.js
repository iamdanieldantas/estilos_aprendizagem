import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';
import {Link} from 'react-router-dom';

export default class Main extends Component{
    state = {
        products: []
    }

    //Execute when page loads
    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () => {
        //Get all the products from the api setted before
        //Using the library axios
        const response = await api.get('/products');
        
        //Set value from api to var state
        this.setState({products: response.data.docs});
    };

    prevPage = () => {

    };

    nextPage = () => {

    };

    //Keep listening to var state 
    render(){
        const { products } = this.state;

        return (
            <div className='products-list'>
                {products.map(products => (
                    //When using map should has a unique key on each object
                    <article key = {products._id}>
                        <strong>{products.title}</strong>
                        <p>{products.description}</p>

                        <a href=""> Acessar </a>
                    </article>
                ))}

                <div className="actions">
                    <Link to="/home">Home</Link>
                </div>
            </div>
        );
    }
}