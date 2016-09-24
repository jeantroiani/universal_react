import React from 'react';
import ReactDom from 'react-dom';
import fetch from 'isomorphic-fetch';

class MyApp extends React.Component {
    static fetchData(){
        return fetch('http://swapi.co/api/films/');
    }

    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {films: this.props.films || []};
    }

    render() {
        console.log('I am rendering');
        return(
            <div>
                <p>First Component</p>
                {this.state.films.length}
            </div>
        );
    }
}

export default MyApp;
