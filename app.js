/* =============== DATA =============== */
const CAREERS = [
  {id:'swe', name:'Software Engineer', short:'البرمجة وتطوير البرمجيات', cat:'Technology', icon:'💻', color:'#3B2E8C', desc:'تصميم وبناء برامج وتطبيقات تحل مشاكل حقيقية للناس والشركات.', overview:'هتتعلم إزاي تحوّل فكرة أو مشكلة لحل برمجي حقيقي: من التفكير المنطقي وكتابة الكود لحد بناء تطبيقات واختبارها ونشرها.', fit:['بتحب حل المشاكل والتفكير المنطقي','عندك صبر للتجربة وتصحيح الأخطاء','بتستمتع ببناء حاجات من الصفر'], skills:['Programming','Git & GitHub','Data Structures','APIs','Databases'], jobs:['Frontend Developer','Backend Developer','Full-Stack Developer','Software Engineer'], diff:'متوسط', time:'8-12 شهر', demand:'مرتفع جدًا', salary:'8-25 ألف ج.م'},
  {id:'cyber', name:'Cybersecurity Specialist', short:'الأمن السيبراني وحماية الأنظمة', cat:'Technology', icon:'🛡️', color:'#E15A5A', desc:'حماية الأنظمة والبيانات من الاختراقات والهجمات الإلكترونية.', overview:'الأمن السيبراني مش مجرد اختراق؛ هو فهم الشبكات والأنظمة، اكتشاف نقاط الضعف، مراقبة الهجمات، وتحسين حماية الشركات وبياناتها.', fit:['فضولي وبتحب تعرف الهجوم حصل إزاي','بتحب الشبكات والـLinux وحل الألغاز','دقيق وبتلاحظ التفاصيل الصغيرة'], skills:['Networking','Linux','TCP/IP','SIEM','Wireshark','Web Security','Incident Response'], jobs:['SOC Analyst','Cybersecurity Analyst','Security Engineer','Penetration Tester'], diff:'متوسط', time:'6-12 شهر', demand:'مرتفع جدًا', salary:'9-28 ألف ج.م'},
  {id:'data', name:'Data Analyst', short:'تحليل البيانات واتخاذ القرار', cat:'Technology', icon:'📊', color:'#4C8DFF', desc:'تحليل البيانات واستخراج رؤى تساعد الشركات تاخد قرارات أفضل.', overview:'هتتعامل مع البيانات الخام، تنظفها وتحللها وتحوّل الأرقام لرسومات وتقارير تساعد الشركات تفهم اللي بيحصل وتاخد قرارات أذكى.', fit:['بتحب الأرقام والتحليل','بتستمتع باكتشاف الأنماط','عندك اهتمام بالـExcel والتقارير'], skills:['Excel','SQL','Power BI','Statistics','Data Cleaning'], jobs:['Data Analyst','BI Analyst','Reporting Analyst','Junior Data Scientist'], diff:'متوسط', time:'5-9 شهور', demand:'مرتفع', salary:'7-20 ألف ج.م'},
  {id:'ux', name:'UI/UX Designer', short:'تصميم تجربة وواجهة المستخدم', cat:'Design', icon:'🎨', color:'#0FD6A6', desc:'تصميم تجارب وواجهات سهلة وممتعة للمستخدمين.', overview:'هتتعلم تفهم المستخدم، ترسم الـwireframes، تبني الواجهات وتختبر التجربة عشان المنتج يبقى سهل ومريح ومفيد.', fit:['عندك حس بصري واهتمام بالتفاصيل','بتحب تفهم احتياجات الناس','بتستمتع بالتجربة والتحسين المستمر'], skills:['Figma','UX Research','Wireframing','Prototyping','Design Systems'], jobs:['UI Designer','UX Designer','Product Designer','UX Researcher'], diff:'سهل-متوسط', time:'4-8 شهور', demand:'مرتفع', salary:'6-18 ألف ج.م'},
  {id:'net', name:'Network Engineer', short:'الشبكات والبنية التحتية', cat:'Technology', icon:'🌐', color:'#8A5CF6', desc:'بناء وإدارة شبكات الاتصال والبنية التحتية للإنترنت.', overview:'هتتعلم إزاي الأجهزة تتواصل مع بعض، وتبني وتدير الشبكات، وتتعامل مع الـrouting والـswitching والأعطال والبنية التحتية.', fit:['بتحب الأجهزة والشبكات','بتستمتع بتتبع الأعطال خطوة خطوة','مهتم بالـInternet والبنية التحتية'], skills:['CCNA Basics','TCP/IP','Routing','Switching','VLANs','Network Security'], jobs:['Network Engineer','NOC Engineer','Network Administrator','Infrastructure Engineer'], diff:'متوسط', time:'6-10 شهور', demand:'متوسط', salary:'6-16 ألف ج.م'},
  {id:'mkt', name:'Digital Marketer', short:'التسويق والنمو الرقمي', cat:'Marketing', icon:'📈', color:'#FFB648', desc:'الترويج للمنتجات والعلامات التجارية عبر المنصات الرقمية.', overview:'هتتعلم إزاي توصل للناس الصح، تبني حملات رقمية، تقيس النتائج، وتحسّن المحتوى والإعلانات لتحقيق أهداف واضحة.', fit:['بتحب التواصل وفهم الناس','عندك فضول تجاه المحتوى والترندات','بتحب التجربة وقياس النتائج'], skills:['Content Marketing','SEO','Social Media','Meta Ads','Analytics'], jobs:['Digital Marketer','Social Media Specialist','SEO Specialist','Performance Marketer'], diff:'سهل', time:'3-6 شهور', demand:'مرتفع', salary:'5-15 ألف ج.م'},
  {id:'gd', name:'Graphic Designer', short:'التصميم والهوية البصرية', cat:'Design', icon:'🖌️', color:'#F27EB0', desc:'ابتكار محتوى بصري وهوية بصرية جذابة للعلامات التجارية.', overview:'هتتعلم مبادئ التصميم والألوان والـtypography وتستخدم أدوات التصميم لإنتاج محتوى وهوية بصرية احترافية.', fit:['بتحب الرسم والألوان والتفاصيل','عندك خيال بصري','بتستمتع بتحويل الأفكار لصور'], skills:['Photoshop','Illustrator','Typography','Color Theory','Branding'], jobs:['Graphic Designer','Brand Designer','Visual Designer','Social Media Designer'], diff:'سهل', time:'3-6 شهور', demand:'متوسط', salary:'4-12 ألف ج.م'},
  {id:'pm', name:'Project Manager', short:'إدارة المشاريع والفرق', cat:'Business', icon:'📋', color:'#2D9CDB', desc:'تنظيم وقيادة فرق العمل لتسليم المشاريع في الميعاد.', overview:'هتتعلم التخطيط، توزيع المهام، متابعة الوقت والمخاطر والتواصل مع الفريق وأصحاب المصلحة لحد تسليم المشروع.', fit:['منظم وبتحب التخطيط','بتعرف تتواصل وتنسق بين الناس','بتحب المسؤولية وقيادة الفريق'], skills:['Project Planning','Agile','Jira','Communication','Risk Management'], jobs:['Project Coordinator','Project Manager','Scrum Master','Operations Coordinator'], diff:'متوسط', time:'6-10 شهور', demand:'متوسط', salary:'8-22 ألف ج.م'},
  {id:'fe', name:'Frontend Developer', short:'واجهات المواقع والتطبيقات', cat:'Technology', icon:'🧩', color:'#5C47C9', desc:'بناء واجهات المواقع والتطبيقات اللي بيتفاعل معاها المستخدم.', overview:'هتتعلم HTML وCSS وJavaScript وبعدين frameworks حديثة لبناء واجهات سريعة ومتجاوبة وسهلة الاستخدام.', fit:['بتحب تشوف نتيجة شغلك قدامك','عندك اهتمام بالتفاصيل البصرية','بتحب البرمجة والتجربة'], skills:['HTML','CSS','JavaScript','Git','React'], jobs:['Frontend Developer','React Developer','Web Developer','UI Developer'], diff:'متوسط', time:'5-9 شهور', demand:'مرتفع جدًا', salary:'7-22 ألف ج.م'},
  {id:'be', name:'Backend Developer', short:'الأنظمة والخوادم وقواعد البيانات', cat:'Technology', icon:'🗄️', color:'#241A5E', desc:'بناء الأنظمة والخوادم اللي بتشغل التطبيقات من ورا الكواليس.', overview:'هتتعلم إزاي تبني APIs وأنظمة backend وقواعد بيانات وتتعامل مع authentication والأداء والتكامل بين الخدمات.', fit:['بتحب المنطق والأنظمة','مهتم بقواعد البيانات والـAPIs','بتحب حل المشاكل المعقدة'], skills:['Node.js/Python','APIs','SQL','Authentication','Databases'], jobs:['Backend Developer','API Developer','Software Engineer','Platform Engineer'], diff:'متوسط-صعب', time:'7-12 شهر', demand:'مرتفع جدًا', salary:'8-24 ألف ج.م'},
];

const FILTERS = ['الكل','Technology','Business','Engineering','Design','Marketing','Healthcare','Media','Finance'];

const RESULT_MATCHES = []; // Calculated dynamically from the user's answers


const ROADMAPS = {
  swe: {
    title:'Roadmap: Software Engineering', time:'8–12 شهر', diff:'Intermediate', goal:'Junior Software Engineer',
    phases:[
      {n:'01', name:'أساسيات البرمجة', dur:'4-5 أسابيع', skills:['Programming Logic','Variables & Functions','OOP Basics','Problem Solving']},
      {n:'02', name:'هياكل البيانات والخوارزميات', dur:'5-6 أسابيع', skills:['Arrays','Linked Lists','Stacks & Queues','Searching & Sorting','Big-O']},
      {n:'03', name:'Git وقواعد البيانات', dur:'4-5 أسابيع', skills:['Git & GitHub','SQL','Database Design','CRUD','Basic Linux']},
      {n:'04', name:'تطوير التطبيقات والـAPIs', dur:'6-8 أسابيع', skills:['REST APIs','Authentication','Backend Basics','Testing','Error Handling']},
      {n:'05', name:'مشاريع Portfolio', dur:'5-7 أسابيع', skills:['Full Project','API Integration','Deployment','Documentation']},
      {n:'06', name:'جاهز للشغل', dur:'2-3 أسابيع', skills:['CV','GitHub Portfolio','LinkedIn','Technical Interviews']}
    ]
  },
  cyber: {
    title:'Roadmap: Cybersecurity', time:'6–12 شهر', diff:'Intermediate', goal:'Junior Cybersecurity Analyst',
    phases:[
      {n:'01', name:'أساسيات الكمبيوتر وLinux', dur:'3-4 أسابيع', skills:['Operating Systems','Linux Basics','Command Line','File Permissions']},
      {n:'02', name:'الشبكات', dur:'4-5 أسابيع', skills:['TCP/IP','DNS','HTTP/HTTPS','Firewalls','VPN','Ports']},
      {n:'03', name:'أساسيات الأمن السيبراني', dur:'4 أسابيع', skills:['CIA Triad','Authentication','Encryption','Vulnerabilities','Threats']},
      {n:'04', name:'أمن الويب والـSOC', dur:'6 أسابيع', skills:['SIEM','Wireshark','Burp Suite','Log Analysis','OWASP Top 10']},
      {n:'05', name:'مختبرات ومشاريع عملية', dur:'4-6 أسابيع', skills:['Home Lab','Network Monitoring','Security Investigation','Incident Report']},
      {n:'06', name:'جاهز للشغل', dur:'2-3 أسابيع', skills:['CV','LinkedIn','SOC Interview','Security Portfolio','Job Applications']}
    ]
  },
  data: {
    title:'Roadmap: Data Analysis', time:'5–9 شهور', diff:'Intermediate', goal:'Junior Data Analyst',
    phases:[
      {n:'01', name:'Excel وتحليل البيانات', dur:'3-4 أسابيع', skills:['Excel Formulas','Pivot Tables','Charts','Data Cleaning']},
      {n:'02', name:'SQL وقواعد البيانات', dur:'4-5 أسابيع', skills:['SELECT','JOINs','GROUP BY','Subqueries','Database Basics']},
      {n:'03', name:'الإحصاء وتحليل البيانات', dur:'4 أسابيع', skills:['Descriptive Statistics','Probability Basics','Correlation','Data Interpretation']},
      {n:'04', name:'Power BI وData Visualization', dur:'5-6 أسابيع', skills:['Power BI','DAX Basics','Dashboards','Data Modeling','Storytelling']},
      {n:'05', name:'مشاريع Portfolio', dur:'4-6 أسابيع', skills:['Sales Dashboard','Business Analysis','End-to-End Project','Presentation']},
      {n:'06', name:'جاهز للشغل', dur:'2-3 أسابيع', skills:['CV','Portfolio','Case Studies','Interview Practice']}
    ]
  },
  ux: {
    title:'Roadmap: UI/UX Design', time:'4–8 شهور', diff:'Beginner–Intermediate', goal:'Junior UI/UX Designer',
    phases:[
      {n:'01', name:'مبادئ التصميم', dur:'3-4 أسابيع', skills:['Visual Hierarchy','Color Theory','Typography','Layout','Design Principles']},
      {n:'02', name:'UX Research', dur:'3-4 أسابيع', skills:['User Interviews','Personas','User Journey','Competitive Analysis']},
      {n:'03', name:'Wireframes وInformation Architecture', dur:'3-4 أسابيع', skills:['User Flows','Wireframing','Sitemaps','Low-Fidelity Prototypes']},
      {n:'04', name:'Figma وUI Design', dur:'5-6 أسابيع', skills:['Figma','Components','Auto Layout','Design Systems','Responsive UI']},
      {n:'05', name:'مشاريع Case Studies', dur:'4-6 أسابيع', skills:['Mobile App','Web Product','Usability Testing','Case Study']},
      {n:'06', name:'جاهز للشغل', dur:'2-3 أسابيع', skills:['Portfolio','Behance','CV','Design Interview']}
    ]
  },
  net: {
    title:'Roadmap: Network Engineering', time:'6–10 شهور', diff:'Intermediate', goal:'Junior Network Engineer / NOC Engineer',
    phases:[
      {n:'01', name:'أساسيات الشبكات', dur:'4 أسابيع', skills:['OSI Model','TCP/IP','IPv4/IPv6','Ethernet','Subnetting']},
      {n:'02', name:'Switching', dur:'4-5 أسابيع', skills:['VLANs','Trunking','STP','EtherChannel','MAC Tables']},
      {n:'03', name:'Routing', dur:'5-6 أسابيع', skills:['Static Routing','OSPF','Default Routes','Inter-VLAN Routing','NAT']},
      {n:'04', name:'Network Services & Security', dur:'4-5 أسابيع', skills:['DHCP','DNS','ACLs','VPN Basics','Network Monitoring']},
      {n:'05', name:'Labs ومشاريع عملية', dur:'4-6 أسابيع', skills:['Cisco Packet Tracer','GNS3/EVE-NG','Network Design','Troubleshooting']},
      {n:'06', name:'جاهز للشغل', dur:'2-3 أسابيع', skills:['CCNA Preparation','NOC Scenarios','CV','Technical Interview']}
    ]
  },
  mkt: {
    title:'Roadmap: Digital Marketing', time:'3–6 شهور', diff:'Beginner', goal:'Junior Digital Marketer',
    phases:[
      {n:'01', name:'أساسيات التسويق', dur:'2-3 أسابيع', skills:['Marketing Funnel','Target Audience','Buyer Persona','KPIs']},
      {n:'02', name:'Content & Social Media', dur:'4 أسابيع', skills:['Content Strategy','Copywriting','Social Platforms','Content Calendar']},
      {n:'03', name:'SEO', dur:'3-4 أسابيع', skills:['Keyword Research','On-Page SEO','Technical SEO Basics','Search Intent']},
      {n:'04', name:'Paid Ads & Analytics', dur:'4-5 أسابيع', skills:['Meta Ads','Google Ads Basics','GA4','Conversion Tracking','A/B Testing']},
      {n:'05', name:'حملات ومشاريع عملية', dur:'3-4 أسابيع', skills:['Campaign Plan','Ad Creatives','Performance Report','Optimization']},
      {n:'06', name:'جاهز للشغل', dur:'2 أسابيع', skills:['Portfolio','Case Studies','CV','Client Communication']}
    ]
  },
  gd: {
    title:'Roadmap: Graphic Design', time:'3–6 شهور', diff:'Beginner', goal:'Junior Graphic Designer',
    phases:[
      {n:'01', name:'مبادئ التصميم', dur:'3-4 أسابيع', skills:['Composition','Color Theory','Typography','Visual Hierarchy']},
      {n:'02', name:'Photoshop', dur:'3-4 أسابيع', skills:['Layers','Selections','Masking','Retouching','Compositing']},
      {n:'03', name:'Illustrator', dur:'3-4 أسابيع', skills:['Vector Graphics','Pen Tool','Logo Design','Icons','Shapes']},
      {n:'04', name:'Branding & Social Design', dur:'4-5 أسابيع', skills:['Brand Identity','Social Posts','Print Basics','Design Systems']},
      {n:'05', name:'Portfolio Projects', dur:'4-5 أسابيع', skills:['Logo Project','Brand Identity','Social Campaign','Presentation']},
      {n:'06', name:'جاهز للشغل', dur:'2 أسابيع', skills:['Behance Portfolio','CV','Freelance Profile','Client Briefs']}
    ]
  },
  pm: {
    title:'Roadmap: Project Management', time:'6–10 شهور', diff:'Intermediate', goal:'Project Coordinator / Junior Project Manager',
    phases:[
      {n:'01', name:'أساسيات إدارة المشاريع', dur:'3-4 أسابيع', skills:['Project Lifecycle','Scope','Stakeholders','Project Charter']},
      {n:'02', name:'Planning & Scheduling', dur:'4 أسابيع', skills:['WBS','Gantt Charts','Milestones','Resource Planning']},
      {n:'03', name:'Agile & Scrum', dur:'4 أسابيع', skills:['Agile Principles','Scrum','Sprints','Backlog','Jira']},
      {n:'04', name:'Risk & Communication', dur:'4 أسابيع', skills:['Risk Register','Issue Tracking','Status Reports','Team Communication']},
      {n:'05', name:'مشروع تطبيقي', dur:'4-5 أسابيع', skills:['Project Plan','Jira Board','Budget Basics','Project Report']},
      {n:'06', name:'جاهز للشغل', dur:'2-3 أسابيع', skills:['CV','PM Interview','CAPM Basics','Job Applications']}
    ]
  },
  fe: {
    title:'Roadmap: Frontend Development', time:'5–9 شهور', diff:'Intermediate', goal:'Junior Frontend Developer',
    phases:[
      {n:'01', name:'HTML & Web Basics', dur:'3 أسابيع', skills:['HTML5','Semantic HTML','Accessibility','HTTP Basics']},
      {n:'02', name:'CSS & Responsive Design', dur:'4-5 أسابيع', skills:['CSS3','Flexbox','Grid','Responsive Design','Animations']},
      {n:'03', name:'JavaScript', dur:'6-8 أسابيع', skills:['ES6+','DOM','Events','Async/Await','APIs']},
      {n:'04', name:'Git وReact', dur:'6-8 أسابيع', skills:['Git & GitHub','React','Components','Hooks','State Management']},
      {n:'05', name:'مشاريع Frontend', dur:'5-6 أسابيع', skills:['Landing Page','Dashboard','API Project','Deployment']},
      {n:'06', name:'جاهز للشغل', dur:'2-3 أسابيع', skills:['Portfolio','GitHub','CV','Frontend Interview']}
    ]
  },
  be: {
    title:'Roadmap: Backend Development', time:'7–12 شهر', diff:'Intermediate–Advanced', goal:'Junior Backend Developer',
    phases:[
      {n:'01', name:'Programming Fundamentals', dur:'4-5 أسابيع', skills:['Python/JavaScript','OOP','Data Structures','Error Handling']},
      {n:'02', name:'Databases & SQL', dur:'4-5 أسابيع', skills:['SQL','PostgreSQL/MySQL','Relationships','Indexes','Transactions']},
      {n:'03', name:'APIs & Backend Framework', dur:'6-8 أسابيع', skills:['REST APIs','Node.js/Python','Routing','Middleware','Validation']},
      {n:'04', name:'Authentication & Security', dur:'4-5 أسابيع', skills:['JWT','Sessions','Authorization','Hashing','OWASP Basics']},
      {n:'05', name:'Projects & Deployment', dur:'5-7 أسابيع', skills:['Production API','Docker Basics','Cloud Deployment','Logging','Testing']},
      {n:'06', name:'جاهز للشغل', dur:'2-3 أسابيع', skills:['Backend Portfolio','GitHub','CV','Technical Interview']}
    ]
  }
};

const RESOURCES = [
  {name:'Intro to Networking', plat:'Cisco Academy', free:true, dur:'20 ساعة', rate:'4.7'},
  {name:'CompTIA Security+ Prep', plat:'Udemy', free:false, dur:'35 ساعة', rate:'4.8'},
  {name:'Linux for Beginners', plat:'YouTube', free:true, dur:'6 ساعات', rate:'4.6'},
  {name:'Wireshark Deep Dive', plat:'Coursera', free:false, dur:'12 ساعة', rate:'4.5'},
];

const STORIES = [
  {name:'كيرلس', age:21, from:'كلية مش عارف نفسه', to:'Network Engineer', quote:'كنت داخل كلية مش عارف أنا عايز إيه، وكنت ببدأ كورسات كتير ومكملش. بعد ما اكتشفت إن ميولي ناحية الشبكات، بدأت Roadmap واحدة والتزمت بيها.', time:'9 شهور'},
  {name:'مارتينا', age:23, from:'خريجة تجارة', to:'UX Designer', quote:'اتخرجت من كلية تجارة ومكنش عندي أي فكرة عن التصميم. الاختبار وجهني ناحية UX، وبعد Roadmap واضحة بقيت شغالة فريلانس.', time:'7 شهور'},
  {name:'يوسف', age:19, from:'مش عارف يدخل كلية إيه', to:'Data Analyst', quote:'كنت هدخل كلية عشوائي عشان الناس بتقول إنها كويسة. الاختبار ساعدني أعرف إن أنا بحب الأرقام والتحليل، وده غيّر قراري كله.', time:'11 شهر'},
];

const MENTORS = [
  {name:'مارينا مجدي', role:'Senior Graphic Designer & Trainer', field:'Teaching & Design', years:6, mentees:82, rating:4.9},
  {name:'بولا ناجي', role:'يعني هي جت عليا', field:'Design', years:0, mentees:0, rating:0},
  {name:'مينا مجدي', role:'Communication Engineer', field:'Engineering', years:9, mentees:110, rating:5.0},
];

/* =============== QUESTIONS =============== */
const QUESTIONS = [
  {q:'إيه أكتر حاجة بتحب تعملها؟', opts:['أحل مشكلة أو لغز','أعمل حاجة شكلها حلو ومختلف','أفهم الأرقام وأطلع منها نتيجة','أتكلم وأتعامل مع الناس','أنظم حاجة وأخليها تمشي كويس']},
  {q:'لما يكون قدامك وقت فاضي، إيه اللي ممكن تستمتع بيه أكتر؟', opts:['ألعاب أو تحديات تفكير','رسم أو تصوير أو تصميم','قراءة ومقارنة معلومات','خروج وكلام مع أصحابك','ترتيب خطط أو تنظيم حاجة']},
  {q:'لو هتعمل مشروع جديد، إيه أكتر جزء هيشدك؟', opts:['حل الجزء الصعب','اختيار الشكل والألوان','فهم النتائج والأرقام','فهم الناس واحتياجاتهم','تحديد المهام والوقت']},
  {q:'لما حاجة متشتغلش من أول مرة، بتعمل إيه غالبًا؟', opts:['أجرب وأدور على السبب','أجرب طريقة جديدة','أقارن المعلومات وأحللها','أسأل حد وأناقش الموضوع','أقسم المشكلة لخطوات']},
  {q:'إيه أكتر حاجة بتحب الناس تقولها عنك؟', opts:['بيعرف يحل المشاكل','عنده أفكار حلوة','بيفهم التفاصيل','بيعرف يتعامل مع الناس','منظم ويمكن الاعتماد عليه']},
  {q:'لو اتعلمت حاجة جديدة، إيه الطريقة اللي تفضلها؟', opts:['أجرب بإيدي','أشوف مثال وأقلده','أقرأ وأفهم الأول','أتعلم مع حد أو أسأله','أمشي بخطة خطوة بخطوة']},
  {q:'في شغل الفريق، إيه الدور اللي ترتاح له أكتر؟', opts:['أحل المشاكل اللي تظهر','أقترح أفكار وشكل جديد','أراجع المعلومات والنتائج','أتواصل مع الناس','أنظم الشغل وأتابع المهام']},
  {q:'إيه نوع الإنجاز اللي يفرحك أكتر؟', opts:['إني أحل حاجة كانت صعبة','إني أطلع حاجة جميلة ومميزة','إني أوصل لاستنتاج مهم','إني أساعد شخص أو أقنعه','إني أخلص خطة كاملة بنجاح']},
  {q:'لو عندك مشكلة ومفيش حد حواليك يساعدك، إيه أول حاجة تعملها؟', opts:['أجرب أفهمها وأحلها بنفسي','أفكر في فكرة مختلفة','أجمع معلومات عنها','أدور على شخص ممكن يفيدني','أكتب الخطوات وأبدأ واحدة واحدة']},
  {q:'أنهي وصف أقرب ليك؟', opts:['بحب التحديات وحل المشاكل','بحب الإبداع والتجديد','بحب الفهم والتحليل','بحب الناس والتواصل','بحب التنظيم وتحقيق الأهداف']}
];

/* =============== STATE =============== */
let progressState = {}; // per career id -> array of bool per phase
let selectedCareerId = localStorage.getItem('selectedCareerId') || null;

/* =============== RENDER HELPERS =============== */
function iconChip(c){
  return `<div class="career-card" onclick="openCareerDetail('${c.id}')">
    <div class="career-card-top"><div class="career-icon" style="background:${c.color}">${c.icon}</div><span class="career-category">${c.cat}</span></div>
    <h4>${c.name}</h4>
    <div class="desc">${c.desc}</div>
    <div class="career-meta">
      <span class="meta-pill">⏱ ${c.time}</span>
      <span class="meta-pill">📶 ${c.demand}</span>
      <span class="meta-pill">💰 ${c.salary}</span>
    </div>
    <button class="btn btn-ghost btn-sm btn-block" onclick="event.stopPropagation(); openCareerDetail('${c.id}')">شوف التفاصيل</button>
  </div>`;
}

function renderLandingPreview(){
  document.getElementById('landing-career-preview').innerHTML = CAREERS.slice(0,3).map(iconChip).join('');
}

function renderStories(){
  document.getElementById('story-grid').innerHTML = STORIES.map(s=>`
    <div class="story-card">
      <div style="display:flex; align-items:center; gap:12px;">
        <div class="story-avatar">${s.name[0]}</div>
        <div><b style="font-family:'Cairo';">${s.name} — ${s.age} سنة</b><div style="font-size:12.5px; color:var(--ink-soft);">بدأ من: ${s.from}</div></div>
      </div>
      <div class="story-quote">"${s.quote}"</div>
      <div class="story-path">From Lost → ${s.to} <span style="color:var(--ink-soft); font-weight:500; font-size:12.5px;">(${s.time})</span></div>
    </div>`).join('');
}

function mentorCard(m){
  return `<div class="mentor-card">
    <div class="mentor-avatar">${m.name[0]}</div>
    <h4>${m.name}</h4>
    <div class="role">${m.role}</div>
    <div class="mentor-stats">
      <div><b>${m.years}</b> سنين خبرة</div>
      <div>⭐ <b>${m.rating}</b></div>
      <div><b>${m.mentees}</b> mentee</div>
    </div>
    <button class="btn btn-primary btn-sm btn-block" onclick="showToast('تم إرسال طلب الحجز مع ${m.name} ✅')">احجز جلسة</button>
  </div>`;
}
function renderMentors(){
  document.getElementById('mentor-grid-preview').innerHTML = MENTORS.map(mentorCard).join('');
  document.getElementById('mentor-grid-full').innerHTML = MENTORS.map(mentorCard).join('');
}

let activeFilter = 'الكل';
function renderFilters(){
  document.getElementById('filter-chips').innerHTML = FILTERS.map(f=>
    `<button class="chip ${f===activeFilter?'active':''}" onclick="setFilter('${f}')">${f}</button>`).join('');
}
function setFilter(f){ activeFilter = f; renderFilters(); renderCareers();
updateSelectedCareerUI(); }
function renderCareers(){
  const term = document.getElementById('search-input').value.trim().toLowerCase();
  let list = CAREERS.filter(c => activeFilter==='الكل' || c.cat===activeFilter);
  if(term) list = list.filter(c => [c.name,c.short,c.desc,c.cat,...c.skills,...c.jobs].join(' ').toLowerCase().includes(term));
  document.getElementById('explore-grid').innerHTML = list.length ? list.map(iconChip).join('') :
    `<div class="empty-hint" style="grid-column:1/-1;">مفيش نتائج مطابقة. جرّب كلمة تانية أو فلتر مختلف.</div>`;
}

/* =============== ASSESSMENT LOGIC =============== */
const TRAITS = ['logic','creative','analytical','people','organizing','curious','handsOn','empathy','leadership'];
const OPTION_TRAITS = [
  ['logic','handsOn'], ['creative','curious'], ['analytical','curious'], ['people','empathy'], ['organizing','leadership']
];
const CAREER_TRAITS = {
  swe:{logic:1.0,creative:.25,analytical:.75,people:.15,organizing:.35,curious:.7,handsOn:.65,empathy:.15,leadership:.15},
  cyber:{logic:.9,creative:.1,analytical:.8,people:.1,organizing:.35,curious:.95,handsOn:.65,empathy:.1,leadership:.1},
  data:{logic:.55,creative:.15,analytical:1.0,people:.25,organizing:.55,curious:.7,handsOn:.2,empathy:.2,leadership:.15},
  ux:{logic:.2,creative:1.0,analytical:.45,people:.75,organizing:.35,curious:.65,handsOn:.35,empathy:.85,leadership:.2},
  net:{logic:.85,creative:.1,analytical:.65,people:.2,organizing:.6,curious:.65,handsOn:.9,empathy:.1,leadership:.2},
  mkt:{logic:.2,creative:.75,analytical:.45,people:.9,organizing:.45,curious:.7,handsOn:.15,empathy:.7,leadership:.5},
  gd:{logic:.1,creative:1.0,analytical:.2,people:.35,organizing:.35,curious:.55,handsOn:.65,empathy:.35,leadership:.15},
  pm:{logic:.4,creative:.3,analytical:.5,people:.85,organizing:1.0,curious:.45,handsOn:.2,empathy:.65,leadership:.9},
  fe:{logic:.75,creative:.6,analytical:.45,people:.25,organizing:.35,curious:.7,handsOn:.65,empathy:.2,leadership:.15},
  be:{logic:.9,creative:.2,analytical:.75,people:.15,organizing:.55,curious:.75,handsOn:.6,empathy:.15,leadership:.2}
};
const TRAIT_LABELS = {
  logic:'حل المشاكل', creative:'الإبداع', analytical:'التحليل', people:'التواصل', organizing:'التنظيم',
  curious:'حب الاستكشاف', handsOn:'التطبيق العملي', empathy:'فهم الناس', leadership:'القيادة'
};
let currentQ = 0;
let answers = [];
function startAssessment(){ currentQ=0; answers=[]; go('assess'); renderQuestion(); }
function renderQuestion(){
  const total=QUESTIONS.length, item=QUESTIONS[currentQ];
  document.getElementById('q-counter').textContent=`السؤال ${currentQ+1} من ${total}`;
  const pct=Math.round(((currentQ+1)/total)*100);
  document.getElementById('q-percent').textContent=pct+'%';
  document.getElementById('q-progress').style.width=pct+'%';
  document.getElementById('q-text').textContent=item.q;
  const letters=['A','B','C','D','E'];
  document.getElementById('q-opts').innerHTML=item.opts.map((o,i)=>`<div class="opt ${answers[currentQ]===i?'selected':''}" onclick="selectOption(${i})"><span class="letter">${letters[i]}</span> ${o}</div>`).join('');
  document.getElementById('q-back').style.visibility=currentQ===0?'hidden':'visible';
}
function selectOption(i){
  answers[currentQ]=i; renderQuestion();
  setTimeout(()=>{ if(currentQ<QUESTIONS.length-1){currentQ++;renderQuestion();}else finishAssessment(); },350);
}
function prevQuestion(){if(currentQ>0){currentQ--;renderQuestion();}}
function calculateAssessment(){
  const traitScores=Object.fromEntries(TRAITS.map(t=>[t,0]));
  answers.forEach((answer,q)=>{
    const traits=OPTION_TRAITS[answer]||[];
    traits.forEach((t,idx)=>{traitScores[t]+=(idx===0?1:.65);});
  });
  const maxTrait=Math.max(...Object.values(traitScores),1);
  const careerScores=CAREERS.map(c=>{
    const weights=CAREER_TRAITS[c.id]||{};
    let score=0, max=0;
    TRAITS.forEach(t=>{const w=weights[t]||0; score+=traitScores[t]*w; max+=maxTrait*w;});
    return {id:c.id, raw: max?score/max:0};
  }).sort((a,b)=>b.raw-a.raw);
  const top=careerScores.slice(0,4);
  const maxTop=top[0]?.raw||1;
  return {traitScores, matches:top.map((x,i)=>({id:x.id,pct:Math.max(45,Math.min(72,Math.round(45+(x.raw/maxTop)*27-(i*3))))}))};
}
function getDynamicProfile(traitScores){
  const sorted=TRAITS.slice().sort((a,b)=>traitScores[b]-traitScores[a]);
  const strengths=sorted.slice(0,4).map(t=>TRAIT_LABELS[t]);
  const growth=sorted.slice(-3).reverse().map(t=>TRAIT_LABELS[t]);
  const top=sorted[0];
  const desc={logic:'بتحب تفهم المشكلة وتوصل للحل خطوة خطوة.',creative:'عندك ميل واضح للأفكار الجديدة وتحويلها لحاجة مختلفة.',analytical:'بتحب تفهم التفاصيل وتقارن المعلومات قبل ما تقرر.',people:'مرتاح في التعامل مع الناس وفهم احتياجاتهم.',organizing:'بتحب ترتيب الأمور وتحويلها لخطوات واضحة.',curious:'فضولي وبتحب تكتشف حاجات جديدة وتجربها.',handsOn:'بتتعلم أحسن لما تجرب بإيدك وتشوف النتيجة.',empathy:'عندك اهتمام واضح بالناس واحتياجاتهم.',leadership:'بتحب تحمل المسؤولية وتحرك الفريق ناحية هدف واضح.'}[top]||'عندك مزيج من أكتر من ميول، وده طبيعي جدًا في بداية اكتشاف الطريق.';
  return {strengths,growth,title:'النتيجة حسب ميولك',desc};
}
function finishAssessment(){renderResults();go('results');}
function renderResults(){
  const result=calculateAssessment();
  const profile=getDynamicProfile(result.traitScores);
  document.getElementById('match-grid').innerHTML=result.matches.map(m=>{
    const c=CAREERS.find(x=>x.id===m.id); return `<div class="match-row" onclick="openCareerDetail('${c.id}')" style="cursor:pointer;"><div class="m-icon" style="background:${c.color}">${c.icon}</div><div class="m-info"><b>${c.name} — ${m.pct}%</b><div class="match-bar"><span style="width:${m.pct}%"></span></div></div><div class="match-pct">${m.pct}%</div></div>`;
  }).join('');
  document.getElementById('persona-title').textContent=profile.title;
  document.getElementById('persona-desc').textContent=profile.desc;
  document.querySelector('.strengths-wrap .strength-box:first-child > div').innerHTML=profile.strengths.map(x=>`<span class="tag-pill">${x}</span>`).join('');
  document.querySelector('.strengths-wrap .strength-box:nth-child(2) > div').innerHTML=profile.growth.map(x=>`<span class="tag-pill">${x}</span>`).join('');
  const best=result.matches[0]?.id;
  const btn=document.getElementById('results-roadmap-btn');
  if(btn){btn.onclick=()=>best?openCareerRoadmap(best):openSelectedRoadmap();}
  if(best){selectedCareerId=best;localStorage.setItem('selectedCareerId',best);updateSelectedCareerUI();}
}

/* =============== CAREER DETAILS =============== */
function openCareerDetail(id){
  const c = CAREERS.find(x=>x.id===id);
  if(!c) return;
  selectedCareerId = id;
  localStorage.setItem('selectedCareerId', id);
  updateSelectedCareerUI();
  document.getElementById('cd-icon').textContent = c.icon;
  document.getElementById('cd-icon').style.background = c.color;
  document.getElementById('cd-cat').textContent = c.cat;
  document.getElementById('cd-title').textContent = c.name;
  document.getElementById('cd-desc').textContent = c.desc;
  document.getElementById('cd-overview').textContent = c.overview;
  document.getElementById('cd-meta').innerHTML = [
    ['⏱','مدة البداية',c.time],['📶','الطلب',c.demand],['💰','متوسط البداية',c.salary],['🎯','المستوى',c.diff]
  ].map(x=>`<div><span>${x[0]}</span><small>${x[1]}</small><b>${x[2]}</b></div>`).join('');
  document.getElementById('cd-fit').innerHTML = c.fit.map(x=>`<li>${x}</li>`).join('');
  document.getElementById('cd-skills').innerHTML = c.skills.map(x=>`<span class="detail-tag">${x}</span>`).join('');
  document.getElementById('cd-jobs').innerHTML = c.jobs.map(x=>`<div class="job-item"><span>✓</span><b>${x}</b></div>`).join('');
  document.getElementById('cd-roadmap-btn').onclick = ()=>openCareerRoadmap(id);
  go('career-detail');
}

function updateSelectedCareerUI(){
  const c = CAREERS.find(x=>x.id===selectedCareerId);
  const nav = document.getElementById('nav-roadmap-link');
  const side = document.getElementById('sidebar-roadmap-label');
  const goal = document.getElementById('dash-goal-title');
  const fill = document.getElementById('dash-progress-fill');
  const text = document.getElementById('dash-progress-text');
  if(nav) nav.textContent = c ? `Roadmap: ${c.name}` : 'الـRoadmap';
  if(side) side.textContent = c ? `Roadmap: ${c.name}` : 'الـRoadmap';
  if(goal) goal.textContent = c ? (ROADMAPS[c.id]?.goal || c.name) : 'اختار مجال عشان تبدأ';
  if(c && ROADMAPS[c.id]){
    const rm = ROADMAPS[c.id];
    const state = progressState[c.id] || rm.phases.map(()=>false);
    const pct = Math.round(state.filter(Boolean).length / rm.phases.length * 100);
    if(fill) fill.style.width = pct+'%';
    if(text) text.textContent = pct+'% Complete';
  } else {
    if(fill) fill.style.width = '0%';
    if(text) text.textContent = '0% Complete';
  }
}

function openSelectedRoadmap(){
  if(!selectedCareerId || !ROADMAPS[selectedCareerId]){
    showToast('اختار مجال الأول عشان نفتح الـRoadmap بتاعته 👈');
    go('explore');
    return;
  }
  openCareerRoadmap(selectedCareerId);
}

/* =============== ROADMAP =============== */
function openCareerRoadmap(id){
  if(!ROADMAPS[id]) return openSelectedRoadmap();
  selectedCareerId = id;
  localStorage.setItem('selectedCareerId', id);
  updateSelectedCareerUI();
  const rm = ROADMAPS[id];
  document.getElementById('rm-title').textContent = rm.title;
  document.getElementById('rm-time').textContent = rm.time;
  document.getElementById('rm-diff').textContent = rm.diff;
  document.getElementById('rm-goal').textContent = rm.goal;

  if(!progressState[id]) progressState[id] = rm.phases.map(()=>false);

  renderRoadmap(id);
  go('roadmap');
}
function renderRoadmap(id){
  const rm = ROADMAPS[id];
  if(!rm) return;
  const state = progressState[id];
  const doneCount = state.filter(Boolean).length;
  const pct = Math.round((doneCount/rm.phases.length)*100);
  document.getElementById('rm-ring').style.setProperty('--p', pct);
  document.getElementById('rm-pct').textContent = pct+'%';

  document.getElementById('rm-timeline').innerHTML = rm.phases.map((p,i)=>{
    const isDone = state[i];
    const isActive = !isDone && (i===0 || state[i-1]);
    const cls = isDone ? 'done' : (isActive ? 'active' : '');
    return `<div class="tl-item ${cls}">
      <div class="tl-dot">${isDone ? '✓' : p.n}</div>
      <div class="tl-card">
        <div class="tl-top">
          <div><h4>Phase ${p.n} — ${p.name}</h4></div>
          <span class="tl-dur">⏱ ${p.dur}</span>
        </div>
        <div class="tl-skills">${p.skills.map(s=>`<span class="tag-pill">${s}</span>`).join('')}</div>
        <label class="tl-check">
          <input type="checkbox" ${isDone?'checked':''} ${isActive||isDone?'':'disabled'} onchange="togglePhase('${id}', ${i})">
          ${isDone ? 'اتعملت ✅' : 'علّمها لما تخلصها'}
        </label>
      </div>
    </div>`;
  }).join('');

  document.querySelector('#view-roadmap .wrap').querySelectorAll('.res-anchor').forEach(e=>e.remove());
}
function togglePhase(id, i){
  const nextValue = !progressState[id][i];
  progressState[id][i] = nextValue;
  if(nextValue){
    showToast('🎉 عاش! خلصت مرحلة جديدة في الروودماب.');
  } else {
    for(let j=i+1; j<progressState[id].length; j++) progressState[id][j]=false;
    showToast('تم تحديث تقدمك. المرحلة التالية هتفتح بعد ما تخلص دي.');
  }
  renderRoadmap(id);
}

/* =============== TOAST =============== */
let toastTimer;
function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>t.classList.remove('show'), 2800);
}

/* =============== ROUTER =============== */
function go(view){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  const el = document.getElementById('view-'+view);
  if(el){
    el.classList.add('active');
    window.scrollTo({top:0, behavior:'smooth'});
    closeMobileNav();
    return;
  }
  goToSection(view);
}

function goToSection(sectionId){
  const target = document.getElementById(sectionId);
  if(!target) return;
  const landing = document.getElementById('view-landing');
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  landing.classList.add('active');
  closeMobileNav();
  requestAnimationFrame(()=>target.scrollIntoView({behavior:'smooth', block:'start'}));
}

function closeMobileNav(){
  const links = document.querySelector('.nav-links');
  const burger = document.querySelector('.nav-burger');
  if(!links) return;
  links.classList.remove('mobile-open');
  links.removeAttribute('style');
  links.dataset.open='false';
  if(burger) burger.setAttribute('aria-expanded','false');
  closeCareerMenu();
}
window.addEventListener('resize', ()=>{ if(window.innerWidth > 980) closeMobileNav(); });
function toggleMobileNav(){
  const links = document.querySelector('.nav-links');
  const burger = document.querySelector('.nav-burger');
  const isOpen = links.dataset.open === 'true';
  if(isOpen){ closeMobileNav(); return; }
  links.classList.add('mobile-open');
  links.dataset.open='true';
  if(burger) burger.setAttribute('aria-expanded','true');
}
function toggleCareerMenu(e){
  e.stopPropagation();
  document.getElementById('career-menu').classList.toggle('open');
}
function closeCareerMenu(){
  const menu=document.getElementById('career-menu');
  if(menu) menu.classList.remove('open');
}
document.addEventListener('click', e=>{
  if(!e.target.closest('.nav-dropdown')) closeCareerMenu();
});

/* =============== INIT =============== */
renderLandingPreview();
renderStories();
renderMentors();
renderFilters();
renderCareers();