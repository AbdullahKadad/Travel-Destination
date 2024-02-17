function Tours(prop) {
    return (
      <div className="tour">
        <h4 className="h4">City: {prop.name}</h4>
        <img src={prop.image} alt={prop.name}/>
      </div>
    );
  }
  
  export default Tours;
  