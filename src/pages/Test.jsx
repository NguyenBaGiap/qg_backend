import React, { useState, useEffect  } from 'react';
import Example from "../hooks/Example";

export default function Test(props){

    const [count, setCount] = useState(0);

    function increment() {
        setCount(count => count + 1);
    }

    useEffect(
        () => {

            console.log('update count....')

            return ()=>{
                // clean up
                console.log('chay vao day........')
            }
        },[

        ]
    );
    return (
        <div>
            <hr />
            This is Test pages
            <Example
                count={count}
                updateCount={increment}
            />
            <p>Count in Test pages: {count}</p>
            <p>.....Next</p>
            <button onClick={()=> props.history.push('/hook-rule')} >Go to Hook rules</button>
            <hr />
        </div>
    )
}
