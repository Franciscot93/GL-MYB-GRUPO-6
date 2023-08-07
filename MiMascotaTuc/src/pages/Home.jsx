
import Card from '../components/Card';
import imgPerro from '../img/perro.png';
import imgGato from '../img/gato-blanco2.png';
import imgConejo from '../img/conejo.png';
import imgPajaros from '../img/pajaro.png';
import imgCuidado from '../img/gato-negro.png';
import imgErizo from '../img/erizo.png'


function Home() {

    // Definicion de datos para las tarjetas (cards)
  const cards = [
    {
      title: 'Perros',
      description: '¡Un amigo incondicional, un compañero fiel! Los perros son más que mascotas, son leales aliados que llenan nuestros días de alegría y amor. Compartir la vida con un compañero canino no solo brinda felicidad, sino que también nos enseña el valor de la lealtad y el cariño verdadero. ¡Descubre el maravilloso mundo de tener un perro en tu familia y crea recuerdos inolvidables juntos!',
      imageUrl: imgPerro,
    },
    {
      title: 'Gatos',
      description: 'Enigmáticos y encantadores, los gatos son seres mágicos que llenan nuestros hogares de calidez y misterio. Una mirada profunda, un ronroneo suave; estos felinos nos roban el corazón sin decir una palabra. Tener un gato en tu vida es abrazar la serenidad y la independencia, encontrando en ellos amigos para toda la vida. ¡Deja que la elegancia felina ilumine tus días y descubre la magia de tener un gato en tu familia!',
      imageUrl: imgGato,
    },
    {
      title: 'Conejos',
      description: 'Pequeños, adorables y llenos de energía, los conejos domésticos son tiernos compañeros que nos roban el corazón con sus orejas esponjosas y sus movimientos ágiles. Compartir tu hogar con un conejito es descubrir la alegría de tener una bolita de pelo llena de amor y travesuras. Con su ternura y simpatía, los conejos se convierten en amigos inseparables que nos enseñan el valor de la paciencia y el cariño verdadero. ¡Atrapa la dulzura de tener un conejo en tu familia y crea momentos inolvidables junto a esta encantadora criatura!',
      imageUrl: imgConejo,
    },
    {
        title: 'Aves',
        description: 'Con sus plumas de colores y sus cantos melodiosos, los pájaros domésticos nos regalan momentos de serenidad y belleza en nuestro hogar. Sus trinos son notas de alegría que llenan el aire de vida y armonía. Tener un ave como mascota es disfrutar de la naturaleza desde la comodidad de tu casa. ¡Embárcate en el fascinante viaje de tener un pájaro en tu familia y déjate cautivar por su encanto alado!',
        imageUrl: imgPajaros,
      },
      {
        title: 'Erizos',
        description: 'Los erizos, con su apariencia peculiar, nos enseñan a encontrar la dulzura en lo inusual. A pesar de sus espinas, nos brindan lecciones de paciencia y amor. Son testigos de momentos felices en nuestras familias y nos recuerdan que el cariño puede venir de lugares inesperados. Los erizos son más que mascotas; son compañeros que nos unen con su amor único y especial',
        imageUrl: imgErizo,
      },
      {
        title: 'Cuidados para ellos',
        description: 'Nuestras mascotas, esos seres que nos eligen como sus compañeros de vida, merecen todo nuestro amor y cuidado. Como seres responsables, debemos asegurarnos de brindarles una vida feliz y saludable. Ellos nos dan su cariño incondicional sin palabras, y en reciprocidad, es nuestra responsabilidad cuidar de su bienestar. ¡Visitar al veterinario regularmente y proporcionarles el amor y la atención que se merecen es la mejor manera de agradecerles todo lo que nos ofrecen cada día sin poder hablar!',
        imageUrl: imgCuidado,
      }
      
  ];

  // Renderizacion de la pagina Home
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-2xl font-semibold mb-4">Home</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
}

export default Home;