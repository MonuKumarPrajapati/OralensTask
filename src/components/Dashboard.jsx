import React, { useState } from "react";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [file, setFile] = useState(null);

  // handling the name change
    const handleNameChange = (e) => {
        const userName = e.target.value;
        const intCapName = (userName.charAt(0).toUpperCase() + userName.slice(1))
    setName(intCapName);
  };

  // handling the age change
  const handleAgeChange = (e) => {
    if (age === 0 || age === -1) {
      return alert("Please provide a valid Age");
    }
    setAge(parseInt(e.target.value)); // we convert it on number bcs default value we received from html input field is as a string
  };

  const handleFileChange = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    const exitingUser = JSON.parse(localStorage.getItem("formData")) || [];

    const newUser = { name, age, file: file ? file.name : null };
    exitingUser.push(newUser);

    localStorage.setItem("formData", JSON.stringify(exitingUser));

    // here we submited our form taking input from the user
    e.preventDefault(); // this stop the prevent submit behaviour of form
    console.log("Submitted Data:", name, age, file);
    alert("Form Submitted!");

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

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            File Upload
          </label>
          <input
            type="file"
            name="file"
            onChange={handleFileChange}
            required
            className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 cursor-pointer"
          />
        </div>

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
