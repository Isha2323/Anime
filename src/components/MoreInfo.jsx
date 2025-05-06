import React from "react";
import "../index.css";

function MoreInfo({ title }) {
  return (
    <div className="p-6 bg-pink-600 border border-pink-300 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-pink-800 mb-2">{title} Details</h2>
      <p className="text-pink-900">
        This is extra information about <strong>{title}</strong>. You can add
        more detailed content here.
      </p>
    </div>
  );
}

export default MoreInfo;
