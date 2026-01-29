import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { resumeData } from "@/data/resume";
import { Briefcase, GraduationCap, Award, Brain, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Resume | Devin Patterson",
  description: "Professional resume of Devin Patterson - Platform Engineering Leader with 15+ years experience in AI Infrastructure, Kubernetes, and AWS.",
};

export default function ResumePage() {
  return (
    <div className="py-12 md:py-20">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{resumeData.contact.name}</h1>
          <p className="text-xl text-muted-foreground mb-4">{resumeData.contact.title}</p>
          <p className="text-muted-foreground mb-6">{resumeData.contact.location}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline" size="sm">
              <Link href={resumeData.contact.linkedin} target="_blank">LinkedIn</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href={`mailto:${resumeData.contact.email}`}>Email</Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/DevinPatterson_Resume.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Download PDF
              </Link>
            </Button>
          </div>
        </div>

        {/* Professional Summary */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            Professional Summary
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {resumeData.summary}
          </p>
        </section>

        {/* Areas of Expertise */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Areas of Expertise</h2>
          <div className="flex flex-wrap gap-2">
            {resumeData.expertise.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Briefcase className="h-6 w-6" /> Work Experience
          </h2>
          <div className="space-y-8">
            {resumeData.experience.map((job, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <CardDescription className="text-base font-medium text-foreground">
                        {job.company}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {job.startDate} - {job.endDate}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {job.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start text-muted-foreground">
                        <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* AI Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Brain className="h-6 w-6" /> AI Experience
          </h2>
          <Card>
            <CardHeader>
              <CardDescription className="text-base">
                {resumeData.aiExperience.summary}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">AI Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {resumeData.aiExperience.skills.map((skill, index) => (
                    <Badge key={index} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3">AI Tools & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {resumeData.aiExperience.tools.map((tool, index) => (
                    <Badge key={index} variant="secondary">{tool}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <GraduationCap className="h-6 w-6" /> Education
          </h2>
          <div className="space-y-4">
            {resumeData.education.map((edu, index) => (
              <Card key={index}>
                <CardHeader className="py-4">
                  <CardTitle className="text-lg">{edu.degree}</CardTitle>
                  <CardDescription>{edu.institution}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Award className="h-6 w-6" /> Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {resumeData.certifications.map((cert, index) => (
              <Card key={index}>
                <CardHeader className="py-4">
                  <CardTitle className="text-base">{cert.name}</CardTitle>
                  <CardDescription>{cert.issuer}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
