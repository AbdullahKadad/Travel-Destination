import Tour from "./tour/Tour";
const data = require("../../data/db.json");
function Tours() {
  return (
    <>
      {data.map((e) => {
        return <Tour id={e.id} name={e.name} image={e.image}  />;
      })}
    </>
  );
}

export default Tours;
