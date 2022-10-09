import { useState } from 'react'

const BoxForm = (props) => {
    const { boxColors, setBoxColors } = props
    const [ color, setColor ] = useState("")

    const createNewBox = (e) => {
        e.preventDefault()
        setBoxColors( [...boxColors, color] )   
    }

    return (
        <div>
            <h1>Ayyy, lmao it makes box(s) tho...</h1>
            <form onSubmit={ createNewBox }>
                <div>
                    <label>Choose a color name:</label>
                    <input onChange={(e) => setColor(e.target.value)}></input>
                </div>
                <div>
                    <input type="submit" value="Create Box"></input>
                </div>
            </form>
        </div>
    )
}

export default BoxForm