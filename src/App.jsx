import { useState } from "react";
import data from "./data";
const App = () => {
  const [count,setCount] = useState(1);
  const [text,setText] = useState([]);
  const handleSubmit = (e)=>{
    e.preventDefault();
    let amount = +count;
    setText(data.slice(0,amount));
  }
  return <section className="section-center">
    <h4>Tired of boring lorem ipselum</h4>
    <form className="lorem-form" onSubmit={handleSubmit}>
      <label htmlFor="amount">paragraphs:</label>
      <input type="number" name = "amount" id = "amount" min = "1" step="1" value={count} onChange={(e)=>{setCount(e.target.value)}}/>
      <button className="btn" type="submit">Generate</button>
    </form>
    <article className="lorem-text">
      {text.map((t,index)=>{
        return <p key={index}>{t}</p>
      })}
    </article>
  </section>;
};
export default App;
