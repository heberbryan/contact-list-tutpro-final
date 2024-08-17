// src/app/contacts/[id].js

export async function getServerSideProps(context) {
    const { id } = context.params;
    let contact = null;
  
    try {
      // Simulate fetching contact data by ID (replace this with your actual logic)
      contact = await fetchContactById(id);
  
      if (!contact) {
        // If the contact isn't found, return a 404 error
        return {
          notFound: true,
        };
      }
    } catch (error) {
      // Log the error and return a generic error message
      console.error("Error fetching contact:", error);
  
      // Return a status code of 500 to trigger the global error page (_error.js)
      return {
        props: {
          error: 'Failed to fetch contact data',
        },
      };
    }
  
    return {
      props: { contact },
    };
  }
  
  export default function ContactDetailPage({ contact, error }) {
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    return (
      <div>
        <h1>Contact Details for {contact.name}</h1>
        <p>Email: {contact.email}</p>
        <p>Phone: {contact.phone}</p>
      </div>
    );
  }
  
  // Example function to simulate fetching contact data by ID
  async function fetchContactById(id) {
    // Replace this with your actual API or database call
    const contacts = [
      { id: '1', name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
      { id: '2', name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
    ];
    return contacts.find(contact => contact.id === id) || null;
  }
  