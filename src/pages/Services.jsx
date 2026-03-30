const services = [
  {
    id: 'wedding',
    title: 'Wedding Planning',
    description: 'Complete wedding coordination, from venue selection to floral design and day-of management.',
    icon: '💍',
    details: 'Personalized ceremonies, vendor management, rehearsal dinners, and more.',
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    description: 'Conferences, product launches, team building, and corporate galas with a professional touch.',
    icon: '🏢',
    details: 'AV setup, stage design, attendee management, and seamless logistics.',
  },
  {
    id: 'party',
    title: 'Private Parties',
    description: 'Birthdays, anniversaries, and celebrations tailored to your personal style.',
    icon: '🎉',
    details: 'Custom themes, entertainment, catering, and party favors.',
  },
  {
    id: 'conference',
    title: 'Conferences & Seminars',
    description: 'Seamless logistics, AV setup, and attendee management for successful events.',
    icon: '🎤',
    details: 'Registration, speaker coordination, breakout sessions, and networking.',
  },
  {
    id: 'design',
    title: 'Event Design & Decor',
    description: 'Custom themes, lighting, and decor to create the perfect ambiance.',
    icon: '🎨',
    details: 'Floral arrangements, lighting design, furniture rental, and styling.',
  },
  {
    id: 'catering',
    title: 'Catering Management',
    description: 'Curated menus and impeccable service for any occasion.',
    icon: '🍽️',
    details: 'Menu planning, food tasting, service staff, and bar management.',
  },
];

const Services = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-96 flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1511795409674-a425e9145a7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            We offer a comprehensive range of event services to ensure your occasion is
            executed flawlessly, leaving you to enjoy every moment.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-gray-500 text-sm mb-6">{service.details}</p>
                <button className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors">
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Tailored Approach</h3>
              <p className="text-gray-600">
                Every event is unique. We customize our services to fit your vision,
                budget, and style.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⏱️</div>
              <h3 className="text-xl font-semibold mb-2">Stress-Free Planning</h3>
              <p className="text-gray-600">
                We handle all the details, from vendor coordination to day-of management,
                so you can relax and enjoy.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="text-xl font-semibold mb-2">Proven Excellence</h3>
              <p className="text-gray-600">
                With hundreds of successful events, we have the experience and
                reputation to deliver outstanding results.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-indigo-600 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Dream Event?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let’s bring your ideas to life. Contact us today for a free consultation.
          </p>
          <a
            href="/booking"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;