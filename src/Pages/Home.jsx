import Header from "../Components/Top"
import Body from "../Components/Body"
import SButton from "../Components/StartButton"
import Nav from "../Components/Nav"
import '../App.css'

export default function Home() {

    return (
        <div className='page'>
            <Header />
            <Body />
            <div className='navAndBtn'>
                <SButton />
                <Nav />
            </div>
        </div>

    )
}
