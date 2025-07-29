import { useEffect, useState } from "react";
import Child2 from "./Child2";

const Child1 = (Props: any) => {
    let [count, setCount] = useState(0);
    
    useEffect(() => {
        // console.log('im child 1 use effect');
    }, []);

    return <div>content count={count} of child 1 {Props.name}
    <button onClick={()=>setCount(count++)} >Increase </button>
        <Child2 name={Props.name} />
    </div>;
};
export default Child1;