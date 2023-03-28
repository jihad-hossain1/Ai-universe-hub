import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

const Singledata = (props) => {
    console.log(props.single.features);
    const { id, name, published_in, image, features, description } = props.single;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-2xl">
                <figure><img className="w-full h-64" src={image} alt="Shoes" /></figure>
                
            <div className="card-body">
                    <h2 className="card-title font-bold">Feature</h2>
                    {
                        features.map((feature,index) =>
                            <p>{index +1}. {feature}</p>
                        )
                    }
                    <hr className='border-1 border-primary my-3' />
                    <h1 className="font-bold text-xl">{name}</h1>
                    <div className="flex justify-between">
                        <div className='flex gap-2'>
                        <span><FontAwesomeIcon icon={faCalendar} /></span>
                        <p>{published_in}</p>
                    </div>
                        <div className="card-actions justify-end">
                        <button className="btn btn-info btn-xs">See More</button>
                        </div>
                    </div>
            </div>
            </div>
        </div>
    );
};

export default Singledata;