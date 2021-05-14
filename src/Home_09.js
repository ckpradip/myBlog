
import { useState } from 'react';


const Home = () => {


    //let name = 'Pradeep';
    const [name, setName] = useState ('Pradeep');
    const [age, setAge] = useState(40);

    const handleClick = () => {
    //    console.log('hello world ' + name);
    //    name = 'GeeGee';
        setName('GeeGee');
        setAge (11);
    }

    const handleClickAgain = (name) => {
    //    console.log ('Hello ' + name);
        setName ('Pradeep');
        setAge (40);
    }

    return ( 
        <div className="home">
            
            {/* 
            <h2>Home Page</h2>
            <p>{ name } is { age } years old</p>
            <button onClick = { handleClick }>Click me</button>
            <button onClick = { () => { handleClickAgain('pradeep')}}>Click Again</button> 
            */}
        </div>
     );
}
 
export default Home;
<div className="home">
    <h2>Home Page</h2>
</div>