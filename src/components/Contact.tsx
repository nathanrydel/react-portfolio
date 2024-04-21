import { CONTACT } from "../constants/db";

function Contact() {
  return (
    <div id="Contact" className="border-b border-neutral-900 pb-8">
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">Based in {CONTACT.address}</p>
        <a href="mailto:contact@nathanrydel.dev" className="my-4">{CONTACT.email}</a>
      </div>
    </div>
  );
}

export default Contact;