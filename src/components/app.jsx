import React, { Component } from 'react';   
import SearchBar from './searchBar.jsx';
import Gif from './gif.jsx';
import GifList from './gifList.jsx';


class App extends Component {
 constructor(props){
     super(props)

     this.state = {
         gifs: [], 
         selectedGifId:
     }
 }



    render (){
const gifs =[
    {id: }, 
    {id: },
]

        return (<div>
            <div className="left scene">
            <SearchBar />
            <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
            </div>
            </div>
            <div className="right scene">
            < GifList gifs={this.state.gifs}/>
            </div>
        </div>)
    }
}

export default App;