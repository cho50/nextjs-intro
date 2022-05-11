import { useState } from "react";
import Seo from "../components/Seo";

export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Seo title="Home" />
      <h1>Hello {counter}</h1>
      <button onClick={() => setCounter(p => p + 1)}>+</button>
      <button onClick={() => setCounter(p => p - 1)}>-</button>
    </div>
  );
}
