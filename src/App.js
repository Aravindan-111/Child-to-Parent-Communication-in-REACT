import { useState } from "react";
import Child from "./child";

function App() {
  const [count, setCount] = useState(0);
  function poda() {
    setCount(count + 1);
  }
  return (
    <>
      <Child add={poda} />
      <h1>Count: {count}</h1>
    </>
  );
}

export default App;
