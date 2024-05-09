import { useState } from 'react'

function Button(props) {
    let { action, title } = props;
    return <button onClick={action} className="inline-block rounded bg-blue-400 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white">{title}</button>;
}


/**
 * 
 * @see https://www.joranquinten.nl/tutorials/combining-reactjs-and-vuejs-in-one-website-using-astro
 * 
 * @returns 
 */
function ReactCounter() {
    const [count, setCount] = useState(0);
    let incrementCount = () => setCount(count + 1);
    let decrementCount = () => setCount(count - 1);
    let resetCount = () => setCount(0);

    return (
        <div className="app">
            <p>I'm a ReactJS Component ⚛</p>
            <p>Count: {count}</p>
            <div className="buttons">
                <Button title={"-"} action={decrementCount} />
                <Button title={"+"} action={incrementCount} />
                <Button title={"Reset"} action={resetCount} />
            </div>
        </div>
    );
}
export default ReactCounter;