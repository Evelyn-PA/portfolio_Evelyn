import Header from "../Components/Top"
import Body from "../Components/Body"
import SButton from "../Components/StartButton"
import Nav from "../Components/Nav"
import Img from "/Image/avt2.gif"
import '../App.css'

export default function Home() {

    return (
        <div className='page'>
            <Header />
            <div className="textnimg">
                <div>
                    <Body />
                </div>
                <div className="img">
                    <img src ={Img} alt ="avatar" id = "avt-img"/>
                </div>
            </div>
            <div className='navAndBtn'>
                <SButton />
                <Nav />
            </div>
        </div>
    )
}
