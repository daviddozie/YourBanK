function Heading(props) {
    const items = props.items
    return (
        <div className="text">
            <p>{items}</p>
        </div>
    )
}

export default Heading;