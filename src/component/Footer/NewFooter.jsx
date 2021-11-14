import React from "react";
import { withTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const NewFooter = ({ t }) => {
  let date = new Date();
  const theme = useSelector((state) => state.theme);

  return (
    <footer className="footer">
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3">
              <div className="contact-us">
                <h3>{t("Contacts")}</h3>
                <p>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <a target="_blank" href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d891.0329210425926!2d69.28706118608989!3d41.3074374422724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ad54d47a56f%3A0x87547e5307b77db5!2z0JPQtdC90LXRgNCw0LvRjNC90LDRjyDQv9GA0L7QutGD0YDQsNGC0YPRgNCwINCg0LXRgdC_0YPQsdC70LjQutC4INCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1624433459932!5m2!1sru!2s">
                    {t(
                      "100047, Tashkent, Mirabad district, st. Shakhrisabz, 42"
                    )}
                  </a>
                </p>
                <a href="tel:+998712020496">
                  <i className="fa fa-phone" aria-hidden="true"></i>+998 (71) 202-04-96
                </a>
                <a href="mailto:info@proacademy.uz">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                    info@proacademy.uz
                </a>
                <ul className="follow-us clearfix">
                  <li>
                    <a href="https://www.facebook.com/ProsecutorAcademy">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/ProAcademyUz">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/proacademyuz/">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/ProsecutorAcademy">
                      <i className="fa fa-telegram" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="practice-area">
                <h3>{t("Site navigation")}</h3>
                <ul className="clearfix">
                  <li>
                    <a href="#">
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>{" "}
                      {t("What is clinic")}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>{" "}
                      {t("Goal of the clinic")}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>{" "}
                      {t("Purpose of the clinic")}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>{" "}
                      {t("Popular questions")}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>{" "}
                      {t("Regulatory base")}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>{" "}
                      {t("Useful links")}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>{" "}
                      {t("Addresses prosecutors")}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="practice-area">
                <h3>{t("We are on the map")}</h3>
                <iframe
            title="This is a unique title"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d891.0329210425926!2d69.28706118608989!3d41.3074374422724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ad54d47a56f%3A0x87547e5307b77db5!2z0JPQtdC90LXRgNCw0LvRjNC90LDRjyDQv9GA0L7QutGD0YDQsNGC0YPRgNCwINCg0LXRgdC_0YPQsdC70LjQutC4INCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1624433459932!5m2!1sru!2s"
            loading="lazy"
            style={{
              height: "230px",
              width: "100%",
              borderRadius: "3px",
              margin: "20px 0",
              boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
            }}
          />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-rights-section">
        <div className="container">
          <div className="row">
            <p>© 2020 JOHN BISTAND - All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default withTranslation()(NewFooter);
