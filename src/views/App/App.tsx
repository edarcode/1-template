import { useCounter } from "../../store/counter/useCounter";
import css from "./css.module.css";

export default function App() {
  const value = useCounter((counter) => counter.value);
  const inc = useCounter((counter) => counter.inc);
  return (
    <div className={css.app}>
      <p>{value}</p>
      <button onClick={inc}>inc</button>
    </div>
  );
}
