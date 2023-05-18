import React, { useEffect, useState } from 'react';
import ToyCard from '../Components/ToyCard';

const AllToys = () => {
    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/all-toys')
        .then(res => res.json())
        .then(data => setToys(data))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 p-2 lg:grid-cols-3'>
            {toys.map(toy => <ToyCard key={toy._id} toy={toy} />)}
        </div>
    );
};

export default AllToys;