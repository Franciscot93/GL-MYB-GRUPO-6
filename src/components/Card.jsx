// El componente Card recibe un objeto 'card' como prop que contiene la informacion de la tarjeta
function Card({ card }) {
  return (
    // Esto es el contenedor de la tarjeta con estilos utilizando clases de Tailwind CSS
    <div className="bg-transparent rounded-lg shadow-md p-4 neon-blue ">
      <img
        src={card.imageUrl}
        alt=""
        className="w-full aspect-square md:h-46 object-cover rounded-md transition-transform hover:transform hover:scale-110 neon-blue"
      />
      <h2 className="text-lg font-semibold mt-2">{card.title}</h2>
      <p className="text-gray-600 mt-1">{card.description}</p>
    </div>
  );
}

export default Card;
