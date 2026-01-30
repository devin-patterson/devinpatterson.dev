import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Rocket } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Projects | Devin Patterson",
  description: "AI Infrastructure and Platform Engineering projects by Devin Patterson.",
};

const portfolioProjects = [
  {
    name: "AI Research Project Generator",
    description: "AI-powered research tool with local LLM integration (Ollama, OpenAI), academic search APIs (OpenAlex, Semantic Scholar), and FastAPI REST API for generating comprehensive research projects.",
    technologies: ["Python", "FastAPI", "Ollama", "LangChain", "OpenAlex API"],
    status: "Live",
    category: "AI Infrastructure",
    link: "https://github.com/devin-patterson/ai-research-project-generator"
  },
  {
    name: "devinpatterson.dev",
    description: "Personal portfolio website built with Next.js 16, deployed to GitHub Pages via CI/CD pipeline with automated testing, linting, and deployment.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GitHub Actions"],
    status: "Live",
    category: "Platform Engineering",
    link: "https://github.com/devin-patterson/devinpatterson.dev"
  },
  {
    name: "LLM Serving Benchmark Suite",
    description: "Comprehensive benchmarking framework comparing vLLM, TGI, Ray Serve, and Triton Inference Server for production LLM deployment. Includes batch vs streaming inference comparison, failure isolation testing, latency budgets, and cost per query analysis.",
    technologies: ["Python", "vLLM", "TGI", "Ray Serve", "Triton", "Docker", "Kubernetes"],
    status: "In Progress",
    category: "AI Infrastructure",
    link: "#"
  },
  {
    name: "Production RAG System",
    description: "Enterprise-grade Retrieval Augmented Generation system with vector databases, evaluation pipelines, chunking strategies, and production deployment patterns. Features semantic caching, drift detection, and observability.",
    technologies: ["LangChain", "Pinecone", "ChromaDB", "Python", "FastAPI", "Redis"],
    status: "Planned",
    category: "AI Infrastructure",
    link: "#"
  },
  {
    name: "MLflow Experiment Tracking Platform",
    description: "Self-hosted MLflow deployment on Kubernetes with S3 artifact storage, PostgreSQL backend, and integration with model registry for ML lifecycle management.",
    technologies: ["MLflow", "Kubernetes", "Helm", "PostgreSQL", "S3", "Docker"],
    status: "Planned",
    category: "MLOps",
    link: "#"
  },
  {
    name: "Kubeflow ML Pipeline",
    description: "End-to-end ML pipeline on Kubeflow with automated training, hyperparameter tuning (Katib), model serving (KServe), and drift detection using Evidently AI.",
    technologies: ["Kubeflow", "KServe", "Katib", "Kubernetes", "Python", "Evidently AI"],
    status: "Planned",
    category: "MLOps",
    link: "#"
  },
  {
    name: "AIOps Observability Platform",
    description: "Intelligent observability stack with n8n workflow automation, Prometheus/Grafana metrics, Loki logs, and LLM-powered anomaly detection and automated incident response.",
    technologies: ["n8n", "Prometheus", "Grafana", "Loki", "OpenTelemetry", "Python", "LangChain"],
    status: "Planned",
    category: "AIOps",
    link: "#"
  },
  {
    name: "Feature Store with Feast",
    description: "Production feature store using Feast for ML feature management, online/offline serving, and feature versioning with Redis and BigQuery backends.",
    technologies: ["Feast", "Redis", "BigQuery", "Python", "Kubernetes"],
    status: "Planned",
    category: "MLOps",
    link: "#"
  },
  {
    name: "K8s Operator for ML Workloads",
    description: "Custom Kubernetes operator for managing ML workloads with automated deployment, scaling, GPU scheduling, and production-grade reliability features.",
    technologies: ["Go", "Kubernetes", "Operator SDK", "Prometheus", "NVIDIA GPU Operator"],
    status: "Planned",
    category: "Platform Engineering",
    link: "#"
  },
  {
    name: "Internal Developer Platform (IDP)",
    description: "Backstage-based developer portal with custom plugins for service catalog, CI/CD integration, infrastructure provisioning, and developer self-service. Built with TypeScript frontend and Go microservices for platform APIs.",
    technologies: ["TypeScript", "Go", "Backstage", "React", "Kubernetes", "Terraform", "ArgoCD"],
    status: "Planned",
    category: "Platform Engineering",
    link: "#"
  },
  {
    name: "Kafka MCP Server",
    description: "Custom MCP server enabling AI agents to interact with Kafka streaming infrastructure for real-time operational insights and automated troubleshooting.",
    technologies: ["Python", "MCP", "Kafka", "FastAPI"],
    status: "Completed",
    category: "AI Infrastructure",
    link: "#"
  },
  {
    name: "AI-Powered Root Cause Analysis",
    description: "LLM-based workflows for querying servers, analyzing logs, and capturing results to wikis for incident resolution with automated runbook generation.",
    technologies: ["Claude", "MCP", "Confluence", "Python", "Jira"],
    status: "Completed",
    category: "AIOps",
    link: "#"
  }
];

export default function ProjectsPage() {
  const liveProjects = portfolioProjects.filter(p => p.status === "Live");
  const completedProjects = portfolioProjects.filter(p => p.status === "Completed");
  const inProgressProjects = portfolioProjects.filter(p => p.status === "In Progress");
  const plannedProjects = portfolioProjects.filter(p => p.status === "Planned");

  return (
    <div className="py-12 md:py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Portfolio</Badge>
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI Infrastructure, MLOps, and Platform Engineering projects demonstrating hands-on expertise
          </p>
        </div>

        {/* Live Projects */}
        {liveProjects.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <ExternalLink className="h-5 w-5 text-green-500" />
              <h2 className="text-2xl font-bold">Live Projects</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {liveProjects.map((project, index) => (
                <Card key={index} className="border-green-200 dark:border-green-800">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <Badge variant="default" className="mb-2 bg-green-500">{project.category}</Badge>
                        <CardTitle className="text-xl">{project.name}</CardTitle>
                      </div>
                      <Badge variant="outline" className="text-green-500 border-green-500">
                        Live
                      </Badge>
                    </div>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                    {project.link && project.link !== "#" && (
                      <Button asChild variant="outline" size="sm">
                        <Link href={project.link} target="_blank">
                          <Github className="mr-2 h-4 w-4" /> View on GitHub
                        </Link>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* In Progress Projects */}
        {inProgressProjects.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <Rocket className="h-5 w-5 text-blue-500" />
              <h2 className="text-2xl font-bold">In Progress</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {inProgressProjects.map((project, index) => (
                <Card key={index} className="border-blue-200 dark:border-blue-800">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <Badge variant="default" className="mb-2 bg-blue-500">{project.category}</Badge>
                        <CardTitle className="text-xl">{project.name}</CardTitle>
                      </div>
                      <Badge variant="outline" className="text-blue-500 border-blue-500">
                        In Progress
                      </Badge>
                    </div>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Completed Projects */}
        {completedProjects.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Completed Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {completedProjects.map((project, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <Badge variant="secondary" className="mb-2">{project.category}</Badge>
                        <CardTitle className="text-xl">{project.name}</CardTitle>
                      </div>
                      <Badge variant="outline" className="text-green-500 border-green-500">
                        Completed
                      </Badge>
                    </div>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                    {project.link && project.link !== "#" && (
                      <Button asChild variant="outline" size="sm">
                        <Link href={project.link} target="_blank">
                          <Github className="mr-2 h-4 w-4" /> View on GitHub
                        </Link>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Planned Projects */}
        {plannedProjects.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Upcoming Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {plannedProjects.map((project, index) => (
                <Card key={index} className="opacity-80">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <Badge variant="outline" className="mb-2">{project.category}</Badge>
                      <Badge variant="outline" className="text-muted-foreground">
                        Planned
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                    <CardDescription>
                      {project.description.length > 150 
                        ? `${project.description.substring(0, 150)}...` 
                        : project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 5).map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">{tech}</Badge>
                      ))}
                      {project.technologies.length > 5 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 5} more
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* GitHub CTA */}
        <section className="text-center py-12 bg-muted/50 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Want to see more?</h2>
          <p className="text-muted-foreground mb-6">
            Check out my GitHub for more projects and contributions
          </p>
          <Button asChild size="lg">
            <Link href="https://github.com/devin-patterson" target="_blank">
              <Github className="mr-2 h-5 w-5" /> View GitHub Profile
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
