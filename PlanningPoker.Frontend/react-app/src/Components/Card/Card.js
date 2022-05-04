import './Card.scss';

const Card = ({ value }) => {
    return (
        <div className="card">
            <div className="rounded-value upper-value">{value}</div>
            <div className="card-outer">
                <div className="card-inner">
                    <div className="middle-value">{value}</div>
                </div>
            </div>
        </div>
    );
}

export default Card;