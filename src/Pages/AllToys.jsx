import { useEffect, useState } from 'react';
import ToyCard from '../Components/ToyCard';
import { useGlobalContext } from '../context/AppAuthContext';
import { ColorRing } from 'react-loader-spinner';

const AllToys = () => {
    const [toys, setToys] = useState([])

    const { dataLoading, setDataLoading } = useGlobalContext()
    

    useEffect(() => {
        setDataLoading(true)
        fetch('https://toy-paradise-server.vercel.app/all-toys')
        .then(res => res.json())
        .then(data => {
            setToys(data)
            setDataLoading(false)
        })
    },[])
    if (dataLoading ) {
        // console.log("priv", loading);
        return (
          <div className="flex items-center justify-center">
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          </div>
        );
      }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 p-2 lg:grid-cols-3'>
            {toys.map(toy => <ToyCard key={toy._id} toy={toy} />)}
        </div>
    );
};

export default AllToys;