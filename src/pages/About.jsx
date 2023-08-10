import image from '../img/MiMascotaTuc.jpeg'

const About = () => {
  return (
    <main className='w-full flex'>
    <div className="aspect-square w-1/2 rounded-md flex flex-col transition-transform duration-300 hover:transform hover:scale-105 items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${image})`, filter: 'grayscale(100%)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    '@media (max-width: 768px)': {
      backgroundSize: 'contain',}}}>
       </div>
    <div className="w-1/2 p-1 bg-transparent rounded shadow-md transition-transform duration-300 hover:transform hover:scale-105  ">
    <h2 className="text-4xl  logoTitle mb-7">Acerca de MiMascotaTuc</h2>
    <p className="text-gray-600">
    ¡Bienvenido a MiMascotaTuc! Somos un equipo apasionado que combina tecnología y amor por las mascotas. Aunque no empezamos en un garaje, sino en el living de nuestros padres, estamos comprometidos a crear aplicaciones que hagan que cuidar a tus mascotas sea más fácil y divertido. Únete a nosotros mientras fusionamos la innovación con los ronroneos y ladridos en una experiencia única para amantes de mascotas como tú.
    </p>
  </div>
  </main>
  );
};

export default About;

