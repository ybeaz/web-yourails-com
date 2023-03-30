export const projectList = () => {
  const arrObj = [
    /*
    {
      title: 'Smartphone app for transactions between friends',
      pathname: 'lib-catalog-items',
      typeDemo: 'Mobile app',
      subtitle: 'Play in the web',
      descript:
        'This is a smart phone app for friends to buy, lend,\
        give for free things easily and get fun of the process',
      customer: 'Mobile users',
      builtwith: 'React Native, Expo, ES7, ESLint, Babel',
      imgSrc: 'https://r1.userto.com/img/yunazon-screens.png',
      linkHref: 'https://r1.userto.com/lib-catalog-items',
    },
    */
    {
      title: 'Tic Tac Toe game with random reply logic',
      pathname: 'demo-tic-tak-toe-js.html',
      typeDemo: 'SPA game',
      subtitle: 'Play in the web',
      descript: 'This is a game implementeed with pure JS ',
      customer: 'Gaming, leasure time',
      builtwith: 'ES7, ESLint, Babel, Webpack',
      imgSrc: 'https://r1.userto.com/img/tic-tac-toe-game.png',
      linkHref: 'https://r1.userto.com/demo-tic-tak-toe-js.html',
    },

    {
      title: 'Prototype: Experience Exchange Messenger',
      pathname: 'demo-experience-exchange-messenger.html',
      typeDemo: 'Service prototype',
      subtitle: 'Together know everything',
      descript:
        'This is a prototype of the messenger that connect people quickly by criteria knowledge and skills',
      customer: 'Business, hobby, leasure communities',
      builtwith:
        'Antd Compoment lib, React, react-router-dom, Typescript, ES7, ESLint, Babel, Webpack',
      imgSrc: 'https://r1.userto.com/img/demo-sep.jpg',
      linkHref:
        'https://yourails.com/sep?ssr=Photoshop&hiw=true&sfs=true&sfb=true&ln=en',
    },

    {
      title: 'Authorization with Social Media',
      pathname: 'login-social-media.html',
      typeDemo: 'Internal Compoment Block',
      subtitle: 'Login Quickly as You Like',
      descript:
        'It is an internal reactive component block that allows you to log in using social networks such as Facebook, Vk, Google.',
      customer: 'Business, hobby, leasure sites',
      builtwith:
        'React, react-router-dom, Typescript, ES7, ESLint, Babel, Webpack',
      imgSrc: 'https://r1.userto.com/img/demo-auth-social-service.jpg',
      linkHref:
        'https://yourails.com/c/cj8dDTHGJBY/Eukaryopolis---The-City-of-Animal-Cells-Crash-Course-Biology-4',
    },

    {
      title: 'YouRails Academy',
      pathname: 'demo-yourails-academy.html',
      typeDemo: 'Service',
      subtitle: 'Enjoy Creating Courses Quickly',
      descript:
        'YouRails is committed to providing services for the rapid creation and deployment of educational services. It allows to take the quizzes and receive a certificates.',
      customer: 'Business, hobby, leasure communities',
      builtwith:
        'React, react-router-dom, Typescript, ES7, ESLint, Babel, Webpack',
      imgSrc: 'https://r1.userto.com/img/demo-yourails-academy.jpg',
      linkHref: 'https://yourails.com/academy',
    },

    {
      title: 'Demo: Earthquake Zen Garden ver. 3.12.3',
      pathname: 'demo-js-item-carousel.html/',
      typeDemo: 'SPA pages',
      subtitle: 'Create interactive dashboards',
      descript: 'This is a react SPA demo of a dashboard structure',
      customer: 'Any industry',
      builtwith: 'React, react-router-dom, ES7, ESLint, Babel, Webpack',
      imgSrc: 'https://r1.userto.com/img/earthquake-zen-garden-screens.png',
      linkHref: 'https://r1.userto.com/demo-earthquake-zen-garden-js.html',
    },

    {
      title: 'Demo: A dynamic tree component',
      pathname: 'demo-dynamic-tree-component.html/',
      typeDemo: 'Component',
      subtitle: 'Create a menu with folding/unfolding sections',
      descript:
        'This is a react component illustrating the menu development with unlimited depth of the data tree',
      customer: 'Any industry',
      builtwith: 'React, Typescript, ES7, ESLint, Webpack',
      imgSrc: 'https://r1.userto.com/img/demo-dynamic-tree-component-2.jpg',
      linkHref: 'https://r1.userto.com/demo-dynamic-tree-component.html',
    },

    {
      title: 'Demo: Prototype for service Ecom-Yunazon',
      pathname: 'demo-ecom-yunazon-espa-neptun-FL60.html/',
      typeDemo: 'GraphQL server API, SPA pages',
      subtitle:
        'To sell more and faster you need more and faster your product data',
      descript:
        'Yunazon-ecom is providing a seamless global network to enable brands/ OEMs to automate distribution of information about their products to its various consumers in format and accuracy for it to matter.',
      customer: 'Any industry',
      builtwith:
        'ExpressJS, GraphQL, React, react-router-dom, Typescript, ES7, ESLint, Babel, Webpack',
      imgSrc: 'https://r1.userto.com/img/demo-ecom-yanazon.png',
      linkHref: 'https://r1.userto.com/demo-ecom-yunazon-espa-neptun-FL60.html',
    },

    {
      title: 'Demo: Item card screen',
      pathname: 'demo-js-item-carousel.html/',
      typeDemo: 'SPA pages',
      subtitle: 'Visualize json data in the web page',
      descript:
        'This is a react SPA demo for e-commerce product(s) representation',
      customer: 'E-commerce',
      builtwith: 'React, react-router-dom, ES7, ESLint, Babel, Webpack',
      imgSrc: 'https://r1.userto.com/img/demo-item-carousel.png',
      linkHref: 'https://r1.userto.com/demo-js-item-carousel.html',
    },

    {
      title: 'SPA Windows in Browser Tabs',
      pathname: 'site-windows',
      typeDemo: 'Service',
      subtitle: 'Visualize and manupulate data in web page',
      descript:
        'This is an SPA service for creating a multi-task “windows” environment \
        on one tab of the browser. It revolutionizes the concept of a personal cabinet and \
        allows users to organize information at their own discretion, rather than follow \
        the hierarchy of sites or the scenarios of UX developers. \
        Users can open and reorder in modal windows shopping carts, price lists, \
        comparison lists, reports, tasks, offers, messages, notes, etc. \
        This is an open source project that is built around reusable components, \
        with a high level of visualization, encapsulation of functions, \
        polymorphism and suggests flexible user stories or a combination thereof.',
      customer: 'Not limited',
      builtwith:
        'React, React-dom, ES7, Babel, Webpack, Jest, Enzyme, JSONP, Php, MySQL',
      imgSrc: 'https://r1.userto.com/img/demo-site-windows.png',
      linkHref: 'https://sitewindows.com/site-windows-info.html', //'https://r1.userto.com/demo-site-windows.html',
    },

    {
      title: 'Catalog for goods, films, books, etc.',
      pathname: 'lib-catalog-items',
      typeDemo: 'Components',
      subtitle: 'Help visitors accessing your site and navigating easily',
      descript:
        'Catalog of elements is a prototype for various business \
        cases beginning from online shops to catalog of films, books, orders, etc. \
        It is a cross-browser SPA application with the corresponding advantages.\
        It provides a visitor with the following basic UI and UX conveniences: \
        To select "Favorite", \
        To rate items, \
        To filter Favorite or All, \
        To look N-th items in a page at once, \
        To list the pages forth and back, \
        To see all item features, \
        To edit item features, \
        To save item features, \
        To come back to the item list. \
        ',
      customer: 'e-commerce',
      builtwith:
        'React, React-dom, React-redux, React-router-dom, Redux \
              ES7, Bootstrap, Webpack',
      imgSrc: 'https://r1.userto.com/img/itemLibDemo.png',
      linkHref: 'https://r1.userto.com/lib-catalog-items',
    },

    {
      title:
        'Tables with sorting and filtering features, popup row menu, inline editable',
      pathname: 'lib-table-match',
      typeDemo: 'Components',
      subtitle: 'Get in table what you want with API',
      descript:
        'The common part of many types of interactive communication is providing \
        the user with some research tools, such as filtering, sorting, picking up information items. \
        In many times this includes the ability to edit information in some fields and create \
        temporary lists for future consideration. This is a set of ReactJs components for a personal cabinet. \
        This example includes the table, sortable ascending and discending order by columns. \
        Free ride filters and preset filters are implemented. \
        Modal windows as a part of selection process are implemented.',
      customer: 'e-commerce',
      builtwith:
        'React, React-dom, Semantic-UI-React \
        ES7, Babel, Webpack, Mocha',
      imgSrc: 'https://r1.userto.com/img/demo-table-match.png',
      linkHref:
        'https://bb.userto.com/analytics-c7b094941e7e11c6bf93d57366738802',
    },

    {
      title: 'Purchase summary',
      pathname: 'demo-purchase-summary',
      typeDemo: 'Components',
      subtitle: 'Be transpent and encourage online shoppers',
      descript:
        'A part of the purchase process is to show the subtotal, taxes and fees, \
        the cost of delivery (savings), coupon discounts, the estimation total. \
        The customer should know details of the goods, the delivery information, \
        general terms and conditions prior to the final step.',
      customer: 'e-commerce',
      builtwith:
        'React, React-dom, React-redux, Redux, Enzyme, Enzyme-adapter-react, Jjest',
      imgSrc: 'https://r1.userto.com/img/demo-purchase-summary.png',
      linkHref: 'https://r1.userto.com/demo-reactjs-purchase-summary.html',
    },

    {
      title: 'Demo online shoping cart',
      pathname: 'demo-basket-cart',
      typeDemo: 'Components',
      subtitle: 'Add shopping cart, start sell online',
      descript:
        'Shopping cart for quick check out providing configuration of shopping scenarios. \
        The widget demonstrates the simple, but effective functionality of the shopping cart. \
        It can be used as a first step for small online stores or as part of a more complex scenario.',
      customer: 'e-commerce',
      builtwith: 'jQuery, Bootstrap, AJAX, PHP, GET, POST requests',
      imgSrc: 'https://r1.userto.com/img/demo-basket-cart.png',
      linkHref:
        'https://userto.com/product/10/kenmore-74233-5-0-cu-ft-freestanding-gas-range-w-convection-stainless-steel/en',
    },

    {
      title: 'SPA Active Learning Text',
      pathname: 'learning-text-learn-phrases-learn-words',
      typeDemo: 'Project',
      subtitle: 'Learn by heart easily',
      descript:
        'The service assists users with memorizing \
        texts or word sets: hiding text parts, mark difficult words, \
        active reading, 25th frame, etc.',
      customer: 'Education. Language training provider',
      builtwith: 'Bootstrap, Bootstrap-select, javascript',
      imgSrc: 'https://r1.userto.com/img/learnByHeartService.png',
      linkHref:
        'https://r1.userto.com/learning-text-learn-phrases-learn-words.html',
    },

    {
      title: 'SPA Online Notes Keeper',
      pathname: 'lib-catalog-notes',
      typeDemo: 'Service',
      subtitle: 'Keep your thoughts for your tomorrow yourself',
      descript:
        'This is a prototype of a component of the personal cabinets in the form of an online notes keeper \
        It has usual functionality including adding, editing and saving notes. \
        A user can easily find relevant information filtering out notes. \
        The sort function helps to see notes the way that the user likes. \
        A user can manage display settings by archiving notes, restoring them or even deleting forever. \
        It automatically lays notes out in three tabs-folders: active, archived and all. \
        A search functionality is available in each display setting. \
        After editing the notes are stored and got back on the display after application reloading.\
        ',
      customer: 'Not limited',
      builtwith:
        'Redux, React-redux, React, React-dom, \
              ES7, Babel, Bootstrap, Webpack, Mocha',
      imgSrc: 'https://r1.userto.com/img/noteLibDemo.png',
      linkHref: 'https://r1.userto.com/demo-note-book.html',
    },

    {
      title: 'SPA Online telephone directory',
      pathname: 'demo-tel-book-reactjs',
      typeDemo: 'Service',
      subtitle: 'Find a new way to keep your contacts',
      descript:
        'The service allows users to create telephone directory and \
              keep contacts locally on their computers. \
              This is a prototype for various dashboard function architectures.',
      customer: 'Not limited',
      builtwith: 'React, React-dom, ES7, Bootstrap, Webpack',
      imgSrc: 'https://r1.userto.com/img/demo-tel-book.png',
      linkHref: 'https://r1.userto.com/demo-tel-book-reactjs.html',
    },

    {
      title:
        'AAA Advertising Aggregator for Applications, Brand Banner Project',
      pathname: 'landing-page-brand-banner-project',
      typeDemo: 'Service',
      subtitle: '',
      descript:
        'It helps earning money from site traffic with numerous levels of flexibility \
        without redesigning of the sites and getting into site engines. \
        The project is based on the brand new Brand Banner technology for website design management, \
        which is neutral to the site engine.',
      customer: '',
      builtwith: 'Angularjs 1.7, Bootstrap, jQuery, AJAX, PHP',
      imgSrc: 'https://r1.userto.com/img/brendBannerPromo.png',
      linkHref: 'https://my.userto.com/dashboard.php#!/promoLpBb?lang=en',
    },

    {
      title: 'MMS Marketplace Management System, API avoiding API™',
      pathname: 'promoLpMms',
      typeDemo: 'Service',
      subtitle:
        'An easy way to achieve a synergistic interaction between sites',
      descript:
        'API avoiding API is a service that makes it easy for websites \
        to implement applications from partner providers while preserving custom web page design.\
        The project is based on the brand new Brand Banner technology for website design management, \
        which is neutral to the site engine.',
      customer: 'Not limited',
      builtwith:
        'Angularjs-1.7, jQuery, AJAX, JSON PHP, POST requests, OOP, MySQL-MariaDB',
      imgSrc: 'https://r1.userto.com/img/mmsAaaDemo.png',
      linkHref: 'https://my.userto.com/dashboard.php#!/promoLpMms?lang=en',
    },

    {
      title: 'JS Feedback Forms Builder with Telegram messaging feature',
      pathname: 'demo-feedback-field',
      typeDemo: 'Micro-library',
      subtitle: 'Allow users to leave a feedback',
      descript:
        'The project involved a development of the \
                javascript micro-library and light server part \
                for fast creating feedback forms. \
                The script allows developers \
                to include an unlimited number of feedback forms for one page, \
                to use an unlimited number of fields on one form, \
                to build various scenarious for users utilizing modal window techniques, \
                to apply standards for field description, \
                to validate fields and alert user before form submitting',
      customer: '',
      builtwith:
        'Bootstrap, jQuery, AJAX, PHP, POST requests, Telegram API, OOP',
      imgSrc: 'https://r1.userto.com/img/feedbackFormExample05.png', //'https://r1.userto.com/img/feedbackFormDemo.png',
      linkHref: 'https://r1.userto.com/lib-feedback-forms',
    },

    {
      title: 'Demo registration and authorization',
      pathname: 'cabinet-registration-authorization',
      typeDemo: 'Project',
      subtitle: '',
      descript:
        'The project includes creating a MySql database, \
                providing security, cookie setting, session usage, email confirmation, etc.',
      customer: '',
      builtwith:
        'Angularjs 1.7, jQuery, AJAX, JSON \
                PHP, POST requests, OOP, MySQL-MariaDB.',
      imgSrc: 'https://r1.userto.com/img/authorRegistrPrjct.png',
      linkHref: 'https://my.userto.com/dashboard.php#!/?lang=en',
    },

    {
      title: 'Language detection with artificial neuro network (ANN)',
      pathname: 'demo-language-detection',
      typeDemo: 'Project',
      subtitle: 'You might not know how, but it works',
      descript:
        'A demo introduces an example of language recognition with the help of \
        ANN (artificial neuro network). It makes a real-time probability choice among 8 languages: \
        German, English, Spanish, French, Italian, Polish, Portuguese, Russian, providing friendly interface.',
      customer: 'Finance, Medicine, Computer science, etc.',
      builtwith:
        'php FANN library 2.2, \
              PHP, AJAX, POST requests, Regexp, OOP, \
              Bootstrap, Angularjs 1.7, jQuery, AJAX, JSON',
      imgSrc: 'https://r1.userto.com/img/langDetectAnnDemo.png',
      linkHref: '', //'https://ann.userto.com/demo-language-detection.php'
    },

    {
      title: 'TRIZ Language Problem Description',
      pathname: 'triz-lang-forms',
      typeDemo: 'Prototype plate',
      subtitle: 'Allow everybody to invent',
      descript:
        'The prototype to desctipt a tasks in problem-solving definitions',
      customer: '',
      builtwith:
        'ReactJS, Bootstrap, jQuery, AJAX, PHP, POST requests, Telegram API, OOP',
      imgSrc: 'https://r1.userto.com/img/trizLangDemo.png',
      linkHref: 'https://r1.userto.com/triz-lang-forms',
    },

    {
      title: 'JS Feedback widget for sites',
      pathname: 'demo-feedback-widget',
      typeDemo: 'Widget',
      subtitle: 'Allow users to contact you',
      descript:
        'Widget for user feedback with flexible \
              configuration providing: \
              Multi platform CMS support (JS script solution), \
              Multi-language support, \
              Social network sharing, \
              Page rating, \
              Perform an advanced search on the site, \
              Possibility of widget customization, \
              Automatic messages upload to the page, where a user asks the question\
              ',
      customer: '',
      builtwith:
        'CSS 3,  Pure JS, Yandex share API, Regexp, DOM Scripting, JSON, \
                    PHP, Bing search api, \
                    AJAX GET POST requests, Regexp, OOP',
      imgSrc: 'https://r1.userto.com/img/feedbackWidgetDemo.png',
      linkHref: '', //'https://r1.userto.com/demo-feedback-widget.php'
    },

    {
      title: 'Question-answers site for legal questions',
      pathname: 'question-answers-site',
      typeDemo: 'Site',
      subtitle: 'You ask, the community responds',
      descript:
        'Question-answer system for generating user content. The project includes  URL rooting part, \
                server OOP php coding, GUI javascript scenarios, \
                GUI (interface) coding, using Schema microformats for CEO, etc.',
      customer: '',
      builtwith:
        'CSS 3,  Pure JS, Yandex share API, Regexp, DOM Scripting, JSON, \
                    PHP, Bing search api, \
                    AJAX GET POST requests, Regexp, OOP',
      imgSrc: 'https://r1.userto.com/img/answerLotPrjct.png',
      linkHref: '', //'https://userto.com/question/T94408/Does-my-travel-insurance-policy-covers-me-in-case-of-an-accident'
    },

    {
      title: 'Arbir.ru - SEO, content management',
      pathname: 'arbir-ru-collection-thematic-articles',
      typeDemo: 'Portal',
      subtitle: '4500 visitors per business day, regular leads flow.',
      descript:
        'The project involves using 1C-Bitrix CMS, \
                a great deal of content management, \
                CEO, processing Word xml into html CEO friendly pages.',
      customer: '',
      builtwith: '1C-Bitrix CMS, bootstrap, PHP, MySQL-MariaDB',
      imgSrc: 'https://r1.userto.com/img/arbirRuExample.png',
      linkHref:
        'https://arbir.ru/miscellany/U18S864E55782-Situation-awareness-new-paradigm-for-the-next-generation-infrastructures',
    },

    {
      title: 'View Domain Statistics',
      pathname: 'domain-statistics-service',
      typeDemo: 'Service',
      subtitle: 'Know how the Internet sees the domain',
      descript:
        'The service provides a quick outlook for how \
                Alex, Google, Yandex see the domain.',
      customer: 'Internet analytics',
      builtwith: 'REST Google API, Yandex API, angularjs 1.7, bootstrap',
      imgSrc: 'https://r1.userto.com/img/domainStatService.png',
      linkHref: 'https://my.userto.com/dashboard.php#!/domainStat?lang=en',
    },

    {
      title: 'Upload images',
      pathname: 'demo-file-upload',
      typeDemo: 'Function',
      subtitle: 'Be free to manage images and files',
      descript:
        'The function allows users to show, upload, delete images and files on the server',
      customer: 'Dashboards and services creation',
      builtwith:
        'jQuery File Upload API (AngularJS case), Angular 1.7, jQuery, Bootstrap, AJAX, PHP, GET, POST requests',
      imgSrc: 'https://r1.userto.com/img/fileUploadDemo.png',
      linkHref: 'https://r1.userto.com/demo-file-upload.php',
    },

    {
      title: 'JS Algorithms and Questions',
      pathname: 'demo-js-algorithms-problems',
      typeDemo: 'Collection',
      subtitle: 'Over-prepare, then go with the flow. Regina Brett',
      descript:
        'Here are proven, effective techniques and questions for finding true masters of the language.',
      customer: 'Education, job hiring consulting',
      builtwith: 'ReactJS, Bootstrap, javascript',
      imgSrc: 'https://r1.userto.com/img/js-algorithms-problems.png',
      linkHref: 'https://r1.userto.com/demo-js-algorithms-problems.html',
    },

    {
      title: 'Demo Telegram bot',
      pathname: 'feedback-via-telegram',
      typeDemo: 'Service',
      subtitle: 'Get messages from your prospects instantly',
      descript:
        'The service allows to get feedback from visitors of your site instantly\
                     on the mobile devices of managers and track the actions.\
                     It sends messages from your site feedback forms to your Telegram account.\
                     Promt replys for your client requests build trust and loyalty,\
                     which is important for sales and for beginning stage of co-operation.',
      customer: 'Sales, small and middle business sites',
      builtwith: 'Telegram API, AJAX, PHP CURL POST Requests',
      imgSrc: 'https://r1.userto.com/img/feedbackTelegramDemo.png',
      linkHref: 'https://r1.userto.com/contacts#contacts',
    },

    {
      title: 'Wiki Goods Startup',
      pathname: 'landing-page-wiki-goods-startup',
      typeDemo: 'Landing Page',

      subtitle: 'Your site deserves eCommerce functionality!',
      descript:
        'This is a landing page for the startup which provides \
                ordinary sites with online shop functionality without reprogramming. \
                We use original JS eCommerce library of functions, \
                cloud content broadcasting and brand banner technology.',
      customer: '',
      builtwith: 'Bootstrap, jQuery',
      imgSrc: 'https://r1.userto.com/img/wikiGoodsPromo.png',
      linkHref: 'https://userto.com/promo-ecommerce.php',
    },

    {
      title: 'Immigration Service Provider',
      pathname: 'landing-page-immigration-service-provider',
      typeDemo: 'Landing Page',
      subtitle: '',
      descript: '',
      customer: '',
      builtwith:
        'jQuery, Bootstrap, JS widgets, Used: Google AdWords, Google Analytics',
      imgSrc: 'https://r1.userto.com/img/premierExpertPromo.png',
      linkHref: 'https://pe.userto.com/info01.php',
    },

    {
      title: 'Feedback Widget Project',
      pathname: 'landing-page-feedback-widget',
      typeDemo: 'Landing Page',
      subtitle: '',
      descript: '',
      customer: '',
      builtwith:
        'jQuery, Bootstrap, JS widgets, Used: Google AdWords, Google Analytics',
      imgSrc: 'https://r1.userto.com/img/feedbackWidgetPromo.png',
      linkHref: 'https://my.yacontent.com/services/LpUserTo/index.html',
    },

    {
      title: 'Automatic image resizing on the fly',
      pathname: 'function-automatic-image-resizing',
      typeDemo: 'Function',
      subtitle: '',
      descript: '',
      customer: '',
      builtwith: 'Bootstrap, Bootstrap-select, jQuery, AJAX, ',
      imgSrc: 'https://r1.userto.com/img/imgResizeDemo.png',
      linkHref: 'https://r1.userto.com/demo-image-resize.php',
    },
  ]

  /*
      arrObj[]  =  {};
      arrObj[].title    =  '';
      arrObj[].subtitle  =  '';
      arrObj[].descript  =  '';
      arrObj[].customer    =  '';
      arrObj[].builtwith    =  '';        
      arrObj[].imgSrc    =  '';
      arrObj[].linkHref  =  '';
      */
  return arrObj
}
