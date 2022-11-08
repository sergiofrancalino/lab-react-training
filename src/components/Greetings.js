/* Interation 2| Component: Greetings */

function Greetings({lang, children}) {
   
    const wordLang = {
      de: 'Hallo',
      en: 'Hello',
      es: 'Buén día',
      fr: 'Bonjour',
    };

    return (
      <div className="greetings">
        <h3>
          {wordLang[lang]} {children}
        </h3>
      </div>
    );
  }

export default Greetings