import "./Card.css"

const Card = (props) => {
    return (
      <div className="container mt-4">
        <div className="card">{props.children}</div>
      </div>
    );
};

export default Card;
