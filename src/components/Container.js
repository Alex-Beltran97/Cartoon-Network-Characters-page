import Card from './Card.js';
import Button from './Button.js';
import Message from './Message.js';
import { useState } from 'react'

const Container = ({name,serie,year,img,msg})=>{

    const [greeting, setGreeting] = useState(true);

    const greet = ()=>{
        setGreeting(true);
        setTimeout(()=>{
            setGreeting(false);
        },5000)
    };

    return(
        <div className='container'>
        <Message 
            display={greeting}
            msg={msg}
        />
        <Card 
            name={name}
            serie={serie}
            year={year}
            img={img}
            logo={img}
        />
        <Button
            greet={greet}
        />
        </div>
    );
};

export default Container;