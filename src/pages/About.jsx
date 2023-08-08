import image from '../img/MiMascotaTuc.jpeg'

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
      <div className="max-w-md p-6 bg-white rounded shadow-md transition-transform hover:transform hover:scale-150 hover:border-neon-gold">
        <h2 className="text-2xl font-semibold mb-8">Acerca de MiMascotaTuc</h2>
        <p className="text-gray-600">
          ¡Bienvenido a MiMascotaTuc! Somos un equipo apasionado que se dedica a facilitar
          el cuidado de los animales a través de nuestra aplicación.
        </p>
        <div className="h-6 w-6 absolute animate-spin rounded-full border-t-4 border-neon-blue border-opacity-35"></div>
      </div>
    </div>
  );
};

export default About;

