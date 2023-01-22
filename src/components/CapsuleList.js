import React from "react";
import { useContext } from "react";
import { CapsulesContext } from "../CapsuleContext";
import capsuleImg from "../assets/capsule.jpg";

import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const CapsuleList = () => {
  const { capsules } = useContext(CapsulesContext);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [capsuleCard, setCapsulecard] = React.useState(null);

  function openModal(capsule) {
    setCapsulecard(capsule);

    // setCapsulecard(capsule);
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  // Render the capsules data
  return (
    <>
      <section className="bg-blue-500 py-16">
        <div className="container mx-auto">
          <h2 className="text-white text-4xl font-medium mb-4">
            Our Fleet of Rockets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {capsules.map((capsule) => (
              <div
                className="card flex flex-col"
                key={capsule.capsule_serial}
                onClick={() => openModal(capsule)}
              >
                <img src={capsuleImg} alt="Rocket 1" className="w-full" />
                <h3 className="text-white text-xl font-medium mt-4">
                  {capsule.capsule_serial}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="relative overflow-hidden">
            <img
              src="rocket.jpg"
              alt="Rocket Soaring Through Space"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-75 rounded-lg" />
          </div>
          <div className="text-white mt-2">
            <h2 className="text-3xl font-medium">
              {capsuleCard?.capsule_serial}
            </h2>
            <p className="text-sm">
              Experience the thrill of space travel with this intricate and
              modern design.
            </p>
          </div>
          <div className="mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Learn More
            </button>
            <button
              onClick={closeModal}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 ml-2"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CapsuleList;
