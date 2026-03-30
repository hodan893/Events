const About = () => {
  return (
    <div className="bg-white">
      
      <div
        className="relative bg-cover bg-center h-96 flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1511795409674-a425e9145a7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Crafting extraordinary moments with passion and precision
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Story Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-gray-700 mb-4">
            At Events, we believe that every occasion deserves to be extraordinary.
            Founded in 2024, we have grown into one of the leading event management
            companies, known for our attention to detail and creative flair.
          </p>
          <p className="text-lg text-gray-700">
            Our mission is to transform your ideas into reality, handling every aspect
            from concept to execution. Whether it's an intimate gathering or a large-scale
            corporate event, we bring passion, precision, and professionalism to the table.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-indigo-50 p-8 rounded-lg text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-700">
              To create unforgettable experiences that exceed expectations, through
              innovative design, flawless execution, and a commitment to excellence
              in every event we produce.
            </p>
          </div>
          <div className="bg-indigo-50 p-8 rounded-lg text-center">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-700">
              To be the most trusted and creative event management company,
              transforming moments into lifelong memories for clients around the world.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600">8+</div>
            <div className="text-gray-600">Years of Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600">500+</div>
            <div className="text-gray-600">Events Organized</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600">1000+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600">25+</div>
            <div className="text-gray-600">Awards Won</div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="text-3xl mb-3">⭐</div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">We strive for perfection in every detail.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl mb-3">💡</div>
              <h3 className="text-xl font-semibold mb-2">Creativity</h3>
              <p className="text-gray-600">Innovative solutions that wow your guests.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">Transparent communication and trust.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl mb-3">❤️</div>
              <h3 className="text-xl font-semibold mb-2">Client-Centric</h3>
              <p className="text-gray-600">Your satisfaction is our priority.</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Halima Abdi",
                role: "Creative Director",
                img: "https://randomuser.me/api/portraits/women/1.jpg",
              },
              {
                name: "Nimcan Ali ",
                role: "Event Coordinator",
                img: "https://randomuser.me/api/portraits/men/2.jpg",
              },
              {
                name: "Sahara Jamac",
                role: "Lead Designer",
                img: "data:image/jpeg;base64,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",
              },
            ].map((member, idx) => (
              <div key={idx} className="text-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto object-cover mb-4 shadow-md"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Testimonial */}
        <div className="bg-indigo-600 text-white rounded-lg p-8 text-center max-w-4xl mx-auto">
          <div className="text-5xl mb-4">“</div>
          <p className="text-xl italic mb-6">
            Events made our wedding day absolutely magical. From planning to execution,
            everything was flawless. Their attention to detail and creative ideas
            exceeded our expectations. Highly recommended!
          </p>
          <div className="font-semibold">— Sarah & Michael</div>
          <div className="text-sm opacity-80">Satisfied Clients</div>
        </div>
      </div>
    </div>
  );
};

export default About;