import React from "react";
import { useContext } from "react";
import { CapsulesContext } from "../../CapsuleContext";
import capsuleImg from "../../assets/capsule.jpg";
import Modal from "react-modal";
import Card from "../Card/Card";

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

  function closeModal() {
    setIsOpen(false);
  }
  // Render the capsules data
  return (
    <>
      <section
        className="bg-blue-500 py-16  min-h-[800px]"
        data-testid="capsule-list"
      >
        <div className="container mx-auto">
          <h2 className="text-white text-4xl font-medium mb-4">
            Our Fleet of Rockets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {capsules.map((capsule) => (
              <div
                className="card flex flex-col shadow-sm"
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

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Card closeModal={closeModal} capsuleCard={capsuleCard} />
      </Modal>
    </>
  );
};

export default CapsuleList;
