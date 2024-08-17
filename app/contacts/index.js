// pages/contacts/index.js
import Layout from '../../components/Layout';
import ContactList from '../../components/ContactList';

export default function ContactsPage() {
  return (
    <Layout>
      <h1>Your Contacts</h1>
      <ContactList />
    </Layout>
  );
}
