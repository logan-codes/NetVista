import { Button } from "@/components/ui/button"; 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; 
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; 

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <Card className="w-full max-w-3xl shadow-lg">
        <CardHeader className="text-center border-b">
          <Avatar className="w-24 h-24 mx-auto mb-4">
            <AvatarImage src="https://via.placeholder.com/150" alt="Student Avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <CardTitle className="text-3xl font-bold">Jane Doe</CardTitle>
          <p className="text-muted-foreground italic">
            Creative Computer Science Student Ready to Tackle Your Projects
          </p>
          <p className="text-sm text-gray-600">
            Seattle, WA | jane.doe@email.com | (123) 456-7890 |{" "}
            <a href="https://portfolio.example.com" className="text-blue-500">
              Portfolio
            </a>
          </p>
        </CardHeader>

        <CardContent className="grid gap-6 mt-4">
          <section>
            <h2 className="text-xl font-semibold mb-2">About Me</h2>
            <p className="text-gray-700">
              Hi, I’m Jane Doe, a sophomore Computer Science student at University of Washington. I’m
              passionate about coding innovative apps and have worked on projects that streamline
              user experiences. I’m excited to bring my skills to paid gigs and help clients achieve
              their goals!
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Skills</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <li className="text-gray-700">
                <span className="font-medium">Python:</span> Proficient with 2 years of experience
                building web applications.
              </li>
              <li className="text-gray-700">
                <span className="font-medium">React:</span> Skilled in creating dynamic, responsive
                UIs.
              </li>
              <li className="text-gray-700">
                <span className="font-medium">Graphic Design:</span> Experienced with Adobe
                Photoshop for branding.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Achievements</h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Developed a mobile app with 500+ downloads on Google Play Store, 2024.</li>
              <li>Won 1st place in UW Hackathon for innovative UI design, 2023.</li>
              <li>Published an article on React in TechBit Magazine, 2024.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Featured Projects</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">TaskMaster App</h3>
                <p className="text-gray-700">
                  A responsive task management website built with React and Tailwind CSS.
                </p>
                <p className="text-sm text-gray-600">Role: Lead Developer |{" "}
                  <a href="https://github.com/janedoe/taskmaster" className="text-blue-500">
                    GitHub
                  </a>
                </p>
              </div>
              <div>
                <h3 className="font-medium">Brand Logo Design</h3>
                <p className="text-gray-700">
                  Designed a logo for a local startup using Adobe Photoshop.
                </p>
                <p className="text-sm text-gray-600">Role: Designer</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Services Offered</h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Custom Website Development - $50/hour</li>
              <li>Graphic Design (logos, posters) - $30/project</li>
              <li>Content Writing - $0.10/word</li>
            </ul>
            <p className="mt-2 text-gray-700">Message me to discuss your project!</p>
          </section>

          <section className="text-center">
            <h2 className="text-xl font-semibold mb-2">Let’s Connect!</h2>
            <p className="text-gray-700">Available for freelance work on weekends and evenings.</p>
            <Button className="mt-4" asChild>
              <a href="mailto:jane.doe@email.com">Contact Me</a>
            </Button>
            <p className="mt-2 text-sm">
              Follow me on{" "}
              <a href="https://x.com/janedoe" className="text-blue-500">
                X
              </a>{" "}
              |{" "}
              <a href="https://linkedin.com/in/janedoe" className="text-blue-500">
                LinkedIn
              </a>
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};
