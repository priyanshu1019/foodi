import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ItemPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    console.log("Fetching item with ID:", id);
    axios
      .get(`https://foodi-server-eag1.onrender.com/menu/${id}`)
      .then((response) => {
        console.log("API Response:", response.data);
        setItem(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching item details:', error.response || error);
        setLoading(false);
      });
  }, [id]);
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
      </div>
    );
  }

  if (!item) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl font-semibold text-gray-600">Item not found</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 mt-20">
      <div className="w-96 mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={item.image} alt={item.name} className="w-full h-64 object-fill object-center" />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">{item.name}</h1>
          <p className="text-lg text-gray-700 mb-4">{item.description}</p>
          <div className="flex justify-between items-center">
            <p className="text-2xl font-semibold text-gray-900">
              Price: <span className="text-green-600">${item.price.toFixed(2)}</span>
            </p>
            <button className="px-6 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;