"use client"
import { useAppDispatch,useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";

const ReduxPage = () => {
    const dispatch = useAppDispatch();
    const count = useAppSelector((state: RootState) => state.product.entities);
    return (
        <div>
        <h1>
        Redux Page
        </h1>
        <p>
        Count: {count.length}
        </p>
        <button onClick={() => dispatch({ type: "product/add" })}>
        Add
        </button>
        </div>
)}

export default ReduxPage