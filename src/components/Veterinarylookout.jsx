import { useEffect, useRef } from "react";

function Veterinarylookout({ url }) {
  const ciudadRef = useRef(null);

  useEffect(() => {
    console.log(url);
    if (ciudadRef.current && url) {
      ciudadRef.current.src = url;
    }
  }, [url]);

  return (
    // Fragmento (<>...</>) para agrupar multiples elementos sin añadir nodos adicionales al DOM
    <iframe
      ref={ciudadRef}
      className="aspect-square rounded-md w-3/4 "
      title={`VET ${ciudadRef.url}`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

export default Veterinarylookout;
