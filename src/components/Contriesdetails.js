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
        
        
    }, [props])
    console.log(contries.response.data.electricity.voltage)
    return (
        <>  
            Oi
        </>
    )
}

export default Contriesdetails;