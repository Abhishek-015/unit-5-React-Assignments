import "./App.css";
// import { Todos } from "./components/Todos";
import Counter from "./components/Counter";

function App() {
  // const [data, setData] = useState(0);

  // const [age, setAge] = useState(10);

  // console.log("before");

  // useEffect(() => {
  //   // Mounting!
  //   // fetch("http://localhost:3001/users")
  //   //   .then((d) => d.json())
  //   //   .then((res) => {
  //   //     console.log("response", res);
  //   //     setData(res);
  //   //   });
  //   console.log("user effect 1");
  // }, [data]); // once

  // useEffect(() => {
  //   console.log("Use Effect 2");
  // }, [age]);

  // useEffect(() => {
  //   console.log("Use Effect 3");
  // }, [data, age]);

  // console.log("after");

  return (
    <div className="App">
      <Counter />
    </div>
  );
}

// mounting: after HTML is shown on browser
// updating: after state changed
// unmounting: after HTML is removed from UI (browser)

export default App;

// console logs, network requests, file operations...
