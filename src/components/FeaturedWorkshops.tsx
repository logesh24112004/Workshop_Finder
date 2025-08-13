import { WorkshopCard } from "./WorkshopCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const featuredWorkshops = [
  {
    id: "1",
    title: "Advanced React Development Bootcamp",
    company: "TechCorp Inc.",
    companyLogo: "/placeholder.svg",
    description: "Master advanced React concepts including hooks, context, performance optimization, and testing. Build real-world applications with industry best practices.",
    duration: "6 weeks",
    startDate: "Jan 15, 2024",
    location: "San Francisco, CA",
    type: "hybrid" as const,
    participants: 24,
    maxParticipants: 30,
    rating: 4.8,
    price: 0,
    category: "Development",
    featured: true
  },
  {
    id: "2",
    title: "Data Science & Machine Learning Workshop",
    company: "DataMind University",
    companyLogo: "/placeholder.svg",
    description: "Comprehensive workshop covering Python, pandas, scikit-learn, and TensorFlow. Work on real datasets and build predictive models.",
    duration: "4 weeks",
    startDate: "Jan 22, 2024",
    location: "Online",
    type: "online" as const,
    participants: 156,
    maxParticipants: 200,
    rating: 4.9,
    price: 299,
    category: "Data Science",
    featured: true
  },
  {
    id: "3",
    title: "UX/UI Design Intensive",
    company: "Design Studio Pro",
    companyLogo: "/placeholder.svg",
    description: "Learn user-centered design principles, prototyping tools, and design systems. Create a portfolio project with mentorship.",
    duration: "3 weeks",
    startDate: "Feb 1, 2024",
    location: "New York, NY",
    type: "in-person" as const,
    participants: 18,
    maxParticipants: 25,
    rating: 4.7,
    price: 450,
    category: "Design",
    featured: true
  }
];

export const FeaturedWorkshops = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <TrendingUp className="h-4 w-4 mr-2" />
            Most Popular This Week
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured Workshops
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hand-picked workshops from top companies and institutions. Start your learning journey today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredWorkshops.map((workshop) => (
            <div key={workshop.id} className="animate-fade-in">
              <WorkshopCard {...workshop} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" asChild className="group">
            <Link to="/workshops">
              View All Workshops
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};