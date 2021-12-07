import rabbit from "../rabbit-icon-png-24.jpeg";
import arrow from "../arrow.svg";

const RabbitHutch = ({ rabbitIdx, lookIdx }) => {

    const array = new Array(100).fill(undefined)

    return (
    <div className='rabbit-hutch'>
        {array.map((_, i) => (
            <div key={i} className='rabbit-hutch__inner'>
                {i === rabbitIdx && <img src={rabbit} className="rabbit" alt="rabbit"/>}
                {i === lookIdx && <img src={arrow} className="arrow" alt="arrow"/>}
            </div>
        ))}
    </div>
    )
}

export default RabbitHutch
