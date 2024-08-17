import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null); // Reset any previous errors

    try {
      // Simulate an API call to save the contact
      await saveContact({ name, email });
      // Clear form fields or show success message
    } catch (err) {
      // Handle the error (e.g., show a user-friendly message)
      console.error("Failed to save contact:", err);
      setError("Failed to save contact. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Save Contact</button>
    </form>
  );
}

// Example function to simulate saving a contact
async function saveContact(contact) {
  // Simulate an error occurring during the API call
  throw new Error("API call failed");
}
