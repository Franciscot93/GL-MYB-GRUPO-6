import image from '../img/MiMascotaTuc.jpeg'

const About = () => {
  return (
    <main className='w-full flex'>
    <div className="aspect-square w-1/2 rounded-md flex flex-col transition-transform duration-300 hover:transform hover:scale-110 items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${image})`, filter: 'grayscale(100%)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    '@media (max-width: 768px)': {
      backgroundSize: 'contain',}}}>
       </div>
    <div className="w-1/2 p-6 bg-transparent rounded shadow-md transition-transform duration-300 hover:transform hover:scale-110  ">
    <h2 className="text-4xl  logoTitle mb-8">Acerca de MiMascotaTuc</h2>
    <p className="text-gray-600">
      ¡Bienvenido a MiMascotaTuc! Somos un equipo apasionado que se dedica a facilitar
      el cuidado de los animales a través de nuestra aplicación.
    </p>
  </div>
  </main>
  );
};

export default About;

