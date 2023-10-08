import React, { useState, useEffect } from 'react';
import { getAllDetails } from '../services/userDetails';
import UserTable from '../components/Table';
import { Navigate, useNavigate } from 'react-router-dom';
import SearchComponent from '../components/SearchComponent';
import Loader from '../components/Loader';

function Home() {
  const navigate:any = useNavigate();
  let id: string | null = localStorage.getItem('userId');
  const [data, setData] = useState([]);
  const [loade, setLoade] = useState<boolean>(true);

  useEffect(() => {
    console.log('111');
    (async () => {
      const detailsData = await getAllDetails(id);
      console.log('details', detailsData);
      setLoade(false);
      setData(detailsData);
    })()
  }, []);


  console.log('data', data);
  return (
    <>
    {loade && <Loader />}
    <SearchComponent setData={setData} />
      <button onClick={() => navigate('/userdetails')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4" type="button">
        Add More Details +
      </button>
      <UserTable users={data} />
    </>
  )
}

export default Home