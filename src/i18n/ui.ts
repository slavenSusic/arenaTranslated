

export const routes = {
    hr: {
      'services': 'usluge',
    },
    fr: {
      'services': 'prestations-de-service',
    },
    }


export const languages = {
    en: 'English',
    hr: 'Hrvatski',
  };

  
  
  export const defaultLang = 'en';
  
  export const ui = {
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.services': 'Services',
      'nav.portfolio': 'Portfolio',
      'nav.Contact': 'Contact',
      'ser.headline':'Our Services',
      'ser.it':'IT Solution' ,
      'baner.years':'Years Helping Business',
      'about.flex':'In the dynamic landscape of todays business world, Flexibility & Responsiveness are not just attributes but Flexibility & Responsiveness are not just attributes but essential qualities for success. Our approach embraces adaptability, ensuring that we can pivot swiftly to meet the ever-changing needs of our clients. By being flexible and responsive, we not only navigate challenges seamlessly but also create tailored solutions that evolve with the dynamic nature of the market',

    },
    hr: {
        'nav.home': 'Početna',
        'nav.about': 'O nama',
        'nav.services': 'Usluge',
        'nav.portfolio': 'Portfelj',
        'nav.Contact': 'Kontakt',
        'ser.headline':'Naše Usluge',
        'ser.it':'IT Riješenja',
        'baner.years':'godine u poslu' ,
        'about.flex':'U dinamičnom krajoliku današnjeg poslovnog svijeta, Fleksibilnost i Responzivnost nisu samo atributi, već bitne kvalitete za uspjeh. Naš pristup obuhvaća prilagodljivost, osiguravajući da se možemo brzo okrenuti prema potrebama naših klijenata koje se stalno mijenjaju. Budući da smo fleksibilni i brzi, ne samo da se neprimjetno nosimo s izazovima, već i stvaramo prilagođena rješenja koja se razvijaju s dinamičnom prirodom tržišta'
    },
  } as const;

  export const showDefaultLang = false;