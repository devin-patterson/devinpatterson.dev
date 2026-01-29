import Link from "next/link";
import { ArrowRight, Cloud, Server, Brain, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { resumeData } from "@/data/resume";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Available for AI Infrastructure Roles
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Platform Engineering Leader
              </span>
              <br />
              <span className="text-foreground">& AI Infrastructure Expert</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {resumeData.summary.split('.')[0]}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/resume">
                  View Resume <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">See Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Areas of Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              15+ years of experience building scalable infrastructure at AWS, Cisco, and Abbott Labs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Brain className="h-10 w-10 text-blue-500 mb-2" />
                <CardTitle>AI Infrastructure</CardTitle>
                <CardDescription>
                  MLOps, LLM deployment, model serving, and AI-assisted development workflows
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Server className="h-10 w-10 text-cyan-500 mb-2" />
                <CardTitle>Platform Engineering</CardTitle>
                <CardDescription>
                  Kubernetes, container orchestration, and developer platform design
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Cloud className="h-10 w-10 text-indigo-500 mb-2" />
                <CardTitle>Cloud Architecture</CardTitle>
                <CardDescription>
                  AWS, GCP, Azure - multi-cloud strategies and enterprise migrations
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Award className="h-10 w-10 text-purple-500 mb-2" />
                <CardTitle>Technical Leadership</CardTitle>
                <CardDescription>
                  Team building, AI upskilling programs, and engineering excellence
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Career Highlights</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {resumeData.experience.slice(0, 3).map((job, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{job.title}</CardTitle>
                  <CardDescription className="text-base font-medium text-foreground">
                    {job.company}
                  </CardDescription>
                  <CardDescription>{job.startDate} - {job.endDate}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {job.highlights.slice(0, 2).map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 text-blue-500">•</span>
                        {highlight.length > 120 ? `${highlight.substring(0, 120)}...` : highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/resume">View Full Resume</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* AI Experience Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">AI-First Engineering</Badge>
              <h2 className="text-3xl font-bold mb-4">Pioneering AI Infrastructure</h2>
              <p className="text-muted-foreground">
                {resumeData.aiExperience.summary}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4">AI Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {resumeData.aiExperience.skills.map((skill, index) => (
                    <Badge key={index} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4">AI Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {resumeData.aiExperience.tools.map((tool, index) => (
                    <Badge key={index} variant="secondary">{tool}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Let&apos;s Build the Future Together</h2>
            <p className="text-blue-100 mb-8">
              Looking for an experienced leader to drive AI infrastructure initiatives? Let&apos;s connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <Link href="https://www.linkedin.com/in/devin-patterson-technologist" target="_blank">
                  Connect on LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
