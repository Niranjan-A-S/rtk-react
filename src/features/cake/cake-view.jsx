import { useDispatch, useSelector } from "react-redux";
import { cakeSlice } from "./cake-slice";

export const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);

  const dispatch = useDispatch();

  const count = 2;

  return (
    <div>
      <h1>Number of Cakes : {numOfCakes}</h1>
      <button onClick={() => dispatch(cakeSlice.actions.ordered(count))}>
        Order {count} Cakes
      </button>
      <button onClick={() => dispatch(cakeSlice.actions.restocked(count))}>
        Restock {count} Cakes
      </button>
    </div>
  );
};
