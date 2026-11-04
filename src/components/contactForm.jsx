
import { useState } from "react";

function ContactForm({ onAddContact }) {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    phone: "",
    twitter: "",
    instagram: "",
    facebook: "",
    linkedin: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      alert("Please enter name and email.");
      return;
    }

    onAddContact(formData);

    setFormData({
      name: "",
      role: "",
      email: "",
      phone: "",
      twitter: "",
      instagram: "",
      facebook: "",
      linkedin: ""
    });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Add New Contact</h2>

      <div className="form-grid">
        <input
          type="text"
          name="name"
          placeholder="Full Name *"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="role"
          placeholder="Designation / Role"
          value={formData.role}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address *"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />

        <input
          type="url"
          name="twitter"
          placeholder="Twitter URL (optional)"
          value={formData.twitter}
          onChange={handleChange}
        />

        <input
          type="url"
          name="instagram"
          placeholder="Instagram URL (optional)"
          value={formData.instagram}
          onChange={handleChange}
        />

        <input
          type="url"
          name="facebook"
          placeholder="Facebook URL (optional)"
          value={formData.facebook}
          onChange={handleChange}
        />

        <input
          type="url"
          name="linkedin"
          placeholder="LinkedIn URL (optional)"
          value={formData.linkedin}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="add-btn">
        + Add Contact
      </button>
    </form>
  );
}

export default ContactForm;
