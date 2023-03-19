import React, { useState, useEffect } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import { useLocation } from 'react-router-dom';
import { Button } from 'antd';



function AIResponse() {
    const [input, setInput ] = useState("");
    const [result, setResult ] = useState(null);
    const [option, setOption] = useState(null);
    const [ answer, setAnswer]  = useState(false);
    const [ loading, setLoading ] = useState(false);
    const location = useLocation();

    useEffect(()=>{
        setOption(location.state)
    }, []);

    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_AI_API_KEY,
    });
    
    const openai = new OpenAIApi(configuration);
    const response = async () => {
        setLoading(true);
        let object = {...option, prompt: input};
        const reply = await openai.createCompletion(object);
        setResult(reply.data.choices[0].text);
        setLoading(false);
        setAnswer(true);
    };



    return (
        <>
        {!answer ? 
        <div className='response'>
            <textarea 
                className='text-area' 
                cols="50" 
                rows="10" 
                value={input}
                onChange={(e)=>setInput(e.target.value)}
            ></textarea>
            <Button className='buttonClass' 
            onClick={response} 
            loading={loading}
            >Generate content
            </Button>
            <Button className='buttonClass reset' onClick={()=>setInput(null)} >Reset
            </Button> 
        </div> : 
        <div
            style={{
                minHeight: 0,
                marginTop: "-5rem",
                padding: "0 10rem",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <h3 style={{fontFamily: "cursive", fontSize: "20px", fontWeight: "600"}}>{input}?</h3>
            <p style={{fontFamily: "cursive", fontSize: "18px", fontWeight: "light", textAlign: "left"}}>{result}</p>
            <div
                style={{ display: 'flex', justifyContent: "center"}}
            >
                <Button 
                    onClick={()=>{
                        setAnswer(false);
                        setInput(null)
                    }} 
                    className='buttonClass reset' 
                    style={{textAlign: "center"}}
                >Reset</Button>
            </div>
        </div>}
        </>
    );
}

export default AIResponse;