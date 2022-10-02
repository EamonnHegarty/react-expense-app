import "./Card.css"

const Card =(props) =>{
    //anything we receive as a class name is added dynamically
    const classes="card " + props.className;
    return (
        <div className={classes}>{props.children}</div>
    )
    
}

export default Card; 