import {useEffect, useState} from "react";
import './App.css';
import RabbitHutch from './components/RabbitHutch'
import {look, initLookIdx} from './look'

function App() {

    const [rabbitIdx, setRabbitIdx] = useState(Math.floor(Math.random() * 100))
    const [lookIdx, setLookIdx] = useState(initLookIdx)

    const [found, setFound] = useState(false)
    const [check, setCheck] = useState(false)

    useEffect(() => {
        if (found) {
            return
        }

        const id = setInterval(() => {
            if (found) {
                clearInterval(id)
                return
            }
            if (rabbitIdx === 0) {
                setRabbitIdx(1)
            } else if (rabbitIdx === 99) {
                setRabbitIdx(98)
            } else {
                const sum = Math.floor(Math.random() * 2) % 2 ? -1 : 1
                setRabbitIdx(state => state + sum)
            }

            setLookIdx(idx => look(idx))

            setCheck(true)

        }, 100)

        return () => {
            clearInterval(id)
        }
    }, [found, rabbitIdx, lookIdx, setRabbitIdx, setLookIdx])

    useEffect(() => {
        if (check) {
            if (rabbitIdx === lookIdx) {
                setFound(true)
            }
            setCheck(false)
        }
    }, [rabbitIdx, lookIdx, check, setFound, setCheck])

    return (
        <div>
            <header className="App-header">
                <div>Catch the Rabbit</div>
            </header>
            <div className="App">
                <RabbitHutch rabbitIdx={rabbitIdx} lookIdx={lookIdx}/>
                {found && (<div className='found'>Gefunden!</div>)}
            </div>
        </div>
    );
}

export default App;
