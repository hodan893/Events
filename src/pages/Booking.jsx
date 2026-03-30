import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', eventType: '', eventDate: '', guests: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:3001/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          status: 'pending',
          createdAt: new Date().toISOString()
        })
      });

      if (!response.ok) throw new Error('Failed to submit booking');
      await response.json();

      setSubmitted(true);
      setFormData({
        name: '', email: '', phone: '', eventType: '', eventDate: '', guests: '', message: ''
      });
      setTimeout(() => navigate('/'), 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">Book Your Event</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Fill out the form below and our team will get back to you within 24 hours
        to discuss your event requirements.
      </p>

      {submitted && (
        <div className="max-w-2xl mx-auto mb-8 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          Thank you! Your booking request has been sent. Redirecting to home...
        </div>
      )}

      {error && (
        <div className="max-w-2xl mx-auto mb-8 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        {/* Form fields – unchanged from earlier */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Event Type *</label>
          <select name="eventType" value={formData.eventType} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md">
            <option value="">Select event type</option>
            <option value="Wedding">Wedding</option>
            <option value="Corporate Event">Corporate Event</option>
            <option value="Private Party">Private Party</option>
            <option value="Conference">Conference</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Preferred Event Date *</label>
          <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Estimated Number of Guests *</label>
          <input type="number" name="guests" value={formData.guests} onChange={handleChange} required min="1" className="w-full px-3 py-2 border rounded-md" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Additional Details</label>
          <textarea name="message" rows="4" value={formData.message} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" placeholder="Tell us more..." />
        </div>
        <button type="submit" disabled={loading} className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition disabled:opacity-50">
          {loading ? 'Submitting...' : 'Submit Booking Request'}
        </button>
      </form>
    </div>
  );
};

export default Booking;