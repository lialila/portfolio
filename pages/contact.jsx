import Head from 'next/head';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              Contact
            </h1>
            <p className="description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
              necessitatibus quaerat minus odio error. Nesciunt, quaerat
              reiciendis! Dignissimos laboriosam eveniet expedita maiores,
              deleniti odit nulla harum, odio sequi omnis laudantium?
            </p>
            <ul className="contact-links">
              <li className="contact-item">Email: uche0790@gmail.com</li>
              <li className="contact-item">Phone: +4367762890558</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
