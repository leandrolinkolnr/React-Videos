import React from "react"
import '../App.css'

export function VideoList(){
    return(
        <ul className="video-list">
            <li className="video">
                <img src = "https://ak.picdn.net/shutterstock/videos/1084218295/thumb/10.jpg/" alt="Descrição imagem" />
                <div>Nome</div>
            </li>

            <li className="video">
                <img src = "https://ak.picdn.net/shutterstock/videos/1084218295/thumb/10.jpg/" alt="Descrição imagem" />
                <div>Nome</div>
            </li>

            <li className="video">
                <img src = "https://ak.picdn.net/shutterstock/videos/1084218295/thumb/10.jpg/" alt="Descrição imagem" />
                <div>Nome</div>
            </li>
            
        </ul>
    )
}