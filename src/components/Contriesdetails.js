import React, {useEffect, useState} from 'react';
import Axios from 'axios';

function Contriesdetails(props) {
    const [contries, setContries] = useState({
    });

    useEffect(()=>{
        async function fetchData() {
            const { name } = props.match.params
            const reponse = await Axios.get(`https://travelbriefing.org/${name}?format=json`);
            
            setContries({reponse})

            console.log(reponse)
        }

        fetchData()
        
        
    }, [props])
    console.log(contries.reponse.data.timezone.name)
    return (
        <>
            <div>{contries.timezone}</div>
        </>
    )
}

export default Contriesdetails;