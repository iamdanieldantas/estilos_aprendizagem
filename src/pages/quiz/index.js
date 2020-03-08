import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';
import { Link } from 'react-router-dom';
import FontSizeChanger from 'react-font-size-changer'

// import LikertScale from 'likert-react';

export default class Main extends Component {

    //Execute when page loads
    componentDidMount() {

    }

    createTable = () => {
        let table = []

        // Outer loop to create parent
        for (let i = 0; i < 3; i++) {
            let children = []
            //Inner loop to create children
            children.push(<td>{`Column ${i + 1}`}</td>)
            // for (let j = 0; j < 5; j++) {
            // }
            //Create the parent and add the children
            table.push(<tr>{children}</tr>)
        }
        return table
    }

    loadProducts = async () => {
        //Get all the products from the api setted before
        //Using the library axios
        const response = await api.get('/products');

        //Set value from api to var state
        this.setState({ products: response.data.docs });
    };

    //Keep listening to var state 
    render() {
        questions.map(tech =>
            <p>tech</p>)
        // const onClick = (q, n) => console.info('question: ' + q + ' answer: ' + n);
        // const reviews = [
        //     { question: 'Você gosta de site com textos?' },
        //     { question: 'Você prefere conteúdo que seja em vídeo?' },
        //     { question: 'Você prefere conteúdo com audio?' },
        //     { question: 'Você prefere texto grande?' },
        //     { question: 'Você prefere que os vídeos tenham legendas ?' },
        //     { question: 'Você prefere que tenha ?' }
        // ];

        return (
            <div className='questions-list' >
                <div className="app">
                    <FontSizeChanger
                        targets={['#target .content']}
                        onChange={(element, newValue, oldValue) => {
                            console.log(element, newValue, oldValue);
                        }}

                        //stepSize = font size
                        //range = stepts to change
                        options={{
                            stepSize: 2,
                            range: 4
                        }}
                        customButtons={{
                            up: <span style={{ 'fontSize': '36px' }}>A</span>,
                            down: <span style={{ 'fontSize': '20px' }}>A</span>,
                            style: {
                                backgroundColor: 'red',
                                color: 'white',
                                WebkitBoxSizing: 'border-box',
                                WebkitBorderRadius: '5px',
                                width: '60px'
                            },
                            buttonsMargin: 10
                        }}
                    />
                    <div id="target">
                        <p className="title">This is the title of my target text</p>
                        {/* <p className="content">This is the content of my target text</p> */}

                        <table className="content">
                            {this.createTable()}
                            {/* likert scale */}
                        </table>
                    </div>
                </div>

                {/* <LikertScale
                    reviews={reviews}
                    onClick={onClick}
                    class="likert"
                /> */}

                <div className="actions" >
                    <Link to="/home">Acessar site</Link>
                </div>

            </div >
        );
    }
}

let questions = ["alguma coisa", 'alguma coisa 2'];
