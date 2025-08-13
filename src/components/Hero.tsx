import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight, Users, Award, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-workshop.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero min-h-[80vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25"></div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full bg-orange-light px-4 py-2 text-sm font-medium text-primary">
                <Award className="h-4 w-4 mr-2" />
                Professional Development Platform
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Discover Your Next
                <span className="text-primary block">
                  Learning Adventure
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Connect with top companies and educational institutions. Apply to workshops that advance your career and expand your skills.
              </p>
            </div>

            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search workshops..."
                  className="pl-10 h-12 bg-background/95 backdrop-blur border-border/50"
                />
              </div>
              <Button size="lg" className="h-12 px-6 shadow-orange">
                Find Workshops
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="shadow-orange">
                <Link to="/workshops">
                  Browse Workshops
                  <Users className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/post-workshop">
                  <Building2 className="mr-2 h-4 w-4" />
                  Post a Workshop
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1,200+</div>
                <div className="text-sm text-muted-foreground">Active Workshops</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Partner Organizations</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <img
                src={heroImage}
                alt="Students learning in workshop"
                className="rounded-2xl shadow-elevated w-full h-auto object-cover"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-background rounded-lg p-4 shadow-card animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Live Workshop</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-background rounded-lg p-4 shadow-card animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">4.9★</div>
                  <div className="text-xs text-muted-foreground">Avg Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};