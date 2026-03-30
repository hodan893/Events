const upcomingEvents = [
  {
    id: 1,
    title: 'Summer Gala 2025',
    date: 'June 15, 2025',
    location: 'Grand Ballroom, City Center',
    description: 'An elegant evening of dining, dancing, and entertainment.',
    icon: '🎭',
  },
  {
    id: 2,
    title: 'Tech Innovation Summit',
    date: 'July 20-22, 2025',
    location: 'Convention Center',
    description: 'Industry leaders share insights on future technologies.',
    icon: '💡',
  },
  {
    id: 3,
    title: 'Wedding Expo',
    date: 'August 10, 2025',
    location: 'Exhibition Hall',
    description: 'Meet top vendors and discover the latest wedding trends.',
    icon: '💍',
  },
  {
    id: 4,
    title: 'birthday',
    date: 'December 5, 2025',
    location: 'The Grand Hotel',
    description: 'A festive night supporting local charities.',
    icon: '🎄',
  },
];

const Events = () => {
  const handleViewDetails = (event) => {
    alert(
      `Event: ${event.title}\n\n` +
      `Date: ${event.date}\n` +
      `Location: ${event.location}\n\n` +
      `${event.description}`
    );
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-96 flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Join us at these exciting events or let us help you create your own.
          </p>
        </div>
      </div>

      {/* Events Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-3">{event.icon}</div>
                  <h3 className="text-2xl font-semibold">{event.title}</h3>
                </div>
                <div className="space-y-2 mb-4">
                  <p className="flex items-center text-gray-600">
                    <span className="mr-2">📅</span>
                    <span>{event.date}</span>
                  </p>
                  <p className="flex items-center text-gray-600">
                    <span className="mr-2">📍</span>
                    <span>{event.location}</span>
                  </p>
                </div>
                <p className="text-gray-700 mb-6">{event.description}</p>
                <button
                  onClick={() => handleViewDetails(event)}
                  className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
                >
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Host Your Own Event CTA */}
      <div className="bg-indigo-600 py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Interested in hosting your own event?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether it’s a private party, corporate gathering, or grand celebration,
            we’ll bring your vision to life.
          </p>
          <a
            href="/booking"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Plan Your Event
          </a>
        </div>
      </div>
    </div>
  );
};

export default Events;