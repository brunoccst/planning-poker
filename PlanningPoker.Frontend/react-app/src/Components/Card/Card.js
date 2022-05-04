import './Card.scss';

const ExpectedValues = [0, 1, 2, 3, 5, 8, 13, 20, "?", "∞", "☕"];

const Card = ({ value }) => {
    let valueClass = ExpectedValues.indexOf(value);

    return (
        <div className={`card value-${valueClass}`}>
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