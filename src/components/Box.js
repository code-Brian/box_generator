const Box = (props) => {
    const { boxColors } = props

    return (
        <div>
            {
                boxColors.map((color, index) => (
                    <div key={index} style={{
                        display: 'inline-block',
                        margin: '1rem',
                        height: '3rem',
                        width: '3rem',
                        backgroundColor: color
                    }}>
                    </div>
                ))
                }
        </div>
    )
}

export default Box