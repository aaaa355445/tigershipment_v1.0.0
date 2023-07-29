import React from "react";
import styles from "./PrivacyPolicy.module.css";

const PrivacyPolicy = () => {
  return (
    <>
      <h1 className={styles.heading}>Privacy Policy - Tiger Shipment</h1>

      <div className={styles.aboutDiv + " " + styles.container}>
        <h3 className={styles.title}>English |</h3>
        <p>
          This Privacy Policy describes and gives you clear and comprehensive
          information about the data that TigerShipment collects from you, and
          provides an explanation of how and why we collect, use and manage that
          data.
          <br /> For the purposes of the General Data Protection Regulation (EU
          2016/679),the data controller is TigerShipment (see Contact Details).
          TigerShipment is based in the Republic of India and is responsible for
          data collected in relation to websites and tradeshows managed by
          TigerShipment.You should be aware that although TigerShipment may be
          principally responsible for looking after your personal data,
          information may be held in databases which can be accessed by other
          affiliated entities of TigerShipment.
          <br /> We may make changes to this Policy from time to time in order
          to keep it up to date and compliant with legal requirements. Please
          refer to the "Last Updated" date at the bottom of this page to see
          when this Policy was last revised. We may also notify you about
          significant changes by email, using the address you last provided or
          by posting an alert which will be displayed when you access our
          systems. This Policy is not intended to override the terms of any
          contract that you have with us or between buyers and suppliers (or any
          rights you might have available under applicable data protection
          laws).
        </p>
        <h3 className={styles.title}>Contact Details</h3>
        <p>
          The primary point of contact for all issues arising from this Policy,
          including requests to exercise data subject rights, is our Data
          Protection Officer. If you have a complaint or concern about how we
          use your personal information, please contact us in the first instance
          and we will attempt to resolve the issue as soon as possible. The Data
          Protection Officer can be contacted by:
          <br />
          <span>Email at support@tigershipment.com</span>
          <br />
          Alternatively, you may contact our Customer Services Department
          <br />
          <span>Email at support@tigershipment.com</span>
          <br />
          You also have a right to lodge a complaint with a data protection
          authority for your country or region or where an alleged infringement
          of applicable data protection laws occurs.
          <br />
          <span>
            A list of EU Regulators may be found here:
            <br />{" "}
            http://ec.europa.eu/justice/article-29/structure/data-protection-authorities/index_en.htm.
          </span>
          <span>
            A list of authorities participating in the Global privacy
            Enforcement network may be found here: <br />
            https://www.privacyenforcement.net/about_the_network#members
          </span>
          <br />
          If you are located in the Republic of India, you may lodge your
          complaint with us at support@tigershipment.com:
          <br />
          We are also represented in the EU and our representative in the EU may
          be contacted through support@tigershipment.com
        </p>
        <h3 className={styles.title}>Third-party links </h3>
        <p>
          Our website may, from time to time, contain links to and from the
          websites of our partner networks, advertisers and affiliates. If you
          follow a link to any of these websites, please note that these
          websites have their own privacy notices and that we do not accept any
          responsibility or liability for these notices. Please check these
          notices before you submit any personal information to these websites.
        </p>
        <div className={styles.newSection}>
          <h3 className={styles.title}>
            How Do We Collect Your Personal Data?
          </h3>
          <p>We collect your data in a variety of ways:</p>
          <h3 className={styles.title}>
            At Trade Shows, Roadshows, Seminars and Conferences
          </h3>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
