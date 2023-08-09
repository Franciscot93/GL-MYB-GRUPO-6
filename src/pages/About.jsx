import image from '../img/MiMascotaTuc.jpeg'

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${image})`, filter: 'grayscale(100%)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    '@media (max-width: 768px)': {
      backgroundSize: 'contain',
    }
    }}>
      <div className="max-w-md p-6 bg-white rounded shadow-md transition-transform hover:transform hover:scale-150 ">
        <h2 className="text-2xl font-semibold mb-8">Acerca de MiMascotaTuc</h2>
        <p className="text-gray-600">
          ¡Bienvenido a MiMascotaTuc! Somos un equipo apasionado que se dedica a facilitar
          el cuidado de los animales a través de nuestra aplicación.
        </p>
      </div>
    </div>
  );
};

export default About;

