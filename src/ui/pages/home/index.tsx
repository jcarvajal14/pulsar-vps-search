import React, { useState, useEffect } from 'react';
import apiService from '../../../services/apiservice';

export default function About() {
    const [hello, setHello] = useState<string>('');
  useEffect(() => {
    const fetchData = async () => {
        apiService.api.getHello().then(
            (res) => {
                console.log(res)
                setHello(res.data.name)
          }
      );
    };
    fetchData();
  }, []);

  return (
    <div className='h-screen w-screen flex bg-gray-900 justify-center pt-32'>
      <span><h1 className=' text-violet-700'><strong>Welcome to here!</strong></h1></span>
    </div>
  );
}
