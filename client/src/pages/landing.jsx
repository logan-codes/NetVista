import { ArrowRight, Award, BookOpen, BriefcaseIcon, GraduationCap, SearchIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Label } from "@/components/ui/label"



export function Landing() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background/80 z-0" />
        <div 
          className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Where Talent Meets Opportunity
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Showcase your achievements, connect with employers, and take your career to the next level
          </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="px-6 py-3 bg-amber-200  hover:bg-amber-400" variant="default">
                Join as Student
                <GraduationCap className="ml-2 h-5 w-5" />
            </Button>
            <Button className="px-6 py-3 border border-primary/20 hover:bg-amber-400 hover:text-amber-50" variant="outline">
                Recruit Talent
                <BriefcaseIcon className="ml-2 h-5 w-5" />
            </Button>
            </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Platform Features
          </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                {
                icon: <Award className="h-8 w-8" />,
                title: "Showcase Achievements",
                description: "Display your certifications, projects, and skills in an engaging portfolio",
                },
                {
                icon: <SearchIcon className="h-8 w-8" />,
                title: "Smart Matching",
                description: "Connect with employers looking for your specific skills and expertise",
                },
                {
                icon: <BookOpen className="h-8 w-8" />,
                title: "Learning Journey",
                description: "Track your progress and share updates as you acquire new skills",
                },
            ].map((feature, index) => (
                <Card key={index} className="hover:bg-amber-400 hover:text-white transition-colors">
                <CardHeader className="flex flex-col items-center text-center ">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {feature.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-center">{feature.description}</p>
                </CardContent>
                </Card>
            ))}
            </div>;
        </div>
      </section>

      <section className="py-24 bg-background">
  <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
      Frequently Asked Questions
    </h2>
    <Accordion type="single" collapsible className="space-y-6">
      <AccordionItem value="item-1" className="border-b border-gray-300">
        <AccordionTrigger className="text-xl md:text-2xl py-4">
          Can college students join?
        </AccordionTrigger>
        <AccordionContent className="text-lg text-gray-600">
          Yes. It's exclusively for college students to gain experience through startups.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-b border-gray-300">
        <AccordionTrigger className="text-xl md:text-2xl py-4">
          Can I manage my academics along with this?
        </AccordionTrigger>
        <AccordionContent className="text-lg text-gray-600">
          Yes. It's focused on finding short jobs to gain experience in startups.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</section>


      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Start Your Journey Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join our thriving community of learners and industry leaders
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="px-8 py-4 bg-background text-primary hover:bg-amber-300" variant="ghost">
            <Link to="/login">
                Create Account
            </Link>
            <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
