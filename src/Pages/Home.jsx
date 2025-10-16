import Header from "../Components/Top"
import Body from "../Components/Body"

import Img from "/Image/avt.gif"
import '../App.css'

export default function Home() {

    return (
        <div className='page'>
            
            <div className="textnimg">
                <div className="the-code">
                    <Body />

                    
                </div>
                <div className="img">
                    <img src ={Img} alt ="avatar" id = "avt-img"/>
                </div>
            </div>
            
        </div>
    )
}
