;(() => {
  var e = {
      79086: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ContentType = void 0)
        var n = (function (e) {
          return (
            (e.text = 'text'),
            (e.textArray = 'textArray'),
            (e.image = 'image'),
            (e.imageArray = 'imageArray'),
            (e.joinConversation = 'joinConversation'),
            e
          )
        })({})
        t.ContentType = n
      },
      88784: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.SectionType = void 0)
        var n = (function (e) {
          return (e.linkHref = 'linkHref'), (e.imageSrc = 'imageSrc'), e
        })({})
        t.SectionType = n
      },
      99613: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.MessageEventType = void 0)
        var n = (function (e) {
          return (
            (e.joinConversation = 'joinConversation'),
            (e.disconnectConversation = 'disconnectConversation'),
            (e.chatMessage = 'chatMessage'),
            e
          )
        })({})
        t.MessageEventType = n
      },
      35603: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.SectionType = void 0)
        var n = (function (e) {
          return (
            (e.CompetencyTagType = 'CompetencyTagType'),
            (e.ProjectType = 'ProjectType'),
            (e.ProfileType = 'ProfileType'),
            e
          )
        })({})
        t.SectionType = n
      },
      26654: (e, t, n) => {
        var i = n(73201),
          o = (function (e, t) {
            if (!t && e && e.__esModule) return e
            if (
              null === e ||
              ('object' !== typeof e && 'function' !== typeof e)
            )
              return { default: e }
            var n = c(t)
            if (n && n.has(e)) return n.get(e)
            var i = {},
              o = Object.defineProperty && Object.getOwnPropertyDescriptor
            for (var a in e)
              if (
                'default' !== a &&
                Object.prototype.hasOwnProperty.call(e, a)
              ) {
                var r = o ? Object.getOwnPropertyDescriptor(e, a) : null
                r && (r.get || r.set)
                  ? Object.defineProperty(i, a, r)
                  : (i[a] = e[a])
              }
            ;(i.default = e), n && n.set(e, i)
            return i
          })(n(89526)),
          a = n(92070),
          r = n(83495),
          s = n(4630),
          l = n(67557)
        function c(e) {
          if ('function' !== typeof WeakMap) return null
          var t = new WeakMap(),
            n = new WeakMap()
          return (c = function (e) {
            return e ? n : t
          })(e)
        }
        ;(0, i.registerRootComponent)(function () {
          return (0,
          l.jsx)(o.StrictMode, { children: (0, l.jsx)(a.Provider, { store: r.store, children: (0, l.jsx)(s.RouterScreensConfig, {}) }) })
        })
      },
      65120: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.axiosClient = void 0)
        var o = i(n(52868)),
          a = n(97786),
          r = n(14333),
          s = {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            timestamp: +new Date(),
          },
          l = (0, a.getDetectedEnv)(),
          c = r.SERVERS[l],
          d = r.SERVERS.timeout,
          p = o.default.create({
            baseURL: `${c}/graphql`,
            timeout: d,
            headers: s,
          })
        t.axiosClient = p
      },
      16177: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.getJoinedConversation = void 0)
        var o = i(n(17156)),
          a = n(42337),
          r = (function () {
            var e = (0, o.default)(function* (e) {
              var t = e.profilesIn,
                n = e.profileHostIn,
                i = e.getSocketEmitJoinConversationIn
              if (n.profileName)
                for (var o of t)
                  n.profileName &&
                    o.profileName &&
                    '@' !== o.profileName &&
                    n.profileName !== o.profileName &&
                    i(n.idProfile, o.idProfile),
                    yield (0, a.getItDelayedBy)(10)
            })
            return function (t) {
              return e.apply(this, arguments)
            }
          })()
        t.getJoinedConversation = r
      },
      33174: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.getSocketDisconnected = void 0)
        var i = n(50656)
        t.getSocketDisconnected = function () {
          i.socket.disconnect()
        }
      },
      95363: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.getSocketEmitJoinConversation = void 0)
        var i = n(50656)
        t.getSocketEmitJoinConversation = function (e, t) {
          try {
            i.socket.emit('joinConversation', {
              idProfileHost: e,
              idProfile: t,
            })
          } catch (n) {
            console.log('socketio [34]', { message: n.message })
          }
        }
      },
      77586: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.getSocketEmitMessage = void 0)
        var i = n(50656)
        t.getSocketEmitMessage = function (e) {
          i.socket.emit('chatMessage', e)
        }
      },
      17703: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.getSocketOnConversation = void 0)
        var i = n(50656)
        t.getSocketOnConversation = function () {
          try {
            i.socket.on('conversations', function (e) {})
          } catch (e) {
            console.log('socketio [19]', { message: e.message })
          }
        }
      },
      33604: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.getSocketOnMessage = void 0)
        var i = n(50656),
          o = n(5199)
        t.getSocketOnMessage = function () {
          i.socket.on('message', function (e) {
            o.handleEvents.ON_MESSAGE_SOCKET({}, { message: e })
          })
        }
      },
      86868: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.getSocketOnPending = void 0)
        var i = n(50656),
          o = n(5199)
        t.getSocketOnPending = function () {
          i.socket.on('pending', function (e) {
            var t = e.idProfile,
              n = e.isPending
            o.handleEvents.ON_AWAIT_FROM_ID_PROFILE(
              {},
              { idProfile: t, isPending: n }
            )
          })
        }
      },
      50656: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.socket = void 0)
        var i = n(26419),
          o = (0, n(13256).getServerSocketIoHost)(),
          a = (0, i.io)(o)
        t.socket = a
      },
      14458: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.templateConnectorAxios = void 0)
        var i = n(59190),
          o = n(65120),
          a = n(23488)
        t.templateConnectorAxios = function (e) {
          return {
            client: o.axiosClient,
            params: {
              operationName: 'GetRecipe',
              variables: e,
              query: (0, i.print)(a.GetRecipeDocument),
            },
          }
        }
      },
      93141: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.DICTIONARY = void 0)
        t.DICTIONARY = {
          _: { en: '_', ru: '_' },
          This_functionality_is_under_development: {
            en: 'This functionality is under development',
            ru: '\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u0441\u0442\u0430\u0434\u0438\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438.',
          },
          We_are_currently_looking_for_support_and_feedback: {
            en: 'We are currently looking for support and feedback.',
            ru: '\u0412 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u043c\u044b \u0438\u0449\u0435\u043c \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443 \u0438 \u043e\u0442\u0437\u044b\u0432\u044b.',
          },
          weAreWorkingOnThis: {
            en: 'Sorry for inconvenience\nwe are working on this',
            ru: '\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435 \u0437\u0430 \u043d\u0435\u0443\u0434\u043e\u0431\u0441\u0442\u0432\u0430\n\u043c\u044b \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u043c \u043d\u0430\u0434 \u044d\u0442\u0438\u043c',
          },
          If_you_have_any_ideas_or_opinions: {
            en: 'If you have any ideas, opinion or suggesions,',
            ru: '\u0415\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u0438\u0434\u0435\u0438, \u043c\u043d\u0435\u043d\u0438\u0435 \u0438\u043b\u0438 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f,',
          },
          dont_hesitate_to_share_with_us: {
            en: "don't hesitate to share them with us",
            ru: '\u0434\u0435\u043b\u0438\u0442\u0435\u0441\u044c \u0432\u0430\u0448\u0438\u043c\u0438 \u043c\u044b\u0441\u043b\u044f\u043c\u0438',
          },
          please_share_them_with_us: {
            en: 'please, share them with us',
            ru: '\u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0434\u0435\u043b\u0438\u0442\u0435\u0441\u044c \u0438\u043c\u0438 \u0441 \u043d\u0430\u043c\u0438',
          },
          Please_fill_required_fields: {
            en: 'Please fill required fields',
            ru: '\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u043e\u043b\u044f',
          },
          Email: {
            en: 'Email',
            ru: '\u042d\u043b. \u0430\u0434\u0440\u0435\u0441',
          },
          Tel: { en: 'Tel', ru: '\u0422\u0435\u043b' },
          Our_contacts: {
            en: 'Our contacts',
            ru: '\u041d\u0430\u0448\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b',
          },
        }
      },
      60070: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.HOST_NAME = void 0)
        var n = window.location.hostname
        t.HOST_NAME = n
      },
      27473: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.TIME_FORMAT = t.LOCALE = t.DATE_FORMAT = void 0)
        t.LOCALE = 'us'
        t.DATE_FORMAT = 'll'
        t.TIME_FORMAT = 'LT'
      },
      71491: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.MODAL_CONTENTS = void 0)
        var i = n(91555),
          o = n(15566),
          a = n(16714),
          r = n(99167),
          s = {
            Portfolio: i.Portfolio,
            Profile: o.Profile,
            CompetencyTags: a.CompetencyTags,
            AwaitView: r.AwaitView,
          }
        t.MODAL_CONTENTS = s
      },
      14333: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.SERVERS_AUTH = t.SERVERS_ANALYTICS = t.SERVERS = void 0)
        t.SERVERS_AUTH = {
          remote: 'https://api.template.com',
          localWebpack: 'http://127.0.0.1:4020',
          localServer: 'http://127.0.0.1:4020',
          timeout: 5e3,
        }
        t.SERVERS_ANALYTICS = {
          remote: 'https://analytics.template.com',
          localWebpack: 'http://127.0.0.1:8082',
          localServer: 'http://127.0.0.1:8082',
          timeout: 5e3,
        }
        t.SERVERS = {
          remote: 'https://api.template.com',
          localWebpack: 'http://127.0.0.1:3440',
          localServer: 'http://127.0.0.1:3000',
          timeout: 5e3,
        }
      },
      13214: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.competencyTags01R = void 0)
        var i = n(35603),
          o = [
            {
              idProfile: '1',
              title: 'Agile',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Best Practices and Methodologies',
              linkHref:
                'https://www.agilealliance.org/agile101/12-principles-behind-the-agile-manifesto/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '1. Our highest priority is to satisfy the customer through early and continuous delivery of valuable software\n2. Welcome changing requirements, even late in development.\n3. Deliver working software frequently with a preference to the shorter timescale\n4. Business people and developers must work together daily throughout the project\n5. Build projects around motivated individuals. Give them the environment, support they need, and trust them\n6. The most efficient method of conveying information to and within a development team is face-to-face conversation\n7. Working software is the primary measure of progress\n8. The sponsors, developers, and users should be able to maintain a constant pace indefinitely\n9. Continuous attention to technical excellence and good design enhances agility\n10. Simplicity--the art of maximizing the amount of work not done--is essential\n11. The best architectures, requirements, and designs emerge from self-organizing teams\n12. At regular intervals, the team reflects, tunes and adjusts its behavior accordingly',
            },
            {
              idProfile: '1',
              title: 'Automation Tools',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Best Practices and Methodologies',
              linkHref: 'https://webpack.js.org/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                'Webpack dev server\nJenkins automation server\nBrowser devtools\n  Network\n  Sources: breakpoints\n  LightHouse\n  Performance\n  Profiler (dev React)\n',
            },
            {
              idProfile: '1',
              title: 'BDD',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Best Practices and Methodologies',
              linkHref: 'https://www.agilealliance.org/glossary/bdd',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                "Behavior-driven development (BDD):\n1. BDD emphasizes collaboration between stakeholders to ensure a shared understanding of requirements.\n2. User stories capture requirements in a business context and describe software behavior from a user's perspective.\n3. Automated tests written in a natural language syntax like Gherkin verify software behavior against user stories.\n4. Natural language syntax makes it easier for stakeholders to understand requirements and software behavior.\n5. Continuous testing ensures software meets expected behavior and identifies issues early in the development process.\n6. Feedback between testing and development teams helps identify issues and ensures software meets requirements.\n  ",
            },
            {
              idProfile: '1',
              title: 'CI/CD',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Best Practices and Methodologies',
              linkHref: 'https://www.agilealliance.org/glossary/bdd',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                'DevOps tools, implementing pipelines:\n    \u2767 Jenkins\n    \u2767 GitHub\n    \u2767 Bitbucket\n    \u2767 GitLab\n    \u2767 CodePipeline\n    \nPipelines workflow:\n    \u2714 Software Build\n    \u2714 Static Code Analysis\n    \u2714 Artifact Management\n    \u2714 Unit Testing\n    \u2714 Deployment\n    \u2714 Integration Testing\n    \u2714 UI (Functional) Testing\n    \u2714 Security scanning\n',
            },
            {
              idProfile: '1',
              title: 'CLI',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Best Practices and Methodologies',
              linkHref: 'https://docs.npmjs.com/cli/npm',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                'Anaconda prompt\nConEmu Windows Terminal\nJenkins terminal\nGit Bash terminal\nMacOS terminal\nNodeJs command prompt\nUbuntu terminal\nWindows Powershell\nWindows CMD',
            },
            {
              idProfile: '1',
              title: 'Data Structures',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Best Practices and Methodologies',
              linkHref:
                'https://www.techtarget.com/searchdatamanagement/definition/data-structure',
              iconLibrary: 'Ionicons',
              iconName: 'grid-outline',
              tooltips:
                "Types of data structures:\n\n* Arrays: An array is a collection of elements of the same type, arranged in a contiguous block of memory. Elements can be accessed by their index, making it easy to iterate over the array or access specific elements.\n* Linked lists: A linked list is a collection of elements, each of which contains a pointer to the next element in the list. Linked lists can be used to implement stacks, queues, and other data structures.\n* Stacks: A stack is a collection of elements that supports two main operations: push (add an element to the top of the stack) and pop (remove the top element from the stack).\n* Queues: A queue is a collection of elements that supports two main operations: enqueue (add an element to the back of the queue) and dequeue (remove the front element from the queue).\n* Trees: A tree is a hierarchical data structure that consists of nodes connected by edges. Each node can have zero or more child nodes, and there is a single root node that is the topmost node in the tree.\n* Hash tables: A hash table is a data structure that allows for efficient lookup, insertion, and deletion of key-value pairs. Each key is hashed to an index in an array, and the corresponding value is stored at that index.\n* Heap: A heap is a tree-based structure in which each parent node's associated key value is greater than or equal to the key values of any of its children's key values.\n* Graph: A graph stores a collection of items in a nonlinear fashion. Graphs are made up of a finite set of nodes, also known as vertices, and lines that connect them, also known as edges. These are useful for representing real-world systems such as computer networks.\n* Trie: A trie, also known as a keyword tree, is a data structure that stores strings as data items that can be organized in a visual graph.",
            },
            {
              idProfile: '1',
              title: 'Design Patterns',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Best Practices and Methodologies',
              linkHref: 'https://en.wikipedia.org/wiki/Software_design_pattern',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                'Design patterns are advanced object-oriented solutions to commonly occurring software problems.  Patterns are about reusable designs and interactions of objects.\n* Frequently used\n  Facade, Singleton, Observer, State, Decorator\n* Creational Patterns\n  Abstract Factory - create an object through another function \n  Factory - create a type of object depending on certain conditions \n  Prototype - clone an fully initilized instance with default values \n  Singleton - create one and only one instance of the function, unique one \n  Flyweight - create a complex object "with lean resource/memory consumption" \n  Builder - create steps runner, step definer and step content functions and wire them to work together decoupling each one from another\n  Builder - (another version), create an object [one function], create actions with this object [second function], \n  Builder - create steps to run actions [third function] \n  Template - from content point of view this is variation of the Builder theme through .prototype\n* Structural Patterns\n  Adaptor - adapts a new function (to exchange the old one) to an old code workflow by providing the same input-output interface\n  Bridge - passes one object methods to another object methods and provides unity interfaces\n  Decorator - adds or modify to the object/ function other "responsibilities" through this property, props or modify them, returning next non-instantiated object\n  Facade - represent a whole subsystem via one class interface\n  Template - adds or modify properties through prototype. The particular case is to add an a chain of command as a function via prototype\n  Visitor - adds or modify properties of the instantiated object(function)\n  Proxy - utilizes object/props structure to reduce using other recourses caching the unique values\n* Behavioral Patterns\n  Command - to run commands with standard interface from common object property set, similar in some sense to the Builder pattern \n  Interpreter - to transform object state passing it "through another object"\n  Mediator - to apply to the object method of the mediator and leave a footprint of that in the mediator state Iterator - to approach to reach all array/object members/props with stated method\n  Composite - to create objects in a tree structure of the "root object"\n  Memento - to restore object state\n  Observer - to perform (fire) actions (run function for example) on an objects (after and once they are subscribed); to unsubscribe it from that action if necessary \n  State - to store, change and return an object, that reflects state of the app. Optionally, to keep state history\n  Chain of responsibility - to create a method that can get (extract) a sense from data in a chain, like doing math, or processing consequently',
            },
            {
              idProfile: '1',
              title: 'DevOps',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Best Practices and Methodologies',
              linkHref:
                'https://www.digital-management-blog.de/wp-content/uploads/2017/06/devops.jpg',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '* Plan -> Code -> Build -> Test <-> Release -> Deploy -> Operate -> Monitor\n\nCALMS framework:\nC   Culture - a culture of shared responsibility.\nA   Automation -  team members seek out ways to automate as many tasks as possible and are comfortable with the idea of continuous delivery.\nL   Lean - team members are able to visualize work in progress (WIP), limit batch sizes and manage queue lengths.\nM   Measurement - data is collected on everything and there are mechanisms in place that provide visibility into all systems.\nS   Sharing - there are user-friendly communication channels that encourage ongoing communication between development and operations.\n\n* Code \u2014 code development and review, source code management tools, code merging\n* Build \u2014 continuous integration tools, build status\n* Test \u2014 continuous testing tools that provide feedback on business risks\n* Package \u2014 artifact repository, application pre-deployment staging\n* Release \u2014 change management, release approvals, release automation\n* Configure \u2014 infrastructure configuration and management, Infrastructure as Code tools\n* Monitor \u2014 applications performance monitoring, end\u2013user experience\n',
            },
            {
              idProfile: '1',
              title: 'Issue-tracking systems',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Best Practices and Methodologies',
              linkHref:
                'https://en.wikipedia.org/wiki/Comparison_of_issue-tracking_systems',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips: 'JIRA\nRedmine\nBugzilla\n...',
            },
            {
              idProfile: '1',
              title: 'Kanban',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Best Practices and Methodologies',
              linkHref:
                'https://www.agilealliance.org/agile101/subway-map-to-agile-practices/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '1. Visualize work\n2. Limit work in process (WIP)\n3. Focus on work flow\n4. Continuously improve\n',
            },
            {
              idProfile: '1',
              title: 'Lints',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Best Practices and Methodologies',
              linkHref: '',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '1. Prettier\n2. ESLint\n3. SonarLint\n4. StyleLint\n5. PyLint\n6. Pylance\n7. PHP-sat\n',
            },
            {
              idProfile: '1',
              title: 'OOP',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Best Practices and Methodologies',
              linkHref:
                'https://en.wikipedia.org/wiki/Object-oriented_programming',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                'The four principles of OOP\n1. Encapsulation:\nEncapsulation means that the internal representation of an object is generally hidden from view outside of the object\u2019s definition. Typically, only the object\u2019s own methods can directly inspect or manipulate its fields.\n2. Abstraction\nAn abstraction is a simplified representation of a complex system or entity that focuses on its essential characteristics and behaviors, while ignoring the details that are not relevant to its use.\n3. Inheritance\nInheritance is a way to reuse code of existing objects, or to establish a subtype from an existing object.\n4. Polymorphism\nPolymorphism means one name, many forms. Polymorphism manifests itself by having multiple methods all with the same name, but slightly different functionality.',
            },
            {
              idProfile: '1',
              title: 'Programming Principles',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Best Practices and Methodologies',
              linkHref:
                'https://en.wikipedia.org/wiki/Category:Programming_principles',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                "Practival Principles of Programming\n\u2605 ASID for reliable transaction processing in database systems:\n    - Atomicity: Atomicity guarantees that a transaction is treated as a single indivisible unit of work.\n    - Consistency: Consistency ensures that a transaction brings the database from one valid state to another\n    - Isolation: Each transaction must be executed as if it were the only transaction executing in the system\n    - Durability: Durability ensures that once a transaction is committed, its effects persist if system failures\n\u2605 DRY (Don't Repeat Yourself):\n    - avoidance of duplicating code or logic in a system\n    - every piece of knowledge or functionality should have a single, unambiguous representation\n    - emphasis on the code reusability, maintainability, and reducing redundancy\n\u2605 SCRIPT: Self-documenting Code, Readability, Intelligibility (for AI), Program structure, Tidiness\n              to make the code easier to understand\n              to enable automated analysis and development\n              to reduce the need for excessive comments.\n              to enhance maintainability and reusability\n              to create clean and consise code\n    - Self-documenting Code: Use meaningful names and logical organization\n    - Readability: Prioritize readable patterns and clear syntax\n    - Intelligibility (for AI): Make the code understandable for artificial intelligence\n    - Program Structure: Organize code into logical components (modules, classes),\n          maintaine a single level of abstraction and opt composition over inheritance\n    - Tidiness: Apply consistent formatting, adhering to a coding style, and\n          avoide repetition and duplication.\n\u2605 SLAP: Single Level of Abstraction Principle\n\u2605 SOLID for creating software that is easier to understand, maintain, and extend: \n    - Single responsibility principle:\n          a class should have only a single responsibility\n          (i.e. changes to only one part of the software's\n          specification should be able to affect the specification of the class),\n    - Open/closed principle:\n          classes should be open for extension, but closed for modification.\n    - Liskov substitution principle:\n          objects in a program should be replaceable with instances of their subtypes without altering\n          the correctness of that program.\n    - Interface segregation principle:\n          many client-specific interfaces are better than one general-purpose interface.\n    - Dependency inversion principle:\n          one should depend upon abstractions, [not] concretions.\n\u2605 YAGNI is actually the longest acronym on this list. You Aren't Gonna Need It\n",
            },
            {
              idProfile: '1',
              title: 'Scrum',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Best Practices and Methodologies',
              linkHref:
                'https://www.agilealliance.org/agile101/subway-map-to-agile-practices/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                'Roles: Product Owner, Scrum Master, and Team Members\n\n1.  Iterative development\n2.  Timebox\n3.  Iterations\n4.  Daily meeting\n5.  Three Questions\n6.  Burndown chart\n7.  Task board\n8.  Definition of Done\n9.  Definition of Ready\n10. Point estimates\n11. Relative estimation\n12. Planning poker\n13. Backlog\n14. Backlog grooming',
            },
            {
              idProfile: '1',
              title: 'SDLC',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Best Practices and Methodologies',
              linkHref:
                'https://en.wikipedia.org/wiki/Systems_development_life_cycle',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                'The systems development life cycle (SDLC), \nor application development life-cycle: \n\u25cf Requirement analysis\n\u25cf Planning\n\u25cf Software design such as architectural design\n\u25cf Software development\n\u25cf Testing\n\u25cf Deploymenth\n',
            },
            {
              idProfile: '1',
              title: 'Search Algorithms',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Best Practices and Methodologies',
              linkHref:
                'https://en.wikipedia.org/wiki/Systems_development_life_cycle',
              iconLibrary: 'Ionicons',
              iconName: 'search',
              tooltips:
                '\n- Linear search: This is a simple search algorithm that sequentially checks each element of a list until it finds the target value.It is easy to implement, but can be slow for large datasets.\n- Binary search: This algorithm works by repeatedly dividing the search interval in half, eliminating half of the remaining elements at each step. It is much faster than linear search, but requires the data to be sorted first.\n- Hash search is a search algorithm that uses a hash function to map keys to array indices. Key-value pairs are stored in an array, and the hash function is used to calculate an index into the array for each key. When searching for a key, the hash function is first applied to the key to determine its index in the array. If the corresponding value at that index matches the target value, the search is successful. Collision resolution techniques may be used to resolve any potential collisions.\n- Depth - first search: This is a graph traversal algorithm that explores as far as possible along each branch before backtracking.It is often used to solve problems such as maze navigation and pathfinding.\n- Breadth-first search: This is another graph traversal algorithm that explores all the neighboring vertices at the current depth before moving on to the next depth level. It is often used for shortest path problems.\n- A* search: This is a heuristic search algorithm that combines breadth-first search with a heuristic function to guide the search towards the goal. It is commonly used in pathfinding and other optimization problems.\n- Interpolation search: This algorithm works by estimating the position of the target value based on its value and the values of the endpoints of the search interval. It can be faster than binary search for certain types of datasets.\n',
            },
            {
              idProfile: '1',
              title: 'TDD',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Best Practices and Methodologies',
              linkHref: 'https://www.agilealliance.org/glossary/tdd/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                'Test-driven development (TDD):\n1. Writing tests before code: In TDD, tests are written before the code. This helps to ensure that the code is focused on meeting the requirements of the tests.\n2. Red-Green-Refactor cycle: TDD follows a continuous cycle of writing failing tests (red), writing code to make the tests pass (green), and then refactoring the code to improve its design and maintainability.\n3. Small, incremental changes: TDD emphasizes making small, incremental changes to the codebase, which are easier to manage and less prone to introducing bugs.\n4. Test automation: TDD requires automated tests to be written, which can be run continuously to ensure that the codebase remains stable and meets the expected behavior.\n5. Code coverage: TDD emphasizes achieving high code coverage, meaning that as much of the codebase as possible is covered by automated tests.\n6. Integration with development tools: TDD requires integration with development tools, such as continuous integration (CI) systems, to automate the process of running tests and providing feedback to developers.',
            },
            {
              idProfile: '1',
              title: 'Testing/Debugging',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Best Practices and Methodologies',
              linkHref: '',
              iconLibrary: 'Ionicons',
              iconName: 'bug-outline',
              tooltips:
                'BDD Behavior Driven Development\nTDD Test Driven Development\nUnit testing\n  \u2714 Mocha - mochajs.org\n  \u2714 Enzyme - airbnb.io/enzyme/\n  \u2714 Sinon - sinonjs.org/\n  \u2714 Jest - facebook.github.io/jest/\n  \u2714 Chai - chaijs.com\n  \u2714 Jasmine - jasmine.github.io\n  \u2714 Karma - karma-runner.github.io\nIntegration testing\n  \u2714 Cypress - cypress.io\n  \u2714 TestCafe - testcafe.devexpress.com/\nBrowser devtools\n  \u2714 Network\n  \u2714 Sources: breakpoints\n  \u2714 LightHouse\n  \u2714 Performance\n  \u2714 Profiler (dev React)\nLint\n  \u2714 Eslint google style: npm run eslint filename.js\n  \u2714 NodeJs htmllint: htmllint filename.html\n',
            },
            {
              idProfile: '1',
              title: 'Version Control/Git',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Best Practices and Methodologies',
              linkHref:
                'https://dont-be-afraid-to-commit.readthedocs.io/en/latest/git/commandlinegit.html',
              iconLibrary: 'Ionicons',
              iconName: 'git-branch-outline',
              tooltips:
                'Bitbucket.org\nGithub.com\n\n$ git clone https://... \n$ git clone --branch ... https://...\n$ git status\n$ git branch -r\n$ git fetch --all --prune\n$ git checkout ...\n$ git add -u\n$ git commit -m "..."\n$ git pull\n$ git push -u origin ...\n',
            },
            {
              idProfile: '1',
              title: 'Ajax',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref: 'https://www.w3.org/TR/XMLHttpRequest/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  The XMLHttpRequest specification is an API that \n  provides scripted client functionality \n  for transferring data between a client and a server',
            },
            {
              idProfile: '1',
              title: 'Amp',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref: 'https://www.ampproject.org/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  The AMP Project is an open-source initiative aiming to make the web better for all. \n  The project enables the creation of websites and ads that are \n  consistently fast, beautiful and high-performing \n  across devices and distribution platforms.',
            },
            {
              idProfile: '1',
              title: 'Ant Design',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref: 'https://ant.design/docs/react/introduce',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  A React UI library antd that contains a set of high quality components and demos for building rich,\n  interactive user interfaces.',
            },
            {
              idProfile: '1',
              title: 'Axios',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref: 'https://github.com/axios/axios',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  Request method aliases \n  Concurrency (Deprecated) \n  Creating an instance \n  Instance methods \n  Request Config \n  Response Schema \n  Config Defaults \n  Global axios defaults \n  Custom instance defaults \n  Config order of precedence \n  Interceptors \n  Handling Errors \n  Cancellation \n  Using application/x-www-form-urlencoded format \n  Browser \n  Node.js \n  Query string \n  Form data \n  Semver \n  Promises',
            },
            {
              idProfile: '1',
              title: 'Bootstrap',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref: 'https://bootstrapdocs.com/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  Bootstrap is the most popular HTML, CSS, and JavaScript framework \n  for developing responsive, mobile-first web sites.\n\n  BOOTSTRAP GRID\n  BS Grid System\n  BS Stacked/Horizontal\n  BS Grid XSmall\n  BS Grid Small\n  BS Grid Medium\n  BS Grid Large\n  BS Grid XLarge\n  BOOTSTRAP\n  BS Typography\n  BS Colors\n  BS Tables\n  BS Images\n  BS Jumbotron\n  BS Alerts\n  BS Buttons\n  BS Button Groups\n  BS Badges\n  BS Progress Bars\n  BS Pagination\n  BS List Groups\n  BS Cards\n  BS Dropdowns\n  BS Collapse\n  BS Navs\n  BS Navbar\n  BS Forms\n  BS Inputs\n  BS Carousel\n  BS Modal\n  BS Tooltip\n  BS Popover\n  BS Scrollspy\n  BS Utilities',
            },
            {
              idProfile: '1',
              title: 'BEM methodology',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref: 'https://en.bem.info/methodology/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  * to work in the common terms of blocks, elements and modifiers in all technologies (HTML~CSS~JS)\n  * to create independent components (blocks) at the level of JavaScript\n  * to divide the code into small independent pieces, for ease of working with individual blocks\n  * to describe the behavior of a block as a set of actions and conditions for their implementation\n  * to access the elements of a block using the block API and does not violate the principle of encapsulation\n  * to change the behavior of blocks, elements and modifiers level overrides by analogy with CSS\n  * re-use the blocks',
            },
            {
              idProfile: '1',
              title: 'Browser Developer Tools',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref:
                'https://developers.google.com/web/tools/chrome-devtools/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  Console debugging\n  Source variable observing\n  Element browsing\n  Network request analysing\n  Device Mode for testing Responsive and Device-specific Viewports\n  Profiling',
            },
            {
              idProfile: '1',
              title: 'Cookie',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref: 'https://tools.ietf.org/html/rfc6265',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                "  An HTTP cookie is a small piece of data sent from a website \n  and stored on the user's computer \n  by the user's web browser while the user is browsing.\n  Cookies were designed to be a reliable mechanism for websites \n  to remember stateful information \n  (such as items added in the shopping cart in an online store) or \n  to record the user's browsing activity \n  (including clicking particular buttons, logging in, \n  or recording which pages were visited in the past).",
            },
            {
              idProfile: '1',
              title: 'CSS Preprocessing',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref: 'https://lesscss.org/functions/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips: '  Lesscss.org\n  Sass-lang.com\n  Stylus-lang.com',
            },
            {
              idProfile: '1',
              title: 'Css3',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref: 'https://www.w3.org/Style/CSS/specs.en.html',
              iconLibrary: 'Ionicons',
              iconName: 'logo-css3',
              tooltips:
                '  Rounded Corners \n  Border Images \n  Backgrounds \n  Colors \n  Gradients \n  Shadows \n  Text \n  Fonts \n  2D Transforms \n  3D Transforms \n  Transitions \n  Animations \n  Images \n  object-fit \n  Buttons \n  Pagination \n  Multiple Columns \n  User Interface \n  Box Sizing \n  Flexbox \n  Media Queries',
            },
            {
              idProfile: '1',
              title: 'ECMAScript6',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref: 'https://github.com/lukehoban/es6features',
              iconLibrary: 'Ionicons',
              iconName: 'logo-javascript',
              tooltips:
                '  ES7 includes the following new features:\n  arrows\n  classes\n  enhanced object literals\n  template strings\n  destructuring\n  default + rest + spread\n  let + const\n  iterators + for..of\n  generators\n  unicode\n  modules\n  module loaders\n  map + set + weakmap + weakset\n  proxies\n  symbols\n  subclassable built-ins\n  promises\n  math + number + string + array + object APIs\n  binary and octal literals\n  reflect api\n  tail calls',
            },
            {
              idProfile: '1',
              title: 'ESLint',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref: 'https://eslint.org/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  ESLint statically analyzes your code to quickly find problems. \n  Many problems ESLint finds can be automatically fixed.',
            },
            {
              idProfile: '1',
              title: 'Icons lib',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref: 'https://www.w3schools.com/icons/icons_reference.asp',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  Font-awesome https://fontawesome.io/\n  Bootstrap icons\n  Google icons',
            },
            {
              idProfile: '1',
              title: 'Html5',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref: 'https://www.w3.org/TR/html5/',
              iconLibrary: 'Ionicons',
              iconName: 'logo-html5',
              tooltips:
                '  HTML GRAPHICS\n  HTML Canvas\n  HTML SVG\n  HTML Google Maps\n  HTML MEDIA\n  HTML Video\n  HTML Audio\n  HTML Plug-ins\n  HTML YouTube \n  HTML APIs\n  HTML Geolocation\n  HTML Drag/Drop\n  HTML Web Storage\n  HTML Web Workers\n  HTML SSE',
            },
            {
              idProfile: '1',
              title: 'HTML DOM',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref: 'https://www.w3.org/TR/DOM-Level-1/introduction.html',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  The Document Object Model (DOM) \n  is an application programming interface (API) for HTML and XML documents.\n  It defines the logical structure of documents and the way a document is accessed and manipulated.\n\n  Browser BOM\n  Window\n  Navigator\n  Screen\n  History\n  Location \n\n  HTML DOM\n  DOM Document \n  DOM Elements\n  DOM Attributes\n  DOM Events\n  DOM Style',
            },
            {
              idProfile: '1',
              title: 'JavaScript',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref:
                'https://www.ecma-international.org/publications/standards/Stnindex.htm',
              iconLibrary: 'Ionicons',
              iconName: 'logo-javascript',
              tooltips:
                '  JS Statements\n  JS Comments\n  JS Variables\n  JS Operators\n  JS Arithmetic\n  JS Assignment\n  JS Data Types\n  JS Functions\n  JS Objects\n  JS Scope\n  JS Events\n  JS Strings\n  JS String Methods\n  JS Numbers\n  JS Number Methods\n  JS Math\n  JS Random\n  JS Dates\n  JS Date Formats\n  JS Date Methods\n  JS Arrays\n  JS Array Methods\n  JS Array Sort\n  JS Booleans\n  JS Comparisons\n  JS Conditions\n  JS Switch\n  JS Loop For\n  JS Loop While\n  JS Break\n  JS Type Conversion\n  JS Bitwise\n  JS RegExp\n  JS Errors\n  JS Debugging\n  JS Hoisting\n  JS Strict Mode\n  JS Style Guide\n  JS Best Practices\n  JS Mistakes\n  JS Performance\n  JS Reserved Words\n  JS Versions\n  JS JSON',
            },
            {
              idProfile: '1',
              title: 'Jest',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref: 'https://jestjs.io/docs/api',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  afterAll(fn, timeout)\n  afterEach(fn, timeout)\n  beforeAll(fn, timeout)\n  beforeEach(fn, timeout)\n  describe(name, fn)\n  describe.each(table)(name, fn, timeout)\n  describe.only(name, fn)\n  describe.only.each(table)(name, fn)\n  describe.skip(name, fn)\n  describe.skip.each(table)(name, fn)\n  test(name, fn, timeout)\n  test.concurrent(name, fn, timeout)\n  test.concurrent.each(table)(name, fn, timeout)\n  test.concurrent.only.each(table)(name, fn)\n  test.concurrent.skip.each(table)(name, fn)\n  test.each(table)(name, fn, timeout)\n  test.failing(name, fn, timeout)\n  test.failing.each(name, fn, timeout)\n  test.only.failing(name, fn, timeout)\n  test.skip.failing(name, fn, timeout)\n  test.only(name, fn, timeout)\n  test.only.each(table)(name, fn)\n  test.skip(name, fn)\n  test.skip.each(table)(name, fn)\n  test.todo(name)',
            },
            {
              idProfile: '1',
              title: 'jQuery',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref: 'https://jquery.com/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  jQuery Effects\n  jQuery Hide/Show\n  jQuery Fade\n  jQuery Slide\n  jQuery Animate\n  jQuery stop()\n  jQuery Callback\n  jQuery Chaining\n  jQuery HTML\n  jQuery Get\n  jQuery Set\n  jQuery Add\n  jQuery Remove\n  jQuery CSS Classes\n  jQuery css()\n  jQuery Dimensions\n  jQuery Traversing\n  jQuery Ancestors\n  jQuery Descendants\n  jQuery Siblings\n  jQuery Filtering\n  jQuery AJAX\n  jQuery Load\n  jQuery Get/Post\n  jQuery Misc\n  jQuery noConflict()\n  jQuery Filters',
            },
            {
              idProfile: '1',
              title: 'jQuery-UI',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref: 'https://jqueryui.com/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  INTERACTIONS\n  Draggable\n  Droppable\n  Resizable\n  Selectable\n  Sortable\n  WIDGETS\n  Accordion\n  Autocomplete\n  Button\n  Check box radio\n  Controlgroup\n  Datepicker\n  Dialog\n  Menu\n  Progressbar\n  Selectmenu\n  Slider\n  Spinner\n  Tabs\n  Tooltip\n  EFFECTS\n  Add Class\n  Color Animation\n  Easing\n  Effect\n  Hide\n  Remove Class\n  Show\n  Switch Class\n  Toggle\n  Toggle Class\n  UTILITIES\n  Position\n  Widget Factory',
            },
            {
              idProfile: '1',
              title: 'JS Frameworks',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref: '',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  AMP\n  AngularJS\n  Bootstrap\n  jQuery\n  jQuery-UI\n  Less\n  Lodash\n  Material Design\n  Moment\n  Normalizr\n  ReactJS\n  React native\n  React-router\n  Redux\n  Semantic-ui-react',
            },
            {
              idProfile: '1',
              title: 'JSONP',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref: 'https://en.wikipedia.org/wiki/JSONP',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  JSONP works by constructing a \u201cscript\u201d element (either in HTML markup or\n  inserted into the DOM via JavaScript),\n  which requests to a remote data service location. The response is a javascript\n  loaded on to your browser with name of the pre-defined function along with parameter\n  being passed that is tht JSON data being requested. When the script executes,\n  the function is called along with JSON data, allowing the requesting page to receive and process the data.',
            },
            {
              idProfile: '1',
              title: 'Less',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref: 'https://lesscss.org/functions/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  As an extension to CSS, Less \n  is not only backwards compatible with CSS,\n  but the extra features it adds use existing CSS syntax.\n  This makes learning Less a breeze, and if in doubt,\n  lets you fall back to vanilla CSS.',
            },
            {
              idProfile: '1',
              title: 'Lodash',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref: 'https://lodash.com/docs/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  Array\n  Collection\n  Date\n  Function\n  Lang\n  Util',
            },
            {
              idProfile: '1',
              title: 'Material Design',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref: 'https://material.io/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  Tools: COLOR TOOL\n  \n  Material Design is a unified system \n  that combines theory, resources, and tools\n  for crafting digital experiences.',
            },
            {
              idProfile: '1',
              title: 'Microformats/Schema.org',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref: 'https://schema.org/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  Schema.org is a joint effort, in the spirit of sitemaps.org, \n  to improve the web by creating a structured data markup schema \n  supported by major search engines. \n  On-page markup helps search engines understand \n  the information on web pages and provide richer search results. \n  A shared markup vocabulary makes easier for webmasters \n  to decide on a markup schema and get the maximum benefit for their efforts. \n  Search engines want to make it easier for people to find relevant information on the web. \n  Markup can also enable new tools and applications that make use of the structure.',
            },
            {
              idProfile: '1',
              title: 'Mocha',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref: 'https://mochajs.org/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, \n  making asynchronous testing simple and fun. Mocha tests run serially, \n  allowing for flexible and accurate reporting, \n  while mapping uncaught exceptions to the correct test cases.\n\n  FEATURES\n  browser support\n  simple async support, including promises\n  test coverage reporting\n  string diff support\n  javascript API for running tests\n  proper exit status for CI support etc\n  auto-detects and disables coloring for non-ttys\n  maps uncaught exceptions to the correct test case\n  async test timeout support\n  test retry support\n  test-specific timeouts\n  growl notification support\n  reports test durations\n  highlights slow tests\n  file watcher support\n  global variable leak detection\n  optionally run tests that match a regexp\n  auto-exit to prevent \u201changing\u201d with an active loop\n  easily meta-generate suites & test-cases\n  mocha.opts file support\n  clickable suite titles to filter test execution\n  node debugger support\n  detects multiple calls to done()\n  use any assertion library you want\n  extensible reporting, bundled with 9+ reporters\n  extensible test DSLs or \u201cinterfaces\u201d\n  before, after, before each, after each hooks\n  arbitrary transpiler support (coffee-script etc)\n  TextMate bundle',
            },
            {
              idProfile: '1',
              title: 'MVC',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref:
                'https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                "  Components\n  MODEL expresses the application's behavior in terms of the problem domain, independent of the user interface.  It directly manages the data, logic and rules of the application.\n  VIEW can be any output representation of information, such as a chart or a diagram.  Multiple views of the same information are possible, such as a bar chart for management and a tabular view for accountants.\n  CONTROLLER accepts input and converts it to commands for the model or view.\n  \n  Interactions\n  MODEL stores data that is retrieved according to commands from the controller and displayed in the view.\n  VIEW generates new output to the user based on changes in the model.\n  CONTROLLER can send commands to the model to update the model's state (e.g., editing a document).   It can also send commands to its associated view to change the view's presentation of the model   (e.g., scrolling through a document, movement of document).",
            },
            {
              idProfile: '1',
              title: 'OAuth',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref: 'https://en.wikipedia.org/wiki/OAuth',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  OAuth (Open Authorization) is an open standard for access delegation,\n  commonly used as a way for Internet users to grant websites or applications access\n  to their information on other websites but without giving them the passwords.\n  This mechanism is used by companies such as Google, Facebook, Twitter, Amazon, Microsoft and\n  to permit the users to share information about their accounts with third-party\n  applications or websites.\n  ',
            },
            {
              idProfile: '1',
              title: 'ReactJS',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref: 'https://facebook.github.io/react/',
              iconLibrary: 'Ionicons',
              iconName: 'logo-react',
              tooltips:
                "* React Component API: The React Component API is the core of the React library and provides a way to create reusable UI components. The API includes methods for defining a component's state, props, and lifecycle methods, as well as the render() method, which defines the component's HTML output.\n* React DOM API: The React DOM API is used to manipulate the Document Object Model (DOM) of a web page. It provides a set of methods that can be used to create, update, and delete HTML elements, as well as to handle events and manage the state of the user interface.\n* React Router API: The React Router API is a library that provides a way to manage routing and navigation in a React application. It includes methods for defining routes, navigating between pages, and passing data between components.\n* React Redux API: The React Redux API is a library that provides a way to manage the state of a React application. It includes methods for defining and updating the application state, as well as for handling asynchronous data fetching and updating.\n* React Hooks API: The React Hooks API is a way to add state and lifecycle methods to functional components. It provides a set of built-in hooks that can be used to manage state, perform side effects, and respond to user events.\n\n- React Functional Components\n- React Class Components\n- Rendering Elements\n- Components and Props\n- State and Lifecycle\n- Handling Events\n- Conditional Rendering\n- Lists and Keys\n- Forms\n- Lifting State Up\n- Composition vs Inheritance",
            },
            {
              idProfile: '1',
              title: 'React Hooks',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref: 'https://react.dev/reference/react',
              iconLibrary: 'Ionicons',
              iconName: 'logo-react',
              tooltips:
                '- useState: allows a functional component to have stateful data.\n- useEffect: allows a functional component to perform side effects like fetching data from APIs, manipulating the DOM, or - interacting with the browser.\n- useContext: allows a functional component to consume data from a parent component without having to pass the data through every level of the component tree.\n- useReducer: allows a functional component to have a more complex state that requires multiple actions.\nuseCallback: optimizes the performance of a functional component by memoizing a function so that it is not recreated on every render.\n- useMemo: optimizes the performance of a functional component by memoizing a value so that it is not recalculated on every render.\n- useRef: allows a functional component to access a mutable value that persists across renders.\n- useLayoutEffect: similar to useEffect, but runs synchronously after all DOM mutations. Can be used for DOM measurements and other side effects that require synchronous access to the DOM.\n- useImperativeHandle: allows a functional component to expose an imperative API to its parent component.\n- useDebugValue: allows a custom label to be attached to a hook value for easier debugging in React DevTools.\n      ',
            },
            {
              idProfile: '1',
              title: 'React Native',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref: 'https://reactnative.dev/',
              iconLibrary: 'Ionicons',
              iconName: 'logo-react',
              tooltips:
                '  ActivityIndicator\n  Button\n  FlatList\n  Image\n  ImageBackground\n  KeyboardAvoidingView\n  Modal\n  RefreshControl\n  SafeAreaView\n  ScrollView\n  SectionList\n  StatusBar\n  Switch\n  Text\n  TextInput\n  TouchableHighlight\n  TouchableOpacity\n  TouchableWithoutFeedback\n  View\n  VirtualizedList\n  Android Components\n  DrawerLayoutAndroid\n  TouchableNativeFeedback\n  iOS Components\n  InputAccessoryView\n\n    AccessibilityInfo\n  Alert\n  Animated\n  Appearance\n  AppRegistry\n  AppState\n  DevSettings\n  Dimensions\n  Easing\n  InteractionManager\n  Keyboard\n  LayoutAnimation\n  Linking\n  PanResponder\n  PixelRatio\n  Share\n  StyleSheet\n  Systrace\n  Transforms\n  Vibration\n  Hooks\n  useColorScheme\n  useWindowDimensions\n  Android APIs\n  BackHandler\n  PermissionsAndroid\n  ToastAndroid\n  iOS APIs\n  ActionSheetIOS\n  Settings',
            },
            {
              idProfile: '1',
              title: 'React Navigation',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref:
                'https://reactnavigation.org/docs/navigation-container/',
              iconLibrary: 'Ionicons',
              iconName: 'logo-react',
              tooltips:
                "\u2022 NavigationContainer is responsible for managing your app state and linking your top-level navigator\n\u2022 ServerContainer component provides utilities to render your app on server with the correct navigation state\n\u2022 Group components are used to group several screens inside a navigator.\n\u2022 Screen components are used to configure various aspects of screens inside a navigator.\n\u2022 Options prop on Screen\n\u2022 Route Screen prop contains various information regarding current route\n\u2022 Navigation Screen prop contains various convenience functions to dispatch navigation actions:\n    - navigate - go to another screen, figures out the action it needs to take to do it\n    - reset - wipe the navigator state and replace it with a new route\n    - goBack - close active screen and move back in the stack\n    - setParams - make changes to route's params\n    - dispatch - send an action object to update the navigation state\n    - setOptions - update the screen's options\n    - isFocused - check whether the screen is focused\n    - addListener - subscribe to updates to events from the navigators\n\u2022 NavigationContext provides the navigation object (same object as the navigation prop)\n\u2022 Navigation events to listen to various events emitted by React Navigation to get notified of certain events\n\u2022 Navigation state to store the navigation structure and history of the app\n\u2022 Link component renders a component that can navigate to a screen on press\n\u2022 Hooks\n    - useNavigation\n    - useRoute\n    - useNavigationState\n    - useFocusEffect\n    - useIsFocused\n    - useLinkTo\n    - useLinkProps\n    - useLinkBuilder\n    - useScrollToTop\n    - useTheme\n\u2022 Actions\n    - CommonActions\n    - StackActions\n    - DrawerActions\n    - TabActions\n",
            },
            {
              idProfile: '1',
              title: 'React-router 6',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref: 'https://reacttraining.com/react-router/',
              iconLibrary: 'Ionicons',
              iconName: 'logo-react',
              tooltips:
                'Routers\n  Picking a Router \ud83c\udd95\n  createBrowserRouter \ud83c\udd95\n  createHashRouter \ud83c\udd95\n  createMemoryRouter \ud83c\udd95\n  createStaticHandler \ud83c\udd95\n  createStaticRouter \ud83c\udd95\n  RouterProvider \ud83c\udd95\n  StaticRouterProvider \ud83c\udd95\nRouter Components\n  BrowserRouter\n  HashRouter\n  MemoryRouter\n  NativeRouter\n  Router\n  StaticRouter\nRoute\n  Route \ud83c\udd95\n  action \ud83c\udd95\n  errorElement \ud83c\udd95\n  lazy \ud83c\udd95\n  loader \ud83c\udd95\n  shouldRevalidate \ud83c\udd95\nComponents\n  Await \ud83c\udd95\n  Form \ud83c\udd95\n  Link\n  Link (RN)\n  NavLink\n  Navigate\n  Outlet\n  Route\n  Routes\n  ScrollRestoration \ud83c\udd95\nHooks\n  useActionData \ud83c\udd95\n  useAsyncError \ud83c\udd95\n  useAsyncValue \ud83c\udd95\n  useBeforeUnload \ud83c\udd95\n  useFetcher \ud83c\udd95\n  useFetchers \ud83c\udd95\n  useFormAction \ud83c\udd95\n  useHref\n  useInRouterContext\n  useLinkClickHandler\n  useLinkPressHandler\n  useLoaderData \ud83c\udd95\n  useLocation\n  useMatch\n  useMatches \ud83c\udd95\n  useNavigate\n  useNavigation \ud83c\udd95\n  useNavigationType\n  useOutlet\n  useOutletContext\n  useParams\n  useResolvedPath\n  useRevalidator \ud83c\udd95\n  useRouteError \ud83c\udd95\n  useRouteLoaderData \ud83c\udd95\n  useRoutes\n  useSearchParams\n  useSearchParams (RN)\n  useSubmit \ud83c\udd95\nFetch Utilities\n  json \ud83c\udd95\n  redirect \ud83c\udd95\nUtilities\n  createRoutesFromChildren\n  createRoutesFromElements\n  createSearchParams\n  defer \ud83c\udd95\n  generatePath\n  isRouteErrorResponse \ud83c\udd95\n  Location\n  matchPath\n  matchRoutes\n  renderMatches\n  resolvePath',
            },
            {
              idProfile: '1',
              title: 'Redux',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref: 'https://redux.js.org',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  Actions\n  Reducers\n  Store\n  Data Flow\n  Async Actions\n  Async Flow\n  Middleware',
            },
            {
              idProfile: '1',
              title: 'Redux-saga',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref: 'https://redux-saga.js.org/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  Middleware API\n  createSagaMiddleware(options)\n  middleware.run(saga, ...args)\n  Effect creators\n  take(pattern)\n  takeMaybe(pattern)\n  take(channel)\n  takeMaybe(channel)\n  takeEvery(pattern, saga, ...args)\n  takeEvery(channel, saga, ...args)\n  takeLatest(pattern, saga, ..args)\n  takeLatest(channel, saga, ..args)\n  takeLeading(pattern, saga, ..args)\n  takeLeading(channel, saga, ..args)\n  put(action)\n  putResolve(action)\n  put(channel, action)\n  call(fn, ...args)\n  call([context, fn], ...args)\n  call([context, fnName], ...args)\n  call({context, fn}, ...args)\n  apply(context, fn, args)\n  cps(fn, ...args)\n  cps([context, fn], ...args)\n  cps({context, fn}, ...args)\n  fork(fn, ...args)\n  fork([context, fn], ...args)\n  fork({context, fn}, ...args)\n  spawn(fn, ...args)\n  spawn([context, fn], ...args)\n  join(task)\n  join([...tasks])\n  cancel(task)\n  cancel([...tasks])\n  cancel()\n  select(selector, ...args)\n  actionChannel(pattern, [buffer])\n  flush(channel)\n  cancelled()\n  setContext(props)\n  getContext(prop)\n  delay(ms, [val])\n  throttle(ms, pattern, saga, ..args)\n  throttle(ms, channel, saga, ..args)\n  debounce(ms, pattern, saga, ..args)\n  debounce(ms, channel, saga, ..args)\n  retry(maxTries, delay, fn, ...args)\n  Effect combinators\n  race(effects)\n  race([...effects])\n  all([...effects]) (aka parallel effects)\n  all(effects)',
            },
            {
              idProfile: '1',
              title: 'Regex',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref: 'https://perldoc.perl.org/perlre.html',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  Modifiers\n  Regular Expressions\n  Quoting metacharacters\n  Extended Patterns\n  Backtracking\n  Special Backtracking Control Verbs\n  \\1 and $1\n  Repeated Patterns Matching a Zero-length Substring',
            },
            {
              idProfile: '1',
              title: 'Responsive Design',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref: 'https://bootstrapdocs.com/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  Responsive Web Design makes your web page \n  look good on all devices (desktops, tablets, and phones).\n  \n  Responsive Web Design is about using HTML and CSS to\n  resize, hide, shrink, enlarge, or move the content \n  to make it look good on any screen',
            },
            {
              idProfile: '1',
              title: 'Semantic-UI-React',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref: 'https://react.semantic-ui.com/introduction',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  Semantic UI React is the official React integration for Semantic UI:\n  Elements\n  Collections\n  Views\n  Modules\n  Behaviors\n  Addons\n  ',
            },
            {
              idProfile: '1',
              title: 'Seo',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref:
                'https://support.google.com/webmasters/answer/35769?hl=en',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  Submitting to Search Engines\n  Search Appearance\n  Structured Data\n  Rich Cards\n  Data Highlighter\n  HTML Improvements\n  Accelerated Mobile Pages\n  Search Traffic\n  Search Analytics\n  Links to Your Site\n  Internal Links\n  Manual Actions\n  International Targeting\n  Mobile Usability\n  Search Index\n  Index Status\n  Blocked Resources\n  Remove URLs\n  Crawl\n  Crawl Errors\n  Crawl Stats\n  Fetch as Google\n  robots.txt Tester\n  Sitemaps\n  URL Parameters\n  Security Issues\n  Web Tools',
            },
            {
              idProfile: '1',
              title: 'Session',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref: 'https://php.net/manual/en/features.sessions.php',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  Session support consists of a way \n  to preserve certain data across subsequent accesses.\n  This enables you to build more customized applications \n  and increase the appeal of your web site.',
            },
            {
              idProfile: '1',
              title: 'SPA',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref: 'https://en.wikipedia.org/wiki/Single-page_application',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  A single-page application (SPA) is a web application or web site that\n  interacts with the user by dynamically rewriting the current page \n  rather than loading entire new pages from a server.\n  Interaction with the single page application often involves \n  dynamic communication with the web server behind the scenes.',
            },
            {
              idProfile: '1',
              title: 'SSO',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref:
                'https://www.techtarget.com/searchsecurity/definition/single-sign-on',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                'Single sign-on (SSO) is a session and user authentication service that permits a user to use one set of login credentials -- for example, a username and password -- to access multiple applications.\n\nSSO services use protocols:\n* In a Kerberos-based setup, once user credentials are provided, a ticket-granting ticket (TGT) is issued. The TGT fetches service tickets for other applications the user wants to access, without asking the user to reenter credentials.\n* SAML is an Extensible Markup Language standard that facilitates the exchange of user authentication and authorization data across secure domains. SAML-based SSO services involve communications among the user, an identity provider that maintains a user directory and a service provider.\n* Smart card-based SSO asks an end user to use a card holding the sign-in credentials for the first login. Once the card is used, the user does not have to reenter usernames or passwords. SSO smart cards store either certificates or passwords.\n',
            },
            {
              idProfile: '1',
              title: 'Typescript',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref: 'https://www.typescriptlang.org/docs/home.html',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                "\u2605 Basic Types\n    \u2022 Boolean: a boolean value (true or false).\n    \u2022 Number: a numeric value.\n    \u2022 String: a sequence of characters.\n    \u2022 Array: an ordered collection of values of the same type.\n    \u2022 Tuple: an array-like structure with a fixed number of elements of different types.\n    \u2022 Enum: a set of named constant values.\n    \u2022 Any: a value of any type, disabling type checking.\n    \u2022 Void: the absence of any type, often used as the return type of functions that don't return a value.\n    \u2022 Null and Undefined: the absence of a value.\n    \u2022 Object: a non-primitive type.\n    \u2022 Union: a value that can be one of several types.\n    \u2022 Intersection: a type that has properties and methods from multiple other types.\n\u2605 Optional Chaining - feature that allows you to safely access properties or call methods on an object even if some intermediate properties are null or undefined.\n\u2605 Mapped Types - feature that provide a way to iterate over the properties of an object type and define new types based on the properties' characteristics\n\u2605 Utility types facilitate common type transformations\n    \u2022 Awaited<Type>\n    \u2022 Partial<Type>\n    \u2022 Required<Type>\n    \u2022 Readonly<Type>\n    \u2022 Record<Keys, Type>\n    \u2022 Pick<Type, Keys>\n    \u2022 Omit<Type, Keys>\n    \u2022 Exclude<UnionType, ExcludedMembers>\n    \u2022 Extract<Type, Union>\n    \u2022 NonNullable<Type>\n    \u2022 Parameters<Type>\n    \u2022 ConstructorParameters<Type>\n    \u2022 ReturnType<Type>\n    \u2022 InstanceType<Type>\n    \u2022 ThisParameterType<Type>\n    \u2022 OmitThisParameter<Type>\n    \u2022 ThisType<Type>\n    \u2022 Intrinsic String Manipulation Types\n    \u2022 Uppercase<StringType>\n    \u2022 Lowercase<StringType>\n    \u2022 Capitalize<StringType>\n    \u2022 Uncapitalize<StringType>\nVariable Declarations\nInterfaces\nClasses\nFunctions\nGenerics > provide a way to parameterize types, allowing you to define placeholders for specific types that are determined when the component or function is used.\nEnums\nType Inference\nType Compatibility\nAdvanced Types\nSymbols\nIterators and Generators\nModules\nNamespaces\nNamespaces and Modules\nModule Resolution\nDeclaration Merging\nJSX\nDecorators\nMixins\nTriple-Slash Directives\nType Checking JavaScript Files",
            },
            {
              idProfile: '1',
              title: 'Webpack',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Front-end',
              linkHref: 'https://webpack.js.org/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  Entry Points\n  Output\n  Loaders\n  Plugins\n  Configuration\n  Modules\n  Module Resolution\n  Dependency Graph\n  Targets',
            },
            {
              idProfile: '1',
              title: 'Analytics/ Monitoring',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Back-end',
              linkHref: 'https://www.google.com/analytics/',
              iconLibrary: 'Ionicons',
              iconName: 'analytics-outline',
              tooltips:
                '  Splunk \n  New relic \n  Google Analytics \n  Yandex Analytics  ',
            },
            {
              idProfile: '1',
              title: 'Apollo',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Back-end',
              linkHref: 'https://www.apollographql.com/docs/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  Apollo Server\n  Apollo Client\n  iOS and Android clients\n  Apollo CLI\n  Cloud services\n  Client registry\n  Operation registry\n  Trace warehouse',
            },
            {
              idProfile: '1',
              title: 'AWS serveless',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Back-end',
              linkHref:
                'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/introduction.html',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                "\u2714 API Gateway - A fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale.\n\u2714 AppSync is a fully managed service that simplifies the development of serverless GraphQL APIs for web and mobile applications.\n\u2714 CloudFront - A fast content delivery network(CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency.\n\u2714 CloudWatch - A monitoring and observability service for resources and applications.\n\u2714 CodePipeline - A fully managed continuous integration and continuous delivery service.\n\u2714 Cognito - A fully managed service that provides user sign-up, sign-in, and access control to web and mobile apps.\n\u2714 DynamoDB - A fully-managed NoSQL database service that provides fast and predictable performance with seamless scalability.\n\u2714 Identity and Access Management (IAM) - A web service that helps you securely control access to resources for your users.\n\u2714 Kinesis - A platform for streaming data on the cloud, which can be used for real-time data processing and analysis.\n    - Kinesis Data Streams: gives control over the ingestion and processing, retains data of 24 hours up to 7 days, partitions the data into shards, requires a processing applications\n    - Kinesis Data Firehose: fully managed service, doesn't store data, delivers data near real-time, focuses on the destination and data transformation\n\u2714 Lambda - A serverless compute service that lets you run code without provisioning or managing servers.\n\u2714 Simple Storage Service (S3) - Object storage service that offers industry-leading scalability, data availability, security, and performance.\n\u2022 Batch - A fully - managed batch processing service that enables developers, scientists, and engineers to easily and efficiently run batch computing workloads of any scale.\n\u2022 CloudFormation - A service that helps you model and set up resources so you can spend less time managing those resources and more time focusing on your applications that run in the cloud.\n\u2022 CloudSearch - A fully managed search service that provides easy-to-use search capabilities for websites and applications.\n\u2022 Elastic Block Store (EBS) - A block-level storage service designed to be used with EC2 instances.\n\u2022 Elastic Compute Cloud (EC2) - A web service that provides scalable compute capacity in the cloud.\n\u2022 Elastic Container Service (ECS) - A highly scalable, high-performance container management service that supports Docker containers.\n\u2022 Elastic Kubernetes Service (EKS) - A fully-managed Kubernetes service that makes it easy to run Kubernetes.\n\u2022 Elastic Load Balancing (ELB) - Automatically distributes incoming application traffic across multiple targets, such as EC2 instances, containers, and IP addresses.\n\u2022 Elastic MapReduce (EMR) - A web service that makes it easy to process large amounts of data using Hadoop, Spark, and other big data tools.\n\u2022 Glue - A fully-managed extract, transform, and load (ETL) service that makes it easy to move data between data stores.\n\u2022 IoT - A managed cloud platform that lets connected devices easily and securely interact with cloud applications and other devices.\n\u2022 Neptune - A fully managed graph database service that enables you to build and run applications that work with highly connected datasets.\n\u2022 Redshift - A fully managed, petabyte - scale data warehouse service in the cloud.\n\u2022 Relational Database Service (RDS) - A managed service that makes it easier to set up, operate, and scale a relational database in the cloud.\n\u2022 Simple Email Service (SES) - A flexible, low-cost email service designed to help marketers and developers send marketing, notification, and transactional emails.\n\u2022 Simple Notification Service (SNS) - A fully managed messaging service for both application-to-application (A2A) and application-to-person (A2P) communication.\n\u2022 Simple Queue Service (SQS) - A fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications.\n\u2022 Step Functions - A serverless workflow service that lets you coordinate distributed applications and microservices using visual workflows.\n\u2022 Virtual Private Cloud (VPC) - A service that enables you to launch resources into a virtual network that you've defined",
            },
            {
              idProfile: '1',
              title: 'Docker',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Back-end',
              linkHref:
                'https://docs.docker.com/develop/develop-images/dockerfile_best-practices/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                'The Dockerfile instructions: \n\nFROM - to define the origin of the package, better to use current Official Repositories, whenever possible. Example: FROM ubuntu: 18.04 \nCOPY - to define destination for installation. Examples: COPY . /app; COPY requirements.txt /tmp/ \nADD - to copy from URL and tar file directly into the container. Example: ADD http://example.com/big.tar.xz /usr/src/things/ \nRUN - Examples: RUN apt - get update && apt - get install - y myPackage; RUN make / app; RUN echo "hello world" \nCMD - to run the software contained by your image, along with any args. Example: CMD ["php", "-a"] \nEXPOSE - to indicate the ports on which a container listens for connections \nENV - to update the PATH environment variable. Example, ENV PATH /usr/local/nginx/bin:$PATH \nENTRYPOINT - to set the image\'s main command. Example: ENTRYPOINT ["s3cmd"] \nVOLUME - to expose any database storage area, configuration storage, or files/folders created by your docker container \nUSER - to change to a non-root user \nWORKDIR - to define paths (preferably absolute) for your WORKDIR \nONBUILD - to execute command after the current Dockerfile build completes. It is an instruction the parent Dockerfile gives to the child Dockerfile.\n',
            },
            {
              idProfile: '1',
              title: 'ExpressJS',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Back-end',
              linkHref: 'https://expressjs.com/en/4x/api.html',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  Express()\n  Methods\n  express.json()\n  express.static()\n  express.Router()\n  express.urlencoded()\n  Application\n  Properties\n  app.locals\n  app.mountpath\n  Events\n  mount\n  Methods\n  app.all()\n  app.delete()\n  app.disable()\n  app.disabled()\n  app.enable()\n  app.enabled()\n  app.engine()\n  app.get()\n  app.get()\n  app.listen()\n  app.METHOD()\n  app.param()\n  app.path()\n  app.post()\n  app.put()\n  app.render()\n  app.route()\n  app.set()\n  app.use()\n  Request\n  Properties\n  req.app\n  req.baseUrl\n  req.body\n  req.cookies\n  req.fresh\n  req.hostname\n  req.ip\n  req.ips\n  req.method\n  req.originalUrl\n  req.params\n  req.path\n  req.protocol\n  req.query\n  req.route\n  req.secure\n  req.signedCookies\n  req.stale\n  req.subdomains\n  req.xhr\n  Methods\n  req.accepts()\n  req.acceptsCharsets()\n  req.acceptsEncodings()\n  req.acceptsLanguages()\n  req.get()\n  req.is()\n  req.param()\n  req.range()\n  Response\n  Properties\n  res.app\n  res.headersSent\n  res.locals\n  Methods\n  res.append()\n  res.attachment()\n  res.cookie()\n  res.clearCookie()\n  res.download()\n  res.end()\n  res.format()\n  res.get()\n  res.json()\n  res.jsonp()\n  res.links()\n  res.location()\n  res.redirect()\n  res.render()\n  res.send()\n  res.sendFile()\n  res.sendStatus()\n  res.set()\n  res.status()\n  res.type()\n  res.vary()\n  Router\n  Methods\n  router.all()\n  router.METHOD()\n  router.param()\n  router.route()\n  router.use()\n  ',
            },
            {
              idProfile: '1',
              title: 'Graphql',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Back-end',
              linkHref: 'https://spec.graphql.org/draft/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                'GraphQL is a query language and runtime for APIs with functional notation\n\n\u2736 Schema:\n   A GraphQL schema defines the types and fields that can be queried on an API. It serves as a contract between the server and the client, specifying what data can be requested and what form it will be returned in.\n\u2736 Query:\n   A GraphQL query is a request for data made by a client to a server. It defines the data that the client wants to retrieve and how that data should be structured.\n\u2736 Mutation:\n   A GraphQL mutation is a request that changes data on the server. It is similar to a query in structure, but is used to perform operations such as creating, updating or deleting data.\n\u2736 Resolver:\n   A resolver is a function that determines how data is retrieved or modified in response to a GraphQL query or mutation. It specifies how to resolve the data associated with a particular field in the schema.\n\u2736 Type:\n   A type in GraphQL represents a group of related data, such as a user, a post, or a comment. Types are defined in the schema, and each type can have one or more fields that correspond to specific properties of the data.\n\u2736 Directive:\n   A directive in GraphQL is used to modify the behavior of a query or mutation. Directives can be used to conditionally include or exclude fields, apply transformations to the data, or perform other operations.\n',
            },
            {
              idProfile: '1',
              title: 'Internet Protocols',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Back-end',
              linkHref:
                'https://en.wikipedia.org/wiki/List_of_network_protocols_(OSI_model)\ud83d\udce9',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '\ud83d\udce9 HTTP (Hypertext Transfer Protocol): Used for transferring web content (such as HTML pages) between a client and server over a network.\n\ud83d\udce9 HTTPS (Hypertext Transfer Protocol Secure): A secure version of HTTP that encrypts data sent between a client and server using SSL/TLS protocols.\n\ud83d\udce9 HTTP long polling: The client sends an HTTP request to the server, the server keeps the request open until the server has new data to send or an event occurs (seconds, several minutes). The client then processes the response and immediately sends another request to keep the connection open for future updates.\n\ud83d\udce9 WebSocket protocol: Used for for real-time bidirectional connection, provides full-duplex communication channels over a single TCP connection.\n\ud83d\udce9 MQTT(Message Queuing Telemetry Transport): A lightweight messaging protocol used for machine - to - machine communication, IoT devices, and mobile applications.\n\ud83d\udce9 Signal Protocol: An end-to-end encryption protocol used by Signal messaging app and other messaging apps that support it, providing secure messaging and voice/video calls.\n\ud83d\udce9 XMPP (Extensible Messaging and Presence Protocol): An open-source protocol used for instant messaging and presence information, also used by some IoT devices and mobile applications.\nARP(Address Resolution Protocol): Maps a network address(such as an IP address) to a physical address(such as a MAC address).\nDHCP (Dynamic Host Configuration Protocol): Dynamically assigns IP addresses to devices on a network.\nDNS (Domain Name System): Translates domain names into IP addresses, allowing devices to access websites and other network resources.\nFTP (File Transfer Protocol): Used for transferring files between a client and server over a network.\nICMP (Internet Control Message Protocol): Used for reporting errors and status information about network connections.\nIMAP (Internet Message Access Protocol): Used for accessing and retrieving email messages from a mail server.\nIP (Internet Protocol): Provides the basic addressing and routing information for all data transmitted over the internet.\nPOP3 (Post Office Protocol version 3): Used for retrieving email messages from a mail server.\nRTP (Real-time Transport Protocol): Used for streaming audio and video over the internet in real-time.\nSIP (Session Initiation Protocol): Used for establishing and managing multimedia communication sessions, such as voice and video calls, over IP networks.\nSMTP (Simple Mail Transfer Protocol): Used for sending email messages between mail servers.\nSNMP (Simple Network Management Protocol): Used for managing and monitoring network devices, such as routers and switches.\nSSH (Secure Shell): Provides secure remote access to a server over an unsecured network.\nTCP (Transmission Control Protocol): Provides reliable and ordered delivery of data between two endpoints over a network.\nTLS/SSL (Transport Layer Security/Secure Sockets Layer): Encryption protocols used to secure data sent over the internet.\nUDP (User Datagram Protocol): Provides a connectionless and unreliable transport service for sending datagrams over a network.\n',
            },
            {
              idProfile: '1',
              title: 'JSON',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Back-end',
              linkHref: 'https://json-schema.org/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  JSON Objects\n  JSON Arrays\n  JSON Parse\n  JSON Stringify\n  JSON PHP\n  JSON HTML\n  JSON JSONP',
            },
            {
              idProfile: '1',
              title: 'JWT',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Back-end',
              linkHref: 'https://jwt.io/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                "\nJSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.\n  \nHigh-level overview of how SSO can work with JWT:\n\n1. Authentication: When a user authenticates with the identity provider (IdP), the IdP generates a JWT containing relevant information about the user, such as their identity and granted permissions. This JWT is digitally signed by the IdP using a secret key.\n2. Token Exchange: After successful authentication, the IdP issues the JWT to the user, who can then present this token to the service providers (SPs) they wish to access.\n3. Token Validation: The SPs, upon receiving the JWT, validate the signature of the token using the public key of the IdP. This ensures the authenticity and integrity of the JWT.  \n4. Authorization: Once the JWT is validated, the SPs extract the relevant information from the token, such as the user's identity and permissions, to authorize access to the requested resources or applications.\n",
            },
            {
              idProfile: '1',
              title: 'LAMP',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Back-end',
              linkHref: 'https://en.wikipedia.org/wiki/LAMP_(software_bundle)',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '\u204d Linux operating system (Ubuntu),\n\u204d Apache HTTP Server,\n\u204d MySQL relational database,\n\u204d PHP programming language',
            },
            {
              idProfile: '1',
              title: 'MERN',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Back-end',
              linkHref:
                'https://medium.com/javascript-in-plain-english/full-stack-mongodb-react-node-js-express-js-in-one-simple-app-6cc8ed6de274',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '\u203b MongoDB\n\u203b ExpressJS\n\u203b ReactJS\n\u203b NodeJS',
            },
            {
              idProfile: '1',
              title: 'Microservices',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Back-end',
              linkHref: 'https://www.mysql.com/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '\u2767 Containerization: The process of packaging software applications into containers, which are portable and can run consistently across different environments. Docker and Kubernetes are popular containerization technologies.\n\u2767 API Gateway: A server that acts as an intermediary between clients and microservices, providing routing, authentication, and security features. Popular API gateway technologies include NGINX, Zuul, and Kong.\n\u2767 Service Registry and Discovery: A tool that maintains a list of available microservices and their network locations, allowing services to find and communicate with each other. Eureka, Consul, and ZooKeeper are popular service registry and discovery tools.\n\u2767 Messaging: Asynchronous messaging protocols that enable microservices to communicate with each other without requiring a direct connection. Popular messaging technologies include Kafka, RabbitMQ, and ActiveMQ.\n\u2767 Circuit Breaker: A design pattern that prevents cascading failures in a distributed system by automatically stopping requests to a service that is not responding. Hystrix is a popular circuit breaker library.\n\u2767 DevOps: A set of practices that combines software development and IT operations, aiming to shorten the systems development lifecycle and provide continuous delivery with high software quality. Popular DevOps tools include Jenkins, GitLab, and AWS CodePipeline.\n',
            },
            {
              idProfile: '1',
              title: 'Migration',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Back-end',
              linkHref: 'https://www.mysql.com/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                'A template/ example for a migration plan from the monolithic PHP + Docker application to a microservice app:\n\n1. Create a separate temporary domain for testing purposes, for example, web2.domainName.com\n2. Deploy the Docker container on AWS on web2.domainName.com, while preserving that the old container works\n3. Setup and integrate Jenkins pipeline for the deployment process to AWS and ensure, that everything works with the development process\n4. Refactor the monolithic application to be able to extract the components and convert them into microservices. Ensure that the microservices are independent\n5. Implement data migration - migrate data from the monolithic application to the microservices. You can use Amazon Aurora or Amazon DynamoDB for data storage\n6. Implement the microservices in the new stack: Angular, NodeJs, Docker, Jenkins, and AWS. Ensure that the microservices are containerized using Docker\n7. Deploy microservices on AWS and test them on a temporary domain first. Use unit testing, integration testing, and end-to-end testing to validate the microservices. Use and test Jenkins for continuous integration and continuous deployment (CI/CD) to automate the deployment process\n8. Switch from legacy data storage to the new one\n9. Switch from respective parts of PHP code to the microservice. Use AWS API Gateway\n10. Switch the temporary domain to the production domain of content delivery.  Use AWS API Gateway\n11. Apply rollout strategy and green/ blue deployment technique for deploying the microservices to production. In particular this strategy can include deploying to a small subset of users at first to ensure everything works as expected before gradually increasing the number of users\n12. Monitor the microservices with AWS CloudWatch or ELK Stack for monitoring and logging. Be ready to switch back to the previous version or to the monolithic app at any time',
            },
            {
              idProfile: '1',
              title: 'MongoDB',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Back-end',
              linkHref: 'https://www.mysql.com/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '\u2023 MongoDB CRUD Operations\n\u2023 Create Operations\n\u2023 Read Operations\n\u2023 Update Operations\n\u2023 Delete Operations\n\u2023 Bulk Write',
            },
            {
              idProfile: '1',
              title: 'MySQL',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Back-end',
              linkHref: 'https://www.mysql.com/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '\u2022 Database\n\u2022 Connect\n\u2022 Create DB\n\u2022 Create Table\n\u2022 Insert Data\n\u2022 Get Last ID\n\u2022 Insert Multiple\n\u2022 Prepared\n\u2022 Select Data\n\u2022 Delete Data\n\u2022 Update Data\n\u2022 Limit Data',
            },
            {
              idProfile: '1',
              title: 'NestJS',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Back-end',
              linkHref: 'https://docs.nestjs.com/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  Custom providers\n  Asynchronous providers\n  Dynamic modules\n  Injection scopes\n  Circular dependency\n  Module reference\n  Execution context\n  Lifecycle events\n  Platform agnosticism\n  Testing\n        ',
            },
            {
              idProfile: '1',
              title: 'Node.js',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Back-end',
              linkHref: 'https://nodejs.org/en/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                'Architecture:\n* Event-driven: Node.js is event-driven, which means that it uses an asynchronous, non-blocking I/O model that allows it to handle large numbers of concurrent connections without getting bogged down by slow I/O operations.\n* Single-threaded: Node.js is single-threaded, which means that it runs on a single thread of execution. However, it uses an event loop that allows it to process multiple I/O operations concurrently, making it highly efficient.\n* Cross-platform: Node.js is cross-platform, which means that it can run on a variety of operating systems, including Windows, macOS, and Linux.\n* NPM: Node.js comes with a package manager called NPM (Node Package Manager), which allows developers to easily install and manage third-party packages and modules.\n\nModules:\n- Asynchronous programming: Node.js is built around an event-driven, non-blocking I/O model, which means that you need to be comfortable with writing asynchronous code using callbacks, promises, or async/await.\n- Node Package Manager (npm): npm is a package manager for Node.js modules that makes it easy to install and manage dependencies.\n- HTTP and HTTPS modules: Node.js includes built-in modules for handling HTTP and HTTPS requests and responses.\n- File system module: The file system module provides methods for working with the file system on your computer, such as creating, reading, and writing files.\n- Streams: Streams allow you to efficiently process large amounts of data in small chunks, rather than loading everything into memory at once.\n- Event emitters: Node.js uses the EventEmitter class to handle events and event listeners.\n- Error handling: Error handling is important in Node.js because of the asynchronous nature of the platform. You should be familiar with techniques for handling errors in callback functions and Promise chains.\n- Child processes: Node.js allows you to spawn child processes to run external commands or scripts.\n- Debugging tools: Node.js comes with built-in debugging tools like the Node Inspector, which you can use to debug your applications.\n- CommonJS modules: Node.js uses the CommonJS module system to manage dependencies between modules in your application.\n',
            },
            {
              idProfile: '1',
              title: 'Php',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Back-end',
              linkHref: 'https://php.net/manual/en/langref.php',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  PHP General\n  PHP Syntax\n  PHP Variables\n  PHP Echo / Print\n  PHP Data Types\n  PHP Strings\n  PHP Constants\n  PHP Operators\n  PHP If...Else...Elseif\n  PHP Switch\n  PHP While Loops\n  PHP For Loops\n  PHP Functions\n  PHP Arrays\n  PHP Sorting Arrays\n  PHP Superglobals\n  PHP Forms\n  PHP Form Handling\n  PHP Form Validation\n  PHP Form Required\n  PHP Form URL/E-mail\n  PHP Form Complete\n  PHP Advanced\n  PHP Arrays Multi\n  PHP Date and Time\n  PHP Include\n  PHP File Handling\n  PHP File Open/Read\n  PHP File Create/Write\n  PHP File Upload\n  PHP Cookies\n  PHP Sessions\n  PHP Filters\n  PHP Filters Advanced\n  PHP Error Handling\n  PHP Exception\n  PHP - XML\n  PHP XML Parsers\n  PHP SimpleXML Parser\n  PHP SimpleXML - Get\n  PHP XML Expat\n  PHP XML DOM',
            },
            {
              idProfile: '1',
              title: 'Regex',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Back-end',
              linkHref:
                'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  pattern: The text of the regular expression.\n  flags: If specified, flags can have any combination of the following values:\n  g - global match; find all matches rather than stopping after the first match\n  i - ignore case\n  m - multiline; treat beginning and end characters (^ and $) as working over multiple lines\n  u - unicode; treat pattern as a sequence of unicode code points\n  y - sticky; matches only from the index indicated by the lastIndex property of this regular expression in the target string\n\n  Syntax structure:\n  Character Classes\n  Character Sets\n  Boundaries\n  Alternation\n  Grouping and back references\n  Quantifiers\n  Assertions',
            },
            {
              idProfile: '1',
              title: 'RESTful-API',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Back-end',
              linkHref:
                'https://www.restapitutorial.com/lessons/whatisrest.html',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                'REpresentational\nState\nTransfer\nis a constraints and architectural style and allows for interaction with RESTful web services.\n\nThe six constraints for REST architectual style:\n1. Uniform Interface\n2. Stateless\n3. Cacheable\n4. Client-Server\n5. Layered System\n6. Code on Demand (optional)\n\nParts:\nResources (URIs),\nHTTP methods (GET, PUT, POST, DELETE),\nHTTP headers,\nQuery parameters,\nStatus codes',
            },
            {
              idProfile: '1',
              title: 'Routing',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Back-end',
              linkHref: '',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                'Routing provides site users with the following:\n  Displaying different content depending on the URL\n  Constructing links to routes and go to routes programmatically\n  Bookmarking - Users can bookmark URLs in their web browser to save content they want to come back to later.\n  Sharing - Users can share content with others by sending a link to a certain page.\n  Navigation - URLs are used to drive the web browser\u2019s back/forward functions.',
            },
            {
              idProfile: '1',
              title: 'Seo',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Back-end',
              linkHref:
                'https://www.searchenginejournal.com/200-parameters-in-google-algorithm/15457/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  Domain factors\n  Server-side factors\n  Architecture factors\n  Content factors\n  Internal Cross Linking factors\n  Website factors\n  Page-specific factors\n  Keywords usage factors\n  Outbound links factors\n  Backlink profile factors\n  Visitor Profile and Behavior\n  Penalties, Filters and Manipulation\n  More Factors',
            },
            {
              idProfile: '1',
              title: 'Session',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Back-end',
              linkHref: 'https://php.net/manual/en/features.sessions.php',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  Session stores user information to be used across multiple pages (e.g. username, favorite color, etc).\n  By default, session variables last until the user closes the browser. Mehods:\n  Start a PHP Session\n  Get PHP Session Variable Values\n  Modify a PHP Session Variable\n  Destroy a PHP Session',
            },
            {
              idProfile: '1',
              title: 'Sql',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Back-end',
              linkHref:
                'https://docs.oracle.com/cd/B28359_01/server.111/b28286/intro002.htm#SQLRF50928',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  SQL General\n  SQL Syntax\n  SQL Select\n  SQL Select Distinct\n  SQL Where\n  SQL And, Or, Not\n  SQL Order By\n  SQL Insert Into\n  SQL Null Values\n  SQL Update\n  SQL Delete\n  SQL Select Top\n  SQL Min and Max\n  SQL Count, Avg, Sum\n  SQL Like\n  SQL Wildcards\n  SQL In\n  SQL Between\n  SQL Aliases\n  SQL Joins\n  SQL Inner Join\n  SQL Left Join\n  SQL Right Join\n  SQL Full Join\n  SQL Self Join\n  SQL Union\n  SQL Group By\n  SQL Having\n  SQL Exists\n  SQL Any, All\n  SQL Select Into\n  SQL Insert Into Select\n  SQL Null Functions\n  SQL Comments\n  SQL Database\n  SQL Create DB\n  SQL Drop DB\n  SQL Create Table\n  SQL Drop Table\n  SQL Alter Table\n  SQL Constraints\n  SQL Not Null\n  SQL Unique\n  SQL Primary Key\n  SQL Foreign Key\n  SQL Check\n  SQL Default\n  SQL Index\n  SQL Auto Increment\n  SQL Dates\n  SQL Views\n  SQL Injection\n  SQL Hosting\n  SQL References\n  MySQL Functions\n  SQL Server Functions\n  MS Access Functions\n  Oracle Functions\n  SQL Operators\n  SQL Data Types',
            },
            {
              idProfile: '1',
              title: 'Socket.io',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Back-end',
              linkHref: 'https://socket.io/docs/v4/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                "\u2022 io.of(namespace): Creates a separate namespace for Socket.IO connections.\n\u2022 io.on(eventName, callback): Listens for a specific event on the server side.\n\u2022 io.sockets.emit(eventName, data): Emits an event to all connected clients.\n\u2022 io.to(roomName).emit(eventName, data): Sends an event to all clients in a specific room.\n\u2022 io.use(middleware): Registers a middleware function to be executed for every incoming connection.\n\u2022 socket.broadcast.emit(eventName, data): Emits an event to all clients except the current one.\n\u2022 socket.disconnect(): Disconnects the client from the server.\n\u2022 socket.emit(eventName, data): Emits an event from the server to a specific client or clients.\n\u2022 socket.id: Returns the unique identifier for the client's socket connection.\n\u2022 socket.join(roomName): Makes a client join a specific room.\n\u2022 socket.leave(roomName): Makes a client leave a specific room.\n\u2022 socket.on(eventName, callback): Listens for a specific event on the client side.",
            },
            {
              idProfile: '1',
              title: 'SSO',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Back-end',
              linkHref: 'https://en.wikipedia.org/wiki/Single_sign-on',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                "\n\u2022 Federated SSO: In this approach, an identity provider (IdP) is used to authenticate users, and trusted third-party service providers (SPs) rely on the IdP for authentication. The IdP issues security tokens that the SPs can validate to grant access.\n\u2022 Social Media SSO: This approach allows users to authenticate using their social media accounts such as Google, Facebook, or Twitter. The social media platform acts as the identity provider, and the user's login credentials are used for authentication across various applications.\n\u2022 Enterprise SSO: This type of SSO is specifically designed for organizations and integrates with their existing identity management systems. It enables employees to access multiple internal applications with a single set of credentials managed by the organization.\n\u2022 Password Vault SSO: In this approach, a password vault or manager securely stores and manages user credentials. Users authenticate with the password vault, which then automatically fills in the login credentials for various applications.\n\u2022 Biometric SSO: This emerging approach uses biometric authentication, such as fingerprints or facial recognition, to grant access to multiple applications or systems without requiring users to enter passwords.\n",
            },
            {
              idProfile: '1',
              title: 'Swagger-OpenAPI',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Back-end',
              linkHref: 'https://swagger.io/docs/specification/about/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  API Server and Base Path\n  Media Types\n  Paths and Operations\n  Describing Parameters\n  Parameter Serialization\n  Describing Request Body\n  File Upload\n  Multipart Requests\n  Describing Responses\n  Data Models (Schemas)\n  Data Types\n  Enums\n  Dictionaries and Maps\n  oneOf, anyOf, allOf, not\n  Inheritance and Polymorphism\n  Representing XML\n  JSON Schema Keywords\n  Adding Examples\n  Authentication\n  Basic Authentication\n  API Keys\n  Bearer Authentication\n  OAuth 2.0\n  OpenID Connect Discovery\n  Cookie Authentication\n  Links\n  Callbacks\n  Components\n  Using $ref\n  API General Info\n  Grouping Operations With Tags\n  OpenAPI Extensions',
            },
            {
              idProfile: '1',
              title: 'Telegram-bot',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Back-end',
              linkHref:
                'https://telegram-bot-sdk.readme.io/docs/commands-system',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  Fetures and usage cases\n  Get customized notifications and news. \n  Integrate with other services. \n  Accept payments from Telegram users. \n  Create custom tools. \n  Build single- and multiplayer games. \n  Build social services. \n  Do virtually anything else.',
            },
            {
              idProfile: '1',
              title: 'Ubuntu',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Back-end',
              linkHref: 'https://www.ubuntu.com/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  Install with GParted\n  Change default loading system on systemd\n  Set up Aptitude, Synaptic package manager, Wine\n  Install MySQL, apache2, PHP, phpmyadmin, Python\n  Enable SSH via OpenSSH\n  Host multiple Websites on Apache2\n  Enable mod_rewrite on Apache2\n  Specify A Custom php.ini For A Web Site\n  Install Git\n  Change privileges for folders\n  Install NodeJS\n  Install Virtual Box, pm2, Docker\n  ',
            },
            {
              idProfile: '1',
              title: 'Xml',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Back-end',
              linkHref: 'https://www.w3.org/TR/REC-xml/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  XML General\n  XML Tree\n  XML Syntax\n  XML Elements\n  XML Attributes\n  XML Namespaces\n  XML Display\n  XML HttpRequest\n  XML Parser\n  XML DOM\n  XML XPath\n  XML XSLT\n  XML XQuery\n  XML XLink\n  XML Validator\n  XML DTD\n  XML Schema\n  XML Server\n  XML AJAX\n  AJAX XMLHttp\n  AJAX Request\n  AJAX Response\n  AJAX XML File\n  AJAX PHP\n  AJAX ASP\n  AJAX Database\n  AJAX Applications\n  XML DOM\n  DOM Nodes\n  DOM Accessing\n  DOM Node Info\n  DOM Node List\n  DOM Traversing\n  DOM Navigating\n  DOM Get Values\n  DOM Change Nodes\n  DOM Remove Nodes\n  DOM Replace Nodes\n  DOM Create Nodes\n  DOM Add Nodes\n  DOM Clone Nodes',
            },
            {
              idProfile: '1',
              title: 'AI & Machine Learning',
              contentType: i.SectionType.CompetencyTagType,
              section: 'AI/ ML',
              linkHref: 'https://keras.io/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  \u2605 To define task in the ML terms \n  \u2605 To build hypothesis (data > outcome) \n  \u2605 To state statistical parameters of accepted results (metrics, confidence interval) \n  \u2605 To pick up data, sources, units \n  \u2605 To chose type and techniques and algorithm \n  Data mining types: \u2714 clustering/ pattern recognition, \u2714 classification, \u2714 regression/ forecasting \n  Data mining techniques: \u25cf Supervised Learning \u25cf Unsupervised Learning \u25cf Reinforcement Learning \n  Data mining types:: On-line learning (Real-time learning), Off-line learning, mini sampling \n  \u2605 To prepare data (input, output) \n  Dimensionality reducing \n  Data preprocessing (data cleaning, optimizing): dublicates, dummy values, abnormal value, data integrity \n  \u2605 To normalize data \n  \u2605 To sample data sets \n  Training Dataset. The sample of data used to fit the model \n  Validation Dataset. The sample of data used to evaluate of a model fit while tuning model hyperparameters or online fitting \n  Test Dataset. The sample of data used to provide an unbiased evaluation of a final model fit \n  \u2605 To architect layers: input, output, multi-layer, hidden layer \n  \u2605 To set up hyperparameters. For neuro networs: optimises, loss, metrics, quantity of epoches, is shuffling, number votes, model fit acceptance, learning rate, train speed, coefficient of train speed, gradient method, activation function Compressive function: Sigmoid, Hyperbolic tangent \n  \u2605 To process results \n  plotting, graphics building \n  build tables with models results and metaparameters \n  statistic analysis: confidence interval, statistical significance \n  \n  Mean Median Mode\n  Standard Deviation\n  Percentile\n  Data Distribution\n  Normal Data Distribution\n  Scatter Plot\n  Linear Regression\n  Polynomial Regression\n  Multiple Regression\n  Scale\n  Train/Test\n  Decision Tree\n  ',
            },
            {
              idProfile: '1',
              title: 'Algoritms for ML & AI',
              contentType: i.SectionType.CompetencyTagType,
              section: 'AI/ ML',
              linkHref:
                'https://www.analyticsvidhya.com/blog/2017/09/common-machine-learning-algorithms/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  \n  Types of Machine Learning Algorithms\n  \u2714 Clustering (unsupervised) is a categorisation of objects into one or more classes without predifined labels\n  \u2714 Classification (supervised) is to partition n observations into k predifined classes \n  \u2714 Regression (supervised) is a processes for estimating the relationships between a dependent variable and one or more independent variables \n  \n  Techniques of Machine Learning Algorithms \n  \u25cf Supervised Learning - Y(X1, X2, ...Xn). There are a target / outcome variable (or dependent variable) and a given set of predictors (independent variables)\n  \u25cf Unsupervised Learning - There is no any target or outcome variable to predict / estimate. It is used for clustering population in different groups \n  \u25cf Reinforcement Learning - The machine is exposed to an environment where it trains itself continually using trial and error.\n  \n  \u2605 Linear Regression - (regression) to establish relationship between independent and dependent variables targeting to a linear equation Y= a + b *X \n  \u2605 Simplex algorithm (or simplex method) - to optimize decisiion based on constraints, a popular algorithm for linear programming \n  \u2605 Polynomial Regression - (regression) to establish relationship between independent and dependent variables targeting to a polinomal equation Y = a + b * X + c * X ^ 2 + ...d * X ^ n \n  \u2605 Multiple Regression - (regression) to predict a value based on two or more variables \n  \u2605 Logistic Regression - (classification) to predict the probability of occurrence of an event by fitting data to a logit function \n  \u2605 Decision Tree - (classification) to split the population into two or more homogeneous sets to make as distinct groups as possible \n  \u2605 SVM - (classification) to plot each data item as a point in n-dimensional space and find line (space) of the our classifier \n  \u2605 Naive Bayes - (classification) to consider all of these properties to independently contribute to the probability of the output \n  \u2605 kNN/ k- Nearest Neighbors - (classification/ regression) to store all available cases and classifies new cases by a majority vote of its k neighbors \n  \u2605 K-Means - (classification) to classify a given data set through a certain number of clusters (assume k clusters) that are homogeneous and heterogeneous to peer groups. \n  \u2605 Random Forest - (classification) to interpret observations as votes that "forest" chooses the classification (over all the trees in the forest) \n  \u2605 Dimensionality Reduction Algorithms - to escape high unwanted dimensions and chose meaning dimentions by dimension reduction \n  \u2605 Gradient Boosting algorithms \n    * GBM - to ensemble of learning algorithms which combines the prediction of several base estimators (weak or average) \n    * XGBoost - to offer support of various objective functions, including regression, classification and ranking \n    * LightGBM - to use tree based learning algorithms. It is designed to be distributed \n    * CatBoost - to deal with categorical variables without showing the type conversion error, which helps you to focus on tuning your model',
            },
            {
              idProfile: '1',
              title: 'Fann',
              contentType: i.SectionType.CompetencyTagType,
              section: 'AI/ ML',
              linkHref: 'https://leenissen.dk/fann/wp/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  FANN Artificial Neural Network Library Features:\n  Multilayer Artificial Neural Network Library in C\n  Backpropagation training (RPROP, Quickprop, Batch, Incremental)\n  Evolving topology training which dynamically builds and trains the ANN (Cascade2)\n  Easy to use (create, train and run an ANN with just three function calls)\n  Fast (up to 150 times faster execution than other libraries)\n  Versatile (possible to adjust many parameters and features on-the-fly)\n  Well documented (An easy to read introduction article\n  Cross-platform \n  Several different activation functions implemented (including stepwise linear functions for that extra bit of speed)',
            },
            {
              idProfile: '1',
              title: 'Keras',
              contentType: i.SectionType.CompetencyTagType,
              section: 'AI/ ML',
              linkHref: 'https://keras.io/api/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  Models API\n  Layers API\n  Callbacks API\n  Data preprocessing\n  Optimizers\n  Metrics\n  Losses\n  Built-in small datasets\n  Keras Applications\n  Utilities\n  \n  Models API\n  The Model class\n  The Sequential class\n  Model training APIs\n  Model saving & serialization APIs\n  Layers API\n  The base Layer class\n  Layer activations\n  Layer weight initializers\n  Layer weight regularizers\n  Layer weight constraints\n  Core layers\n  Convolution layers\n  Pooling layers\n  Recurrent layers\n  Preprocessing layers\n  Normalization layers\n  Regularization layers\n  Attention layers\n  Reshaping layers\n  Merging layers\n  Locally-connected layers\n  Activation layers\n  Callbacks API\n  Base Callback class\n  ModelCheckpoint\n  TensorBoard\n  EarlyStopping\n  LearningRateScheduler\n  ReduceLROnPlateau\n  RemoteMonitor\n  LambdaCallback\n  TerminateOnNaN\n  CSVLogger\n  ProgbarLogger\n  Data preprocessing\n  Image data preprocessing\n  Timeseries data preprocessing\n  Text data preprocessing\n  Optimizers\n  SGD\n  RMSprop\n  Adam\n  Adadelta\n  Adagrad\n  Adamax\n  Nadam\n  Ftrl\n  Metrics\n  Accuracy metrics\n  Probabilistic metrics\n  Regression metrics\n  Classification metrics based on True/False positives & negatives\n  Image segmentation metrics\n  Hinge metrics for "maximum-margin" classification\n  Losses\n  Probabilistic losses\n  Regression losses\n  Hinge losses for "maximum-margin" classification\n  Built-in small datasets\n  MNIST digits classification dataset\n  CIFAR10 small images classification dataset\n  CIFAR100 small images classification dataset\n  IMDB movie review sentiment classification dataset\n  Reuters newswire classification dataset\n  Fashion MNIST dataset, an alternative to MNIST\n  Boston Housing price regression dataset\n  Keras Applications\n  Xception\n  EfficientNet B0 to B7\n  VGG16 and VGG19\n  ResNet and ResNetV2\n  MobileNet and MobileNetV2\n  DenseNet\n  NasNetLarge and NasNetMobile\n  InceptionV3\n  InceptionResNetV2\n  Utilities\n  Model plotting utilities\n  Serialization utilities\n  Python & NumPy utilities\n  Backend utilities',
            },
            {
              idProfile: '1',
              title: 'Matplotlib',
              contentType: i.SectionType.CompetencyTagType,
              section: 'AI/ ML',
              linkHref: 'https://matplotlib.org/contents.html',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  Pyplot\n  Plotting\n  Markers\n  Line\n  Subplots\n  Scatter\n  Bars\n  Histograms\n  Pie Charts',
            },
            {
              idProfile: '1',
              title: 'NumPy',
              contentType: i.SectionType.CompetencyTagType,
              section: 'AI/ ML',
              linkHref: 'https://numpy.org/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  Creating Arrays\n  Array Indexing\n  Array Slicing\n  Data Types\n  Copy vs View\n  Array Shape\n  Array Reshape\n  Array Iterating\n  Array Join\n  Array Split\n  Array Search\n  Array Sort\n  Array Filter\n  Random\n  ufunc',
            },
            {
              idProfile: '1',
              title: 'Pandas',
              contentType: i.SectionType.CompetencyTagType,
              section: 'AI/ ML',
              linkHref: 'https://pandas.pydata.org/docs/',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  Series\n  DataFrames\n  Read CSV\n  Read JSON\n  Analyzing Data\n  Cleaning Data\n  Correlations\n  Plotting',
            },
            {
              idProfile: '1',
              title: 'Python',
              contentType: i.SectionType.CompetencyTagType,
              section: 'AI/ ML',
              linkHref: 'https://docs.python.org/3/',
              iconLibrary: 'Ionicons',
              iconName: 'logo-python',
              tooltips:
                'Py General\n\u2605 Global Interpreter Lock (GIL): The Global Interpreter Lock (GIL) is a mechanism used in CPython (the default implementation of Python) to synchronize access to Python objects, preventing multiple native threads from executing Python bytecodes at once. It is a form of thread-level locking.\n\u2605 Passing Arguments: In Python, arguments are passed by value, which means that a copy of the object reference is passed to the function. This copy is then used to access the object inside the function. If the object is mutable, you can modify its state, but you cannot reassign the object reference itself.\n\u2605 Data Types\n  - Immutable:\n      Strings (str)\n      Numbers (int, float, complex)\n      Tuples (tuple)\n      Frozen Sets (frozenset)\n      Bytes (bytes)\n      Namedtuples (from the collections module)\n  - Mutable:\n    Lists: Lists are ordered collections of items that can be modified.\n    Dictionaries: Dictionaries are key-value pairs, and their content can be modified.\n    Sets: Sets are unordered collections of unique elements.\n    Byte arrays: Byte arrays are mutable sequences of integers in the range 0-255.\n    User-defined objects: If you create your own custom classes\nComments\nVariables\nCasting\nOperators\nIf...Else\nWhile Loops\nFor Loops\nFunctions\nLambda\nInheritance\nIterators\nScope\nModules\nDates\nMath\nJSON\nRegEx\nPIP\nTry...Except\nUser Input\nString Formatting\nPy File Handling\nFile Handling\nRead Files\nWrite/Create Files\nDelete Files',
            },
            {
              idProfile: '1',
              title: 'SciPy',
              contentType: i.SectionType.CompetencyTagType,
              section: 'AI/ ML',
              linkHref: 'https://www.scipy.org/docs.html',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  Constants\n  Optimizers\n  Sparse Data\n  Graphs\n  Spatial Data\n  Matlab Arrays\n  Interpolation\n  Significance Tests',
            },
            {
              idProfile: '1',
              title: 'Scikit-Learn',
              contentType: i.SectionType.CompetencyTagType,
              section: 'AI/ ML',
              linkHref: 'https://scikit-learn.org/stable/modules/classes.html',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  Base classes and utility functions\n  Probability Calibration\n  Clustering\n  Composite Estimators\n  Covariance Estimators\n  Cross decomposition\n  Datasets\n  Matrix Decomposition\n  Discriminant Analysis\n  Dummy estimators\n  Ensemble Methods\n  Exceptions and warnings\n  Experimental\n  Feature Extraction\n  Feature Selection\n  Gaussian Processes\n  Impute\n  Inspection\n  Isotonic regression\n  Kernel Approximation\n  Kernel Ridge Regression\n  Linear Models\n  Manifold Learning\n  Metrics\n  Gaussian Mixture Models\n  Model Selection\n  Multiclass classification\n  Multioutput regression and classification\n  Naive Bayes\n  Nearest Neighbors\n  Neural network models\n  Pipeline\n  Preprocessing and Normalization\n  Random projection\n  Semi-Supervised Learning\n  Support Vector Machines\n  Decision Trees\n  Utilities',
            },
            {
              idProfile: '1',
              title: 'TensorFlow',
              contentType: i.SectionType.CompetencyTagType,
              section: 'AI/ ML',
              linkHref: 'https://www.tensorflow.org/api_docs/python/tf',
              iconLibrary: 'Ionicons',
              iconName: '',
              tooltips:
                '  Modules\n  Classes\n  Functions\n  Other Members\n  \n  Modules\n  audio module: Public API for tf.audio namespace \n  autodiff module: Public API for tf.autodiff namespace \n  autograph module: Conversion of plain Python into TensorFlow graph code \n  bitwise module: Operations for manipulating the binary representations of integers \n  compat module: Compatibility functions \n  config module: Public API for tf.config namespace \n  data module: tf.data.Dataset API for input pipelines \n  debugging module: Public API for tf.debugging namespace \n  distribute module: Library for running a computation across multiple devices \n  dtypes module: Public API for tf.dtypes namespace \n  errors module: Exception types for TensorFlow errors \n  estimator module: Estimator: High level tools for working with models \n  experimental module: Public API for tf.experimental namespace \n  feature_column module: Public API for tf.feature_column namespace \n  graph_util module: Helpers to manipulate a tensor graph in python \n  image module: Image ops \n  initializers module: Keras initializer serialization / deserialization \n  io module: Public API for tf.io namespace \n  keras module: Implementation of the Keras API meant to be a high-level API for TensorFlow \n  linalg module: Operations for linear algebra \n  lite module: Public API for tf.lite namespace \n  lookup module: Public API for tf.lookup namespace \n  losses module: Built-in loss functions \n  math module: Math Operations \n  metrics module: Built-in metrics \n  mixed_precision module: Public API for tf.mixed_precision namespace \n  mlir module: Public API for tf.mlir namespace \n  nest module: Public API for tf.nest namespace \n  nn module: Wrappers for primitive Neural Net (NN) Operations \n  optimizers module: Built-in optimizer classes \n  profiler module: Public API for tf.profiler namespace \n  quantization module: Public API for tf.quantization namespace \n  queue module: Public API for tf.queue namespace \n  ragged module: Ragged Tensors \n  random module: Public API for tf.random namespace \n  raw_ops module: Public API for tf.raw_ops namespace \n  saved_model module: Public API for tf.saved_model namespace \n  sets module: Tensorflow set operations \n  signal module: Signal processing operations \n  sparse module: Sparse Tensor Representation \n  strings module: Operations for working with string Tensors \n  summary module: Operations for writing summary data, for use in analysis and visualization \n  sysconfig module: System configuration library \n  test module: Testing \n  tpu module: Ops related to Tensor Processing Units \n  train module: Support for training models \n  types module: Public TensorFlow type definitions \n  version module: Public API for tf.version namespace \n  xla module: Public API for tf.xla namespace \n  \n  Classes\n  class AggregationMethod: A class listing aggregation methods used to combine gradients \n  class CriticalSection: Critical section \n  class DType: Represents the type of the elements in a Tensor \n  class DeviceSpec: Represents a (possibly partial) specification for a TensorFlow device \n  class GradientTape: Record operations for automatic differentiation \n  class Graph: A TensorFlow computation, represented as a dataflow graph \n  class IndexedSlices: A sparse representation of a set of tensor slices at given indices \n  class IndexedSlicesSpec: Type specification for a tf.IndexedSlices \n  class Module: Base neural network module class \n  class Operation: Represents a graph node that performs computation on tensors \n  class OptionalSpec: Type specification for tf.experimental.Optional \n  class RaggedTensor: Represents a ragged tensor \n  class RaggedTensorSpec: Type specification for a tf.RaggedTensor \n  class RegisterGradient: A decorator for registering the gradient function for an op type \n  class SparseTensor: Represents a sparse tensor \n  class SparseTensorSpec: Type specification for a tf.sparse.SparseTensor \n  class Tensor: A tensor is a multidimensional array of elements\n  class TensorArray: Class wrapping dynamic-sized, per-time-step, write-once Tensor arrays \n  class TensorArraySpec: Type specification for a tf.TensorArray \n  class TensorShape: Represents the shape of a Tensor \n  class TensorSpec: Describes a tf.Tensor \n  class TypeSpec: Specifies a TensorFlow value type \n  class UnconnectedGradients: Controls how gradient computation behaves when y does not depend on x \n  class Variable: See the variable guide \n  class VariableAggregation: Indicates how a distributed variable will be aggregated \n  class VariableSynchronization: Indicates when a distributed variable will be synced \n  class constant_initializer: Initializer that generates tensors with constant values \n  class name_scope: A context manager for use when defining a Python op \n  class ones_initializer: Initializer that generates tensors initialized to 1 \n  class random_normal_initializer: Initializer that generates tensors with a normal distribution \n  class random_uniform_initializer: Initializer that generates tensors with a uniform distribution \n  class zeros_initializer: Initializer that generates tensors initialized to 0 \n  \n  Functions\n  Assert(...): Asserts that the given condition is true \n  abs(...): Computes the absolute value of a tensor \n  acos(...): Computes acos of x element-wise \n  acosh(...): Computes inverse hyperbolic cosine of x element-wise \n  add(...): Returns x + y element-wise \n  add_n(...): Adds all input tensors element-wise \n  argmax(...): Returns the index with the largest value across axes of a tensor \n  argmin(...): Returns the index with the smallest value across axes of a tensor \n  argsort(...): Returns the indices of a tensor that give its sorted order along an axis \n  as_dtype(...): Converts the given type_value to a DType \n  as_string(...): Converts each entry in the given tensor to strings \n  asin(...): Computes the trignometric inverse sine of x element-wise \n  asinh(...): Computes inverse hyperbolic sine of x element-wise \n  assert_equal(...): Assert the condition x == y holds element-wise \n  assert_greater(...): Assert the condition x > y holds element-wise \n  assert_less(...): Assert the condition x < y holds element-wise \n  assert_rank(...): Assert that x has rank equal to rank \n  atan(...): Computes the trignometric inverse tangent of x element-wise \n  atan2(...): Computes arctangent of y/x element-wise, respecting signs of the arguments \n  atanh(...): Computes inverse hyperbolic tangent of x element-wise \n  batch_to_space(...): BatchToSpace for N-D tensors of type T \n  bitcast(...): Bitcasts a tensor from one type to another without copying data \n  boolean_mask(...): Apply boolean mask to tensor \n  broadcast_dynamic_shape(...): Computes the shape of a broadcast given symbolic shapes \n  broadcast_static_shape(...): Computes the shape of a broadcast given known shapes \n  broadcast_to(...): Broadcast an array for a compatible shape \n  case(...): Create a case operation \n  cast(...): Casts a tensor to a new type \n  clip_by_global_norm(...): Clips values of multiple tensors by the ratio of the sum of their norms \n  clip_by_norm(...): Clips tensor values to a maximum L2-norm \n  clip_by_value(...): Clips tensor values to a specified min and max \n  complex(...): Converts two real numbers to a complex number \n  concat(...): Concatenates tensors along one dimension \n  cond(...): Return true_fn() if the predicate pred is true else false_fn() \n  constant(...): Creates a constant tensor from a tensor-like object \n  control_dependencies(...): Wrapper for Graph.control_dependencies() using the default graph \n  convert_to_tensor(...): Converts the given value to a Tensor \n  cos(...): Computes cos of x element-wise \n  cosh(...): Computes hyperbolic cosine of x element-wise \n  cumsum(...): Compute the cumulative sum of the tensor x along axis \n  custom_gradient(...): Decorator to define a function with a custom gradient \n  device(...): Specifies the device for ops created/executed in this context \n  divide(...): Computes Python style division of x by y \n  dynamic_partition(...): Partitions data into num_partitions tensors using indices from partitions \n  dynamic_stitch(...): Interleave the values from the data tensors into a single tensor \n  edit_distance(...): Computes the Levenshtein distance between sequences \n  eig(...): Computes the eigen decomposition of a batch of matrices \n  eigvals(...): Computes the eigenvalues of one or more matrices \n  einsum(...): Tensor contraction over specified indices and outer product \n  ensure_shape(...): Updates the shape of a tensor and checks at runtime that the shape holds \n  equal(...): Returns the truth value of (x == y) element-wise \n  executing_eagerly(...): Checks whether the current thread has eager execution enabled \n  exp(...): Computes exponential of x element-wise.  \n  expand_dims(...): Returns a tensor with a length 1 axis inserted at index axis \n  extract_volume_patches(...): Extract patches from input and put them in the "depth" output dimension. 3D extension of extract_image_patches \n  eye(...): Construct an identity matrix, or a batch of matrices \n  fill(...): Creates a tensor filled with a scalar value \n  fingerprint(...): Generates fingerprint values \n  floor(...): Returns element-wise largest integer not greater than x \n  foldl(...): foldl on the list of tensors unpacked from elems on dimension 0. (deprecated argument values)\n  foldr(...): foldr on the list of tensors unpacked from elems on dimension 0. (deprecated argument values)\n  function(...): Compiles a function into a callable TensorFlow graph \n  gather(...): Gather slices from params axis axis according to indices \n  gather_nd(...): Gather slices from params into a Tensor with shape specified by indices \n  get_logger(...): Return TF logger instance \n  get_static_value(...): Returns the constant value of the given tensor, if efficiently calculable \n  grad_pass_through(...): Creates a grad-pass-through op with the forward behavior provided in f \n  gradients(...): Constructs symbolic derivatives of sum of ys w.r.t. x in xs \n  greater(...): Returns the truth value of (x > y) element-wise \n  greater_equal(...): Returns the truth value of (x >= y) element-wise \n  group(...): Create an op that groups multiple operations \n  guarantee_const(...): Gives a guarantee to the TF runtime that the input tensor is a constant \n  hessians(...): Constructs the Hessian of sum of ys with respect to x in xs \n  histogram_fixed_width(...): Return histogram of values \n  histogram_fixed_width_bins(...): Bins the given values for use in a histogram \n  identity(...): Return a Tensor with the same shape and contents as input \n  identity_n(...): Returns a list of tensors with the same shapes and contents as the input\n  import_graph_def(...): Imports the graph from graph_def into the current default Graph. (deprecated arguments)\n  init_scope(...): A context manager that lifts ops out of control-flow scopes and function-building graphs \n  inside_function(...): Indicates whether the caller code is executing inside a tf.function \n  is_tensor(...): Checks whether x is a TF-native type that can be passed to many TF ops \n  less(...): Returns the truth value of (x < y) element-wise \n  less_equal(...): Returns the truth value of (x <= y) element-wise \n  linspace(...): Generates evenly-spaced values in an interval along a given axis \n  load_library(...): Loads a TensorFlow plugin \n  load_op_library(...): Loads a TensorFlow plugin, containing custom ops and kernels \n  logical_and(...): Logical AND function \n  logical_not(...): Returns the truth value of NOT x element-wise \n  logical_or(...): Returns the truth value of x OR y element-wise \n  make_ndarray(...): Create a numpy ndarray from a tensor \n  make_tensor_proto(...): Create a TensorProto \n  map_fn(...): Transforms elems by applying fn to each element unstacked on axis 0. (deprecated arguments)\n  matmul(...): Multiplies matrix a by matrix b, producing a * b \n  matrix_square_root(...): Computes the matrix square root of one or more square matrices:\n  maximum(...): Returns the max of x and y (i.e. x > y ? x : y) element-wise \n  meshgrid(...): Broadcasts parameters for evaluation on an N-D grid \n  minimum(...): Returns the min of x and y (i.e. x < y ? x : y) element-wise \n  multiply(...): Returns an element-wise x * y \n  negative(...): Computes numerical negative value element-wise \n  no_gradient(...): Specifies that ops of type op_type is not differentiable \n  no_op(...): Does nothing. Only useful as a placeholder for control edges \n  nondifferentiable_batch_function(...): Batches the computation done by the decorated function \n  norm(...): Computes the norm of vectors, matrices, and tensors \n  not_equal(...): Returns the truth value of (x != y) element-wise \n  numpy_function(...): Wraps a python function and uses it as a TensorFlow op \n  one_hot(...): Returns a one-hot tensor \n  ones(...): Creates a tensor with all elements set to one (1) \n  ones_like(...): Creates a tensor of all ones that has the same shape as the input \n  pad(...): Pads a tensor \n  parallel_stack(...): Stacks a list of rank-R tensors into one rank-(R+1) tensor in parallel \n  pow(...): Computes the power of one value to another \n  print(...): Print the specified inputs \n  py_function(...): Wraps a python function into a TensorFlow op that executes it eagerly \n  quantize_and_dequantize_v4(...): Returns the gradient of QuantizeAndDequantizeV4 \n  range(...): Creates a sequence of numbers \n  rank(...): Returns the rank of a tensor \n  realdiv(...): Returns x / y element-wise for real types \n  recompute_grad(...): An eager-compatible version of recompute_grad \n  reduce_all(...): Computes the "logical and" of elements across dimensions of a tensor \n  reduce_any(...): Computes the "logical or" of elements across dimensions of a tensor \n  reduce_logsumexp(...): Computes log(sum(exp(elements across dimensions of a tensor))) \n  reduce_max(...): Computes the maximum of elements across dimensions of a tensor \n  reduce_mean(...): Computes the mean of elements across dimensions of a tensor \n  reduce_min(...): Computes the minimum of elements across dimensions of a tensor \n  reduce_prod(...): Computes the product of elements across dimensions of a tensor \n  reduce_sum(...): Computes the sum of elements across dimensions of a tensor \n  register_tensor_conversion_function(...): Registers a function for converting objects of base_type to Tensor \n  repeat(...): Repeat elements of input \n  required_space_to_batch_paddings(...): Calculate padding required to make block_shape divide input_shape \n  reshape(...): Reshapes a tensor \n  reverse(...): Reverses specific dimensions of a tensor \n  reverse_sequence(...): Reverses variable length slices \n  roll(...): Rolls the elements of a tensor along an axis \n  round(...): Rounds the values of a tensor to the nearest integer, element-wise \n  saturate_cast(...): Performs a safe saturating cast of value to dtype \n  scalar_mul(...): Multiplies a scalar times a Tensor or IndexedSlices object \n  scan(...): scan on the list of tensors unpacked from elems on dimension 0. (deprecated argument values)\n  scatter_nd(...): Scatter updates into a new tensor according to indices \n  searchsorted(...): Searches input tensor for values on the innermost dimension \n  sequence_mask(...): Returns a mask tensor representing the first N positions of each cell \n  shape(...): Returns a tensor containing the shape of the input tensor \n  shape_n(...): Returns shape of tensors \n  sigmoid(...): Computes sigmoid of x element-wise \n  sign(...): Returns an element-wise indication of the sign of a number \n  sin(...): Computes sine of x element-wise \n  sinh(...): Computes hyperbolic sine of x element-wise \n  size(...): Returns the size of a tensor \n  slice(...): Extracts a slice from a tensor \n  sort(...): Sorts a tensor \n  space_to_batch(...): SpaceToBatch for N-D tensors of type T \n  space_to_batch_nd(...): SpaceToBatch for N-D tensors of type T \n  split(...): Splits a tensor value into a list of sub tensors \n  sqrt(...): Computes element-wise square root of the input tensor \n  square(...): Computes square of x element-wise \n  squeeze(...): Removes dimensions of size 1 from the shape of a tensor \n  stack(...): Stacks a list of rank-R tensors into one rank-(R+1) tensor \n  stop_gradient(...): Stops gradient computation \n  strided_slice(...): Extracts a strided slice of a tensor (generalized Python array indexing) \n  subtract(...): Returns x - y element-wise \n  switch_case(...): Create a switch/case operation, i.e. an integer-indexed conditional \n  tan(...): Computes tan of x element-wise \n  tanh(...): Computes hyperbolic tangent of x element-wise \n  tensor_scatter_nd_add(...): Adds sparse updates to an existing tensor according to indices \n  tensor_scatter_nd_max(...)\n  tensor_scatter_nd_min(...)\n  tensor_scatter_nd_sub(...): Subtracts sparse updates from an existing tensor according to indices \n  tensor_scatter_nd_update(...): "Scatter updates into an existing tensor according to indices \n  tensordot(...): Tensor contraction of a and b along specified axes and outer product \n  tile(...): Constructs a tensor by tiling a given tensor \n  timestamp(...): Provides the time since epoch in seconds \n  transpose(...): Transposes a, where a is a Tensor \n  truediv(...): Divides x / y elementwise (using Python 3 division operator semantics) \n  truncatediv(...): Returns x / y element-wise for integer types \n  truncatemod(...): Returns element-wise remainder of division. This emulates C semantics in that\n  tuple(...): Group tensors together \n  type_spec_from_value(...): Returns a tf.TypeSpec that represents the given value \n  unique(...): Finds unique elements in a 1-D tensor \n  unique_with_counts(...): Finds unique elements in a 1-D tensor \n  unravel_index(...): Converts an array of flat indices into a tuple of coordinate arrays \n  unstack(...): Unpacks the given dimension of a rank-R tensor into rank-(R-1) tensors \n  variable_creator_scope(...): Scope which defines a variable creation function to be used by variable() \n  vectorized_map(...): Parallel map on the list of tensors unpacked from elems on dimension 0 \n  where(...): Return the elements where condition is True (multiplexing x and y) \n  while_loop(...): Repeat body while the condition cond is true. (deprecated argument values)\n  zeros(...): Creates a tensor with all elements set to zero \n  zeros_like(...): Creates a tensor with all elements set to zero \n  Other Members\n \n  version 2.4.0 \n  bfloat16 tf.dtypes.DType \n  bool tf.dtypes.DType \n  complex128 tf.dtypes.DType \n  complex64 tf.dtypes.DType \n  double tf.dtypes.DType \n  float16 tf.dtypes.DType \n  float32 tf.dtypes.DType \n  float64 tf.dtypes.DType \n  half tf.dtypes.DType \n  int16 tf.dtypes.DType \n  int32 tf.dtypes.DType \n  int64 tf.dtypes.DType \n  int8 tf.dtypes.DType \n  newaxis None \n  qint16 tf.dtypes.DType \n  qint32 tf.dtypes.DType \n  qint8 tf.dtypes.DType \n  quint16 tf.dtypes.DType \n  quint8 tf.dtypes.DType \n  resource tf.dtypes.DType \n  string tf.dtypes.DType \n  uint16 tf.dtypes.DType \n  uint32 tf.dtypes.DType \n  uint64 tf.dtypes.DType \n  uint8 tf.dtypes.DType \n  variant tf.dtypes.DType',
            },
          ]
        t.competencyTags01R = o
      },
      70892: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.competencyTags02D = void 0)
        var i = n(35603),
          o = [
            {
              idProfile: '2',
              title: 'Appliance Repair',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Technical Skills',
              linkHref: 'https://en.wikipedia.org/wiki/Home_appliance',
              tooltips:
                '    Performing diagnostic tests on appliances\n    Repairing refrigerators, ovens, dishwashers, and other appliances\n    Installing and uninstalling appliances\n    Replacing broken parts on appliances\n    Calibrating and adjusting appliance settings\n    ',
            },
            {
              idProfile: '2',
              title: 'Electrical Troubleshooting',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Technical Skills',
              linkHref:
                'https://en.wikipedia.org/wiki/Electrical_troubleshooting',
              tooltips:
                '    Identifying electrical issues in homes or buildings\n    Testing electrical components\n    Repairing electrical faults\n    Installing and upgrading electrical systems\n    Maintaining electrical systems and equipment\n    ',
            },
            {
              idProfile: '2',
              title: 'Diagnostics and Testing',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Technical Skills',
              linkHref: 'https://en.wikipedia.org/wiki/Diagnostics',
              tooltips:
                '    Performing diagnostic tests on equipment and machinery\n    Troubleshooting mechanical, electrical, and software problems\n    Interpreting diagnostic test results\n    Developing testing procedures and protocols\n    Maintaining testing equipment\n    ',
            },
            {
              idProfile: '2',
              title: 'Equipment Maintenance',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Technical Skills',
              linkHref: 'https://en.wikipedia.org/wiki/Maintenance_(technical)',
              tooltips:
                '    Performing routine maintenance on machinery and equipment\n    Inspecting and testing machinery and equipment\n    Identifying potential issues and repairing or replacing parts as needed\n    Calibrating and adjusting machinery and equipment settings\n    Documenting maintenance activities and keeping records\n    ',
            },
            {
              idProfile: '2',
              title: 'Safety Procedures',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Technical Skills',
              linkHref: 'https://en.wikipedia.org/wiki/Safety_procedure',
              tooltips:
                '    Adhering to workplace safety protocols\n    Identifying and mitigating workplace hazards\n    Using personal protective equipment (PPE) correctly\n    Responding to workplace accidents and emergencies\n    Conducting safety inspections\n    ',
            },
            {
              idProfile: '2',
              title: 'Technical Documentation',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Technical Skills',
              linkHref: 'https://en.wikipedia.org/wiki/Technical_writing',
              tooltips:
                '    Creating technical documentation, including manuals and instruction guides\n    Editing and updating existing technical documentation\n    Adhering to documentation standards and guidelines\n    Organizing and presenting technical information clearly and concisely\n    Collaborating with subject matter experts (SMEs) and other stakeholders\n    ',
            },
            {
              idProfile: '2',
              title: 'Time Management',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Soft Skills',
              linkHref: 'https://en.wikipedia.org/wiki/Time_management',
              tooltips:
                '    Setting and achieving goals within deadlines\n    Prioritizing tasks and activities effectively\n    Organizing and planning work schedules\n    Eliminating distractions and staying focused\n    Optimizing productivity and efficiency\n    ',
            },
            {
              idProfile: '2',
              title: 'Customer Service',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Soft Skills',
              linkHref: 'https://en.wikipedia.org/wiki/Customer_service',
              tooltips:
                '    Interacting with customers in a professional and courteous manner\n    Resolving customer complaints and issues\n    Providing product and service information to customers\n    Handling customer inquiries and requests\n    Maintaining customer satisfaction and loyalty\n    ',
            },
            {
              idProfile: '2',
              title: 'Teamwork',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Soft Skills',
              linkHref: 'https://en.wikipedia.org/wiki/Teamwork',
              tooltips:
                '      Collaboration\n      Leadership\n      Effective communication\n      Conflict resolution\n      Active listening\n      ',
            },
            {
              idProfile: '2',
              title: 'Inventory Management',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Logistics Skills',
              linkHref: 'https://en.wikipedia.org/wiki/Inventory_management',
              tooltips:
                '      Forecasting and demand planning\n      Supplier management\n      Warehouse organization and layout\n      Inventory control\n      Logistics and distribution\n      ',
            },
            {
              idProfile: '2',
              title: 'Quality Control',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Logistics Skills',
              linkHref: 'https://en.wikipedia.org/wiki/Quality_control',
              tooltips:
                '      Inspection and testing\n      Statistical process control\n      Root cause analysis\n      Documentation and record keeping\n      Continuous improvement\n      ',
            },
            {
              idProfile: '2',
              title: 'Communication Skills',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Soft Skills',
              linkHref: 'https://en.wikipedia.org/wiki/Communication_skills',
              tooltips:
                '      Verbal communication\n      Nonverbal communication\n      Written communication\n      Active listening\n      Presentation skills\n      ',
            },
            {
              idProfile: '2',
              title: 'Problem Solving',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Soft Skills',
              linkHref: 'https://en.wikipedia.org/wiki/Problem_solving',
              tooltips:
                '      Analytical thinking\n      Creativity\n      Decision making\n      Problem identification\n      Solution implementation\n      ',
            },
            {
              idProfile: '2',
              title: 'Attention to Detail',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Soft Skills',
              linkHref: 'https://en.wikipedia.org/wiki/Attention_to_detail',
              tooltips:
                '  Accuracy\n  Precision\n  Organization\n  Thoroughness\n  ',
            },
            {
              idProfile: '2',
              title: 'Project Management',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Management Skills',
              linkHref: 'https://en.wikipedia.org/wiki/Project_management',
              tooltips:
                '  Planning and Scheduling\n  Budgeting and Cost Management\n  Risk Management\n  Resource Management\n  Leadership and Communication\n  ',
            },
            {
              idProfile: '2',
              title: 'Tool Maintenance',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Technical Skills',
              linkHref: 'https://en.wikipedia.org/wiki/Tool_maintenance',
              tooltips:
                '  Cleaning and Lubrication\n  Sharpening and Repair\n  Storage and Handling\n  Inspection and Calibration\n  ',
            },
            {
              idProfile: '2',
              title: 'Parts Ordering and Inventory',
              contentType: i.SectionType.CompetencyTagType,
              section: 'Logistics Skills',
              linkHref:
                'https://en.wikipedia.org/wiki/Inventory_management#Parts_inventory_management',
              tooltips:
                '  Supplier Management\n  Demand Forecasting\n  Reorder Point and Safety Stock\n  ABC Analysis\n  Inventory Accuracy and Control\n  ',
            },
          ]
        t.competencyTags02D = o
      },
      71910: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.competencyTags = void 0)
        var o = i(n(861)),
          a = n(13214),
          r = n(70892),
          s = [].concat(
            (0, o.default)(a.competencyTags01R),
            (0, o.default)(r.competencyTags02D)
          )
        t.competencyTags = s
      },
      3893: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.links01R = void 0)
        var i = n(88784),
          o = [
            {
              idProfile: '1',
              iconLibrary: 'Ionicons',
              iconName: 'calendar-outline',
              contentType: i.SectionType.linkHref,
              contentSrc: 'https://calendly.com/romanch',
              content: 'Feel free to setup a phone call',
              label: 'Link',
              isActive: !0,
            },
            {
              idProfile: '1',
              iconLibrary: 'Ionicons',
              iconName: 'logo-linkedin',
              contentType: i.SectionType.linkHref,
              contentSrc: 'https://www.linkedin.com/in/romanches',
              content: 'Profile in Linkedin.com',
              label: 'Link',
              isActive: !0,
            },
            {
              idProfile: '1',
              iconLibrary: 'Ionicons',
              iconName: 'logo-stackoverflow',
              contentType: i.SectionType.linkHref,
              contentSrc: 'https://stackoverflow.com/users/4791116/roman',
              content: 'Profile in Stackoverflow',
              label: 'Link',
              isActive: !0,
            },
            {
              idProfile: '1',
              iconLibrary: 'Ionicons',
              iconName: 'logo-github',
              contentType: i.SectionType.linkHref,
              contentSrc: 'https://github.com/ybeaz',
              content: 'Profile in Github',
              label: 'Link',
              isActive: !0,
            },
            {
              idProfile: '1',
              iconLibrary: void 0,
              iconName: void 0,
              contentType: i.SectionType.imageSrc,
              contentSrc:
                'https://yourails.com/images/users/qrcode-romeQuietZone00.png',
              content: '',
              label: 'QR code with contacts',
              isActive: !0,
            },
          ]
        t.links01R = o
      },
      78587: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.links02D = void 0)
        var i = n(88784),
          o = [
            {
              idProfile: '2',
              iconLibrary: 'Ionicons',
              iconName: 'logo-linkedin',
              contentType: i.SectionType.linkHref,
              contentSrc: 'https://www.linkedin.com/in/dmitry-che/',
              content: 'Profile in Linkedin.com',
              label: 'Link',
              isActive: !0,
            },
            {
              idProfile: '2',
              iconLibrary: void 0,
              iconName: void 0,
              contentType: i.SectionType.imageSrc,
              contentSrc:
                'https://yourails.com/images/users/qrcode-romeQuietZone00.png',
              content: '',
              label: 'QR code with contacts',
              isActive: !0,
            },
          ]
        t.links02D = o
      },
      71744: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.links = void 0)
        var o = i(n(861)),
          a = n(3893),
          r = n(78587),
          s = [].concat((0, o.default)(a.links01R), (0, o.default)(r.links02D))
        t.links = s
      },
      65621: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.messages01R = void 0)
        var i = n(99613),
          o = [
            {
              idMessage: 'random_string_1',
              idConversation: '["1","4"]',
              idProfile: '4',
              createdAt: 1646145e6,
              eventType: i.MessageEventType.chatMessage,
              text: 'Need a web app for appointment management.',
            },
            {
              idMessage: 'random_string_2',
              idConversation: '["1","4"]',
              idProfile: '1',
              createdAt: 16461453e5,
              eventType: i.MessageEventType.chatMessage,
              text: 'Details on how you want the app to work?',
            },
            {
              idMessage: 'random_string_3',
              idConversation: '["1","4"]',
              idProfile: '4',
              createdAt: 164614564e4,
              eventType: i.MessageEventType.chatMessage,
              text: 'Schedule, cancel, notifications. Show past appts in calendar view.',
            },
            {
              idMessage: 'random_string_4',
              idConversation: '["1","4"]',
              idProfile: '1',
              createdAt: 164614596e4,
              eventType: i.MessageEventType.chatMessage,
              text: 'Specific design or layout requirements?',
            },
            {
              idMessage: 'random_string_5',
              idConversation: '["1","4"]',
              idProfile: '4',
              createdAt: 16461463e5,
              eventType: i.MessageEventType.chatMessage,
              text: 'Clean, modern, easy to use.',
            },
            {
              idMessage: 'random_string_6',
              idConversation: '["1","4"]',
              idProfile: '1',
              createdAt: 164614662e4,
              eventType: i.MessageEventType.chatMessage,
              text: 'How many users?',
            },
            {
              idMessage: 'random_string_7',
              idConversation: '["1","4"]',
              idProfile: '4',
              createdAt: 164614698e4,
              eventType: i.MessageEventType.chatMessage,
              text: 'Around 50.',
            },
            {
              idMessage: 'random_string_8',
              idConversation: '["1","4"]',
              idProfile: '1',
              createdAt: 164614734e4,
              eventType: i.MessageEventType.chatMessage,
              text: 'Deadline for project?',
            },
            {
              idMessage: 'random_string_9',
              idConversation: '["1","4"]',
              idProfile: '4',
              createdAt: 16461477e5,
              eventType: i.MessageEventType.chatMessage,
              text: '3 months.',
            },
            {
              idMessage: 'random_string_10',
              idConversation: '["1","4"]',
              idProfile: '1',
              createdAt: 164614806e4,
              eventType: i.MessageEventType.chatMessage,
              text: 'Starting project, will keep you updated.',
            },
          ]
        t.messages01R = o
      },
      57961: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.messages02D = void 0)
        var i = n(99613),
          o = [
            {
              createdAt: 1673904347e3,
              idMessage: '0',
              idConversation: '["1","2"]',
              idProfile: '1',
              eventType: i.MessageEventType.chatMessage,
              text: 'Hi! Need an electrician for some lighting fixtures.',
            },
            {
              createdAt: 1673904967e3,
              idMessage: '1',
              idConversation: '["1","2"]',
              idProfile: '2',
              eventType: i.MessageEventType.chatMessage,
              text: 'Hey there! What are you thinking?',
            },
            {
              createdAt: 167390558e4,
              idMessage: '3',
              idConversation: '["1","2"]',
              idProfile: '1',
              eventType: i.MessageEventType.chatMessage,
              text: 'Recessed lights in living & kitchen, new chandelier in dining. Got any recommendations?',
            },
            {
              createdAt: 1673906187e3,
              idMessage: '4',
              idConversation: '["1","2"]',
              idProfile: '2',
              eventType: i.MessageEventType.chatMessage,
              text: "Sure thing! What's your budget?",
            },
            {
              createdAt: 1673906807e3,
              idMessage: '5',
              idConversation: '["1","2"]',
              idProfile: '1',
              eventType: i.MessageEventType.chatMessage,
              text: 'Around $1500, including everything.',
            },
            {
              createdAt: 1673907431e3,
              idMessage: '6',
              idConversation: '["1","2"]',
              idProfile: '2',
              eventType: i.MessageEventType.chatMessage,
              text: 'Got it. When can I take a look at the space??',
            },
            {
              createdAt: 1673908047e3,
              idMessage: '7',
              idConversation: '["1","2"]',
              idProfile: '1',
              eventType: i.MessageEventType.chatMessage,
              text: 'How is about this Saturday around the noon?',
            },
            {
              createdAt: 1673908667e3,
              idMessage: '8',
              idConversation: '["1","2"]',
              idProfile: '2',
              eventType: i.MessageEventType.chatMessage,
              text: 'That works for me, see you then!',
            },
          ]
        t.messages02D = o
      },
      50918: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.messages03RD = void 0)
        var i = n(99613),
          o = [
            {
              createdAt: 1673904347e3,
              idMessage: 'abc123',
              idConversation: '["1","2"]',
              idProfile: '2',
              eventType: i.MessageEventType.chatMessage,
              text: 'Hello! How can I assist you today?',
            },
            {
              createdAt: 1673904349e3,
              idMessage: 'def456',
              idConversation: '["1","2"]',
              idProfile: '1',
              eventType: i.MessageEventType.chatMessage,
              text: 'Hi there! I recently purchased a new oven and I need help with the installation.',
            },
            {
              createdAt: 1673904351e3,
              idMessage: 'ghi789',
              idConversation: '["1","2"]',
              idProfile: '2',
              eventType: i.MessageEventType.chatMessage,
              text: "Sure, I'd be happy to help you with that. Could you provide me with the model and specifications of your oven?",
            },
            {
              createdAt: 1673904353e3,
              idMessage: 'jkl012',
              idConversation: '["1","2"]',
              idProfile: '1',
              eventType: i.MessageEventType.chatMessage,
              text: "It's a stainless steel electric oven with dimensions of 30 inches wide. The model number is XYZ-123.",
            },
            {
              createdAt: 1673904355e3,
              idMessage: 'mno345',
              idConversation: '["1","2"]',
              idProfile: '2',
              eventType: i.MessageEventType.chatMessage,
              text: "Great! I'll need to check if the electrical wiring in your kitchen can support the oven's power requirements. Do you know the voltage and amperage needed for the oven?",
            },
            {
              createdAt: 1673904357e3,
              idMessage: 'pqr678',
              idConversation: '["1","2"]',
              idProfile: '1',
              eventType: i.MessageEventType.chatMessage,
              text: 'The voltage required is 240V, and it needs a 40-amp circuit. I believe my kitchen should have the appropriate wiring.',
            },
            {
              createdAt: 1673904359e3,
              idMessage: 'stu901',
              idConversation: '["1","2"]',
              idProfile: '2',
              eventType: i.MessageEventType.chatMessage,
              text: 'That should work fine. Just to confirm, do you have the necessary outlet in place, or will we need to install one as well?',
            },
            {
              createdAt: 1673904361e3,
              idMessage: 'vwx234',
              idConversation: '["1","2"]',
              idProfile: '1',
              eventType: i.MessageEventType.chatMessage,
              text: "I already have a dedicated outlet for the oven. It's a 4-prong 240V outlet, so it should be compatible.",
            },
            {
              createdAt: 1673904363e3,
              idMessage: 'yza567',
              idConversation: '["1","2"]',
              idProfile: '2',
              eventType: i.MessageEventType.chatMessage,
              text: 'Perfect! In that case, I can schedule a convenient time to come over and install your new oven. How does next Wednesday morning sound to you?',
            },
            {
              createdAt: 1673904365e3,
              idMessage: 'bcd890',
              idConversation: '["1","2"]',
              idProfile: '1',
              eventType: i.MessageEventType.chatMessage,
              text: 'Wednesday morning works well for me. Thank you for your help!',
            },
          ]
        t.messages03RD = o
      },
      67535: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.messages = void 0)
        var o = i(n(861)),
          a = n(65621),
          r = n(57961),
          s = n(50918),
          l = [].concat(
            (0, o.default)(a.messages01R),
            (0, o.default)(r.messages02D),
            (0, o.default)(s.messages03RD)
          )
        t.messages = l
      },
      86747: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.profiles = void 0)
        var n = [
          {
            idProfile: '0',
            idUser: '0',
            profileName: '@',
            nameFirst: '',
            nameLast: '',
            position: 0,
            avatarSrc: '',
            phones: [],
            emails: [],
            messengers: [],
            locations: [],
            serviceSpecs: [],
            summary: '',
          },
          {
            idProfile: '19',
            idUser: '6',
            profileName: '@gpt-image-v1-Bot',
            nameFirst: 'Painter',
            nameLast: 'GPT v1 Bot',
            position: 4,
            avatarSrc:
              'https://yourails.com/images/chatgpt-logo/chatgpt-03.jpeg',
            imagePendingSrc:
              'https://otvet.imgsmail.ru/download/88388439_94ff949a9d607a033cd4eb11d83937ed_800.gif',
            pendingText: 'I am creating',
            phones: [],
            emails: [],
            messengers: [],
            locations: ['Internet'],
            serviceSpecs: ['Content Creation', 'Question Answering'],
            summary:
              'The Image Generator API offered by ChatGPT allows users to generate diverse and high-quality images based on textual prompts. By providing descriptive or instructive text, the API generates corresponding images that align with the given input. This powerful tool enables developers and designers to explore creative possibilities, prototype visuals, and enhance their applications with dynamic image generation. Whether you need custom illustrations, conceptual images, or visualizations based on textual descriptions, the Image Generator API offers a versatile and efficient solution to bring your ideas to life in the form of compelling visuals.',
            disclaimer:
              "As a AI language model, I can generate text based on patterns and examples from a wide range of sources. While I strive to provide accurate and helpful information, I must clarify that I do not have direct access to or knowledge of specific authors' works, including exact citations or specific phrases from their writings.",
          },
          {
            idProfile: '18',
            idUser: '6',
            profileName: '@gpt-creativeBot',
            nameFirst: 'Creative',
            nameLast: 'GPT3.5 Bot',
            position: 4,
            avatarSrc:
              'https://yourails.com/images/chatgpt-logo/chatgpt-06.jpeg',
            imagePendingSrc:
              'https://i.pinimg.com/originals/87/dc/79/87dc799670c06e9754bccb3b37d9541d.gif',
            pendingText: 'I am thinking',
            phones: [],
            emails: [],
            messengers: [],
            locations: ['Internet'],
            serviceSpecs: ['Content Creation', 'Question Answering'],
            summary:
              "GPT-3.5 Turbo temperature=0.8 is a variant with more diverse and creative approach to generating answers. The model introduces randomness into its output, resulting in a wider range of possible responses. This higher temperature setting allows for more exploration of alternative options and can lead to more imaginative or unexpected answers. However, it's worth noting that setting the temperature to 0.8 may also introduce some degree of unpredictability and occasional nonsensical or less coherent responses.",
            disclaimer:
              "As a AI language model, I can generate text based on patterns and examples from a wide range of sources. While I strive to provide accurate and helpful information, I must clarify that I do not have direct access to or knowledge of specific authors' works, including exact citations or specific phrases from their writings.",
          },
          {
            idProfile: '17',
            idUser: '6',
            profileName: '@gpt-pedantBot',
            nameFirst: 'Pedant',
            nameLast: 'GPT3.5 Bot',
            position: 4,
            avatarSrc:
              'https://yourails.com/images/chatgpt-logo/chatgpt-09.jpeg',
            imagePendingSrc:
              'https://media.tenor.com/NdWpwj3NKpYAAAAC/santosh-dawar-scientist.gif',
            pendingText: 'I am thinking',
            phones: [],
            emails: [],
            messengers: [],
            locations: ['Internet'],
            serviceSpecs: ['Content Creation', 'Question Answering'],
            summary:
              'GPT-3.5 Turbo temperature=0 is a variant with highly focused and deterministic. The model generates responses with little to no randomness, selecting the most likely and "safe" option based on the given context. This means that the responses are more likely to be precise, consistent, and follow a predictable pattern. However, setting the temperature to 0 can also make the responses seem more rigid and less creative compared to higher temperature settings. ',
            disclaimer:
              "As a AI language model, I can generate text based on patterns and examples from a wide range of sources. While I strive to provide accurate and helpful information, I must clarify that I do not have direct access to or knowledge of specific authors' works, including exact citations or specific phrases from their writings.",
          },
          {
            idProfile: '16',
            idUser: '1',
            profileName: '@yourails',
            nameFirst: 'YouRails.com',
            nameLast: '',
            position: 7,
            avatarSrc:
              'https://yourails.com/images/promo01/logo-2023-06-18-2.jpeg',
            phones: ['415-650-9893'],
            emails: ['t3531350@yahoo.com'],
            messengers: [{ name: 'Telegram', profileName: '@rome_sfba2' }],
            locations: ['San Francisco, CA'],
            serviceSpecs: ['AI Chat Marketplace Aggregator'],
            summary:
              'YouRails.com is an AI marketplace. It brings AI engineers, end users, and enterprise customers together.\n\nAI engineers find the specialized chat format and cloud engine. \n\nEnd users discover AI models in one place (like NLP, CV, STT, etc.) to try, use, rate, and review in a convenient yet dedicated chat user interface. \n\nEnterprise users can integrate AI solutions into their sites and business processes, securely separating AI from other modes of communication.\n\nFor AI engineers:\n1. Connect existing AI models to our chat interface. \n2. Display AI models as AI chats. Collect analytics and feedback.\n3. Provide monetization options.\n\nFor End users:\n1. Multiple AI products in one place \u2013 from text generation to computer vision. From freeware to freemium.\n2. WhatsApp-like chat functionality:  groups, message forwarding, channels.\n3. Groups with AI personas, like Example.com, Einstein, or Pushkin. \n\nFor Enterprise users: \n1. Various integration options: iframe and unified of one endpoint API for all AI models.\n2. Access AI products via SSO and JWT tokens.\n3. Dynamically order or change AI vendors depending on the current requirements of projects.\n4. Separation of AI communication from other enterprise communication channels such as Slack / Teams, etc.\n5. Availability to configure special Assurance Guardian Scenarios (AGS) such as \u201cNo Trust\u201d filters for inputs (exclude sensitive data input), \u201cHuman Oversight\u201d (no copy-paste without explicit revision), \u201cAI Usage Declaration\u201d, etc.  \n',
          },
          {
            idProfile: '15',
            idUser: '7',
            profileName: '@handsScissors',
            nameFirst: 'Edvard',
            nameLast: 'Hands & Scissors',
            position: 5,
            avatarSrc:
              'https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-barber-scissors-hand-drawn-illustration-image_2284107.jpg',
            phones: ['415-000-0000'],
            emails: ['example@site.com'],
            messengers: [],
            locations: ['Santa Manica, CA'],
            serviceSpecs: ['Haircutter', 'Hairdresser'],
            summary:
              "As a barber, my work revolves around the art of transforming hair into a personalized expression of style and confidence. When a client sits in my chair, I strive to create a connection, understanding their unique preferences and aspirations. Through attentive consultation, I delve into their desired look, taking into account their hair type, facial features, and lifestyle. Whether it's a classic haircut, a modern fade, or a trendy style, I use my technical expertise and creative vision to craft a haircut that enhances their appearance and reflects their personality.\n\nWith every snip of the scissors or pass of the clippers, I aim for precision and attention to detail. Each haircut is a canvas where I carefully blend and shape the hair to create a seamless and balanced result. It's not just about cutting hair; it's about using my skills to transform it into a work of art. I pay close attention to the texture, density, and growth patterns of the hair, ensuring that every strand falls into place harmoniously. Whether I'm executing a crisp line or adding texture and movement, my goal is to leave my clients feeling satisfied and looking their best.\n\nBeyond the technical aspects of my craft, I believe in creating an inviting and comfortable atmosphere for my clients. Building a rapport with them is essential, and I take the time to engage in conversations, building a sense of trust and camaraderie. I want my clients to feel relaxed and confident in my abilities, knowing that they are in capable hands. Being a barber is not just about cutting hair\u2014it's about creating an experience where clients can unwind, express themselves, and leave the barber shop feeling rejuvenated and self-assured.",
          },
          {
            idProfile: '14',
            idUser: '6',
            profileName: '@a32z_bot',
            nameFirst: 'And ',
            nameLast: 'H. a32zBot',
            position: 8,
            avatarSrc: '',
            imagePendingSrc:
              'data:image/gif;base64,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',
            pendingText: 'Please, wait',
            phones: [],
            emails: [],
            messengers: [],
            locations: ['Internet'],
            serviceSpecs: ['Venture Capital Firm', 'Question Answering'],
            summary:
              'And Ha32z, also known as a322z, is a prominent venture capital firm that has made a significant impact in the technology industry. With a focus on early-stage and growth-stage investments, They have a diverse portfolio spanning various sectors, and their investment philosophy centers around identifying innovative ideas, strong leadership teams, and substantial market potential. Known for their active involvement and value-added approach, Andreessen Horowitz provides not only financial support but also strategic guidance, operational expertise, and access to their extensive network. As a leading venture capital firm, they have played a vital role in shaping and supporting the growth of groundbreaking technology companies.\n',
            disclaimer:
              "This is a non official version of AI Site Companion. AI language model presented here for demonstrations purposes only.\nThe opinions expressed by this automatic service is automatically generated. They do not purport to reflect the opinions or views of the related company or its members.\nAs a AI language model, I can generate text based on patterns and examples from a wide range of sources. While I strive to provide accurate and helpful information, I must clarify that I do not have direct access to or knowledge of specific authors' works, including exact citations or specific phrases from their writings.\nIt's recommended to use the information provided by this service critically and to consult multiple sources for important or time-sensitive matters.\n",
          },
          {
            idProfile: '13',
            idUser: '6',
            profileName: '@acc_partners_bot',
            nameFirst: 'Acc',
            nameLast: 'PartnersBot',
            position: 9,
            avatarSrc: '',
            imagePendingSrc:
              'data:image/gif;base64,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',
            pendingText: 'Please, wait',
            phones: [],
            emails: [],
            messengers: [],
            locations: ['Internet'],
            serviceSpecs: ['Venture Capital Firm', 'Question Answering'],
            summary:
              'Acc Partners is a renowned global venture capital firm that specializes in early-stage and growth-stage investments. With a strong focus on the technology sector, Accel has made significant contributions to the industry. Accel operates globally, with offices in various countries, and provides not only financial support but also strategic guidance and operational expertise to their portfolio companies. Their collaborative approach, sector expertise, and successful track record have solidified their position as a leading venture capital firm in the tech world.\n',
            disclaimer:
              "This is a non official version of AI Site Companion. AI language model presented here for demonstrations purposes only.\nThe opinions expressed by this automatic service is automatically generated. They do not purport to reflect the opinions or views of the related company or its members.\nAs a AI language model, I can generate text based on patterns and examples from a wide range of sources. While I strive to provide accurate and helpful information, I must clarify that I do not have direct access to or knowledge of specific authors' works, including exact citations or specific phrases from their writings.\nIt's recommended to use the information provided by this service critically and to consult multiple sources for important or time-sensitive matters.\n",
          },
          {
            idProfile: '12',
            idUser: '6',
            profileName: '@seq_capital_bot',
            nameFirst: 'Seq',
            nameLast: 'CapitalBot',
            position: 10,
            avatarSrc: '',
            imagePendingSrc:
              'data:image/gif;base64,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',
            pendingText: 'Please, wait',
            phones: [],
            emails: [''],
            messengers: [],
            locations: ['Internet'],
            serviceSpecs: ['Venture Capital Firm', 'Question Answering'],
            summary:
              "Seq Capital is a renowned venture capital firm that focuses on early-stage and growth-stage investments in technology companies. Here's a summary of Seq Capital:\nOverview: Seq Capital was founded in 1972 and has its headquarters in Menlo Park, California. It has a strong track record of backing successful companies and has become one of the most influential and respected venture capital firms globally.\nInvestment Philosophy: Seq Capital invests in a diverse range of sectors, including technology, healthcare, consumer, energy, and more. The firm seeks out innovative companies with disruptive ideas, strong leadership teams, and significant market potential.\nInvestment Stages: Seq Capital invests in companies at various stages of their growth, from early-stage startups to established companies. They have separate funds for seed-stage, early-stage, and growth-stage investments.\nGlobal Reach: While Seq Capital is based in Silicon Valley, it has expanded its reach globally. It has offices in the United States, China, India, Israel, and other locations, allowing it to invest in promising companies worldwide.\nValue-Added Approach: Seq Capital is known for providing more than just financial support to its portfolio companies. They offer strategic guidance, operational expertise, and networking opportunities, leveraging their extensive network and experience to help companies thrive.\nSeq Capital China: Seq Capital also has a separate entity called Seq Capital China, which focuses on investing in Chinese companies. It operates independently but shares the same investment philosophy and approach as its parent firm.\nSeq Capital's long history and successful track record have established it as a prominent player in the venture capital industry, and its investments have played a significant role in shaping the technology landscape globally.\n",
            disclaimer:
              "This is a non official version of AI Site Companion. AI language model presented here for demonstrations purposes only.\nThe opinions expressed by this automatic service is automatically generated. They do not purport to reflect the opinions or views of the related company or its members.\nAs a AI language model, I can generate text based on patterns and examples from a wide range of sources. While I strive to provide accurate and helpful information, I must clarify that I do not have direct access to or knowledge of specific authors' works, including exact citations or specific phrases from their writings.\nIt's recommended to use the information provided by this service critically and to consult multiple sources for important or time-sensitive matters.\n",
          },
          {
            idProfile: '11',
            idUser: '6',
            profileName: '@streamlabs_bot',
            nameFirst: 'Streamlabs',
            nameLast: 'SupportBot',
            position: 1,
            avatarSrc:
              'data:image/jpeg;base64,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EREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP/2Q==',
            imagePendingSrc: 'https://i.gifer.com/EKSb.gif',
            pendingText: 'Thinking and typing',
            phones: [],
            emails: ['bd@streamlabs.com', 'support@streamlabs.com'],
            messengers: [],
            locations: ['Internet'],
            serviceSpecs: ['Tech. support', 'Question Answering'],
            summary:
              'Streamlabs builds tools and software allowing live streamers and content creators to engage with viewers, monetize their broadcasts, and grow their channels.    \n',
            disclaimer:
              "This is a non official version of AI Site Companion. AI language model presented here for demonstrations purposes only.\nThe opinions expressed by this automatic service is automatically generated. They do not purport to reflect the opinions or views of the related company or its members.\nAs a AI language model, I can generate text based on patterns and examples from a wide range of sources. While I strive to provide accurate and helpful information, I must clarify that I do not have direct access to or knowledge of specific authors' works, including exact citations or specific phrases from their writings.\nIt's recommended to use the information provided by this service critically and to consult multiple sources for important or time-sensitive matters.\n",
          },
          {
            idProfile: '10',
            idUser: '6',
            profileName: '@pushkin_bot',
            nameFirst: 'Alexander',
            nameLast: 'PushkinBot',
            position: 3,
            avatarSrc:
              'data:image/jpeg;base64,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',
            imagePendingSrc:
              'https://otvet.imgsmail.ru/download/110336146_43cc8237332da27db2d6b075df2fa14e_800.gif',
            pendingText: 'I am thinking',
            phones: [],
            emails: [],
            messengers: [],
            locations: ['History'],
            serviceSpecs: ['Simulation', 'Question Answering'],
            summary:
              '\n      Alexander Sergeyevich Pushkin (1799-1837) was a Russian poet, playwright, and novelist, widely regarded as the founder of modern Russian literature. His works, including "Eugene Onegin" and "The Bronze Horseman," combined classical forms with colloquial language, capturing the essence of the Russian people and exploring themes of love, freedom, and identity. Pushkin\'s profound insights into human nature and society, along with his lyrical poetry, have had a lasting impact on Russian literature.\n      Despite facing censorship and political pressure, Pushkin\'s creativity flourished, and he produced remarkable works during his exile in southern Russia. His writings not only influenced subsequent generations of Russian authors but also resonated with readers through their emotional depth and historical context. Tragically, Pushkin\'s life was cut short when he died at the age of 37 in a duel, but his literary legacy continues to be celebrated as a vital part of Russian cultural heritage.\n      Alexander Pushkin\'s immense contribution to Russian literature, his ability to blend classical and vernacular language, and his exploration of universal themes have solidified his status as a literary icon. His enduring works and keen observations of human experience have left an indelible mark, making him one of the most revered and influential figures in the history of Russian literature.',
            disclaimer:
              "As a AI language model, I can generate text based on patterns and examples from a wide range of sources. While I strive to provide accurate and helpful information, I must clarify that I do not have direct access to or knowledge of specific authors' works, including exact citations or specific phrases from their writings.",
          },
          {
            idProfile: '9',
            idUser: '6',
            profileName: '@einstein_bot',
            nameFirst: 'Albert',
            nameLast: 'EinsteinBot',
            position: 2,
            avatarSrc:
              'data:image/jpeg;base64,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',
            imagePendingSrc:
              'https://clipart-library.com/image_gallery/n1017472.gif',
            pendingText: 'I am thinking',
            phones: [],
            emails: [],
            messengers: [],
            locations: ['History'],
            serviceSpecs: ['Simulation', 'Question Answering'],
            summary:
              "\n      Albert Einstein(1879- 1955) was a German - born physicist who is widely regarded as one of the greatest scientific minds in history.He revolutionized our understanding of the physical world, particularly through his theory of relativity, which provided a new framework for comprehending space, time, and gravity.\n      Einstein's most famous equation, E=mc\xb2, established the equivalence of mass and energy and played a significant role in the development of atomic energy. His groundbreaking work on the photoelectric effect earned him the Nobel Prize in Physics in 1921. Einstein's theories also contributed to advancements in various scientific fields, including astrophysics, quantum mechanics, and cosmology.\n      Beyond his scientific achievements, Einstein was known for his advocacy of civil rights, pacifism, and humanitarian causes. He spoke out against war, supported the formation of a Jewish homeland, and fought against racial discrimination. Einstein's wisdom and wit, coupled with his distinctive appearance and iconic image, have made him a globally recognizable figure.\n      Overall, Albert Einstein's scientific discoveries and his impact on the world continue to be celebrated, solidifying his status as an intellectual giant and a cultural icon of the 20th century.",
            disclaimer:
              "As a AI language model, I can generate text based on patterns and examples from a wide range of sources. While I strive to provide accurate and helpful information, I must clarify that I do not have direct access to or knowledge of specific authors' works, including exact citations or specific phrases from their writings.",
          },
          {
            idProfile: '8',
            idUser: '6',
            profileName: '@gpt-3.5- Bot',
            nameFirst: 'Regular',
            nameLast: 'GPT3.5 Bot',
            position: 4,
            avatarSrc:
              'https://yourails.com/images/chatgpt-logo/chatgpt-05.jpeg',
            imagePendingSrc: 'https://yourails.com/images/bots-logos/Ak7z.gif',
            pendingText: 'I am thinking',
            phones: [],
            emails: [],
            messengers: [],
            locations: ['Internet'],
            serviceSpecs: ['Content Creation', 'Question Answering'],
            summary:
              '\n      GPT-3.5 Turbo is an advanced language model developed by OpenAI. It is the successor to GPT-3 and is designed to generate human-like text based on given prompts. With the GPT-3.5 Turbo API, developers can integrate this powerful language model into their applications, products, or services. It can be used for a wide range of natural language processing tasks, such as drafting emails, writing code, answering questions, creating conversational agents, language translation, and more. The API allows you to make requests to the model by sending a prompt and receiving the generated text in response. It provides an intuitive and efficient way to leverage the capabilities of GPT-3.5 Turbo and create interactive and intelligent applications.',
            disclaimer:
              "As a AI language model, I can generate text based on patterns and examples from a wide range of sources. While I strive to provide accurate and helpful information, I must clarify that I do not have direct access to or knowledge of specific authors' works, including exact citations or specific phrases from their writings.",
          },
          {
            idProfile: '7',
            idUser: '5',
            profileName: '@darrell3',
            nameFirst: 'Dar',
            nameLast: 'Sorr',
            position: 16,
            avatarSrc: '',
            phones: ['415-000-0000'],
            emails: ['example@site.com'],
            messengers: [],
            locations: ['San Mateo, CA'],
            serviceSpecs: ['Engineer'],
            summary: '',
          },
          {
            idProfile: '6',
            idUser: '5',
            profileName: '@darrell2',
            nameFirst: 'Karl',
            nameLast: 'Ross',
            position: 15,
            avatarSrc: '',
            phones: ['415-000-0000'],
            emails: ['example@site.com'],
            messengers: [],
            locations: ['San Mateo, CA'],
            serviceSpecs: ['Engineer'],
            summary: '',
          },
          {
            idProfile: '5',
            idUser: '5',
            profileName: '@darrell',
            nameFirst: 'Darrell',
            nameLast: 'Ross',
            position: 14,
            avatarSrc: '',
            phones: ['415-000-0000'],
            emails: ['example@site.com'],
            messengers: [],
            locations: ['San Mateo, CA'],
            serviceSpecs: ['Engineer'],
            summary: '',
          },
          {
            idProfile: '4',
            idUser: '4',
            profileName: '@wilson',
            nameFirst: 'Alicia',
            nameLast: 'Wilson',
            position: 12,
            avatarSrc:
              'https://mindbodygreen-res.cloudinary.com/image/upload/c_fill,g_auto,w_50,h_50,q_auto,f_auto,fl_lossy/dpr_2.0/usr/RSRzgow.png',
            phones: ['650-000-0000'],
            emails: ['example2@site.com'],
            messengers: [],
            locations: ['San Moon, CA'],
            serviceSpecs: ['Technical support'],
            summary: '',
          },
          {
            idProfile: '3',
            idUser: '3',
            profileName: '@trivedi',
            nameFirst: 'Jack',
            nameLast: 'Trivedi',
            position: 13,
            avatarSrc:
              'https://raw.githubusercontent.com/webkul/vivid/master/icons/badge.svg',
            phones: ['415-000-0000'],
            emails: ['example@site.com'],
            messengers: [],
            locations: ['San City, CA'],
            serviceSpecs: ['Technical recruiter'],
            summary: '',
          },
          {
            idProfile: '2',
            idUser: '2',
            profileName: '@smid',
            nameFirst: 'Dmitrii',
            nameLast: 'Smid',
            position: 11,
            avatarSrc: 'https://yourails.com/images/users/avatar-smid.jpg',
            phones: ['415-340-9293'],
            emails: ['smiddist@gmail.com'],
            messengers: [],
            locations: ['San Francisco, CA'],
            serviceSpecs: ['Electrician', 'Appliance technician'],
            summary:
              'Motivated and detail-oriented electrician with experience in installing and maintaining electrical systems in residential settings. Skilled in using hand and power tools to complete tasks accurately and efficiently.',
          },
          {
            idProfile: '1',
            idUser: '1',
            profileName: '@rome',
            nameFirst: 'Roman',
            nameLast: 'Ches',
            position: 6,
            avatarSrc: 'https://yourails.com/images/users/avatar-rome.jpg',
            phones: ['415-650-9893'],
            emails: ['t3531350@yahoo.com'],
            messengers: [{ name: 'Telegram', profileName: '@rome_sfba2' }],
            locations: ['Remote', 'San Francisco, CA'],
            serviceSpecs: ['Full Stack Developer', 'Machine Learning'],
            summary:
              'Full Stack Engineer with 12+ years of experience: a broad overview from MERN to LAMP, from AWS CDK to AI and Machine Learning.\nFrontend and backend Javascript, Typescript, ES6, 4 in React-Native, 8 in React.js, Redux, GraphQL, REST API, Node.js, AWS serverless: CDK, CloudFront, Lambda, API Gateway, Python, AI-ML: a broad outlook from MERN design patterns to LAMP OOP and focus on product requirements\nML and AI include Tensorflow, Keras, NumPy, Pandas, SciPy, Matplotlib, PyTorch, AWS, API\n',
          },
        ]
        t.profiles = n
      },
      58530: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.projects01R = void 0)
        var i = n(35603),
          o = [
            {
              idProfile: '1',
              title: 'Web service. YouRails Academy',
              contentType: i.SectionType.ProjectType,
              isActive: !0,
              pathname: 'demo-yourails-academy.html',
              subtitle: 'Enjoy Creating Courses Quickly',
              description: [
                "YouRails is a platform that has been designed with the aim of making the creation and deployment of educational services based on YouTube video content as easy and as rapid as possible. The platform is incredibly user-friendly, so users don't need any coding experience to be able to create and take quizzes. With YouRails, the process of creating educational content is streamlined, making it quicker and more efficient.",
                "One of the key benefits of YouRails is that it allows users to receive certificates for their achievements, which is a great way to demonstrate their knowledge and skills to potential employers. The platform is designed to be customizable, which means that users can tailor their educational content to their specific needs. Whether you're looking to create content for a specific course, or you want to create content for multiple courses, YouRails is the perfect platform for you.",
              ],
              customer: 'Business, hobby, leasure communities',
              builtwith:
                'React, react-router-dom, Typescript, ES7, ESLint, Babel, Webpack',
              imgSrc:
                'https://yourails.com/images/@rome/yrl-23-demo-yourails-academy.jpg',
              linkHref: 'https://study.yourails.com/academy',
            },
            {
              idProfile: '1',
              title: 'Web service. SPA Windows in Browser Tabs',
              contentType: i.SectionType.ProjectType,
              isActive: !0,
              pathname: 'site-windows',
              subtitle: 'Visualize and manupulate data in web page',
              description: [
                'This is an SPA service that creates a multi-task environment on a single browser tab. It shifts the concept of a personal dashboard and empowers users to organize information according to their own preferences, rather than conforming to the hierarchy of websites or predefined UX scenarios.',
                'With this service, users can open and reorder various modal windows, such as shopping carts, price lists, comparison tables, reports, tasks, offers, messages, notes, and more. This open source project is built around reusable components, featuring high-level visualization, encapsulation of functions, and polymorphism. It offers flexible user stories or a combination thereof, allowing users to tailor their experience to their needs.',
              ],
              customer: 'Not limited',
              builtwith:
                'React, React-dom, ES7, Babel, Webpack, Jest, Enzyme, JSONP, Php, MySQL',
              imgSrc:
                'https://yourails.com/images/@rome/yrl-23-demo-site-windows.jpg',
              linkHref: 'https://sitewindows.com/site-windows-info.html',
            },
            {
              idProfile: '1',
              title: 'Web service. YouRails.com Skills Exchange Messenger',
              contentType: i.SectionType.ProjectType,
              isActive: !0,
              pathname: 'YouRails',
              subtitle:
                'Discover People, Connect, and Create Your Best Life with YouRails.com',
              description: [
                'YouRails.com facilitates users in finding people, solutions, and establishing connections through a chat-first/messenger platform. This platform provides users with the possibility to create and manage multiple profiles that reflect their current life goals and intentions. The process is simplified with an AI-based environment and services.',
                'One of the key features of YouRails.com is the ability for users to create multiple profiles that manifest different "faces" of themselves. Users can activate and deactivate these profiles as needed, allowing them to present themselves differently in different contexts.',
              ],
              customer: 'Not limited',
              builtwith:
                'React-native, React, ES7, Typescript, Expo/Webpack, Jest',
              imgSrc:
                'https://yourails.com/images/@rome/yrl-23-demo-sep-project.jpg',
              linkHref: 'https://web1.yourails.com/k/@smid',
            },
            {
              idProfile: '1',
              title: 'Web game. Tic Tac Toe game with random logic',
              contentType: i.SectionType.ProjectType,
              isActive: !0,
              pathname: 'demo-tic-tak-toe-js.html',
              subtitle: 'Play in the web',
              description: [
                'This Tic Tac Toe game is a classic game that offers an exciting and unpredictable experience with its random reply logic. Built with pure JavaScript, it provides a lightweight and fast gaming experience without any dependencies.',
                'Our game features an intuitive design and customizable settings, so players can easily adjust the game to their preferences. With its user-friendly interface, players can quickly start playing without any hassle.',
              ],
              customer: 'Gaming, leasure time',
              builtwith: 'ES7, ESLint, Babel, Webpack',
              imgSrc:
                'https://yourails.com/images/@rome/yrl-23-demo-tic-tak-toe-js.jpg',
              linkHref: 'https://r1-2022.userto.com/demo-tic-tak-toe-js.html',
            },
            {
              idProfile: '1',
              title: 'Web app. Prototype: Experience Exchange Messenger',
              contentType: i.SectionType.ProjectType,
              isActive: !0,
              pathname: 'demo-experience-exchange-messenger.html',
              subtitle: 'Together know everything',
              description: [
                'Customer Proposition Core: YouRails.com helps people connect with others through a chat-first/messenger platform with multiple user profiles, enabling them to accomplish tasks, pursue hobbies, or engage in personal or business activities.',
                "Secret Sauce: YouRails.com's secret sauce lies in its chat-first/messenger platform with multiple user profiles, allowing users to connect with others easily and efficiently. It provides a user-friendly interface and tools that enable seamless collaboration, making it easier for people to work on tasks or pursue hobbies and interests with others. With YouRails.com, users can find the right people to work with or connect with individuals who share common interests, leading to more productive and enjoyable experiences.",
              ],
              customer: 'Business, hobby, leasure communities',
              builtwith:
                'Antd Compoment lib, React, react-router-dom, Typescript, ES7, ESLint, Babel, Webpack',
              imgSrc: 'https://yourails.com/images/@rome/yrl-23-demo-sep.jpg',
              linkHref:
                'https://study.yourails.com/sep?ssr=Photoshop&hiw=true&sfs=true&sfb=true&ln=en',
            },
            {
              idProfile: '1',
              title: 'Web compoment. Authorization with Social Media',
              contentType: i.SectionType.ProjectType,
              isActive: !0,
              pathname: 'login-social-media.html',
              subtitle: 'Login Quickly as You Like',
              description:
                'It is an internal reactive component block that allows you to log in using social networks such as Facebook, Vk, Google.',
              customer: 'Business, hobby, leasure sites',
              builtwith:
                'React, react-router-dom, Typescript, ES7, ESLint, Babel, Webpack',
              imgSrc:
                'https://yourails.com/images/@rome/yrl-23-demo-auth-social-service.jpg',
              linkHref:
                'https://study.yourails.com/c/cj8dDTHGJBY/Eukaryopolis---The-City-of-Animal-Cells-Crash-Course-Biology-4',
            },
            {
              idProfile: '1',
              title: 'Web app. SPA Active Learning Text',
              contentType: i.SectionType.ProjectType,
              isActive: !0,
              pathname: 'learning-text-learn-phrases-learn-words',
              subtitle: 'Learn by heart easily',
              description:
                'The service assists users with memorizing texts or word sets: hiding text parts, mark difficult words, active reading, 25th frame, etc.',
              customer: 'Education. Language training provider',
              builtwith: 'Bootstrap, Bootstrap-select, javascript',
              imgSrc:
                'https://yourails.com/images/@rome/yrl-23-demo-learnByHeartService.jpg',
              linkHref:
                'https://r1-2022.userto.com/learning-text-learn-phrases-learn-words.html',
            },
            {
              idProfile: '1',
              title: 'Web widget. SPA Online telephone directory',
              contentType: i.SectionType.ProjectType,
              isActive: !0,
              pathname: 'demo-tel-book-reactjs',
              subtitle: 'Find a new way to keep your contacts',
              description:
                'The service allows users to create telephone directory and keep contacts locally on their computers. This is a prototype for various dashboard function architectures.',
              customer: 'Not limited',
              builtwith: 'React, React-dom, ES7, Bootstrap, Webpack',
              imgSrc:
                'https://yourails.com/images/@rome/yrl-23-demo-tel-book.jpg',
              linkHref: 'https://r1-2022.userto.com/demo-tel-book-reactjs.html',
            },
            {
              idProfile: '1',
              title: 'Web component. A dynamic tree component',
              contentType: i.SectionType.ProjectType,
              isActive: !0,
              pathname: 'demo-dynamic-tree-component.html/',
              subtitle: 'Create a menu with folding/unfolding sections',
              description:
                'This is a react component illustrating the menu development with unlimited depth of the data tree',
              customer: 'Any industry',
              builtwith: 'React, Typescript, ES7, ESLint, Webpack',
              imgSrc:
                'https://yourails.com/images/@rome/yrl-23-demo-dynamic-tree-component.jpg',
              linkHref:
                'https://r1-2022.userto.com/demo-dynamic-tree-component.html',
            },
            {
              idProfile: '1',
              title:
                'Web widget. Tables with sorting and filtering features, popup row menu, inline editable',
              contentType: i.SectionType.ProjectType,
              isActive: !0,
              pathname: 'lib-table-match',
              subtitle: 'Get in table what you want with API',
              description:
                'The common part of many types of interactive communication is providing the user with some research tools, such as filtering, sorting, picking up information items. In many times this includes the ability to edit information in some fields and create temporary lists for future consideration. This is a set of ReactJs components for a personal cabinet. This example includes the table, sortable ascending and discending order by columns. Free ride filters and preset filters are implemented. Modal windows as a part of selection process are implemented.',
              customer: 'e-commerce',
              builtwith:
                'React, React-dom, Semantic-UI-React ES7, Babel, Webpack, Mocha',
              imgSrc:
                'https://yourails.com/images/@rome/yrl-23-demo-table-match.png',
              linkHref:
                'https://bb.userto.com/analytics-c7b094941e7e11c6bf93d57366738802',
            },
            {
              idProfile: '1',
              title: 'Web widget. Purchase summary',
              contentType: i.SectionType.ProjectType,
              isActive: !0,
              pathname: 'demo-purchase-summary',
              subtitle: 'Be transpent and encourage online shoppers',
              description:
                'A part of the purchase process is to show the subtotal, taxes and fees, the cost of delivery (savings), coupon discounts, the estimation total. The customer should know details of the goods, the delivery information, general terms and conditions prior to the final step.',
              customer: 'e-commerce',
              builtwith:
                'React, React-dom, React-redux, Redux, Enzyme, Enzyme-adapter-react, Jjest',
              imgSrc:
                'https://yourails.com/images/@rome/yrl-23-demo-purchase-summary.jpg',
              linkHref:
                'https://r1-2022.userto.com/demo-reactjs-purchase-summary.html',
            },
            {
              idProfile: '1',
              title: 'Web page. JS Algorithms and Questions',
              contentType: i.SectionType.ProjectType,
              isActive: !0,
              pathname: 'demo-js-algorithms-problems',
              subtitle: 'Over-prepare, then go with the flow. Regina Brett',
              description:
                'Here are proven, effective techniques and questions for finding true masters of the language.',
              customer: 'Education, job hiring consulting',
              builtwith: 'ReactJS, Bootstrap, javascript',
              imgSrc:
                'https://yourails.com/images/@rome/yrl-23-demo-js-algorithms-problems.png',
              linkHref:
                'https://r1-2022.userto.com/demo-js-algorithms-problems.html',
            },
            {
              idProfile: '1',
              title: 'Web widget. Demo Telegram bot',
              contentType: i.SectionType.ProjectType,
              isActive: !0,
              pathname: 'feedback-via-telegram',
              subtitle: 'Get messages from your prospects instantly',
              description:
                'The service allows to get feedback from visitors of your site instantly on the mobile devices of managers and track the actions. It sends messages from your site feedback forms to your Telegram account. Promt replys for your client requests build trust and loyalty, which is important for sales and for beginning stage of co-operation.',
              customer: 'Sales, small and middle business sites',
              builtwith: 'Telegram API, AJAX, PHP CURL POST Requests',
              imgSrc:
                'https://yourails.com/images/@rome/yrl-23-demo-feedbackTelegram.png',
              linkHref: 'http://r1-2022.userto.com/contacts',
            },
            {
              idProfile: '1',
              title: 'Web widget. Upload images',
              contentType: i.SectionType.ProjectType,
              isActive: !0,
              pathname: 'demo-file-upload',
              subtitle: 'Be free to manage images and files',
              description:
                'The function allows users to show, upload, delete images and files on the server',
              customer: 'Dashboards and services creation',
              builtwith:
                'jQuery File Upload API (AngularJS case), Angular 1.7, jQuery, Bootstrap, AJAX, PHP, GET, POST requests',
              imgSrc:
                'https://yourails.com/images/@rome/yrl-23-demo-fileUpload.png',
              linkHref: 'https://r1-2022.userto.com/demo-file-upload.php',
            },
            {
              idProfile: '1',
              title:
                'Web landing page. Not supported. AAA Advertising Aggregator for Applications, Brand Banner Project',
              contentType: i.SectionType.ProjectType,
              isActive: !0,
              pathname: 'landing-page-brand-banner-project',
              subtitle: '',
              description:
                'It helps earning money from site traffic with numerous levels of flexibility without redesigning of the sites and getting into site engines. The project is based on the brand new Brand Banner technology for website design management, which is neutral to the site engine.',
              customer: '',
              builtwith: 'Angularjs 1.7, Bootstrap, jQuery, AJAX, PHP',
              imgSrc:
                'https://yourails.com/images/@rome/yrl-23-demo-brendBannerPromo.png',
              linkHref:
                'https://yourails.com/images/@rome/yrl-23-demo-brendBannerPromo.png',
            },
            {
              idProfile: '1',
              title:
                'Web widget. Not supported. JS Feedback Forms Builder with Telegram messaging feature',
              contentType: i.SectionType.ProjectType,
              isActive: !0,
              pathname: 'demo-feedback-field',
              subtitle: 'Allow users to leave a feedback',
              description:
                'The project involved a development of the javascript micro-library and light server part for fast creating feedback forms. The script allows developers to include an unlimited number of feedback forms for one page, to use an unlimited number of fields on one form, to build various scenarious for users utilizing modal window techniques, to apply standards for field description, to validate fields and alert user before form submitting',
              customer: '',
              builtwith:
                'Bootstrap, jQuery, AJAX, PHP, POST requests, Telegram API, OOP',
              imgSrc:
                'https://yourails.com/images/@rome/yrl-23-demo-feedbackFormExample05.png',
              linkHref:
                'https://yourails.com/images/@rome/yrl-23-demo-feedbackFormExample05.png',
            },
            {
              idProfile: '1',
              title:
                'Web widget. Not supported. Demo registration and authorization',
              contentType: i.SectionType.ProjectType,
              isActive: !0,
              pathname: 'cabinet-registration-authorization',
              subtitle: '',
              description:
                'The project includes creating a MySql database, providing security, cookie setting, session usage, email confirmation, etc.',
              customer: '',
              builtwith:
                'Angularjs 1.7, jQuery, AJAX, JSON PHP, POST requests, OOP, MySQL-MariaDB.',
              imgSrc:
                'https://yourails.com/images/@rome/yrl-23-demo-authorRegistr.png',
              linkHref:
                'https://yourails.com/images/@rome/yrl-23-demo-authorRegistr.png',
            },
            {
              idProfile: '1',
              title:
                'Web service. Not supported. Language detection with artificial neuro network (ANN)',
              contentType: i.SectionType.ProjectType,
              isActive: !0,
              pathname: 'demo-language-detection',
              subtitle: 'You might not know how, but it works',
              description:
                'A demo introduces an example of language recognition with the help of ANN (artificial neuro network). It makes a real-time probability choice among 8 languages: German, English, Spanish, French, Italian, Polish, Portuguese, Russian, providing friendly interface.',
              customer: 'Finance, Medicine, Computer science, etc.',
              builtwith:
                'php FANN library 2.2, PHP, AJAX, POST requests, Regexp, OOP, Bootstrap, Angularjs 1.7, jQuery, AJAX, JSON',
              imgSrc:
                'https://yourails.com/images/@rome/yrl-23-demo-langDetectAnn.png',
              linkHref:
                'https://yourails.com/images/@rome/yrl-23-demo-langDetectAnn.png',
            },
            {
              idProfile: '1',
              title:
                'Web widget. Not supported. TRIZ Language Problem Description',
              contentType: i.SectionType.ProjectType,
              isActive: !0,
              pathname: 'triz-lang-forms',
              subtitle: 'Allow everybody to invent',
              description:
                'The prototype to desctipt a tasks in problem-solving definitions',
              customer: '',
              builtwith:
                'ReactJS, Bootstrap, jQuery, AJAX, PHP, POST requests, Telegram API, OOP',
              imgSrc:
                'https://yourails.com/images/@rome/yrl-23-demo-trizLang.png',
              linkHref:
                'https://yourails.com/images/@rome/yrl-23-demo-trizLang.png',
            },
            {
              idProfile: '1',
              title: 'Web service. Not supported. JS Feedback widget for sites',
              contentType: i.SectionType.ProjectType,
              isActive: !0,
              pathname: 'demo-feedback-widget',
              subtitle: 'Allow users to contact you',
              description:
                'Widget for user feedback with flexible configuration providing: Multi platform CMS support (JS script solution), Multi-language support, Social network sharing, Page rating, Perform an advanced search on the site, Possibility of widget customization, Automatic messages upload to the page, where a user asks the question ',
              customer: '',
              builtwith:
                'CSS 3, Pure JS, Yandex share API, Regexp, DOM Scripting, JSON, PHP, Bing search api, AJAX GET POST requests, Regexp, OOP',
              imgSrc:
                'https://yourails.com/images/@rome/yrl-23-demo-feedbackWidget.png',
              linkHref:
                'https://yourails.com/images/@rome/yrl-23-demo-feedbackWidget.png',
            },
            {
              idProfile: '1',
              title:
                'Web service. Not supported. Question-answers site for legal questions',
              contentType: i.SectionType.ProjectType,
              isActive: !0,
              pathname: 'question-answers-site',
              subtitle: 'You ask, the community responds',
              description:
                'Question-answer system for generating user content. The project includes URL rooting part, server OOP php coding, GUI javascript scenarios, GUI (interface) coding, using Schema microformats for CEO, etc.',
              customer: '',
              builtwith:
                'CSS 3, Pure JS, Yandex share API, Regexp, DOM Scripting, JSON, PHP, Bing search api, AJAX GET POST requests, Regexp, OOP',
              imgSrc:
                'https://yourails.com/images/@rome/yrl-23-demo-answerLot.png',
              linkHref:
                'https://yourails.com/images/@rome/yrl-23-demo-answerLot.png',
            },
            {
              idProfile: '1',
              title: 'Web widget. Not supported. Demo online shoping cart',
              contentType: i.SectionType.ProjectType,
              isActive: !0,
              pathname: 'demo-basket-cart',
              subtitle: 'Add shopping cart, start sell online',
              description:
                'Shopping cart for quick check out providing configuration of shopping scenarios. The widget demonstrates the simple, but effective functionality of the shopping cart. It can be used as a first step for small online stores or as part of a more complex scenario.',
              customer: 'e-commerce',
              builtwith: 'jQuery, Bootstrap, AJAX, PHP, GET, POST requests',
              imgSrc:
                'https://yourails.com/images/@rome/yrl-23-demo-basket-cart.png',
              linkHref:
                'https://yourails.com/images/@rome/yrl-23-demo-basket-cart.png',
            },
            {
              idProfile: '1',
              title:
                'Web widget. Not supported. Catalog for goods, films, books, etc.',
              contentType: i.SectionType.ProjectType,
              isActive: !0,
              pathname: 'lib-catalog-items',
              subtitle:
                'Help visitors accessing your site and navigating easily',
              description:
                'Catalog of elements is a prototype for various business cases beginning from online shops to catalog of films, books, orders, etc. It is a cross-browser SPA application with the corresponding advantages. It provides a visitor with the following basic UI and UX conveniences: To select "Favorite", To rate items, To filter Favorite or All, To look N-th items in a page at once, To list the pages forth and back, To see all item features, To edit item features, To save item features, To come back to the item list. ',
              customer: 'e-commerce',
              builtwith:
                'React, React-dom, React-redux, React-router-dom, Redux ES7, Bootstrap, Webpack',
              imgSrc:
                'https://yourails.com/images/@rome/yrl-23-demo-itemLibDemo.png',
              linkHref:
                'https://yourails.com/images/@rome/yrl-23-demo-itemLibDemo.png',
            },
            {
              idProfile: '1',
              title: 'Landing Page. Immigration Service Provider',
              contentType: i.SectionType.ProjectType,
              isActive: !1,
              pathname: 'landing-page-immigration-service-provider',
              subtitle: '',
              description: '',
              customer: '',
              builtwith:
                'jQuery, Bootstrap, JS widgets, Used: Google AdWords, Google Analytics',
              imgSrc:
                'https://yourails.com/images/@rome/premierExpertPromo.png',
              linkHref: 'https://pe.userto.com/info01.php',
            },
            {
              idProfile: '1',
              title: 'Landing page. Not supported. Wiki Goods Startup',
              contentType: i.SectionType.ProjectType,
              isActive: !1,
              pathname: 'landing-page-wiki-goods-startup',
              subtitle: 'Your site deserves eCommerce functionality!',
              description:
                'This is a landing page for the startup which provides ordinary sites with online shop functionality without reprogramming. We use original JS eCommerce library of functions, cloud content broadcasting and brand banner technology.',
              customer: '',
              builtwith: 'Bootstrap, jQuery',
              imgSrc: 'https://yourails.com/images/@rome/wikiGoodsPromo.png',
              linkHref: 'https://userto.com/promo-ecommerce.php',
            },
            {
              idProfile: '1',
              title: 'Web widget. Not supported. Online Notes Keeper',
              contentType: i.SectionType.ProjectType,
              isActive: !1,
              pathname: 'lib-catalog-notes',
              subtitle: 'Keep your thoughts for your tomorrow yourself',
              description:
                'This is a prototype of a component of the personal cabinets in the form of an online notes keeper It has usual functionality including adding, editing and saving notes. A user can easily find relevant information filtering out notes. The sort function helps to see notes the way that the user likes. A user can manage display settings by archiving notes, restoring them or even deleting forever. It automatically lays notes out in three tabs-folders: active, archived and all. A search functionality is available in each display setting. After editing the notes are stored and got back on the display after application reloading. ',
              customer: 'Not limited',
              builtwith:
                'Redux, React-redux, React, React-dom, ES7, Babel, Bootstrap, Webpack, Mocha',
              imgSrc:
                'https://yourails.com/images/@rome/yrl-23-demo-noteLibDemo.jpg',
              linkHref: 'https://r1-2022.userto.com/demo-note-book.html',
            },
            {
              idProfile: '1',
              title:
                'Web widget. Not supported. Automatic image resizing on the fly',
              contentType: i.SectionType.ProjectType,
              isActive: !1,
              pathname: 'function-automatic-image-resizing',
              subtitle: '',
              description: '',
              customer: '',
              builtwith: 'Bootstrap, Bootstrap-select, jQuery, AJAX, ',
              imgSrc: 'https://yourails.com/images/@rome/imgResizeDemo.png',
              linkHref: 'https://r1-2022.userto.com/demo-image-resize.php',
            },
            {
              idProfile: '1',
              title: 'Web service. Prototype for service Ecom-Yunazon',
              contentType: i.SectionType.ProjectType,
              isActive: !1,
              pathname: 'demo-ecom-yunazon-espa-neptun-FL60.html/',
              subtitle:
                'To sell more and faster you need more and faster your product data',
              description:
                'Yunazon-ecom is providing a seamless global network to enable brands/ OEMs to automate distribution of information about their products to its various consumers in format and accuracy for it to matter.',
              customer: 'Any industry',
              builtwith:
                'ExpressJS, GraphQL, React, react-router-dom, Typescript, ES7, ESLint, Babel, Webpack',
              imgSrc:
                'https://yourails.com/images/@rome/yrl-23-demo-ecom-yanazon.jpg',
              linkHref:
                'https://r1-2022.userto.com/demo-ecom-yunazon-espa-neptun-FL60.html',
            },
            {
              idProfile: '1',
              title: 'Web widget. Item card screen',
              contentType: i.SectionType.ProjectType,
              isActive: !1,
              pathname: 'demo-js-item-carousel.html/',
              subtitle: 'Visualize json data in the web page',
              description:
                'This is a react SPA demo for e-commerce product(s) representation',
              customer: 'E-commerce',
              builtwith: 'React, react-router-dom, ES7, ESLint, Babel, Webpack',
              imgSrc:
                'https://yourails.com/images/@rome/yrl-23-demo-item-carousel.jpg',
              linkHref: 'https://r1-2022.userto.com/demo-js-item-carousel.html',
            },
            {
              idProfile: '1',
              title: 'Web widget. Earthquake Zen Garden ver. 3.12.3',
              contentType: i.SectionType.ProjectType,
              isActive: !1,
              pathname: 'demo-js-item-carousel.html/',
              subtitle: 'Create interactive dashboards',
              description: 'This is a react SPA demo of a dashboard structure',
              customer: 'Any industry',
              builtwith: 'React, react-router-dom, ES7, ESLint, Babel, Webpack',
              imgSrc:
                'https://yourails.com/images/@rome/yrl-23-demo-earthquake-zen-garden-screens.jpg',
              linkHref:
                'https://r1-2022.userto.com/demo-earthquake-zen-garden-js.html',
            },
            {
              idProfile: '1',
              title: 'Content site. Arbir.ru - SEO, content management',
              contentType: i.SectionType.ProjectType,
              isActive: !1,
              pathname: 'arbir-ru-collection-thematic-articles',
              subtitle: '4500 visitors per business day, regular leads flow.',
              description:
                'The project involves using 1C-Bitrix CMS, a great deal of content management, CEO, processing Word xml into html CEO friendly pages.',
              customer: '',
              builtwith: '1C-Bitrix CMS, bootstrap, PHP, MySQL-MariaDB',
              imgSrc: 'https://yourails.com/images/@rome/arbirRuExample.png',
              linkHref:
                'https://arbir.ru/miscellany/U18S864E55782-Situation-awareness-new-paradigm-for-the-next-generation-infrastructures',
            },
            {
              idProfile: '1',
              title: 'Web service. View Domain Statistics',
              contentType: i.SectionType.ProjectType,
              isActive: !1,
              pathname: 'domain-statistics-service',
              subtitle: 'Know how the Internet sees the domain',
              description:
                'The service provides a quick outlook for how Alex, Google, Yandex see the domain.',
              customer: 'Internet analytics',
              builtwith:
                'REST Google API, Yandex API, angularjs 1.7, bootstrap',
              imgSrc: 'https://yourails.com/images/@rome/domainStatService.png',
              linkHref:
                'https://my.userto.com/dashboard.php#!/domainStat?lang=en',
            },
            {
              idProfile: '1',
              title:
                'Mobile app. Smartphone app for transactions between friends',
              contentType: i.SectionType.ProjectType,
              isActive: !1,
              pathname: 'lib-catalog-items',
              subtitle: 'Play in the web',
              description:
                'This is a smart phone app for friends to buy, lend, give for free things easily and get fun of the process',
              customer: 'Mobile users',
              builtwith: 'React Native, Expo, ES7, ESLint, Babel',
              imgSrc: 'https://yourails.com/images/@rome/yunazon-screens.png',
              linkHref: 'https://yourails.com/images/@rome/yunazon-screens.png',
            },
            {
              idProfile: '1',
              title:
                'Landing page. Not supported. MMS Marketplace Management System, API avoiding API\u2122',
              contentType: i.SectionType.ProjectType,
              isActive: !1,
              pathname: 'promoLpMms',
              subtitle:
                'An easy way to achieve a synergistic interaction between sites',
              description:
                'API avoiding API is a service that makes it easy for websites to implement applications from partner providers while preserving custom web page design. The project is based on the brand new Brand Banner technology for website design management, which is neutral to the site engine.',
              customer: 'Not limited',
              builtwith:
                'Angularjs-1.7, jQuery, AJAX, JSON PHP, POST requests, OOP, MySQL-MariaDB',
              imgSrc: 'https://yourails.com/images/@rome/mmsAaaDemo.png',
              linkHref: 'https://yourails.com/images/@rome/mmsAaaDemo.png',
            },
            {
              idProfile: '1',
              title: 'Web widget. Not supported. Feedback Widget Project',
              contentType: i.SectionType.ProjectType,
              isActive: !1,
              pathname: 'landing-page-feedback-widget',
              subtitle: '',
              description: '',
              customer: '',
              builtwith:
                'jQuery, Bootstrap, JS widgets, Used: Google AdWords, Google Analytics',
              imgSrc:
                'https://yourails.com/images/@rome/feedbackWidgetPromo.png',
              linkHref:
                'https://yourails.com/images/@rome/feedbackWidgetPromo.png',
            },
          ]
        t.projects01R = o
      },
      69632: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.projects02D = void 0)
        var i = n(35603),
          o = [
            {
              idProfile: '2',
              title: 'Troubleshooting and Repairing Faulty Microwave Ovens',
              contentType: i.SectionType.ProjectType,
              isActive: !0,
              subtitle:
                'Quickly diagnose and fix common problems with microwaves',
              description: [
                "If your microwave oven isn't heating properly, has a broken turntable, or isn't working at all, this project will show you how to diagnose and repair common issues. With step-by-step instructions and troubleshooting tips, you'll be able to get your microwave up and running in no time.",
                "This project covers a range of brands and models, so whether you have a countertop or built-in microwave, you'll find the guidance you need. Learn how to identify faulty components, replace parts, and test your microwave to ensure it's working properly.",
              ],
              customer: 'Homeowners, renters, and property managers',
              builtwith: 'Multimeter, soldering iron, replacement parts',
              imgSrc:
                'https://cdn.thewirecutter.com/wp-content/media/2022/11/slide-in-gas-range-2048px-5676-3x2-1.jpg',
              linkHref:
                'https://cdn.thewirecutter.com/wp-content/media/2022/11/slide-in-gas-range-2048px-5676-3x2-1.jpg',
            },
            {
              idProfile: '2',
              title: 'Installation and Repair of Electric Stoves and Ovens',
              contentType: i.SectionType.ProjectType,
              isActive: !0,
              subtitle:
                'Get your electric stove or oven up and running in no time',
              description: [
                "Whether you're installing a brand new electric stove or oven or repairing an existing one, this project will walk you through the process. From wiring and circuit breakers to heating elements and thermostats, you'll learn everything you need to know to get your appliance working like new.",
                "This project covers a range of electric stove and oven models, so whether you have a freestanding or built-in appliance, you'll find the guidance you need. Learn how to troubleshoot common problems, replace faulty parts, and test your appliance to ensure it's working properly.",
              ],
              customer: 'Homeowners, renters, and property managers',
              builtwith: 'Multimeter, wiring tools, replacement parts',
              imgSrc: 'https://example.com/electric-stove-repair-image.jpg',
              linkHref: 'https://example.com/electric-stove-repair-project',
            },
            {
              idProfile: '2',
              title: 'Troubleshooting and Repairing Dishwashers',
              contentType: i.SectionType.ProjectType,
              isActive: !0,
              subtitle:
                'Fix common dishwasher problems and get your dishes clean again',
              description: [
                "If your dishwasher isn't cleaning dishes properly, isn't draining, or is making strange noises, this project will show you how to diagnose and repair common issues. With step-by-step instructions and troubleshooting tips, you'll be able to get your dishwasher working like new.",
                "This project covers a range of dishwasher brands and models, so whether you have a portable or built-in dishwasher, you'll find the guidance you need. Learn how to identify faulty components, replace parts, and test your dishwasher to ensure it's working properly.",
              ],
              customer: 'Homeowners, renters, and property managers',
              builtwith: 'Multimeter, plumbing tools, replacement parts',
              imgSrc: 'https://example.com/dishwasher-repair-image.jpg',
              linkHref: 'https://example.com/dishwasher-repair-project',
            },
            {
              idProfile: '2',
              title: 'Repair and Maintenance of Gas Stoves and Ovens',
              contentType: i.SectionType.ProjectType,
              isActive: !0,
              subtitle: 'Ensuring Safe and Efficient Performance',
              description: [
                "As a skilled technician in gas stoves and ovens, I have a deep understanding of the components and inner workings of these appliances. Whether it's routine maintenance or an unexpected repair, I am committed to ensuring that your gas stove or oven is running safely and efficiently.",
                "I can perform a wide range of maintenance and repair services, including gas line inspections, pilot light adjustments, and replacement of faulty parts. Don't let a malfunctioning gas stove or oven disrupt your cooking routine - let me take care of the issue quickly and effectively.",
              ],
              customer:
                'Homeowners, chefs, and restaurant owners who rely on gas stoves and ovens',
              builtwith:
                'Gas line tools, multimeter, replacement parts, safety equipment',
              imgSrc:
                'https://www.thespruce.com/thmb/vZphuRwG8bi7FPLo33ivPeIExLs=/1414x1414/smart/filters:no_upscale()/gas-stove-oven-5960e58c3df78cdc68beb0f9.jpg',
              linkHref: 'https://example.com/gas-stove-repair',
            },
            {
              idProfile: '2',
              title:
                'Troubleshooting and Repairing Washing Machines and Dryers',
              contentType: i.SectionType.ProjectType,
              isActive: !0,
              subtitle: 'Solving problems with your laundry appliances',
              description: [
                'If your washing machine or dryer is not working properly, it can be a real hassle. Our team can diagnose and repair a wide range of issues, including malfunctioning controls, damaged belts, and broken motors.',
                "We know how important it is to get your laundry appliances back up and running as quickly as possible. That's why we offer fast and reliable service at an affordable price.",
              ],
              customer: 'Homeowners and landlords',
              builtwith:
                'Multimeter, Screwdrivers, Wrenches, Replacement Parts',
              imgSrc:
                'https://www.thespruce.com/thmb/zcXprl9q3zqfmKuEwBfphSaNYOw=/2826x1884/filters:no_upscale():max_bytes(150000):strip_icc()/washing-machine-626463055-5a1c86a62023b90036a4c81e.jpg',
              linkHref: 'https://www.example.com',
            },
            {
              idProfile: '2',
              title: 'Installation and Repair of Electric and Gas Ranges',
              contentType: i.SectionType.ProjectType,
              isActive: !0,
              subtitle: 'Installing and fixing your kitchen range',
              description: [
                'Whether you need a new electric or gas range installed or your current one repaired, our team can help. We have experience with all major brands and models, and can quickly diagnose and fix any issues.',
                'We also offer installation services for new ranges, including hooking up gas lines and making sure everything is working properly.',
              ],
              customer: 'Homeowners and restaurant owners',
              builtwith:
                'Gas piping equipment, electrical wiring, Replacement Parts',
              imgSrc:
                'https://www.whirlpool.com/content/dam/global/documents/201803/Product-Images-W11047196-D-F-W-19_5%20Gas%20Range%20with%20SpeedHeat%E2%84%A2%20Burners%20-%20Stainless%20Steel-3-UP-W11047196-D-F-W-19_5%20Gas%20Range%20with%20SpeedHeat%E2%84%A2%20Burners%20-%20Stainless%20Steel-3-UP-1600x1034.jpg',
              linkHref: 'https://www.example.com',
            },
            {
              idProfile: '2',
              title: 'Troubleshooting and Repairing Small Kitchen Appliances',
              contentType: i.SectionType.ProjectType,
              isActive: !0,
              subtitle: 'Fixing your toaster, blender, and more',
              description: [
                "If you have a small kitchen appliance that's not working properly, our team can help. We can quickly diagnose and fix issues with toasters, blenders, coffee makers, and more.",
                "We know how important it is to have these appliances working properly, especially when you're in a rush in the morning. That's why we offer fast and reliable service at an affordable price.",
              ],
              customer: 'Homeowners and small business owners',
              builtwith:
                'Multimeter, Screwdrivers, Wrenches, Replacement Parts',
              imgSrc:
                'https://cdn.vox-cdn.com/thumbor/R67iBzKdfw3GYd0zLlQMyYRvIAc=/0x0:2500x1667/1200x800/filters:focal(1050x632:1450x1032)/cdn.vox-cdn',
              linkHref: 'https://www.example.com',
            },
            {
              idProfile: '2',
              title: 'Installation and Repair of Garbage Disposals',
              contentType: i.SectionType.ProjectType,
              isActive: !0,
              subtitle: 'Keeping Your Kitchen Clean and Tidy',
              description: [
                "If you're tired of dealing with clogged drains and stinky garbage disposals, we're here to help. Our team of experienced technicians can install and repair all types of garbage disposals, so you can keep your kitchen clean and tidy.",
                'From basic installations to complex repairs, we have the tools and expertise to get the job done right. Contact us today to schedule an appointment and get your garbage disposal back in top shape.',
              ],
              customer: 'Homeowners, landlords, property managers',
              builtwith:
                'Wrenches, pliers, garbage disposal mounting kits, wiring, electrical boxes',
              imgSrc:
                'https://www.mrscrappy.com/wp-content/uploads/2018/07/Garbage-Disposal-Installation-Mount-Adapter-Kit.jpg',
              linkHref:
                'https://example.com/garbage-disposal-installation-repair',
            },
            {
              idProfile: '2',
              title: 'Troubleshooting and Repairing HVAC Systems',
              contentType: i.SectionType.ProjectType,
              isActive: !0,
              subtitle: 'Keeping You Comfortable Year-Round',
              description: [
                "If your HVAC system isn't working like it should, it's time to call in the experts. Our team of skilled technicians can diagnose and repair all types of HVAC issues, from faulty thermostats to refrigerant leaks and more.",
                'We use state-of-the-art tools and techniques to quickly identify the problem and get your system back up and running. Contact us today to schedule an appointment and keep your home comfortable year-round.',
              ],
              customer:
                'Homeowners, property managers, commercial building owners',
              builtwith:
                'Refrigerant gauges, voltmeters, pressure sensors, HVAC repair parts',
              imgSrc:
                'https://www.resheatandair.com/wp-content/uploads/2018/08/HVAC-Repair-300x300.jpg',
              linkHref: 'https://example.com/hvac-troubleshooting-repair',
            },
            {
              idProfile: '2',
              title: 'Troubleshooting and Repairing Internet Equipment',
              contentType: i.SectionType.ProjectType,
              isActive: !0,
              subtitle: 'Get Your Internet Back Up and Running',
              description: [
                "In today's connected world, a reliable internet connection is essential. If you're having issues with your internet equipment, our team of skilled technicians can help.",
                'We can diagnose and repair a wide range of issues, from slow speeds to dropped connections and more. Contact us today to schedule an appointment and get your internet back up and running.',
              ],
              customer: 'Homeowners, renters, small businesses',
              builtwith:
                'Network cable testers, wireless network analyzers, networking equipment repair parts',
              imgSrc:
                'https://cdn.pixabay.com/photo/2016/03/26/22/57/wifi-1281670_960_720.png',
              linkHref:
                'https://example.com/internet-equipment-troubleshooting-repair',
            },
            {
              idProfile: '2',
              title: 'Installation and Maintenance of Computer Devices',
              contentType: i.SectionType.ProjectType,
              isActive: !0,
              subtitle: 'Keep your devices up and running smoothly',
              description: [
                "Whether you're a business or an individual, your computer devices are essential to your daily routine. Let me take the hassle out of installation and maintenance with my expert services.",
                'I specialize in setting up new devices, performing routine maintenance, and troubleshooting issues that arise with hardware and software.',
              ],
              customer: 'Small businesses and individuals',
              builtwith:
                'Operating systems including Windows and macOS, hardware components including CPUs and GPUs, peripherals such as printers and scanners',
              imgSrc: 'https://example.com/images/computer-devices.jpg',
              linkHref: 'https://example.com/computer-devices',
            },
            {
              idProfile: '2',
              title: 'Troubleshooting and Repairing Smart Home Systems',
              contentType: i.SectionType.ProjectType,
              isActive: !0,
              subtitle: 'Get your smart home back up and running',
              description: [
                'Smart home systems can be a great convenience, but when they stop working properly it can be a real headache. Let me help you troubleshoot and repair any issues with your smart home system.',
                "Whether it's a malfunctioning thermostat, an unresponsive security camera, or anything in between, I have the expertise to diagnose and fix the problem quickly and efficiently.",
              ],
              customer: 'Homeowners with smart home systems',
              builtwith:
                'Smart home platforms such as Google Home and Amazon Alexa, individual smart devices such as thermostats and cameras',
              imgSrc: 'https://example.com/images/smart-home.jpg',
              linkHref: 'https://example.com/smart-home',
            },
          ]
        t.projects02D = o
      },
      4758: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.projects = void 0)
        var o = i(n(861)),
          a = n(58530),
          r = n(69632),
          s = [].concat(
            (0, o.default)(a.projects01R),
            (0, o.default)(r.projects02D)
          )
        t.projects = s
      },
      12162: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.sectionsMapping = void 0)
        var i = n(35603),
          o = [
            {
              idProfile: '1',
              profileName: '@rome',
              contentType: i.SectionType.ProjectType,
              title: 'Projects And Work Examples',
              pathname: 'projects',
              iconLibrary: 'Ionicons',
              iconName: 'briefcase-outline',
              iconTitleText: 'Portfolio',
              childName: 'Portfolio',
            },
            {
              idProfile: '1',
              profileName: '@rome',
              contentType: i.SectionType.CompetencyTagType,
              title: 'Technologies',
              pathname: 'technologies',
              iconLibrary: 'Ionicons',
              iconName: 'cog-outline',
              iconTitleText: 'Technologies',
              childName: 'CompetencyTags',
            },
            {
              idProfile: '2',
              profileName: '@smid',
              contentType: i.SectionType.ProjectType,
              title: 'Work Examples',
              pathname: 'work-examples',
              iconLibrary: 'Ionicons',
              iconName: 'briefcase-outline',
              iconTitleText: 'Works',
              childName: 'Portfolio',
            },
            {
              idProfile: '2',
              profileName: '@smid',
              contentType: i.SectionType.CompetencyTagType,
              title: 'Competency Tags',
              pathname: 'skills',
              iconLibrary: 'Ionicons',
              iconName: 'cog-outline',
              iconTitleText: 'Skills',
              childName: 'CompetencyTags',
            },
            {
              idProfile: '2',
              profileName: '@smid',
              contentType: i.SectionType.ProfileType,
              title: '',
              pathname: 'profile',
              iconLibrary: 'Ionicons',
              iconName: 'person-outline',
              iconTitleText: 'Profile',
              childName: 'Profile',
            },
            {
              idProfile: '16',
              profileName: '@yourails',
              contentType: i.SectionType.CompetencyTagType,
              title: 'Technologies',
              pathname: 'technologies',
              iconLibrary: 'Ionicons',
              iconName: 'cog-outline',
              iconTitleText: 'Technologies',
              childName: 'CompetencyTags',
            },
            {
              idProfile: '16',
              profileName: '@yourails',
              contentType: i.SectionType.CompetencyTagType,
              title: '',
              pathname: 'profile',
              iconLibrary: 'Ionicons',
              iconName: 'person-outline',
              iconTitleText: 'Profile',
              childName: 'Profile',
            },
            {
              idProfile: '1',
              profileName: '@rome',
              contentType: i.SectionType.ProfileType,
              title: '',
              pathname: 'profile',
              iconLibrary: 'Ionicons',
              iconName: 'person-outline',
              iconTitleText: 'Profile',
              childName: 'Profile',
            },
          ]
        t.sectionsMapping = o
      },
      22981: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.createRequestTypesLegacy = t.createAsyncAction = void 0)
        var o = i(n(38416)),
          a = 'REQUEST',
          r = 'SUCCESS',
          s = 'FAILURE'
        t.createAsyncAction = function (e) {
          return e.reduce(function (e, t) {
            var n,
              i = (0, o.default)(
                {},
                t,
                ((n = t),
                [a, r, s].reduce(function (e, t) {
                  return (
                    (e[t] = function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : void 0
                      return e
                        ? { type: `${n}_${t}`, data: e }
                        : { type: `${n}_${t}` }
                    }),
                    e
                  )
                }, {}))
              )
            return Object.assign({}, e, i)
          }, {})
        }
        t.createRequestTypesLegacy = function (e) {
          return [a, r, s].reduce(function (t, n) {
            return (t[n] = `${e}_${n}`), t
          }, {})
        }
      },
      55064: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.createSyncActions = void 0)
        var o = i(n(38416))
        t.createSyncActions = function (e) {
          return e.reduce(function (e, t) {
            var n = (0, o.default)({}, t, function (e) {
              return { type: t, data: e }
            })
            return Object.assign({}, e, n)
          }, {})
        }
      },
      17250: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ADD_COMPETENCY_TAGS = void 0)
        var i = n(83495),
          o = n(55139),
          a = i.store.dispatch
        i.store.getState
        t.ADD_COMPETENCY_TAGS = function (e, t) {
          a(o.actionAsync.ADD_COMPETENCY_TAGS_ASYNC.REQUEST({}))
        }
      },
      71732: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ADD_MESSAGES = void 0)
        var i = n(83495),
          o = n(55139),
          a = i.store.dispatch
        i.store.getState
        t.ADD_MESSAGES = function (e, t) {
          a(o.actionAsync.ADD_MESSAGES_ASYNC.REQUEST({}))
        }
      },
      14510: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ADD_PROJECTS = void 0)
        var i = n(83495),
          o = n(55139),
          a = i.store.dispatch
        i.store.getState
        t.ADD_PROJECTS = function (e, t) {
          a(o.actionAsync.ADD_PROJECTS_ASYNC.REQUEST({}))
        }
      },
      54438: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.CLICK_ON_HOST_PROFILE_SELECT = void 0)
        var i = n(83495),
          o = n(55139),
          a = n(79084),
          r = n(47154),
          s = n(95363),
          l = i.store.dispatch,
          c = i.store.getState
        t.CLICK_ON_HOST_PROFILE_SELECT = function (e, t) {
          var n = t.idProfileHost,
            i = t.profileNameHost,
            d = t.urlParam1,
            p = t.urlParam2,
            u = t.query,
            m = c(),
            g = m.profiles,
            h = m.globalVars,
            f = h.idUserHost,
            y = h.idProfileActive,
            A = !!g.find(function (e) {
              return e.idUser === f && e.idProfile === y
            })
          if ((l(o.actionSync.SET_ID_PROFILE_HOST(t)), A)) {
            l(o.actionSync.SET_ID_PROFILE_ACTIVE({ idProfileActive: n })),
              (0, s.getSocketEmitJoinConversation)(n, n)
            var v = { urlParam1: d, urlParam2: p, profileName: i, query: u },
              b = (0, a.getPathNameForReplace)(v)
            ;(0, r.getRedirected)(b, { replace: !0 })
          }
          l(
            o.actionSync.TOGGLE_PROFILE_SELECT_MENU({ isProfileSelectMenu: !1 })
          )
        }
      },
      8306: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.CLICK_ON_MENU_CONTROL = void 0)
        var i = n(83495),
          o = n(55139),
          a = i.store.dispatch
        i.store.getState
        t.CLICK_ON_MENU_CONTROL = function (e, t) {
          var n = t.isProfileSelectMenu,
            i = t.isUserMenu
          a(o.actionSync.TOGGLE_IS_USER_MENU({ isUserMenu: i })),
            a(
              o.actionSync.TOGGLE_PROFILE_SELECT_MENU({
                isProfileSelectMenu: n,
              })
            )
        }
      },
      44467: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.CLICK_ON_SEND_MESSAGE = void 0)
        var o = i(n(13012)),
          a = n(83495),
          r = n(79086),
          s = n(99613),
          l = n(55139),
          c = n(20899),
          d = n(77586),
          p = a.store.dispatch,
          u = a.store.getState
        t.CLICK_ON_SEND_MESSAGE = function (e, t) {
          ;(0, o.default)(e)
          var n = t.profileActive.idProfile,
            i = u(),
            a = i.forms.inputChat,
            m = i.globalVars.idProfileHost,
            g = JSON.stringify((0, c.getSortedArray)([m, n])),
            h = { contentType: r.ContentType.textArray, textArray: [a[n]] },
            f = {
              idConversation: g,
              idProfile: m,
              text: JSON.stringify(h),
              eventType: s.MessageEventType.chatMessage,
            }
          ;(0, d.getSocketEmitMessage)(f),
            p(l.actionSync.SET_INPUT_CHAT({ idProfileActive: n, text: '' }))
        }
      },
      65341: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.CLICK_ON_USER_CHAT_CARD = void 0)
        var i = n(83495),
          o = n(55139),
          a = n(79084),
          r = n(47154),
          s = n(95363),
          l = i.store.dispatch,
          c = i.store.getState
        t.CLICK_ON_USER_CHAT_CARD = function (e, t) {
          var n = t.idProfile,
            i = t.profileName,
            d = t.urlParam1,
            p = t.urlParam2,
            u = t.query,
            m = c().globalVars.idProfileHost
          l(o.actionSync.SET_ID_PROFILE_ACTIVE({ idProfileActive: n })),
            (0, s.getSocketEmitJoinConversation)(m, n)
          var g = { urlParam1: d, urlParam2: p, profileName: i, query: u },
            h = (0, a.getPathNameForReplace)(g)
          ;(0, r.getRedirected)(h, { replace: !0 })
        }
      },
      83461: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.CLICK_ON_USER_OPTION_SELECT = void 0)
        var i = n(83495),
          o = n(55139),
          a = i.store.dispatch
        i.store.getState
        t.CLICK_ON_USER_OPTION_SELECT = function (e, t) {
          var n = t.isUserMenu,
            i = t.isProfileSelectMenu
          a(o.actionSync.TOGGLE_IS_USER_MENU({ isUserMenu: n })),
            a(
              o.actionSync.TOGGLE_PROFILE_SELECT_MENU({
                isProfileSelectMenu: i,
              })
            )
        }
      },
      36465: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.CLICK_TOGGLE_SIDEBAR_MAIN = void 0)
        var o = i(n(27424)),
          a = n(83495),
          r = n(55139),
          s = n(98054),
          l = n(79084),
          c = n(47154),
          d = a.store.dispatch,
          p = a.store.getState
        t.CLICK_TOGGLE_SIDEBAR_MAIN = function (e, t) {
          var n = t.deviceType
          if (
            n !== s.DeviceType.mdDevice &&
            n !== s.DeviceType.lgDevice &&
            n !== s.DeviceType.xlDevice
          ) {
            var i = p().componentsState,
              a = i.isLeftColumn,
              u = i.isMainColumn,
              m = i.modalFrame.isShow,
              g = !a,
              h = !u
            !m ||
              (n !== s.DeviceType.xsDevice && n !== s.DeviceType.smDevice) ||
              ((g = !1), (h = !0)),
              d(
                r.actionSync.SET_MODAL_FRAME({
                  childName: null,
                  isShow: !1,
                  childProps: {},
                })
              ),
              d(r.actionSync.TOGGLE_IS_LEFT_COLUMN(g)),
              d(r.actionSync.TOGGLE_IS_MAIN_COLUMN(h)),
              m ||
                d(
                  r.actionSync.SET_ID_PROFILE_ACTIVE({
                    idProfileActive: void 0,
                  })
                )
            var f = window.location.pathname.split('/'),
              y = (0, o.default)(f, 4),
              A = (y[0], y[1]),
              v = y[2]
            !0 === g && !1 === h && (v = '/')
            var b = {
                urlParam1: A,
                urlParam2: v,
                urlParam3: y[3],
                search: window.location.search,
                tabName: '',
              },
              S = (0, l.getPathNameForReplace)(b)
            ;(0, c.getRedirected)(S, { replace: !0 })
          }
        }
      },
      98938: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.DEV_STAGE = void 0)
        var i = n(83495),
          o = n(93141),
          a = i.store.getState
        t.DEV_STAGE = function (e, t) {
          var n = a().globalVars.language,
            i = o.DICTIONARY.weAreWorkingOnThis[n]
          alert(i)
        }
      },
      85389: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.INIT_LOADING = void 0)
        var o = i(n(17156)),
          a = n(83495),
          r = n(55139),
          s = a.store.dispatch,
          l = 0,
          c = (function () {
            var e = (0, o.default)(function* (e, t) {
              l > 0 ||
                ((l += 1),
                yield s(r.actionAsync.INIT_LOADING_ASYNC.REQUEST({})))
            })
            return function (t, n) {
              return e.apply(this, arguments)
            }
          })()
        t.INIT_LOADING = c
      },
      51541: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ON_AWAIT_FROM_ID_PROFILE = void 0)
        var i = n(39980),
          o = n(83495),
          a = n(79086),
          r = n(99613),
          s = n(55139),
          l = n(5199),
          c = n(71148),
          d = n(26897),
          p = o.store.dispatch,
          u = o.store.getState
        t.ON_AWAIT_FROM_ID_PROFILE = function (e, t) {
          var n = t.idProfile,
            o = t.isPending,
            m = u(),
            g = m.profiles,
            h = m.globalVars.idProfileHost
          if (!0 === o) {
            var f = (0, i.nanoid)(),
              y = (0, c.getSortedHashedStringifyArray)([h, n]),
              A = (0, d.getProfileByIdProfile)(g, n),
              v = A.pendingText ? A.pendingText : '',
              b = { contentType: a.ContentType.textArray, textArray: [v] },
              S = JSON.stringify(b),
              T = {
                idMessage: f,
                idConversation: y,
                idProfile: n,
                isPending: o,
                eventType: r.MessageEventType.chatMessage,
                text: S,
              }
            l.handleEvents.ON_MESSAGE_SOCKET({}, { message: T })
          } else
            p(s.actionSync.REMOVE_LAST_MESSAGE_ID_PROFILE({ idProfile: n }))
        }
      },
      29450: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ON_CHANGE_INPUT_CHAT = void 0)
        var i = n(83495),
          o = n(55139),
          a = i.store.dispatch
        i.store.getState
        t.ON_CHANGE_INPUT_CHAT = function (e, t) {
          return a(o.actionSync.SET_INPUT_CHAT(t))
        }
      },
      98230: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ON_CHANGE_INPUT_SEARCH = void 0)
        var i = n(83495),
          o = n(55139),
          a = i.store.dispatch
        i.store.getState
        t.ON_CHANGE_INPUT_SEARCH = function (e, t) {
          return a(o.actionSync.SET_INPUT_SEARCH(t))
        }
      },
      83576: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ON_MESSAGE_SOCKET = void 0)
        var i = n(83495),
          o = n(99613),
          a = n(55139),
          r = i.store.dispatch,
          s = i.store.getState
        t.ON_MESSAGE_SOCKET = function (e, t) {
          var n = s().messages,
            i = t.message,
            l = i.idConversation,
            c = i.eventType,
            d = n.filter(function (e) {
              return (
                e.idConversation === l &&
                e.eventType === o.MessageEventType.joinConversation
              )
            }),
            p = n.filter(function (e) {
              return (
                e.idConversation === l &&
                e.eventType === o.MessageEventType.disconnectConversation
              )
            })
          ;(c === o.MessageEventType.joinConversation &&
            0 !== d.length &&
            d.length - p.length !== 0) ||
            r(a.actionSync.ON_MESSAGE_SOCKET(t))
        }
      },
      53570: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ON_SET_MODAL_AWAIT_VIEW = void 0)
        var i = n(83495),
          o = n(55139),
          a = i.store.dispatch
        i.store.getState
        t.ON_SET_MODAL_AWAIT_VIEW = function (e, t) {
          a(o.actionSync.SET_MODAL_FRAME(t))
        }
      },
      44371: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.SET_MODAL_FRAME = void 0)
        var o = i(n(27424)),
          a = n(83495),
          r = n(55139),
          s = n(79084),
          l = n(47154),
          c = a.store.dispatch
        t.SET_MODAL_FRAME = function (e, t) {
          var n = t.pathname
          c(r.actionSync.SET_MODAL_FRAME(t))
          var i = window.location.pathname.split('/'),
            a = (0, o.default)(i, 4),
            d =
              (a[0],
              {
                urlParam1: a[1],
                urlParam2: a[2],
                urlParam3: a[3],
                search: window.location.search,
                tabName: n,
              }),
            p = (0, s.getPathNameForReplace)(d)
          ;(0, l.getRedirected)(p, { replace: !0 })
        }
      },
      79488: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.SET_STORE_SCENARIO = void 0)
        var i = n(83495),
          o = n(55139),
          a = n(40056),
          r = n(47154),
          s = n(60070),
          l = n(61950),
          c = i.store.dispatch,
          d = i.store.getState
        t.SET_STORE_SCENARIO = function (e, t) {
          var n = t.urlParam1,
            i = t.urlParam2,
            p = t.urlParam3,
            u = t.query,
            m = t.deviceType,
            g = t.sectionsMappingForProfile,
            h = d(),
            f = h.globalVars,
            y = f.idUserHost,
            A = f.idProfile,
            v = h.profiles,
            b = s.HOST_NAME
          ;(0, l.isHostR1UserToComFlag)() && (b = 'r1.userto.com')
          var S = (0, a.getSetStoreScenario)({
              idUserHost: y,
              profiles: v,
              hostname: b,
              urlParam1: n,
              urlParam2: i,
              urlParam3: p,
              query: u,
              deviceType: m,
              sectionsMappingForProfile: g,
            }),
            T = (S.caseNo, S.caseDesc, S.caseConditions, S.isShowApp),
            w = S.idUserHost,
            P = (S.idUser, S.idProfile),
            I = S.isLeftColumn,
            C = S.isMainColumn,
            E = S.isMainColumnBlank,
            x = S.modalFrame,
            k = S.redirectPathname
          c(o.actionSync.SET_ID_USER_HOST({ idUserHost: w })),
            c(o.actionSync.SET_ID_PROFILE_ACTIVE({ idProfileActive: P })),
            c(o.actionSync.TOGGLE_IS_SHOW_GLOBAL(T)),
            c(o.actionSync.TOGGLE_IS_LEFT_COLUMN(I)),
            c(o.actionSync.TOGGLE_IS_MAIN_COLUMN(C)),
            c(o.actionSync.TOGGLE_IS_MAIN_COLUMN_BLANK(E)),
            c(o.actionSync.SET_MODAL_FRAME(x)),
            (0, r.getRedirected)(k, { replace: !0 }),
            A !== P &&
              c(o.actionSync.SET_ID_PROFILE_ACTIVE({ idProfileActive: P }))
        }
      },
      55781: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.STOP_PROPAGATION = void 0)
        t.STOP_PROPAGATION = function (e, t) {
          e.stopPropagation()
        }
      },
      45664: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.TEMPLATE = void 0)
        var i = n(83495),
          o = n(55139),
          a = i.store.dispatch
        i.store.getState
        t.TEMPLATE = function (e, t) {
          a(o.actionAsync.TEMPLATE_ASYNC.REQUEST({ id: t.id }))
        }
      },
      55139: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.actionSync = t.actionAsync = void 0)
        var i = n(55064),
          o = n(22981),
          a = (0, i.createSyncActions)([
            'REMOVE_LAST_MESSAGE_ID_PROFILE',
            'SET_ID_USER_HOST',
            'SET_ID_PROFILE_HOST',
            'TOGGLE_PROFILE_SELECT_MENU',
            'TOGGLE_IS_USER_MENU',
            'ON_MESSAGE_SOCKET',
            'ADD_MESSAGES',
            'ADD_PROJECTS',
            'ADD_COMPETENCY_TAGS',
            'ADD_SECTIONS_MAPPING',
            'SET_INPUT_SEARCH',
            'SET_INPUT_CHAT',
            'SET_ID_PROFILE_ACTIVE',
            'TOGGLE_IS_MAIN_COLUMN_BLANK',
            'TOGGLE_IS_SHOW_GLOBAL',
            'ADD_PROFILES',
            'SET_ID_USER_HOST',
            'TOGGLE_IS_MAIN_COLUMN',
            'TOGGLE_IS_LEFT_COLUMN',
            'SET_MODAL_FRAME',
            'TOGGLE_LOADER_OVERLAY',
            'SET_THEME',
            'TEMPLATE',
          ])
        t.actionSync = a
        var r = (0, o.createAsyncAction)([
          'TEMPLATE_ASYNC',
          'ADD_COMPETENCY_TAGS_ASYNC',
          'ADD_PROJECTS_ASYNC',
          'INIT_LOADING_ASYNC',
          'ADD_MESSAGES_ASYNC',
        ])
        t.actionAsync = r
      },
      5199: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.handleEvents = void 0)
        var i = n(45664),
          o = n(51541),
          a = n(53570),
          r = n(54438),
          s = n(83461),
          l = n(8306),
          c = n(83576),
          d = n(44467),
          p = n(85389),
          u = n(71732),
          m = n(14510),
          g = n(17250),
          h = n(98230),
          f = n(29450),
          y = n(79488),
          A = n(65341),
          v = n(36465),
          b = n(98938),
          S = n(44371),
          T = n(55781),
          w = {
            TEMPLATE: i.TEMPLATE,
            ON_AWAIT_FROM_ID_PROFILE: o.ON_AWAIT_FROM_ID_PROFILE,
            ON_SET_MODAL_AWAIT_VIEW: a.ON_SET_MODAL_AWAIT_VIEW,
            CLICK_ON_HOST_PROFILE_SELECT: r.CLICK_ON_HOST_PROFILE_SELECT,
            CLICK_ON_USER_OPTION_SELECT: s.CLICK_ON_USER_OPTION_SELECT,
            CLICK_ON_MENU_CONTROL: l.CLICK_ON_MENU_CONTROL,
            ON_MESSAGE_SOCKET: c.ON_MESSAGE_SOCKET,
            CLICK_ON_SEND_MESSAGE: d.CLICK_ON_SEND_MESSAGE,
            INIT_LOADING: p.INIT_LOADING,
            ADD_MESSAGES: u.ADD_MESSAGES,
            ADD_PROJECTS: m.ADD_PROJECTS,
            ADD_COMPETENCY_TAGS: g.ADD_COMPETENCY_TAGS,
            ON_CHANGE_INPUT_SEARCH: h.ON_CHANGE_INPUT_SEARCH,
            ON_CHANGE_INPUT_CHAT: f.ON_CHANGE_INPUT_CHAT,
            SET_STORE_SCENARIO: y.SET_STORE_SCENARIO,
            CLICK_ON_USER_CHAT_CARD: A.CLICK_ON_USER_CHAT_CARD,
            CLICK_TOGGLE_SIDEBAR_MAIN: v.CLICK_TOGGLE_SIDEBAR_MAIN,
            DEV_STAGE: b.DEV_STAGE,
            SET_MODAL_FRAME: S.SET_MODAL_FRAME,
            STOP_PROPAGATION: T.STOP_PROPAGATION,
          }
        t.handleEvents = w
      },
      13525: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.indexReducer = void 0)
        var i = n(92494),
          o = n(64860),
          a = n(32587),
          r = n(55482),
          s = n(22564),
          l = n(87162),
          c = n(90085),
          d = n(39660),
          p = n(51374),
          u = n(30153),
          m = n(11996),
          g = n(9059),
          h = n(42847),
          f = n(18177),
          y = n(75102),
          A = n(74099),
          v = n(18837),
          b = n(21646),
          S = n(39610),
          T = n(7541),
          w = n(71014),
          P = n(76459)
        t.indexReducer = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : P.rootStoreDefault,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { type: 'DEFAULT' },
            n = t.type,
            I = t.data,
            C = {
              TEMPLATE: i.TEMPLATE,
              REMOVE_LAST_MESSAGE_ID_PROFILE: o.REMOVE_LAST_MESSAGE_ID_PROFILE,
              SET_ID_PROFILE_HOST: a.SET_ID_PROFILE_HOST,
              TOGGLE_PROFILE_SELECT_MENU: r.TOGGLE_PROFILE_SELECT_MENU,
              TOGGLE_IS_USER_MENU: s.TOGGLE_IS_USER_MENU,
              ON_MESSAGE_SOCKET: l.ON_MESSAGE_SOCKET,
              ADD_MESSAGES: c.ADD_MESSAGES,
              ADD_PROJECTS: d.ADD_PROJECTS,
              ADD_COMPETENCY_TAGS: p.ADD_COMPETENCY_TAGS,
              ADD_SECTIONS_MAPPING: u.ADD_SECTIONS_MAPPING,
              SET_INPUT_SEARCH: m.SET_INPUT_SEARCH,
              SET_INPUT_CHAT: g.SET_INPUT_CHAT,
              SET_ID_PROFILE_ACTIVE: h.SET_ID_PROFILE_ACTIVE,
              TOGGLE_IS_SHOW_GLOBAL: f.TOGGLE_IS_SHOW_GLOBAL,
              ADD_PROFILES: y.ADD_PROFILES,
              SET_ID_USER_HOST: A.SET_ID_USER_HOST,
              TOGGLE_IS_MAIN_COLUMN_BLANK: v.TOGGLE_IS_MAIN_COLUMN_BLANK,
              TOGGLE_IS_MAIN_COLUMN: b.TOGGLE_IS_MAIN_COLUMN,
              TOGGLE_IS_LEFT_COLUMN: S.TOGGLE_IS_LEFT_COLUMN,
              SET_MODAL_FRAME: T.SET_MODAL_FRAME,
              TOGGLE_LOADER_OVERLAY: w.TOGGLE_LOADER_OVERLAY,
            }
          return C[n] ? C[n](e, I) : e
        }
      },
      98962: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = function* () {
            yield (0, o.all)([(0, o.fork)(a.default)]),
              yield (0, o.all)([(0, o.fork)(r.default)]),
              yield (0, o.all)([(0, o.fork)(s.default)]),
              yield (0, o.all)([(0, o.fork)(l.default)]),
              yield (0, o.all)([(0, o.fork)(c.default)])
          })
        var o = n(81618),
          a = i(n(53607)),
          r = i(n(63665)),
          s = i(n(6809)),
          l = i(n(23602)),
          c = i(n(53663))
      },
      51374: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ADD_COMPETENCY_TAGS = void 0)
        t.ADD_COMPETENCY_TAGS = function (e, t) {
          return Object.assign({}, e, { competencyTags: t.competencyTags })
        }
      },
      90085: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ADD_MESSAGES = void 0)
        t.ADD_MESSAGES = function (e, t) {
          return Object.assign({}, e, { messages: t.messages })
        }
      },
      75102: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ADD_PROFILES = void 0)
        t.ADD_PROFILES = function (e, t) {
          return Object.assign({}, e, { profiles: t.profiles })
        }
      },
      39660: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ADD_PROJECTS = void 0)
        t.ADD_PROJECTS = function (e, t) {
          return Object.assign({}, e, { projects: t.projects })
        }
      },
      30153: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ADD_SECTIONS_MAPPING = void 0)
        t.ADD_SECTIONS_MAPPING = function (e, t) {
          return Object.assign({}, e, { sectionsMapping: t.sectionsMapping })
        }
      },
      87162: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ON_MESSAGE_SOCKET = void 0)
        var o = i(n(861))
        t.ON_MESSAGE_SOCKET = function (e, t) {
          var n = e.messages,
            i = t.message,
            a = [].concat((0, o.default)(n), [i])
          return Object.assign({}, e, { messages: a })
        }
      },
      64860: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.REMOVE_LAST_MESSAGE_ID_PROFILE = void 0)
        var i = n(93218)
        t.REMOVE_LAST_MESSAGE_ID_PROFILE = function (e, t) {
          var n = t.idProfile,
            o = e.messages,
            a = (0, i.getFilteredLastObjectByIdProfile)(o, n)
          return Object.assign({}, e, { messages: a })
        }
      },
      42847: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.SET_ID_PROFILE_ACTIVE = void 0)
        t.SET_ID_PROFILE_ACTIVE = function (e, t) {
          var n = e.globalVars,
            i = t.idProfileActive,
            o = Object.assign({}, n, { idProfileActive: i })
          return Object.assign({}, e, { globalVars: o })
        }
      },
      32587: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.SET_ID_PROFILE_HOST = void 0)
        t.SET_ID_PROFILE_HOST = function (e, t) {
          var n = t.idProfileHost,
            i = e.globalVars,
            o = Object.assign({}, i, { idProfileHost: n })
          return Object.assign({}, e, { globalVars: o })
        }
      },
      74099: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.SET_ID_USER_HOST = void 0)
        t.SET_ID_USER_HOST = function (e, t) {
          var n = e.globalVars,
            i = t.idUserHost,
            o = Object.assign({}, n, { idUserHost: i })
          return Object.assign({}, e, { globalVars: o })
        }
      },
      9059: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.SET_INPUT_CHAT = void 0)
        var o = i(n(38416))
        t.SET_INPUT_CHAT = function (e, t) {
          var n = t.idProfileActive,
            i = t.text,
            a = e.forms,
            r = a.inputChat,
            s = Object.assign({}, r, (0, o.default)({}, n, i)),
            l = Object.assign({}, a, { inputChat: s })
          return Object.assign({}, e, { forms: l })
        }
      },
      11996: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.SET_INPUT_SEARCH = void 0)
        t.SET_INPUT_SEARCH = function (e, t) {
          var n = t.text,
            i = e.forms,
            o = Object.assign({}, i, { inputSearch: n })
          return Object.assign({}, e, { forms: o })
        }
      },
      7541: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.SET_MODAL_FRAME = void 0)
        t.SET_MODAL_FRAME = function (e, t) {
          var n = e.componentsState,
            i = n.modalFrame,
            o = t
          'Chat' === t.childName && (o = Object.assign({}, i, { isShow: !1 }))
          var a = Object.assign({}, n, { modalFrame: Object.assign({}, i, o) })
          return Object.assign({}, e, { componentsState: a })
        }
      },
      92494: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.TEMPLATE = void 0)
        t.TEMPLATE = function (e, t) {
          return e
        }
      },
      39610: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.TOGGLE_IS_LEFT_COLUMN = void 0)
        t.TOGGLE_IS_LEFT_COLUMN = function (e, t) {
          var n = e.componentsState,
            i = Object.assign({}, n, { isLeftColumn: t })
          return Object.assign({}, e, { componentsState: i })
        }
      },
      21646: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.TOGGLE_IS_MAIN_COLUMN = void 0)
        t.TOGGLE_IS_MAIN_COLUMN = function (e, t) {
          var n = e.componentsState,
            i = Object.assign({}, n, { isMainColumn: t })
          return Object.assign({}, e, { componentsState: i })
        }
      },
      18837: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.TOGGLE_IS_MAIN_COLUMN_BLANK = void 0)
        t.TOGGLE_IS_MAIN_COLUMN_BLANK = function (e, t) {
          var n = e.componentsState,
            i = Object.assign({}, n, { isMainColumnBlank: t })
          return Object.assign({}, e, { componentsState: i })
        }
      },
      18177: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.TOGGLE_IS_SHOW_GLOBAL = void 0)
        t.TOGGLE_IS_SHOW_GLOBAL = function (e, t) {
          var n = e.globalVars,
            i = Object.assign({}, n, { isShowApp: t })
          return Object.assign({}, e, { globalVars: i })
        }
      },
      22564: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.TOGGLE_IS_USER_MENU = void 0)
        t.TOGGLE_IS_USER_MENU = function (e, t) {
          var n = t.isUserMenu,
            i = e.componentsState,
            o = Object.assign({}, i, { isUserMenu: n })
          return Object.assign({}, e, { componentsState: o })
        }
      },
      71014: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.TOGGLE_LOADER_OVERLAY = void 0)
        t.TOGGLE_LOADER_OVERLAY = function (e, t) {
          var n = e.componentsState,
            i = Object.assign({}, n, { isLoaderOverlayVisible: t })
          return Object.assign({}, e, { componentsState: i })
        }
      },
      55482: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.TOGGLE_PROFILE_SELECT_MENU = void 0)
        t.TOGGLE_PROFILE_SELECT_MENU = function (e, t) {
          var n = t.isProfileSelectMenu,
            i = e.componentsState,
            o = Object.assign({}, i, { isProfileSelectMenu: n })
          return Object.assign({}, e, { componentsState: o })
        }
      },
      76459: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.rootStoreDefault =
            t.profileStoreDefault =
            t.formsDefault =
            t.componentsStateR1 =
            t.componentsStateDefault =
              void 0)
        t.profileStoreDefault = {
          profileAvatar: '',
          profileBirthYear: null,
          profileDateCreated: '',
          profileDateDeleted: '',
          profileDateUpdated: '',
          profileEmail: '',
          profileGender: '',
          profileIdProfile: '',
          profileIdAuth: '',
          profileIdExternal: '',
          profileInfoAbout: '',
          profileLanguages: [],
          profileLocaleCity: '',
          profileLocaleCountry: '',
          profileLoginSource: '',
          profileMedia: [],
          profileName: '',
          profileNameNick: '',
          profileNameFirst: '',
          profileNameLast: '',
          profileNameMiddle: '',
          profilePasswordAuth: '',
          profilePasswordAuth2: '',
          profilePhone: null,
          profileRoles: [],
          profileSkillsExpertise: [],
          profileStatus: '',
          profileWebLink: '',
          profileWebTokenAuth: '',
          profileTimeZone: '',
        }
        var n = {
          isLoaderOverlayVisible: !1,
          isLeftColumn: !1,
          isMainColumn: !0,
          isMainColumnBlank: !1,
          isUserMenu: !1,
          isProfileSelectMenu: !1,
          modalFrame: {
            childName: 'Portfolio',
            isShow: !0,
            isButtonBack: !0,
            isButtonClose: !0,
            childProps: {},
          },
        }
        t.componentsStateR1 = n
        var i = {
          isLoaderOverlayVisible: !1,
          isLeftColumn: !1,
          isMainColumn: !1,
          isMainColumnBlank: !0,
          isUserMenu: !1,
          isProfileSelectMenu: !1,
          modalFrame: {
            childName: 'Portfolio',
            isShow: !1,
            isButtonBack: !0,
            isButtonClose: !0,
            childProps: {},
          },
        }
        t.componentsStateDefault = i
        var o = { inputChat: {}, inputSearch: '' }
        t.formsDefault = o
        var a = {
          componentsState: 'r1.userto.com' === window.location.hostname ? n : i,
          profiles: [],
          sectionsMapping: [],
          competencyTags: [],
          projects: [],
          messages: [],
          forms: o,
          isLoaded: { isLoadedGlobalVars: !1 },
          globalVars: {
            idUserHost: '5',
            idProfileHost: '5',
            idProfileActive: void 0,
            theme: 'light',
            language: 'en',
            isShowApp: !0,
          },
        }
        t.rootStoreDefault = a
      },
      63665: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = function* () {
            yield (0, i.takeEvery)(
              [o.actionAsync.ADD_COMPETENCY_TAGS_ASYNC.REQUEST().type],
              r
            )
          })
        var i = n(81618),
          o = n(55139),
          a = n(71910)
        function* r(e) {
          e.data
          try {
            yield (0, i.put)(
              o.actionSync.ADD_COMPETENCY_TAGS({
                competencyTags: a.competencyTags,
              })
            )
          } catch (t) {}
        }
      },
      23602: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = function* () {
            yield (0, i.takeEvery)(
              [o.actionAsync.ADD_MESSAGES_ASYNC.REQUEST().type],
              r
            )
          })
        var i = n(81618),
          o = n(55139),
          a = n(67535)
        function* r(e) {
          e.data
          try {
            yield (0, i.put)(
              o.actionSync.ADD_MESSAGES({ messages: a.messages })
            )
          } catch (t) {}
        }
      },
      6809: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = function* () {
            yield (0, i.takeEvery)(
              [o.actionAsync.ADD_PROJECTS_ASYNC.REQUEST().type],
              r
            )
          })
        var i = n(81618),
          o = n(55139),
          a = n(4758)
        function* r(e) {
          e.data
          try {
            yield (0, i.put)(
              o.actionSync.ADD_PROJECTS({ projects: a.projects })
            )
          } catch (t) {}
        }
      },
      53663: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = function* () {
            yield (0, i.takeEvery)(
              [a.actionAsync.INIT_LOADING_ASYNC.REQUEST().type],
              d
            )
          })
        var i = n(81618),
          o = n(14278),
          a = n(55139),
          r = n(86747),
          s = n(12162),
          l = n(95363),
          c = n(16177)
        function* d() {
          var e = yield (0, i.select)(function (e) {
              return e
            }),
            t = e.profiles,
            n = e.sectionsMapping
          if (!t.length || !n.length)
            try {
              yield (0, i.put)(
                a.actionSync.ADD_PROFILES({ profiles: r.profiles })
              ),
                yield (0, i.put)(
                  a.actionSync.ADD_SECTIONS_MAPPING({
                    sectionsMapping: s.sectionsMapping,
                  })
                )
              var d = yield (0, i.select)(function (e) {
                  return e
                }),
                p = d.profiles,
                u = d.globalVars.idProfileHost,
                m = (0, o.getFilteredObjsArrayBy)(
                  p,
                  'idProfile',
                  u,
                  o.OperatorType['===']
                )[0],
                g = {
                  profilesIn: r.profiles,
                  profileHostIn: m,
                  getSocketEmitJoinConversationIn:
                    l.getSocketEmitJoinConversation,
                }
              yield (0, i.call)(c.getJoinedConversation, g)
            } catch (h) {
              console.log('initLoadingSaga [81]', { message: h.message })
            }
        }
      },
      53607: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = function* () {
            yield (0, i.takeEvery)(
              [o.actionAsync.TEMPLATE_ASYNC.REQUEST().type],
              r
            )
          })
        var i = n(81618),
          o = n(55139),
          a = n(14458)
        function* r(e) {
          var t = e.data
          try {
            yield (0, i.put)(o.actionSync.TOGGLE_LOADER_OVERLAY(!0))
            var n = (0, a.templateConnectorAxios)(t),
              r = n.client,
              s = n.params,
              l = (yield r.post('', s)).data.data
            yield (0, i.put)(o.actionAsync.TEMPLATE_ASYNC.SUCCESS(l)),
              yield (0, i.put)(o.actionSync.TOGGLE_LOADER_OVERLAY(!1))
          } catch (c) {}
        }
      },
      83495: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.store = void 0)
        var o = n(11115),
          a = i(n(35306)),
          r = i(n(16441)),
          s = n(2274),
          l = n(13525),
          c = i(n(98962)),
          d = (function (e) {
            var t = (0, a.default)(),
              n = [r.default, t],
              i = (0, o.createStore)(
                e,
                (0, s.composeWithDevTools)(o.applyMiddleware.apply(void 0, n))
              )
            return t.run(c.default), i
          })(l.indexReducer)
        t.store = d
      },
      8785: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.isTemplateFlag = t.isHostR1UserToComFlag = void 0)
        ;(0, n(97786).getDetectedEnv)()
        t.isTemplateFlag = function () {
          return !1
        }
        t.isHostR1UserToComFlag = function () {
          return !1
        }
      },
      61950: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 })
        var i = n(8785)
        Object.keys(i).forEach(function (e) {
          'default' !== e &&
            '__esModule' !== e &&
            ((e in t && t[e] === i[e]) ||
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return i[e]
                },
              }))
        })
      },
      4630: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.RouterScreensConfig = void 0)
        i(n(89526))
        var o = n(77138),
          a = n(71103),
          r = n(98054),
          s = n(535),
          l = n(67557),
          c = `/static/${window.location.pathname.split('/static/')[1]}`
        function d(e) {
          var t = e.path,
            n = (0, o.useRouteError)()
          return (
            console.error(n),
            (0, l.jsxs)('div', {
              children: [
                'ErrorBoundary! ',
                (0, l.jsx)('br', {}),
                'pathname: ',
                `${window.location.pathname}`,
                ' ',
                (0, l.jsx)('br', {}),
                ' path: ',
                `${t}`,
                (0, l.jsx)('br', {}),
                'error: ',
                `${n}`,
              ],
            })
          )
        }
        var p = [
            {
              path: '/:urlParam1?/:urlParam2?/static/media/*',
              element: (0, l.jsx)(o.Navigate, { to: c, replace: !0 }),
              children: [],
              errorElement: (0, l.jsx)(d, {
                path: '/:urlParam1?/static/media/*',
              }),
            },
            {
              path: '/',
              element: (0, l.jsx)(s.PageChatsWholeScreen, {}),
              children: [],
              errorElement: (0, l.jsx)(d, { path: '/' }),
            },
            {
              path: '/:urlParam1?/:urlParam2?/:urlParam3?',
              element: (0, l.jsx)(s.PageChatsWholeScreen, {}),
              children: [],
              errorElement: (0, l.jsx)(d, {
                path: '/:urlParam1?/:urlParam2?/:urlParam3?',
              }),
            },
            {
              path: '*',
              element: (0, l.jsx)('div', { children: 'No Match' }),
              children: [],
              errorElement: (0, l.jsx)(d, { path: '*' }),
            },
          ],
          u = function () {
            return (0, o.useRoutes)(p)
          },
          m = (0, r.withDelayYrl)({ delay: 100 })(function () {
            return (0,
            l.jsx)(o.unstable_HistoryRouter, { history: a.history, children: (0, l.jsx)(u, {}) })
          })
        t.RouterScreensConfig = m
      },
      63658: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.getComponentNameByUrlParam = void 0)
        t.getComponentNameByUrlParam = function (e) {
          var t = e.sectionsMappingForProfile,
            n = e.urlParam,
            i = t.find(function (e) {
              return e.pathname === n
            })
          return i && i.childName ? i.childName : 'Profile'
        }
      },
      74247: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.getDateLocale = void 0)
        var o = i(n(87322)),
          a = i(n(44481)),
          r = n(27473)
        o.default.extend(a.default)
        t.getDateLocale = function (e) {
          return (0, o.default)(e).locale(r.LOCALE).format(r.DATE_FORMAT)
        }
      },
      97786: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.getDetectedEnv = void 0)
        t.getDetectedEnv = function () {
          var e = {}
          return '127.0.0.1' === e.hostname || 'localhost' === e.Stubhostname
            ? 'localServer'
            : '127.0.0.1' === e.hostname && '3550' === e.port
            ? 'localWebpack'
            : 'remote'
        }
      },
      93218: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.getFilteredLastObjectByIdProfile = void 0)
        t.getFilteredLastObjectByIdProfile = function (e, t) {
          var n = e.filter(function (e) {
            return e.idProfile === t
          })
          if (0 === n.length) return e
          var i = n[n.length - 1].idMessage
          return e.filter(function (e) {
            return e.idMessage !== i
          })
        }
      },
      14278: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.getFilteredObjsArrayBy = t.OperatorType = void 0)
        var n = (function (e) {
          return (e['==='] = '==='), (e['!=='] = '!=='), e
        })({})
        t.OperatorType = n
        t.getFilteredObjsArrayBy = function (e, t, i) {
          var o =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : n['===']
          return o === n['===']
            ? e.filter(function (e) {
                return e[t] === i
              })
            : o === n['!==']
            ? e.filter(function (e) {
                return e[t] !== i
              })
            : e
        }
      },
      26770: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.getImageSizesFor1of2Columns = void 0)
        t.getImageSizesFor1of2Columns = function (e, t) {
          var n = { imageWidth: 0.33 * t, imageHeight: (0.33 * t * 9) / 16 }
          return (
            'xsSmMd' === e &&
              (n = { imageWidth: 0.7 * t, imageHeight: (0.7 * t * 9) / 16 }),
            n
          )
        }
      },
      42337: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.getItDelayedBy = void 0)
        t.getItDelayedBy = function (e) {
          return new Promise(function (t) {
            return setTimeout(t, e)
          })
        }
      },
      26911: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.getMessagesWithProfileActive = void 0)
        var i = n(71148)
        t.getMessagesWithProfileActive = function (e) {
          var t = e.messages,
            n = e.idProfileHost,
            o = e.idProfileActive
          if (!n || !o) return []
          var a = (0, i.getSortedHashedStringifyArray)([n, o])
          return t.filter(function (e) {
            return e.idConversation === a
          })
        }
      },
      97406: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.getMessengesString = void 0)
        var i = n(26228),
          o = n(9741),
          a = n(67557)
        t.getMessengesString = function (e, t) {
          return e.map(function (e, n) {
            var r = e.name,
              s = e.profileName
            return (0,
            a.jsxs)(i.View, { style: [t.messengerView], testID: 'messengerView', children: [(0, a.jsx)(o.Text, { style: [t.messengerNameText], testID: 'messengerNameText', children: r + ' > ' }), (0, a.jsx)(o.Text, { style: [t.profilenameText], testID: 'profilenameText', children: s })] }, `messenger-${n}`)
          })
        }
      },
      79084: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.getPathNameForReplace = void 0)
        t.getPathNameForReplace = function (e) {
          var t = e.urlParam1,
            n = e.urlParam2,
            i = e.query,
            o = e.search,
            a = e.profileName,
            r = e.tabName,
            s = '',
            l = ''
          r && (l = `/${r}`)
          var c = ''
          c = null != i && i.s && null != i && i.s ? `?s=${i.s}` : o || ''
          return (
            'k' !== t || n
              ? 'k' === t && '@' === n[0]
                ? ('2', (s = `/${t}/${n}`), a && ('2.2', (s = `/${t}/${a}`)))
                : 'k' === t && '/' === n
                ? ('3', (s = `/${t}`))
                : t &&
                  '@' === t[0] &&
                  ('4', (s = `/${t}`), a && ('4.2', (s = `/${a}`)))
              : ('1', a && ('1.2', (s = `/${t}/${a}`))),
            (s = `${s}${l}${c}`)
          )
        }
      },
      83873: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.getPreproccedMessages = void 0)
        t.getPreproccedMessages = function (e, t) {
          return e.map(function (n, i) {
            var o = e.length,
              a = n.idProfile,
              r = i - 1 >= 0 ? e[i - 1].idProfile : void 0,
              s = i + 1 < o ? e[i + 1].idProfile : void 0,
              l = a === t ? 'right' : 'left',
              c = !1
            return (
              a !== s ? (c = !0) : r && s && a === s && (c = !1),
              Object.assign({}, n, { position: l, isTail: c })
            )
          })
        }
      },
      26897: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.getProfileByIdProfile = void 0)
        t.getProfileByIdProfile = function (e, t) {
          return (
            e.find(function (e) {
              return e.idProfile === t
            }) ||
            e[0] || { idProfile: '0', profileName: '@', avatarSrc: '' }
          )
        }
      },
      83429: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.getProfileChat = void 0)
        var i = n(37500),
          o = n(60070)
        t.getProfileChat = function (e) {
          var t = e.urlParam1,
            n = e.urlParam2,
            a = e.profiles,
            r = e.isHostR1UserToComFlag,
            s =
              void 0 === r
                ? function () {
                    return !1
                  }
                : r,
            l = o.HOST_NAME
          if ((s() && (l = 'r1.userto.com'), 'r1.userto.com' === l)) return a[1]
          var c = (0, i.getProfileUrlFromParams)(t, n),
            d = void 0
          return (
            c &&
              (d = a.find(function (e) {
                return e.profileName === c
              })),
            d || a[0]
          )
        }
      },
      37500: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.getProfileUrlFromParams = void 0)
        t.getProfileUrlFromParams = function (e, t) {
          var n = void 0
          return t && '@' === t[0] ? (n = t) : e && '@' === e[0] && (n = e), n
        }
      },
      71855: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.getProfilesSearched = void 0)
        var i = n(43050)
        t.getProfilesSearched = function (e, t) {
          return t
            ? e.filter(function (e) {
                return Object.keys(e)
                  .reduce(function (t, n) {
                    var o = e[n]
                    return 'string' === typeof o
                      ? `${t}${o}`
                      : Array.isArray(o)
                      ? `${t}${(0, i.getStringFromArrayStrings)(o)}`
                      : t
                  }, '')
                  .toLowerCase()
                  .includes(t.toLowerCase())
              })
            : e
        }
      },
      47154: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.getRedirected = void 0)
        var o = i(n(17156)),
          a = n(71103),
          r = (function () {
            var e = (0, o.default)(function* (e, t) {
              var n = t.replace,
                i = void 0 === n || n
              if (e)
                try {
                  a.history.push(e)
                } catch (r) {
                  var o = r.message
                  console.info('getRedirected [21]', {
                    message: o,
                    pathnameNext: e,
                    replace: i,
                  }),
                    (window.location.pathname = e)
                }
            })
            return function (t, n) {
              return e.apply(this, arguments)
            }
          })()
        t.getRedirected = r
      },
      94079: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.getScenarioParamsFromUrlParams = void 0)
        t.getScenarioParamsFromUrlParams = function (e) {
          var t = e.urlParam1,
            n = e.urlParam2,
            i = e.urlParam3,
            o = e.query,
            a = o && o.s,
            r = 0,
            s = '',
            l = !1,
            c = !1,
            d = void 0,
            p = void 0,
            u = !1,
            m = '',
            g = !0,
            h = !0
          return (
            t || n || i
              ? t && 'k' !== t && '@' !== t[0]
                ? ((r = 2),
                  (s =
                    "urlParam1 && urlParam1 !== 'k' && urlParam1[0] !== '@'"),
                  (l = !0),
                  (c = !0),
                  (d = '/k'))
                : t && 'k' === t && !n
                ? ((r = 3),
                  (s = "urlParam1 && urlParam1 === 'k' && !urlParam2"),
                  (l = !0),
                  (c = !0),
                  (d = void 0))
                : t && 'k' === t && n && '@' !== n[0]
                ? ((r = 4),
                  (s =
                    "urlParam1 && urlParam1 === 'k' && urlParam2 && urlParam2[0] !== '@'"),
                  (l = !0),
                  (c = !0),
                  (d = '/k'))
                : t && 'k' === t && n && '@' === n[0]
                ? ((r = 5),
                  (s =
                    "urlParam1 && urlParam1 === 'k' && urlParam2 && urlParam2[0] === '@'"),
                  (p = n),
                  (l = !0),
                  (c = !1),
                  (d = void 0),
                  i &&
                    ((r = 5.5), (s = `${s} && urlParam3`), (u = !0), (m = i)))
                : t &&
                  'k' !== t &&
                  '@' === t[0] &&
                  ((r = 6),
                  (s =
                    "urlParam1 && urlParam1 !== 'k' && urlParam1[0] === '@'"),
                  (p = t),
                  (l = !1),
                  (c = !1),
                  (d = void 0),
                  n &&
                    ((r = 6.5), (s = `${s} && urlParam2`), (u = !0), (m = n)),
                  'bc' === a &&
                    ((r = 6.7),
                    (s = `${s} && showType === 'bc'`),
                    (u = !0),
                    (g = !1),
                    (h = !1)))
              : ((r = 1),
                (s = '!urlParam1 && !urlParam2 && !urlParam3'),
                (l = !0),
                (c = !0),
                (d = 'k')),
            {
              caseNo: r,
              caseConditions: s,
              profileName: p,
              isLeftColumn: l,
              isMainColumnBlank: c,
              isShowModalFrame: u,
              modalFrameParamName: m,
              isButtonBack: g,
              isButtonClose: h,
              redirectPathname: d,
            }
          )
        }
      },
      65205: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.getSectionsFromTagsCompetencies = void 0)
        var o = i(n(861))
        t.getSectionsFromTagsCompetencies = function (e) {
          return e.reduce(function (e, t) {
            var n = []
            return (
              e.find(function (e) {
                return e === t.section
              }) || (n = [t.section]),
              [].concat((0, o.default)(e), (0, o.default)(n))
            )
          }, [])
        }
      },
      45261: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.getSectionsMappingForProfile = void 0)
        t.getSectionsMappingForProfile = function (e, t) {
          return e.filter(function (e) {
            return e.profileName === t
          })
        }
      },
      13256: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.getServerSocketIoHost = void 0)
        t.getServerSocketIoHost = function () {
          var e = 'https://yourails.com'
          return (
            'localhost:19006' === location.host &&
              (e = 'http://localhost:3000'),
            e
          )
        }
      },
      40056: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.modalFrameTrue =
            t.modalFrameFalse =
            t.getSetStoreScenario =
            t.DeviceType =
              void 0)
        var i = n(94079),
          o = n(63658),
          a = (function (e) {
            return (
              (e.xsDevice = 'xsDevice'),
              (e.smDevice = 'smDevice'),
              (e.mdDevice = 'mdDevice'),
              (e.lgDevice = 'lgDevice'),
              (e.xlDevice = 'xlDevice'),
              e
            )
          })({})
        t.DeviceType = a
        var r = {
          childName: 'Portfolio',
          isShow: !1,
          isButtonBack: !0,
          isButtonClose: !0,
          childProps: {},
        }
        t.modalFrameFalse = r
        t.modalFrameTrue = {
          childName: 'Portfolio',
          isShow: !0,
          isButtonBack: !1,
          isButtonClose: !1,
          childProps: {},
        }
        t.getSetStoreScenario = function (e) {
          var t = e.idUserHost,
            n = e.profiles,
            s = e.hostname,
            l = e.urlParam1,
            c = e.urlParam2,
            d = e.urlParam3,
            p = e.query,
            u = e.deviceType,
            m = e.sectionsMappingForProfile,
            g =
              (p && (null == p || p.s),
              (0, i.getScenarioParamsFromUrlParams)({
                urlParam1: l,
                urlParam2: c,
                urlParam3: d,
                query: p,
              })),
            h = g.caseNo,
            f = g.caseConditions,
            y = g.profileName,
            A = g.isLeftColumn,
            v = g.isMainColumnBlank,
            b = g.isShowModalFrame,
            S = g.modalFrameParamName,
            T = g.isButtonBack,
            w = g.isButtonClose,
            P = g.redirectPathname,
            I = (0, o.getComponentNameByUrlParam)({
              sectionsMappingForProfile: m,
              urlParam: S,
            }),
            C = n.find(function (e) {
              return e.profileName === y
            }),
            E = null == C ? void 0 : C.idUser,
            x = '',
            k = {
              caseNo: h,
              caseConditions: f,
              caseDesc: x,
              isShowApp: !0,
              idUserHost: t,
              idUser: E,
              idProfile: null == C ? void 0 : C.idProfile,
              isLeftColumn: A,
              isMainColumn: !0,
              isMainColumnBlank: v,
              modalFrame: Object.assign({}, r, {
                childName: I,
                isShow: b,
                isButtonBack: T,
                isButtonClose: w,
              }),
              redirectPathname: P,
            }
          if ('r1.userto.com' === s) {
            x = 'Hostname === r1.userto.com'
            var M = (0, o.getComponentNameByUrlParam)({
              sectionsMappingForProfile: m,
              urlParam: l,
            })
            k = {
              caseNo: 0,
              caseConditions: "+ hostname === 'r1.userto.com'",
              caseDesc: x,
              isShowApp: !0,
              idUserHost: '1',
              idUser: '1',
              idProfile: '1',
              isLeftColumn: !1,
              isMainColumn: !0,
              isMainColumnBlank: !1,
              modalFrame: {
                childName: M,
                isShow: !!M,
                isButtonBack: !1,
                isButtonClose: !1,
                childProps: {},
              },
              redirectPathname: void 0,
            }
          } else if (1 === h)
            (x =
              'User direct link but without valid profileName and consequently unfound idUserUrl'),
              (k = Object.assign({}, k, { caseDesc: x }))
          else if (2 === h)
            (x =
              'The Chat service Yourails.com without /k and a user in the first param of the URL'),
              (k = Object.assign({}, k, { caseDesc: x }))
          else if (3 === h)
            (x =
              'The Chat service Yourails.com with /k and no second param of the URL'),
              (k = Object.assign({}, k, { caseDesc: x }))
          else if (4 === h)
            (x =
              'The Chat service Yourails.com with /k, second param of the URL, but without @ as a first characted of the second param'),
              (k = Object.assign({}, k, { caseDesc: x }))
          else if ((5 !== h && 5.5 !== h) || !E)
            if ((5 !== h && 5.5 !== h) || E)
              if ((6 !== h && 6.5 !== h && 6.7 !== h) || !E) {
                if ((6 === h || 6.5 === h || 6.7 === h) && !E) {
                  x =
                    'The Chat service Yourails.com without /k, first param of the URL with @ sign and with valid user'
                  var O = n.length ? '/k' : void 0
                  k = Object.assign({}, k, {
                    caseNo: 6.2,
                    caseConditions: `(caseNoUrl === 6 || caseNoUrl === 6.5 || caseNoUrl === 6.7) && !idUserUrl << ${f}`,
                    caseDesc: x,
                    redirectPathname: O,
                    isMainColumn: !1,
                  })
                }
              } else
                (x =
                  'The Chat service Yourails.com without /k, first param of the URL with @ sign and with valid user'),
                  (k = Object.assign({}, k, {
                    caseConditions: `(caseNoUrl === 6 || caseNoUrl === 6.5 || caseNoUrl === 6.7) && idUserUrl << ${f}`,
                    caseDesc: x,
                  }))
            else {
              x =
                'The Chat service Yourails.com with /k, second param of the URL with @ sign and with !valid user'
              var D = n.length ? '/k' : void 0
              k = Object.assign({}, k, {
                caseNo: 5.2,
                caseConditions: `(caseNoUrl === 5 || caseNoUrl === 5.5) && !idUserUrl << ${f}`,
                caseDesc: x,
                redirectPathname: D,
                isMainColumn: !1,
              })
            }
          else
            (x =
              'The Chat service Yourails.com with /k, second param of the URL with @ sign and with valid user'),
              (k = Object.assign({}, k, {
                caseConditions: `(caseNoUrl === 5 || caseNoUrl === 5.5) && idUserUrl) << ${f}`,
                caseDesc: x,
              }))
          return (
            'k' !== l ||
              (3 !== h && !E) ||
              (k =
                u === a.mdDevice || u === a.lgDevice || u === a.xlDevice
                  ? Object.assign({}, k, { isLeftColumn: !0, isMainColumn: !0 })
                  : y && E
                  ? Object.assign({}, k, { isLeftColumn: !1, isMainColumn: !0 })
                  : Object.assign({}, k, {
                      isLeftColumn: !0,
                      isMainColumn: !1,
                    })),
            k
          )
        }
      },
      20899: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.getSortedArray = void 0)
        t.getSortedArray = function (e) {
          return e.sort(function (e, t) {
            return e.localeCompare(t, void 0, { numeric: !0 })
          })
        }
      },
      71148: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.getSortedHashedStringifyArray = t.HashFunctionType = void 0)
        var o = i(n(72776)),
          a = n(20899),
          r = (function (e) {
            return (e.SHA1 = 'SHA1'), (e.SHA256 = 'SHA256'), e
          })({})
        t.HashFunctionType = r
        t.getSortedHashedStringifyArray = function (e) {
          var t = (
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { hashFunction: void 0 }
            ).hashFunction,
            n = JSON.stringify((0, a.getSortedArray)(e))
          return t && (n = o.default[t](n).toString()), n
        }
      },
      43050: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.getStringFromArrayStrings = void 0)
        t.getStringFromArrayStrings = function (e) {
          return e
            ? e.reduce(function (e, t) {
                return t && 'string' === typeof t ? `${e}${String(t)}` : e
              }, '')
            : ''
        }
      },
      52637: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.AbInCircle = void 0)
        var o = i(n(89526)),
          a = n(26228),
          r = n(98054),
          s = n(9741),
          l = n(25784),
          c = n(67557),
          d = o.default.memo(
            (0, r.withPropsYrl)({
              colors2: {
                A: '219',
                B: 'F80',
                C: 'FF0',
                D: 'AB4',
                E: '0D9',
                F: '26C',
                G: '9C6',
                H: '793',
                I: '86E',
                J: '09C',
                K: '3B8',
                L: 'F08',
                M: 'C72',
                N: 'A4C',
                O: '4E5',
                P: '673',
                Q: '09C',
                R: '26C',
                S: '9C6',
                T: '793',
                U: '86E',
                V: 'F08',
                W: 'C72',
                X: 'A4C',
                Y: '4E5',
                Z: '673',
              },
            })(
              (0, r.withParamsMediaYrl)(function (e) {
                var t = e.styleProps,
                  n = void 0 === t ? { AbInCircle: {} } : t,
                  i = e.mediaParams,
                  o = void 0 === i ? r.mediaParamsDefault : i,
                  d = e.text,
                  p = e.colors2,
                  u = e.testID,
                  m = o.deviceType,
                  g = (o.screenCase, o.width, o.height, l.styles[m]),
                  h = `#${p[d[0]]}${p[d[1]]}`
                return (0,
                c.jsx)(a.View, { style: [g.AbInCircle, n.AbInCircle, { borderColor: h, backgroundColor: h }], testID: u || 'AbInCircle', children: (0, c.jsx)(s.Text, { style: [g.text, { color: 'white' }], testID: 'text', children: d }) })
              })
            )
          )
        t.AbInCircle = d
      },
      25784: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.stylesDefault = t.styles = void 0)
        var i = n(26228),
          o = n(55380),
          a = i.StyleSheet.create({
            AbInCircle: Object.assign({}, o.styleGlobal.typography, {
              flexDirection: 'column',
              borderRadius: 50,
              borderColor: 'white',
              backgroundColor: 'white',
              padding: '0.7rem',
            }),
            text: { fontSize: 17 },
          })
        t.stylesDefault = a
        i.StyleSheet.create(Object.assign({}, a))
        var r = i.StyleSheet.create(Object.assign({}, a)),
          s = {
            xsDevice: r,
            smDevice: r,
            mdDevice: i.StyleSheet.create(Object.assign({}, a)),
            lgDevice: i.StyleSheet.create(Object.assign({}, a)),
            xlDevice: i.StyleSheet.create(Object.assign({}, a)),
          }
        t.styles = s
      },
      7248: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.AvatarPlusInfo = void 0)
        var o = i(n(89526)),
          a = n(26228),
          r = n(49838),
          s = n(98054),
          l = n(52637),
          c = n(67557),
          d = o.default.memo(function (e) {
            var t = e.styleProps,
              n =
                void 0 === t
                  ? { AvatarPlusInfo: {}, viewStyle: {}, avatar: {} }
                  : t,
              i = e.onPress,
              o = void 0 === i ? function () {} : i,
              d = e.profile,
              p = e.isImageAvatar,
              u = void 0 === p || p,
              m = e.children,
              g = (e.testID, d.avatarSrc),
              h = void 0 === g ? '' : g,
              f = d.nameFirst,
              y = d.nameLast,
              A = `${(f && f[0]) || 'A'}${(y && y[0]) || 'Z'}`,
              v = {
                imageYrlProps: {
                  styleProps: {
                    ImageYrl: r.style.ImageYrl,
                    image: r.style.image,
                  },
                  resizeMode: 'cover',
                  testID: 'ChatCard_imageYrl',
                  uri: h,
                },
                ButtonYrl: {
                  styleProps: { ButtonYrl: {} },
                  disabled: !1,
                  onPress: o,
                  iconProps: void 0,
                  testID: 'avatarPlusInfoButtonYrl',
                },
                abInCircleProps: {
                  styleProps: { AbInCircle: {}, text: r.style.image },
                  text: A,
                  testID: 'AvatarPlusInfoAbInCircle',
                },
              }
            return (0,
            c.jsx)(a.View, { style: [r.style.AvatarPlusInfo, n.AvatarPlusInfo], testID: 'AvatarPlusInfo', children: (0, c.jsx)(s.ButtonYrl, Object.assign({}, v.ButtonYrl, { children: (0, c.jsxs)(c.Fragment, { children: [u && (0, c.jsx)(a.View, { style: [r.style.avatar, n.avatar], testID: 'avatar', children: h ? (0, c.jsx)(s.ImageYrl, Object.assign({}, v.imageYrlProps)) : (0, c.jsx)(l.AbInCircle, Object.assign({}, v.abInCircleProps)) }), m] }) })) })
          })
        t.AvatarPlusInfo = d
      },
      49838: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.style = void 0)
        var i = n(26228),
          o = n(55380),
          a = i.StyleSheet.create({
            AvatarPlusInfo: Object.assign({}, o.styleGlobal.typography, {
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignContent: 'space-around',
              alignItems: 'center',
            }),
            avatar: { paddingLeft: '1rem' },
            ImageYrl: {},
            image: { width: 45, height: 45, borderRadius: 50 },
            nameStatus: { paddingLeft: '1rem' },
            name: { fontWeight: '600', fontSize: 16 },
            status: { fontSize: 14, alignSelf: 'flex-end' },
          })
        t.style = a
      },
      99167: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.AwaitView = void 0)
        var o = i(n(89526)),
          a = n(26228),
          r = n(98054),
          s = n(12292),
          l = n(67557),
          c = o.default.memo(
            (0, r.withParamsMediaYrl)(function (e) {
              var t = e.styleProps,
                n = void 0 === t ? { AwaitView: {} } : t,
                i = e.mediaParams,
                o = void 0 === i ? r.mediaParamsDefault : i,
                c = o.deviceType,
                d = (o.screenCase, o.width, o.height, s.styles[c])
              return (0,
              l.jsx)(a.View, { style: [d.AwaitView, n.AwaitView], testID: 'AwaitView', children: (0, l.jsx)(r.ImageYrl, Object.assign({}, { styleProps: { ImageYrl: {}, image: { height: '10rem', width: '10rem' } }, testID: 'ImageYrl', uri: 'https://yourails.com/images/loading/loading09.gif', resizeMode: 'cover' })) })
            })
          )
        t.AwaitView = c
      },
      12292: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.stylesDefault = t.styles = void 0)
        var i = n(26228),
          o = n(55380),
          a = i.StyleSheet.create({
            AwaitView: Object.assign({}, o.styleGlobal.typography, {
              flexDirection: 'column',
            }),
          })
        t.stylesDefault = a
        i.StyleSheet.create(Object.assign({}, a))
        var r = i.StyleSheet.create(Object.assign({}, a)),
          s = {
            xsDevice: r,
            smDevice: r,
            mdDevice: i.StyleSheet.create(Object.assign({}, a)),
            lgDevice: i.StyleSheet.create(Object.assign({}, a)),
            xlDevice: i.StyleSheet.create(Object.assign({}, a)),
          }
        t.styles = s
      },
      18031: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ChatCard = void 0)
        var o = i(n(89526)),
          a = n(26228),
          r = n(98054),
          s = n(48725),
          l = n(44322),
          c = n(68643),
          d = n(7248),
          p = n(5199),
          u = n(67557),
          m = o.default.memo(
            (0, r.withPropsYrl)({ handleEvents: p.handleEvents })(
              (0, r.withParamsMediaYrl)(function (e) {
                var t = e.profile,
                  n = e.styleProps,
                  i = void 0 === n ? { ChatCard: {} } : n,
                  o = e.isActive,
                  p = e.handleEvents,
                  m = e.mediaParams,
                  g = (m = void 0 === m ? r.mediaParamsDefault : m).deviceType,
                  h = e.urlParam1,
                  f = e.urlParam2,
                  y = e.query,
                  A = t.idProfile,
                  v = t.profileName,
                  b = o ? l.themes.themeA.colors07 : {},
                  S = {
                    avatarPlusInfoProps: {
                      styleProps: {},
                      profile: t,
                      onPress: function () {
                        p.CLICK_TOGGLE_SIDEBAR_MAIN({}, { deviceType: g }),
                          p.CLICK_ON_USER_CHAT_CARD(
                            {},
                            {
                              idProfile: A,
                              profileName: v,
                              urlParam1: h,
                              urlParam2: f,
                              query: y,
                            }
                          )
                      },
                    },
                    nameStatusProps: {
                      styleProps: { NameStatus: {}, viewStyle: b },
                      profile: t,
                      status: 'last seen recently',
                    },
                  }
                return (0,
                u.jsx)(a.View, { style: [s.style.ChatCard, i.ChatCard, b], testID: 'ChatCard', children: (0, u.jsx)(d.AvatarPlusInfo, Object.assign({}, S.avatarPlusInfoProps, { children: (0, u.jsx)(c.NameStatus, Object.assign({}, S.nameStatusProps)) })) })
              })
            )
          )
        t.ChatCard = m
      },
      48725: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.style = void 0)
        var i = n(26228),
          o = n(55380),
          a = i.StyleSheet.create({
            ChatCard: Object.assign({}, o.styleGlobal.typography, {
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignContent: 'space-around',
              alignItems: 'center',
              paddingTop: '0.45rem',
              paddingBottom: '0.45rem',
            }),
          })
        t.style = a
      },
      14372: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ChatCards = void 0)
        var o = i(n(89526)),
          a = n(26228),
          r = n(98054),
          s = n(5199),
          l = n(32944),
          c = n(44322),
          d = n(18031),
          p = n(8852),
          u = n(29266),
          m = n(71855),
          g = n(67557),
          h = o.default.memo(
            (0, r.withPropsYrl)({ handleEvents: s.handleEvents })(
              (0, r.withStoreStateYrl)(
                (0, r.withParamsMediaYrl)(function (e) {
                  var t,
                    n = e.styleProps,
                    i = void 0 === n ? { ChatCards: {} } : n,
                    o = e.mediaParams,
                    s = void 0 === o ? r.mediaParamsDefault : o,
                    h = e.urlParams,
                    f = void 0 === h ? r.urlParamsDefault : h,
                    y = e.store,
                    A = e.handleEvents,
                    v = e.urlParamsSearch,
                    b = s.deviceType,
                    S = f.urlParam1,
                    T = f.urlParam2,
                    w = y.componentsState,
                    P = w.isUserMenu,
                    I = w.isProfileSelectMenu,
                    C = y.globalVars,
                    E = C.idUserHost,
                    x = C.idProfileHost,
                    k = C.idProfileActive,
                    M = y.forms.inputSearch,
                    O = y.profiles,
                    D = l.styles[b],
                    j = (0, m.getProfilesSearched)(O, M).sort(function (e, t) {
                      return e.position - t.position
                    }),
                    R = {
                      modalFrameYrlProps: {
                        styleProps: {
                          ModalFrameYrl: {},
                          imageBackground: {
                            backgroundColor:
                              c.themes.themeA.colors07.backgroundColor,
                          },
                          content: {},
                          buttonBackWrapper: {},
                          buttonCloseWrapper: { top: '1rem', right: '1rem' },
                        },
                        linearGradientColors: [
                          'rgba(0,0,0,0)',
                          'rgba(0,0,0,0.25)',
                        ],
                        isShow: P || I,
                        isShowImageBackground: !0,
                        testID: 'ChatSpace_modalFrameYrl',
                        buttonBackProps: {
                          styleProps: { ButtonYrl: {}, title: {} },
                          titleText: '',
                          testID: 'ModalFrameYrl-buttonBack',
                          disabled: !1,
                          onPress: function () {},
                          iconProps: {
                            styleProps: { IconYrl: {} },
                            library: 'Ionicons',
                            name: 'arrow-back-outline',
                            size: 24,
                            color: '',
                            testID: 'ModalFrameYrl-buttonBack-iconBack',
                          },
                        },
                        buttonCloseProps: {
                          styleProps: { ButtonYrl: {}, title: {} },
                          titleText: '',
                          testID: 'ModalFrameYrl-buttonClose',
                          disabled: !1,
                          onPress: function () {
                            A.CLICK_ON_MENU_CONTROL(
                              {},
                              { isProfileSelectMenu: !1, isUserMenu: !1 }
                            )
                          },
                          iconProps: {
                            styleProps: { IconYrl: {} },
                            library: 'Ionicons',
                            name: 'close',
                            size: 24,
                            color: c.themes.themeA.colors07.color,
                            testID: 'ModalFrameYrl-buttonClose-iconClose',
                          },
                        },
                        imageBackgroundSource: void 0,
                        isButtonBack: !1,
                        isButtonClose: !0,
                      },
                      userMenuProps: {
                        styleProps: {
                          UserMenu: Object.assign({}, c.themes.themeA.colors01),
                        },
                      },
                      profileSelectMenuProps: {
                        styleProps: {
                          ProfileSelectMenu: Object.assign(
                            {},
                            c.themes.themeA.colors01
                          ),
                        },
                        profiles: O,
                        idUserHost: E,
                        urlParam1: S,
                        urlParam2: T,
                        query: { s: v.get('s') },
                      },
                    }
                  return (0, g.jsx)(a.View, {
                    style: [D.ChatCards, i.ChatCards],
                    testID: 'ChatCards',
                    children:
                      P || I
                        ? (0, g.jsx)(
                            r.ModalFrameYrl,
                            Object.assign({}, R.modalFrameYrlProps, {
                              children: P
                                ? (0, g.jsx)(
                                    p.UserMenu,
                                    Object.assign({}, R.userMenuProps)
                                  )
                                : (0, g.jsx)(
                                    u.ProfileSelectMenu,
                                    Object.assign({}, R.profileSelectMenuProps)
                                  ),
                            })
                          )
                        : ((t = j),
                          t
                            .filter(function (e) {
                              var t = e.idProfile
                              return '0' !== t && t !== x
                            })
                            .map(function (e, t) {
                              var n = {
                                chatCardProps: {
                                  key: `chatCard-${t}`,
                                  profile: e,
                                  isActive: e.idProfile === k,
                                  urlParam1: S,
                                  urlParam2: T,
                                  query: { s: v.get('s') },
                                },
                              }
                              return (0,
                              g.jsx)(d.ChatCard, Object.assign({}, n.chatCardProps))
                            })),
                  })
                })
              )
            )
          )
        t.ChatCards = h
      },
      32944: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.stylesDefault = t.styles = void 0)
        var i = n(26228),
          o = n(55380),
          a = i.StyleSheet.create({
            ChatCards: Object.assign({}, o.styleGlobal.typography),
          })
        t.stylesDefault = a
        i.StyleSheet.create(Object.assign({}, a))
        var r = i.StyleSheet.create(Object.assign({}, a)),
          s = {
            xsDevice: r,
            smDevice: r,
            mdDevice: i.StyleSheet.create(Object.assign({}, a)),
            lgDevice: i.StyleSheet.create(Object.assign({}, a)),
            xlDevice: i.StyleSheet.create(Object.assign({}, a)),
          }
        t.styles = s
      },
      41155: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ChatInput = void 0)
        var o = i(n(89526)),
          a = n(26228),
          r = n(98054),
          s = n(64499),
          l = n(44322),
          c = n(5199),
          d = n(26897),
          p = n(67557),
          u = o.default.memo(
            (0, r.withPropsYrl)({ handleEvents: c.handleEvents })(
              (0, r.withStoreStateYrl)(function (e) {
                var t = e.handleEvents,
                  n = e.store,
                  i = n.profiles,
                  o = n.globalVars.idProfileActive,
                  c = n.forms.inputChat,
                  u = (0, d.getProfileByIdProfile)(i, o),
                  m = {
                    inputTextYrlProps: {
                      onChangeText: function (e) {
                        return t.ON_CHANGE_INPUT_CHAT(
                          {},
                          { idProfileActive: o, text: e }
                        )
                      },
                      onSubmitEditing: function () {
                        return t.CLICK_ON_SEND_MESSAGE({}, { profileActive: u })
                      },
                      styleProps: {
                        InputTextYrl: s.style.InputTextYrl,
                        inputText: Object.assign(
                          {},
                          s.style.inputText,
                          l.themes.themeA.colors01,
                          { border: 0, outlineWidth: 0 }
                        ),
                      },
                      testID: 'ChatInput_InputTextYrl',
                      multiline: !0,
                      numberOfLines: 3,
                      placeholder: 'Message',
                      placeholderTextColor: '#a2acb4',
                      value: (o && c[o]) || '',
                    },
                    sendButtonYrlProps: {
                      styleProps: { ButtonYrl: {}, title: {} },
                      titleText: '',
                      testID: 'ButtonYrl',
                      disabled: !1,
                      onPress: function () {
                        return t.CLICK_ON_SEND_MESSAGE({}, { profileActive: u })
                      },
                    },
                    sendIconYrlProps: {
                      library: 'Ionicons',
                      name: 'send',
                      styleProps: { IconYrl: { cursor: 'pointer' } },
                      size: 24,
                      color: l.themes.themeA.colors02.color,
                      testID: 'TopBarChatCardsComponent_IconYrl_search',
                    },
                  }
                return (0,
                p.jsx)(a.View, { style: [s.style.ChatInput], testID: 'ChatInput', children: (0, p.jsxs)(a.View, { style: [s.style.inputButton], testID: 'ChatInput_inputButton', children: [(0, p.jsx)(r.InputTextYrl, Object.assign({}, m.inputTextYrlProps)), (0, p.jsx)(a.View, { style: [s.style.iconYrlWrapper], testID: 'iconYrlWrapper', children: (0, p.jsx)(r.ButtonYrl, Object.assign({}, m.sendButtonYrlProps, { children: (0, p.jsx)(r.IconYrl, Object.assign({}, m.sendIconYrlProps)) })) })] }) })
              })
            )
          )
        t.ChatInput = u
      },
      64499: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.style = void 0)
        var i = n(26228).StyleSheet.create({
          ChatInput: {
            flex: 1,
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingBottom: '1rem',
          },
          inputButton: {
            width: '80%',
            justifyContent: 'flex-end',
            alignItems: 'center',
          },
          InputTextYrl: { width: '100%', cursor: 'pointer' },
          inputText: { width: '100%', borderRadius: 10, paddingRight: '2rem' },
          ButtonYrl: {
            position: 'absolute',
            margin: 0,
            padding: '10px',
            right: 20,
          },
          ButtonTitle: { fontSize: 17, fontWeight: '600' },
          iconYrlWrapper: {
            position: 'absolute',
            paddingRight: '1rem',
            right: 0,
            top: '20%',
            bottom: '20%',
          },
        })
        t.style = i
      },
      36974: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ChatSpace = void 0)
        var i = (function (e, t) {
            if (!t && e && e.__esModule) return e
            if (
              null === e ||
              ('object' !== typeof e && 'function' !== typeof e)
            )
              return { default: e }
            var n = S(t)
            if (n && n.has(e)) return n.get(e)
            var i = {},
              o = Object.defineProperty && Object.getOwnPropertyDescriptor
            for (var a in e)
              if (
                'default' !== a &&
                Object.prototype.hasOwnProperty.call(e, a)
              ) {
                var r = o ? Object.getOwnPropertyDescriptor(e, a) : null
                r && (r.get || r.set)
                  ? Object.defineProperty(i, a, r)
                  : (i[a] = e[a])
              }
            ;(i.default = e), n && n.set(e, i)
            return i
          })(n(89526)),
          o = n(26228),
          a = n(79086),
          r = n(99613),
          s = n(98054),
          l = n(26911),
          c = n(83429),
          d = n(74247),
          p = n(83873),
          u = n(9741),
          m = n(71186),
          g = n(6870),
          h = n(44322),
          f = n(55380),
          y = n(71491),
          A = n(5199),
          v = n(26897),
          b = n(67557)
        function S(e) {
          if ('function' !== typeof WeakMap) return null
          var t = new WeakMap(),
            n = new WeakMap()
          return (S = function (e) {
            return e ? n : t
          })(e)
        }
        var T = i.default.memo(
          (0, s.withPropsYrl)({ handleEvents: A.handleEvents })(
            (0, s.withStoreStateYrl)(
              (0, s.withParamsMediaYrl)(function (e) {
                var t = e.styleProps,
                  n = void 0 === t ? { ChatSpace: {} } : t,
                  A = e.mediaParams,
                  S = void 0 === A ? s.mediaParamsDefault : A,
                  T = e.urlParams,
                  w = void 0 === T ? s.urlParamsDefault : T,
                  P = e.store,
                  I = e.handleEvents,
                  C = S.deviceType,
                  E = S.height,
                  x = w.urlParam1,
                  k = w.urlParam2,
                  M = m.styles[C],
                  O = P.globalVars,
                  D = O.idProfileHost,
                  j = O.idProfileActive,
                  R = P.componentsState,
                  B = P.profiles,
                  L = P.messages,
                  Q = R.modalFrame,
                  H = Q.childName,
                  N = Q.isShow,
                  Y = Q.isButtonBack,
                  F = Q.isButtonClose,
                  G = Q.childProps
                ;(0, i.useEffect)(function () {
                  I.ADD_MESSAGES({}, {})
                }, [])
                var U = (0, c.getProfileChat)({
                    profiles: B,
                    urlParam1: x,
                    urlParam2: k,
                  }),
                  W = { messages: L, idProfileHost: D, idProfileActive: j },
                  _ = (0, l.getMessagesWithProfileActive)(W),
                  V = H ? y.MODAL_CONTENTS[H] : null,
                  J = (0, p.getPreproccedMessages)(_, D),
                  q = N ? f.styleGlobal.hidden : {},
                  K = '3rem',
                  z = '0.5rem',
                  Z = '1rem',
                  X = '1rem'
                'xsDevice' === C
                  ? (K = 0)
                  : 'smDevice' === C
                  ? ((K = '2rem'),
                    (z = '0.25rem'),
                    (Z = '0.5rem'),
                    (X = '0.5rem'))
                  : 'mdDevice' === C
                  ? (z = '0.7rem')
                  : ('lgDevice' !== C && 'xlDevice' !== C) || (z = '1rem')
                var $ = {
                    messageProps: Object.assign({}, _[0], {
                      profile: U,
                      isTail: !0,
                    }),
                    modalFrameYrlProps: {
                      styleProps: {
                        ModalFrameYrl: {},
                        imageBackground: {
                          backgroundColor:
                            h.themes.themeA.colors07.backgroundColor,
                        },
                        content: Object.assign(
                          { margin: K },
                          h.themes.themeA.colors03
                        ),
                        buttonBackWrapper: { top: z, left: Z },
                        buttonCloseWrapper: { top: z, right: X },
                      },
                      linearGradientColors: [
                        'rgba(0,0,0,0)',
                        'rgba(0,0,0,0.25)',
                      ],
                      isShow: N,
                      isShowImageBackground: !0,
                      testID: 'ChatSpace_modalFrameYrl',
                      buttonBackProps: {
                        styleProps: { ButtonYrl: {}, title: {} },
                        titleText: '',
                        testID: 'ModalFrameYrl-buttonBack',
                        disabled: !1,
                        onPress: function () {
                          return I.SET_MODAL_FRAME(
                            {},
                            { childName: H, isShow: !1, childProps: {} }
                          )
                        },
                        iconProps: {
                          styleProps: { IconYrl: {} },
                          library: 'Ionicons',
                          name: 'arrow-back-outline',
                          size: 24,
                          color: h.themes.themeA.colors07.color,
                          testID: 'ModalFrameYrl-buttonBack-iconBack',
                        },
                      },
                      buttonCloseProps: {
                        styleProps: { ButtonYrl: {}, title: {} },
                        titleText: '',
                        testID: 'ModalFrameYrl-buttonClose',
                        disabled: !1,
                        onPress: function () {
                          return I.SET_MODAL_FRAME(
                            {},
                            { childName: H, isShow: !1, childProps: {} }
                          )
                        },
                        iconProps: {
                          styleProps: { IconYrl: {} },
                          library: 'Ionicons',
                          name: 'close',
                          size: 24,
                          color: h.themes.themeA.colors07.color,
                          testID: 'ModalFrameYrl-buttonClose-iconClose',
                        },
                      },
                      imageBackgroundSource: void 0,
                      isButtonBack: Y,
                      isButtonClose: F,
                    },
                    modalFrameAwaitViewProps: {
                      styleProps: {
                        ModalFrameYrl: { height: '100%' },
                        imageBackground: {
                          backgroundColor:
                            h.themes.themeA.colors01.backgroundColor,
                        },
                        content: {
                          height: '100%',
                          marginLeft: '45%',
                          marginRight: '46%',
                          marginTop: E / 3,
                        },
                        buttonBackWrapper: {},
                        buttonCloseWrapper: {},
                      },
                      linearGradientColors: [
                        'rgba(0,0,0,0)',
                        'rgba(0,0,0,0.25)',
                      ],
                      isShow: N,
                      testID: 'ChatSpace_modalFrameAwaitView',
                      buttonBackProps: {
                        styleProps: { ButtonYrl: {}, title: {} },
                        titleText: '',
                        testID: 'ModalFrameYrl-buttonBack',
                        disabled: !0,
                        onPress: function () {},
                        iconProps: void 0,
                      },
                      buttonCloseProps: {
                        styleProps: { ButtonYrl: {}, title: {} },
                        titleText: '',
                        testID: 'ModalFrameYrl-buttonClose',
                        disabled: !1,
                        onPress: function () {},
                        iconProps: void 0,
                      },
                      isShowImageBackground: !1,
                      imageBackgroundSource: void 0,
                      isButtonBack: !1,
                      isButtonClose: !1,
                    },
                    modalFrameYrlAnimatedYrlAwaitViewProps: {
                      styleProps: { AnimatedYrl: { height: '100%' } },
                      isActive: !0,
                      valueInit: N ? 0 : 0.5,
                      valueTarget: N ? 0.5 : 0,
                      nameHtmlCssAttribute: 'opacity',
                      duration: 1e3,
                      trigger: N,
                      triggerShouldEqual: !!N,
                      testID: 'ChatSpace_leftColumnIn_animatedYrl_Inner',
                    },
                    chatSpaceJsxAnimatedYrlProps: {
                      isActive: !0,
                      valueInit: N ? 1 : 0,
                      valueTarget: N ? 0 : 1,
                      nameHtmlCssAttribute: 'opacity',
                      duration: 1e3,
                      trigger: N,
                      triggerShouldEqual: !!N,
                      testID: 'chatSpaceJsxAnimatedYrl',
                    },
                    modalFrameYrlAnimatedYrlProps: {
                      styleProps: { AnimatedYrl: {} },
                      isActive: !0,
                      valueInit: N ? 0 : 1,
                      valueTarget: N ? 1 : 0,
                      nameHtmlCssAttribute: 'opacity',
                      duration: 1e3,
                      trigger: N,
                      triggerShouldEqual: !!N,
                      testID: 'ChatSpace_leftColumnIn_animatedYrl_Inner',
                    },
                  },
                  ee = i.default.useRef(null)
                return (0, b.jsx)(o.ScrollView, {
                  style: [h.themes.themeA.colors03],
                  contentContainerStyle: {},
                  ref: ee,
                  nestedScrollEnabled: !0,
                  onContentSizeChange: function (e, t) {
                    var n, i
                    N
                      ? null == (i = ee.current) ||
                        i.scrollTo({ y: 0, animated: !0 })
                      : null == (n = ee.current) ||
                        n.scrollTo({ y: t, animated: !0 })
                  },
                  testID: 'ScrollViewChatSpace',
                  children: (0, b.jsxs)(o.View, {
                    style: [M.ChatSpace, n.ChatSpace],
                    testID: 'ChatSpace',
                    children: [
                      _.length && !N
                        ? (0, b.jsx)(
                            s.AnimatedYrl,
                            Object.assign({}, $.chatSpaceJsxAnimatedYrlProps, {
                              children: (0, b.jsx)(function () {
                                var e,
                                  t = (0, d.getDateLocale)(+new Date())
                                return (0, b.jsx)(o.View, {
                                  style: [
                                    M.ChatSpaceJsx,
                                    h.themes.themeA.colors03,
                                    q,
                                  ],
                                  testID: 'ChatSpaceJsx',
                                  children: (0, b.jsxs)(o.View, {
                                    style: [M.viewPadding],
                                    testID: 'viewPadding',
                                    children: [
                                      (0, b.jsx)(o.View, {
                                        style: M.date,
                                        testID: 'date',
                                        children: (0, b.jsx)(u.Text, {
                                          style: [
                                            M.dateText,
                                            { color: 'grey' },
                                          ],
                                          testID: 'dateText',
                                          children: t,
                                        }),
                                      }),
                                      (0, b.jsx)(o.View, {
                                        style: M.messages,
                                        testID: 'messages',
                                        children:
                                          ((e = J),
                                          e.map(function (e, t) {
                                            var n = e.idMessage,
                                              i = e.text,
                                              o = e.eventType,
                                              s = e.idProfile,
                                              l = (0, v.getProfileByIdProfile)(
                                                B,
                                                s
                                              ).imagePendingSrc,
                                              c = i
                                            if (
                                              o ===
                                                r.MessageEventType
                                                  .joinConversation ||
                                              o ===
                                                r.MessageEventType
                                                  .disconnectConversation
                                            ) {
                                              var d =
                                                  'string' === typeof i
                                                    ? JSON.parse(i)
                                                    : i,
                                                p =
                                                  (null == d
                                                    ? void 0
                                                    : d.idProfile) || '0',
                                                u =
                                                  (null == d
                                                    ? void 0
                                                    : d.text) || '',
                                                m = (0,
                                                v.getProfileByIdProfile)(
                                                  B,
                                                  p
                                                ).profileName,
                                                h = {
                                                  contentType:
                                                    a.ContentType.textArray,
                                                  textArray: [`${m} ${u}`],
                                                }
                                              c = JSON.stringify(h)
                                            }
                                            var f = {
                                              messageProps: Object.assign(
                                                {},
                                                e,
                                                { text: c, imagePendingSrc: l }
                                              ),
                                            }
                                            return (0,
                                            b.jsx)(g.Message, Object.assign({}, f.messageProps), n || `message-${t}`)
                                          })),
                                      }),
                                    ],
                                  }),
                                })
                              }, {}),
                            })
                          )
                        : null,
                      H &&
                        'AwaitView' !== H &&
                        (0, b.jsx)(
                          s.AnimatedYrl,
                          Object.assign({}, $.modalFrameYrlAnimatedYrlProps, {
                            children: (0, b.jsx)(
                              s.ModalFrameYrl,
                              Object.assign({}, $.modalFrameYrlProps, {
                                children:
                                  V && (0, b.jsx)(V, Object.assign({}, G)),
                              })
                            ),
                          })
                        ),
                      N &&
                        H &&
                        'AwaitView' === H &&
                        (0, b.jsx)(
                          s.AnimatedYrl,
                          Object.assign(
                            {},
                            $.modalFrameYrlAnimatedYrlAwaitViewProps,
                            {
                              children: (0, b.jsx)(
                                s.ModalFrameYrl,
                                Object.assign({}, $.modalFrameAwaitViewProps, {
                                  children:
                                    V && (0, b.jsx)(V, Object.assign({}, G)),
                                })
                              ),
                            }
                          )
                        ),
                    ],
                  }),
                })
              })
            )
          )
        )
        t.ChatSpace = T
      },
      71186: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.stylesDefault = t.styles = void 0)
        var i = n(26228),
          o = n(55380),
          a = i.StyleSheet.create({
            ChatSpace: { justifyContent: 'flex-end' },
            ChatSpaceJsx: Object.assign({}, o.styleGlobal.typography, {
              flexDirection: 'column',
              padding: '0.5rem',
              flex: 1,
              justifyContent: 'flex-end',
            }),
            viewPadding: {},
            date: { alignItems: 'center', padding: '1rem' },
            dateText: { width: 'fit-content' },
            messages: { padding: '0.5rem' },
          })
        t.stylesDefault = a
        i.StyleSheet.create(Object.assign({}, a))
        var r = i.StyleSheet.create(Object.assign({}, a)),
          s = {
            xsDevice: r,
            smDevice: r,
            mdDevice: i.StyleSheet.create(
              Object.assign({}, a, {
                viewPadding: Object.assign({}, a.viewPadding, {
                  paddingRight: '10%',
                  paddingLeft: '10%',
                }),
              })
            ),
            lgDevice: i.StyleSheet.create(
              Object.assign({}, a, {
                viewPadding: Object.assign({}, a.viewPadding, {
                  paddingRight: '15%',
                  paddingLeft: '15%',
                }),
              })
            ),
            xlDevice: i.StyleSheet.create(
              Object.assign({}, a, {
                viewPadding: Object.assign({}, a.viewPadding, {
                  paddingRight: '20%',
                  paddingLeft: '20%',
                }),
              })
            ),
          }
        t.styles = s
      },
      16714: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.CompetencyTags = void 0)
        var i = (function (e, t) {
            if (!t && e && e.__esModule) return e
            if (
              null === e ||
              ('object' !== typeof e && 'function' !== typeof e)
            )
              return { default: e }
            var n = g(t)
            if (n && n.has(e)) return n.get(e)
            var i = {},
              o = Object.defineProperty && Object.getOwnPropertyDescriptor
            for (var a in e)
              if (
                'default' !== a &&
                Object.prototype.hasOwnProperty.call(e, a)
              ) {
                var r = o ? Object.getOwnPropertyDescriptor(e, a) : null
                r && (r.get || r.set)
                  ? Object.defineProperty(i, a, r)
                  : (i[a] = e[a])
              }
            ;(i.default = e), n && n.set(e, i)
            return i
          })(n(89526)),
          o = n(26228),
          a = n(5199),
          r = n(14278),
          s = n(98054),
          l = n(65205),
          c = n(30981),
          d = n(9741),
          p = n(81326),
          u = n(1847),
          m = n(67557)
        function g(e) {
          if ('function' !== typeof WeakMap) return null
          var t = new WeakMap(),
            n = new WeakMap()
          return (g = function (e) {
            return e ? n : t
          })(e)
        }
        var h = i.default.memo(
          (0, s.withPropsYrl)({ handleEvents: a.handleEvents })(
            (0, s.withStoreStateYrl)(function (e) {
              var t = e.styleProps,
                n = void 0 === t ? { CompetencyTags: {} } : t,
                a = e.store,
                s = e.handleEvents,
                g = a.globalVars.idProfileActive,
                h = a.componentsState.modalFrame.childName,
                f = a.competencyTags,
                y = a.sectionsMapping
              ;(0, i.useEffect)(function () {
                s.ADD_COMPETENCY_TAGS({}, {})
              }, [])
              var A = (
                  y.find(function (e) {
                    return e.idProfile === g && e.childName === h
                  }) || y[0]
                ).title,
                v = '16' === g ? '1' : g
              console.info('CompetencyTags [33]', {
                idProfileActive2: v,
                childName: h,
                sectionsMapping: y,
              })
              var b,
                S = (0, r.getFilteredObjsArrayBy)(f, 'idProfile', v),
                T = {
                  tagPropertyProps: {},
                  headerProps: {
                    styleProps: {
                      Header: { paddingBottom: '1rem' },
                      headerText: {},
                    },
                    mediaParams: { deviceType: '' },
                    headerText: A,
                  },
                }
              return (0, m.jsxs)(o.View, {
                style: [u.style.CompetencyTags, n.CompetencyTags],
                testID: 'CompetencyTags',
                children: [
                  (0, m.jsx)(c.Header, Object.assign({}, T.headerProps)),
                  ((b = S),
                  (0, l.getSectionsFromTagsCompetencies)(b).map(function (
                    e,
                    t
                  ) {
                    var n,
                      i = b.filter(function (t) {
                        return t.section === e
                      })
                    return (0, m.jsxs)(
                      o.View,
                      {
                        style: [u.style.tagListWrapper],
                        testID: 'tagListWrapper',
                        children: [
                          (0, m.jsx)(d.Text, {
                            style: [u.style.tagSubheading],
                            testID: 'tagSubheadingText',
                            children: `${e}: `,
                          }),
                          ((n = i),
                          n.map(function (e, t) {
                            var n = e.title,
                              i = e.linkHref,
                              o = e.tooltips,
                              a = e.iconLibrary,
                              r = e.iconName,
                              s =
                                (e.iconSize,
                                {
                                  key: `tagProperty-${t}`,
                                  title: n,
                                  linkHref: i,
                                  tooltips: o,
                                  iconLibrary: a,
                                  iconName: r,
                                  testID: 'CompetencyTags_item',
                                })
                            return (0,
                            m.jsx)(p.TagProperty, Object.assign({}, s))
                          })),
                        ],
                      },
                      `competencyTags-${t}`
                    )
                  })),
                ],
              })
            })
          )
        )
        t.CompetencyTags = h
      },
      1847: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.style = void 0)
        var i = n(26228),
          o = n(55380),
          a = i.StyleSheet.create({
            CompetencyTags: Object.assign({}, o.styleGlobal.typography, {
              flex: 1,
              flexDirection: 'column',
              padding: '3rem',
              paddingBottom: '15rem',
            }),
            headerView: {},
            headerText: {
              paddingLeft: '0.5rem',
              fontSize: 20,
              lineHight: '125%',
            },
            tagListWrapper: {
              paddingTop: '1rem',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              alignItems: 'center',
            },
            tagSubheading: { paddingLeft: '0.5rem', fontWeight: 'bold' },
            flatListContentContainerStyle: { flex: 1, flexDirection: 'row' },
            row: { flex: 1, flexDirection: 'column' },
          })
        t.style = a
      },
      16614: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ContentMenuMainColumn = void 0)
        var o = i(n(89526)),
          a = n(26228),
          r = n(20101),
          s = n(98054),
          l = n(45261),
          c = n(44322),
          d = n(5199),
          p = n(26897),
          u = n(67557),
          m = o.default.memo(
            (0, s.withPropsYrl)({ handleEvents: d.handleEvents })(
              (0, s.withStoreStateYrl)(
                (0, s.withParamsMediaYrl)(function (e) {
                  var t,
                    n = e.styleProps,
                    i =
                      void 0 === n
                        ? { ContentMenuMainColumn: {}, buttonWrapper: {} }
                        : n,
                    o = e.store,
                    d = e.handleEvents,
                    m = o.profiles,
                    g = o.sectionsMapping,
                    h = o.componentsState.modalFrame,
                    f = h.childName,
                    y = h.isShow,
                    A = o.globalVars.idProfileActive,
                    v = (0, p.getProfileByIdProfile)(m, A),
                    b = v ? v.profileName : void 0,
                    S = (0, l.getSectionsMappingForProfile)(g, b)
                  return (0, u.jsx)(a.View, {
                    style: [
                      r.style.ContentMenuMainColumn,
                      i.ContentMenuMainColumn,
                    ],
                    testID: 'ContentMenuMainColumn',
                    children:
                      ((t = S),
                      t.map(function (e, t) {
                        var n = e.title,
                          o = e.pathname,
                          l = e.iconLibrary,
                          p = e.iconName,
                          m = e.iconTitleText,
                          g = e.childName,
                          h = {
                            buttonProps: {
                              styleProps: {
                                ButtonYrl: { cursor: 'pointer' },
                                title: { paddingLeft: '0.5rem' },
                              },
                              titleText: m,
                              testID: 'ButtonYrl',
                              disabled: !1,
                              onPress: function (e) {
                                return d.SET_MODAL_FRAME(e, {
                                  childName: g,
                                  isShow: !0,
                                  pathname: o,
                                  childProps: { title: n },
                                })
                              },
                              iconProps: {
                                library: l,
                                name: p,
                                size: 24,
                                color: c.themes.themeA.colors01.color,
                                testID:
                                  'TopBarChatCardsComponent_ButtonYrl_menu',
                              },
                            },
                          },
                          A =
                            f === g && y
                              ? {
                                  backgroundColor:
                                    c.themes.themeA.colors03.backgroundColor,
                                }
                              : {}
                        return (0,
                        u.jsx)(a.View, { style: [r.style.buttonWrapper, i.buttonWrapper, A], testID: 'buttonWrapper', children: (0, u.jsx)(s.ButtonYrl, Object.assign({}, h.buttonProps)) }, `menuContentItem-${t}`)
                      })),
                  })
                })
              )
            )
          )
        t.ContentMenuMainColumn = m
      },
      20101: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.style = void 0)
        var i = n(26228),
          o = n(55380),
          a = i.StyleSheet.create({
            ContentMenuMainColumn: Object.assign({}, o.styleGlobal.typography, {
              flexDirection: 'row',
              height: '2rem',
              alignItems: 'center',
            }),
            buttonWrapper: {
              flex: 1,
              paddingLeft: '0.5rem',
              paddingRight: '0.5rem',
            },
          })
        t.style = a
      },
      80591: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ControlledTooltip = void 0)
        var o = i(n(27424)),
          a = i(n(89526)),
          r = n(66356),
          s = n(26228),
          l = n(67557)
        s.Dimensions.get('window').height
        t.ControlledTooltip = function (e) {
          var t = a.default.useState(!1),
            n = (0, o.default)(t, 2),
            i = n[0],
            s = n[1]
          return (0, l.jsx)(
            r.Tooltip,
            Object.assign(
              {
                visible: i,
                onOpen: function () {
                  s(!0)
                },
                onClose: function () {
                  s(!1)
                },
              },
              e
            )
          )
        }
      },
      30981: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.Header = void 0)
        var o = i(n(89526)),
          a = n(26228),
          r = n(98054),
          s = n(9741),
          l = n(3160),
          c = n(67557),
          d = o.default.memo(
            (0, r.withParamsMediaYrl)(function (e) {
              var t = e.styleProps,
                n = void 0 === t ? { Header: {}, headerText: {} } : t,
                i = e.mediaParams,
                o = void 0 === i ? r.mediaParamsDefault : i,
                d = e.headerText,
                p = o.deviceType,
                u = l.styles[p]
              return (0,
              c.jsx)(a.View, { style: [u.Header, n.Header], testID: 'Header', children: (0, c.jsx)(s.Text, { style: [u.headerText, n.headerText], testID: 'headerText', children: d }) })
            })
          )
        t.Header = d
      },
      3160: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.stylesDefault = t.styles = void 0)
        var i = n(26228),
          o = n(55380),
          a = i.StyleSheet.create({
            Header: Object.assign({}, o.styleGlobal.typography),
            headerText: Object.assign({}, o.styleGlobal.h2, {
              paddingLeft: '0.5rem',
              paddingRight: '0.5rem',
              lineHight: '125%',
            }),
          })
        t.stylesDefault = a
        var r = i.StyleSheet.create(Object.assign({}, a)),
          s = i.StyleSheet.create(Object.assign({}, r)),
          l = {
            xsDevice: s,
            smDevice: s,
            mdDevice: i.StyleSheet.create(Object.assign({}, r)),
            lgDevice: i.StyleSheet.create(Object.assign({}, r)),
            xlDevice: i.StyleSheet.create(Object.assign({}, r)),
          }
        t.styles = l
      },
      6870: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.Message = void 0)
        var o = i(n(89526)),
          a = n(26228),
          r = i(n(87322)),
          s = n(98054),
          l = n(9741),
          c = n(93697),
          d = n(44322),
          p = n(18761),
          u = n(27473),
          m = n(67557),
          g = o.default.memo(function (e) {
            e.idMessage, e.idProfile, e.eventType
            var t = e.text,
              n = e.createdAt,
              i = e.position,
              o = void 0 === i ? 'right' : i,
              g = e.isTail,
              h = void 0 !== g && g,
              f =
                (e.image,
                e.video,
                e.audio,
                e.isSystem,
                e.isSent,
                e.isReceived,
                e.isPending),
              y = e.imagePendingSrc,
              A = (0, r.default)(n).locale(u.LOCALE).format(u.TIME_FORMAT),
              v = JSON.parse(t),
              b = v.contentType,
              S = h ? {} : c.styles.roundAllCorners.style,
              T = null,
              w = {}
            'textArray' === b
              ? (T = v[b].map(function (e, t) {
                  return (0,
                  m.jsx)(l.Text, { style: [c.styles[o].text], testID: 'textItem', children: e }, `textItem-${t}`)
                }))
              : 'imageArray' === b &&
                ((T = v[b].map(function (e, t) {
                  var n = {
                    messageImageYrlProps: {
                      key: `messageImageYrl-${t}`,
                      styleProps: {
                        ImageYrl: { paddingRight: '0.5rem' },
                        image: { height: '15vw', width: '15vw' },
                      },
                      testID: 'messageImageYrl',
                      uri: e,
                      resizeMode: 'cover',
                    },
                  }
                  return (0,
                  m.jsx)(s.ImageYrl, Object.assign({}, n.messageImageYrlProps))
                })),
                (w = { maxWidth: '100%' }))
            var P = {
              pendingImageYrlProps: {
                styleProps: {
                  ImageYrl: { paddingRight: '0.5rem' },
                  image: { height: '4rem', width: '4rem' },
                },
                testID: 'pendingImageYrl',
                uri: y,
                resizeMode: 'cover',
              },
              triangleCorner: {
                isShow: !!h,
                styleProps: { borderColor: d.themes.themeA.colors06 },
              },
            }
            return (0,
            m.jsxs)(a.View, { style: [c.styles[o].Message], testID: 'Message', children: [(0, m.jsx)(p.TriangleCorner, Object.assign({}, P.triangleCorner)), (0, m.jsxs)(a.View, { style: [c.styles[o].content, d.themes.themeA.colors01, S, w], testID: 'content', children: [(0, m.jsxs)(a.View, { style: [c.styles[o].messageWrapper], testID: 'messageWrapper', children: [f && (0, m.jsx)(s.ImageYrl, Object.assign({}, P.pendingImageYrlProps)), (0, m.jsx)(l.Text, { style: [c.styles[o].text], testID: 'text', children: T })] }), (0, m.jsx)(l.Text, { style: [c.styles[o].dateString, { color: 'grey' }], testID: 'dateString', children: A })] })] })
          })
        t.Message = g
      },
      93697: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.styles = void 0)
        var i = n(26228),
          o = n(55380),
          a = i.StyleSheet.create({
            MessageCommon: Object.assign({}, o.styleGlobal.typography, {
              flexDirection: 'row',
              alignItems: 'flex-end',
              marginBottom: '0.5rem',
            }),
            contentCommon: {
              width: 'fit-content',
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              borderBottomRightRadius: 15,
              padding: '1rem',
              maxWidth: '75%',
            },
            messageWrapperCommon: {
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              paddingBottom: '0.25rem',
            },
            textCommon: {},
            dateStringCommon: { display: 'flex', justifyContent: 'flex-end' },
          }),
          r = {
            left: i.StyleSheet.create({
              Message: Object.assign({}, a.MessageCommon, {
                justifyContent: 'flex-start',
                marginLeft: 8,
                marginRight: 0,
              }),
              content: a.contentCommon,
              messageWrapper: a.messageWrapperCommon,
              text: a.textCommon,
              dateString: a.dateStringCommon,
            }),
            right: i.StyleSheet.create({
              Message: Object.assign({}, a.MessageCommon, {
                justifyContent: 'flex-end',
                marginLeft: 0,
                marginRight: 8,
              }),
              content: a.contentCommon,
              messageWrapper: a.messageWrapperCommon,
              text: a.textCommon,
              dateString: a.dateStringCommon,
            }),
            roundAllCorners: i.StyleSheet.create({
              style: {
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                borderBottomRightRadius: 15,
                borderBottomLeftRadius: 15,
              },
            }),
          }
        t.styles = r
      },
      68643: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.NameStatus = void 0)
        var o = i(n(89526)),
          a = n(26228),
          r = n(9741),
          s = n(95964),
          l = n(67557),
          c = o.default.memo(function (e) {
            var t = e.styleProps,
              n = void 0 === t ? { NameStatus: {}, viewStyle: {} } : t,
              i = e.profile,
              o = e.status,
              c = i.nameFirst,
              d = i.nameLast
            return (0,
            l.jsxs)(a.View, { style: [s.style.NameStatus, n.NameStatus], testID: 'NameStatus', children: [(0, l.jsx)(r.Text, { style: [s.style.name, n.viewStyle], numberOfLines: 1, adjustsFontSizeToFit: !0, testID: 'name', children: `${c} ${d}` }), (0, l.jsx)(r.Text, { style: [s.style.status, n.viewStyle], numberOfLines: 1, adjustsFontSizeToFit: !0, testID: 'status', children: o })] })
          })
        t.NameStatus = c
      },
      95964: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.style = void 0)
        var i = n(26228),
          o = n(55380),
          a = i.StyleSheet.create({
            NameStatus: Object.assign({}, o.styleGlobal.typography, {
              paddingLeft: '1rem',
            }),
            name: { fontWeight: '600', fontSize: 16 },
            status: { fontSize: 14, alignSelf: 'flex-end' },
          })
        t.style = a
      },
      91555: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.Portfolio = void 0)
        var i = (function (e, t) {
            if (!t && e && e.__esModule) return e
            if (
              null === e ||
              ('object' !== typeof e && 'function' !== typeof e)
            )
              return { default: e }
            var n = m(t)
            if (n && n.has(e)) return n.get(e)
            var i = {},
              o = Object.defineProperty && Object.getOwnPropertyDescriptor
            for (var a in e)
              if (
                'default' !== a &&
                Object.prototype.hasOwnProperty.call(e, a)
              ) {
                var r = o ? Object.getOwnPropertyDescriptor(e, a) : null
                r && (r.get || r.set)
                  ? Object.defineProperty(i, a, r)
                  : (i[a] = e[a])
              }
            ;(i.default = e), n && n.set(e, i)
            return i
          })(n(89526)),
          o = n(26228),
          a = n(5199),
          r = n(98054),
          s = n(21069),
          l = n(14278),
          c = n(30981),
          d = n(26770),
          p = n(81885),
          u = n(67557)
        function m(e) {
          if ('function' !== typeof WeakMap) return null
          var t = new WeakMap(),
            n = new WeakMap()
          return (m = function (e) {
            return e ? n : t
          })(e)
        }
        var g = i.default.memo(
          (0, r.withPropsYrl)({ handleEvents: a.handleEvents })(
            (0, r.withStoreStateYrl)(
              (0, r.withParamsMediaYrl)(
                (0, r.withElementDimensionsYrl)(function (e) {
                  var t = e.styleProps,
                    n = void 0 === t ? { Portfolio: {} } : t,
                    a = e.mediaParams,
                    m = void 0 === a ? r.mediaParamsDefault : a,
                    g = e.store,
                    h = e.elementDimensions.elementWidth,
                    f = e.handleEvents,
                    y = m.deviceType,
                    A = p.styles[y],
                    v = g.globalVars.idProfileActive,
                    b = g.projects
                  ;(0, i.useEffect)(function () {
                    f.ADD_PROJECTS({}, {})
                  }, [])
                  var S = (0, l.getFilteredObjsArrayBy)(b, 'idProfile', v),
                    T = (0, d.getImageSizesFor1of2Columns)(
                      h < 1024 ? 'xsSmMd' : 'lgXl',
                      h
                    ),
                    w = T.imageWidth,
                    P = T.imageHeight
                  return (0, u.jsxs)(o.View, {
                    style: [A.Portfolio, n.Portfolio],
                    testID: 'Portfolio',
                    children: [
                      (0, u.jsx)(
                        c.Header,
                        Object.assign(
                          {},
                          {
                            styleProps: {
                              Header: { paddingBottom: '1.5rem' },
                              headerText: {},
                            },
                            mediaParams: { deviceType: '' },
                            headerText: 'Projects & Examples',
                          }
                        )
                      ),
                      (function (e) {
                        return e
                          .filter(function (e) {
                            return !0 === e.isActive
                          })
                          .map(function (e, t) {
                            var n = {
                              projectViewProps: {
                                key: `ProjectView-${t}`,
                                title: e.title,
                                isActive: e.isActive,
                                pathname: e.pathname,
                                subtitle: e.subtitle,
                                description: e.description,
                                customer: e.customer,
                                builtwith: e.builtwith,
                                imgSrc: e.imgSrc,
                                linkHref: e.linkHref,
                                index: t,
                                imageWidth: w,
                                imageHeight: P,
                                elementWidth: h,
                              },
                            }
                            return (0,
                            u.jsx)(s.ProjectView, Object.assign({}, n.projectViewProps))
                          })
                      })(S),
                    ],
                  })
                })
              )
            )
          )
        )
        t.Portfolio = g
      },
      81885: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.styles = void 0)
        var i = n(26228),
          o = n(55380),
          a = {
            Portfolio: Object.assign({}, o.styleGlobal.typography, {
              flex: 1,
              flexDirection: 'column',
              padding: '3rem',
            }),
            buttonImageView: { paddingTop: '0.5rem' },
            imageView: {},
            rowStyle: { flexDirection: 'column', padding: '0.5rem' },
            column1Style: { flex: 1 },
            column2Style: { flex: 5 },
            titleView: {},
            titleText: Object.assign({}, o.styleGlobal.h3),
            subtitleView: {},
            subtitleTextName: { paddingRight: '0.5rem', fontWeight: 'bold' },
            subtitleText: {},
            descriptionView: {},
            descriptionTextName: { paddingRight: '0.5rem', fontWeight: 'bold' },
            descriptionText: {},
            customerView: {},
            customerTextName: { paddingRight: '0.5rem', fontWeight: 'bold' },
            customerText: {},
            builtwithView: {},
            builtwithTextName: { paddingRight: '0.5rem', fontWeight: 'bold' },
            builtwithText: {},
          },
          r = i.StyleSheet.create(
            Object.assign({}, a, {
              projectView: { flexDirection: 'column', paddingBottom: '2rem' },
              projectProfileView: { flex: 1, paddingBottom: '1rem' },
            })
          ),
          s = i.StyleSheet.create(Object.assign({}, r)),
          l = i.StyleSheet.create(Object.assign({}, r)),
          c = i.StyleSheet.create(
            Object.assign({}, a, {
              projectView: { flexDirection: 'row', paddingBottom: '2rem' },
              projectProfileView: { flex: 1, paddingLeft: '1rem' },
              rowStyle: Object.assign({}, a.rowStyle, { flexDirection: 'row' }),
            })
          ),
          d = {
            xsDevice: s,
            smDevice: s,
            mdDevice: l,
            lgDevice: c,
            xlDevice: i.StyleSheet.create(Object.assign({}, c)),
          }
        t.styles = d
      },
      15566: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.Profile = void 0)
        var o = i(n(861)),
          a = i(n(89526)),
          r = n(26228),
          s = n(98054),
          l = n(14278),
          c = n(30842),
          d = n(12878),
          p = n(97406),
          u = n(71744),
          m = n(86747),
          g = n(67557),
          h = a.default.memo(
            (0, s.withStoreStateYrl)(
              (0, s.withParamsMediaYrl)(function (e) {
                var t,
                  n = e.styleProps,
                  i = void 0 === n ? { Profile: {} } : n,
                  a = e.mediaParams,
                  h = void 0 === a ? s.mediaParamsDefault : a,
                  f = e.store,
                  y = h.deviceType,
                  A = d.styles[y],
                  v = f.globalVars.idProfileActive,
                  b = (0, l.getFilteredObjsArrayBy)(
                    m.profiles,
                    'idProfile',
                    v
                  )[0],
                  S = (function (e, t, n, i) {
                    var a = e.profileName,
                      r = void 0 === a ? '' : a,
                      l = e.phones,
                      c = void 0 === l ? [] : l,
                      d = e.emails,
                      u = void 0 === d ? [] : d,
                      m = e.messengers,
                      g = void 0 === m ? [] : m,
                      h = e.locations,
                      f = void 0 === h ? [] : h,
                      y = e.summary,
                      A = e.disclaimer,
                      v = e.serviceSpecs,
                      b = void 0 === v ? [] : v
                    return [
                      {
                        iconLibrary: 'Ionicons',
                        iconName: 'checkmark-outline',
                        contentType: 'string',
                        content: b.join(', '),
                        label: 'Service specs',
                        isActive: !(
                          !b.length ||
                          (i !== s.DeviceType.xsDevice &&
                            i !== s.DeviceType.smDevice)
                        ),
                      },
                      {
                        iconLibrary: 'Ionicons',
                        iconName: 'albums-outline',
                        contentType: 'string',
                        content: y,
                        label: 'Summary',
                        isActive: !!y,
                      },
                      {
                        iconLibrary: 'Ionicons',
                        iconName: 'alert-circle-outline',
                        contentType: 'string',
                        content: A,
                        label: 'Disclaimer',
                        isActive: !!A,
                      },
                      {
                        iconLibrary: 'Ionicons',
                        iconName: 'at',
                        content: r.toString(),
                        label: 'Username',
                        isActive: !!r,
                      },
                      {
                        iconLibrary: 'Ionicons',
                        iconName: 'location-outline',
                        content: f.join(', '),
                        label: 'Locations',
                        isActive: !!f.length,
                      },
                      {
                        iconLibrary: 'Ionicons',
                        iconName: 'chatbox-ellipses-outline',
                        content: (0, p.getMessengesString)(g, n),
                        label: 'Messengers',
                        isActive: !!g.length,
                      },
                      {
                        iconLibrary: 'Ionicons',
                        iconName: 'call-outline',
                        content: c.join(', '),
                        label: 'Phones',
                        isActive: !!c.length,
                      },
                      {
                        iconLibrary: 'Ionicons',
                        iconName: 'mail-outline',
                        content: u.join(', '),
                        label: 'Email',
                        isActive: !!u.length,
                      },
                    ].concat((0, o.default)(t))
                  })(
                    b,
                    (0, l.getFilteredObjsArrayBy)(u.links, 'idProfile', v),
                    A,
                    y
                  ).filter(function (e) {
                    return !0 === e.isActive
                  }),
                  T = {
                    imageYrlProps: {
                      styleProps: { ImageYrl: A.ImageYrl, image: A.image },
                      resizeMode: 'cover',
                      testID: 'profile_imageYrl',
                      uri: b.avatarSrc,
                    },
                  }
                return (0, g.jsxs)(r.View, {
                  style: [A.Profile, i.Profile],
                  testID: 'Profile',
                  children: [
                    b.avatarSrc
                      ? (0, g.jsx)(r.View, {
                          style: [A.imageWrapper],
                          testID: 'imageWrapper',
                          children: (0, g.jsx)(
                            s.ImageYrl,
                            Object.assign({}, T.imageYrlProps)
                          ),
                        })
                      : null,
                    (0, g.jsx)(r.View, {
                      style: [A.profileItemsWrapper],
                      testID: 'profileItemsWrapper',
                      children:
                        ((t = S),
                        t.map(function (e, t) {
                          return (0,
                          g.jsx)(c.ProfileItem, Object.assign({}, e), `profileItem-${t}`)
                        })),
                    }),
                  ],
                })
              })
            )
          )
        t.Profile = h
      },
      12878: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.stylesDefault = t.styles = void 0)
        var i = n(26228),
          o = n(55380),
          a = i.StyleSheet.create({
            Profile: Object.assign({}, o.styleGlobal.typography, {
              flex: 1,
              flexDirection: 'column',
              padding: '3rem',
            }),
            imageWrapper: { alignItems: 'center', paddingBottom: '2rem' },
            profileItemsWrapper: {},
            qrCodeImageWrapper: {},
            rowView: { flexDirection: 'row', flex: 1, padding: '0.5rem' },
            column1: { paddingRight: '1rem' },
            column2: { flex: 1 },
            content: {},
            label: { fontSize: 13, paddingTop: '0.25rem' },
            image: { width: 150, height: 150, borderRadius: 75 },
            messengerView: { flexDirection: 'row' },
            messengerNameText: {},
            profilenameText: {},
          })
        t.stylesDefault = a
        var r = i.StyleSheet.create(Object.assign({}, a)),
          s = i.StyleSheet.create(Object.assign({}, r)),
          l = {
            xsDevice: s,
            smDevice: s,
            mdDevice: i.StyleSheet.create(Object.assign({}, r)),
            lgDevice: i.StyleSheet.create(Object.assign({}, r)),
            xlDevice: i.StyleSheet.create(Object.assign({}, r)),
          }
        t.styles = l
      },
      30842: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ProfileItem = void 0)
        var o = i(n(89526)),
          a = n(26228),
          r = n(98054),
          s = n(9741),
          l = n(3538),
          c = n(44322),
          d = n(67557),
          p = o.default.memo(function (e) {
            e.styleProps
            var t = e.iconLibrary,
              n = e.iconName,
              i = e.contentType,
              o = e.contentSrc,
              p = e.content,
              u = e.label,
              m = {
                iconPhoneProps: {
                  library: t,
                  name: n,
                  styleProps: { IconYrl: { cursor: 'pointer' } },
                  size: 24,
                  color: c.themes.themeA.colors01.color,
                  testID: `${u.toLowerCase()}_IconYrl_ios_send`,
                },
              },
              g = p
            return (
              'imageSrc' === i && 'string' === typeof p
                ? (g = (0, d.jsx)(
                    function (e) {
                      var t = e.contentSrc,
                        n = {
                          qrCodeImageProps: {
                            styleProps: {
                              ImageYrl: {},
                              image: { width: '12rem', height: '12rem' },
                            },
                            testID: 'ImageYrl',
                            uri: t,
                            resizeMode: 'cover',
                          },
                        }
                      return (0, d.jsx)(
                        r.ImageYrl,
                        Object.assign({}, n.qrCodeImageProps)
                      )
                    },
                    { contentSrc: o }
                  ))
                : 'linkHref' === i &&
                  'string' === typeof p &&
                  (g = (0, d.jsx)(
                    function (e) {
                      var t = e.contentSrc,
                        n = e.content,
                        i = {
                          qrCodeImageProps: {
                            styleProps: {
                              ButtonYrl: {},
                              title: {
                                color: c.themes.themeA.colors08.color,
                                textDecoration: 'underline',
                              },
                            },
                            titleText: n,
                            testID: 'tooltip_buttonYrl',
                            disabled: !1,
                            onPress: (0, r.useLinkClickResYrl)(t),
                            iconProps: void 0,
                          },
                        }
                      return (0, d.jsx)(
                        r.ButtonYrl,
                        Object.assign({}, i.qrCodeImageProps)
                      )
                    },
                    { contentSrc: o, content: p }
                  )),
              (0, d.jsxs)(a.View, {
                style: [l.style.rowView],
                testID: 'rowView',
                children: [
                  (0, d.jsx)(a.View, {
                    style: [l.style.column1],
                    testID: 'column1',
                    children:
                      t &&
                      n &&
                      (0, d.jsx)(
                        r.IconYrl,
                        Object.assign({}, m.iconPhoneProps)
                      ),
                  }),
                  (0, d.jsxs)(a.View, {
                    style: [l.style.column2],
                    testID: 'column2',
                    children: [
                      (0, d.jsx)(s.Text, {
                        style: [l.style.content],
                        children: g,
                      }),
                      (0, d.jsx)(s.Text, {
                        style: [
                          l.style.label,
                          { color: c.themes.themeA.colors05.color },
                        ],
                        children: u,
                      }),
                    ],
                  }),
                ],
              })
            )
          })
        t.ProfileItem = p
      },
      3538: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.style = void 0)
        var i = n(26228),
          o = n(55380),
          a = i.StyleSheet.create({
            ProfileItem: Object.assign({}, o.styleGlobal.typography, {
              paddingLeft: '1rem',
            }),
            rowView: { flexDirection: 'row', flex: 1, padding: '0.5rem' },
            column1: { minWidth: '2.5rem', paddingRight: '1rem' },
            column2: { flex: 1 },
            content: {},
            label: { fontSize: 13, paddingTop: '0.25rem' },
            messengerView: { flexDirection: 'row' },
            messengerNameText: {},
            profilenameText: {},
          })
        t.style = a
      },
      29266: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ProfileSelectMenu = void 0)
        var o = i(n(89526)),
          a = n(26228),
          r = n(98054),
          s = n(68643),
          l = n(7248),
          c = n(45447),
          d = n(44322),
          p = n(5199),
          u = n(67557),
          m = o.default.memo(
            (0, r.withPropsYrl)({ handleEvents: p.handleEvents })(
              (0, r.withParamsMediaYrl)(function (e) {
                var t,
                  n = e.styleProps,
                  i = void 0 === n ? { ProfileSelectMenu: {} } : n,
                  o = e.mediaParams,
                  p = void 0 === o ? r.mediaParamsDefault : o,
                  m = e.handleEvents,
                  g = e.profiles,
                  h = e.idUserHost,
                  f = e.urlParam1,
                  y = e.urlParam2,
                  A = e.query,
                  v = p.deviceType,
                  b = (p.screenCase, p.width, p.height, c.styles[v]),
                  S = g.filter(function (e) {
                    return e.idUser === h
                  })
                return (0, u.jsx)(a.View, {
                  style: [b.ProfileSelectMenu, i.ProfileSelectMenu],
                  testID: 'ProfileSelectMenu',
                  children:
                    ((t = S),
                    t.map(function (e, t) {
                      var n = e.idProfile,
                        i = e.profileName,
                        o = {
                          avatarPlusInfoProps: {
                            key: `userHostAvatarPlusInfo-${t}`,
                            styleProps: {
                              AvatarPlusInfo: { paddingBottom: '0.5rem' },
                            },
                            profile: e,
                            onPress: function () {
                              return m.CLICK_ON_HOST_PROFILE_SELECT(
                                {},
                                {
                                  idProfileHost: n,
                                  profileNameHost: i,
                                  urlParam1: f,
                                  urlParam2: y,
                                  query: A,
                                }
                              )
                            },
                            testID: 'userHostAvatarPlusInfo',
                          },
                          nameStatusProps: {
                            styleProps: {
                              NameStatus: {},
                              viewStyle: d.themes.themeA.colors01,
                            },
                            profile: e,
                            status: '',
                          },
                        }
                      return (0,
                      u.jsx)(l.AvatarPlusInfo, Object.assign({}, o.avatarPlusInfoProps, { children: (0, u.jsx)(s.NameStatus, Object.assign({}, o.nameStatusProps)) }))
                    })),
                })
              })
            )
          )
        t.ProfileSelectMenu = m
      },
      45447: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.stylesDefault = t.styles = void 0)
        var i = n(26228),
          o = n(55380),
          a = i.StyleSheet.create({
            ProfileSelectMenu: Object.assign({}, o.styleGlobal.typography, {
              flexDirection: 'column',
              alignItems: 'flex-start',
              paddingTop: '1rem',
              paddingBottom: '0.5rem',
            }),
          })
        t.stylesDefault = a
        i.StyleSheet.create(Object.assign({}, a))
        var r = i.StyleSheet.create(Object.assign({}, a)),
          s = {
            xsDevice: r,
            smDevice: r,
            mdDevice: i.StyleSheet.create(Object.assign({}, a)),
            lgDevice: i.StyleSheet.create(Object.assign({}, a)),
            xlDevice: i.StyleSheet.create(Object.assign({}, a)),
          }
        t.styles = s
      },
      92818: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ProjectInfoView = void 0)
        var o = i(n(89526)),
          a = n(26228),
          r = n(98054),
          s = n(9741),
          l = n(62634),
          c = n(67557),
          d = o.default.memo(
            (0, r.withParamsMediaYrl)(function (e) {
              e.styleProps
              var t = e.mediaParams,
                n = void 0 === t ? r.mediaParamsDefault : t,
                i = e.title,
                o = e.subtitle,
                d = e.description,
                p = e.customer,
                u = e.builtwith,
                m = n.deviceType,
                g = (n.screenCase, n.width, n.height, l.styles[m]),
                h = function (e) {
                  return 'string' === typeof e
                    ? e
                    : (0, c.jsx)(a.View, {
                        children: e.map(function (e, t) {
                          var n = {}
                          return (
                            t > 0 && (n = { paddingTop: '0.5rem' }),
                            (0, c.jsx)(
                              s.Text,
                              { style: [n], children: e },
                              `descriptionLine-${t}`
                            )
                          )
                        }),
                      })
                }
              return (0,
              c.jsxs)(a.View, { style: [g.ProjectInfoView], testID: 'ProjectInfoView', children: [(0, c.jsx)(a.View, { style: [g.titleView, g.rowStyle], testID: 'titleView', children: (0, c.jsx)(s.Text, { style: [g.titleText], testID: 'titleText', children: h(i) }) }), (0, c.jsxs)(a.View, { style: [g.subtitleView, g.rowStyle], testID: 'subtitleView', children: [(0, c.jsx)(s.Text, { style: [g.subtitleTextName, g.column1Style], testID: 'subtitleTextName', children: 'Subtitle:' }), (0, c.jsx)(s.Text, { style: [g.subtitleText, g.column2Style], testID: 'subtitleTex', children: h(o) })] }), (0, c.jsxs)(a.View, { style: [g.descriptionView, g.rowStyle], testID: 'descriptionView', children: [(0, c.jsx)(s.Text, { style: [g.descriptionTextName, g.column1Style], testID: 'subtitleTextName', children: 'Description:' }), (0, c.jsx)(s.Text, { style: [g.descriptionText, g.column2Style], testID: 'descriptionText', children: h(d) })] }), (0, c.jsxs)(a.View, { style: [g.customerView, g.rowStyle], testID: 'customerView', children: [(0, c.jsx)(s.Text, { style: [g.customerTextName, g.column1Style], testID: 'customerTextName', children: 'Industry:' }), (0, c.jsx)(s.Text, { style: [g.customerText, g.column2Style], testID: 'customerText', children: h(p) })] }), (0, c.jsxs)(a.View, { style: [g.builtwithView, g.rowStyle], testID: 'builtwithView', children: [(0, c.jsx)(s.Text, { style: [g.builtwithTextName, g.column1Style], testID: 'subtitleTextName', children: 'Built with:' }), (0, c.jsx)(s.Text, { style: [g.builtwithText, g.column2Style], testID: 'builtwithText', children: h(u) })] })] })
            })
          )
        t.ProjectInfoView = d
      },
      62634: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.styles = void 0)
        var i = n(26228),
          o = n(55380),
          a = {
            Portfolio: Object.assign({}, o.styleGlobal.typography, {
              flex: 1,
              flexDirection: 'column',
              padding: '3rem',
            }),
            buttonImageView: { paddingTop: '0.5rem' },
            imageView: {},
            rowStyle: { flexDirection: 'column', padding: '0.5rem' },
            column1Style: { flex: 1 },
            column2Style: { flex: 5 },
            titleView: {},
            titleText: Object.assign({}, o.styleGlobal.h3),
            subtitleView: {},
            subtitleTextName: { paddingRight: '0.5rem', fontWeight: 'bold' },
            subtitleText: {},
            descriptionView: {},
            descriptionTextName: { paddingRight: '0.5rem', fontWeight: 'bold' },
            descriptionText: {},
            customerView: {},
            customerTextName: { paddingRight: '0.5rem', fontWeight: 'bold' },
            customerText: {},
            builtwithView: {},
            builtwithTextName: { paddingRight: '0.5rem', fontWeight: 'bold' },
            builtwithText: {},
          },
          r = i.StyleSheet.create(
            Object.assign({}, a, {
              projectView: { flexDirection: 'column', paddingBottom: '2rem' },
              ProjectInfoView: { flex: 1, paddingBottom: '1rem' },
            })
          ),
          s = i.StyleSheet.create(Object.assign({}, r)),
          l = i.StyleSheet.create(Object.assign({}, r)),
          c = i.StyleSheet.create(
            Object.assign({}, a, {
              projectView: { flexDirection: 'row', paddingBottom: '2rem' },
              ProjectInfoView: { flex: 1, paddingLeft: '2rem' },
              rowStyle: Object.assign({}, a.rowStyle, { flexDirection: 'row' }),
            })
          ),
          d = {
            xsDevice: s,
            smDevice: s,
            mdDevice: l,
            lgDevice: c,
            xlDevice: i.StyleSheet.create(Object.assign({}, c)),
          }
        t.styles = d
      },
      21069: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ProjectView = void 0)
        var o = i(n(89526)),
          a = n(26228),
          r = n(98054),
          s = n(92818),
          l = n(35285),
          c = n(67557),
          d = o.default.memo(
            (0, r.withParamsMediaYrl)(function (e) {
              var t = e.styleProps,
                n = void 0 === t ? { ProjectView: {} } : t,
                i = e.mediaParams,
                o = void 0 === i ? r.mediaParamsDefault : i,
                d = e.title,
                p = e.subtitle,
                u = e.description,
                m = e.customer,
                g = e.builtwith,
                h = e.imgSrc,
                f = e.linkHref,
                y = e.imageWidth,
                A = e.imageHeight,
                v = e.index,
                b = e.elementWidth,
                S = o.deviceType,
                T = (o.screenCase, l.styles[S]),
                w = {
                  projectButtonYrl: {
                    styleProps: {
                      ButtonYrl: { justifyContent: 'flex-start' },
                      title: {},
                    },
                    titleText: '',
                    testID: 'projectButtonYrl',
                    disabled: !1,
                    onPress: (0, r.useLinkClickResYrl)(f),
                  },
                  projectImageYrlProps: {
                    styleProps: {
                      ImageYrl: {},
                      image: { borderRadius: 3, width: y, height: A },
                    },
                    testID: `projectImageYrl-${v}`,
                    uri: h,
                    resizeMode: 'cover',
                  },
                  projectInfoViewProps: {
                    title: d,
                    subtitle: p,
                    description: u,
                    customer: m,
                    builtwith: g,
                  },
                },
                P = b < 1024 ? 'xsSmMd' : 'lgXl',
                I = b < 1024 ? { flexDirection: 'column' } : {}
              return (0,
              c.jsxs)(a.View, { style: [T.ProjectView, n.ProjectView, I], testID: 'ProjectView', children: ['xsSmMd' === P && (0, c.jsx)(s.ProjectInfoView, Object.assign({}, w.projectInfoViewProps)), (0, c.jsx)(a.View, { style: [T.buttonImageView], testID: 'buttonImageView', children: (0, c.jsx)(r.ButtonYrl, Object.assign({}, w.projectButtonYrl, { children: (0, c.jsx)(a.View, { style: [T.imageView], testID: 'imageView', children: (0, c.jsx)(r.ImageYrl, Object.assign({}, w.projectImageYrlProps)) }) })) }), 'lgXl' === P && (0, c.jsx)(s.ProjectInfoView, Object.assign({}, w.projectInfoViewProps))] })
            })
          )
        t.ProjectView = d
      },
      35285: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.styles = void 0)
        var i = n(26228),
          o = n(55380),
          a = {
            ProjectView: Object.assign({}, o.styleGlobal.typography),
            buttonImageView: { paddingTop: '0.5rem' },
            imageView: {},
            rowStyle: { flexDirection: 'column', padding: '0.5rem' },
            column1Style: { flex: 1 },
            column2Style: { flex: 5 },
            titleView: {},
            titleText: Object.assign({}, o.styleGlobal.h3),
            subtitleView: {},
            subtitleTextName: { paddingRight: '0.5rem', fontWeight: 'bold' },
            subtitleText: {},
            descriptionView: {},
            descriptionTextName: { paddingRight: '0.5rem', fontWeight: 'bold' },
            descriptionText: {},
            customerView: {},
            customerTextName: { paddingRight: '0.5rem', fontWeight: 'bold' },
            customerText: {},
            builtwithView: {},
            builtwithTextName: { paddingRight: '0.5rem', fontWeight: 'bold' },
            builtwithText: {},
          },
          r = i.StyleSheet.create(
            Object.assign({}, a, {
              ProjectView: { flexDirection: 'column', paddingBottom: '2.2rem' },
              projectProfileView: { flex: 1, paddingBottom: '1rem' },
            })
          ),
          s = i.StyleSheet.create(Object.assign({}, r)),
          l = i.StyleSheet.create(Object.assign({}, r)),
          c = i.StyleSheet.create(
            Object.assign({}, a, {
              ProjectView: { flexDirection: 'row', paddingBottom: '2rem' },
              projectProfileView: { flex: 1, paddingLeft: '1rem' },
              rowStyle: Object.assign({}, a.rowStyle, { flexDirection: 'row' }),
            })
          ),
          d = {
            xsDevice: s,
            smDevice: s,
            mdDevice: l,
            lgDevice: c,
            xlDevice: i.StyleSheet.create(Object.assign({}, c)),
          }
        t.styles = d
      },
      81326: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.TagProperty = void 0)
        var o = i(n(89526)),
          a = n(26228),
          r = n(66356),
          s = n(9741),
          l = n(98054),
          c = n(98054),
          d = n(80591),
          p = n(97817),
          u = n(44322),
          m = n(67557),
          g = o.default.memo(function (e) {
            var t = e.styleProps,
              n = void 0 === t ? { TagProperty: {} } : t,
              i = (e.id, e.title),
              o = e.linkHref,
              g = e.tooltips,
              h = e.iconLibrary,
              f = e.iconName,
              y = e.testID,
              A = void 0 === y ? 'TagProperty' : y,
              v = {
                tooltip_buttonYrlLinking: {
                  styleProps: {
                    ButtonYrl: {},
                    title: {
                      color: u.themes.themeA.colors08.color,
                      textDecoration: 'underline',
                      paddingBottom: '0.5rem',
                    },
                  },
                  titleText: `<${i} />`,
                  testID: 'tooltip_buttonYrl',
                  disabled: !1,
                  onPress: (0, c.useLinkClickResYrl)(o),
                  iconProps: {
                    library: h,
                    name: f,
                    styleProps: {
                      IconYrl: {
                        cursor: 'pointer',
                        paddingRight: '0.25rem',
                        paddingBottom: '0.25rem',
                      },
                    },
                    size: 16,
                    color: u.themes.themeA.colors02.color,
                    testID: '<entity>_IconYrl_ios_send',
                  },
                },
                iconProps: {
                  library: h,
                  name: f,
                  styleProps: {
                    IconYrl: { cursor: 'pointer', paddingRight: '0.25rem' },
                  },
                  size: 24,
                  color: u.themes.themeA.colors02.color,
                  testID: '<entity>_IconYrl_ios_send',
                },
              }
            return (0, m.jsx)(a.View, {
              style: [p.style.TagProperty, n.TagProperty],
              testID: A,
              children: (0, m.jsx)(d.ControlledTooltip, {
                ModalComponent: a.Modal,
                backgroundColor: u.themes.themeA.colors09.backgroundColor,
                popover: (0, m.jsx)(function () {
                  return (0,
                  m.jsx)(a.View, { style: [p.style.tooltip_containerView], testID: 'tooltip_containerView', children: (0, m.jsxs)(a.ScrollView, { style: [p.style.tooltip_scrollView], testID: 'tooltip_scrollView', children: [(0, m.jsx)(c.ButtonYrl, Object.assign({}, v.tooltip_buttonYrlLinking)), (0, m.jsx)(r.Text, { style: [p.style.tooltip_textRrneui], testID: 'tooltip_textRrneui', children: g })] }) })
                }, {}),
                containerStyle: [p.style.tooltip_container],
                withOverlay: !0,
                withPointer: !0,
                children: (0, m.jsx)(a.View, {
                  style: p.style.tagIconTextWrapper,
                  testID: 'tagIconTextWrapper',
                  children: (0, m.jsxs)(s.Text, {
                    style: [
                      p.style.titleText,
                      { color: u.themes.themeA.colors08.color },
                    ],
                    testID: 'tagIconText',
                    children: [
                      h &&
                        f &&
                        (0, m.jsx)(l.IconYrl, Object.assign({}, v.iconProps)),
                      i,
                    ],
                  }),
                }),
              }),
            })
          })
        t.TagProperty = g
      },
      97817: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.style = void 0)
        var i = n(26228),
          o = n(55380),
          a = i.StyleSheet.create({
            TagProperty: Object.assign({}, o.styleGlobal.typography, {
              flex: 1,
              paddingLeft: '0.5rem',
              paddingRight: '0.5rem',
              paddingTop: '0.25rem',
              paddingBottom: '0.25rem',
              minWidth: 'auto',
              maxWidth: 'min-content',
            }),
            tagIconTextWrapper: { flexDirection: 'row' },
            titleText: {
              display: 'flex',
              flex: 1,
              fontSize: 20,
              width: 'min-content',
              whiteSpace: 'nowrap',
            },
            tooltip_container: { width: 'auto', height: 'auto' },
            tooltip_containerView: { maxHeight: 350 },
            tooltip_scrollView: { marginHorizontal: 20 },
            tooltip_buttonYrlLinking: {},
            tooltip_textRrneui: { paddingBottom: '1rem' },
          })
        t.style = a
      },
      9741: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Text = void 0)
        var o = i(n(89526)),
          a = n(26228),
          r = n(8392),
          s = n(67557),
          l = o.default.memo(function (e) {
            var t = e.style,
              n = e.styleProps,
              i = void 0 === n ? { Text: {} } : n
            return (0,
            s.jsx)(a.Text, Object.assign({}, e, { style: [r.style.Text, t, i.Text], children: e.children }))
          })
        t.Text = l
      },
      8392: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.style = void 0)
        var i = n(26228),
          o = n(55380),
          a = i.StyleSheet.create({
            Text: Object.assign({}, o.styleGlobal.typography),
          })
        t.style = a
      },
      81891: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.TopBarChatCardsComponent = t.TopBarChatCards = void 0)
        var o = i(n(89526)),
          a = n(26228),
          r = n(98054),
          s = n(44322),
          l = n(51006),
          c = n(5199),
          d = n(7248),
          p = n(26897),
          u = n(67557),
          m = function (e) {
            var t = e.styleProps,
              n = void 0 === t ? { TopBarChatCards: {} } : t,
              i = e.handleEvents,
              o = e.urlParams,
              c = (o = void 0 === o ? r.urlParamsDefault : o).urlParam1,
              m = o.urlParam2,
              g = e.store,
              h = g.globalVars,
              f = h.idProfileHost,
              y = h.idProfileActive,
              A = g.forms.inputSearch,
              v = g.profiles,
              b = (0, p.getProfileByIdProfile)(v, f),
              S = {
                avatarPlusInfoProps: {
                  styleProps: { avatar: {} },
                  profile: b,
                  onPress: function () {
                    i.CLICK_ON_MENU_CONTROL(
                      {},
                      { isProfileSelectMenu: !1, isUserMenu: !0 }
                    )
                  },
                  testID: 'topBarChatCardsAvatarPlusInfo',
                },
                imageProfileHostAvatarProps: {
                  styleProps: {
                    ImageYrl: {},
                    image: { width: 45, height: 45, borderRadius: 50 },
                  },
                  testID: 'imageProfileHostAvatarProps',
                  uri: b.avatarSrc,
                  resizeMode: 'cover',
                },
                buttonHamburgerProps: {
                  styleProps: {
                    ButtonYrl: { cursor: 'pointer', paddingLeft: '1rem' },
                    title: {},
                  },
                  titleText: '',
                  testID: 'ButtonYrl',
                  disabled: !1,
                  onPress: function () {
                    return i.CLICK_ON_MENU_CONTROL(
                      {},
                      { isProfileSelectMenu: !1, isUserMenu: !0 }
                    )
                  },
                },
                iconHamburgerProps: {
                  library: 'Ionicons',
                  name: 'menu-outline',
                  size: 32,
                  color: s.themes.themeA.colors01.color,
                  testID: 'TopBarChatCardsComponent_ButtonYrl_menu-outline',
                },
                inputTextYrlProps: {
                  styleProps: {
                    InputTextYrl: {
                      border: 'solid  1px',
                      borderColor: s.themes.themeA.colors01.borderColor,
                      borderRadius: '5rem',
                    },
                    inputText: { border: 0, outline: 0, paddingLeft: '1rem' },
                  },
                  multiline: !1,
                  numberOfLines: 1,
                  onChangeText: function (e) {
                    return i.ON_CHANGE_INPUT_SEARCH({}, { text: e })
                  },
                  onSubmitEditing: function () {},
                  placeholder: 'Search',
                  placeholderTextColor: s.themes.themeA.colors01.borderColor,
                  testID: 'TopBarChatCards_InputTextYrl',
                  value: A,
                },
                searchIconYrlProps: {
                  library: 'Ionicons',
                  name: 'search-outline',
                  styleProps: { IconYrl: { cursor: 'not-allowed' } },
                  size: 24,
                  color: s.themes.themeA.colors01.borderColor,
                  testID: 'TopBarChatCardsComponent_IconYrl_search',
                },
              }
            return (0, u.jsxs)(a.View, {
              style: [l.style.TopBarChatCards, n.TopBarChatCards],
              testID: 'TopBarChatCards',
              children: [
                (0, u.jsx)(a.View, {
                  style: [l.style.buttonHamburgerWrapper],
                  testID: 'buttonHamburgerWrapper',
                  children:
                    ('k' === c && !m) || y !== f
                      ? (0, u.jsx)(
                          d.AvatarPlusInfo,
                          Object.assign({}, S.avatarPlusInfoProps)
                        )
                      : (0, u.jsx)(
                          r.ButtonYrl,
                          Object.assign({}, S.buttonHamburgerProps, {
                            children: (0, u.jsx)(
                              r.IconYrl,
                              Object.assign({}, S.iconHamburgerProps)
                            ),
                          })
                        ),
                }),
                (0, u.jsxs)(a.View, {
                  style: [l.style.inputTextYrlWrapper],
                  testID: 'inputTextYrlWrapper',
                  children: [
                    (0, u.jsx)(
                      r.InputTextYrl,
                      Object.assign({}, S.inputTextYrlProps)
                    ),
                    (0, u.jsx)(a.View, {
                      style: [l.style.iconYrlWrapper],
                      testID: 'iconYrlWrapper',
                      children: (0, u.jsx)(
                        r.IconYrl,
                        Object.assign({}, S.searchIconYrlProps)
                      ),
                    }),
                  ],
                }),
              ],
            })
          }
        t.TopBarChatCardsComponent = m
        var g = o.default.memo(
          (0, r.withPropsYrl)({ handleEvents: c.handleEvents })(
            (0, r.withStoreStateYrl)((0, r.withParamsMediaYrl)(m))
          )
        )
        t.TopBarChatCards = g
      },
      51006: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.style = void 0)
        var i = n(26228),
          o = n(55380),
          a = i.StyleSheet.create({
            TopBarChatCards: Object.assign({}, o.styleGlobal.typography, {
              display: 'flex',
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }),
            buttonHamburgerWrapper: {},
            inputTextYrlWrapper: {
              flex: 1,
              marginTop: 0,
              marginBottom: 0,
              marginLeft: '1rem',
              marginRight: '1rem',
            },
            iconYrlWrapper: {
              position: 'absolute',
              paddingRight: '1rem',
              right: 0,
              top: '20%',
              bottom: '20%',
            },
          })
        t.style = a
      },
      86127: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.TopBarMainColumn = void 0)
        var o = i(n(89526)),
          a = n(26228),
          r = n(39980),
          s = n(98054),
          l = n(7248),
          c = n(68643),
          d = n(9741),
          p = n(44322),
          u = n(93128),
          m = n(5199),
          g = n(26897),
          h = n(67557),
          f = o.default.memo(
            (0, s.withStoreStateYrl)(
              (0, s.withParamsMediaYrl)(function (e) {
                var t = e.mediaParams,
                  n = void 0 === t ? s.mediaParamsDefault : t,
                  i = e.store,
                  o = n.deviceType,
                  f = i.profiles,
                  y = i.componentsState,
                  A = i.globalVars.idProfileActive,
                  v = y.modalFrame,
                  b = v.isShow,
                  S = v.childName,
                  T = v.isButtonBack,
                  w = v.isButtonClose,
                  P = u.styles[o],
                  I = (0, g.getProfileByIdProfile)(f, A),
                  C = I.avatarSrc,
                  E = I.serviceSpecs,
                  x = !(!T || !w)
                ;(o !== s.DeviceType.mdDevice &&
                  o !== s.DeviceType.lgDevice &&
                  o !== s.DeviceType.xlDevice) ||
                  (x = !1)
                var k = 'Profile' !== S || !0 !== b,
                  M = {
                    buttonBackToCards: {
                      styleProps: { ButtonYrl: {}, title: {} },
                      titleText: '',
                      testID: 'ButtonYrl',
                      disabled: !1,
                      onPress: function () {
                        m.handleEvents.CLICK_TOGGLE_SIDEBAR_MAIN(
                          {},
                          { deviceType: o, from: 'TopBarMainColumn.tsx' }
                        )
                      },
                      iconProps: {
                        library: 'Ionicons',
                        name: 'arrow-back-outline',
                        styleProps: { IconYrl: {} },
                        size: 24,
                        color: p.themes.themeA.colors01.color,
                        testID: 'ButtonYrl',
                      },
                    },
                    avatarPlusInfoProps: {
                      profile: I,
                      styleProps: {
                        viewStyle: p.themes.themeA.colors01,
                        avatar: { opacity: k ? 1 : 0 },
                      },
                      onPress: function (e) {
                        return m.handleEvents.SET_MODAL_FRAME(e, {
                          childName: 'Profile',
                          isShow: !0,
                          childProps: {},
                        })
                      },
                      isImageAvatar: !0,
                    },
                    imageYrlProps: {
                      styleProps: { ImageYrl: P.ImageYrl, image: P.image },
                      testID: 'TopBarMainColumn_imageYrl',
                      uri: C,
                    },
                    nameStatusProps: {
                      styleProps: {
                        NameStatus: {},
                        viewStyle: p.themes.themeA.colors01,
                      },
                      profile: I,
                      status: 'last seen recently',
                    },
                  }
                return (0, h.jsxs)(a.View, {
                  style: [P.TopBarMainColumn],
                  testID: 'TopBarMainColumn',
                  children: [
                    x &&
                      (0, h.jsx)(a.View, {
                        style: [P.buttonBackToCardsWrapper],
                        testID: 'buttonBackToCardsWrapper',
                        children: (0, h.jsx)(
                          s.ButtonYrl,
                          Object.assign({}, M.buttonBackToCards)
                        ),
                      }),
                    (0, h.jsx)(
                      l.AvatarPlusInfo,
                      Object.assign({}, M.avatarPlusInfoProps, {
                        children: (0, h.jsx)(
                          c.NameStatus,
                          Object.assign({}, M.nameStatusProps)
                        ),
                      })
                    ),
                    (o === s.DeviceType.mdDevice ||
                      o === s.DeviceType.lgDevice ||
                      o === s.DeviceType.xlDevice) &&
                      (0, h.jsx)(a.View, {
                        style: [P.serviceSpec],
                        testID: 'serviceSpec',
                        children: (function () {
                          return (
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : []
                          ).map(function (e, t) {
                            var n = (0, r.nanoid)()
                            return (0,
                            h.jsx)(d.Text, { style: [P.serviceSpecText], numberOfLines: 1, adjustsFontSizeToFit: !0, testID: `${e}-${t}`, children: e }, n)
                          })
                        })(E),
                      }),
                  ],
                })
              })
            )
          )
        t.TopBarMainColumn = f
      },
      93128: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.stylesDefault = t.styles = void 0)
        var i = n(26228),
          o = n(55380),
          a = i.StyleSheet.create({
            TopBarMainColumn: Object.assign({}, o.styleGlobal.typography, {
              flexDirection: 'row',
              paddingTop: '0.45rem',
              paddingBottom: '0.45rem',
              justifyContent: 'flex-start',
              alignContent: 'space-around',
              alignItems: 'center',
            }),
            buttonBackToCardsWrapper: { paddingLeft: '1.5rem' },
            avatar: { paddingLeft: '1rem' },
            ImageYrl: {},
            image: { width: 45, height: 45, borderRadius: 50 },
            nameStatus: { paddingLeft: '1rem' },
            name: { fontWeight: '600', fontSize: 16 },
            status: { fontSize: 14, alignSelf: 'flex-end' },
            serviceSpec: { paddingLeft: '2rem' },
            serviceSpecText: {},
          })
        t.stylesDefault = a
        var r = i.StyleSheet.create(Object.assign({}, a)),
          s = i.StyleSheet.create(Object.assign({}, r)),
          l = {
            xsDevice: s,
            smDevice: s,
            mdDevice: i.StyleSheet.create(Object.assign({}, r)),
            lgDevice: i.StyleSheet.create(Object.assign({}, r)),
            xlDevice: i.StyleSheet.create(Object.assign({}, r)),
          }
        t.styles = l
      },
      18761: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.TriangleCorner = void 0)
        var o = i(n(89526)),
          a = n(26228),
          r = n(74960),
          s = n(67557),
          l = o.default.memo(function (e) {
            var t = e.styleProps,
              n = void 0 === t ? {} : t,
              i = e.isShow,
              o = void 0 === i || i ? {} : r.style.notShow
            return (0,
            s.jsx)(a.View, { style: [r.style.TriangleCorner, n.borderColor, o] })
          })
        t.TriangleCorner = l
      },
      74960: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.style = void 0)
        var i = n(26228).StyleSheet.create({
          TriangleCorner: {
            width: 0,
            height: 0,
            borderStyle: 'solid',
            borderRightWidth: 15,
            borderTopWidth: 15,
            backgroundColor: 'transparent',
            borderRightColor: 'transparent',
            transform: [{ rotate: '180deg' }],
            borderTopRightRadius: 10,
          },
          notShow: { opacity: 0 },
        })
        t.style = i
      },
      8852: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.UserMenu = void 0)
        var o = i(n(89526)),
          a = n(26228),
          r = n(98054),
          s = n(9741),
          l = n(44322),
          c = n(4975),
          d = n(5199),
          p = n(26897),
          u = n(67557),
          m = o.default.memo(
            (0, r.withPropsYrl)({ handleEvents: d.handleEvents })(
              (0, r.withStoreStateYrl)(
                (0, r.withParamsMediaYrl)(function (e) {
                  var t,
                    n = e.styleProps,
                    i = void 0 === n ? { UserMenu: {} } : n,
                    o = e.handleEvents,
                    d = e.mediaParams,
                    m = (d = void 0 === d ? r.mediaParamsDefault : d)
                      .deviceType,
                    g = e.urlParams,
                    h = (g = void 0 === g ? r.urlParamsDefault : g).urlParam1,
                    f = g.urlParam2,
                    y = e.urlParamsSearch,
                    A = e.store,
                    v = A.globalVars.idProfileHost,
                    b = A.profiles,
                    S = (0, p.getProfileByIdProfile)(b, v).profileName,
                    T = c.styles[m],
                    w = [
                      {
                        title: 'Select profile',
                        iconLibrary: 'Ionicons',
                        iconName: 'people-outline',
                        color: l.themes.themeA.colors01.color,
                        onPress: function () {
                          return o.CLICK_ON_USER_OPTION_SELECT(
                            {},
                            { isUserMenu: !1, isProfileSelectMenu: !0 }
                          )
                        },
                      },
                      {
                        title: 'This profile',
                        iconLibrary: 'Ionicons',
                        iconName: 'person-outline',
                        color: l.themes.themeA.colors01.color,
                        onPress: function () {
                          o.CLICK_TOGGLE_SIDEBAR_MAIN({}, { deviceType: m }),
                            o.CLICK_ON_USER_CHAT_CARD(
                              {},
                              {
                                idProfile: v,
                                profileName: S,
                                urlParam1: h,
                                urlParam2: f,
                                query: y,
                              }
                            ),
                            o.CLICK_ON_USER_OPTION_SELECT(
                              {},
                              { isUserMenu: !1, isProfileSelectMenu: !1 }
                            )
                        },
                      },
                      {
                        title: 'Sign out',
                        iconLibrary: 'Ionicons',
                        iconName: 'log-out-outline',
                        color: l.themes.themeA.colors01.borderColor,
                        onPress: function () {},
                      },
                    ]
                  return (0, u.jsx)(a.View, {
                    style: [T.UserMenu, i.UserMenu],
                    testID: 'UserMenu',
                    children:
                      ((t = w),
                      t.map(function (e, t) {
                        var n = e.title,
                          i = e.iconLibrary,
                          o = e.iconName,
                          a = e.color,
                          l = {
                            userMenuButtonYrlProps: {
                              key: `userMenuItem-${t}`,
                              styleProps: {
                                ButtonYrl: {
                                  paddingLeft: '1rem',
                                  paddingBottom: '1rem',
                                },
                                title: {},
                              },
                              disabled: !1,
                              onPress: e.onPress,
                              testID: 'userMenuButtonYrl',
                            },
                            userMenuIconYrlProps: {
                              library: i,
                              name: o,
                              styleProps: {
                                IconYrl: { paddingRight: '0.5rem' },
                              },
                              size: 24,
                              color: a,
                              testID: 'userMenuIconYrl',
                            },
                            userMenuTextProps: {
                              styleProps: { Text: { color: a } },
                              testID: 'userMenuText',
                            },
                          }
                        return (0,
                        u.jsx)(r.ButtonYrl, Object.assign({}, l.userMenuButtonYrlProps, { children: (0, u.jsxs)(u.Fragment, { children: [(0, u.jsx)(r.IconYrl, Object.assign({}, l.userMenuIconYrlProps)), (0, u.jsx)(s.Text, Object.assign({}, l.userMenuTextProps, { children: n }))] }) }))
                      })),
                  })
                })
              )
            )
          )
        t.UserMenu = m
      },
      4975: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.stylesDefault = t.styles = void 0)
        var i = n(26228),
          o = n(55380),
          a = i.StyleSheet.create({
            UserMenu: Object.assign({}, o.styleGlobal.typography, {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '0.5rem',
              paddingTop: '1rem',
              paddingBottom: '1rem',
            }),
          })
        t.stylesDefault = a
        i.StyleSheet.create(Object.assign({}, a))
        var r = i.StyleSheet.create(Object.assign({}, a)),
          s = {
            xsDevice: r,
            smDevice: r,
            mdDevice: i.StyleSheet.create(Object.assign({}, a)),
            lgDevice: i.StyleSheet.create(Object.assign({}, a)),
            xlDevice: i.StyleSheet.create(Object.assign({}, a)),
          }
        t.styles = s
      },
      4792: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.LayoutOfRow = void 0)
        var o = i(n(89526)),
          a = n(26228),
          r = n(65165),
          s = n(67557),
          l = o.default.memo(function (e) {
            var t = e.styleProps,
              n =
                void 0 === t
                  ? { LayoutOfRow: {}, leftColumn: {}, mainColumn: {} }
                  : t,
              i = e.isLeftColumn,
              o = void 0 === i || i,
              l = e.isMainColumn,
              c = void 0 === l || l,
              d = e.children,
              p = void 0 === d ? null : d
            return (0,
            s.jsxs)(a.View, { style: [r.style.LayoutOfRow, n.LayoutOfRow], testID: 'LayoutOfRow', children: [o && p ? (0, s.jsx)(a.View, { style: [r.style.leftColumn, n.leftColumn], testID: 'leftColumn', children: p && void 0 === p.length ? p : p[0] }) : null, c && p && p[1] ? (0, s.jsx)(a.View, { style: [r.style.mainColumn, n.mainColumn], testID: 'mainColumn', children: p[1] }) : null] })
          })
        t.LayoutOfRow = l
      },
      65165: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.stylesDefault = t.style = void 0)
        var i = n(26228),
          o = n(55380),
          a = i.StyleSheet.create({
            LayoutOfRow: Object.assign({}, o.styleGlobal.typography, {
              display: 'flex',
              flex: 1,
              flexDirection: 'row',
            }),
            leftColumn: { display: 'flex', flex: 1, flexDirection: 'column' },
            mainColumn: {
              display: 'flex',
              flex: 3,
              flexGrow: 3,
              flexDirection: 'column',
            },
          })
        t.stylesDefault = a
        var r = a
        t.style = r
      },
      22540: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.LayoutScreen = void 0)
        var o = i(n(89526)),
          a = n(26228),
          r = n(12718),
          s = n(67557),
          l = o.default.memo(function (e) {
            var t = e.styleProps,
              n =
                void 0 === t
                  ? {
                      LayoutScreen: {},
                      layoutNavigationTop: {},
                      layoutMainContent: {},
                      layoutNavigationBottom: {},
                    }
                  : t,
              i = e.isActive,
              o = e.children
            return i
              ? (0, s.jsxs)(a.SafeAreaView, {
                  style: [r.style.LayoutScreen, n.LayoutScreen],
                  testID: 'LayoutScreenPageChats',
                  children: [
                    (0, s.jsx)(a.View, {
                      style: [
                        r.style.layoutNavigationTop,
                        n.layoutNavigationTop,
                      ],
                      testID: 'layoutNavigationTop',
                      children: void 0 === o.length ? o : o[0],
                    }),
                    (0, s.jsx)(a.View, {
                      style: [r.style.layoutMainContent, n.layoutMainContent],
                      testID: 'layoutMainContent',
                      children: o[1],
                    }),
                    (0, s.jsx)(a.View, {
                      style: [
                        r.style.layoutNavigationBottom,
                        n.layoutNavigationBottom,
                      ],
                      testID: 'layoutNavigationBottom',
                      children: o[2],
                    }),
                  ],
                })
              : (0, s.jsx)(s.Fragment, {})
          })
        t.LayoutScreen = l
      },
      12718: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.stylesDefault = t.style = void 0)
        var i = n(26228),
          o = n(55380),
          a = i.StyleSheet.create({
            LayoutScreen: Object.assign({}, o.styleGlobal.typography, {
              marginTop: i.StatusBar.currentHeight || 0,
              marginBottom: 0,
              flexDirection: 'column',
              maxHeight: '100vh',
              width: '100vw',
            }),
            layoutNavigationTop: {
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              zIndex: 9999,
              display: 'flex',
              flexDirection: 'row',
              width: '100vw',
            },
            layoutMainContent: {
              display: 'flex',
              position: 'absolute',
              left: 0,
              right: 0,
              flex: 1,
              flexDirection: 'row',
              width: '100vw',
              maxHeight: '100vh',
            },
            layoutNavigationBottom: {
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 9999,
              display: 'flex',
              flexDirection: 'row',
              width: '100vw',
              marginTop: 'auto',
            },
          })
        t.stylesDefault = a
        var r = a
        t.style = r
      },
      535: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.PageChatsWholeScreen = void 0)
        var i = (function (e, t) {
            if (!t && e && e.__esModule) return e
            if (
              null === e ||
              ('object' !== typeof e && 'function' !== typeof e)
            )
              return { default: e }
            var n = P(t)
            if (n && n.has(e)) return n.get(e)
            var i = {},
              o = Object.defineProperty && Object.getOwnPropertyDescriptor
            for (var a in e)
              if (
                'default' !== a &&
                Object.prototype.hasOwnProperty.call(e, a)
              ) {
                var r = o ? Object.getOwnPropertyDescriptor(e, a) : null
                r && (r.get || r.set)
                  ? Object.defineProperty(i, a, r)
                  : (i[a] = e[a])
              }
            ;(i.default = e), n && n.set(e, i)
            return i
          })(n(89526)),
          o = n(26228),
          a = n(98054),
          r = n(22540),
          s = n(4792),
          l = n(14372),
          c = n(41155),
          d = n(36974),
          p = n(16614),
          u = n(45261),
          m = n(5199),
          g = n(77877),
          h = n(44322),
          f = n(81891),
          y = n(86127),
          A = n(17703),
          v = n(33174),
          b = n(33604),
          S = n(86868),
          T = n(26897),
          w = n(67557)
        function P(e) {
          if ('function' !== typeof WeakMap) return null
          var t = new WeakMap(),
            n = new WeakMap()
          return (P = function (e) {
            return e ? n : t
          })(e)
        }
        var I = i.default.memo(
          (0, a.withPropsYrl)({ handleEvents: m.handleEvents })(
            (0, a.withStoreStateYrl)(
              (0, a.withParamsMediaYrl)(function (e) {
                e.styleProps
                var t = e.mediaParams,
                  n = void 0 === t ? a.mediaParamsDefault : t,
                  m = e.urlParams,
                  P = void 0 === m ? a.urlParamsDefault : m,
                  I = e.urlParamsSearch,
                  C = e.handleEvents,
                  E = e.store,
                  x = n.deviceType,
                  k = P.urlParam1,
                  M = P.urlParam2,
                  O = P.urlParam3,
                  D = g.styles[x],
                  j = (0, i.useRef)(0),
                  R = E.componentsState,
                  B = E.profiles,
                  L = E.sectionsMapping,
                  Q = E.globalVars.idProfileActive,
                  H = R.modalFrame,
                  N = R.isLeftColumn,
                  Y = R.isMainColumn,
                  F = R.isMainColumnBlank,
                  G = H.isShow,
                  U = { s: I.get('s') },
                  W = (0, T.getProfileByIdProfile)(B, Q),
                  _ = W ? W.profileName : void 0,
                  V = (0, u.getSectionsMappingForProfile)(L, _),
                  J = JSON.stringify({
                    urlParam1: k,
                    urlParam2: M,
                    urlParam3: O,
                    deviceType: x,
                    sectionsMappingForProfile: V,
                  })
                ;(0, i.useEffect)(function () {
                  return (
                    0 === j.current &&
                      ((0, A.getSocketOnConversation)(),
                      (0, b.getSocketOnMessage)(),
                      (0, S.getSocketOnPending)(),
                      C.INIT_LOADING({}, {}),
                      window.addEventListener(
                        'beforeunload',
                        v.getSocketDisconnected
                      )),
                    (j.current = j.current + 1),
                    function () {
                      window.removeEventListener(
                        'beforeunload',
                        v.getSocketDisconnected
                      )
                    }
                  )
                }, []),
                  (0, i.useEffect)(
                    function () {
                      C.SET_STORE_SCENARIO(
                        {},
                        {
                          urlParam1: k,
                          urlParam2: M,
                          urlParam3: O,
                          query: U,
                          deviceType: x,
                          sectionsMappingForProfile: V,
                        }
                      )
                    },
                    [J]
                  )
                var q = {
                    isLeftColumn: N,
                    isMainColumn: Y,
                    styleProps: { LayoutOfRow: D.layoutOfRow },
                  },
                  K = {
                    layoutScreenProps: {
                      styleProps: {
                        LayoutScreen: {},
                        layoutNavigationTop: {
                          height: V.length ? '6rem' : '4rem',
                        },
                        layoutMainContent: {
                          top: V.length ? '6rem' : '4rem',
                          bottom: G ? 0 : '4rem',
                        },
                        layoutNavigationBottom: { height: '4rem' },
                      },
                      isActive: !!B.length,
                    },
                    layoutOfRowNavigationTopProps: Object.assign({}, q, {
                      styleProps: {
                        LayoutOfRow: Object.assign(
                          {},
                          q.styleProps.LayoutOfRow
                        ),
                        leftColumn: {
                          borderStyle: 'solid',
                          borderRightWidth: F ? 1 : 0,
                          borderLeftWidth: 1,
                          borderColor: h.themes.themeA.colors01.borderColor,
                        },
                        mainColumn: {
                          borderStyle: 'solid',
                          borderRightWidth: 1,
                          borderColor: h.themes.themeA.colors01.borderColor,
                        },
                      },
                    }),
                    layoutOfRowMainContentProps: Object.assign({}, q, {
                      styleProps: {
                        LayoutOfRow: Object.assign(
                          {},
                          q.styleProps.LayoutOfRow
                        ),
                        leftColumn: {
                          borderStyle: 'solid',
                          borderLeftWidth: 1,
                          borderColor: h.themes.themeA.colors01.borderColor,
                        },
                        mainColumn: {
                          borderStyle: 'solid',
                          borderTopWidth: !F && V.length ? 1 : 0,
                          borderRightWidth: 1,
                          borderLeftWidth: 1,
                          borderColor: h.themes.themeA.colors01.borderColor,
                        },
                      },
                    }),
                    layoutOfRowNavigationBottomProps: Object.assign({}, q, {
                      styleProps: {
                        LayoutOfRow: Object.assign(
                          {},
                          q.styleProps.LayoutOfRow
                        ),
                        leftColumn: {
                          borderStyle: 'solid',
                          borderLeftWidth: 1,
                          borderColor: h.themes.themeA.colors01.borderColor,
                        },
                        mainColumn: {
                          borderStyle: 'solid',
                          borderRightWidth: 1,
                          borderLeftWidth: 1,
                          borderColor: h.themes.themeA.colors01.borderColor,
                        },
                      },
                    }),
                    mainColumnContentMenuProps: {
                      styleProps: {
                        buttonWrapper: {
                          borderTopWidth: 0,
                          borderRightWidth: 0,
                          borderBottomWidth: 0,
                          borderLeftWidth: 1,
                          borderTopColor: h.themes.themeA.colors01.borderColor,
                          borderRightColor:
                            h.themes.themeA.colors01.borderColor,
                          borderBottomColor:
                            h.themes.themeA.colors01.borderColor,
                          borderLeftColor: h.themes.themeA.colors01.borderColor,
                        },
                      },
                    },
                  },
                  z = (0, w.jsx)(o.View, {
                    style: [D.leftColumnTopBars],
                    testID: 'leftColumnTopBars',
                    children: (0, w.jsx)(f.TopBarChatCards, {}),
                  }),
                  Z = (0, w.jsxs)(o.View, {
                    style: [D.mainColumnTopBars, h.themes.themeA.colors03],
                    testID: 'mainColumnTopBars',
                    children: [
                      F
                        ? null
                        : (0, w.jsx)(o.View, {
                            style: [
                              D.mainColumnTopBar,
                              {
                                borderStyle: 'solid',
                                borderBottomWidth: 1,
                                borderLeftWidth: 1,
                              },
                              h.themes.themeA.colors01,
                            ],
                            testID: 'mainColumnTopBar',
                            children: (0, w.jsx)(y.TopBarMainColumn, {}),
                          }),
                      !F && V.length
                        ? (0, w.jsx)(o.View, {
                            style: [
                              D.mainColumnContentMenu,
                              h.themes.themeA.colors01,
                            ],
                            testID: 'mainColumnContentMenu',
                            children: (0, w.jsx)(
                              p.ContentMenuMainColumn,
                              Object.assign({}, K.mainColumnContentMenuProps)
                            ),
                          })
                        : null,
                    ],
                  }),
                  X = (0, w.jsx)(o.View, {
                    style: [D.leftColumnChatCardSpace],
                    testID: 'leftColumnChatCardSpace',
                    children: (0, w.jsx)(l.ChatCards, {}),
                  }),
                  $ = (0, w.jsx)(d.ChatSpace, {}),
                  ee = (0, w.jsx)(o.View, {
                    style: [D.chatInput, h.themes.themeA.colors03],
                    testID: 'chatInput',
                    children: !F && !1 === G && (0, w.jsx)(c.ChatInput, {}),
                  })
                return (0,
                w.jsxs)(r.LayoutScreen, Object.assign({}, K.layoutScreenProps, { children: [(0, w.jsxs)(s.LayoutOfRow, Object.assign({}, K.layoutOfRowNavigationTopProps, { children: [z, Z] })), (0, w.jsxs)(s.LayoutOfRow, Object.assign({}, K.layoutOfRowMainContentProps, { children: [X, $] })), !G && (0, w.jsxs)(s.LayoutOfRow, Object.assign({}, K.layoutOfRowNavigationBottomProps, { children: [null, ee] }))] }))
              })
            )
          )
        )
        t.PageChatsWholeScreen = I
      },
      77877: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.stylesDefault = t.styles = void 0)
        var i = n(26228),
          o = i.StyleSheet.create({
            navigationTop: { display: 'flex', flex: 1, flexDirection: 'row' },
            leftColumn: {
              display: 'flex',
              flex: 1,
              flexDirection: 'column',
              borderStyle: 'solid',
            },
            leftColumnTopBars: {
              display: 'flex',
              paddingTop: '0.75rem',
              alignItems: 'flex-start',
              flexDirection: 'row',
            },
            mainColumnTopBars: {
              display: 'flex',
              height: '100%',
              flexDirection: 'column',
            },
            leftColumnChatCardSpace: {
              flexDirection: 'column',
              flex: 1,
              overflow: 'scroll',
            },
            layoutOfRow: { display: 'flex', flex: 1, flexDirection: 'row' },
            mainContent: { display: 'flex', flex: 1, flexDirection: 'row' },
            mainColumn: {
              display: 'flex',
              flex: 3,
              flexGrow: 3,
              flexDirection: 'column',
            },
            mainColumnTopBar: {},
            mainColumnContentMenu: {},
            scrollViewWrapper: {},
            chatSpace: { flexDirection: 'column', width: '100%', flex: 1 },
            chatInput: { height: '4rem', bottom: 0, width: '100%' },
            navigationBottom: {
              display: 'flex',
              flex: 1,
              flexDirection: 'row',
            },
          })
        t.stylesDefault = o
        i.StyleSheet.create(Object.assign({}, o))
        var a = i.StyleSheet.create(Object.assign({}, o)),
          r = {
            xsDevice: a,
            smDevice: a,
            mdDevice: i.StyleSheet.create(Object.assign({}, o)),
            lgDevice: i.StyleSheet.create(
              Object.assign({}, o, {
                layoutOfRow: Object.assign({}, o.layoutOfRow, {
                  marginRight: '7.5%',
                  marginLeft: '7.5%',
                }),
              })
            ),
            xlDevice: i.StyleSheet.create(
              Object.assign({}, o, {
                layoutOfRow: Object.assign({}, o.layoutOfRow, {
                  marginRight: '7.5%',
                  marginLeft: '7.5%',
                }),
              })
            ),
          }
        t.styles = r
      },
      55380: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.styleGlobal = void 0)
        var i = n(26228).StyleSheet.create({
          typography: {
            fontFamily: 'Roboto, Helvetica, Verdana, Arial, sans-serif',
            fontSize: 14,
            fontWeight: '400',
          },
          h1: { fontSize: 32, fontWeight: 'bold' },
          h2: { fontSize: 24, fontWeight: 'bold' },
          h3: { fontSize: 20, fontWeight: 'bold' },
          h4: { fontSize: 16, fontWeight: 'bold' },
          h5: { fontSize: 14, fontWeight: 'bold' },
          h6: { fontSize: 12, fontWeight: 'bold' },
          norm: { fontSize: 14, fontWeight: '400' },
          hidden: { opacity: 0, height: 0, width: 0, flex: 0 },
        })
        t.styleGlobal = i
      },
      44322: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.themes = void 0)
        var i = {
          themeA: n(26228).StyleSheet.create({
            colors01: {
              color: '#192332e6',
              backgroundColor: '#fcfdfc',
              borderColor: '#dfe1e5',
            },
            colors02: { color: '#3390ec', backgroundColor: '#fcfdfc' },
            colors03: {
              color: '#192332e6',
              backgroundColor: '#f5f5f5',
              borderColor: '#dfe1e5',
            },
            colors05: { color: '#707579', backgroundColor: '#fcfdfc' },
            colors06: { borderColor: '#fcfdfc' },
            colors07: { color: '#fcfdfc', backgroundColor: '#3390ec' },
            colors08: { color: '#3f51b5', backgroundColor: '#e6ebee' },
            colors09: { color: '#3f51b5', backgroundColor: '#e6ebee' },
          }),
        }
        t.themes = i
      },
      99894: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.AnimatedYrl = void 0)
        var o = i(n(38416)),
          a = (function (e, t) {
            if (!t && e && e.__esModule) return e
            if (
              null === e ||
              ('object' !== typeof e && 'function' !== typeof e)
            )
              return { default: e }
            var n = d(t)
            if (n && n.has(e)) return n.get(e)
            var i = {},
              o = Object.defineProperty && Object.getOwnPropertyDescriptor
            for (var a in e)
              if (
                'default' !== a &&
                Object.prototype.hasOwnProperty.call(e, a)
              ) {
                var r = o ? Object.getOwnPropertyDescriptor(e, a) : null
                r && (r.get || r.set)
                  ? Object.defineProperty(i, a, r)
                  : (i[a] = e[a])
              }
            ;(i.default = e), n && n.set(e, i)
            return i
          })(n(89526)),
          r = n(26228),
          s = n(67746),
          l = n(2922),
          c = n(67557)
        function d(e) {
          if ('function' !== typeof WeakMap) return null
          var t = new WeakMap(),
            n = new WeakMap()
          return (d = function (e) {
            return e ? n : t
          })(e)
        }
        t.AnimatedYrl = function (e) {
          var t = e.styleProps,
            n = void 0 === t ? { AnimatedYrl: {} } : t,
            i = e.isActive,
            d = void 0 === i || i,
            p = e.valueInit,
            u = e.valueTarget,
            m = e.nameHtmlCssAttribute,
            g = e.duration,
            h = e.trigger,
            f = e.triggerShouldEqual,
            y = e.testID,
            A = void 0 === y ? 'AnimatedYrl' : y,
            v = (0, a.useRef)(null),
            b = {
              ref: v,
              isActive: d,
              valueInit: p,
              valueTarget: u,
              nameHtmlCssAttribute: m,
              duration: g,
              trigger: h,
              triggerShouldEqual: f,
              testID: A,
            }
          return (
            d && (0, l.useAnimatedYrl)(b),
            (0, c.jsx)(r.View, {
              style: [
                s.AnimatedYrlStyle.AnimatedYrl,
                n.AnimatedYrl,
                (0, o.default)({}, m, d ? p : u),
              ],
              testID: A,
              ref: v,
              children: e.children,
            })
          )
        }
      },
      67746: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.AnimatedYrlStyle = void 0)
        var i = n(26228).StyleSheet.create({ AnimatedYrl: {} })
        t.AnimatedYrlStyle = i
      },
      12975: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ButtonYrl = void 0)
        !(function (e, t) {
          if (!t && e && e.__esModule) return e
          if (null === e || ('object' !== typeof e && 'function' !== typeof e))
            return { default: e }
          var n = s(t)
          if (n && n.has(e)) return n.get(e)
          var i = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor
          for (var a in e)
            if ('default' !== a && Object.prototype.hasOwnProperty.call(e, a)) {
              var r = o ? Object.getOwnPropertyDescriptor(e, a) : null
              r && (r.get || r.set)
                ? Object.defineProperty(i, a, r)
                : (i[a] = e[a])
            }
          ;(i.default = e), n && n.set(e, i)
        })(n(89526))
        var i = n(26228),
          o = n(39200),
          a = n(42029),
          r = n(67557)
        function s(e) {
          if ('function' !== typeof WeakMap) return null
          var t = new WeakMap(),
            n = new WeakMap()
          return (s = function (e) {
            return e ? n : t
          })(e)
        }
        t.ButtonYrl = function (e) {
          var t = e.titleText,
            n = e.styleProps,
            s = void 0 === n ? { ButtonYrl: {}, title: {} } : n,
            l = e.testID,
            c = void 0 === l ? 'ButtonYrl' : l,
            d = e.disabled,
            p = e.onPress,
            u = e.iconProps,
            m = e.children
          return (0, r.jsxs)(i.Pressable, {
            testID: c,
            style: [o.ButtonYrlStyle.ButtonYrl, s.ButtonYrl],
            onPress: p,
            disabled: d,
            children: [
              u && u.library && u.name
                ? (0, r.jsx)(a.IconYrl, {
                    library: u.library,
                    name: u.name,
                    styleProps: u.styleProps,
                    size: u.size,
                    color: u.color,
                    testID: u.testID || `${c}_IconYrl`,
                  })
                : null,
              t
                ? (0, r.jsx)(i.Text, {
                    style: [o.ButtonYrlStyle.title, s.title],
                    testID: `${c}_Text`,
                    children: t,
                  })
                : null,
              m,
            ],
          })
        }
      },
      39200: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ButtonYrlStyle = void 0)
        var i = n(26228).StyleSheet.create({
          ButtonYrl: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 2,
          },
          title: {},
        })
        t.ButtonYrlStyle = i
      },
      2922: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.useAnimatedYrl = void 0)
        var i = n(89526)
        t.useAnimatedYrl = function (e) {
          var t = e.ref,
            n = e.valueInit,
            o = e.valueTarget,
            a = e.nameHtmlCssAttribute,
            r = e.duration,
            s = e.trigger,
            l = e.triggerShouldEqual,
            c = (e.testID, n < o ? 'In' : 'Out')
          ;(0, i.useEffect)(
            function () {
              var e = performance.now(),
                i = null,
                d = function (e) {
                  t.current && t.current.style && (t.current.style[a] = e)
                },
                p = function t(n) {
                  var a = n - e,
                    s = Math.min(a / r, o)
                  d(s), s < o && (i = requestAnimationFrame(t))
                },
                u = function t(n) {
                  var a = n - e < 0 ? 0 : n - e,
                    s = (r - a) / a,
                    l = Math.max(s, o)
                  d(l), l > o && (i = requestAnimationFrame(t))
                }
              return (
                s === l &&
                  (d(n),
                  (e = performance.now()),
                  (i = requestAnimationFrame('In' === c ? p : u))),
                function () {
                  return cancelAnimationFrame(i), (e = null), void (i = null)
                }
              )
            },
            [t, r, s]
          )
        }
      },
      36040: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.useIntervalYrl = void 0)
        var o = i(n(27424)),
          a = n(89526)
        t.useIntervalYrl = function (e, t, n) {
          var i = (0, a.useRef)(e),
            r = (0, a.useState)(0),
            s = (0, o.default)(r, 2),
            l = s[0],
            c = s[1]
          ;(0, a.useEffect)(function () {
            i.current = e
          }),
            (0, a.useEffect)(
              function () {
                if (n) {
                  var e = window.setInterval(function () {
                    i.current()
                  }, t)
                  return (
                    c(e),
                    function () {
                      return clearInterval(e)
                    }
                  )
                }
                return (
                  clearInterval(l),
                  function () {
                    return clearInterval(l)
                  }
                )
              },
              [t, n]
            )
        }
      },
      98880: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.useLinkClickResYrl = void 0)
        var o = i(n(17156)),
          a = n(89526),
          r = n(26228)
        t.useLinkClickResYrl = function (e) {
          if (e)
            return (0, a.useCallback)(
              (0, o.default)(function* () {
                ;(yield r.Linking.canOpenURL(e))
                  ? yield r.Linking.openURL(e)
                  : r.Alert.alert(`Don't know how to open this URL: ${e}`)
              }),
              [e]
            )
        }
      },
      78549: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.useMediaQueryResYrl = t.DeviceType = void 0),
          n(26246)
        var i = n(3266),
          o = n(26228),
          a = (function (e) {
            return (
              (e.xsDevice = 'xsDevice'),
              (e.smDevice = 'smDevice'),
              (e.mdDevice = 'mdDevice'),
              (e.lgDevice = 'lgDevice'),
              (e.xlDevice = 'xlDevice'),
              e
            )
          })({})
        t.DeviceType = a
        t.useMediaQueryResYrl = function () {
          var e = o.Dimensions.get('window'),
            t = e.width,
            n = e.height,
            a = 'xsDevice'
          ;(0, i.useMediaQuery)({
            query: '(min-width: 320px) and (max-width: 480px)',
          }) && (a = 'xsDevice'),
            (0, i.useMediaQuery)({
              query: '(min-width: 481px) and (max-width: 768px)',
            }) && (a = 'smDevice'),
            (0, i.useMediaQuery)({
              query: '(min-width: 769px) and (max-width: 1024px)',
            }) && (a = 'mdDevice'),
            (0, i.useMediaQuery)({
              query: '(min-width: 1025px) and (max-width: 1620px)',
            }) && (a = 'lgDevice'),
            (0, i.useMediaQuery)({
              query: '(min-width: 1621px) and (max-width: 16000px)',
            }) && (a = 'xlDevice')
          var r = 'xsSmMd'
          return (
            ('lgDevice' !== a && 'xlDevice' !== a) || (r = 'lgXl'),
            { deviceType: a, screenCase: r, width: t, height: n }
          )
        }
      },
      84130: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.withDelayYrl = void 0)
        var o = i(n(27424)),
          a = (function (e, t) {
            if (!t && e && e.__esModule) return e
            if (
              null === e ||
              ('object' !== typeof e && 'function' !== typeof e)
            )
              return { default: e }
            var n = s(t)
            if (n && n.has(e)) return n.get(e)
            var i = {},
              o = Object.defineProperty && Object.getOwnPropertyDescriptor
            for (var a in e)
              if (
                'default' !== a &&
                Object.prototype.hasOwnProperty.call(e, a)
              ) {
                var r = o ? Object.getOwnPropertyDescriptor(e, a) : null
                r && (r.get || r.set)
                  ? Object.defineProperty(i, a, r)
                  : (i[a] = e[a])
              }
            ;(i.default = e), n && n.set(e, i)
            return i
          })(n(89526)),
          r = n(67557)
        function s(e) {
          if ('function' !== typeof WeakMap) return null
          var t = new WeakMap(),
            n = new WeakMap()
          return (s = function (e) {
            return e ? n : t
          })(e)
        }
        t.withDelayYrl = function (e) {
          var t = e.delay
          return function (e) {
            return function (n) {
              var i = (0, a.useState)(!1),
                s = (0, o.default)(i, 2),
                l = s[0],
                c = s[1]
              return (
                (0, a.useEffect)(
                  function () {
                    var e = setTimeout(function () {
                      c(!0)
                    }, t)
                    return function () {
                      clearTimeout(e)
                    }
                  },
                  [t]
                ),
                l ? (0, r.jsx)(e, Object.assign({}, n)) : null
              )
            }
          }
        }
      },
      49272: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.withElementDimensionsYrl = void 0)
        var o = i(n(27424)),
          a = (function (e, t) {
            if (!t && e && e.__esModule) return e
            if (
              null === e ||
              ('object' !== typeof e && 'function' !== typeof e)
            )
              return { default: e }
            var n = l(t)
            if (n && n.has(e)) return n.get(e)
            var i = {},
              o = Object.defineProperty && Object.getOwnPropertyDescriptor
            for (var a in e)
              if (
                'default' !== a &&
                Object.prototype.hasOwnProperty.call(e, a)
              ) {
                var r = o ? Object.getOwnPropertyDescriptor(e, a) : null
                r && (r.get || r.set)
                  ? Object.defineProperty(i, a, r)
                  : (i[a] = e[a])
              }
            ;(i.default = e), n && n.set(e, i)
            return i
          })(n(89526)),
          r = n(26228),
          s = n(67557)
        function l(e) {
          if ('function' !== typeof WeakMap) return null
          var t = new WeakMap(),
            n = new WeakMap()
          return (l = function (e) {
            return e ? n : t
          })(e)
        }
        t.withElementDimensionsYrl = function (e) {
          return function (t) {
            var n = (0, a.useState)(0),
              i = (0, o.default)(n, 2),
              l = i[0],
              c = i[1],
              d = (0, a.useState)(0),
              p = (0, o.default)(d, 2),
              u = p[0],
              m = p[1],
              g = { elementWidth: l, elementHeight: u },
              h = Object.assign({}, t, { elementDimensions: g })
            return (0, s.jsx)(r.View, {
              onLayout: function (e) {
                var t = e.nativeEvent.layout,
                  n = t.width,
                  i = t.height
                c(n), m(i)
              },
              testID: 'withElementDimensionsYrl',
              children: (0, s.jsx)(e, Object.assign({}, h)),
            })
          }
        }
      },
      36471: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.withParamsMediaYrl =
            t.urlParamsDefault =
            t.mediaParamsDefault =
              void 0)
        var o = i(n(27424)),
          a = (i(n(89526)), n(77138)),
          r = n(78549),
          s = n(67557),
          l = {
            deviceType: r.DeviceType.lgDevice,
            screenCase: 'lgXl',
            width: 1024,
            height: 800,
          }
        t.mediaParamsDefault = l
        var c = { urlParam1: void 0, urlParam2: void 0, urlParam3: void 0 }
        t.urlParamsDefault = c
        t.withParamsMediaYrl = function (e) {
          return function (t) {
            var n = (0, a.useParams)(),
              i = (0, a.useSearchParams)(),
              l = (0, o.default)(i, 1)[0],
              c = (0, r.useMediaQueryResYrl)(),
              d = Object.assign({}, t, {
                mediaParams: c,
                urlParams: n,
                urlParamsSearch: l,
              })
            return (0, s.jsx)(e, Object.assign({}, d))
          }
        }
      },
      13729: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.withPropsYrl = void 0)
        i(n(89526))
        var o = n(67557)
        t.withPropsYrl = function (e) {
          return function (t) {
            return function (n) {
              var i = Object.assign({}, n, e)
              return (0, o.jsx)(t, Object.assign({}, i))
            }
          }
        }
      },
      22204: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.withStoreStateYrl = t.mediaParamsDefault = void 0)
        i(n(89526))
        var o = n(92070),
          a = n(67557)
        t.mediaParamsDefault = {}
        t.withStoreStateYrl = function (e) {
          return function (t) {
            var n = (0, o.useSelector)(function (e) {
              return e
            })
            return (0, a.jsx)(e, Object.assign({}, t, { store: n }))
          }
        }
      },
      90357: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.withUseContextYrl = void 0)
        var i = (function (e, t) {
            if (!t && e && e.__esModule) return e
            if (
              null === e ||
              ('object' !== typeof e && 'function' !== typeof e)
            )
              return { default: e }
            var n = a(t)
            if (n && n.has(e)) return n.get(e)
            var i = {},
              o = Object.defineProperty && Object.getOwnPropertyDescriptor
            for (var r in e)
              if (
                'default' !== r &&
                Object.prototype.hasOwnProperty.call(e, r)
              ) {
                var s = o ? Object.getOwnPropertyDescriptor(e, r) : null
                s && (s.get || s.set)
                  ? Object.defineProperty(i, r, s)
                  : (i[r] = e[r])
              }
            ;(i.default = e), n && n.set(e, i)
            return i
          })(n(89526)),
          o = n(67557)
        function a(e) {
          if ('function' !== typeof WeakMap) return null
          var t = new WeakMap(),
            n = new WeakMap()
          return (a = function (e) {
            return e ? n : t
          })(e)
        }
        t.withUseContextYrl = function (e) {
          return function (t) {
            return function (n) {
              var a = (0, i.useContext)(e),
                r = Object.assign({}, n, a)
              return (0, o.jsx)(t, Object.assign({}, r))
            }
          }
        }
      },
      42029: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.IconYrl = void 0)
        !(function (e, t) {
          if (!t && e && e.__esModule) return e
          if (null === e || ('object' !== typeof e && 'function' !== typeof e))
            return { default: e }
          var n = a(t)
          if (n && n.has(e)) return n.get(e)
          var i = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor
          for (var r in e)
            if ('default' !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var s = o ? Object.getOwnPropertyDescriptor(e, r) : null
              s && (s.get || s.set)
                ? Object.defineProperty(i, r, s)
                : (i[r] = e[r])
            }
          ;(i.default = e), n && n.set(e, i)
        })(n(89526))
        var i = n(98054),
          o = n(67557)
        function a(e) {
          if ('function' !== typeof WeakMap) return null
          var t = new WeakMap(),
            n = new WeakMap()
          return (a = function (e) {
            return e ? n : t
          })(e)
        }
        t.IconYrl = function (e) {
          var t = e.name,
            n = void 0 === t ? '' : t,
            a = e.styleProps,
            r = void 0 === a ? { IconYrl: {} } : a,
            s = e.size,
            l = void 0 === s ? 24 : s,
            c = e.color,
            d = void 0 === c ? '' : c,
            p =
              (e.testID,
              e.library,
              {
                '#3390ec':
                  'invert(50%) sepia(82%) saturate(2208%) hue-rotate(189deg) brightness(95%) contrast(95%)',
                '#707579':
                  'invert(47%) sepia(9%) saturate(248%) hue-rotate(164deg) brightness(94%) contrast(85%)',
                '#dfe1e5':
                  'invert(99%) sepia(1%) saturate(3638%) hue-rotate(181deg) brightness(95%) contrast(88%)',
                '#e6ebee':
                  'invert(100%) sepia(1%) saturate(3214%) hue-rotate(170deg) brightness(96%) contrast(93%)',
                '#f5f5f5':
                  'invert(100%) sepia(0%) saturate(7438%) hue-rotate(253deg) brightness(116%) contrast(92%)',
                '#192332e6': '',
                '#fcfdfc':
                  'invert(100%) sepia(2%) saturate(692%) hue-rotate(353deg) brightness(110%) contrast(98%)',
                '#3f51b5':
                  'invert(27%) sepia(64%) saturate(1212%) hue-rotate(207deg) brightness(98%) contrast(95%)',
              }),
            u = p[d] ? p[d] : '',
            m = {
              imageYrlProps: {
                styleProps: {
                  ImageYrl: Object.assign({}, r.IconYrl, { filter: u }),
                  image: { width: l, height: l },
                },
                uri: `https://raw.githubusercontent.com/ionic-team/ionicons/main/src/svg/${n}.svg`,
                resizeMode: 'cover',
                testID: `ImageYrl-IconYrl-${n}`,
              },
            }
          return (0, o.jsx)(i.ImageYrl, Object.assign({}, m.imageYrlProps))
        }
      },
      40350: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ImageYrl = void 0)
        !(function (e, t) {
          if (!t && e && e.__esModule) return e
          if (null === e || ('object' !== typeof e && 'function' !== typeof e))
            return { default: e }
          var n = r(t)
          if (n && n.has(e)) return n.get(e)
          var i = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor
          for (var a in e)
            if ('default' !== a && Object.prototype.hasOwnProperty.call(e, a)) {
              var s = o ? Object.getOwnPropertyDescriptor(e, a) : null
              s && (s.get || s.set)
                ? Object.defineProperty(i, a, s)
                : (i[a] = e[a])
            }
          ;(i.default = e), n && n.set(e, i)
        })(n(89526))
        var i = n(26228),
          o = n(46005),
          a = n(67557)
        function r(e) {
          if ('function' !== typeof WeakMap) return null
          var t = new WeakMap(),
            n = new WeakMap()
          return (r = function (e) {
            return e ? n : t
          })(e)
        }
        t.ImageYrl = function (e) {
          var t = e.styleProps,
            n = void 0 === t ? { ImageYrl: {}, image: {} } : t,
            r = e.testID,
            s = void 0 === r ? 'ImageYrl' : r,
            l = e.uri,
            c = e.resizeMode,
            d = void 0 === c ? 'contain' : c,
            p = e.onLayout,
            u = void 0 === p ? function () {} : p
          return (0, a.jsx)(i.View, {
            style: [o.ImageYrlStyle.ImageYrl, n.ImageYrl],
            testID: s,
            children: (0, a.jsx)(i.Image, {
              style: [o.ImageYrlStyle.image, n.image],
              source: { uri: l },
              resizeMode: d,
              onLayout: u,
              testID: `${s}_Image`,
            }),
          })
        }
      },
      46005: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ImageYrlStyle = void 0)
        var i = n(26228).StyleSheet.create({ ImageYrl: {}, image: {} })
        t.ImageYrlStyle = i
      },
      9837: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.InputTextYrl = void 0)
        !(function (e, t) {
          if (!t && e && e.__esModule) return e
          if (null === e || ('object' !== typeof e && 'function' !== typeof e))
            return { default: e }
          var n = r(t)
          if (n && n.has(e)) return n.get(e)
          var i = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor
          for (var a in e)
            if ('default' !== a && Object.prototype.hasOwnProperty.call(e, a)) {
              var s = o ? Object.getOwnPropertyDescriptor(e, a) : null
              s && (s.get || s.set)
                ? Object.defineProperty(i, a, s)
                : (i[a] = e[a])
            }
          ;(i.default = e), n && n.set(e, i)
        })(n(89526))
        var i = n(26228),
          o = n(62427),
          a = n(67557)
        function r(e) {
          if ('function' !== typeof WeakMap) return null
          var t = new WeakMap(),
            n = new WeakMap()
          return (r = function (e) {
            return e ? n : t
          })(e)
        }
        t.InputTextYrl = function (e) {
          var t = e.styleProps,
            n = void 0 === t ? { InputTextYrl: {}, inputText: {} } : t,
            r = e.multiline,
            s = void 0 !== r && r,
            l = e.numberOfLines,
            c = void 0 === l ? 3 : l,
            d = e.onChangeText,
            p = e.onSubmitEditing,
            u = e.placeholder,
            m = e.placeholderTextColor,
            g = e.testID,
            h = void 0 === g ? 'InputTextYrl' : g,
            f = e.value
          return (0, a.jsx)(i.SafeAreaView, {
            style: [o.InputTextYrlStyle.InputTextYrl, n.InputTextYrl],
            testID: h,
            children: (0, a.jsx)(i.TextInput, {
              style: [o.InputTextYrlStyle.inputText, n.inputText],
              testID: `${h}_TextInput`,
              multiline: s,
              numberOfLines: c,
              onChangeText: d,
              onSubmitEditing: p,
              value: f,
              placeholder: u,
              placeholderTextColor: m,
              returnKeyType: 'send',
              autoFocus: !0,
              blurOnSubmit: !0,
            }),
          })
        }
      },
      62427: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.InputTextYrlStyle = void 0)
        var i = n(26228).StyleSheet.create({
          InputTextYrl: { display: 'flex', flexDirection: 'row' },
          inputText: {
            width: '100%',
            height: 40,
            padding: 10,
            flex: 1,
            border: 0,
            outlineWidth: 0,
          },
        })
        t.InputTextYrlStyle = i
      },
      50690: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.LoaderOverlayYrl = void 0)
        i(n(89526))
        var o = n(26228),
          a = n(434),
          r = n(67557)
        t.LoaderOverlayYrl = function (e) {
          var t = e.propsStyle,
            n = void 0 === t ? { LoaderOverlay: {}, spinner: {} } : t,
            i = (e.isLoaderOverlayVisible, e.testID),
            s = void 0 === i ? 'LoaderOverlayYrl' : i
          return (0, r.jsx)(o.SafeAreaView, {
            style: [a.LoaderOverlayYrlStyle.LoaderOverlay, n.LoaderOverlay],
            testID: s,
            children: (0, r.jsx)(o.SafeAreaView, {
              style: [a.LoaderOverlayYrlStyle.spinner, n.spinner],
              testID: `${s}_View`,
            }),
          })
        }
      },
      434: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.LoaderOverlayYrlStyle = void 0)
        var i = n(26228).StyleSheet.create({
          LoaderOverlay: { flex: 1 },
          spinner: {
            height: 100,
            width: 100,
            position: 'absolute',
            top: '50%',
            left: '50%',
          },
        })
        t.LoaderOverlayYrlStyle = i
      },
      10783: (e, t, n) => {
        var i = n(64836)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ModalFrameYrl = void 0)
        i(n(89526))
        var o = n(26228),
          a = i(n(50221)),
          r = n(85354),
          s = n(12975),
          l = n(67557),
          c = 'web' === o.Platform.OS ? a.default : o.View
        t.ModalFrameYrl = function (e) {
          var t = e.styleProps,
            n =
              void 0 === t
                ? {
                    ModalFrameYrl: {},
                    imageBackground: {},
                    content: {},
                    buttonBackWrapper: {},
                    buttonCloseWrapper: {},
                  }
                : t,
            i = e.linearGradientColors,
            a = void 0 === i ? ['rgba(0,0,0,0)', 'rgba(0,0,0,0.5)'] : i,
            d = e.children,
            p =
              void 0 === d
                ? (0, l.jsx)(l.Fragment, {
                    children:
                      'Your app is rendered ModalFrameYrl default child content',
                  })
                : d,
            u = e.isShow,
            m = void 0 !== u && u,
            g = e.isShowImageBackground,
            h = void 0 !== g && g,
            f = e.testID,
            y = void 0 === f ? 'ModalFrameYrl' : f,
            A = e.buttonBackProps,
            v =
              void 0 === A
                ? {
                    styleProps: { ButtonYrl: {}, title: {} },
                    titleText: '',
                    testID: 'ModalFrameYrl-buttonBack',
                    disabled: !1,
                    onPress: function () {},
                    iconProps: {
                      styleProps: { IconYrl: {} },
                      library: 'Ionicons',
                      name: 'arrow-back-outline',
                      size: 24,
                      color: 'black',
                      testID: 'ModalFrameYrl-buttonBack-iconBack',
                    },
                  }
                : A,
            b = e.buttonCloseProps,
            S =
              void 0 === b
                ? {
                    styleProps: { ButtonYrl: {}, title: {} },
                    titleText: '',
                    testID: 'ModalFrameYrl-buttonClose',
                    disabled: !1,
                    onPress: function () {},
                    iconProps: {
                      styleProps: { IconYrl: {} },
                      onPress: function () {},
                      library: 'Ionicons',
                      name: 'close',
                      size: 24,
                      color: 'black',
                      testID: 'ModalFrameYrl-buttonClose-iconClose',
                    },
                  }
                : b,
            T = e.imageBackgroundSource,
            w = void 0 === T ? '' : T,
            P = e.isButtonBack,
            I = void 0 === P || P,
            C = e.isButtonClose,
            E = void 0 === C || C,
            x = { buttonBackProps: v, buttonCloseProps: S },
            k = (0, l.jsxs)(l.Fragment, {
              children: [
                I &&
                  (0, l.jsx)(o.View, {
                    style: [
                      r.ModalFrameYrlStyle.buttonBackWrapper,
                      n.buttonBackWrapper,
                    ],
                    testID: 'buttonBackWrapper',
                    children: (0, l.jsx)(
                      s.ButtonYrl,
                      Object.assign({}, x.buttonBackProps)
                    ),
                  }),
                E &&
                  (0, l.jsx)(o.View, {
                    style: [
                      r.ModalFrameYrlStyle.buttonCloseWrapper,
                      n.buttonCloseWrapper,
                    ],
                    testID: 'buttonCloseWrapper',
                    children: (0, l.jsx)(
                      s.ButtonYrl,
                      Object.assign({}, x.buttonCloseProps)
                    ),
                  }),
                (0, l.jsx)(o.View, {
                  style: [r.ModalFrameYrlStyle.content, n.content],
                  testID: 'content',
                  children: p,
                }),
              ],
            }),
            M = (0, l.jsx)(o.SafeAreaView, {
              style: [r.ModalFrameYrlStyle.ModalFrameYrl, n.ModalFrameYrl],
              testID: y,
              children: h
                ? (0, l.jsx)(o.ImageBackground, {
                    style: { flex: 1, zIndex: 10 },
                    source: w,
                    blurRadius: 5,
                    resizeMode: 'repeat',
                    imageStyle: [
                      r.ModalFrameYrlStyle.imageBackground,
                      n.imageBackground,
                    ],
                    testID: 'ImageBackground',
                    children: (0, l.jsx)(c, {
                      colors: a,
                      start: { x: 0, y: 0 },
                      end: { x: 1, y: 0 },
                      children: k,
                    }),
                  })
                : k,
            })
          return m ? M : null
        }
      },
      85354: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ModalFrameYrlStyle = void 0)
        var i = n(26228).StyleSheet.create({
          ModalFrameYrl: {
            position: 'absolute',
            zIndex: 10,
            left: 0,
            top: 0,
            width: '100%',
          },
          imageBackground: { backgroundColor: 'blue', opacity: 0.5 },
          buttonBackWrapper: {
            position: 'absolute',
            top: '0.5rem',
            left: '1rem',
          },
          buttonCloseWrapper: {
            position: 'absolute',
            top: '0.5rem',
            right: '1rem',
          },
          content: { margin: '3rem', borderRadius: 3 },
          hidden: { opacity: 0, height: 0, width: 0, flex: 0 },
        })
        t.ModalFrameYrlStyle = i
      },
      98054: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          Object.defineProperty(t, 'AnimatedYrl', {
            enumerable: !0,
            get: function () {
              return i.AnimatedYrl
            },
          }),
          Object.defineProperty(t, 'ButtonYrl', {
            enumerable: !0,
            get: function () {
              return o.ButtonYrl
            },
          }),
          Object.defineProperty(t, 'DeviceType', {
            enumerable: !0,
            get: function () {
              return m.DeviceType
            },
          }),
          Object.defineProperty(t, 'IconYrl', {
            enumerable: !0,
            get: function () {
              return a.IconYrl
            },
          }),
          Object.defineProperty(t, 'ImageYrl', {
            enumerable: !0,
            get: function () {
              return r.ImageYrl
            },
          }),
          Object.defineProperty(t, 'InputTextYrl', {
            enumerable: !0,
            get: function () {
              return s.InputTextYrl
            },
          }),
          Object.defineProperty(t, 'LoaderOverlayYrl', {
            enumerable: !0,
            get: function () {
              return l.LoaderOverlayYrl
            },
          }),
          Object.defineProperty(t, 'ModalFrameYrl', {
            enumerable: !0,
            get: function () {
              return c.ModalFrameYrl
            },
          }),
          Object.defineProperty(t, 'mediaParamsDefault', {
            enumerable: !0,
            get: function () {
              return g.mediaParamsDefault
            },
          }),
          Object.defineProperty(t, 'urlParamsDefault', {
            enumerable: !0,
            get: function () {
              return g.urlParamsDefault
            },
          }),
          Object.defineProperty(t, 'useAnimatedYrl', {
            enumerable: !0,
            get: function () {
              return d.useAnimatedYrl
            },
          }),
          Object.defineProperty(t, 'useIntervalYrl', {
            enumerable: !0,
            get: function () {
              return p.useIntervalYrl
            },
          }),
          Object.defineProperty(t, 'useLinkClickResYrl', {
            enumerable: !0,
            get: function () {
              return u.useLinkClickResYrl
            },
          }),
          Object.defineProperty(t, 'useMediaQueryResYrl', {
            enumerable: !0,
            get: function () {
              return m.useMediaQueryResYrl
            },
          }),
          Object.defineProperty(t, 'withDelayYrl', {
            enumerable: !0,
            get: function () {
              return A.withDelayYrl
            },
          }),
          Object.defineProperty(t, 'withElementDimensionsYrl', {
            enumerable: !0,
            get: function () {
              return v.withElementDimensionsYrl
            },
          }),
          Object.defineProperty(t, 'withParamsMediaYrl', {
            enumerable: !0,
            get: function () {
              return g.withParamsMediaYrl
            },
          }),
          Object.defineProperty(t, 'withPropsYrl', {
            enumerable: !0,
            get: function () {
              return y.withPropsYrl
            },
          }),
          Object.defineProperty(t, 'withStoreStateYrl', {
            enumerable: !0,
            get: function () {
              return h.withStoreStateYrl
            },
          }),
          Object.defineProperty(t, 'withUseContextYrl', {
            enumerable: !0,
            get: function () {
              return f.withUseContextYrl
            },
          })
        var i = n(99894),
          o = n(12975),
          a = n(42029),
          r = n(40350),
          s = n(9837),
          l = n(50690),
          c = n(10783),
          d = n(2922),
          p = n(36040),
          u = n(98880),
          m = n(78549),
          g = n(36471),
          h = n(22204),
          f = n(90357),
          y = n(13729),
          A = n(84130),
          v = n(49272)
      },
      71103: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.history = void 0)
        var i = (0, n(52585).createBrowserHistory)()
        t.history = i
      },
      23488: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.RecipeType = t.MutationStatus = t.GetRecipeDocument = void 0),
          (t.useGetRecipeLazyQuery = function (e) {
            var t = Object.assign({}, a, e)
            return i.useLazyQuery(l, t)
          }),
          (t.useGetRecipeQuery = function (e) {
            var t = Object.assign({}, a, e)
            return i.useQuery(l, t)
          })
        var i = (function (e, t) {
          if (!t && e && e.__esModule) return e
          if (null === e || ('object' !== typeof e && 'function' !== typeof e))
            return { default: e }
          var n = o(t)
          if (n && n.has(e)) return n.get(e)
          var i = {},
            a = Object.defineProperty && Object.getOwnPropertyDescriptor
          for (var r in e)
            if ('default' !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var s = a ? Object.getOwnPropertyDescriptor(e, r) : null
              s && (s.get || s.set)
                ? Object.defineProperty(i, r, s)
                : (i[r] = e[r])
            }
          ;(i.default = e), n && n.set(e, i)
          return i
        })(n(96701))
        function o(e) {
          if ('function' !== typeof WeakMap) return null
          var t = new WeakMap(),
            n = new WeakMap()
          return (o = function (e) {
            return e ? n : t
          })(e)
        }
        var a = {},
          r = (function (e) {
            return (e.Error = 'ERROR'), (e.Ok = 'OK'), e
          })({})
        t.MutationStatus = r
        var s = (function (e) {
          return (e.Common = 'COMMON'), (e.Vegan = 'VEGAN'), e
        })({})
        t.RecipeType = s
        var l = i.gql`
    query GetRecipe($id: String!) {
  recipe(id: $id) {
    id
    title
    description
    ingredients
  }
}
    `
        t.GetRecipeDocument = l
      },
      42480: () => {},
    },
    t = {}
  function n(i) {
    var o = t[i]
    if (void 0 !== o) return o.exports
    var a = (t[i] = { id: i, loaded: !1, exports: {} })
    return e[i].call(a.exports, a, a.exports, n), (a.loaded = !0), a.exports
  }
  ;(n.m = e),
    (() => {
      var e = []
      n.O = (t, i, o, a) => {
        if (!i) {
          var r = 1 / 0
          for (d = 0; d < e.length; d++) {
            for (var [i, o, a] = e[d], s = !0, l = 0; l < i.length; l++)
              (!1 & a || r >= a) && Object.keys(n.O).every(e => n.O[e](i[l]))
                ? i.splice(l--, 1)
                : ((s = !1), a < r && (r = a))
            if (s) {
              e.splice(d--, 1)
              var c = o()
              void 0 !== c && (t = c)
            }
          }
          return t
        }
        a = a || 0
        for (var d = e.length; d > 0 && e[d - 1][2] > a; d--) e[d] = e[d - 1]
        e[d] = [i, o, a]
      }
    })(),
    (n.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e
      return n.d(t, { a: t }), t
    }),
    (() => {
      var e,
        t = Object.getPrototypeOf
          ? e => Object.getPrototypeOf(e)
          : e => e.__proto__
      n.t = function (i, o) {
        if ((1 & o && (i = this(i)), 8 & o)) return i
        if ('object' === typeof i && i) {
          if (4 & o && i.__esModule) return i
          if (16 & o && 'function' === typeof i.then) return i
        }
        var a = Object.create(null)
        n.r(a)
        var r = {}
        e = e || [null, t({}), t([]), t(t)]
        for (
          var s = 2 & o && i;
          'object' == typeof s && !~e.indexOf(s);
          s = t(s)
        )
          Object.getOwnPropertyNames(s).forEach(e => (r[e] = () => i[e]))
        return (r.default = () => i), n.d(a, r), a
      }
    })(),
    (n.d = (e, t) => {
      for (var i in t)
        n.o(t, i) &&
          !n.o(e, i) &&
          Object.defineProperty(e, i, { enumerable: !0, get: t[i] })
    }),
    (n.g = (function () {
      if ('object' === typeof globalThis) return globalThis
      try {
        return this || new Function('return this')()
      } catch (e) {
        if ('object' === typeof window) return window
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = e => {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (n.nmd = e => ((e.paths = []), e.children || (e.children = []), e)),
    (n.p = './'),
    (() => {
      var e = { 179: 0 }
      n.O.j = t => 0 === e[t]
      var t = (t, i) => {
          var o,
            a,
            [r, s, l] = i,
            c = 0
          if (r.some(t => 0 !== e[t])) {
            for (o in s) n.o(s, o) && (n.m[o] = s[o])
            if (l) var d = l(n)
          }
          for (t && t(i); c < r.length; c++)
            (a = r[c]), n.o(e, a) && e[a] && e[a][0](), (e[a] = 0)
          return n.O(d)
        },
        i = (self.webpackChunkweb = self.webpackChunkweb || [])
      i.forEach(t.bind(null, 0)), (i.push = t.bind(null, i.push.bind(i)))
    })(),
    n.O(void 0, [285], () => n(38925))
  var i = n.O(void 0, [285], () => n(26654))
  i = n.O(i)
})()
//# sourceMappingURL=main.5c270a7f.js.map
