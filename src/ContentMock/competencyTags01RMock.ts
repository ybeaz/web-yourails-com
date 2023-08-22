import { CompetencyTagType } from '../@types/CompetencyTagType'
import { SectionType } from '../@types/SectionType'

export const competencyTags01R: CompetencyTagType[] = [
  {
    idProfile: '1',
    title: 'Agile',
    contentType: SectionType['CompetencyTagType'],
    section: 'Best Practices',
    linkHref:
      'https://www.agilealliance.org/agile101/12-principles-behind-the-agile-manifesto/',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'Automation Tools',
    contentType: SectionType['CompetencyTagType'],
    section: 'Best Practices',
    linkHref: 'https://webpack.js.org/',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'BDD',
    contentType: SectionType['CompetencyTagType'],
    section: 'Best Practices',
    linkHref: 'https://www.agilealliance.org/glossary/bdd',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'CI/CD',
    contentType: SectionType['CompetencyTagType'],
    section: 'Best Practices',
    linkHref: 'https://www.agilealliance.org/glossary/bdd',
    iconLibrary: 'Ionicons',
    iconName: '',
    tooltips: `DevOps tools, implementing pipelines:
    ❧ Jenkins
    ❧ GitHub
    ❧ Bitbucket
    ❧ GitLab
    ❧ CodePipeline
    
Pipelines workflow:
    ✔ Software Build
    ✔ Static Code Analysis
    ✔ Artifact Management
    ✔ Unit Testing
    ✔ Deployment
    ✔ Integration Testing
    ✔ UI (Functional) Testing
    ✔ Security scanning
`,
  },

  {
    idProfile: '1',
    title: 'CLI',
    contentType: SectionType['CompetencyTagType'],
    section: 'Best Practices',
    linkHref: 'https://docs.npmjs.com/cli/npm',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'Data Structures',
    contentType: SectionType['CompetencyTagType'],
    section: 'Best Practices',
    linkHref:
      'https://www.techtarget.com/searchdatamanagement/definition/data-structure',
    iconLibrary: 'Ionicons',
    iconName: 'grid-outline',
    tooltips:
      "Types of data structures:\n\n\
* Arrays: An array is a collection of elements of the same type, arranged in a contiguous block of memory. Elements can be accessed by their index, making it easy to iterate over the array or access specific elements.\n\
* Linked lists: A linked list is a collection of elements, each of which contains a pointer to the next element in the list. Linked lists can be used to implement stacks, queues, and other data structures.\n\
* Stacks: A stack is a collection of elements that supports two main operations: push (add an element to the top of the stack) and pop (remove the top element from the stack).\n\
* Queues: A queue is a collection of elements that supports two main operations: enqueue (add an element to the back of the queue) and dequeue (remove the front element from the queue).\n\
* Trees: A tree is a hierarchical data structure that consists of nodes connected by edges. Each node can have zero or more child nodes, and there is a single root node that is the topmost node in the tree.\n\
* Hash tables: A hash table is a data structure that allows for efficient lookup, insertion, and deletion of key-value pairs. Each key is hashed to an index in an array, and the corresponding value is stored at that index.\n\
* Heap: A heap is a tree-based structure in which each parent node's associated key value is greater than or equal to the key values of any of its children's key values.\n\
* Graph: A graph stores a collection of items in a nonlinear fashion. Graphs are made up of a finite set of nodes, also known as vertices, and lines that connect them, also known as edges. These are useful for representing real-world systems such as computer networks.\n\
* Trie: A trie, also known as a keyword tree, is a data structure that stores strings as data items that can be organized in a visual graph.",
  },

  {
    idProfile: '1',
    title: 'Design Patterns',
    contentType: SectionType['CompetencyTagType'],
    section: 'Best Practices',
    linkHref: 'https://en.wikipedia.org/wiki/Software_design_pattern',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'DevOps',
    contentType: SectionType['CompetencyTagType'],
    section: 'Best Practices',
    linkHref:
      'https://www.digital-management-blog.de/wp-content/uploads/2017/06/devops.jpg',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'Issue-tracking systems',
    contentType: SectionType['CompetencyTagType'],
    section: 'Best Practices',
    linkHref:
      'https://en.wikipedia.org/wiki/Comparison_of_issue-tracking_systems',
    iconLibrary: 'Ionicons',
    iconName: '',
    tooltips:
      '\
JIRA\n\
Redmine\n\
Bugzilla\n\
...',
  },

  {
    idProfile: '1',
    title: 'LLM AI/ML',
    contentType: SectionType['CompetencyTagType'],
    section: 'Best Practices',
    linkHref:
      'https://www.agilealliance.org/agile101/subway-map-to-agile-practices/',
    iconLibrary: 'Ionicons',
    iconName: '',
    tooltips: `
    Large language models
● ChatGPT (OpenAI)
● Copilot (GitHub and OpenAI )
● LaMDA (Google)
● BLOOM (HuggingFace's BigScience team, the Microsoft DeepSpeed team, the NVIDIA Megatron-LM)
● Stable Diffusion (text-to-image model https://github.com/vladmandic/automatic)`,
  },

  {
    idProfile: '1',
    title: 'Kanban',
    contentType: SectionType['CompetencyTagType'],
    section: 'Best Practices',
    linkHref:
      'https://www.agilealliance.org/agile101/subway-map-to-agile-practices/',
    iconLibrary: 'Ionicons',
    iconName: '',
    tooltips:
      '\
1. Visualize work\n\
2. Limit work in process (WIP)\n\
3. Focus on work flow\n\
4. Continuously improve\n\
',
  },

  {
    idProfile: '1',
    title: 'Lints',
    contentType: SectionType['CompetencyTagType'],
    section: 'Best Practices',
    linkHref: '',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'Programming Principles',
    contentType: SectionType['CompetencyTagType'],
    section: 'Best Practices',
    linkHref: 'https://en.wikipedia.org/wiki/Category:Programming_principles',
    iconLibrary: 'Ionicons',
    iconName: '',
    tooltips: `Practival Principles of Programming\n\
★ ASID for reliable transaction processing in database systems:\n\
    - Atomicity: Atomicity guarantees that a transaction is treated as a single indivisible unit of work.\n\
    - Consistency: Consistency ensures that a transaction brings the database from one valid state to another\n\
    - Isolation: Each transaction must be executed as if it were the only transaction executing in the system\n\
    - Durability: Durability ensures that once a transaction is committed, its effects persist if system failures\n\
★ DRY (Don't Repeat Yourself):\n\
    - avoidance of duplicating code or logic in a system\n\
    - every piece of knowledge or functionality should have a single, unambiguous representation\n\
    - emphasis on the code reusability, maintainability, and reducing redundancy\n\
★ FIRST-U rules for unit testing:
    - Fast
    - Isolated/Independent
    - Repeatable
    - Self-validating
    - Timely
    - Understandable
★ SCRIPT: Self-documenting Code, Readability, Intelligibility (for AI), Program structure, Tidiness\n\
              to make the code easier to understand\n\
              to enable automated analysis and development\n\
              to reduce the need for excessive comments.\n\
              to enhance maintainability and reusability\n\
              to create clean and consise code\n\
    - Self-documenting Code: Use meaningful names and logical organization\n\
    - Readability: Prioritize readable patterns and clear syntax\n\
    - Intelligibility (for AI): Make the code understandable for artificial intelligence\n\
    - Program Structure: Organize code into logical components (modules, classes),\n\
          maintaine a single level of abstraction and opt composition over inheritance\n\
    - Tidiness: Apply consistent formatting, adhering to a coding style, and\n\
          avoide repetition and duplication.\n\
★ SLAP: Single Level of Abstraction Principle\n\
★ SOLID for creating software that is easier to understand, maintain, and extend: \n\
    - Single responsibility principle:\n\
          a class should have only a single responsibility\n\
          (i.e. changes to only one part of the software's\n\
          specification should be able to affect the specification of the class),\n\
    - Open/closed principle:\n\
          classes should be open for extension, but closed for modification.\n\
    - Liskov substitution principle:\n\
          objects in a program should be replaceable with instances of their subtypes without altering\n\
          the correctness of that program.\n\
    - Interface segregation principle:\n\
          many client-specific interfaces are better than one general-purpose interface.\n\
    - Dependency inversion principle:\n\
          one should depend upon abstractions, [not] concretions.\n\
★ YAGNI is actually the longest acronym on this list. You Aren't Gonna Need It\n\
`,
  },

  {
    idProfile: '1',
    title: 'Programming Styles',
    contentType: SectionType['CompetencyTagType'],
    section: 'Best Practices',
    linkHref: 'https://en.wikipedia.org/wiki/Object-oriented_programming',
    iconLibrary: 'Ionicons',
    iconName: '',
    tooltips: `
    OOP paradigm:
0. Classes and Objects: Classes are blueprints for creating objects. Objects are instances of classes, each with its own state (data) and behavior (methods)
1. Encapsulation
Encapsulation means that the internal representation of an object is generally hidden from view outside of the object’s definition.
Typically, only the object’s own methods can directly inspect or manipulate its fields.\n\
2. Abstraction
An abstraction is a simplified representation of a complex system or entity that focuses on its essential characteristics and behaviors, while ignoring the details that are not relevant to its use.\n\
3. Inheritance
Inheritance is a way to reuse code of existing objects, or to establish a subtype from an existing object.\n\
4. Polymorphism
Polymorphism means one name, many forms. Polymorphism manifests itself by having multiple methods all with the same name, but slightly different functionality.

    FP paradigm:
1. Pure Functions
Pure functions are functions that always produce the same output for the same input and have no side effects. They avoid modifying external state and provide a predictable and testable way to perform computations.
2. Immutability
In FP, data is typically immutable, meaning that once created, it cannot be changed. Instead of modifying data, you create new data structures with the desired changes.
3. First-Class Functions
Functions in FP are treated as first-class citizens, meaning they can be assigned to variables, passed as arguments to other functions, and returned as values from other functions.
4. Higher-Order Functions
These are functions that take other functions as arguments or return them as results. They allow for more modular and reusable code by abstracting common patterns.
5. Functional Composition
Composing functions involves chaining multiple functions together to create more complex functionality. This can lead to highly expressive and reusable code.
`,
  },

  {
    idProfile: '1',
    title: 'Scrum',
    contentType: SectionType['CompetencyTagType'],
    section: 'Best Practices',
    linkHref:
      'https://www.agilealliance.org/agile101/subway-map-to-agile-practices/',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'SDLC',
    contentType: SectionType['CompetencyTagType'],
    section: 'Best Practices',
    linkHref: 'https://en.wikipedia.org/wiki/Systems_development_life_cycle',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'Search Algorithms',
    contentType: SectionType['CompetencyTagType'],
    section: 'Best Practices',
    linkHref: 'https://en.wikipedia.org/wiki/Systems_development_life_cycle',
    iconLibrary: 'Ionicons',
    iconName: 'search',
    tooltips:
      '\n\
- Linear search: This is a simple search algorithm that sequentially checks each element of a list until it finds the target value.It is easy to implement, but can be slow for large datasets.\n\
- Binary search: This algorithm works by repeatedly dividing the search interval in half, eliminating half of the remaining elements at each step. It is much faster than linear search, but requires the data to be sorted first.\n\
- Hash search is a search algorithm that uses a hash function to map keys to array indices. Key-value pairs are stored in an array, and the hash function is used to calculate an index into the array for each key. When searching for a key, the hash function is first applied to the key to determine its index in the array. If the corresponding value at that index matches the target value, the search is successful. Collision resolution techniques may be used to resolve any potential collisions.\n\
- Depth - first search: This is a graph traversal algorithm that explores as far as possible along each branch before backtracking.It is often used to solve problems such as maze navigation and pathfinding.\n\
- Breadth-first search: This is another graph traversal algorithm that explores all the neighboring vertices at the current depth before moving on to the next depth level. It is often used for shortest path problems.\n\
- A* search: This is a heuristic search algorithm that combines breadth-first search with a heuristic function to guide the search towards the goal. It is commonly used in pathfinding and other optimization problems.\n\
- Interpolation search: This algorithm works by estimating the position of the target value based on its value and the values of the endpoints of the search interval. It can be faster than binary search for certain types of datasets.\n\
',
  },

  {
    idProfile: '1',
    title: 'TDD',
    contentType: SectionType['CompetencyTagType'],
    section: 'Best Practices',
    linkHref: 'https://www.agilealliance.org/glossary/tdd/',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'Testing/Debugging',
    contentType: SectionType['CompetencyTagType'],
    section: 'Best Practices',
    linkHref: '',
    iconLibrary: 'Ionicons',
    iconName: 'bug-outline',
    tooltips:
      '\
BDD Behavior Driven Development\n\
TDD Test Driven Development\n\
Unit testing\n\
  ✔ Chai - chaijs.com\n\
  ✔ Enzyme - airbnb.io/enzyme/\n\
  ✔ Jasmine - jasmine.github.io\n\
  ✔ Jest - facebook.github.io/jest/\n\
  ✔ Karma - karma-runner.github.io\n\
  ✔ Mocha - mochajs.org\n\
  ✔ React Testing Library - testing-library.com/docs/react-testing-library/intro\n\
  ✔ Sinon - sinonjs.org/\n\
Integration testing\n\
  ✔ Cypress - cypress.io\n\
  ✔ TestCafe - testcafe.devexpress.com/\n\
Browser devtools\n\
  ✔ LightHouse\n\
  ✔ Network\n\
  ✔ Performance\n\
  ✔ Profiler (dev React)\n\
  ✔ Sources: breakpoints\n\
Lint\n\
  ✔ Eslint google style: npm run eslint filename.js\n\
  ✔ NodeJs htmllint: htmllint filename.html\n\
Unit testing coverage for React Components\n\
  ✔ Render Test\n\
  ✔ Props Test\n\
  ✔ Function Callbacks Test\n\
  ✔ Behavior Test\n\
  ✔ State Change Test\n\
  ✔ Conditional Rendering Test\n\
  ✔ Error Handling Test\n\
  ✔ Snapshot Test\n\
  ✔ Prop Validation Test\n\
  ✔ Mocking External Dependencies Test\n\
  ✔ Lifecycle Methods Test\n\
  ✔ Integration Tests\n\
',
  },

  {
    idProfile: '1',
    title: 'Version Control/Git',
    contentType: SectionType['CompetencyTagType'],
    section: 'Best Practices',
    linkHref:
      'https://dont-be-afraid-to-commit.readthedocs.io/en/latest/git/commandlinegit.html',
    iconLibrary: 'Ionicons',
    iconName: 'git-branch-outline',
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
    idProfile: '1',
    title: 'Ajax',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref: 'https://www.w3.org/TR/XMLHttpRequest/',
    iconLibrary: 'Ionicons',
    iconName: '',
    tooltips:
      '\
  The XMLHttpRequest specification is an API that \n\
  provides scripted client functionality \n\
  for transferring data between a client and a server',
  },

  {
    idProfile: '1',
    title: 'Amp',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref: 'https://www.ampproject.org/',
    iconLibrary: 'Ionicons',
    iconName: '',
    tooltips:
      '\
  The AMP Project is an open-source initiative aiming to make the web better for all. \n\
  The project enables the creation of websites and ads that are \n\
  consistently fast, beautiful and high-performing \n\
  across devices and distribution platforms.',
  },

  {
    idProfile: '1',
    title: 'Ant Design',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref: 'https://ant.design/docs/react/introduce',
    iconLibrary: 'Ionicons',
    iconName: '',
    tooltips:
      '\
  A React UI library antd that contains a set of high quality components and demos for building rich,\n\
  interactive user interfaces.',
  },

  {
    idProfile: '1',
    title: 'Axios',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref: 'https://github.com/axios/axios',
    iconLibrary: 'Ionicons',
    iconName: '',
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
        iconLibrary: 'Ionicons',
    iconName: '',
    tooltips: '\
  AngularJS lets you extend \n\
  HTML vocabulary for your application.',
      },
      */

  {
    idProfile: '1',
    title: 'Bootstrap',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref: 'https://bootstrapdocs.com/',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'BEM methodology',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref: 'https://en.bem.info/methodology/',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'Browser Developer Tools',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref: 'https://developers.google.com/web/tools/chrome-devtools/',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'Cookie',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref: 'https://tools.ietf.org/html/rfc6265',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'CSS Preprocessing',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref: 'https://lesscss.org/functions/',
    iconLibrary: 'Ionicons',
    iconName: '',
    tooltips:
      '\
  Lesscss.org\n\
  Sass-lang.com\n\
  Stylus-lang.com',
  },

  {
    idProfile: '1',
    title: 'Css3',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref: 'https://www.w3.org/Style/CSS/specs.en.html',
    iconLibrary: 'Ionicons',
    iconName: 'logo-css3',
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
    idProfile: '1',
    title: 'ECMAScript6',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref: 'https://github.com/lukehoban/es6features',
    iconLibrary: 'Ionicons',
    iconName: 'logo-javascript',
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
        iconLibrary: 'Ionicons',
    iconName: '',
    tooltips:
          "\
  Enzyme is a JavaScript Testing utility for React that makes it easier \n\
  to assert, manipulate, and traverse your React Components' output.",
      },
      */

  {
    idProfile: '1',
    title: 'ESLint',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref: 'https://eslint.org/',
    iconLibrary: 'Ionicons',
    iconName: '',
    tooltips:
      '\
  ESLint statically analyzes your code to quickly find problems. \n\
  Many problems ESLint finds can be automatically fixed.',
  },

  {
    idProfile: '1',
    title: 'Icons lib',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref: 'https://www.w3schools.com/icons/icons_reference.asp',
    iconLibrary: 'Ionicons',
    iconName: '',
    tooltips:
      '\
  Font-awesome https://fontawesome.io/\n\
  Bootstrap icons\n\
  Google icons',
  },

  {
    idProfile: '1',
    title: 'Html5',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref: 'https://www.w3.org/TR/html5/',
    iconLibrary: 'Ionicons',
    iconName: 'logo-html5',

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
    idProfile: '1',
    title: 'HTML DOM',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref: 'https://www.w3.org/TR/DOM-Level-1/introduction.html',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'JavaScript',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref:
      'https://www.ecma-international.org/publications/standards/Stnindex.htm',
    iconLibrary: 'Ionicons',
    iconName: 'logo-javascript',
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
    idProfile: '1',
    title: 'Jest',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref: 'https://jestjs.io/docs/api',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'jQuery',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref: 'https://jquery.com/',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'jQuery-UI',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref: 'https://jqueryui.com/',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'JS Frameworks',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref: '',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'JSONP',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref: 'https://en.wikipedia.org/wiki/JSONP',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'Less',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref: 'https://lesscss.org/functions/',
    iconLibrary: 'Ionicons',
    iconName: '',
    tooltips:
      '\
  As an extension to CSS, Less \n\
  is not only backwards compatible with CSS,\n\
  but the extra features it adds use existing CSS syntax.\n\
  This makes learning Less a breeze, and if in doubt,\n\
  lets you fall back to vanilla CSS.',
  },

  {
    idProfile: '1',
    title: 'Lodash',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref: 'https://lodash.com/docs/',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'Material Design',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref: 'https://material.io/',
    iconLibrary: 'Ionicons',
    iconName: '',
    tooltips:
      '\
  Tools: COLOR TOOL\n\
  \n\
  Material Design is a unified system \n\
  that combines theory, resources, and tools\n\
  for crafting digital experiences.',
  },

  {
    idProfile: '1',
    title: 'Microformats/Schema.org',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref: 'https://schema.org/',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'Mocha',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref: 'https://mochajs.org/',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'MVC',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref:
      'https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'OAuth',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref: 'https://en.wikipedia.org/wiki/OAuth',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'ReactJS',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref: 'https://facebook.github.io/react/',
    iconLibrary: 'Ionicons',
    iconName: 'logo-react',
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
    idProfile: '1',
    title: 'React Hooks',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref: 'https://react.dev/reference/react',
    iconLibrary: 'Ionicons',
    iconName: 'logo-react',
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
    idProfile: '1',
    title: 'React Native',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref: 'https://reactnative.dev/',
    iconLibrary: 'Ionicons',
    iconName: 'logo-react',
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
    idProfile: '1',
    title: 'React Navigation',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref: 'https://reactnavigation.org/docs/navigation-container/',
    iconLibrary: 'Ionicons',
    iconName: 'logo-react',
    tooltips:
      "\
• NavigationContainer is responsible for managing your app state and linking your top-level navigator\n\
• ServerContainer component provides utilities to render your app on server with the correct navigation state\n\
• Group components are used to group several screens inside a navigator.\n\
• Screen components are used to configure various aspects of screens inside a navigator.\n\
• Options prop on Screen\n\
• Route Screen prop contains various information regarding current route\n\
• Navigation Screen prop contains various convenience functions to dispatch navigation actions:\n\
    - navigate - go to another screen, figures out the action it needs to take to do it\n\
    - reset - wipe the navigator state and replace it with a new route\n\
    - goBack - close active screen and move back in the stack\n\
    - setParams - make changes to route's params\n\
    - dispatch - send an action object to update the navigation state\n\
    - setOptions - update the screen's options\n\
    - isFocused - check whether the screen is focused\n\
    - addListener - subscribe to updates to events from the navigators\n\
• NavigationContext provides the navigation object (same object as the navigation prop)\n\
• Navigation events to listen to various events emitted by React Navigation to get notified of certain events\n\
• Navigation state to store the navigation structure and history of the app\n\
• Link component renders a component that can navigate to a screen on press\n\
• Hooks\n\
    - useNavigation\n\
    - useRoute\n\
    - useNavigationState\n\
    - useFocusEffect\n\
    - useIsFocused\n\
    - useLinkTo\n\
    - useLinkProps\n\
    - useLinkBuilder\n\
    - useScrollToTop\n\
    - useTheme\n\
• Actions\n\
    - CommonActions\n\
    - StackActions\n\
    - DrawerActions\n\
    - TabActions\n\
",
  },

  {
    idProfile: '1',
    title: 'React-router 6',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref: 'https://reacttraining.com/react-router/',
    iconLibrary: 'Ionicons',
    iconName: 'logo-react',
    tooltips:
      '\
Routers\n\
  Picking a Router 🆕\n\
  createBrowserRouter 🆕\n\
  createHashRouter 🆕\n\
  createMemoryRouter 🆕\n\
  createStaticHandler 🆕\n\
  createStaticRouter 🆕\n\
  RouterProvider 🆕\n\
  StaticRouterProvider 🆕\n\
Router Components\n\
  BrowserRouter\n\
  HashRouter\n\
  MemoryRouter\n\
  NativeRouter\n\
  Router\n\
  StaticRouter\n\
Route\n\
  Route 🆕\n\
  action 🆕\n\
  errorElement 🆕\n\
  lazy 🆕\n\
  loader 🆕\n\
  shouldRevalidate 🆕\n\
Components\n\
  Await 🆕\n\
  Form 🆕\n\
  Link\n\
  Link (RN)\n\
  NavLink\n\
  Navigate\n\
  Outlet\n\
  Route\n\
  Routes\n\
  ScrollRestoration 🆕\n\
Hooks\n\
  useActionData 🆕\n\
  useAsyncError 🆕\n\
  useAsyncValue 🆕\n\
  useBeforeUnload 🆕\n\
  useFetcher 🆕\n\
  useFetchers 🆕\n\
  useFormAction 🆕\n\
  useHref\n\
  useInRouterContext\n\
  useLinkClickHandler\n\
  useLinkPressHandler\n\
  useLoaderData 🆕\n\
  useLocation\n\
  useMatch\n\
  useMatches 🆕\n\
  useNavigate\n\
  useNavigation 🆕\n\
  useNavigationType\n\
  useOutlet\n\
  useOutletContext\n\
  useParams\n\
  useResolvedPath\n\
  useRevalidator 🆕\n\
  useRouteError 🆕\n\
  useRouteLoaderData 🆕\n\
  useRoutes\n\
  useSearchParams\n\
  useSearchParams (RN)\n\
  useSubmit 🆕\n\
Fetch Utilities\n\
  json 🆕\n\
  redirect 🆕\n\
Utilities\n\
  createRoutesFromChildren\n\
  createRoutesFromElements\n\
  createSearchParams\n\
  defer 🆕\n\
  generatePath\n\
  isRouteErrorResponse 🆕\n\
  Location\n\
  matchPath\n\
  matchRoutes\n\
  renderMatches\n\
  resolvePath',
  },
  {
    idProfile: '1',
    title: 'Redux',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref: 'https://redux.js.org',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'Redux-saga',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref: 'https://redux-saga.js.org/',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'Regex',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref: 'https://perldoc.perl.org/perlre.html',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'Responsive Design',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref: 'https://bootstrapdocs.com/',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'Semantic-UI-React',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref: 'https://react.semantic-ui.com/introduction',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'Seo',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref: 'https://support.google.com/webmasters/answer/35769?hl=en',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'Session',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref: 'https://php.net/manual/en/features.sessions.php',
    iconLibrary: 'Ionicons',
    iconName: '',
    tooltips:
      '\
  Session support consists of a way \n\
  to preserve certain data across subsequent accesses.\n\
  This enables you to build more customized applications \n\
  and increase the appeal of your web site.',
  },

  {
    idProfile: '1',
    title: 'SPA',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref: 'https://en.wikipedia.org/wiki/Single-page_application',
    iconLibrary: 'Ionicons',
    iconName: '',
    tooltips:
      '\
  A single-page application (SPA) is a web application or web site that\n\
  interacts with the user by dynamically rewriting the current page \n\
  rather than loading entire new pages from a server.\n\
  Interaction with the single page application often involves \n\
  dynamic communication with the web server behind the scenes.',
  },

  {
    idProfile: '1',
    title: 'SSO',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref:
      'https://www.techtarget.com/searchsecurity/definition/single-sign-on',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'Typescript',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref: 'https://www.typescriptlang.org/docs/home.html',
    iconLibrary: 'Ionicons',
    iconName: '',
    tooltips:
      "\
★ Basic Types\n\
    • Boolean: a boolean value (true or false).\n\
    • Number: a numeric value.\n\
    • String: a sequence of characters.\n\
    • Array: an ordered collection of values of the same type.\n\
    • Tuple: an array-like structure with a fixed number of elements of different types.\n\
    • Enum: a set of named constant values.\n\
    • Any: a value of any type, disabling type checking.\n\
    • Void: the absence of any type, often used as the return type of functions that don't return a value.\n\
    • Null and Undefined: the absence of a value.\n\
    • Object: a non-primitive type.\n\
    • Union: a value that can be one of several types.\n\
    • Intersection: a type that has properties and methods from multiple other types.\n\
★ Optional Chaining - feature that allows you to safely access properties or call methods on an object even if some intermediate properties are null or undefined.\n\
★ Mapped Types - feature that provide a way to iterate over the properties of an object type and define new types based on the properties' characteristics\n\
★ Utility types facilitate common type transformations\n\
    • Awaited<Type>\n\
    • Partial<Type>\n\
    • Required<Type>\n\
    • Readonly<Type>\n\
    • Record<Keys, Type>\n\
    • Pick<Type, Keys>\n\
    • Omit<Type, Keys>\n\
    • Exclude<UnionType, ExcludedMembers>\n\
    • Extract<Type, Union>\n\
    • NonNullable<Type>\n\
    • Parameters<Type>\n\
    • ConstructorParameters<Type>\n\
    • ReturnType<Type>\n\
    • InstanceType<Type>\n\
    • ThisParameterType<Type>\n\
    • OmitThisParameter<Type>\n\
    • ThisType<Type>\n\
    • Intrinsic String Manipulation Types\n\
    • Uppercase<StringType>\n\
    • Lowercase<StringType>\n\
    • Capitalize<StringType>\n\
    • Uncapitalize<StringType>\n\
Variable Declarations\n\
Interfaces\n\
Classes\n\
Functions\n\
Generics > provide a way to parameterize types, allowing you to define placeholders for specific types that are determined when the component or function is used.\n\
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
Type Checking JavaScript Files",
  },

  {
    idProfile: '1',
    title: 'Webpack',
    contentType: SectionType['CompetencyTagType'],
    section: 'Front-end',
    linkHref: 'https://webpack.js.org/',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'Analytics/ Monitoring',
    contentType: SectionType['CompetencyTagType'],
    section: 'Back-end',
    linkHref: 'https://www.google.com/analytics/',
    iconLibrary: 'Ionicons',
    iconName: 'analytics-outline',
    tooltips:
      '\
  Splunk \n\
  New relic \n\
  Google Analytics \n\
  Yandex Analytics\
  ',
  },

  {
    idProfile: '1',
    title: 'Apollo',
    contentType: SectionType['CompetencyTagType'],
    section: 'Back-end',
    linkHref: 'https://www.apollographql.com/docs/',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'AWS serveless',
    contentType: SectionType['CompetencyTagType'],
    section: 'Back-end',
    linkHref:
      'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/introduction.html',
    iconLibrary: 'Ionicons',
    iconName: '',
    tooltips:
      "\
✔ API Gateway - A fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale.\n\
✔ AppSync is a fully managed service that simplifies the development of serverless GraphQL APIs for web and mobile applications.\n\
✔ CloudFront - A fast content delivery network(CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency.\n\
✔ CloudWatch - A monitoring and observability service for resources and applications.\n\
✔ CodePipeline - A fully managed continuous integration and continuous delivery service.\n\
✔ Cognito - A fully managed service that provides user sign-up, sign-in, and access control to web and mobile apps.\n\
✔ DynamoDB - A fully-managed NoSQL database service that provides fast and predictable performance with seamless scalability.\n\
✔ Elastic Compute Cloud (EC2) - A web service that provides scalable compute capacity in the cloud.\n\
✔ Elastic Container Service (ECS) - A highly scalable, high-performance container management service that supports Docker containers.\n\
✔ Identity and Access Management (IAM) - A web service that helps you securely control access to resources for your users.\n\
✔ Kinesis - A platform for streaming data on the cloud, which can be used for real-time data processing and analysis.\n\
    - Kinesis Data Streams: gives control over the ingestion and processing, retains data of 24 hours up to 7 days, partitions the data into shards, requires a processing applications\n\
    - Kinesis Data Firehose: fully managed service, doesn't store data, delivers data near real-time, focuses on the destination and data transformation\n\
✔ Lambda - A serverless compute service that lets you run code without provisioning or managing servers.\n\
✔ Simple Storage Service (S3) - Object storage service that offers industry-leading scalability, data availability, security, and performance.\n\
• Batch - A fully - managed batch processing service that enables developers, scientists, and engineers to easily and efficiently run batch computing workloads of any scale.\n\
• CloudFormation - A service that helps you model and set up resources so you can spend less time managing those resources and more time focusing on your applications that run in the cloud.\n\
• CloudSearch - A fully managed search service that provides easy-to-use search capabilities for websites and applications.\n\
• Elastic Block Store (EBS) - A block-level storage service designed to be used with EC2 instances.\n\
• Elastic Kubernetes Service (EKS) - A fully-managed Kubernetes service that makes it easy to run Kubernetes.\n\
• Elastic Load Balancing (ELB) - Automatically distributes incoming application traffic across multiple targets, such as EC2 instances, containers, and IP addresses.\n\
• Elastic MapReduce (EMR) - A web service that makes it easy to process large amounts of data using Hadoop, Spark, and other big data tools.\n\
• Glue - A fully-managed extract, transform, and load (ETL) service that makes it easy to move data between data stores.\n\
• IoT - A managed cloud platform that lets connected devices easily and securely interact with cloud applications and other devices.\n\
• Neptune - A fully managed graph database service that enables you to build and run applications that work with highly connected datasets.\n\
• Redshift - A fully managed, petabyte - scale data warehouse service in the cloud.\n\
• Relational Database Service (RDS) - A managed service that makes it easier to set up, operate, and scale a relational database in the cloud.\n\
• Simple Email Service (SES) - A flexible, low-cost email service designed to help marketers and developers send marketing, notification, and transactional emails.\n\
• Simple Notification Service (SNS) - A fully managed messaging service for both application-to-application (A2A) and application-to-person (A2P) communication.\n\
• Simple Queue Service (SQS) - A fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications.\n\
• Step Functions - A serverless workflow service that lets you coordinate distributed applications and microservices using visual workflows.\n\
• Virtual Private Cloud (VPC) - A service that enables you to launch resources into a virtual network that you've defined",
  },

  {
    idProfile: '1',
    title: 'Docker',
    contentType: SectionType['CompetencyTagType'],
    section: 'Back-end',
    linkHref:
      'https://docs.docker.com/develop/develop-images/dockerfile_best-practices/',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'ExpressJS',
    contentType: SectionType['CompetencyTagType'],
    section: 'Back-end',
    linkHref: 'https://expressjs.com/en/4x/api.html',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'Graphql',
    contentType: SectionType['CompetencyTagType'],
    section: 'Back-end',
    linkHref: 'https://spec.graphql.org/draft/',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'Internet Protocols',
    contentType: SectionType['CompetencyTagType'],
    section: 'Back-end',
    linkHref:
      'https://en.wikipedia.org/wiki/List_of_network_protocols_(OSI_model)📩',
    iconLibrary: 'Ionicons',
    iconName: '',
    tooltips:
      '\
📩 HTTP (Hypertext Transfer Protocol): Used for transferring web content (such as HTML pages) between a client and server over a network.\n\
📩 HTTPS (Hypertext Transfer Protocol Secure): A secure version of HTTP that encrypts data sent between a client and server using SSL/TLS protocols.\n\
📩 HTTP long polling: The client sends an HTTP request to the server, the server keeps the request open until the server has new data to send or an event occurs (seconds, several minutes). The client then processes the response and immediately sends another request to keep the connection open for future updates.\n\
📩 WebSocket protocol: Used for for real-time bidirectional connection, provides full-duplex communication channels over a single TCP connection.\n\
📩 MQTT(Message Queuing Telemetry Transport): A lightweight messaging protocol used for machine - to - machine communication, IoT devices, and mobile applications.\n\
📩 Signal Protocol: An end-to-end encryption protocol used by Signal messaging app and other messaging apps that support it, providing secure messaging and voice/video calls.\n\
📩 XMPP (Extensible Messaging and Presence Protocol): An open-source protocol used for instant messaging and presence information, also used by some IoT devices and mobile applications.\n\
ARP(Address Resolution Protocol): Maps a network address(such as an IP address) to a physical address(such as a MAC address).\n\
DHCP (Dynamic Host Configuration Protocol): Dynamically assigns IP addresses to devices on a network.\n\
DNS (Domain Name System): Translates domain names into IP addresses, allowing devices to access websites and other network resources.\n\
FTP (File Transfer Protocol): Used for transferring files between a client and server over a network.\n\
ICMP (Internet Control Message Protocol): Used for reporting errors and status information about network connections.\n\
IMAP (Internet Message Access Protocol): Used for accessing and retrieving email messages from a mail server.\n\
IP (Internet Protocol): Provides the basic addressing and routing information for all data transmitted over the internet.\n\
POP3 (Post Office Protocol version 3): Used for retrieving email messages from a mail server.\n\
RTP (Real-time Transport Protocol): Used for streaming audio and video over the internet in real-time.\n\
SIP (Session Initiation Protocol): Used for establishing and managing multimedia communication sessions, such as voice and video calls, over IP networks.\n\
SMTP (Simple Mail Transfer Protocol): Used for sending email messages between mail servers.\n\
SNMP (Simple Network Management Protocol): Used for managing and monitoring network devices, such as routers and switches.\n\
SSH (Secure Shell): Provides secure remote access to a server over an unsecured network.\n\
TCP (Transmission Control Protocol): Provides reliable and ordered delivery of data between two endpoints over a network.\n\
TLS/SSL (Transport Layer Security/Secure Sockets Layer): Encryption protocols used to secure data sent over the internet.\n\
UDP (User Datagram Protocol): Provides a connectionless and unreliable transport service for sending datagrams over a network.\n\
',
  },

  {
    idProfile: '1',
    title: 'JSON',
    contentType: SectionType['CompetencyTagType'],
    section: 'Back-end',
    linkHref: 'https://json-schema.org/',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'JWT',
    contentType: SectionType['CompetencyTagType'],
    section: 'Back-end',
    linkHref: 'https://jwt.io/',
    iconLibrary: 'Ionicons',
    iconName: '',
    tooltips: `
JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.\n\
  
High-level overview of how SSO can work with JWT:

1. Authentication: When a user authenticates with the identity provider (IdP), the IdP generates a JWT containing relevant information about the user, such as their identity and granted permissions. This JWT is digitally signed by the IdP using a secret key.
2. Token Exchange: After successful authentication, the IdP issues the JWT to the user, who can then present this token to the service providers (SPs) they wish to access.
3. Token Validation: The SPs, upon receiving the JWT, validate the signature of the token using the public key of the IdP. This ensures the authenticity and integrity of the JWT.  
4. Authorization: Once the JWT is validated, the SPs extract the relevant information from the token, such as the user's identity and permissions, to authorize access to the requested resources or applications.
`,
  },

  {
    idProfile: '1',
    title: 'LAMP',
    contentType: SectionType['CompetencyTagType'],
    section: 'Back-end',
    linkHref: 'https://en.wikipedia.org/wiki/LAMP_(software_bundle)',
    iconLibrary: 'Ionicons',
    iconName: '',
    tooltips:
      '\
⁍ Linux operating system (Ubuntu),\n\
⁍ Apache HTTP Server,\n\
⁍ MySQL relational database,\n\
⁍ PHP programming language',
  },

  {
    idProfile: '1',
    title: 'MERN',
    contentType: SectionType['CompetencyTagType'],
    section: 'Back-end',
    linkHref:
      'https://medium.com/javascript-in-plain-english/full-stack-mongodb-react-node-js-express-js-in-one-simple-app-6cc8ed6de274',
    iconLibrary: 'Ionicons',
    iconName: '',
    tooltips:
      '\
※ MongoDB\n\
※ ExpressJS\n\
※ ReactJS\n\
※ NodeJS',
  },

  {
    idProfile: '1',
    title: 'Microservices',
    contentType: SectionType['CompetencyTagType'],
    section: 'Back-end',
    linkHref: 'https://www.mysql.com/',
    iconLibrary: 'Ionicons',
    iconName: '',
    tooltips:
      '\
❧ Containerization: The process of packaging software applications into containers, which are portable and can run consistently across different environments. Docker and Kubernetes are popular containerization technologies.\n\
❧ API Gateway: A server that acts as an intermediary between clients and microservices, providing routing, authentication, and security features. Popular API gateway technologies include NGINX, Zuul, and Kong.\n\
❧ Service Registry and Discovery: A tool that maintains a list of available microservices and their network locations, allowing services to find and communicate with each other. Eureka, Consul, and ZooKeeper are popular service registry and discovery tools.\n\
❧ Messaging: Asynchronous messaging protocols that enable microservices to communicate with each other without requiring a direct connection. Popular messaging technologies include Kafka, RabbitMQ, and ActiveMQ.\n\
❧ Circuit Breaker: A design pattern that prevents cascading failures in a distributed system by automatically stopping requests to a service that is not responding. Hystrix is a popular circuit breaker library.\n\
❧ DevOps: A set of practices that combines software development and IT operations, aiming to shorten the systems development lifecycle and provide continuous delivery with high software quality. Popular DevOps tools include Jenkins, GitLab, and AWS CodePipeline.\n\
',
  },

  {
    idProfile: '1',
    title: 'Migration',
    contentType: SectionType['CompetencyTagType'],
    section: 'Back-end',
    linkHref: 'https://www.mysql.com/',
    iconLibrary: 'Ionicons',
    iconName: '',
    tooltips:
      '\
A template/ example for a migration plan from the monolithic PHP + Docker application to a microservice app:\n\
\n\
1. Create a separate temporary domain for testing purposes, for example, web2.domainName.com\n\
2. Deploy the Docker container on AWS on web2.domainName.com, while preserving that the old container works\n\
3. Setup and integrate Jenkins pipeline for the deployment process to AWS and ensure, that everything works with the development process\n\
4. Refactor the monolithic application to be able to extract the components and convert them into microservices. Ensure that the microservices are independent\n\
5. Implement data migration - migrate data from the monolithic application to the microservices. You can use Amazon Aurora or Amazon DynamoDB for data storage\n\
6. Implement the microservices in the new stack: Angular, NodeJs, Docker, Jenkins, and AWS. Ensure that the microservices are containerized using Docker\n\
7. Deploy microservices on AWS and test them on a temporary domain first. Use unit testing, integration testing, and end-to-end testing to validate the microservices. Use and test Jenkins for continuous integration and continuous deployment (CI/CD) to automate the deployment process\n\
8. Switch from legacy data storage to the new one\n\
9. Switch from respective parts of PHP code to the microservice. Use AWS API Gateway\n\
10. Switch the temporary domain to the production domain of content delivery.  Use AWS API Gateway\n\
11. Apply rollout strategy and green/ blue deployment technique for deploying the microservices to production. In particular this strategy can include deploying to a small subset of users at first to ensure everything works as expected before gradually increasing the number of users\n\
12. Monitor the microservices with AWS CloudWatch or ELK Stack for monitoring and logging. Be ready to switch back to the previous version or to the monolithic app at any time',
  },

  {
    idProfile: '1',
    title: 'MongoDB',
    contentType: SectionType['CompetencyTagType'],
    section: 'Back-end',
    linkHref: 'https://www.mysql.com/',
    iconLibrary: 'Ionicons',
    iconName: '',
    tooltips:
      '\
‣ MongoDB CRUD Operations\n\
‣ Create Operations\n\
‣ Read Operations\n\
‣ Update Operations\n\
‣ Delete Operations\n\
‣ Bulk Write',
  },

  {
    idProfile: '1',
    title: 'MySQL',
    contentType: SectionType['CompetencyTagType'],
    section: 'Back-end',
    linkHref: 'https://www.mysql.com/',
    iconLibrary: 'Ionicons',
    iconName: '',
    tooltips:
      '\
• Database\n\
• Connect\n\
• Create DB\n\
• Create Table\n\
• Insert Data\n\
• Get Last ID\n\
• Insert Multiple\n\
• Prepared\n\
• Select Data\n\
• Delete Data\n\
• Update Data\n\
• Limit Data',
  },

  {
    idProfile: '1',
    title: 'NestJS',
    contentType: SectionType['CompetencyTagType'],
    section: 'Back-end',
    linkHref: 'https://docs.nestjs.com/',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'Node.js',
    contentType: SectionType['CompetencyTagType'],
    section: 'Back-end',
    linkHref: 'https://nodejs.org/en/',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'NoSQL DBs',
    contentType: SectionType['CompetencyTagType'],
    section: 'Back-end',
    linkHref: 'https://en.wikipedia.org/wiki/NoSQL',
    iconLibrary: 'Ionicons',
    iconName: '',
    tooltips: `Examples:
• Cassandra: Cassandra is often used for applications that require high availability, fault tolerance, and massive scalability, such as large-scale data analytics, time-series data, and IoT applications.
• Kafka: It is widely used for building real-time streaming applications, event sourcing, log aggregation, and messaging systems.
• MongoDB: MongoDB is suitable for a wide range of use cases, including content management systems, e-commerce platforms, mobile applications, and real-time analytics.
• REDIS: REDIS is commonly used for caching, real-time analytics, messaging systems, and session management due to its fast in-memory storage and support for various data structures.
`,
  },

  {
    idProfile: '1',
    title: 'Php',
    contentType: SectionType['CompetencyTagType'],
    section: 'Back-end',
    linkHref: 'https://php.net/manual/en/langref.php',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'Regex',
    contentType: SectionType['CompetencyTagType'],
    section: 'Back-end',
    linkHref:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'RESTful-API',
    contentType: SectionType['CompetencyTagType'],
    section: 'Back-end',
    linkHref: 'https://www.restapitutorial.com/lessons/whatisrest.html',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'Routing',
    contentType: SectionType['CompetencyTagType'],
    section: 'Back-end',
    linkHref: '',
    iconLibrary: 'Ionicons',
    iconName: '',
    tooltips:
      'Routing provides site users with the following:\n\
  Displaying different content depending on the URL\n\
  Constructing links to routes and go to routes programmatically\n\
  Bookmarking - Users can bookmark URLs in their web browser to save content they want to come back to later.\n\
  Sharing - Users can share content with others by sending a link to a certain page.\n\
  Navigation - URLs are used to drive the web browser’s back/forward functions.',
  },

  {
    idProfile: '1',
    title: 'Seo',
    contentType: SectionType['CompetencyTagType'],
    section: 'Back-end',
    linkHref:
      'https://www.searchenginejournal.com/200-parameters-in-google-algorithm/15457/',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'Session',
    contentType: SectionType['CompetencyTagType'],
    section: 'Back-end',
    linkHref: 'https://php.net/manual/en/features.sessions.php',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'Sql',
    contentType: SectionType['CompetencyTagType'],
    section: 'Back-end',
    linkHref:
      'https://docs.oracle.com/cd/B28359_01/server.111/b28286/intro002.htm#SQLRF50928',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'Socket.io',
    contentType: SectionType['CompetencyTagType'],
    section: 'Back-end',
    linkHref: 'https://socket.io/docs/v4/',
    iconLibrary: 'Ionicons',
    iconName: '',
    tooltips:
      "\
• io.of(namespace): Creates a separate namespace for Socket.IO connections.\n\
• io.on(eventName, callback): Listens for a specific event on the server side.\n\
• io.sockets.emit(eventName, data): Emits an event to all connected clients.\n\
• io.to(roomName).emit(eventName, data): Sends an event to all clients in a specific room.\n\
• io.use(middleware): Registers a middleware function to be executed for every incoming connection.\n\
• socket.broadcast.emit(eventName, data): Emits an event to all clients except the current one.\n\
• socket.disconnect(): Disconnects the client from the server.\n\
• socket.emit(eventName, data): Emits an event from the server to a specific client or clients.\n\
• socket.id: Returns the unique identifier for the client's socket connection.\n\
• socket.join(roomName): Makes a client join a specific room.\n\
• socket.leave(roomName): Makes a client leave a specific room.\n\
• socket.on(eventName, callback): Listens for a specific event on the client side.",
  },

  {
    idProfile: '1',
    title: 'SSO',
    contentType: SectionType['CompetencyTagType'],
    section: 'Back-end',
    linkHref: 'https://en.wikipedia.org/wiki/Single_sign-on',
    iconLibrary: 'Ionicons',
    iconName: '',
    tooltips: `
• Federated SSO: In this approach, an identity provider (IdP) is used to authenticate users, and trusted third-party service providers (SPs) rely on the IdP for authentication. The IdP issues security tokens that the SPs can validate to grant access.
• Social Media SSO: This approach allows users to authenticate using their social media accounts such as Google, Facebook, or Twitter. The social media platform acts as the identity provider, and the user's login credentials are used for authentication across various applications.
• Enterprise SSO: This type of SSO is specifically designed for organizations and integrates with their existing identity management systems. It enables employees to access multiple internal applications with a single set of credentials managed by the organization.
• Password Vault SSO: In this approach, a password vault or manager securely stores and manages user credentials. Users authenticate with the password vault, which then automatically fills in the login credentials for various applications.
• Biometric SSO: This emerging approach uses biometric authentication, such as fingerprints or facial recognition, to grant access to multiple applications or systems without requiring users to enter passwords.
`,
  },

  {
    idProfile: '1',
    title: 'Swagger-OpenAPI',
    contentType: SectionType['CompetencyTagType'],
    section: 'Back-end',
    linkHref: 'https://swagger.io/docs/specification/about/',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'Telegram-bot',
    contentType: SectionType['CompetencyTagType'],
    section: 'Back-end',
    linkHref: 'https://telegram-bot-sdk.readme.io/docs/commands-system',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'Ubuntu',
    contentType: SectionType['CompetencyTagType'],
    section: 'Back-end',
    linkHref: 'https://www.ubuntu.com/',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'Xml',
    contentType: SectionType['CompetencyTagType'],
    section: 'Back-end',
    linkHref: 'https://www.w3.org/TR/REC-xml/',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'AI & Machine Learning',
    contentType: SectionType['CompetencyTagType'],
    section: 'AI/ ML',
    linkHref: 'https://keras.io/',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'Algoritms for ML & AI',
    contentType: SectionType['CompetencyTagType'],
    section: 'AI/ ML',
    linkHref:
      'https://www.analyticsvidhya.com/blog/2017/09/common-machine-learning-algorithms/',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'Fann',
    contentType: SectionType['CompetencyTagType'],
    section: 'AI/ ML',
    linkHref: 'https://leenissen.dk/fann/wp/',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'Keras',
    contentType: SectionType['CompetencyTagType'],
    section: 'AI/ ML',
    linkHref: 'https://keras.io/api/',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'Matplotlib',
    contentType: SectionType['CompetencyTagType'],
    section: 'AI/ ML',
    linkHref: 'https://matplotlib.org/contents.html',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'NumPy',
    contentType: SectionType['CompetencyTagType'],
    section: 'AI/ ML',
    linkHref: 'https://numpy.org/',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'Pandas',
    contentType: SectionType['CompetencyTagType'],
    section: 'AI/ ML',
    linkHref: 'https://pandas.pydata.org/docs/',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'Python',
    contentType: SectionType['CompetencyTagType'],
    section: 'AI/ ML',
    linkHref: 'https://docs.python.org/3/',
    iconLibrary: 'Ionicons',
    iconName: 'logo-python',
    tooltips:
      '\
Py General\n\
★ Global Interpreter Lock (GIL): The Global Interpreter Lock (GIL) is a mechanism used in CPython (the default implementation of Python) to synchronize access to Python objects, preventing multiple native threads from executing Python bytecodes at once. It is a form of thread-level locking.\n\
★ Passing Arguments: In Python, arguments are passed by value, which means that a copy of the object reference is passed to the function. This copy is then used to access the object inside the function. If the object is mutable, you can modify its state, but you cannot reassign the object reference itself.\n\
★ Data Types\n\
  - Immutable:\n\
      Strings (str)\n\
      Numbers (int, float, complex)\n\
      Tuples (tuple)\n\
      Frozen Sets (frozenset)\n\
      Bytes (bytes)\n\
      Namedtuples (from the collections module)\n\
  - Mutable:\n\
    Lists: Lists are ordered collections of items that can be modified.\n\
    Dictionaries: Dictionaries are key-value pairs, and their content can be modified.\n\
    Sets: Sets are unordered collections of unique elements.\n\
    Byte arrays: Byte arrays are mutable sequences of integers in the range 0-255.\n\
    User-defined objects: If you create your own custom classes\n\
Comments\n\
Variables\n\
Casting\n\
Operators\n\
If...Else\n\
While Loops\n\
For Loops\n\
Functions\n\
Lambda\n\
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
    idProfile: '1',
    title: 'SciPy',
    contentType: SectionType['CompetencyTagType'],
    section: 'AI/ ML',
    linkHref: 'https://www.scipy.org/docs.html',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'Scikit-Learn',
    contentType: SectionType['CompetencyTagType'],
    section: 'AI/ ML',
    linkHref: 'https://scikit-learn.org/stable/modules/classes.html',
    iconLibrary: 'Ionicons',
    iconName: '',
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
    idProfile: '1',
    title: 'TensorFlow',
    contentType: SectionType['CompetencyTagType'],
    section: 'AI/ ML',
    linkHref: 'https://www.tensorflow.org/api_docs/python/tf',
    iconLibrary: 'Ionicons',
    iconName: '',
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
