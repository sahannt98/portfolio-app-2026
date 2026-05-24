const portfolioData = {
  profile: {
    name: "Sahan Nayanajith",
    title: "AI Researcher & Software Engineer",
    subTitle: "Top Rated Freelancer on Upwork",
    avatar: "./assets/profile.jpg",
    cvUrl: "./assets/Sahan-Nayanajith-CV.pdf",
    email: "sahantm0@gmail.com",
    phone: "+94 769024552",
    location: "Sri Lanka",
    github: "https://github.com/sahannt98",
    linkedin: "https://linkedin.com/in/sahannt/",
    summary: "B.Sc. Engineering Honours graduate from the University of Moratuwa specializing in AI, Machine Learning, and Software Engineering. Top Rated Freelancer on Upwork with a track record of delivering advanced AI integrations, LLM-powered applications, and robust enterprise software solutions."
  },
  stats: {
    badge: "Top Rated",
    jobSuccess: "100%",
    freelanceStatus: "Active",
    globalClients: "USA, Netherlands, Australia, India"
  },
  researchInterests: [
    { title: "Agentic AI", description: "Designing autonomous multi-agent systems and advanced prompt/tool execution frameworks.", icon: "brain" },
    { title: "Quantum Computing", description: "Exploring quantum algorithms and their intersection with artificial intelligence.", icon: "atom" },
    { title: "Deep Learning", description: "Building and fine-tuning state-of-the-art neural architectures for vision and NLP.", icon: "network-wired" },
    { title: "Machine Learning", description: "Developing predictive analytics, ML in production (MLOps), and anomaly detection systems.", icon: "chart-line" },
    { title: "Computer Vision", description: "Object detection, classification, and real-time video analytics pipelines.", icon: "eye" }
  ],
  education: [
    {
      institution: "University of Moratuwa",
      location: "Moratuwa, Sri Lanka",
      degree: "B.Sc. of Engineering Honours Degree in Electronic and Telecommunication Engineering",
      period: "Graduated in Aug 2023",
      details: [
        "CGPA: 3.82 / 4.2",
        "Dean's List: Semesters 3, 4, 6, 7, 8"
      ]
    },
    {
      institution: "Maliyadeva Model School",
      location: "Kurunegala, Sri Lanka",
      degree: "G.C.E. Advance Level (Physical Science Stream)",
      period: "2017",
      details: [
        "Z-score: 2.2397",
        "3 As for Combined Mathematics, Physics, and Chemistry"
      ]
    }
  ],
  experience: [
    {
      role: "Software Engineer",
      company: "IronOne Technologies (Pvt) Ltd.",
      location: "Sri Lanka",
      period: "June 2024 - Present",
      description: [
        "Lead development of a Java EE-based capital market broker backoffice system, using JSP, Servlets, Oracle DB, and Spring Boot APIs, supporting critical trading and post-trade operations.",
        "Drive end-to-end delivery of the broker back-office module, owning feature development, defect resolution, code quality, and production stability.",
        "Drive the deployment and release management lifecycle, coordinating builds, deployments, and hotfixes to ensure reliable and smooth production rollouts.",
        "Design and develop a machine learning-based real-time anomaly detection system using Django and Python to identify and prevent fraudulent transactions."
      ],
      technologies: ["Java", "Spring Boot", "Oracle SQL", "React", "Python", "Django", "Git", "Azure DevOps"]
    },
    {
      role: "Freelance Software Engineer",
      company: "Upwork (Part Time)",
      location: "Remote",
      period: "Jan 2023 - Present",
      description: [
        "Recognized as a Top Rated Freelancer on Upwork, delivering software development and machine learning solutions for clients in the USA, Netherlands, Australia, and India.",
        "Deliver custom Node.js and Node-RED solutions for client automation, API integrations, and interactive dashboard development across multiple business domains.",
        "Design, develop, and deploy machine learning models for prediction and analysis, leveraging Hugging Face and Python-based ML frameworks.",
        "Build and integrate LLM-powered solutions using OpenAI APIs to enable intelligent workflow automation, chatbots, and AI-driven applications."
      ],
      technologies: ["Node.js", "Node-RED", "Python", "LLMs", "OpenAI", "Hugging Face", "TensorFlow"]
    },
    {
      role: "Associate Software Engineer",
      company: "Altrium (Pvt) Ltd.",
      location: "Sri Lanka",
      period: "Nov 2023 - June 2024",
      description: [
        "Contributed to a Spring Boot-based microservices architecture for a smart payment integration platform, integrating with external Java SDKs for secure payment communications.",
        "Managed Oracle SQL databases and implemented Redis caching to improve performance and scalability.",
        "Wrote comprehensive unit and end-to-end tests, while ensuring high code quality and meeting non-functional requirements like availability and fault tolerance.",
        "Supported CI/CD deployments using Jenkins and monitored builds for seamless delivery."
      ],
      technologies: ["Java", "Spring Boot", "SQL", "Git", "Redis", "Jenkins"]
    },
    {
      role: "IoT Engineering Intern",
      company: "Millennium I.T.E.S.P. (Pvt) Ltd.",
      location: "Sri Lanka",
      period: "Jan 2022 - July 2022",
      description: [
        "Implemented IoT dashboards systems for real-time monitoring and data visualization, boosting efficiency.",
        "Performed solution evaluation, aligning IoT technology with client needs.",
        "Significantly improved industrial performance by utilizing IoT technology for system automations."
      ],
      technologies: ["IOTech EdgeXpert", "Node-RED", "MySQL", "InfluxDB", "Grafana", "Python"]
    }
  ],
  publications: [
    {
      title: "Digital IC Functionality Duplication Using Neural Networks",
      authors: "Anjana Bandara, Sahan Nayanajith, Ayesh Rajakaruna, Supun Chirantha, Subramaniam Thayaparan",
      conference: "2023 IEEE 17th International Conference on Industrial and Information Systems (ICIIS)",
      location: "Peradeniya, Sri Lanka",
      year: "2023",
      doi: "10.1109/ICIIS58898.2023.10253575",
      link: "https://doi.org/10.1109/ICIIS58898.2023.10253575",
      citation: `@inproceedings{bandara2023digital,
  title={Digital IC Functionality Duplication Using Neural Networks},
  author={Bandara, Anjana and Nayanajith, Sahan and Rajakaruna, Ayesh and Chirantha, Supun and Thayaparan, Subramaniam},
  booktitle={2023 IEEE 17th International Conference on Industrial and Information Systems (ICIIS)},
  pages={158--163},
  year={2023},
  organization={IEEE}
}`
    }
  ],
  projects: [
    {
      title: "Digital IC Functionality Duplication using Neural Networks",
      category: "ai-ml",
      period: "Oct 2022 - June 2023",
      description: "Undergraduate final year research project focused on duplicating the functional behavior of digital integrated circuits (ICs) using neural networks, with emphasis on sequential logic systems. Designed and implemented a TensorFlow-based neural network architecture capable of learning and emulating sequential digital logic behavior from real hardware signals.",
      bullets: [
        "Developed a data acquisition and training pipeline by collecting datasets from multiple sequential logic circuits implemented on an FPGA for supervised model training.",
        "Demonstrated the approach by controlling a robotic arm driven by FPGA-based sequential logic, and successfully imitating the control behavior using the trained neural network model.",
        "Performed model architecture design, hyperparameter tuning, and experimental evaluation."
      ],
      technologies: ["Python", "TensorFlow", "Verilog", "FPGA", "Neural Networks"],
      github: "https://github.com/sahannt98",
      demo: ""
    },
    {
      title: "FlavorFusion - Cafe Management System",
      category: "web-se",
      period: "July 2023 - Oct 2023",
      description: "A comprehensive restaurant management web application to streamline products, orders, and billing workflows with secure user authentication and interactive tables.",
      bullets: [
        "Developed the backend microservices using Spring Boot and Java.",
        "Crafted a responsive and dynamic front-end using Angular and Angular Material components.",
        "Managed and queried data securely using MySQL database relations."
      ],
      technologies: ["Java", "Spring Boot", "Angular", "Angular Material", "MySQL"],
      github: "https://github.com/sahannt98",
      demo: ""
    },
    {
      title: "Forest Fire Prediction Using Weather Data",
      category: "ai-ml",
      period: "Sep 2023 - Oct 2023",
      description: "Machine learning application to analyze the likelihood of forest fires based on meteorological factors like rainfall, humidity, and temperature.",
      bullets: [
        "Developed an ensemble ML model using scikit-learn for high-accuracy predictions.",
        "Designed and implemented a real-time web application to visualize sensor data streams and prediction models.",
        "Utilized Flask and Socket.IO for real-time bi-directional communication."
      ],
      technologies: ["Python", "scikit-learn", "Flask", "Socket.IO", "HTML/CSS"],
      github: "https://github.com/sahannt98",
      demo: ""
    }
  ],
  certifications: [
    {
      title: "Machine Learning in Production",
      issuer: "DeepLearning.AI",
      year: "2026",
      link: "https://www.deeplearning.ai/"
    },
    {
      title: "Agentic AI",
      issuer: "DeepLearning.AI",
      year: "2025",
      link: "https://www.deeplearning.ai/"
    },
    {
      title: "MCP: Build Rich-Context AI Apps with Anthropic",
      issuer: "DeepLearning.AI",
      year: "2025",
      link: "https://www.deeplearning.ai/"
    },
    {
      title: "AWS Educate Introduction to Cloud 101",
      issuer: "Amazon Web Services",
      year: "2025",
      link: "https://aws.amazon.com/education/aws-educate/"
    },
    {
      title: "Deep Learning Specialization",
      issuer: "DeepLearning.AI",
      year: "2023",
      link: "https://www.deeplearning.ai/"
    },
    {
      title: "Machine Learning Foundations: A Case Study Approach",
      issuer: "University of Washington",
      year: "2021",
      link: "https://www.coursera.org/learn/ml-foundations"
    }
  ],
  skills: {
    languages: ["Python", "Java", "C", "C++", "JavaScript", "HTML", "CSS"],
    tools: ["TensorFlow", "PyTorch", "Node-RED", "Spring Boot", "Django", "Flask", "MATLAB", "LLM Integration", "Hugging Face"],
    databases: ["Oracle DB", "MySQL", "PostgreSQL", "MongoDB", "InfluxDB", "Redis"],
    others: ["Git", "Docker", "CI/CD", "Jenkins", "Azure DevOps", "Grafana", "Verilog"]
  }
};
