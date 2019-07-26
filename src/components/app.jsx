import React, { Component } from 'react';   
import SearchBar from './searchBar.jsx';
import Gif from './gif.jsx';
import GifList from './gifList.jsx';


class App extends Component {
    render (){
const gifs =[
    {id: }, 
    {id: },
]

        return (<div>
            <div className="left scene">
            <SearchBar />
            <div className="selected-gif">
            <Gif id="" />
            </div>
            </div>
            <div className="right scene">
            < GifList gifs={gifs}/>
            </div>
        </div>)
    }
}

export default App;