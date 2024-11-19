import React, { useState } from "react";

const FileUpload = ({ file, setFile }) => {
  // Handle file change
  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  // Handle file reset
  const handleReset = () => {
    setFile(null);
    document.getElementById("fileInput").value = ""; // Reset the file input
  };

  return (
    <div>
   
      {!file ? (
        <div className="mb-6">
          <label
            htmlFor="file-upload"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            File Upload
          </label>
          <div
            className="flex items-center justify-center w-full"
            onClick={() => document.getElementById("fileInput").click()}
          >
            <label
              htmlFor="file-upload"
              className="flex flex-col items-center justify-center w-full h-20 px-4  transition bg-white border-2 border-dashed rounded-md cursor-pointer hover:border-blue-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-200"
            >
              <div className="flex flex-col items-center justify-center ">
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
                <p className="text-sm text-gray-500">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-gray-400 ">
                  PNG, JPG, PDF (Max 10MB)
                </p>
              </div>
              <input
                type="file"
                id="fileInput"
                onChange={handleFileChange}
                style={{ display: "none" }} // Hide the default file input
              />
            </label>
          </div>
        </div>
      ) : (
        <div className=" flex gap-6 justify-center items-center py-2">
          <p>Uploaded File: {file.name}</p>
          <button onClick={handleReset} className=" px-4 py-2 bg-slate-400 rounded-md">Reset</button>
        </div>
      )}
      
      
    </div>
  );
};

export default FileUpload;
