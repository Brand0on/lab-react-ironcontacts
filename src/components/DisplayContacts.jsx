const DisplayContacts = (props) => {
  let personas = props.people;
  return (
    <div className="display-picture">
      <h1>IronContacts</h1>
      <tr className="table">
        <td>
          {" "}
          <strong>Picture</strong>{" "}
        </td>
        <td>
          {" "}
          <strong>Name</strong>{" "}
        </td>
        <td>
          {" "}
          <strong>Populatiry</strong>{" "}
        </td>
        <td>
          {" "}
          <strong>Won an Oscar</strong>{" "}
        </td>
        <td>
          {" "}
          <strong>Won an Emmy</strong>{" "}
        </td>
      </tr>

      {personas.map((person) => {
        return (
          <tr>
            <td>
              <img
                className="profile-picture"
                src={person.pictureUrl}
                alt={person.name}
              />
            </td>
            <td>{person.name}</td>
            <td>{person.popularity}</td>
            <td>{person.wonOscar ? "yes" : "no"}</td>
            <td>{person.wonEmmy ? "yes" : "no"}</td>
          </tr>
        );
      })}
    </div>
  );
};

export default DisplayContacts;
