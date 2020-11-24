import React, {useEffect, useState} from 'react';
import Axios from 'axios';

function Contriesdetails(props) {
    const [contries, setContries] = useState({
    });

    useEffect(()=>{
        async function fetchData() {
            const { name } = props.match.params
            const response = await Axios.get(`https://travelbriefing.org/${name}?format=json`);
            
            setContries({response})

            console.log(response)
        }

        fetchData()
        
        
    }, [contries])
    console.log(contries.response.data.timezone.name)
    return (
        <>  
            <div>{contries.response.data.language[0].language}</div>
            <div>{contries.response.data.currency.name}</div>
            <div>{contries.response.data.timezone.name}</div>
        </>
    )
}

export default Contriesdetails;