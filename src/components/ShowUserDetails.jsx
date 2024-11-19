import React, { useEffect, useState } from "react";

const ShowUserDetails = () => {
    const [userData, setUserData] = useState(null);
    

  const userInputFromLs = JSON.parse(localStorage.getItem("formData"));

  useEffect(() => {
    setUserData(userInputFromLs);
      }, []);
    
   

    
    const handleReset = () =>{
        const removeAll = localStorage.removeItem('formData')
        setUserData(removeAll)
     
      
    }
  return (
    <div className="min-h-screen bg-gray-100 p-4">
          <div className=" flex justify-between items-center">
          <h1 className="text-2xl font-bold mb-6 text-center ">Users</h1>
              <button className='px-4 py-2 bg-blue-500 rounded-md'
              onClick={handleReset}>Reset All</button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200 shadow-lg bg-white">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Age</th>
              <th className="border border-gray-300 px-4 py-2">File</th>
            </tr>
          </thead>
          <tbody>
            {userData?.map((user, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
              >
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {user.name}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {user.age}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {user.file || "No file uploaded"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowUserDetails;
