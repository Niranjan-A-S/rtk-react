import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { biscuitSlice } from "./biscuit-slice";

export const BiscuitView = () => {

  const numOfBiscuits = useSelector((state) => state.biscuit.numOfBiscuits);

  const dispatch = useDispatch();

  const [count, setCount] = useState(1);

  return (
    <>
      <h1>Number of Biscuits : {numOfBiscuits}</h1>
      <button onClick={() => dispatch(biscuitSlice.actions.ordered(count))}>
        Order Biscuits
      </button>
      <button onClick={() => dispatch(biscuitSlice.actions.restocked(count))}>
        Restock Biscuits
      </button>
      <input
        value={count}
        onChange={(event) => setCount(+event.target.value)}
        type="number"
      />
    </>
  );
};
