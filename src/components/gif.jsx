import React, { Component } from 'react';   

class Gif extends Component {
render(){
    const src="https://giphy.com/gifs/templeowls-tu-temple-3o7bu2wCQjNyFnIcog"
    return (<img src={src} className="gif" />)
}
}


export default Gif;