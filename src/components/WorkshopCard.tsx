import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Clock, 
  Calendar, 
  MapPin, 
  Users, 
  Star, 
  Building2,
  ArrowRight 
} from "lucide-react";

interface WorkshopCardProps {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  description: string;
  duration: string;
  startDate: string;
  location: string;
  type: "online" | "hybrid" | "in-person";
  participants: number;
  maxParticipants: number;
  rating: number;
  price: number;
  category: string;
  featured?: boolean;
}

export const WorkshopCard = ({
  title,
  company,
  companyLogo,
  description,
  duration,
  startDate,
  location,
  type,
  participants,
  maxParticipants,
  rating,
  price,
  category,
  featured = false
}: WorkshopCardProps) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "online":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "hybrid":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "in-person":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <Card className={`h-full transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 bg-gradient-card ${featured ? 'ring-2 ring-primary' : ''}`}>
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={companyLogo} alt={company} />
              <AvatarFallback>
                <Building2 className="h-5 w-5" />
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-bold text-lg line-clamp-2 leading-tight">{title}</h3>
              <p className="text-sm text-muted-foreground">{company}</p>
            </div>
          </div>
          {featured && (
            <Badge variant="secondary" className="bg-primary text-primary-foreground">
              Featured
            </Badge>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className={getTypeColor(type)}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </Badge>
          <Badge variant="outline">{category}</Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>{startDate}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="truncate">{location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span>{participants}/{maxParticipants}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">
              {price === 0 ? "Free" : `$${price}`}
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full group shadow-orange">
          Apply Now
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};