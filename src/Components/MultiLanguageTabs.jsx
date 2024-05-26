import React, { useState } from 'react';
import './MulatiLanguageTabs.css'

const MultiLanguageTabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const tabContent = {
    en: {
      tab1: {
        title: 'Angular',
        content:
          'One of the most powerful, efficient, and open-source JavaScript frameworks is Angular. Google operates this framework and is implemented to use for developing a Single Page Application (SPA). It extends the HTML into the application and interprets the attributes to perform data binding.',
      },
      tab2: {
        title: 'React',
        content:
          'Created by Facebook, the React framework has earned popularity within a short period. It is used to develop and operate the dynamic User Interface of the web pages with high incoming traffic. It makes the use of a virtual DOM, and hence, the integration of the same with any application is more straightforward.',
      },
      tab3: {
        title: 'Vue',
        content:
          'Though developed in the year 2016, this JavaScript framework has already made its way into the market and has proven its worth by offering various features. Its dual integration mode is one of the most attractive features for creating high-end SPA or Single Page Application. It is a much reliable platform for developing cross-platform.',
      },
      tab4: {
        title: 'Ember',
        content:
          'The introduction of Ember.js to the software market was in 2015, and since then, it has gained popularity with its wide application area. The features of Ember.js support two-way data binding and hence, establish a reliable platform for handling the complicated User Interfaces. Popular websites like LinkedIn, Netflix, Nordstrom, and many more use the Ember.JS platform for their websites.',
      },
    },
    nl: {
      tab1: {
        title: 'Angular',
        content:
          'Een van de krachtigste, efficiëntste en open-source JavaScript-frameworks is Angular. Google beheert dit framework en het is geïmplementeerd voor het ontwikkelen van een Single Page Application (SPA). Het breidt HTML uit naar de applicatie en interpreteert attributen om gegevensbinding uit te voeren.',
      },
      tab2: {
        title: 'React',
        content:
          'Gemaakt door Facebook, het React-framework heeft binnen korte tijd populariteit verworven. Het wordt gebruikt voor het ontwikkelen en bedienen van de dynamische gebruikersinterface van webpagina\'s met veel verkeer. Het maakt gebruik van een virtuele DOM, en daardoor is de integratie ervan met elke applicatie eenvoudiger.',
      },
      tab3: {
        title: 'Vue',
        content:
          'Hoewel ontwikkeld in het jaar 2016, heeft dit JavaScript-framework al zijn weg gevonden naar de markt en heeft het zijn waarde bewezen door verschillende functies aan te bieden. De dual-integratiemodus is een van de meest aantrekkelijke kenmerken voor het maken van hoogwaardige SPA of Single Page Application. Het is een zeer betrouwbaar platform voor het ontwikkelen van cross-platform applicaties.',
      },
      tab4: {
        title: 'Ember',
        content:
          'De introductie van Ember.js op de softwaremarkt was in 2015, en sindsdien heeft het populariteit verworven met zijn brede toepassingsgebied. De functies van Ember.js ondersteunen bidirectionele gegevensbinding en bieden zo een betrouwbaar platform voor het omgaan met complexe gebruikersinterfaces. Populaire websites zoals LinkedIn, Netflix, Nordstrom en nog veel meer maken gebruik van het Ember.JS-platform voor hun websites.',
      },
    },
    de: {
      tab1: {
        title: 'Angular',
        content:
          'Eines der leistungsstärksten, effizientesten und Open-Source-JavaScript-Frameworks ist Angular. Google betreibt dieses Framework und es ist für die Entwicklung einer Single Page Application (SPA) konzipiert. Es erweitert HTML in die Anwendung und interpretiert Attribute, um Datenbindung durchzuführen.',
      },
      tab2: {
        title: 'React',
        content:
          'Von Facebook erstellt, hat das React-Framework innerhalb kurzer Zeit Popularität erlangt. Es wird verwendet, um die dynamische Benutzeroberfläche von Webseiten mit hohem Traffic zu entwickeln und zu betreiben. Es macht Gebrauch von einem virtuellen DOM, und daher ist die Integration mit jeder Anwendung einfacher.',
      },
      tab3: {
        title: 'Vue',
        content:
          'Obwohl im Jahr 2016 entwickelt, hat dieses JavaScript-Framework bereits seinen Weg auf den Markt gefunden und seinen Wert durch verschiedene Funktionen bewiesen. Sein Dual-Integrationsmodus ist eines der attraktivsten Merkmale für die Erstellung von hochwertigen SPAs oder Single Page Applications. Es ist eine sehr zuverlässige Plattform für die Entwicklung von plattformübergreifenden Anwendungen.',
      },
      tab4: {
        title: 'Ember',
        content:
          'Die Einführung von Ember.js auf dem Softwaremarkt war im Jahr 2015, und seitdem hat es mit seinem breiten Anwendungsbereich an Popularität gewonnen. Die Funktionen von Ember.js unterstützen bidirektionale Datenbindung und etablieren daher eine zuverlässige Plattform für die Bewältigung komplexer Benutzeroberflächen. Beliebte Websites wie LinkedIn, Netflix, Nordstrom und viele mehr nutzen das Ember.JS-Plattform für ihre Websites.',
      },
    },
  };

  return (
    <div className="site-wrapper">
      <section className="tabs-wrapper">
        <div className="tabs-container">
          <div className="tabs-block">
            <div className="tabs">
              <div className="language-dropdown">
                <label>Select Language:</label>
                <select
                  value={selectedLanguage}
                  onChange={(e) => handleLanguageChange(e.target.value)}
                >
                  <option value="en">English</option>
                  <option value="nl">Dutch</option>
                  <option value="de">German</option>
                </select>
              </div>

              {['tab1', 'tab2', 'tab3', 'tab4'].map((tab) => (
                <React.Fragment key={tab}>
                  <input
                    type="radio"
                    name="tabs
                    "
                    id={tab}
                    checked={activeTab === tab}
                  />
                  <label htmlFor={tab} onClick={() => handleTabClick(tab)}>
                    <span className="material-icons">favorite_border</span> {tabContent[selectedLanguage][tab].title}
                  </label>
                  <div className={`tab ${activeTab === tab ? 'active' : ''}`}>
                    <h2>{tabContent[selectedLanguage][tab].title}</h2>
                    <p>{tabContent[selectedLanguage][tab].content}</p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="credits">
          <a href="https://htmlcssfreebies.com/pure-html-css-tabs/" target="_blank">
            Pure HTML CSS Tabs
          </a>{' '}
          by HTMLCSSFreebies.
        </div>
      </footer>
    </div>
  );
};

export default MultiLanguageTabs;
