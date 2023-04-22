import { CompetencyTagType } from '../@types/CompetencyTagType'

export const competencyTags01R: CompetencyTagType[] = [
  {
    idUser: '1',
    title: 'Agile',
    section: 'Best Practices and Methodologies',
    linkHref:
      'https://www.agilealliance.org/agile101/12-principles-behind-the-agile-manifesto/',
    tooltips:
      '\
1. Our highest priority is to satisfy the customer through early and continuous delivery of valuable software\n\
2. Welcome changing requirements, even late in development.\n\
3. Deliver working software frequently with a preference to the shorter timescale\n\
4. Business people and developers must work together daily throughout the project\n\
5. Build projects around motivated individuals. Give them the environment, support they need, and trust them\n\
6. The most efficient method of conveying information to and within a development team is face-to-face conversation\n\
7. Working software is the primary measure of progress\n\
8. The sponsors, developers, and users should be able to maintain a constant pace indefinitely\n\
9. Continuous attention to technical excellence and good design enhances agility\n\
10. Simplicity--the art of maximizing the amount of work not done--is essential\n\
11. The best architectures, requirements, and designs emerge from self-organizing teams\n\
12. At regular intervals, the team reflects, tunes and adjusts its behavior accordingly',
  },

  {
    idUser: '1',
    title: 'Automation Tools',
    section: 'Best Practices and Methodologies',
    linkHref: 'https://webpack.js.org/',
    tooltips:
      '\
Webpack dev server\n\
Jenkins automation server\n\
Browser devtools\n\
  Network\n\
  Sources: breakpoints\n\
  LightHouse\n\
  Performance\n\
  Profiler (dev React)\n\
',
  },

  {
    idUser: '1',
    title: 'CLI',
    section: 'Best Practices and Methodologies',
    linkHref: 'https://docs.npmjs.com/cli/npm',
    tooltips:
      '\
Anaconda prompt\n\
ConEmu Windows Terminal\n\
Jenkins terminal\n\
Git Bash terminal\n\
MacOS terminal\n\
NodeJs command prompt\n\
Ubuntu terminal\n\
Windows Powershell\n\
Windows CMD',
  },

  {
    idUser: '1',
    title: 'BDD',
    section: 'Best Practices and Methodologies',
    linkHref: 'https://www.agilealliance.org/glossary/bdd',
    tooltips:
      "\
Behavior-driven development (BDD):\n\
1. BDD emphasizes collaboration between stakeholders to ensure a shared understanding of requirements.\n\
2. User stories capture requirements in a business context and describe software behavior from a user's perspective.\n\
3. Automated tests written in a natural language syntax like Gherkin verify software behavior against user stories.\n\
4. Natural language syntax makes it easier for stakeholders to understand requirements and software behavior.\n\
5. Continuous testing ensures software meets expected behavior and identifies issues early in the development process.\n\
6. Feedback between testing and development teams helps identify issues and ensures software meets requirements.\n\
  ",
  },

  {
    idUser: '1',
    title: 'Design Patterns',
    section: 'Best Practices and Methodologies',
    linkHref: 'https://en.wikipedia.org/wiki/Software_design_pattern',
    tooltips:
      '\
Design patterns are advanced object-oriented solutions to commonly occurring software problems.  Patterns are about reusable designs and interactions of objects.\n\
* Frequently used\n\
  Facade, Singleton, Observer, State, Decorator\n\
* Creational Patterns\n\
  Abstract Factory - create an object through another function \n\
  Factory - create a type of object depending on certain conditions \n\
  Prototype - clone an fully initilized instance with default values \n\
  Singleton - create one and only one instance of the function, unique one \n\
  Flyweight - create a complex object "with lean resource/memory consumption" \n\
  Builder - create steps runner, step definer and step content functions and wire them to work together decoupling each one from another\n\
  Builder - (another version), create an object [one function], create actions with this object [second function], \n\
  Builder - create steps to run actions [third function] \n\
  Template - from content point of view this is variation of the Builder theme through .prototype\n\
* Structural Patterns\n\
  Adaptor - adapts a new function (to exchange the old one) to an old code workflow by providing the same input-output interface\n\
  Bridge - passes one object methods to another object methods and provides unity interfaces\n\
  Decorator - adds or modify to the object/ function other "responsibilities" through this property, props or modify them, returning next non-instantiated object\n\
  Facade - represent a whole subsystem via one class interface\n\
  Template - adds or modify properties through prototype. The particular case is to add an a chain of command as a function via prototype\n\
  Visitor - adds or modify properties of the instantiated object(function)\n\
  Proxy - utilizes object/props structure to reduce using other recourses caching the unique values\n\
* Behavioral Patterns\n\
  Command - to run commands with standard interface from common object property set, similar in some sense to the Builder pattern \n\
  Interpreter - to transform object state passing it "through another object"\n\
  Mediator - to apply to the object method of the mediator and leave a footprint of that in the mediator state Iterator - to approach to reach all array/object members/props with stated method\n\
  Composite - to create objects in a tree structure of the "root object"\n\
  Memento - to restore object state\n\
  Observer - to perform (fire) actions (run function for example) on an objects (after and once they are subscribed); to unsubscribe it from that action if necessary \n\
  State - to store, change and return an object, that reflects state of the app. Optionally, to keep state history\n\
  Chain of responsibility - to create a method that can get (extract) a sense from data in a chain, like doing math, or processing consequently',
  },

  {
    idUser: '1',
    title: 'DevOps',
    section: 'Best Practices and Methodologies',
    linkHref:
      'https://www.digital-management-blog.de/wp-content/uploads/2017/06/devops.jpg',
    tooltips:
      '\
* Plan -> Code -> Build -> Test <-> Release -> Deploy -> Operate -> Monitor\n\n\
CALMS framework:\n\
C   Culture - a culture of shared responsibility.\n\
A   Automation -  team members seek out ways to automate as many tasks as possible and are comfortable with the idea of continuous delivery.\n\
L   Lean - team members are able to visualize work in progress (WIP), limit batch sizes and manage queue lengths.\n\
M   Measurement - data is collected on everything and there are mechanisms in place that provide visibility into all systems.\n\
S   Sharing - there are user-friendly communication channels that encourage ongoing communication between development and operations.\n\n\
* Code — code development and review, source code management tools, code merging\n\
* Build — continuous integration tools, build status\n\
* Test — continuous testing tools that provide feedback on business risks\n\
* Package — artifact repository, application pre-deployment staging\n\
* Release — change management, release approvals, release automation\n\
* Configure — infrastructure configuration and management, Infrastructure as Code tools\n\
* Monitor — applications performance monitoring, end–user experience\n\
',
  },

  {
    idUser: '1',
    title: 'Docker',
    section: 'Best Practices and Methodologies',
    linkHref:
      'https://docs.docker.com/develop/develop-images/dockerfile_best-practices/',
    tooltips:
      '\
The Dockerfile instructions: \n\
\n\
FROM - to define the origin of the package, better to use current Official Repositories, whenever possible. Example: FROM ubuntu: 18.04 \n\
COPY - to define destination for installation. Examples: COPY . /app; COPY requirements.txt /tmp/ \n\
ADD - to copy from URL and tar file directly into the container. Example: ADD http://example.com/big.tar.xz /usr/src/things/ \n\
RUN - Examples: RUN apt - get update && apt - get install - y myPackage; RUN make / app; RUN echo "hello world" \n\
CMD - to run the software contained by your image, along with any args. Example: CMD ["php", "-a"] \n\
EXPOSE - to indicate the ports on which a container listens for connections \n\
ENV - to update the PATH environment variable. Example, ENV PATH /usr/local/nginx/bin:$PATH \n\
ENTRYPOINT - to set the image\'s main command. Example: ENTRYPOINT ["s3cmd"] \n\
VOLUME - to expose any database storage area, configuration storage, or files/folders created by your docker container \n\
USER - to change to a non-root user \n\
WORKDIR - to define paths (preferably absolute) for your WORKDIR \n\
ONBUILD - to execute command after the current Dockerfile build completes. It is an instruction the parent Dockerfile gives to the child Dockerfile.\n\
',
  },

  {
    idUser: '1',
    title: 'Issue-tracking systems',
    section: 'Best Practices and Methodologies',
    linkHref:
      'https://en.wikipedia.org/wiki/Comparison_of_issue-tracking_systems',
    tooltips:
      '\
JIRA\n\
Redmine\n\
Bugzilla\n\
...',
  },

  {
    idUser: '1',
    title: 'Kanban',
    section: 'Best Practices and Methodologies',
    linkHref:
      'https://www.agilealliance.org/agile101/subway-map-to-agile-practices/',
    tooltips:
      '\
1. Visualize work\n\
2. Limit work in process (WIP)\n\
3. Focus on work flow\n\
4. Continuously improve\n\
',
  },

  {
    idUser: '1',
    title: 'Lints',
    section: 'Best Practices and Methodologies',
    linkHref: '',
    tooltips:
      '\
1. Prettier\n\
2. ESLint\n\
3. SonarLint\n\
4. StyleLint\n\
5. PyLint\n\
6. Pylance\n\
7. PHP-sat\n\
',
  },

  {
    idUser: '1',
    title: 'OOP',
    section: 'Best Practices and Methodologies',
    linkHref: 'https://en.wikipedia.org/wiki/Object-oriented_programming',
    tooltips:
      'The four principles of OOP\n\
1. Encapsulation:\n\
Encapsulation means that the internal representation of an object is generally \
hidden from view outside of the object’s definition. \
Typically, only the object’s own methods can directly inspect or manipulate its fields.\n\
2. Abstraction\n\
An abstraction is a simplified representation of a complex system or entity that focuses on its essential characteristics and behaviors, while ignoring the details that are not relevant to its use.\n\
3. Inheritance\n\
Inheritance is a way to reuse code of existing objects, or to establish a subtype from an existing object.\n\
4. Polymorphism\n\
Polymorphism means one name, many forms. \
Polymorphism manifests itself by having multiple methods all with the same name, but slightly different functionality.\
',
  },

  {
    idUser: '1',
    title: 'Scrum',
    section: 'Best Practices and Methodologies',
    linkHref:
      'https://www.agilealliance.org/agile101/subway-map-to-agile-practices/',
    tooltips:
      '\
Roles: Product Owner, Scrum Master, and Team Members\n\
\n\
1.  Iterative development\n\
2.  Timebox\n\
3.  Iterations\n\
4.  Daily meeting\n\
5.  Three Questions\n\
6.  Burndown chart\n\
7.  Task board\n\
8.  Definition of Done\n\
9.  Definition of Ready\n\
10. Point estimates\n\
11. Relative estimation\n\
12. Planning poker\n\
13. Backlog\n\
14. Backlog grooming',
  },

  {
    idUser: '1',
    title: 'SDLC',
    section: 'Best Practices and Methodologies',
    linkHref: 'https://en.wikipedia.org/wiki/Systems_development_life_cycle',
    tooltips:
      'The systems development life cycle (SDLC), \n\
or application development life-cycle: \n\
● Requirement analysis\n\
● Planning\n\
● Software design such as architectural design\n\
● Software development\n\
● Testing\n\
● Deploymenth\n\
',
  },

  {
    idUser: '1',
    title: 'TDD',
    section: 'Best Practices and Methodologies',
    linkHref: 'https://www.agilealliance.org/glossary/tdd/',
    tooltips:
      '\
Test-driven development (TDD):\n\
1. Writing tests before code: In TDD, tests are written before the code. This helps to ensure that the code is focused on meeting the requirements of the tests.\n\
2. Red-Green-Refactor cycle: TDD follows a continuous cycle of writing failing tests (red), writing code to make the tests pass (green), and then refactoring the code to improve its design and maintainability.\n\
3. Small, incremental changes: TDD emphasizes making small, incremental changes to the codebase, which are easier to manage and less prone to introducing bugs.\n\
4. Test automation: TDD requires automated tests to be written, which can be run continuously to ensure that the codebase remains stable and meets the expected behavior.\n\
5. Code coverage: TDD emphasizes achieving high code coverage, meaning that as much of the codebase as possible is covered by automated tests.\n\
6. Integration with development tools: TDD requires integration with development tools, such as continuous integration (CI) systems, to automate the process of running tests and providing feedback to developers.',
  },

  {
    idUser: '1',
    title: 'SOLID',
    section: 'Best Practices and Methodologies',
    linkHref: 'https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)',
    tooltips:
      "\
* Single responsibility principle:\t\
a class should have only a single responsibility (i.e. changes to only one part of the software's \
specification should be able to affect the specification of the class), \n\
* Open/closed principle\t\
classes should be open for extension, but closed for modification.\n\
* Liskov substitution principle\t\
objects in a program should be replaceable with instances of their subtypes without altering \
the correctness of that program. \n\
* Interface segregation principle\t\
many client-specific interfaces are better than one general-purpose interface. \n\
* Dependency inversion principle\t\
one should depend upon abstractions, [not] concretions.",
  },

  {
    idUser: '1',
    title: 'Testing/Debugging',
    section: 'Best Practices and Methodologies',
    linkHref: '',
    tooltips:
      '\
BDD Behavior Driven Development\n\
TDD Test Driven Development\n\
Unit testing\n\
  ✔ Mocha - mochajs.org\n\
  ✔ Enzyme - airbnb.io/enzyme/\n\
  ✔ Sinon - sinonjs.org/\n\
  ✔ Jest - facebook.github.io/jest/\n\
  ✔ Chai - chaijs.com\n\
  ✔ Jasmine - jasmine.github.io\n\
  ✔ Karma - karma-runner.github.io\n\
Integration testing\n\
  ✔ Cypress - cypress.io\n\
  ✔ TestCafe - testcafe.devexpress.com/\n\
Browser devtools\n\
  ✔ Network\n\
  ✔ Sources: breakpoints\n\
  ✔ LightHouse\n\
  ✔ Performance\n\
  ✔ Profiler (dev React)\n\
Lint\n\
  ✔ Eslint google style: npm run eslint filename.js\n\
  ✔ NodeJs htmllint: htmllint filename.html\n\
',
  },

  {
    idUser: '1',
    title: 'Version Control/Git',
    section: 'Best Practices and Methodologies',
    linkHref:
      'https://dont-be-afraid-to-commit.readthedocs.io/en/latest/git/commandlinegit.html',
    tooltips:
      '\
Bitbucket.org\n\
Github.com\n\
\n\
$ git clone https://... \n\
$ git clone --branch ... https://...\n\
$ git status\n\
$ git branch -r\n\
$ git fetch --all --prune\n\
$ git checkout ...\n\
$ git add -u\n\
$ git commit -m "..."\n\
$ git pull\n\
$ git push -u origin ...\n\
',
  },

  {
    idUser: '1',
    title: 'Ajax',
    section: 'Front-end',
    linkHref: 'https://www.w3.org/TR/XMLHttpRequest/',
    tooltips:
      '\
  The XMLHttpRequest specification is an API that \n\
  provides scripted client functionality \n\
  for transferring data between a client and a server',
  },

  {
    idUser: '1',
    title: 'Amp',
    section: 'Front-end',
    linkHref: 'https://www.ampproject.org/',
    tooltips:
      '\
  The AMP Project is an open-source initiative aiming to make the web better for all. \n\
  The project enables the creation of websites and ads that are \n\
  consistently fast, beautiful and high-performing \n\
  across devices and distribution platforms.',
  },

  {
    idUser: '1',
    title: 'Ant Design',
    section: 'Front-end',
    linkHref: 'https://ant.design/docs/react/introduce',
    tooltips:
      '\
  A React UI library antd that contains a set of high quality components and demos for building rich,\n\
  interactive user interfaces.',
  },

  {
    idUser: '1',
    title: 'Axios',
    section: 'Front-end',
    linkHref: 'https://github.com/axios/axios',
    tooltips:
      '\
  Request method aliases \n\
  Concurrency (Deprecated) \n\
  Creating an instance \n\
  Instance methods \n\
  Request Config \n\
  Response Schema \n\
  Config Defaults \n\
  Global axios defaults \n\
  Custom instance defaults \n\
  Config order of precedence \n\
  Interceptors \n\
  Handling Errors \n\
  Cancellation \n\
  Using application/x-www-form-urlencoded format \n\
  Browser \n\
  Node.js \n\
  Query string \n\
  Form data \n\
  Semver \n\
  Promises',
  },

  /*
      {
        title: 'AngularJS',
        linkHref: 'https://angularjs.org/',
        tooltips: '\
  AngularJS lets you extend \n\
  HTML vocabulary for your application.',
      },
      */

  {
    idUser: '1',
    title: 'Bootstrap',
    section: 'Front-end',
    linkHref: 'https://bootstrapdocs.com/',
    tooltips:
      '\
  Bootstrap is the most popular HTML, CSS, and JavaScript framework \n\
  for developing responsive, mobile-first web sites.\n\n\
  BOOTSTRAP GRID\n\
  BS Grid System\n\
  BS Stacked/Horizontal\n\
  BS Grid XSmall\n\
  BS Grid Small\n\
  BS Grid Medium\n\
  BS Grid Large\n\
  BS Grid XLarge\n\
  BOOTSTRAP\n\
  BS Typography\n\
  BS Colors\n\
  BS Tables\n\
  BS Images\n\
  BS Jumbotron\n\
  BS Alerts\n\
  BS Buttons\n\
  BS Button Groups\n\
  BS Badges\n\
  BS Progress Bars\n\
  BS Pagination\n\
  BS List Groups\n\
  BS Cards\n\
  BS Dropdowns\n\
  BS Collapse\n\
  BS Navs\n\
  BS Navbar\n\
  BS Forms\n\
  BS Inputs\n\
  BS Carousel\n\
  BS Modal\n\
  BS Tooltip\n\
  BS Popover\n\
  BS Scrollspy\n\
  BS Utilities',
  },

  {
    idUser: '1',
    title: 'BEM methodology',
    section: 'Front-end',
    linkHref: 'https://en.bem.info/methodology/',
    tooltips:
      '\
  * to work in the common terms of blocks, elements and modifiers in all technologies (HTML~CSS~JS)\n\
  * to create independent components (blocks) at the level of JavaScript\n\
  * to divide the code into small independent pieces, for ease of working with individual blocks\n\
  * to describe the behavior of a block as a set of actions and conditions for their implementation\n\
  * to access the elements of a block using the block API and does not violate the principle of encapsulation\n\
  * to change the behavior of blocks, elements and modifiers level overrides by analogy with CSS\n\
  * re-use the blocks',
  },

  {
    idUser: '1',
    title: 'Browser Developer Tools',
    section: 'Front-end',
    linkHref: 'https://developers.google.com/web/tools/chrome-devtools/',
    tooltips:
      '\
  Console debugging\n\
  Source variable observing\n\
  Element browsing\n\
  Network request analysing\n\
  Device Mode for testing Responsive and Device-specific Viewports\n\
  Profiling',
  },

  {
    idUser: '1',
    title: 'Cookie',
    section: 'Front-end',
    linkHref: 'https://tools.ietf.org/html/rfc6265',
    tooltips:
      "\
  An HTTP cookie is a small piece of data sent from a website \n\
  and stored on the user's computer \n\
  by the user's web browser while the user is browsing.\n\
  Cookies were designed to be a reliable mechanism for websites \n\
  to remember stateful information \n\
  (such as items added in the shopping cart in an online store) or \n\
  to record the user's browsing activity \n\
  (including clicking particular buttons, logging in, \n\
  or recording which pages were visited in the past).",
  },

  {
    idUser: '1',
    title: 'CSS Preprocessing',
    section: 'Front-end',
    linkHref: 'https://lesscss.org/functions/',
    tooltips:
      '\
  Lesscss.org\n\
  Sass-lang.com\n\
  Stylus-lang.com',
  },

  {
    idUser: '1',
    title: 'Css3',
    section: 'Front-end',
    linkHref: 'https://www.w3.org/Style/CSS/specs.en.html',
    tooltips:
      '\
  Rounded Corners \n\
  Border Images \n\
  Backgrounds \n\
  Colors \n\
  Gradients \n\
  Shadows \n\
  Text \n\
  Fonts \n\
  2D Transforms \n\
  3D Transforms \n\
  Transitions \n\
  Animations \n\
  Images \n\
  object-fit \n\
  Buttons \n\
  Pagination \n\
  Multiple Columns \n\
  User Interface \n\
  Box Sizing \n\
  Flexbox \n\
  Media Queries',
  },

  {
    idUser: '1',
    title: 'ECMAScript6',
    section: 'Front-end',
    linkHref: 'https://github.com/lukehoban/es6features',
    tooltips:
      '\
  ES7 includes the following new features:\n\
  arrows\n\
  classes\n\
  enhanced object literals\n\
  template strings\n\
  destructuring\n\
  default + rest + spread\n\
  let + const\n\
  iterators + for..of\n\
  generators\n\
  unicode\n\
  modules\n\
  module loaders\n\
  map + set + weakmap + weakset\n\
  proxies\n\
  symbols\n\
  subclassable built-ins\n\
  promises\n\
  math + number + string + array + object APIs\n\
  binary and octal literals\n\
  reflect api\n\
  tail calls',
  },

  /*
      {
        title: 'Enzyme',
        linkHref: 'https://airbnb.io/enzyme/',
        tooltips:
          "\
  Enzyme is a JavaScript Testing utility for React that makes it easier \n\
  to assert, manipulate, and traverse your React Components' output.",
      },
      */

  {
    idUser: '1',
    title: 'ESLint',
    section: 'Front-end',
    linkHref: 'https://eslint.org/',
    tooltips:
      '\
  ESLint statically analyzes your code to quickly find problems. \n\
  Many problems ESLint finds can be automatically fixed.',
  },

  {
    idUser: '1',
    title: 'Icons lib',
    section: 'Front-end',
    linkHref: 'https://www.w3schools.com/icons/icons_reference.asp',
    tooltips:
      '\
  Font-awesome https://fontawesome.io/\n\
  Bootstrap icons\n\
  Google icons',
  },

  {
    idUser: '1',
    title: 'Html5',
    section: 'Front-end',
    linkHref: 'https://www.w3.org/TR/html5/',
    tooltips:
      '\
  HTML GRAPHICS\n\
  HTML Canvas\n\
  HTML SVG\n\
  HTML Google Maps\n\
  HTML MEDIA\n\
  HTML Video\n\
  HTML Audio\n\
  HTML Plug-ins\n\
  HTML YouTube \n\
  HTML APIs\n\
  HTML Geolocation\n\
  HTML Drag/Drop\n\
  HTML Web Storage\n\
  HTML Web Workers\n\
  HTML SSE',
  },

  {
    idUser: '1',
    title: 'HTML DOM',
    section: 'Front-end',
    linkHref: 'https://www.w3.org/TR/DOM-Level-1/introduction.html',
    tooltips:
      '\
  The Document Object Model (DOM) \n\
  is an application programming interface (API) for HTML and XML documents.\n\
  It defines the logical structure of documents and the way a document is accessed and manipulated.\n\n\
  Browser BOM\n\
  Window\n\
  Navigator\n\
  Screen\n\
  History\n\
  Location \n\n\
  HTML DOM\n\
  DOM Document \n\
  DOM Elements\n\
  DOM Attributes\n\
  DOM Events\n\
  DOM Style',
  },

  {
    idUser: '1',
    title: 'JavaScript',
    section: 'Front-end',
    linkHref:
      'https://www.ecma-international.org/publications/standards/Stnindex.htm',
    tooltips:
      '\
  JS Statements\n\
  JS Comments\n\
  JS Variables\n\
  JS Operators\n\
  JS Arithmetic\n\
  JS Assignment\n\
  JS Data Types\n\
  JS Functions\n\
  JS Objects\n\
  JS Scope\n\
  JS Events\n\
  JS Strings\n\
  JS String Methods\n\
  JS Numbers\n\
  JS Number Methods\n\
  JS Math\n\
  JS Random\n\
  JS Dates\n\
  JS Date Formats\n\
  JS Date Methods\n\
  JS Arrays\n\
  JS Array Methods\n\
  JS Array Sort\n\
  JS Booleans\n\
  JS Comparisons\n\
  JS Conditions\n\
  JS Switch\n\
  JS Loop For\n\
  JS Loop While\n\
  JS Break\n\
  JS Type Conversion\n\
  JS Bitwise\n\
  JS RegExp\n\
  JS Errors\n\
  JS Debugging\n\
  JS Hoisting\n\
  JS Strict Mode\n\
  JS Style Guide\n\
  JS Best Practices\n\
  JS Mistakes\n\
  JS Performance\n\
  JS Reserved Words\n\
  JS Versions\n\
  JS JSON',
  },

  {
    idUser: '1',
    title: 'Jest',
    section: 'Front-end',
    linkHref: 'https://jestjs.io/docs/api',
    tooltips:
      '\
  afterAll(fn, timeout)\n\
  afterEach(fn, timeout)\n\
  beforeAll(fn, timeout)\n\
  beforeEach(fn, timeout)\n\
  describe(name, fn)\n\
  describe.each(table)(name, fn, timeout)\n\
  describe.only(name, fn)\n\
  describe.only.each(table)(name, fn)\n\
  describe.skip(name, fn)\n\
  describe.skip.each(table)(name, fn)\n\
  test(name, fn, timeout)\n\
  test.concurrent(name, fn, timeout)\n\
  test.concurrent.each(table)(name, fn, timeout)\n\
  test.concurrent.only.each(table)(name, fn)\n\
  test.concurrent.skip.each(table)(name, fn)\n\
  test.each(table)(name, fn, timeout)\n\
  test.failing(name, fn, timeout)\n\
  test.failing.each(name, fn, timeout)\n\
  test.only.failing(name, fn, timeout)\n\
  test.skip.failing(name, fn, timeout)\n\
  test.only(name, fn, timeout)\n\
  test.only.each(table)(name, fn)\n\
  test.skip(name, fn)\n\
  test.skip.each(table)(name, fn)\n\
  test.todo(name)',
  },

  {
    idUser: '1',
    title: 'jQuery',
    section: 'Front-end',
    linkHref: 'https://jquery.com/',
    tooltips:
      '\
  jQuery Effects\n\
  jQuery Hide/Show\n\
  jQuery Fade\n\
  jQuery Slide\n\
  jQuery Animate\n\
  jQuery stop()\n\
  jQuery Callback\n\
  jQuery Chaining\n\
  jQuery HTML\n\
  jQuery Get\n\
  jQuery Set\n\
  jQuery Add\n\
  jQuery Remove\n\
  jQuery CSS Classes\n\
  jQuery css()\n\
  jQuery Dimensions\n\
  jQuery Traversing\n\
  jQuery Ancestors\n\
  jQuery Descendants\n\
  jQuery Siblings\n\
  jQuery Filtering\n\
  jQuery AJAX\n\
  jQuery Load\n\
  jQuery Get/Post\n\
  jQuery Misc\n\
  jQuery noConflict()\n\
  jQuery Filters',
  },

  {
    idUser: '1',
    title: 'jQuery-UI',
    section: 'Front-end',
    linkHref: 'https://jqueryui.com/',
    tooltips:
      '\
  INTERACTIONS\n\
  Draggable\n\
  Droppable\n\
  Resizable\n\
  Selectable\n\
  Sortable\n\
  WIDGETS\n\
  Accordion\n\
  Autocomplete\n\
  Button\n\
  Check box radio\n\
  Controlgroup\n\
  Datepicker\n\
  Dialog\n\
  Menu\n\
  Progressbar\n\
  Selectmenu\n\
  Slider\n\
  Spinner\n\
  Tabs\n\
  Tooltip\n\
  EFFECTS\n\
  Add Class\n\
  Color Animation\n\
  Easing\n\
  Effect\n\
  Hide\n\
  Remove Class\n\
  Show\n\
  Switch Class\n\
  Toggle\n\
  Toggle Class\n\
  UTILITIES\n\
  Position\n\
  Widget Factory',
  },

  {
    idUser: '1',
    title: 'JS Frameworks',
    section: 'Front-end',
    linkHref: '',
    tooltips:
      '\
  AMP\n\
  AngularJS\n\
  Bootstrap\n\
  jQuery\n\
  jQuery-UI\n\
  Less\n\
  Lodash\n\
  Material Design\n\
  Moment\n\
  Normalizr\n\
  ReactJS\n\
  React native\n\
  React-router\n\
  Redux\n\
  Semantic-ui-react',
  },

  {
    idUser: '1',
    title: 'JSONP',
    section: 'Front-end',
    linkHref: 'https://en.wikipedia.org/wiki/JSONP',
    tooltips:
      '\
  JSONP works by constructing a “script” element (either in HTML markup or\n\
  inserted into the DOM via JavaScript),\n\
  which requests to a remote data service location. The response is a javascript\n\
  loaded on to your browser with name of the pre-defined function along with parameter\n\
  being passed that is tht JSON data being requested. When the script executes,\n\
  the function is called along with JSON data, allowing the requesting page to receive and process the data.',
  },

  {
    idUser: '1',
    title: 'JWT',
    section: 'Front-end',
    linkHref: 'https://jwt.io/',
    tooltips:
      '\
  JSON Web Tokens are an open, industry standard RFC 7519 method for\n\
  representing claims securely between two parties.\n\
  ',
  },

  {
    idUser: '1',
    title: 'Less',
    section: 'Front-end',
    linkHref: 'https://lesscss.org/functions/',
    tooltips:
      '\
  As an extension to CSS, Less \n\
  is not only backwards compatible with CSS,\n\
  but the extra features it adds use existing CSS syntax.\n\
  This makes learning Less a breeze, and if in doubt,\n\
  lets you fall back to vanilla CSS.',
  },

  {
    idUser: '1',
    title: 'Lodash',
    section: 'Front-end',
    linkHref: 'https://lodash.com/docs/',
    tooltips:
      '\
  Array\n\
  Collection\n\
  Date\n\
  Function\n\
  Lang\n\
  Util',
  },
  {
    idUser: '1',
    title: 'Material Design',
    section: 'Front-end',
    linkHref: 'https://material.io/',
    tooltips:
      '\
  Tools: COLOR TOOL\n\
  \n\
  Material Design is a unified system \n\
  that combines theory, resources, and tools\n\
  for crafting digital experiences.',
  },

  {
    idUser: '1',
    title: 'Microformats/Schema.org',
    section: 'Front-end',
    linkHref: 'https://schema.org/',
    tooltips:
      '\
  Schema.org is a joint effort, in the spirit of sitemaps.org, \n\
  to improve the web by creating a structured data markup schema \n\
  supported by major search engines. \n\
  On-page markup helps search engines understand \n\
  the information on web pages and provide richer search results. \n\
  A shared markup vocabulary makes easier for webmasters \n\
  to decide on a markup schema and get the maximum benefit for their efforts. \n\
  Search engines want to make it easier for people to find relevant information on the web. \n\
  Markup can also enable new tools and applications that make use of the structure.',
  },

  {
    idUser: '1',
    title: 'Mocha',
    section: 'Front-end',
    linkHref: 'https://mochajs.org/',
    tooltips:
      '\
  Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, \n\
  making asynchronous testing simple and fun. Mocha tests run serially, \n\
  allowing for flexible and accurate reporting, \n\
  while mapping uncaught exceptions to the correct test cases.\n\n\
  FEATURES\n\
  browser support\n\
  simple async support, including promises\n\
  test coverage reporting\n\
  string diff support\n\
  javascript API for running tests\n\
  proper exit status for CI support etc\n\
  auto-detects and disables coloring for non-ttys\n\
  maps uncaught exceptions to the correct test case\n\
  async test timeout support\n\
  test retry support\n\
  test-specific timeouts\n\
  growl notification support\n\
  reports test durations\n\
  highlights slow tests\n\
  file watcher support\n\
  global variable leak detection\n\
  optionally run tests that match a regexp\n\
  auto-exit to prevent “hanging” with an active loop\n\
  easily meta-generate suites & test-cases\n\
  mocha.opts file support\n\
  clickable suite titles to filter test execution\n\
  node debugger support\n\
  detects multiple calls to done()\n\
  use any assertion library you want\n\
  extensible reporting, bundled with 9+ reporters\n\
  extensible test DSLs or “interfaces”\n\
  before, after, before each, after each hooks\n\
  arbitrary transpiler support (coffee-script etc)\n\
  TextMate bundle',
  },

  {
    idUser: '1',
    title: 'MVC',
    section: 'Front-end',
    linkHref:
      'https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller',
    tooltips:
      "\
  Components\n\
  MODEL expresses the application's behavior in terms of the problem domain, independent of the user interface.\
  It directly manages the data, logic and rules of the application.\n\
  VIEW can be any output representation of information, such as a chart or a diagram.\
  Multiple views of the same information are possible, such as a bar chart for management and a tabular view for accountants.\n\
  CONTROLLER accepts input and converts it to commands for the model or view.\n\
  \n\
  Interactions\n\
  MODEL stores data that is retrieved according to commands from the controller and displayed in the view.\n\
  VIEW generates new output to the user based on changes in the model.\n\
  CONTROLLER can send commands to the model to update the model's state (e.g., editing a document). \
  It can also send commands to its associated view to change the view's presentation of the model \
  (e.g., scrolling through a document, movement of document).",
  },

  {
    idUser: '1',
    title: 'OAuth',
    section: 'Front-end',
    linkHref: 'https://en.wikipedia.org/wiki/OAuth',
    tooltips:
      '\
  OAuth (Open Authorization) is an open standard for access delegation,\n\
  commonly used as a way for Internet users to grant websites or applications access\n\
  to their information on other websites but without giving them the passwords.\n\
  This mechanism is used by companies such as Google, Facebook, Twitter, Amazon, Microsoft and\n\
  to permit the users to share information about their accounts with third-party\n\
  applications or websites.\n\
  ',
  },

  {
    idUser: '1',
    title: 'ReactJS',
    section: 'Front-end',
    linkHref: 'https://facebook.github.io/react/',
    tooltips:
      "\
* React Component API: The React Component API is the core of the React library and provides a way to create reusable UI components. The API includes methods for defining a component's state, props, and lifecycle methods, as well as the render() method, which defines the component's HTML output.\n\
* React DOM API: The React DOM API is used to manipulate the Document Object Model (DOM) of a web page. It provides a set of methods that can be used to create, update, and delete HTML elements, as well as to handle events and manage the state of the user interface.\n\
* React Router API: The React Router API is a library that provides a way to manage routing and navigation in a React application. It includes methods for defining routes, navigating between pages, and passing data between components.\n\
* React Redux API: The React Redux API is a library that provides a way to manage the state of a React application. It includes methods for defining and updating the application state, as well as for handling asynchronous data fetching and updating.\n\
* React Hooks API: The React Hooks API is a way to add state and lifecycle methods to functional components. It provides a set of built-in hooks that can be used to manage state, perform side effects, and respond to user events.\n\
\n\
- React Functional Components\n\
- React Class Components\n\
- Rendering Elements\n\
- Components and Props\n\
- State and Lifecycle\n\
- Handling Events\n\
- Conditional Rendering\n\
- Lists and Keys\n\
- Forms\n\
- Lifting State Up\n\
- Composition vs Inheritance",
  },

  {
    idUser: '1',
    title: 'React Hooks',
    section: 'Front-end',
    linkHref: 'https://react.dev/reference/react',
    tooltips:
      '\
- useState: allows a functional component to have stateful data.\n\
- useEffect: allows a functional component to perform side effects like fetching data from APIs, manipulating the DOM, or - interacting with the browser.\n\
- useContext: allows a functional component to consume data from a parent component without having to pass the data through every level of the component tree.\n\
- useReducer: allows a functional component to have a more complex state that requires multiple actions.\n\
useCallback: optimizes the performance of a functional component by memoizing a function so that it is not recreated on every render.\n\
- useMemo: optimizes the performance of a functional component by memoizing a value so that it is not recalculated on every render.\n\
- useRef: allows a functional component to access a mutable value that persists across renders.\n\
- useLayoutEffect: similar to useEffect, but runs synchronously after all DOM mutations. Can be used for DOM measurements and other side effects that require synchronous access to the DOM.\n\
- useImperativeHandle: allows a functional component to expose an imperative API to its parent component.\n\
- useDebugValue: allows a custom label to be attached to a hook value for easier debugging in React DevTools.\n\
      ',
  },

  {
    idUser: '1',
    title: 'React Native',
    section: 'Front-end',
    linkHref: 'https://reactnative.dev/',
    tooltips:
      '\
  ActivityIndicator\n\
  Button\n\
  FlatList\n\
  Image\n\
  ImageBackground\n\
  KeyboardAvoidingView\n\
  Modal\n\
  RefreshControl\n\
  SafeAreaView\n\
  ScrollView\n\
  SectionList\n\
  StatusBar\n\
  Switch\n\
  Text\n\
  TextInput\n\
  TouchableHighlight\n\
  TouchableOpacity\n\
  TouchableWithoutFeedback\n\
  View\n\
  VirtualizedList\n\
  Android Components\n\
  DrawerLayoutAndroid\n\
  TouchableNativeFeedback\n\
  iOS Components\n\
  InputAccessoryView\n\n\
  \
  AccessibilityInfo\n\
  Alert\n\
  Animated\n\
  Appearance\n\
  AppRegistry\n\
  AppState\n\
  DevSettings\n\
  Dimensions\n\
  Easing\n\
  InteractionManager\n\
  Keyboard\n\
  LayoutAnimation\n\
  Linking\n\
  PanResponder\n\
  PixelRatio\n\
  Share\n\
  StyleSheet\n\
  Systrace\n\
  Transforms\n\
  Vibration\n\
  Hooks\n\
  useColorScheme\n\
  useWindowDimensions\n\
  Android APIs\n\
  BackHandler\n\
  PermissionsAndroid\n\
  ToastAndroid\n\
  iOS APIs\n\
  ActionSheetIOS\n\
  Settings',
  },

  {
    idUser: '1',
    title: 'React-router',
    section: 'Front-end',
    linkHref: 'https://reacttraining.com/react-router/',
    tooltips:
      '\
  REACT-ROUTER API\n\
  <BrowserRouter>\n\
  <HashRouter>\n\
  <Link>\n\
  <NavLink>\n\
  <Prompt>\n\
  <MemoryRouter>\n\
  <Redirect>\n\
  <Route>\n\
  <Router>\n\
  <StaticRouter>\n\
  <Switch>\n\
  history\n\
  location\n\
  match\n\
  matchPath\n\
  withRouter',
  },
  {
    idUser: '1',
    title: 'Redux',
    section: 'Front-end',
    linkHref: 'https://redux.js.org',
    tooltips:
      '\
  Actions\n\
  Reducers\n\
  Store\n\
  Data Flow\n\
  Async Actions\n\
  Async Flow\n\
  Middleware',
  },

  {
    idUser: '1',
    title: 'Redux-saga',
    section: 'Front-end',
    linkHref: 'https://redux-saga.js.org/',
    tooltips:
      '\
  Middleware API\n\
  createSagaMiddleware(options)\n\
  middleware.run(saga, ...args)\n\
  Effect creators\n\
  take(pattern)\n\
  takeMaybe(pattern)\n\
  take(channel)\n\
  takeMaybe(channel)\n\
  takeEvery(pattern, saga, ...args)\n\
  takeEvery(channel, saga, ...args)\n\
  takeLatest(pattern, saga, ..args)\n\
  takeLatest(channel, saga, ..args)\n\
  takeLeading(pattern, saga, ..args)\n\
  takeLeading(channel, saga, ..args)\n\
  put(action)\n\
  putResolve(action)\n\
  put(channel, action)\n\
  call(fn, ...args)\n\
  call([context, fn], ...args)\n\
  call([context, fnName], ...args)\n\
  call({context, fn}, ...args)\n\
  apply(context, fn, args)\n\
  cps(fn, ...args)\n\
  cps([context, fn], ...args)\n\
  cps({context, fn}, ...args)\n\
  fork(fn, ...args)\n\
  fork([context, fn], ...args)\n\
  fork({context, fn}, ...args)\n\
  spawn(fn, ...args)\n\
  spawn([context, fn], ...args)\n\
  join(task)\n\
  join([...tasks])\n\
  cancel(task)\n\
  cancel([...tasks])\n\
  cancel()\n\
  select(selector, ...args)\n\
  actionChannel(pattern, [buffer])\n\
  flush(channel)\n\
  cancelled()\n\
  setContext(props)\n\
  getContext(prop)\n\
  delay(ms, [val])\n\
  throttle(ms, pattern, saga, ..args)\n\
  throttle(ms, channel, saga, ..args)\n\
  debounce(ms, pattern, saga, ..args)\n\
  debounce(ms, channel, saga, ..args)\n\
  retry(maxTries, delay, fn, ...args)\n\
  Effect combinators\n\
  race(effects)\n\
  race([...effects])\n\
  all([...effects]) (aka parallel effects)\n\
  all(effects)',
  },

  {
    idUser: '1',
    title: 'Regex',
    section: 'Front-end',
    linkHref: 'https://perldoc.perl.org/perlre.html',
    tooltips:
      '\
  Modifiers\n\
  Regular Expressions\n\
  Quoting metacharacters\n\
  Extended Patterns\n\
  Backtracking\n\
  Special Backtracking Control Verbs\n\
  \\1 and $1\n\
  Repeated Patterns Matching a Zero-length Substring',
  },

  {
    idUser: '1',
    title: 'Responsive Design',
    section: 'Front-end',
    linkHref: 'https://bootstrapdocs.com/',
    tooltips:
      '\
  Responsive Web Design makes your web page \n\
  look good on all devices (desktops, tablets, and phones).\n\
  \n\
  Responsive Web Design is about using HTML and CSS to\n\
  resize, hide, shrink, enlarge, or move the content \n\
  to make it look good on any screen',
  },

  {
    idUser: '1',
    title: 'Semantic-UI-React',
    section: 'Front-end',
    linkHref: 'https://react.semantic-ui.com/introduction',
    tooltips:
      '\
  Semantic UI React is the official React integration for Semantic UI:\n\
  Elements\n\
  Collections\n\
  Views\n\
  Modules\n\
  Behaviors\n\
  Addons\n\
  ',
  },

  {
    idUser: '1',
    title: 'Seo',
    section: 'Front-end',
    linkHref: 'https://support.google.com/webmasters/answer/35769?hl=en',
    tooltips:
      '\
  Submitting to Search Engines\n\
  Search Appearance\n\
  Structured Data\n\
  Rich Cards\n\
  Data Highlighter\n\
  HTML Improvements\n\
  Accelerated Mobile Pages\n\
  Search Traffic\n\
  Search Analytics\n\
  Links to Your Site\n\
  Internal Links\n\
  Manual Actions\n\
  International Targeting\n\
  Mobile Usability\n\
  Search Index\n\
  Index Status\n\
  Blocked Resources\n\
  Remove URLs\n\
  Crawl\n\
  Crawl Errors\n\
  Crawl Stats\n\
  Fetch as Google\n\
  robots.txt Tester\n\
  Sitemaps\n\
  URL Parameters\n\
  Security Issues\n\
  Web Tools',
  },
  {
    idUser: '1',
    title: 'Session',
    section: 'Front-end',
    linkHref: 'https://php.net/manual/en/features.sessions.php',
    tooltips:
      '\
  Session support consists of a way \n\
  to preserve certain data across subsequent accesses.\n\
  This enables you to build more customized applications \n\
  and increase the appeal of your web site.',
  },

  {
    idUser: '1',
    title: 'SPA',
    section: 'Front-end',
    linkHref: 'https://en.wikipedia.org/wiki/Single-page_application',
    tooltips:
      '\
  A single-page application (SPA) is a web application or web site that\n\
  interacts with the user by dynamically rewriting the current page \n\
  rather than loading entire new pages from a server.\n\
  Interaction with the single page application often involves \n\
  dynamic communication with the web server behind the scenes.',
  },

  {
    idUser: '1',
    title: 'SSO',
    section: 'Front-end',
    linkHref:
      'https://www.techtarget.com/searchsecurity/definition/single-sign-on',
    tooltips:
      '\
Single sign-on (SSO) is a session and user authentication service that permits a user to use one set of login credentials -- for example, a username and password -- to access multiple applications.\n\
\n\
SSO services use protocols:\n\
* In a Kerberos-based setup, once user credentials are provided, a ticket-granting ticket (TGT) is issued. The TGT fetches service tickets for other applications the user wants to access, without asking the user to reenter credentials.\n\
* SAML is an Extensible Markup Language standard that facilitates the exchange of user authentication and authorization data across secure domains. SAML-based SSO services involve communications among the user, an identity provider that maintains a user directory and a service provider.\n\
* Smart card-based SSO asks an end user to use a card holding the sign-in credentials for the first login. Once the card is used, the user does not have to reenter usernames or passwords. SSO smart cards store either certificates or passwords.\n\
',
  },

  {
    idUser: '1',
    title: 'Typescript',
    section: 'Front-end',
    linkHref: 'https://www.typescriptlang.org/docs/home.html',
    tooltips:
      '\
  Basic Types\n\
  Variable Declarations\n\
  Interfaces\n\
  Classes\n\
  Functions\n\
  Generics\n\
  Enums\n\
  Type Inference\n\
  Type Compatibility\n\
  Advanced Types\n\
  Symbols\n\
  Iterators and Generators\n\
  Modules\n\
  Namespaces\n\
  Namespaces and Modules\n\
  Module Resolution\n\
  Declaration Merging\n\
  JSX\n\
  Decorators\n\
  Mixins\n\
  Triple-Slash Directives\n\
  Type Checking JavaScript Files',
  },

  {
    idUser: '1',
    title: 'Webpack',
    section: 'Front-end',
    linkHref: 'https://webpack.js.org/',
    tooltips:
      '\
  Entry Points\n\
  Output\n\
  Loaders\n\
  Plugins\n\
  Configuration\n\
  Modules\n\
  Module Resolution\n\
  Dependency Graph\n\
  Targets',
  },

  {
    idUser: '1',
    title: 'Apollo',
    section: 'Back-end',
    linkHref: 'https://www.apollographql.com/docs/',
    tooltips:
      '\
  Apollo Server\n\
  Apollo Client\n\
  iOS and Android clients\n\
  Apollo CLI\n\
  Cloud services\n\
  Client registry\n\
  Operation registry\n\
  Trace warehouse',
  },

  {
    idUser: '1',
    title: 'ExpressJS',
    section: 'Back-end',
    linkHref: 'https://expressjs.com/en/4x/api.html',
    tooltips:
      '\
  Express()\n\
  Methods\n\
  express.json()\n\
  express.static()\n\
  express.Router()\n\
  express.urlencoded()\n\
  Application\n\
  Properties\n\
  app.locals\n\
  app.mountpath\n\
  Events\n\
  mount\n\
  Methods\n\
  app.all()\n\
  app.delete()\n\
  app.disable()\n\
  app.disabled()\n\
  app.enable()\n\
  app.enabled()\n\
  app.engine()\n\
  app.get()\n\
  app.get()\n\
  app.listen()\n\
  app.METHOD()\n\
  app.param()\n\
  app.path()\n\
  app.post()\n\
  app.put()\n\
  app.render()\n\
  app.route()\n\
  app.set()\n\
  app.use()\n\
  Request\n\
  Properties\n\
  req.app\n\
  req.baseUrl\n\
  req.body\n\
  req.cookies\n\
  req.fresh\n\
  req.hostname\n\
  req.ip\n\
  req.ips\n\
  req.method\n\
  req.originalUrl\n\
  req.params\n\
  req.path\n\
  req.protocol\n\
  req.query\n\
  req.route\n\
  req.secure\n\
  req.signedCookies\n\
  req.stale\n\
  req.subdomains\n\
  req.xhr\n\
  Methods\n\
  req.accepts()\n\
  req.acceptsCharsets()\n\
  req.acceptsEncodings()\n\
  req.acceptsLanguages()\n\
  req.get()\n\
  req.is()\n\
  req.param()\n\
  req.range()\n\
  Response\n\
  Properties\n\
  res.app\n\
  res.headersSent\n\
  res.locals\n\
  Methods\n\
  res.append()\n\
  res.attachment()\n\
  res.cookie()\n\
  res.clearCookie()\n\
  res.download()\n\
  res.end()\n\
  res.format()\n\
  res.get()\n\
  res.json()\n\
  res.jsonp()\n\
  res.links()\n\
  res.location()\n\
  res.redirect()\n\
  res.render()\n\
  res.send()\n\
  res.sendFile()\n\
  res.sendStatus()\n\
  res.set()\n\
  res.status()\n\
  res.type()\n\
  res.vary()\n\
  Router\n\
  Methods\n\
  router.all()\n\
  router.METHOD()\n\
  router.param()\n\
  router.route()\n\
  router.use()\n\
  ',
  },

  {
    idUser: '1',
    title: 'Graphql',
    section: 'Back-end',
    linkHref: 'https://spec.graphql.org/draft/',
    tooltips:
      '\
GraphQL is a query language and runtime for APIs with functional notation\n\
\n\
✶ Schema:\n   A GraphQL schema defines the types and fields that can be queried on an API. It serves as a contract between the server and the client, specifying what data can be requested and what form it will be returned in.\n\
✶ Query:\n   A GraphQL query is a request for data made by a client to a server. It defines the data that the client wants to retrieve and how that data should be structured.\n\
✶ Mutation:\n   A GraphQL mutation is a request that changes data on the server. It is similar to a query in structure, but is used to perform operations such as creating, updating or deleting data.\n\
✶ Resolver:\n   A resolver is a function that determines how data is retrieved or modified in response to a GraphQL query or mutation. It specifies how to resolve the data associated with a particular field in the schema.\n\
✶ Type:\n   A type in GraphQL represents a group of related data, such as a user, a post, or a comment. Types are defined in the schema, and each type can have one or more fields that correspond to specific properties of the data.\n\
✶ Directive:\n   A directive in GraphQL is used to modify the behavior of a query or mutation. Directives can be used to conditionally include or exclude fields, apply transformations to the data, or perform other operations.\n\
',
  },

  {
    idUser: '1',
    title: 'Internet Protocols',
    section: 'Back-end',
    linkHref:
      'https://en.wikipedia.org/wiki/List_of_network_protocols_(OSI_model)📩',
    tooltips:
      '\
ARP (Address Resolution Protocol): Maps a network address (such as an IP address) to a physical address (such as a MAC address).\n\
DHCP (Dynamic Host Configuration Protocol): Dynamically assigns IP addresses to devices on a network.\n\
DNS (Domain Name System): Translates domain names into IP addresses, allowing devices to access websites and other network resources.\n\
FTP (File Transfer Protocol): Used for transferring files between a client and server over a network.\n\
HTTP (Hypertext Transfer Protocol): Used for transferring web content (such as HTML pages) between a client and server over a network.\n\
📩 HTTP long polling: A technique that uses regular HTTP requests to simulate real-time streaming of data from a server to a client.\n\
HTTPS (Hypertext Transfer Protocol Secure): A secure version of HTTP that encrypts data sent between a client and server using SSL/TLS protocols.\n\
ICMP (Internet Control Message Protocol): Used for reporting errors and status information about network connections.\n\
IMAP (Internet Message Access Protocol): Used for accessing and retrieving email messages from a mail server.\n\
IP (Internet Protocol): Provides the basic addressing and routing information for all data transmitted over the internet.\n\
📩 MQTT (Message Queuing Telemetry Transport): A lightweight messaging protocol used for machine-to-machine communication, IoT devices, and mobile applications.\n\
📩 MTProto (Mobile Transport Protocol): A proprietary messaging protocol used by Telegram for secure messaging and media transfer.\n\
POP3 (Post Office Protocol version 3): Used for retrieving email messages from a mail server.\n\
RTP (Real-time Transport Protocol): Used for streaming audio and video over the internet in real-time.\n\
📩 Signal Protocol: An end-to-end encryption protocol used by Signal messaging app and other messaging apps that support it, providing secure messaging and voice/video calls.\n\
SIP (Session Initiation Protocol): Used for establishing and managing multimedia communication sessions, such as voice and video calls, over IP networks.\n\
SMTP (Simple Mail Transfer Protocol): Used for sending email messages between mail servers.\n\
SNMP (Simple Network Management Protocol): Used for managing and monitoring network devices, such as routers and switches.\n\
SSH (Secure Shell): Provides secure remote access to a server over an unsecured network.\n\
TCP (Transmission Control Protocol): Provides reliable and ordered delivery of data between two endpoints over a network.\n\
TLS/SSL (Transport Layer Security/Secure Sockets Layer): Encryption protocols used to secure data sent over the internet.\n\
UDP (User Datagram Protocol): Provides a connectionless and unreliable transport service for sending datagrams over a network.\n\
📩 XMPP (Extensible Messaging and Presence Protocol): An open-source protocol used for instant messaging and presence information, also used by some IoT devices and mobile applications.',
  },

  {
    idUser: '1',
    title: 'JSON',
    section: 'Front-end',
    linkHref: 'https://json-schema.org/',
    tooltips:
      '\
  JSON Objects\n\
  JSON Arrays\n\
  JSON Parse\n\
  JSON Stringify\n\
  JSON PHP\n\
  JSON HTML\n\
  JSON JSONP',
  },

  {
    idUser: '1',
    title: 'LAMP',
    section: 'Back-end',
    linkHref: 'https://en.wikipedia.org/wiki/LAMP_(software_bundle)',
    tooltips:
      '\
  Linux operating system (Ubuntu),\n\
  Apache HTTP Server,\n\
  MySQL relational database,\n\
  PHP programming language',
  },

  {
    idUser: '1',
    title: 'MERN',
    section: 'Back-end',
    linkHref:
      'https://medium.com/javascript-in-plain-english/full-stack-mongodb-react-node-js-express-js-in-one-simple-app-6cc8ed6de274',
    tooltips:
      '\
  MongoDB\n\
  ExpressJS\n\
  ReactJS\n\
  NodeJS',
  },

  {
    idUser: '1',
    title: 'MongoDB',
    section: 'Back-end',
    linkHref: 'https://www.mysql.com/',
    tooltips:
      '\
  MongoDB CRUD Operations\n\
  Create Operations\n\
  Read Operations\n\
  Update Operations\n\
  Delete Operations\n\
  Bulk Write',
  },

  {
    idUser: '1',
    title: 'MySQL',
    section: 'Back-end',
    linkHref: 'https://www.mysql.com/',
    tooltips:
      '\
  MySQL Database\n\
  MySQL Connect\n\
  MySQL Create DB\n\
  MySQL Create Table\n\
  MySQL Insert Data\n\
  MySQL Get Last ID\n\
  MySQL Insert Multiple\n\
  MySQL Prepared\n\
  MySQL Select Data\n\
  MySQL Delete Data\n\
  MySQL Update Data\n\
  MySQL Limit Data',
  },

  {
    idUser: '1',
    title: 'NestJS',
    section: 'Back-end',
    linkHref: 'https://docs.nestjs.com/',
    tooltips:
      '\
  Custom providers\n\
  Asynchronous providers\n\
  Dynamic modules\n\
  Injection scopes\n\
  Circular dependency\n\
  Module reference\n\
  Execution context\n\
  Lifecycle events\n\
  Platform agnosticism\n\
  Testing\n\
        ',
  },

  {
    idUser: '1',
    title: 'Node.js',
    section: 'Back-end',
    linkHref: 'https://nodejs.org/en/',
    tooltips:
      '\
Architecture:\n\
* Event-driven: Node.js is event-driven, which means that it uses an asynchronous, non-blocking I/O model that allows it to handle large numbers of concurrent connections without getting bogged down by slow I/O operations.\n\
* Single-threaded: Node.js is single-threaded, which means that it runs on a single thread of execution. However, it uses an event loop that allows it to process multiple I/O operations concurrently, making it highly efficient.\n\
* Cross-platform: Node.js is cross-platform, which means that it can run on a variety of operating systems, including Windows, macOS, and Linux.\n\
* NPM: Node.js comes with a package manager called NPM (Node Package Manager), which allows developers to easily install and manage third-party packages and modules.\n\
\n\
Modules:\n\
- Asynchronous programming: Node.js is built around an event-driven, non-blocking I/O model, which means that you need to be comfortable with writing asynchronous code using callbacks, promises, or async/await.\n\
- Node Package Manager (npm): npm is a package manager for Node.js modules that makes it easy to install and manage dependencies.\n\
- HTTP and HTTPS modules: Node.js includes built-in modules for handling HTTP and HTTPS requests and responses.\n\
- File system module: The file system module provides methods for working with the file system on your computer, such as creating, reading, and writing files.\n\
- Streams: Streams allow you to efficiently process large amounts of data in small chunks, rather than loading everything into memory at once.\n\
- Event emitters: Node.js uses the EventEmitter class to handle events and event listeners.\n\
- Error handling: Error handling is important in Node.js because of the asynchronous nature of the platform. You should be familiar with techniques for handling errors in callback functions and Promise chains.\n\
- Child processes: Node.js allows you to spawn child processes to run external commands or scripts.\n\
- Debugging tools: Node.js comes with built-in debugging tools like the Node Inspector, which you can use to debug your applications.\n\
- CommonJS modules: Node.js uses the CommonJS module system to manage dependencies between modules in your application.\n\
',
  },

  {
    idUser: '1',
    title: 'Php',
    section: 'Back-end',
    linkHref: 'https://php.net/manual/en/langref.php',
    tooltips:
      '\
  PHP General\n\
  PHP Syntax\n\
  PHP Variables\n\
  PHP Echo / Print\n\
  PHP Data Types\n\
  PHP Strings\n\
  PHP Constants\n\
  PHP Operators\n\
  PHP If...Else...Elseif\n\
  PHP Switch\n\
  PHP While Loops\n\
  PHP For Loops\n\
  PHP Functions\n\
  PHP Arrays\n\
  PHP Sorting Arrays\n\
  PHP Superglobals\n\
  PHP Forms\n\
  PHP Form Handling\n\
  PHP Form Validation\n\
  PHP Form Required\n\
  PHP Form URL/E-mail\n\
  PHP Form Complete\n\
  PHP Advanced\n\
  PHP Arrays Multi\n\
  PHP Date and Time\n\
  PHP Include\n\
  PHP File Handling\n\
  PHP File Open/Read\n\
  PHP File Create/Write\n\
  PHP File Upload\n\
  PHP Cookies\n\
  PHP Sessions\n\
  PHP Filters\n\
  PHP Filters Advanced\n\
  PHP Error Handling\n\
  PHP Exception\n\
  PHP - XML\n\
  PHP XML Parsers\n\
  PHP SimpleXML Parser\n\
  PHP SimpleXML - Get\n\
  PHP XML Expat\n\
  PHP XML DOM',
  },

  {
    idUser: '1',
    title: 'Regex',
    section: 'Back-end',
    linkHref:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp',
    tooltips:
      '\
  pattern: The text of the regular expression.\n\
  flags: If specified, flags can have any combination of the following values:\n\
  g - global match; find all matches rather than stopping after the first match\n\
  i - ignore case\n\
  m - multiline; treat beginning and end characters (^ and $) as working over multiple lines\n\
  u - unicode; treat pattern as a sequence of unicode code points\n\
  y - sticky; matches only from the index indicated by the lastIndex property of this regular expression in the target string\n\n\
  Syntax structure:\n\
  Character Classes\n\
  Character Sets\n\
  Boundaries\n\
  Alternation\n\
  Grouping and back references\n\
  Quantifiers\n\
  Assertions',
  },

  {
    idUser: '1',
    title: 'RESTful-API',
    section: 'Back-end',
    linkHref: 'https://www.restapitutorial.com/lessons/whatisrest.html',
    tooltips:
      '\
REpresentational\n\
State\n\
Transfer\n\
is a constraints and architectural style and allows for interaction with RESTful web services.\n\
\n\
The six constraints for REST architectual style:\n\
1. Uniform Interface\n\
2. Stateless\n\
3. Cacheable\n\
4. Client-Server\n\
5. Layered System\n\
6. Code on Demand (optional)\n\
\n\
Parts:\n\
Resources (URIs),\n\
HTTP methods (GET, PUT, POST, DELETE),\n\
HTTP headers,\n\
Query parameters,\n\
Status codes',
  },

  {
    idUser: '1',
    title: 'Routing',
    section: 'Back-end',
    linkHref: '',
    tooltips:
      'Routing provides site users with the following:\n\
  Displaying different content depending on the URL\n\
  Constructing links to routes and go to routes programmatically\n\
  Bookmarking - Users can bookmark URLs in their web browser to save content they want to come back to later.\n\
  Sharing - Users can share content with others by sending a link to a certain page.\n\
  Navigation - URLs are used to drive the web browser’s back/forward functions.',
  },

  {
    idUser: '1',
    title: 'Seo',
    section: 'Back-end',
    linkHref:
      'https://www.searchenginejournal.com/200-parameters-in-google-algorithm/15457/',
    tooltips:
      '\
  Domain factors\n\
  Server-side factors\n\
  Architecture factors\n\
  Content factors\n\
  Internal Cross Linking factors\n\
  Website factors\n\
  Page-specific factors\n\
  Keywords usage factors\n\
  Outbound links factors\n\
  Backlink profile factors\n\
  Visitor Profile and Behavior\n\
  Penalties, Filters and Manipulation\n\
  More Factors',
  },

  {
    idUser: '1',
    title: 'Session',
    section: 'Back-end',
    linkHref: 'https://php.net/manual/en/features.sessions.php',
    tooltips:
      '\
  Session stores user information to be used across multiple pages (e.g. username, favorite color, etc).\n\
  By default, session variables last until the user closes the browser. Mehods:\n\
  Start a PHP Session\n\
  Get PHP Session Variable Values\n\
  Modify a PHP Session Variable\n\
  Destroy a PHP Session',
  },

  {
    idUser: '1',
    title: 'Sql',
    section: 'Back-end',
    linkHref:
      'https://docs.oracle.com/cd/B28359_01/server.111/b28286/intro002.htm#SQLRF50928',
    tooltips:
      '\
  SQL General\n\
  SQL Syntax\n\
  SQL Select\n\
  SQL Select Distinct\n\
  SQL Where\n\
  SQL And, Or, Not\n\
  SQL Order By\n\
  SQL Insert Into\n\
  SQL Null Values\n\
  SQL Update\n\
  SQL Delete\n\
  SQL Select Top\n\
  SQL Min and Max\n\
  SQL Count, Avg, Sum\n\
  SQL Like\n\
  SQL Wildcards\n\
  SQL In\n\
  SQL Between\n\
  SQL Aliases\n\
  SQL Joins\n\
  SQL Inner Join\n\
  SQL Left Join\n\
  SQL Right Join\n\
  SQL Full Join\n\
  SQL Self Join\n\
  SQL Union\n\
  SQL Group By\n\
  SQL Having\n\
  SQL Exists\n\
  SQL Any, All\n\
  SQL Select Into\n\
  SQL Insert Into Select\n\
  SQL Null Functions\n\
  SQL Comments\n\
  SQL Database\n\
  SQL Create DB\n\
  SQL Drop DB\n\
  SQL Create Table\n\
  SQL Drop Table\n\
  SQL Alter Table\n\
  SQL Constraints\n\
  SQL Not Null\n\
  SQL Unique\n\
  SQL Primary Key\n\
  SQL Foreign Key\n\
  SQL Check\n\
  SQL Default\n\
  SQL Index\n\
  SQL Auto Increment\n\
  SQL Dates\n\
  SQL Views\n\
  SQL Injection\n\
  SQL Hosting\n\
  SQL References\n\
  MySQL Functions\n\
  SQL Server Functions\n\
  MS Access Functions\n\
  Oracle Functions\n\
  SQL Operators\n\
  SQL Data Types',
  },

  {
    idUser: '1',
    title: 'Swagger-OpenAPI',
    section: 'Back-end',
    linkHref: 'https://swagger.io/docs/specification/about/',
    tooltips:
      '\
  API Server and Base Path\n\
  Media Types\n\
  Paths and Operations\n\
  Describing Parameters\n\
  Parameter Serialization\n\
  Describing Request Body\n\
  File Upload\n\
  Multipart Requests\n\
  Describing Responses\n\
  Data Models (Schemas)\n\
  Data Types\n\
  Enums\n\
  Dictionaries and Maps\n\
  oneOf, anyOf, allOf, not\n\
  Inheritance and Polymorphism\n\
  Representing XML\n\
  JSON Schema Keywords\n\
  Adding Examples\n\
  Authentication\n\
  Basic Authentication\n\
  API Keys\n\
  Bearer Authentication\n\
  OAuth 2.0\n\
  OpenID Connect Discovery\n\
  Cookie Authentication\n\
  Links\n\
  Callbacks\n\
  Components\n\
  Using $ref\n\
  API General Info\n\
  Grouping Operations With Tags\n\
  OpenAPI Extensions',
  },

  {
    idUser: '1',
    title: 'Telegram-bot',
    section: 'Back-end',
    linkHref: 'https://telegram-bot-sdk.readme.io/docs/commands-system',
    tooltips:
      '\
  Fetures and usage cases\n\
  Get customized notifications and news. \n\
  Integrate with other services. \n\
  Accept payments from Telegram users. \n\
  Create custom tools. \n\
  Build single- and multiplayer games. \n\
  Build social services. \n\
  Do virtually anything else.',
  },

  {
    idUser: '1',
    title: 'Ubuntu',
    section: 'Back-end',
    linkHref: 'https://www.ubuntu.com/',
    tooltips:
      '\
  Install with GParted\n\
  Change default loading system on systemd\n\
  Set up Aptitude, Synaptic package manager, Wine\n\
  Install MySQL, apache2, PHP, phpmyadmin, Python\n\
  Enable SSH via OpenSSH\n\
  Host multiple Websites on Apache2\n\
  Enable mod_rewrite on Apache2\n\
  Specify A Custom php.ini For A Web Site\n\
  Install Git\n\
  Change privileges for folders\n\
  Install NodeJS\n\
  Install Virtual Box, pm2, Docker\n\
  ',
  },

  {
    idUser: '1',
    title: 'Web Analytics',
    section: 'Front-end',
    linkHref: 'https://www.google.com/analytics/',
    tooltips:
      '\
  Splunk \n\
  New relic \n\
  Google Analytics \n\
  Yandex Analytics\
  ',
  },

  {
    idUser: '1',
    title: 'Xml',
    section: 'Back-end',
    linkHref: 'https://www.w3.org/TR/REC-xml/',
    tooltips:
      '\
  XML General\n\
  XML Tree\n\
  XML Syntax\n\
  XML Elements\n\
  XML Attributes\n\
  XML Namespaces\n\
  XML Display\n\
  XML HttpRequest\n\
  XML Parser\n\
  XML DOM\n\
  XML XPath\n\
  XML XSLT\n\
  XML XQuery\n\
  XML XLink\n\
  XML Validator\n\
  XML DTD\n\
  XML Schema\n\
  XML Server\n\
  XML AJAX\n\
  AJAX XMLHttp\n\
  AJAX Request\n\
  AJAX Response\n\
  AJAX XML File\n\
  AJAX PHP\n\
  AJAX ASP\n\
  AJAX Database\n\
  AJAX Applications\n\
  XML DOM\n\
  DOM Nodes\n\
  DOM Accessing\n\
  DOM Node Info\n\
  DOM Node List\n\
  DOM Traversing\n\
  DOM Navigating\n\
  DOM Get Values\n\
  DOM Change Nodes\n\
  DOM Remove Nodes\n\
  DOM Replace Nodes\n\
  DOM Create Nodes\n\
  DOM Add Nodes\n\
  DOM Clone Nodes',
  },

  {
    idUser: '1',
    title: 'AI & Machine Learning',
    section: 'AI/ ML',
    linkHref: 'https://keras.io/',
    tooltips:
      '\
  ★ To define task in the ML terms \n\
  ★ To build hypothesis (data > outcome) \n\
  ★ To state statistical parameters of accepted results (metrics, confidence interval) \n\
  ★ To pick up data, sources, units \n\
  ★ To chose type and techniques and algorithm \n\
  Data mining types: ✔ clustering/ pattern recognition, ✔ classification, ✔ regression/ forecasting \n\
  Data mining techniques: ● Supervised Learning ● Unsupervised Learning ● Reinforcement Learning \n\
  Data mining types:: On-line learning (Real-time learning), Off-line learning, mini sampling \n\
  ★ To prepare data (input, output) \n\
  Dimensionality reducing \n\
  Data preprocessing (data cleaning, optimizing): dublicates, dummy values, abnormal value, data integrity \n\
  ★ To normalize data \n\
  ★ To sample data sets \n\
  Training Dataset. The sample of data used to fit the model \n\
  Validation Dataset. The sample of data used to evaluate of a model fit while tuning model hyperparameters or online fitting \n\
  Test Dataset. The sample of data used to provide an unbiased evaluation of a final model fit \n\
  ★ To architect layers: input, output, multi-layer, hidden layer \n\
  ★ To set up hyperparameters. For neuro networs: optimises, loss, metrics, quantity of epoches, is shuffling, number votes, model fit acceptance, learning rate, train speed, coefficient of train speed, gradient method, activation function Compressive function: Sigmoid, Hyperbolic tangent \n\
  ★ To process results \n\
  plotting, graphics building \n\
  build tables with models results and metaparameters \n\
  statistic analysis: confidence interval, statistical significance \n\
  \n\
  Mean Median Mode\n\
  Standard Deviation\n\
  Percentile\n\
  Data Distribution\n\
  Normal Data Distribution\n\
  Scatter Plot\n\
  Linear Regression\n\
  Polynomial Regression\n\
  Multiple Regression\n\
  Scale\n\
  Train/Test\n\
  Decision Tree\n\
  ',
  },

  {
    idUser: '1',
    title: 'Algoritms for ML & AI',
    section: 'AI/ ML',
    linkHref:
      'https://www.analyticsvidhya.com/blog/2017/09/common-machine-learning-algorithms/',
    tooltips:
      '\
  \n\
  Types of Machine Learning Algorithms\n\
  ✔ Clustering (unsupervised) is a categorisation of objects into one or more classes without predifined labels\n\
  ✔ Classification (supervised) is to partition n observations into k predifined classes \n\
  ✔ Regression (supervised) is a processes for estimating the relationships between a dependent variable and one or more independent variables \n\
  \n\
  Techniques of Machine Learning Algorithms \n\
  ● Supervised Learning - Y(X1, X2, ...Xn). There are a target / outcome variable (or dependent variable) and a given set of predictors (independent variables)\n\
  ● Unsupervised Learning - There is no any target or outcome variable to predict / estimate. It is used for clustering population in different groups \n\
  ● Reinforcement Learning - The machine is exposed to an environment where it trains itself continually using trial and error.\n\
  \n\
  ★ Linear Regression - (regression) to establish relationship between independent and dependent variables targeting to a linear equation Y= a + b *X \n\
  ★ Simplex algorithm (or simplex method) - to optimize decisiion based on constraints, a popular algorithm for linear programming \n\
  ★ Polynomial Regression - (regression) to establish relationship between independent and dependent variables targeting to a polinomal equation Y = a + b * X + c * X ^ 2 + ...d * X ^ n \n\
  ★ Multiple Regression - (regression) to predict a value based on two or more variables \n\
  ★ Logistic Regression - (classification) to predict the probability of occurrence of an event by fitting data to a logit function \n\
  ★ Decision Tree - (classification) to split the population into two or more homogeneous sets to make as distinct groups as possible \n\
  ★ SVM - (classification) to plot each data item as a point in n-dimensional space and find line (space) of the our classifier \n\
  ★ Naive Bayes - (classification) to consider all of these properties to independently contribute to the probability of the output \n\
  ★ kNN/ k- Nearest Neighbors - (classification/ regression) to store all available cases and classifies new cases by a majority vote of its k neighbors \n\
  ★ K-Means - (classification) to classify a given data set through a certain number of clusters (assume k clusters) that are homogeneous and heterogeneous to peer groups. \n\
  ★ Random Forest - (classification) to interpret observations as votes that "forest" chooses the classification (over all the trees in the forest) \n\
  ★ Dimensionality Reduction Algorithms - to escape high unwanted dimensions and chose meaning dimentions by dimension reduction \n\
  ★ Gradient Boosting algorithms \n\
    * GBM - to ensemble of learning algorithms which combines the prediction of several base estimators (weak or average) \n\
    * XGBoost - to offer support of various objective functions, including regression, classification and ranking \n\
    * LightGBM - to use tree based learning algorithms. It is designed to be distributed \n\
    * CatBoost - to deal with categorical variables without showing the type conversion error, which helps you to focus on tuning your model',
  },

  {
    idUser: '1',
    title: 'Fann',
    section: 'AI/ ML',
    linkHref: 'https://leenissen.dk/fann/wp/',
    tooltips:
      '\
  FANN Artificial Neural Network Library Features:\n\
  Multilayer Artificial Neural Network Library in C\n\
  Backpropagation training (RPROP, Quickprop, Batch, Incremental)\n\
  Evolving topology training which dynamically builds and trains the ANN (Cascade2)\n\
  Easy to use (create, train and run an ANN with just three function calls)\n\
  Fast (up to 150 times faster execution than other libraries)\n\
  Versatile (possible to adjust many parameters and features on-the-fly)\n\
  Well documented (An easy to read introduction article\n\
  Cross-platform \n\
  Several different activation functions implemented (including stepwise linear functions for that extra bit of speed)',
  },

  {
    idUser: '1',
    title: 'Keras',
    section: 'AI/ ML',
    linkHref: 'https://keras.io/api/',
    tooltips:
      '\
  Models API\n\
  Layers API\n\
  Callbacks API\n\
  Data preprocessing\n\
  Optimizers\n\
  Metrics\n\
  Losses\n\
  Built-in small datasets\n\
  Keras Applications\n\
  Utilities\n\
  \n\
  Models API\n\
  The Model class\n\
  The Sequential class\n\
  Model training APIs\n\
  Model saving & serialization APIs\n\
  Layers API\n\
  The base Layer class\n\
  Layer activations\n\
  Layer weight initializers\n\
  Layer weight regularizers\n\
  Layer weight constraints\n\
  Core layers\n\
  Convolution layers\n\
  Pooling layers\n\
  Recurrent layers\n\
  Preprocessing layers\n\
  Normalization layers\n\
  Regularization layers\n\
  Attention layers\n\
  Reshaping layers\n\
  Merging layers\n\
  Locally-connected layers\n\
  Activation layers\n\
  Callbacks API\n\
  Base Callback class\n\
  ModelCheckpoint\n\
  TensorBoard\n\
  EarlyStopping\n\
  LearningRateScheduler\n\
  ReduceLROnPlateau\n\
  RemoteMonitor\n\
  LambdaCallback\n\
  TerminateOnNaN\n\
  CSVLogger\n\
  ProgbarLogger\n\
  Data preprocessing\n\
  Image data preprocessing\n\
  Timeseries data preprocessing\n\
  Text data preprocessing\n\
  Optimizers\n\
  SGD\n\
  RMSprop\n\
  Adam\n\
  Adadelta\n\
  Adagrad\n\
  Adamax\n\
  Nadam\n\
  Ftrl\n\
  Metrics\n\
  Accuracy metrics\n\
  Probabilistic metrics\n\
  Regression metrics\n\
  Classification metrics based on True/False positives & negatives\n\
  Image segmentation metrics\n\
  Hinge metrics for "maximum-margin" classification\n\
  Losses\n\
  Probabilistic losses\n\
  Regression losses\n\
  Hinge losses for "maximum-margin" classification\n\
  Built-in small datasets\n\
  MNIST digits classification dataset\n\
  CIFAR10 small images classification dataset\n\
  CIFAR100 small images classification dataset\n\
  IMDB movie review sentiment classification dataset\n\
  Reuters newswire classification dataset\n\
  Fashion MNIST dataset, an alternative to MNIST\n\
  Boston Housing price regression dataset\n\
  Keras Applications\n\
  Xception\n\
  EfficientNet B0 to B7\n\
  VGG16 and VGG19\n\
  ResNet and ResNetV2\n\
  MobileNet and MobileNetV2\n\
  DenseNet\n\
  NasNetLarge and NasNetMobile\n\
  InceptionV3\n\
  InceptionResNetV2\n\
  Utilities\n\
  Model plotting utilities\n\
  Serialization utilities\n\
  Python & NumPy utilities\n\
  Backend utilities',
  },

  {
    idUser: '1',
    title: 'Matplotlib',
    section: 'AI/ ML',
    linkHref: 'https://matplotlib.org/contents.html',
    tooltips:
      '\
  Pyplot\n\
  Plotting\n\
  Markers\n\
  Line\n\
  Subplots\n\
  Scatter\n\
  Bars\n\
  Histograms\n\
  Pie Charts',
  },

  {
    idUser: '1',
    title: 'NumPy',
    section: 'AI/ ML',
    linkHref: 'https://numpy.org/',
    tooltips:
      '\
  Creating Arrays\n\
  Array Indexing\n\
  Array Slicing\n\
  Data Types\n\
  Copy vs View\n\
  Array Shape\n\
  Array Reshape\n\
  Array Iterating\n\
  Array Join\n\
  Array Split\n\
  Array Search\n\
  Array Sort\n\
  Array Filter\n\
  Random\n\
  ufunc',
  },

  {
    idUser: '1',
    title: 'Pandas',
    section: 'AI/ ML',
    linkHref: 'https://pandas.pydata.org/docs/',
    tooltips:
      '\
  Series\n\
  DataFrames\n\
  Read CSV\n\
  Read JSON\n\
  Analyzing Data\n\
  Cleaning Data\n\
  Correlations\n\
  Plotting',
  },

  {
    idUser: '1',
    title: 'Python',
    section: 'AI/ ML',
    linkHref: 'https://docs.python.org/3/',
    tooltips:
      '\
  Py General\n\
  Comments\n\
  Variables\n\
  Data Types\n\
  Numbers\n\
  Casting\n\
  Strings\n\
  Booleans\n\
  Operators\n\
  Lists\n\
  Tuples\n\
  Sets\n\
  Dictionaries\n\
  If...Else\n\
  While Loops\n\
  For Loops\n\
  Functions\n\
  Lambda\n\
  Arrays\n\
  Classes/Objects\n\
  Inheritance\n\
  Iterators\n\
  Scope\n\
  Modules\n\
  Dates\n\
  Math\n\
  JSON\n\
  RegEx\n\
  PIP\n\
  Try...Except\n\
  User Input\n\
  String Formatting\n\
  Py File Handling\n\
  File Handling\n\
  Read Files\n\
  Write/Create Files\n\
  Delete Files',
  },

  {
    idUser: '1',
    title: 'SciPy',
    section: 'AI/ ML',
    linkHref: 'https://www.scipy.org/docs.html',
    tooltips:
      '\
  Constants\n\
  Optimizers\n\
  Sparse Data\n\
  Graphs\n\
  Spatial Data\n\
  Matlab Arrays\n\
  Interpolation\n\
  Significance Tests',
  },

  {
    idUser: '1',
    title: 'Scikit-Learn',
    section: 'AI/ ML',
    linkHref: 'https://scikit-learn.org/stable/modules/classes.html',
    tooltips:
      '\
  Base classes and utility functions\n\
  Probability Calibration\n\
  Clustering\n\
  Composite Estimators\n\
  Covariance Estimators\n\
  Cross decomposition\n\
  Datasets\n\
  Matrix Decomposition\n\
  Discriminant Analysis\n\
  Dummy estimators\n\
  Ensemble Methods\n\
  Exceptions and warnings\n\
  Experimental\n\
  Feature Extraction\n\
  Feature Selection\n\
  Gaussian Processes\n\
  Impute\n\
  Inspection\n\
  Isotonic regression\n\
  Kernel Approximation\n\
  Kernel Ridge Regression\n\
  Linear Models\n\
  Manifold Learning\n\
  Metrics\n\
  Gaussian Mixture Models\n\
  Model Selection\n\
  Multiclass classification\n\
  Multioutput regression and classification\n\
  Naive Bayes\n\
  Nearest Neighbors\n\
  Neural network models\n\
  Pipeline\n\
  Preprocessing and Normalization\n\
  Random projection\n\
  Semi-Supervised Learning\n\
  Support Vector Machines\n\
  Decision Trees\n\
  Utilities',
  },

  {
    idUser: '1',
    title: 'TensorFlow',
    section: 'AI/ ML',
    linkHref: 'https://www.tensorflow.org/api_docs/python/tf',
    tooltips:
      '\
  Modules\n\
  Classes\n\
  Functions\n\
  Other Members\n\
  \n\
  Modules\n\
  audio module: Public API for tf.audio namespace \n\
  autodiff module: Public API for tf.autodiff namespace \n\
  autograph module: Conversion of plain Python into TensorFlow graph code \n\
  bitwise module: Operations for manipulating the binary representations of integers \n\
  compat module: Compatibility functions \n\
  config module: Public API for tf.config namespace \n\
  data module: tf.data.Dataset API for input pipelines \n\
  debugging module: Public API for tf.debugging namespace \n\
  distribute module: Library for running a computation across multiple devices \n\
  dtypes module: Public API for tf.dtypes namespace \n\
  errors module: Exception types for TensorFlow errors \n\
  estimator module: Estimator: High level tools for working with models \n\
  experimental module: Public API for tf.experimental namespace \n\
  feature_column module: Public API for tf.feature_column namespace \n\
  graph_util module: Helpers to manipulate a tensor graph in python \n\
  image module: Image ops \n\
  initializers module: Keras initializer serialization / deserialization \n\
  io module: Public API for tf.io namespace \n\
  keras module: Implementation of the Keras API meant to be a high-level API for TensorFlow \n\
  linalg module: Operations for linear algebra \n\
  lite module: Public API for tf.lite namespace \n\
  lookup module: Public API for tf.lookup namespace \n\
  losses module: Built-in loss functions \n\
  math module: Math Operations \n\
  metrics module: Built-in metrics \n\
  mixed_precision module: Public API for tf.mixed_precision namespace \n\
  mlir module: Public API for tf.mlir namespace \n\
  nest module: Public API for tf.nest namespace \n\
  nn module: Wrappers for primitive Neural Net (NN) Operations \n\
  optimizers module: Built-in optimizer classes \n\
  profiler module: Public API for tf.profiler namespace \n\
  quantization module: Public API for tf.quantization namespace \n\
  queue module: Public API for tf.queue namespace \n\
  ragged module: Ragged Tensors \n\
  random module: Public API for tf.random namespace \n\
  raw_ops module: Public API for tf.raw_ops namespace \n\
  saved_model module: Public API for tf.saved_model namespace \n\
  sets module: Tensorflow set operations \n\
  signal module: Signal processing operations \n\
  sparse module: Sparse Tensor Representation \n\
  strings module: Operations for working with string Tensors \n\
  summary module: Operations for writing summary data, for use in analysis and visualization \n\
  sysconfig module: System configuration library \n\
  test module: Testing \n\
  tpu module: Ops related to Tensor Processing Units \n\
  train module: Support for training models \n\
  types module: Public TensorFlow type definitions \n\
  version module: Public API for tf.version namespace \n\
  xla module: Public API for tf.xla namespace \n\
  \n\
  Classes\n\
  class AggregationMethod: A class listing aggregation methods used to combine gradients \n\
  class CriticalSection: Critical section \n\
  class DType: Represents the type of the elements in a Tensor \n\
  class DeviceSpec: Represents a (possibly partial) specification for a TensorFlow device \n\
  class GradientTape: Record operations for automatic differentiation \n\
  class Graph: A TensorFlow computation, represented as a dataflow graph \n\
  class IndexedSlices: A sparse representation of a set of tensor slices at given indices \n\
  class IndexedSlicesSpec: Type specification for a tf.IndexedSlices \n\
  class Module: Base neural network module class \n\
  class Operation: Represents a graph node that performs computation on tensors \n\
  class OptionalSpec: Type specification for tf.experimental.Optional \n\
  class RaggedTensor: Represents a ragged tensor \n\
  class RaggedTensorSpec: Type specification for a tf.RaggedTensor \n\
  class RegisterGradient: A decorator for registering the gradient function for an op type \n\
  class SparseTensor: Represents a sparse tensor \n\
  class SparseTensorSpec: Type specification for a tf.sparse.SparseTensor \n\
  class Tensor: A tensor is a multidimensional array of elements\n\
  class TensorArray: Class wrapping dynamic-sized, per-time-step, write-once Tensor arrays \n\
  class TensorArraySpec: Type specification for a tf.TensorArray \n\
  class TensorShape: Represents the shape of a Tensor \n\
  class TensorSpec: Describes a tf.Tensor \n\
  class TypeSpec: Specifies a TensorFlow value type \n\
  class UnconnectedGradients: Controls how gradient computation behaves when y does not depend on x \n\
  class Variable: See the variable guide \n\
  class VariableAggregation: Indicates how a distributed variable will be aggregated \n\
  class VariableSynchronization: Indicates when a distributed variable will be synced \n\
  class constant_initializer: Initializer that generates tensors with constant values \n\
  class name_scope: A context manager for use when defining a Python op \n\
  class ones_initializer: Initializer that generates tensors initialized to 1 \n\
  class random_normal_initializer: Initializer that generates tensors with a normal distribution \n\
  class random_uniform_initializer: Initializer that generates tensors with a uniform distribution \n\
  class zeros_initializer: Initializer that generates tensors initialized to 0 \n\
  \n\
  Functions\n\
  Assert(...): Asserts that the given condition is true \n\
  abs(...): Computes the absolute value of a tensor \n\
  acos(...): Computes acos of x element-wise \n\
  acosh(...): Computes inverse hyperbolic cosine of x element-wise \n\
  add(...): Returns x + y element-wise \n\
  add_n(...): Adds all input tensors element-wise \n\
  argmax(...): Returns the index with the largest value across axes of a tensor \n\
  argmin(...): Returns the index with the smallest value across axes of a tensor \n\
  argsort(...): Returns the indices of a tensor that give its sorted order along an axis \n\
  as_dtype(...): Converts the given type_value to a DType \n\
  as_string(...): Converts each entry in the given tensor to strings \n\
  asin(...): Computes the trignometric inverse sine of x element-wise \n\
  asinh(...): Computes inverse hyperbolic sine of x element-wise \n\
  assert_equal(...): Assert the condition x == y holds element-wise \n\
  assert_greater(...): Assert the condition x > y holds element-wise \n\
  assert_less(...): Assert the condition x < y holds element-wise \n\
  assert_rank(...): Assert that x has rank equal to rank \n\
  atan(...): Computes the trignometric inverse tangent of x element-wise \n\
  atan2(...): Computes arctangent of y/x element-wise, respecting signs of the arguments \n\
  atanh(...): Computes inverse hyperbolic tangent of x element-wise \n\
  batch_to_space(...): BatchToSpace for N-D tensors of type T \n\
  bitcast(...): Bitcasts a tensor from one type to another without copying data \n\
  boolean_mask(...): Apply boolean mask to tensor \n\
  broadcast_dynamic_shape(...): Computes the shape of a broadcast given symbolic shapes \n\
  broadcast_static_shape(...): Computes the shape of a broadcast given known shapes \n\
  broadcast_to(...): Broadcast an array for a compatible shape \n\
  case(...): Create a case operation \n\
  cast(...): Casts a tensor to a new type \n\
  clip_by_global_norm(...): Clips values of multiple tensors by the ratio of the sum of their norms \n\
  clip_by_norm(...): Clips tensor values to a maximum L2-norm \n\
  clip_by_value(...): Clips tensor values to a specified min and max \n\
  complex(...): Converts two real numbers to a complex number \n\
  concat(...): Concatenates tensors along one dimension \n\
  cond(...): Return true_fn() if the predicate pred is true else false_fn() \n\
  constant(...): Creates a constant tensor from a tensor-like object \n\
  control_dependencies(...): Wrapper for Graph.control_dependencies() using the default graph \n\
  convert_to_tensor(...): Converts the given value to a Tensor \n\
  cos(...): Computes cos of x element-wise \n\
  cosh(...): Computes hyperbolic cosine of x element-wise \n\
  cumsum(...): Compute the cumulative sum of the tensor x along axis \n\
  custom_gradient(...): Decorator to define a function with a custom gradient \n\
  device(...): Specifies the device for ops created/executed in this context \n\
  divide(...): Computes Python style division of x by y \n\
  dynamic_partition(...): Partitions data into num_partitions tensors using indices from partitions \n\
  dynamic_stitch(...): Interleave the values from the data tensors into a single tensor \n\
  edit_distance(...): Computes the Levenshtein distance between sequences \n\
  eig(...): Computes the eigen decomposition of a batch of matrices \n\
  eigvals(...): Computes the eigenvalues of one or more matrices \n\
  einsum(...): Tensor contraction over specified indices and outer product \n\
  ensure_shape(...): Updates the shape of a tensor and checks at runtime that the shape holds \n\
  equal(...): Returns the truth value of (x == y) element-wise \n\
  executing_eagerly(...): Checks whether the current thread has eager execution enabled \n\
  exp(...): Computes exponential of x element-wise.  \n\
  expand_dims(...): Returns a tensor with a length 1 axis inserted at index axis \n\
  extract_volume_patches(...): Extract patches from input and put them in the "depth" output dimension. 3D extension of extract_image_patches \n\
  eye(...): Construct an identity matrix, or a batch of matrices \n\
  fill(...): Creates a tensor filled with a scalar value \n\
  fingerprint(...): Generates fingerprint values \n\
  floor(...): Returns element-wise largest integer not greater than x \n\
  foldl(...): foldl on the list of tensors unpacked from elems on dimension 0. (deprecated argument values)\n\
  foldr(...): foldr on the list of tensors unpacked from elems on dimension 0. (deprecated argument values)\n\
  function(...): Compiles a function into a callable TensorFlow graph \n\
  gather(...): Gather slices from params axis axis according to indices \n\
  gather_nd(...): Gather slices from params into a Tensor with shape specified by indices \n\
  get_logger(...): Return TF logger instance \n\
  get_static_value(...): Returns the constant value of the given tensor, if efficiently calculable \n\
  grad_pass_through(...): Creates a grad-pass-through op with the forward behavior provided in f \n\
  gradients(...): Constructs symbolic derivatives of sum of ys w.r.t. x in xs \n\
  greater(...): Returns the truth value of (x > y) element-wise \n\
  greater_equal(...): Returns the truth value of (x >= y) element-wise \n\
  group(...): Create an op that groups multiple operations \n\
  guarantee_const(...): Gives a guarantee to the TF runtime that the input tensor is a constant \n\
  hessians(...): Constructs the Hessian of sum of ys with respect to x in xs \n\
  histogram_fixed_width(...): Return histogram of values \n\
  histogram_fixed_width_bins(...): Bins the given values for use in a histogram \n\
  identity(...): Return a Tensor with the same shape and contents as input \n\
  identity_n(...): Returns a list of tensors with the same shapes and contents as the input\n\
  import_graph_def(...): Imports the graph from graph_def into the current default Graph. (deprecated arguments)\n\
  init_scope(...): A context manager that lifts ops out of control-flow scopes and function-building graphs \n\
  inside_function(...): Indicates whether the caller code is executing inside a tf.function \n\
  is_tensor(...): Checks whether x is a TF-native type that can be passed to many TF ops \n\
  less(...): Returns the truth value of (x < y) element-wise \n\
  less_equal(...): Returns the truth value of (x <= y) element-wise \n\
  linspace(...): Generates evenly-spaced values in an interval along a given axis \n\
  load_library(...): Loads a TensorFlow plugin \n\
  load_op_library(...): Loads a TensorFlow plugin, containing custom ops and kernels \n\
  logical_and(...): Logical AND function \n\
  logical_not(...): Returns the truth value of NOT x element-wise \n\
  logical_or(...): Returns the truth value of x OR y element-wise \n\
  make_ndarray(...): Create a numpy ndarray from a tensor \n\
  make_tensor_proto(...): Create a TensorProto \n\
  map_fn(...): Transforms elems by applying fn to each element unstacked on axis 0. (deprecated arguments)\n\
  matmul(...): Multiplies matrix a by matrix b, producing a * b \n\
  matrix_square_root(...): Computes the matrix square root of one or more square matrices:\n\
  maximum(...): Returns the max of x and y (i.e. x > y ? x : y) element-wise \n\
  meshgrid(...): Broadcasts parameters for evaluation on an N-D grid \n\
  minimum(...): Returns the min of x and y (i.e. x < y ? x : y) element-wise \n\
  multiply(...): Returns an element-wise x * y \n\
  negative(...): Computes numerical negative value element-wise \n\
  no_gradient(...): Specifies that ops of type op_type is not differentiable \n\
  no_op(...): Does nothing. Only useful as a placeholder for control edges \n\
  nondifferentiable_batch_function(...): Batches the computation done by the decorated function \n\
  norm(...): Computes the norm of vectors, matrices, and tensors \n\
  not_equal(...): Returns the truth value of (x != y) element-wise \n\
  numpy_function(...): Wraps a python function and uses it as a TensorFlow op \n\
  one_hot(...): Returns a one-hot tensor \n\
  ones(...): Creates a tensor with all elements set to one (1) \n\
  ones_like(...): Creates a tensor of all ones that has the same shape as the input \n\
  pad(...): Pads a tensor \n\
  parallel_stack(...): Stacks a list of rank-R tensors into one rank-(R+1) tensor in parallel \n\
  pow(...): Computes the power of one value to another \n\
  print(...): Print the specified inputs \n\
  py_function(...): Wraps a python function into a TensorFlow op that executes it eagerly \n\
  quantize_and_dequantize_v4(...): Returns the gradient of QuantizeAndDequantizeV4 \n\
  range(...): Creates a sequence of numbers \n\
  rank(...): Returns the rank of a tensor \n\
  realdiv(...): Returns x / y element-wise for real types \n\
  recompute_grad(...): An eager-compatible version of recompute_grad \n\
  reduce_all(...): Computes the "logical and" of elements across dimensions of a tensor \n\
  reduce_any(...): Computes the "logical or" of elements across dimensions of a tensor \n\
  reduce_logsumexp(...): Computes log(sum(exp(elements across dimensions of a tensor))) \n\
  reduce_max(...): Computes the maximum of elements across dimensions of a tensor \n\
  reduce_mean(...): Computes the mean of elements across dimensions of a tensor \n\
  reduce_min(...): Computes the minimum of elements across dimensions of a tensor \n\
  reduce_prod(...): Computes the product of elements across dimensions of a tensor \n\
  reduce_sum(...): Computes the sum of elements across dimensions of a tensor \n\
  register_tensor_conversion_function(...): Registers a function for converting objects of base_type to Tensor \n\
  repeat(...): Repeat elements of input \n\
  required_space_to_batch_paddings(...): Calculate padding required to make block_shape divide input_shape \n\
  reshape(...): Reshapes a tensor \n\
  reverse(...): Reverses specific dimensions of a tensor \n\
  reverse_sequence(...): Reverses variable length slices \n\
  roll(...): Rolls the elements of a tensor along an axis \n\
  round(...): Rounds the values of a tensor to the nearest integer, element-wise \n\
  saturate_cast(...): Performs a safe saturating cast of value to dtype \n\
  scalar_mul(...): Multiplies a scalar times a Tensor or IndexedSlices object \n\
  scan(...): scan on the list of tensors unpacked from elems on dimension 0. (deprecated argument values)\n\
  scatter_nd(...): Scatter updates into a new tensor according to indices \n\
  searchsorted(...): Searches input tensor for values on the innermost dimension \n\
  sequence_mask(...): Returns a mask tensor representing the first N positions of each cell \n\
  shape(...): Returns a tensor containing the shape of the input tensor \n\
  shape_n(...): Returns shape of tensors \n\
  sigmoid(...): Computes sigmoid of x element-wise \n\
  sign(...): Returns an element-wise indication of the sign of a number \n\
  sin(...): Computes sine of x element-wise \n\
  sinh(...): Computes hyperbolic sine of x element-wise \n\
  size(...): Returns the size of a tensor \n\
  slice(...): Extracts a slice from a tensor \n\
  sort(...): Sorts a tensor \n\
  space_to_batch(...): SpaceToBatch for N-D tensors of type T \n\
  space_to_batch_nd(...): SpaceToBatch for N-D tensors of type T \n\
  split(...): Splits a tensor value into a list of sub tensors \n\
  sqrt(...): Computes element-wise square root of the input tensor \n\
  square(...): Computes square of x element-wise \n\
  squeeze(...): Removes dimensions of size 1 from the shape of a tensor \n\
  stack(...): Stacks a list of rank-R tensors into one rank-(R+1) tensor \n\
  stop_gradient(...): Stops gradient computation \n\
  strided_slice(...): Extracts a strided slice of a tensor (generalized Python array indexing) \n\
  subtract(...): Returns x - y element-wise \n\
  switch_case(...): Create a switch/case operation, i.e. an integer-indexed conditional \n\
  tan(...): Computes tan of x element-wise \n\
  tanh(...): Computes hyperbolic tangent of x element-wise \n\
  tensor_scatter_nd_add(...): Adds sparse updates to an existing tensor according to indices \n\
  tensor_scatter_nd_max(...)\n\
  tensor_scatter_nd_min(...)\n\
  tensor_scatter_nd_sub(...): Subtracts sparse updates from an existing tensor according to indices \n\
  tensor_scatter_nd_update(...): "Scatter updates into an existing tensor according to indices \n\
  tensordot(...): Tensor contraction of a and b along specified axes and outer product \n\
  tile(...): Constructs a tensor by tiling a given tensor \n\
  timestamp(...): Provides the time since epoch in seconds \n\
  transpose(...): Transposes a, where a is a Tensor \n\
  truediv(...): Divides x / y elementwise (using Python 3 division operator semantics) \n\
  truncatediv(...): Returns x / y element-wise for integer types \n\
  truncatemod(...): Returns element-wise remainder of division. This emulates C semantics in that\n\
  tuple(...): Group tensors together \n\
  type_spec_from_value(...): Returns a tf.TypeSpec that represents the given value \n\
  unique(...): Finds unique elements in a 1-D tensor \n\
  unique_with_counts(...): Finds unique elements in a 1-D tensor \n\
  unravel_index(...): Converts an array of flat indices into a tuple of coordinate arrays \n\
  unstack(...): Unpacks the given dimension of a rank-R tensor into rank-(R-1) tensors \n\
  variable_creator_scope(...): Scope which defines a variable creation function to be used by variable() \n\
  vectorized_map(...): Parallel map on the list of tensors unpacked from elems on dimension 0 \n\
  where(...): Return the elements where condition is True (multiplexing x and y) \n\
  while_loop(...): Repeat body while the condition cond is true. (deprecated argument values)\n\
  zeros(...): Creates a tensor with all elements set to zero \n\
  zeros_like(...): Creates a tensor with all elements set to zero \n\
  Other Members\n \n\
  version 2.4.0 \n\
  bfloat16 tf.dtypes.DType \n\
  bool tf.dtypes.DType \n\
  complex128 tf.dtypes.DType \n\
  complex64 tf.dtypes.DType \n\
  double tf.dtypes.DType \n\
  float16 tf.dtypes.DType \n\
  float32 tf.dtypes.DType \n\
  float64 tf.dtypes.DType \n\
  half tf.dtypes.DType \n\
  int16 tf.dtypes.DType \n\
  int32 tf.dtypes.DType \n\
  int64 tf.dtypes.DType \n\
  int8 tf.dtypes.DType \n\
  newaxis None \n\
  qint16 tf.dtypes.DType \n\
  qint32 tf.dtypes.DType \n\
  qint8 tf.dtypes.DType \n\
  quint16 tf.dtypes.DType \n\
  quint8 tf.dtypes.DType \n\
  resource tf.dtypes.DType \n\
  string tf.dtypes.DType \n\
  uint16 tf.dtypes.DType \n\
  uint32 tf.dtypes.DType \n\
  uint64 tf.dtypes.DType \n\
  uint8 tf.dtypes.DType \n\
  variant tf.dtypes.DType',
  },
]
