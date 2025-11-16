import { DestinationCard } from './DestinationCard';

const destinations = [
  {
    title: 'Kyoto Temple Trail',
    location: 'Kyoto, Japan',
    description: 'Immerse yourself in ancient Japanese culture with guided temple visits, traditional tea ceremonies, and cherry blossom gardens.',
    imageUrl: 'https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-temple-161401.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '7 Days',
    price: 'From XXXXX'
  },
  {
    title: 'Northern Lights Adventure',
    location: 'Reykjavik, Iceland',
    description: "Chase the aurora borealis across Iceland's dramatic landscapes, from geothermal hot springs to massive glaciers.",
    imageUrl: 'https://images.pexels.com/photos/1933316/pexels-photo-1933316.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '5 Days',
    price: 'From XXXXX'
  },
  {
    title: 'Marrakech to Sahara',
    location: 'Morocco',
    description: 'Journey through vibrant souks, ancient kasbahs, and endless golden dunes on this unforgettable desert expedition.',
    imageUrl: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '8 Days',
    price: 'From XXXXX'
  },
  {
    title: 'Fiordland Explorer',
    location: 'South Island, New Zealand',
    description: "Discover pristine fjords, emerald rainforests, and majestic mountains in one of Earth's most spectacular landscapes.",
    imageUrl: 'https://images.pexels.com/photos/1118877/pexels-photo-1118877.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '10 Days',
    price: 'From XXXXX'
  },
  {
    title: 'Machu Picchu Trek',
    location: 'Cusco, Peru',
    description: 'Hike the legendary Inca Trail to the lost city of Machu Picchu, exploring ancient ruins and Andean culture.',
    imageUrl: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '9 Days',
    price: 'From XXXXX'
  },
  {
    title: 'Santorini Sunset',
    location: 'Santorini, Greece',
    description: 'Experience the magic of whitewashed villages, azure waters, and world-class cuisine on this Aegean paradise.',
    imageUrl: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '6 Days',
    price: 'From XXXXX'
  }
];

export function FeaturedDestinations() {
  return (
    <section id="destinations" className="py-24 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-4">
            Curated Journeys
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Handpicked destinations and expertly crafted itineraries designed to create
            extraordinary experiences you'll treasure forever.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <DestinationCard key={destination.title} {...destination} />
          ))}
        </div>
      </div>
    </section>
  );
}
