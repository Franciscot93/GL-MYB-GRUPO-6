import PropTypes from 'prop-types';
function Error({ children }) {
  return (
    <div className="text-center my-4 p-3 bg-red-600 font-bold text-slate-50">
      {children}
    </div>
  );
}

Error.propTypes = {
  children: PropTypes.node.isRequired, // Validación de children como nodo requerido
};

export default Error;





