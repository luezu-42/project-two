import React, {useEffect,useState} from 'react';
import Axios from 'axios';

function TicketApi() {

    useEffect(()=>{

       async function fetchData() {
        const response = await Axios.get(`http://min-prices.aviasales.ru/calendar_preload?origin=BRA&destination=USA&depart_date=2014-12-01&one_way=false`);

        console.log(response)
        }

        fetchData()
    }, [])

    return (
        <div>Oi</div>
    )
}

export default TicketApi;