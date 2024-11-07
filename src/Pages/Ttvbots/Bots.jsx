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
          document.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((iframe) => {
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
        <div className="leftSide">
          <h1>What TTV Bots ?</h1>
          <p>
            Twitch TV Bots is a program that uses a proxy through your local
            machine to connect to a specified channel in the application,
            thereby increasing the view count for that channel.
          </p>


        </div>

        <div className="rightSide">
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
