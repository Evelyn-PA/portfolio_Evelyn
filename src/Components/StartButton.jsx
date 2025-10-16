import arrow from '/Image/arrow.svg';
export default function StartButton() {
    return (
        <a href="/CV/Anh_(Evelyn)_ Nguyen_ CV.pdf"  target='_blank'>
            <button className="SButton">
                Curriculum
                <img src={arrow} alt="arrow" className='arrow' />

            </button>
        </a>
    )
}