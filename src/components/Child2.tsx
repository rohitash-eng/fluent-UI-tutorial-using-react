import { useEffect, useState } from "react";

const Child2 = (Props: any) => {
    let [count, setCount] = useState(0);
    useEffect(() => {
        // console.log('im child 2 use effect');
    }, []);

    return <div>
        content of child 2{Props.name} count={count}
        <button onClick={()=>setCount(count++)} >Increase </button>
        </div>;
};
export default Child2;