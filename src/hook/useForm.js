import { useState } from 'react';

// El hook personalizado 'useForm' acepta un objeto 'initialForm' opcional que proporciona los valores iniciales del formulario. Si no se proporciona, el formulario comenzara vacio.
export const useForm = (initialForm = {}) => {
  // utilizamos el hook 'useState' para crear un estado llamado 'formState que almacena los valores actuales del formulario. 'setFormState' es una funcion que nos permite actualizar este estado. 

  const [formState, setFormState] = useState(initialForm);

  // La funcion 'onInputChange' se utiliza para manejar el evento de cambio en los campos de entrada del formulario. Toma un evento como argumento y utiliza la desetructuracion para obtener el nombre y el valor del campo que cambio.
  const onInputChange = ({ target: { name, value } }) => {
    // Aqui actualizamos el estado del formulario utilizando el valor actual del 'formState' y sobreescribimos el valor del campo que cambio con el nuevo valor.

    setFormState({
    ...formState, //Mantenemos los valores existentes en el estado
    [name]: value, // Sobrescribimos el valor del campo que cambio
  });
  }
  // La funcion 'onResetForm' se utiliza para restablecer el formulario a sus valores iniciales
  const onResetForm = () => {
    // Simplemente actualizamos el estado del formulario con los valores iniciales proporcionados.
    setFormState(initialForm);
  }

  // Finalmente, devolvemos un objeto que contiene tanto los valores del formulario actual ('formState') como las funciones de manejo de eventos ('onInputChange' y 'onResetForm')
  return {
    ...formState, // Devolvemos todos los valores del formulario
    onInputChange, // Devolvemos la funcion para manejar el cambio en los campos
    onResetForm, // Devolvemos la funcion para restablecer el formulario
   }
}
 
















// import { useState } from "react";

// export const useForm = (initialForm = {}) => {
//   const [formState, setFormState] = useState(initialForm);

//   const onInputChange = ({ target }) => {
//     const { name, value } = target;
//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };

//   const onResetForm = () => {
//     setFormState(initialForm);
//   };

//   return {
//     ...formState,
//     formState,
//     onInputChange,
//     onResetForm,
//   };
// };
