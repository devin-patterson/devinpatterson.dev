import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { resumeData } from "@/data/resume";
import { Award, Cloud, Shield, Database, Code, Network } from "lucide-react";

export const metadata = {
  title: "Certifications | Devin Patterson",
  description: "Professional certifications held by Devin Patterson including AWS, HashiCorp, and more.",
};

const certificationCategories = [
  {
    name: "AWS Certifications",
    icon: Cloud,
    color: "text-orange-500",
    certs: resumeData.certifications.filter(c => c.issuer === "AWS")
  },
  {
    name: "Infrastructure & DevOps",
    icon: Shield,
    color: "text-purple-500",
    certs: resumeData.certifications.filter(c => c.issuer === "HashiCorp" || c.issuer === "ISO")
  },
  {
    name: "Programming & Development",
    icon: Code,
    color: "text-blue-500",
    certs: resumeData.certifications.filter(c => c.issuer === "Georgia Tech" || c.issuer === "Cisco")
  }
];

const plannedCertifications = [
  { name: "Certified Kubernetes Administrator (CKA)", issuer: "CNCF", timeline: "Month 3" },
  { name: "Certified Kubernetes Security Specialist (CKS)", issuer: "CNCF", timeline: "Month 7" },
  { name: "CNCF Certified Cloud Native Platform Engineer (CNPE)", issuer: "CNCF", timeline: "Month 11-12" },
  { name: "AWS Certified Machine Learning - Specialty", issuer: "AWS", timeline: "Month 5" },
  { name: "Prometheus Certified Associate (PCA)", issuer: "CNCF", timeline: "Month 9" },
  { name: "NVIDIA DLI - CUDA Fundamentals", issuer: "NVIDIA", timeline: "Month 2" },
  { name: "NVIDIA DLI - Transformers", issuer: "NVIDIA", timeline: "Month 5" },
  { name: "NVIDIA DLI - RAG", issuer: "NVIDIA", timeline: "Month 7" },
];

export default function CertificationsPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Credentials</Badge>
          <h1 className="text-4xl font-bold mb-4">Certifications</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications demonstrating expertise in cloud, infrastructure, and AI technologies
          </p>
        </div>

        {/* Current Certifications */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Award className="h-6 w-6 text-yellow-500" /> Current Certifications
          </h2>
          
          <div className="space-y-12">
            {certificationCategories.map((category, catIndex) => (
              category.certs.length > 0 && (
                <div key={catIndex}>
                  <div className="flex items-center gap-2 mb-4">
                    <category.icon className={`h-5 w-5 ${category.color}`} />
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                    <Badge variant="outline">{category.certs.length}</Badge>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.certs.map((cert, index) => (
                      <Card key={index}>
                        <CardHeader className="py-4">
                          <CardTitle className="text-base flex items-start gap-2">
                            <Award className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            {cert.name}
                          </CardTitle>
                          <CardDescription>{cert.issuer}</CardDescription>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        </section>

        {/* Certification Stats */}
        <section className="mb-16 py-12 bg-muted/50 rounded-xl">
          <div className="container">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-500 mb-2">
                  {resumeData.certifications.length}
                </div>
                <div className="text-muted-foreground">Active Certifications</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  {resumeData.certifications.filter(c => c.issuer === "AWS").length}
                </div>
                <div className="text-muted-foreground">AWS Certifications</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-500 mb-2">
                  {plannedCertifications.length}
                </div>
                <div className="text-muted-foreground">Planned for 2026</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-500 mb-2">15+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Planned Certifications */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">2026 Certification Roadmap</h2>
          <p className="text-muted-foreground mb-6">
            Actively pursuing additional certifications to deepen AI infrastructure and MLOps expertise
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {plannedCertifications.map((cert, index) => (
              <Card key={index} className="opacity-80 border-dashed">
                <CardHeader className="py-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">{cert.timeline}</Badge>
                  </div>
                  <CardTitle className="text-sm">{cert.name}</CardTitle>
                  <CardDescription className="text-xs">{cert.issuer}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Verification Note */}
        <section className="text-center py-8 border-t">
          <p className="text-sm text-muted-foreground">
            All certifications can be verified through the respective certification bodies.
            <br />
            AWS certifications are verifiable via{" "}
            <a 
              href="https://aws.amazon.com/verification" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              AWS Certification Verification
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
