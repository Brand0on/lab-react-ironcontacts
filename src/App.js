import "./App.css";
import allcontacts from "./contacts.json";
import DisplayContacts from "./components/DisplayContacts";
import AddRandom from "./components/AddRandom";

//creating a variable that takes the 5 first people from allcontacts
const contacts = allcontacts.slice(0, 5);

//creating a vairable that contains the people reamining
const rest = allcontacts.slice(5);
//console.log(contacts);

function App() {
  return (
    <div className="App">
      <DisplayContacts people={contacts} />
      <AddRandom remaining={rest} />
    </div>
  );
}

export default App;
