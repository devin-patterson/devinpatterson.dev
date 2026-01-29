export const resumeData = {
  contact: {
    name: "Devin Patterson",
    title: "Platform Engineering Leader | AI Infrastructure",
    email: "devin@devinpatterson.dev",
    linkedin: "https://www.linkedin.com/in/devin-patterson-technologist",
    github: "https://github.com/devinpatterson",
    location: "Miami, FL"
  },
  
  summary: `Engineering leader with 15+ years of experience driving AI-first transformation in platform engineering. 
Proven track record building scalable infrastructure at AWS, Cisco, and Abbott Labs. Expert in Kubernetes, 
cloud architecture, and emerging AI/ML infrastructure. Currently leading platform engineering teams while 
pioneering AI-assisted development workflows that have achieved 20% reduction in development time.`,

  expertise: [
    "AI Infrastructure & MLOps",
    "Kubernetes & Container Orchestration",
    "Platform Engineering",
    "Cloud Architecture (AWS/GCP/Azure)",
    "Distributed Systems",
    "Infrastructure as Code",
    "DevOps & SRE",
    "Technical Leadership",
    "AI-Assisted Development",
    "LLM Integration & Prompt Engineering"
  ],

  experience: [
    {
      title: "Manager, Platform Engineering",
      company: "Cisco",
      location: "Remote",
      startDate: "November 2022",
      endDate: "Present",
      highlights: [
        "Lead platform engineering team supporting FedRAMP High infrastructure for Webex Government, ensuring compliance and operational excellence",
        "Architected and delivered Kubernetes-based platform serving 500+ microservices with 99.9% uptime",
        "Pioneered AI-first engineering practices, integrating LLM-powered workflows that reduced development and troubleshooting time by 20%",
        "Built custom MCP servers enabling AI agents to interact with Kafka, Jira, and Confluence for automated operations",
        "Led AI capability building program across 3 teams, training 20+ engineers on LLM integration and AI-assisted development"
      ]
    },
    {
      title: "Solutions Architect",
      company: "Amazon Web Services (AWS)",
      location: "Remote",
      startDate: "June 2021",
      endDate: "November 2022",
      highlights: [
        "Guided enterprise clients through large-scale migration programs, including a 22-data center migration for a major energy-sector client",
        "Delivered AWS service deployments, including local zone expansion, to improve performance and availability",
        "Expanded expertise into the AWS Analytics community, supporting analytics infrastructure at scale for financial services clients",
        "Partnered with customer leadership to stabilize analytics workloads and ensure operational continuity in regulated industries"
      ]
    },
    {
      title: "Cloud Operations Manager",
      company: "Abbott Labs",
      location: "Remote",
      startDate: "March 2018",
      endDate: "March 2021",
      highlights: [
        "Directed cloud operations during COVID-19, leading design and delivery of APIs transmitting test results to the CDC within 24 hours",
        "Earned Abbott Leadership Award for critical pandemic-related infrastructure delivery",
        "Migrated STARLIMS customers from private data centers to AWS, improving uptime and achieving HIPAA compliance"
      ]
    }
  ],

  education: [
    {
      degree: "Bachelor of Business Administration in Management Information Sciences",
      institution: "Florida International University",
      year: ""
    },
    {
      degree: "Associate in Arts in Business Administration",
      institution: "Miami-Dade College",
      year: ""
    }
  ],

  certifications: [
    { name: "AWS Certified Solutions Architect – Professional", issuer: "AWS" },
    { name: "AWS Certified Developer – Professional", issuer: "AWS" },
    { name: "AWS Certified Security Specialty", issuer: "AWS" },
    { name: "AWS Certified Analytics Specialty", issuer: "AWS" },
    { name: "AWS Certified Networking Specialty", issuer: "AWS" },
    { name: "AWS Certified SysOps Administrator", issuer: "AWS" },
    { name: "HashiCorp Certified Terraform Associate", issuer: "HashiCorp" },
    { name: "Georgia Tech – Professional Certificate in Python Programming", issuer: "Georgia Tech" }
  ],

  aiExperience: {
    summary: "Engineering leader driving AI-first transformation in platform engineering. Hands-on experience building AI tooling, developing MCP servers, and leading team upskilling in generative AI practices.",
    skills: [
      "AI-Assisted Development & Pair Programming",
      "Prompt Engineering & LLM Integration",
      "Agentic AI Architecture",
      "Multi-Agent Orchestration",
      "AI Model Evaluation & Selection",
      "AI-Powered Root Cause Analysis"
    ],
    tools: [
      "Claude (Anthropic)",
      "GPT-4 (OpenAI)",
      "LangChain",
      "CrewAI",
      "Model Context Protocol (MCP)",
      "Windsurf/Cascade IDE"
    ]
  },

  projects: [
    {
      name: "Kafka MCP Server",
      description: "Custom MCP server enabling AI agents to interact with Kafka streaming infrastructure for real-time operational insights",
      technologies: ["Python", "MCP", "Kafka"],
      link: "#"
    },
    {
      name: "AI-Powered Root Cause Analysis",
      description: "LLM-based workflows for querying servers, analyzing logs, and capturing results to wikis for incident resolution",
      technologies: ["Claude", "MCP", "Confluence", "Python"],
      link: "#"
    },
    {
      name: "LLM Serving Benchmark Suite",
      description: "Comprehensive benchmarking framework comparing vLLM, TGI, Ray Serve, and Triton for production LLM deployment",
      technologies: ["Python", "vLLM", "TGI", "Ray", "Triton"],
      link: "#",
      status: "In Progress"
    },
    {
      name: "Production RAG System",
      description: "Enterprise-grade RAG system with vector databases, evaluation pipelines, and production deployment patterns",
      technologies: ["LangChain", "Pinecone", "Python", "FastAPI"],
      link: "#",
      status: "Planned"
    }
  ]
};
