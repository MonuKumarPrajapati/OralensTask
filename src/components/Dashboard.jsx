import React, { useEffect, useRef, useState } from "react";
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
      return alert("Please provide a valid Age");
    }
    setAge(parseInt(e.target.value)); // we convert it on number bcs default value we received from html input field is as a string
  };



  const handleSubmit = (e) => {
    e.preventDefault(); // this stop the prevent submit behaviour of form
    

    const exitingUser = JSON.parse(localStorage.getItem("formData")) || [];

    const newUser = { name, age, file: file ? file.name : null };
    exitingUser.push(newUser);

    localStorage.setItem("formData", JSON.stringify(exitingUser));

    // here we submited our form taking input from the user
    console.log("Submitted Data:", name, age, file);
    alert("Form Submitted!");
    // Get the selected file


      

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
          <label className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            // name="name"
            maxLength={30}
            value={name}
            onChange={(e) => handleNameChange(e)}
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

        {/*} <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            File Upload
          </label>
          <input
            type="file"
            name="file"
            ref={fileInputRef}
            // value={file}
            onChange={handleFileChange}
            required
            className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 cursor-pointer"
          />
        </div>*/}
        {/* {
          fileInputRef?.current?.files[0] ? <h1>Uploaded</h1> :<div className="mb-6">
          <label 
            htmlFor="file-upload" 
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            File Upload
          </label>
          <div className="flex items-center justify-center w-full">
            <label 
              htmlFor="file-upload" 
              className="flex flex-col items-center justify-center w-full h-20 px-4 transition bg-white border-2 border-dashed rounded-md cursor-pointer hover:border-blue-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-200"
            >
              <div className="flex flex-col items-center justify-center space-y-2">
                <svg
                  className="w-8 h-8 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 16v2a4 4 0 01-8 0v-2M8 12a4 4 0 118 0m-4 0V4"
                  />
                </svg>
                <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-400">PNG, JPG, PDF (Max 10MB)</p>
              </div>
              <input 
                id="file-upload" 
                type="file" 
                name="file" 
                ref={fileInputRef}
                onChange={handleFileChange} 
                required 
                className="sr-only" 
              />
            </label>
          </div>
        </div>
} */}
        <FileUpload file={ file}  setFile={ setFile}  />

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600  "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
