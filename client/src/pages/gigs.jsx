import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // Adjust path based on your shadcn/ui setup
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Gigs() {
  const [gigs, setGigs] = useState([
    {
      id: 1,
      title: "Logo Design for Startup",
      description:
        "Create a modern logo for a tech startup. Must be proficient in Adobe Illustrator.",
      pay: "$75",
      status: "Open",
      applied: false,
    },
    {
      id: 2,
      title: "Frontend Web Development",
      description: "Build a responsive landing page using React and CSS.",
      pay: "$150",
      status: "Open",
      applied: false,
    },
    {
      id: 3,
      title: "Content Writing for Blog",
      description: "Write a 1000-word article on AI trends. SEO knowledge preferred.",
      pay: "$50",
      status: "Open",
      applied: false,
    },
  ]);

  const handleApply = (gigId) => {
    setGigs(
      gigs.map((gig) =>
        gig.id === gigId ? { ...gig, applied: true } : gig
      )
    );
    alert(`Applied for gig: ${gigs.find((gig) => gig.id === gigId).title}`);
    // Replace alert with API call in a real app
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Available Paid Gigs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {gigs.map((gig) => (
          <Card key={gig.id} className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-blue-900">{gig.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm mb-4">{gig.description}</p>
              <p className="text-green-600 font-semibold">
                <strong>Pay:</strong> {gig.pay}
              </p>
              <p className="text-gray-500 text-sm">
                <strong>Status:</strong> {gig.status}
              </p>
            </CardContent>
            <CardFooter>
              <Button
                className={`w-full ${
                  gig.applied
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
                onClick={() => handleApply(gig.id)}
                disabled={gig.applied}
              >
                {gig.applied ? "Applied" : "Apply Now"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};