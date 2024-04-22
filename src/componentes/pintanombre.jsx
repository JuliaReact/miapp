import React from "react";
import PropTypes from "prop-types";

const Pintanombre = ({ nombre, telefono }) => {
  return (
    <div>
      {nombre} / {telefono}
    </div>
  );
};

Pintanombre.propTypes = {
  nombre: PropTypes.string.isRequired,
  telefono: PropTypes.string,
};
export default Pintanombre;
