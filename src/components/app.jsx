import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './searchBar.jsx';
import Gif from './gif.jsx';
import GifList from './gifList.jsx';


const GIPHY_API_KEY = '1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm';



class App extends Component {
 constructor(props){
     super(props)

     this.state = {
         gifs: [], 
         selectedGifId: "xT9IgDEI1iZyb2wqo8"
     }
 }

 search = (query) => {
    giphy({ apiKey: GIPHY_API_KEY, https: true })
      .search({
        q: query,
        rating: 'g',
        limit: 10
      }, (err, result) => {
        this.setState({
          gifs: result.data
        });
      });
  }

    render (){

        return (
            <div>
              <div className="left-scene">
                <SearchBar searchFunction={this.search} />
                <div className="selected-gif">
                  <Gif id={this.state.selectedGifId} />
                </div>
              </div>
              <div className="right-scene">
                <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
              </div>
            </div>
          );
        }
      }

export default App;