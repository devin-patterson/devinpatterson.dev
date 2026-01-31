import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { resumeData } from "@/data/resume";
import { Mail, Linkedin, Github, MapPin, Calendar } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Contact | Devin Patterson",
  description: "Get in touch with Devin Patterson for AI Infrastructure and Platform Engineering opportunities.",
};

export default function ContactPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Get in Touch</Badge>
          <h1 className="text-4xl font-bold mb-4">Let&apos;s Connect</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Interested in discussing AI infrastructure, platform engineering, or potential opportunities? I&apos;d love to hear from you.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-500" />
                Email
              </CardTitle>
              <CardDescription>Best for detailed inquiries</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <Link href={`mailto:${resumeData.contact.email}`}>
                  {resumeData.contact.email}
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Linkedin className="h-5 w-5 text-blue-600" />
                LinkedIn
              </CardTitle>
              <CardDescription>Connect professionally</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <Link href={resumeData.contact.linkedin} target="_blank">
                  View Profile
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Github className="h-5 w-5" />
                GitHub
              </CardTitle>
              <CardDescription>See my code and projects</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <Link href="https://github.com/devin-patterson" target="_blank">
                  View GitHub
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-red-500" />
                Location
              </CardTitle>
              <CardDescription>Based in</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium">{resumeData.contact.location}</p>
              <p className="text-sm text-muted-foreground">Open to remote opportunities</p>
            </CardContent>
          </Card>
        </div>

        {/* What I'm Looking For */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-green-500" />
                What I&apos;m Looking For
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Target Roles</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>AI Infrastructure Engineer</Badge>
                  <Badge>Platform Engineering Leader</Badge>
                  <Badge>AI Architect</Badge>
                  <Badge>Staff/Principal Engineer</Badge>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Interests</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    Building AI infrastructure at scale (GPU clusters, model serving, MLOps)
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    Leading platform engineering teams driving AI-first transformation
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    Companies investing in cutting-edge AI/ML infrastructure
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    Remote-first or Miami-based opportunities
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Availability</h3>
                <p className="text-muted-foreground">
                  Currently employed and open to discussing new opportunities. 
                  Available for initial conversations and interviews.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <section className="text-center py-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Build Something Great?</h2>
          <p className="text-blue-100 mb-6 max-w-lg mx-auto">
            Whether you&apos;re looking for an AI infrastructure leader or want to discuss the future of platform engineering, let&apos;s talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href={`mailto:${resumeData.contact.email}`}>
                <Mail className="mr-2 h-4 w-4" /> Send Email
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              <Link href={resumeData.contact.linkedin} target="_blank">
                <Linkedin className="mr-2 h-4 w-4" /> Connect on LinkedIn
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
