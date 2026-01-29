import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { resumeData } from "@/data/resume";
import { ExternalLink, Github, Rocket } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Projects | Devin Patterson",
  description: "AI Infrastructure and Platform Engineering projects by Devin Patterson.",
};

const portfolioProjects = [
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
    description: "Enterprise-grade Retrieval Augmented Generation system with vector databases, evaluation pipelines, and production deployment patterns. Features semantic caching, drift detection, and observability.",
    technologies: ["LangChain", "Pinecone", "Python", "FastAPI", "Redis", "Prometheus"],
    status: "Planned",
    category: "AI Infrastructure",
    link: "#"
  },
  {
    name: "MLOps Pipeline Framework",
    description: "Complete MLOps pipeline with CI/CD for ML models, Feast feature store integration, Evidently AI drift detection, canary deployments with Flagger, and automated rollbacks.",
    technologies: ["Kubeflow", "MLflow", "Feast", "Evidently AI", "Flagger", "ArgoCD"],
    status: "Planned",
    category: "MLOps",
    link: "#"
  },
  {
    name: "K8s Operator for ML Workloads",
    description: "Custom Kubernetes operator for managing ML workloads with automated deployment, scaling, and production-grade reliability features.",
    technologies: ["Go", "Kubernetes", "Operator SDK", "Prometheus"],
    status: "Planned",
    category: "Platform Engineering",
    link: "#"
  },
  ...resumeData.projects.map(p => ({
    ...p,
    category: "AI Infrastructure",
    status: p.status || "Completed",
    link: p.link || "#"
  }))
];

export default function ProjectsPage() {
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
            <Link href="https://github.com/devinpatterson" target="_blank">
              <Github className="mr-2 h-5 w-5" /> View GitHub Profile
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
