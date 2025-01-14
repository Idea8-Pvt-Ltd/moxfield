const Card = ({ image, title, description, link }) => (
  <div className="relative overflow-hidden bg-gray-800 rounded-lg">
    <img
      src={image}
      alt={title}
      className="absolute inset-0 object-cover w-full h-full"
    />
    <div className="absolute bottom-0 left-0 z-10 w-full p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
      <h2 className="text-lg font-bold text-white">{title}</h2>
      <p className="mt-1 text-sm text-gray-300">{description}</p>
      <a href={link} className="inline-block mt-2 text-blue-400">
        Explore Decks &rarr;
      </a>
    </div>
  </div>
);

const CardGrid = () => {
  const cards = [
    {
      image:
        "https://assets.moxfield.net/cards/card-5MyO2-art_crop.webp?103157173",
      title: "Commander / EDH",
      description:
        "A 100-card constructed format based around a legendary card called a Commander.",
      link: "#",
    },
    {
      image:
        "https://assets.moxfield.net/cards/card-AWnGA-art_crop.webp?103145252",
      title: "Modern",
      description: "A 60-card constructed format.",
      link: "#",
    },
    {
      image:
        "https://assets.moxfield.net/cards/card-enwR8-art_crop.webp?103159968",
      title: "Standard",
      description: "A 60-card constructed format.",
      link: "#",
    },
    {
      image:
        "https://assets.moxfield.net/cards/card-yj7oP-art_crop.webp?101108752",
      title: "Pioneer",
      description: "A 60-card constructed format.",
      link: "#",
    },
    {
      image:
        "https://assets.moxfield.net/cards/card-Q43Da-art_crop.webp?103158933",
      title: "Legacy",
      description: "A 60-card constructed format.",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen py-8 text-white bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
          {/* First row with 500px cards */}
          <div className="flex justify-center">
            <div className="w-[500px]">
              <Card
                image={cards[0].image}
                title={cards[0].title}
                description={cards[0].description}
                link={cards[0].link}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[500px]">
              <Card
                image={cards[1].image}
                title={cards[1].title}
                description={cards[1].description}
                link={cards[1].link}
              />
            </div>
          </div>

          {/* Second row with 300px cards */}
          <div className="flex justify-center">
            <div className="w-[300px]">
              <Card
                image={cards[2].image}
                title={cards[2].title}
                description={cards[2].description}
                link={cards[2].link}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[300px]">
              <Card
                image={cards[3].image}
                title={cards[3].title}
                description={cards[3].description}
                link={cards[3].link}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[300px]">
              <Card
                image={cards[4].image}
                title={cards[4].title}
                description={cards[4].description}
                link={cards[4].link}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
