
import ContactCard from "./contactCard";

function UserList({ contacts }) {
  if (contacts.length === 0) {
    return (
      <p className="empty-message">
        No contacts added yet. Add your first contact!
      </p>
    );
  }

  return (
    <div className="user-list">
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
        />
      ))}
    </div>
  );
}

export default UserList;
