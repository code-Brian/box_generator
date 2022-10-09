import { useState } from 'react'

const BoxForm = (props) => {
    const [boxColor, setBoxColor] = useState("")
    const [boxHeight, setBoxHeight] = useState("")
    const [boxWidth, setBoxWidth] = useState("")

    const createNewBox = (e) => {
        e.preventDefault()
        setBoxHeight("50px")
        setBoxWidth("50px")
        props.onNewBox( boxColor, boxHeight, boxWidth )
    }

    return (
        <div>
            <form onSubmit={ createNewBox }>
                <div>
                    <label>Choose a color name:</label>
                    <input onChange={(e) => setBoxColor(e.target.value)}></input>
                </div>
                <div>
                    <input type="submit" value="Create Box"></input>
                </div>
            </form>
        </div>
    )
}

export default BoxForm