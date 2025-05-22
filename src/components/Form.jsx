import "./Form.css";

export default function Form() {
  return (
    <form action="/contact" method="post" className="contact-form">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" required></textarea>
      <br />

      <button type="submit">Send Message</button>
    </form>
  );
}
