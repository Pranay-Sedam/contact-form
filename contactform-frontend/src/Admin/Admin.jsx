
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Admin.css'; // Import the CSS file

const AdminPage = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch contacts data from backend
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get('http://localhost:1000/api/con/all'); 
        setContacts(res.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching contacts:', error);
        setLoading(false);
      }
    };
    fetchContacts();
  }, []);

  // Handle delete contact
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:1000/api/con/delete/${id}`);
      setContacts(contacts.filter(contact => contact._id !== id)); // Remove the deleted contact from the state
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="main-admin">
      <div className="card-admin">
        <h1>Contact Data</h1>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>State</th>
              <th>City</th>
              <th>Address</th>
              <th>Message</th>
              <th>Actions</th> 
            </tr>
          </thead>
          <tbody>
            {contacts.length > 0 ? (
              contacts.map((contact) => (
                <tr key={contact._id}>
                  <td>{contact.name}</td>
                  <td>{contact.number}</td>
                  <td>{contact.email}</td>
                  <td>{contact.state}</td>
                  <td>{contact.city}</td>
                  <td>{contact.address}</td>
                  <td>{contact.message}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(contact._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No contacts available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
