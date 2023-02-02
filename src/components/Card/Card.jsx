import React from "react";
import capsuleImg from "../../assets/capsule.jpg";
const Card = ({ capsuleCard }) => {
  let dateString = capsuleCard.original_launch;
  let date = new Date(dateString);
  return (
    <article className="bg-white p-6 rounded-lg shadow-lg">
      <img
        src={capsuleImg}
        alt="Capsule"
        className="h-56 w-full object-cover rounded-lg"
      />
      <div className="pt-4">
        <h4 className="text-lg font-medium">{capsuleCard?.capsule_serial}</h4>
        <p className="text-gray-600">Additional Info: {capsuleCard?.details}</p>
        <p className="text-gray-600">Date: {date.toLocaleDateString()}</p>
        <p className="text-gray-600">Status: {capsuleCard?.status}</p>
        <p className="text-gray-600">Type: {capsuleCard?.type}</p>
      </div>
    </article>
  );
};

export default Card;
