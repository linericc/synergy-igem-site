export default function Contact() {
  return (
    <section className="section">
      <h2>Contact</h2>
      <form className="contact">
        <label>
          Name
          <input type="text" placeholder="Your name" />
        </label>
        <label>
          Email
          <input type="email" placeholder="you@example.com" />
        </label>
        <label>
          Message
          <textarea rows="5" placeholder="How can we help?"></textarea>
        </label>
        <button className="btn" type="submit">Send</button>
      </form>
    </section>
  );
}
