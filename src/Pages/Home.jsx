import Header from "../Components/Top"
import Body from "../Components/Body"
import SButton from "../Components/StartButton"
import Nav from "../Components/Nav"
import avatar from "/Image/Mickey - Hide.jpg"
import '../App.css'

export default function Home() {

    return (
        <div className='page'>
            <Header />
            <div className="textnimg"> 
                <Body />
            </div>
            <div className='navAndBtn'>
                <SButton />
                <Nav />
            </div>
        </div>
    )
}
