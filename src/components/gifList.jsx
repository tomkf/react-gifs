import React, { Component } from 'react';   
import Gif from './gif';

class GifList extends Component {
render(){

<div className="gif-list">
 { this.props.gifs.map(gif => { <Gif id={gif.selectedGifId} key={gif.selectedGifId}/> }) }
</div>
}
}

export default GifList;