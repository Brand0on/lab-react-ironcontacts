import { useState } from "react";

const AddRandom = (props) => {
  let all = props.reamining;
  let random = () => {
    return all[Math.floor(Math.random() * 10)];
  };

  const [people, addPerson] = useState([]);

  const handleAddPerson = () => {
    addPerson([...people, random]);
  };

  return (
    <>
      <button onClick={handleAddPerson}>Add person</button>
      <tr>
        <td>
          <img
            className="profile-picture"
            src={props.pictureUrl}
            alt={props.name}
          />
        </td>
        <td>{props.name}</td>
        <td>{props.popularity}</td>
        <td>{props.wonOscar ? "yes" : "no"}</td>
        <td>{props.wonEmmy ? "yes" : "no"}</td>
      </tr>
    </>
  );
};

export default AddRandom;
