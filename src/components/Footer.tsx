import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  BookOpen, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram 
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">WorkshopHub</span>
            </Link>
            
            <p className="text-background/80 leading-relaxed">
              Connecting students with the best professional workshops and training programs from top companies and institutions worldwide.
            </p>
            
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="text-background/80 hover:text-primary hover:bg-background/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-background/80 hover:text-primary hover:bg-background/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-background/80 hover:text-primary hover:bg-background/10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-background/80 hover:text-primary hover:bg-background/10">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* For Students */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">For Students</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/workshops" className="text-background/80 hover:text-primary transition-colors">
                  Browse Workshops
                </Link>
              </li>
              <li>
                <Link to="/my-applications" className="text-background/80 hover:text-primary transition-colors">
                  My Applications
                </Link>
              </li>
              <li>
                <Link to="/certificates" className="text-background/80 hover:text-primary transition-colors">
                  Certificates
                </Link>
              </li>
              <li>
                <Link to="/career-guidance" className="text-background/80 hover:text-primary transition-colors">
                  Career Guidance
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-background/80 hover:text-primary transition-colors">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* For Organizations */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">For Organizations</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/post-workshop" className="text-background/80 hover:text-primary transition-colors">
                  Post a Workshop
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-background/80 hover:text-primary transition-colors">
                  Organization Dashboard
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-background/80 hover:text-primary transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link to="/analytics" className="text-background/80 hover:text-primary transition-colors">
                  Analytics & Reports
                </Link>
              </li>
              <li>
                <Link to="/partner-program" className="text-background/80 hover:text-primary transition-colors">
                  Partner Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-background/80">
              Get the latest workshops and opportunities delivered to your inbox.
            </p>
            
            <div className="space-y-3">
              <Input 
                placeholder="Enter your email" 
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button className="w-full">
                Subscribe
              </Button>
            </div>

            <div className="space-y-3 pt-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-background/80">support@workshophub.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-background/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-background/80">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/60 text-sm">
              © 2024 WorkshopHub. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-background/80 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-background/80 hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-background/80 hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};