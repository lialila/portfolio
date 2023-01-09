import Head from 'next/head';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              About
            </h1>
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus vero, impedit similique velit pariatur laudantium sed
              hic quo placeat consequuntur veniam tempore, accusamus id deleniti
              nisi voluptates maiores est. Non!lorem Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Maiores earum soluta aut impedit
              laboriosam illum aliquid iure? Consequuntur, id quasi. Ratione
              quidem sapiente rem accusamus repellat eligendi cum sed quasi.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
