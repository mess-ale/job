import React from "react";

const MapComponent = () => {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7881.466532301065!2d38.82351628999273!3d8.996673514253365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b9ad0561ae933%3A0x98be8c0e5f25b7f0!2sGoro!5e0!3m2!1sen!2set!4v1715278967301!5m2!1sen!2set";

  return (
    <iframe
      src={mapUrl}
      width="600"
      height="450"
      style={{ border: "2px solid #89fc00", /* Adjust border properties here */ }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};

export default MapComponent;
