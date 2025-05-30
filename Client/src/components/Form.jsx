import "./Form.css";
import { useState } from "react";

export default function Form() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Decide base URL depending on environment
  const baseURL =
    window.location.hostname === "localhost"
      ? "http://localhost:8080"
      : "https://portfolio-server-320b.onrender.com";

  function handleInputChange(event) {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(`${baseURL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        alert("Message sent!");
        setFormValues({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formValues.name}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formValues.email}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={formValues.message}
        onChange={handleInputChange}
        required
      ></textarea>
      <br />

      <button type="submit">Send Message</button>
    </form>
  );
}
