import React, { useEffect, useState } from "react";
import FileUpload from "./FileUpload";




const Dashboard = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [file, setFile] = useState(null);

  // handling the name change
  const handleNameChange = (e) => {
    const userName = e.target.value;
    const intCapName = userName.charAt(0).toUpperCase() + userName.slice(1);
    setName(intCapName);
  };

  // handling the age change
  const handleAgeChange = (e) => {
    if (age === 0 || age === -1) {
    
      return; // Exit early if age is invalid
    }
    setAge(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Stop the form from submitting in the traditional way

    // Basic validation (optional, depending on your requirements)
    if (!name || !age || !file) {
      
      return;
    }

    // Retrieve existing users data from localStorage
    const exitingUser = JSON.parse(localStorage.getItem("formData")) || [];

    // Prepare new user data
    const newUser = { name, age, file: file ? file.name : null };
    exitingUser.push(newUser);

    // Store updated data in localStorage
    localStorage.setItem("formData", JSON.stringify(exitingUser));

    

    // Reset form data
    setName("");
    setAge("");
    setFile(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="bg-white p-8 shadow-md rounded-lg w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Healthcare Dashboard
        </h1>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Name</label>
          <input
            type="text"
            maxLength={30}
            value={name}
            onChange={handleNameChange}
            required
            className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Age</label>
          <input
            type="number"
            name="age"
            value={age}
            onChange={handleAgeChange}
            required
            className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        {/* File Upload */}
        <FileUpload file={file} setFile={setFile} />

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>


    </div>
  );
};

export default Dashboard;
