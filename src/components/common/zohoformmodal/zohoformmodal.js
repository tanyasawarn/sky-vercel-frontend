// components/Common/ZohoFormModal.js
import React from "react";

const ZohoFormModal = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center z-[9999]">
      <div className="bg-white p-4 rounded-xl max-w-[900px] w-[95%] relative">
        
        <button
          onClick={onClose}
          className="absolute top-[10px] right-[10px] bg-[#f44336] text-white border-none rounded-full w-[30px] h-[30px] cursor-pointer font-bold"
        >
          X
        </button>

        <iframe
          aria-label="Contact Us Form"
          frameBorder="0"
          className="w-full h-[700px] border-none"
          src="https://forms.zohopublic.in/skillfyme11/form/RequestACallback/formperma/8BERdiuHtaqrxMBImJ3_rPJtOehVP_Vmt8p8bIrBZ7w"
        ></iframe>

      </div>
    </div>
  );
};

export default ZohoFormModal;