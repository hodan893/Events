import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:3001';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('bookings');
  const [bookings, setBookings] = useState([]);
  const [messages, setMessages] = useState([]);
  const [editingBooking, setEditingBooking] = useState(null);
  const [editingMessage, setEditingMessage] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Check auth
  useEffect(() => {
    if (localStorage.getItem('adminAuth') !== 'true') {
      navigate('/admin/login');
    }
  }, [navigate]);

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [bookingsRes, messagesRes] = await Promise.all([
          fetch(`${API_URL}/bookings`),
          fetch(`${API_URL}/messages`)
        ]);
        const bookingsData = await bookingsRes.json();
        const messagesData = await messagesRes.json();
        setBookings(bookingsData);
        setMessages(messagesData);
      } catch (err) {
        setError('Failed to load data. Make sure json-server is running on port 3001.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Bookings
  const handleDeleteBooking = async (id) => {
    if (window.confirm('Delete this booking?')) {
      try {
        await fetch(`${API_URL}/bookings/${id}`, { method: 'DELETE' });
        setBookings(bookings.filter(b => b.id !== id));
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleEditBooking = (booking) => {
    setEditingBooking({ ...booking });
    setEditingMessage(null);
    setShowEditModal(true);
  };

  const handleSaveEditBooking = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/bookings/${editingBooking.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingBooking)
      });
      if (response.ok) {
        const updated = await response.json();
        setBookings(bookings.map(b => b.id === updated.id ? updated : b));
        setShowEditModal(false);
        setEditingBooking(null);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Messages
  const handleDeleteMessage = async (id) => {
    if (window.confirm('Delete this message?')) {
      try {
        await fetch(`${API_URL}/messages/${id}`, { method: 'DELETE' });
        setMessages(messages.filter(m => m.id !== id));
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleEditMessage = (message) => {
    setEditingMessage({ ...message });
    setEditingBooking(null);
    setShowEditModal(true);
  };

  const handleSaveEditMessage = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/messages/${editingMessage.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingMessage)
      });
      if (response.ok) {
        const updated = await response.json();
        setMessages(messages.map(m => m.id === updated.id ? updated : m));
        setShowEditModal(false);
        setEditingMessage(null);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleChangeEdit = (e) => {
    if (editingBooking) {
      setEditingBooking({ ...editingBooking, [e.target.name]: e.target.value });
    } else if (editingMessage) {
      setEditingMessage({ ...editingMessage, [e.target.name]: e.target.value });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/admin/login');
  };

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error) return <div className="text-center py-20 text-red-600">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">Admin Dashboard</h1>
          <button onClick={handleLogout} className="px-4 py-2 bg-red-600 text-white rounded-md">Logout</button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex border-b mb-6">
          <button className={`py-2 px-4 font-semibold ${activeTab === 'bookings' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-600'}`} onClick={() => setActiveTab('bookings')}>Bookings ({bookings.length})</button>
          <button className={`py-2 px-4 font-semibold ${activeTab === 'messages' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-600'}`} onClick={() => setActiveTab('messages')}>Messages ({messages.length})</button>
        </div>

        {activeTab === 'bookings' && (
          <div>
            {bookings.length === 0 ? <p>No bookings yet.</p> : (
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow">
                  <thead className="bg-gray-50"><tr><th className="px-6 py-3">Name</th><th>Email</th><th>Event Type</th><th>Event Date</th><th>Guests</th><th>Actions</th></tr></thead>
                  <tbody>
                    {bookings.map(b => (
                      <tr key={b.id}>
                        <td className="px-6 py-4">{b.name}</td><td>{b.email}</td><td>{b.eventType}</td><td>{b.eventDate}</td><td>{b.guests}</td>
                        <td><button onClick={() => handleEditBooking(b)} className="text-indigo-600 mr-3">Edit</button><button onClick={() => handleDeleteBooking(b.id)} className="text-red-600">Delete</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {activeTab === 'messages' && (
          <div className="space-y-4">
            {messages.length === 0 ? <p>No messages yet.</p> : messages.map(m => (
              <div key={m.id} className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between">
                  <div><h3 className="font-semibold">{m.name}</h3><p className="text-sm text-gray-600">{m.email}</p><p className="text-sm text-gray-600 mt-1"><strong>Subject:</strong> {m.subject}</p><p className="mt-2">{m.message}</p><p className="text-xs text-gray-400 mt-2">{new Date(m.createdAt).toLocaleString()}</p></div>
                  <div><button onClick={() => handleEditMessage(m)} className="text-indigo-600 mr-3">Edit</button><button onClick={() => handleDeleteMessage(m.id)} className="text-red-600">Delete</button></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">{editingBooking ? 'Edit Booking' : 'Edit Message'}</h2>
            <form onSubmit={editingBooking ? handleSaveEditBooking : handleSaveEditMessage}>
              {/* Render fields based on what's being edited */}
              {editingBooking && (
                <>
                  <div className="mb-4"><label className="block">Name</label><input name="name" value={editingBooking.name} onChange={handleChangeEdit} className="w-full border rounded px-2 py-1" /></div>
                  <div className="mb-4"><label className="block">Email</label><input name="email" value={editingBooking.email} onChange={handleChangeEdit} className="w-full border rounded px-2 py-1" /></div>
                  <div className="mb-4"><label className="block">Phone</label><input name="phone" value={editingBooking.phone} onChange={handleChangeEdit} className="w-full border rounded px-2 py-1" /></div>
                  <div className="mb-4"><label className="block">Event Type</label><input name="eventType" value={editingBooking.eventType} onChange={handleChangeEdit} className="w-full border rounded px-2 py-1" /></div>
                  <div className="mb-4"><label className="block">Event Date</label><input name="eventDate" value={editingBooking.eventDate} onChange={handleChangeEdit} className="w-full border rounded px-2 py-1" /></div>
                  <div className="mb-4"><label className="block">Guests</label><input name="guests" value={editingBooking.guests} onChange={handleChangeEdit} className="w-full border rounded px-2 py-1" /></div>
                  <div className="mb-4"><label className="block">Message</label><textarea name="message" rows="3" value={editingBooking.message} onChange={handleChangeEdit} className="w-full border rounded px-2 py-1" /></div>
                </>
              )}
              {editingMessage && (
                <>
                  <div className="mb-4"><label className="block">Name</label><input name="name" value={editingMessage.name} onChange={handleChangeEdit} className="w-full border rounded px-2 py-1" /></div>
                  <div className="mb-4"><label className="block">Email</label><input name="email" value={editingMessage.email} onChange={handleChangeEdit} className="w-full border rounded px-2 py-1" /></div>
                  <div className="mb-4"><label className="block">Subject</label><input name="subject" value={editingMessage.subject} onChange={handleChangeEdit} className="w-full border rounded px-2 py-1" /></div>
                  <div className="mb-4"><label className="block">Message</label><textarea name="message" rows="4" value={editingMessage.message} onChange={handleChangeEdit} className="w-full border rounded px-2 py-1" /></div>
                </>
              )}
              <div className="flex justify-end space-x-3 mt-4">
                <button type="button" onClick={() => setShowEditModal(false)} className="px-4 py-2 border rounded">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;