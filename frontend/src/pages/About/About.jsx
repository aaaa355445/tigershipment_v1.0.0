import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <>
      <h1 className={styles.heading}>About us</h1>

      <div className={styles.aboutDiv + " " + styles.container}>
        <h3 className={styles.title}>Note from the founder:</h3>
        <p>
          Tigershipment.com is a platform where we aim to provide small
          manufacturers in India access to global demand. <br />
          <br /> In our few years of researching and seeing India’s rise, we are
          confident that we can make India a manufacturing hub.
          <br />
          <br /> From the streets of Ludhiana in the northern state of Punjab to
          industrial areas of Tirupur in Detroit of India, Tamil Nadu, there are
          2.5L+ factories in India scattered around the country. We aim to see
          this number go to 10M+ in the next 15 years.
          <br />
          <br /> From the hinterlands of India to posh alleys- India boasts some
          of the best products in handloom, electronics, fashion and apparel,
          gems and jewelry, jute products, and leather products among many other
          categories. <br />
          <br />
          Tigershipment provides a platform where Indian manufacturers can
          upload their products and make listings for their products. Global
          buyers such as export merchants, large B2B customers, and small
          businesses around 100+ countries can evaluate the manufacturer’s
          products and can show interest in buying their products.
          <br />
          <br /> Our approach from Day 1 is “Make in India for the world”.
        </p>
        <h3 className={styles.title}>Our mission is simple:</h3>
        <p>
          Our mission is to make 10K+ Indian manufacturers go global and cross
          $10M in revenue in the next 2 years.
        </p>
        <h3 className={styles.title}>Our vision also remains simple:</h3>
        <p>
          Make India a manufacturing hub with $5T+ in merchandise exports a
          year. Through this, we aim to enable at least $1T worth of this trade
          via TigerShipment.
          <br />
          <br /> If you’re a manufacturer reading this, do get associated with
          us & grow multifold. We rely on your success for ours.
        </p>
        <div className={styles.newSection}>
          <h3 className={styles.title}>
            Our value proposition for Indian manufacturers & global buyers:
          </h3>
          <h3 className={styles.title}>
            TigerShipment - Empowering Indian Manufacturers to Reach Global
            Markets
          </h3>
          <p>
            TigerShipment is the gateway to unlocking the immense potential of
            Indian manufacturing on a global scale. We building a dynamic
            platform that connects Indian manufacturers with international
            buyers, revolutionizing the way businesses trade and fostering
            economic growth. With our innovative solutions, we aim to amplify
            the reach of Indian manufacturers, enabling them to thrive in the
            global marketplace.
          </p>
          <h3 className={styles.title}>Why TigerShipment?</h3>
          <p>
            India is on the cusp of a manufacturing revolution, poised to take
            its place as a leading global manufacturing hub. As the world's
            third-largest economy by purchasing power parity (PPP) and a rapidly
            growing market, India offers immense opportunities for
            manufacturers. However, many small and medium-sized businesses in
            India struggle to access global buyers and expand their reach.
            That's where TigerShipment steps in.
          </p>
          <h3 className={styles.title}>Our goal:</h3>
          <p>
            At TigerShipment, our goal is clear: to empower Indian manufacturers
            and enable them to tap into the global market potential. We strive
            to be the driving force behind India's manufacturing revolution by
            providing a seamless platform for manufacturers to showcase their
            products to a wide range of international buyers. By leveraging
            cutting-edge technology and our extensive network, we aim to bridge
            the gap between Indian manufacturers and global customers, unlocking
            new avenues for growth.
          </p>
          <h3 className={styles.title}>The TigerShipment Advantage:</h3>
          <p>
            Global Reach: We connect Indian manufacturers with export merchants,
            B2B buyers, and small to medium-sized businesses worldwide. By
            utilizing our platform, manufacturers gain unprecedented access to a
            global customer base, expanding their market reach like never
            before. Simplified Trading: Our user-friendly platform simplifies
            the trading process, allowing manufacturers to upload their products
            with ease. We streamline the entire transaction journey,
            facilitating secure and efficient trade between manufacturers and
            buyers.
            <br />
            <br />
            Scale Manufacturing: We believe in the power of small businesses to
            transform economies. Through our platform, we enable small and
            medium-sized Indian businesses to scale their manufacturing
            operations, driving job creation and economic growth. Trusted
            Network: TigerShipment is built on a foundation of trust and
            reliability. We rigorously vet both manufacturers and buyers,
            ensuring that every transaction conducted through our platform meets
            the highest standards of quality and integrity.
          </p>
          <h3 className={styles.title}>Unlock the Potential:</h3>
          <p>
            By partnering with TigerShipment, Indian manufacturers gain a
            competitive edge in the global market. Together, we can unlock the
            full potential of Indian manufacturing, driving economic growth, and
            empowering businesses to flourish.
            <br />
            <br />
            Join us on this transformative journey as we revolutionize the way
            Indian manufacturers connect with the world. Together, we will make
            India a manufacturing powerhouse and leave a lasting impact on the
            global trade landscape.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
