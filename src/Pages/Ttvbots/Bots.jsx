import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { useEffect } from "react";
import "./bots.css";

const Bots = () => {
  useEffect(() => {
    // Fonction pour charger dynamiquement le script Tally
    const loadTallyScript = () => {
      const script = document.createElement("script");
      script.src = "https://tally.so/widgets/embed.js";
      script.async = true;
      script.onload = () => {
        // Vérifie si Tally est chargé et exécute les fonctions nécessaires
        if (typeof Tally !== "undefined") {
          Tally.loadEmbeds();
        } else {
          // Si Tally n'est pas défini, recharge les iframes en utilisant l'URL de `data-tally-src`
          document
            .querySelectorAll("iframe[data-tally-src]:not([src])")
            .forEach((iframe) => {
              iframe.src = iframe.dataset.tallySrc;
            });
        }
      };
      document.body.appendChild(script);
    };

    loadTallyScript();
  }, []);

  return (
    <div className="bots">
      <Navbar />
      <div className="bots-wrapper">
        <div className="leftSide"></div>
        <iframe
          style={{
            borderRadius: "40px",
          }}
          width="600"
          height="600"
          src="https://www.youtube.com/embed/Ulm_Z646eBg?si=i2CzI27kT35-rjnr"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div className="rightSide">
          <h2>Buy 1 time for life time </h2>
          <p>
            Our program stands out by offering superior quality and performance
            at a lower cost, delivering exceptional value that other solutions
            simply can't match.
          </p>
          <iframe
            data-tally-src="https://tally.so/embed/nWpagj?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="347"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Payment Method"
          />
        </div>
      </div>
    </div>
  );
};

export default Bots;
