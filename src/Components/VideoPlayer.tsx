import React from "react";
import '../App.css'

export class VideoPlayer extends React.Component{
    render() {
        return(
            <div className="video-player">
                <video 
                 src={'https://www.shutterstock.com/shutterstock/videos/1084218295/preview/stock-footage-futuristic-animated-concept-big-data-center-chief-technology-officer-using-laptop-standing-in.webm'}
                 controls autoPlay loop >
                </video>
                <button> [ ]</button>
            </div>
        )
    }
}