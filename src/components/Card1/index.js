import './index.css'

const Card1 = props => {
    return(
        <div className="card-1">
            <img src={props.imgUrl} alt="card-1-img" className="card-1-img"/>
            <p className="card-1-text-blue">{props.textBlue}</p>
            <p className="card-1-text-black">{props.textBlack}</p>
        </div>
    )
}

export default Card1