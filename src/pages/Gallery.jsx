const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552',
    alt: 'Elegant wedding reception with floral decorations',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72',
    alt: 'Corporate event with networking',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d',
    alt: 'Vibrant birthday party with balloons and cake',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87',
    alt: 'Conference audience listening to speaker',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1478147427282-58a87a120781',
    alt: 'Outdoor festival with colorful decorations',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329',
    alt: 'Stage design with lights and floral backdrop',
  },
];

const Gallery = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">Our Gallery</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Take a look at some of the memorable events we've had the pleasure of creating.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image) => (
          <div key={image.id} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;