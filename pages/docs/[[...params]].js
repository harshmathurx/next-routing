import { useRouter } from 'next/router';
import React from 'react'

const Docs = () => {
    const router = useRouter();
    const {params = [] } = router.query;
    console.log(params);
    if(params.length === 2){
        return (
            <div>
                <h1>Viewing Docs for Feature {params[0]} and Concept {params[1]}</h1>
            </div>
        )
    }else if(params.length === 1){
        return (
            <div>
                <h1>Viewing Docs for Feature {params[0]}</h1>
            </div>
        )
    }

    return (
        <div>
            <h1>Docs Home Page</h1>
        </div> 
    )
}

export default Docs