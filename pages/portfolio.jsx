import Head from 'next/head';
import Navbar from '../components/Navbar';

function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              Portfolio
            </h1>
            <p className="description">
              Uliana Cheklina was born in St. Petersburg in a musical family.
              Graduate of the St. Petersburg State Conservatory in the piano
              solo (2014) and chamber music classes (2017); in 2019 she finished
              chamber music course with prof. Evgeny Sinaisky at Music und Kunst
              Universität der Stadt Wien. Uliana gives concerts, solo and as
              part of Chamber ensembles in Russia, Germany and Austria. She was
              working as accompanying pianist in St.Petersburg State
              Conservatory (vocal and doublebass classes) and in Prayner
              Conservatory (violin and bassoon classes). She is a accompanying
              pianist for the master classes “Kulturwelten” (Vienna, Austria)
              and "International vocal artists Academy" (Payerbach, Austria),
              since 2019 in the “Plus Opera”(Vienna) In 2022 she was the piano
              teacher and acompanist in Gustav Mahler Music University in
              Klagenfurt, Austria.
            </p>

            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <img src="/chitchat.png" className="portfolio-image" alt="" />

                <h4 className="portfolio-name">Chat App Exploration</h4>
                <div className="portfolio-category">Mobile Dev</div>
              </div>
              <div className="portfolio-item">
                <img src="/kajian.jpg" className="portfolio-image" alt="" />

                <h4 className="portfolio-name">Web App</h4>
                <div className="portfolio-category">Mobile Dev</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
