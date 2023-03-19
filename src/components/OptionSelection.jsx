import React from 'react';
import { Link } from 'react-router-dom';
import { ARRAY_ITEMS } from '../AIOptions/options';

function OptionSelection({ }) {
    return (
        <>
            <h1 >Custom AI ChatGPT</h1>
            
            <div className="grid-parent">
                {ARRAY_ITEMS.map(item => {
                    return (
                        <Link to={{
                                pathname:`/${item.id}`
                            }}
                            state={item.option}
                            >
                        <div 
                        className='grid-child' 
                        key={item.id}>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            
                        </div>
                        </Link>
                    );
                })}
            </div>
        </>
    );
};

export default OptionSelection;