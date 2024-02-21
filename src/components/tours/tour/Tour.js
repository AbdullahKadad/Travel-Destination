import { Link } from "react-router-dom";
function Tour(props) {
  return (
    <Link to={`/city/${props.id}`} className="link">
      <div>
        <h4>City: {props.name}</h4>
        <img src={props.image} alt={props.name} />
      </div>
    </Link>
  );
}

export default Tour;
