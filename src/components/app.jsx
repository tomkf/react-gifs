import React, { Component } from 'react';   
import SearchBar from './searchBar.jsx';


class App extends Component {
    render (){
        return (<div>
            <div className="left scene">
            <SearchBar />
            <div className="selected gif">
            
            </div>
            </div>
            <div className="right scene"></div>
        </div>)
    }
}

export default App;