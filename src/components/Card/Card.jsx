import React, { useEffect, useState } from 'react';
import Singledata from '../SingleData/Singledata';

const Card = () => {
    const [data, setData] = useState([]); 
    const [showAll, setShowAll] = useState(false);
    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/ai/tools')
        //     .then(res => res.json())
        //     .then(data => setData(data))
        const loadData = async () => {
            const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
            const value = await res.json();
            setData(value.data.tools);
            // console.log(value.data.tools);
        }
        loadData();
    },[])
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 lg:px-12 my-6 gap-4">
                {
                data.slice(0, showAll ? showAll.length : 6).map(singleData => {
                    // console.log(singleData);
                    return <Singledata single={singleData} key={singleData.id}></Singledata>
                })
            }   
            </div>
        </>
    );
};

export default Card;