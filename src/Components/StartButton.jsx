import arrow from '/Image/arrow.svg';
export default function StartButton(){
    return(
        <button className="SButton">
            Curriculum
            <img src ={arrow} alt="arrow" className='arrow'/>
            </button>
    )
}