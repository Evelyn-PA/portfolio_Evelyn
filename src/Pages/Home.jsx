import Body from "../Components/Body"
import Img from "/Image/avt.gif"
import '../App.css'

export default function Home() {

    return (
        <div >

            <div className="textnimg">
                <div className="the-code">
                    <Body />
                </div>
                <div className="img">
                    <img src={Img} alt="avatar" id="avt-img" />
                </div>
            </div>

        </div>
    )
}
