import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Building2, Star } from "lucide-react";

const stats = [
  {
    id: "students",
    label: "Active Students",
    value: "50,000+",
    description: "Students enrolled across all workshops",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-100 dark:bg-blue-900/20"
  },
  {
    id: "workshops",
    label: "Total Workshops",
    value: "1,200+",
    description: "Professional workshops available",
    icon: Award,
    color: "text-green-600",
    bgColor: "bg-green-100 dark:bg-green-900/20"
  },
  {
    id: "organizations",
    label: "Partner Organizations",
    value: "500+",
    description: "Companies and institutions",
    icon: Building2,
    color: "text-purple-600",
    bgColor: "bg-purple-100 dark:bg-purple-900/20"
  },
  {
    id: "rating",
    label: "Average Rating",
    value: "4.8/5",
    description: "Student satisfaction rating",
    icon: Star,
    color: "text-orange-600",
    bgColor: "bg-orange-100 dark:bg-orange-900/20"
  }
];

export const Stats = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join a thriving community of learners and organizations
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={stat.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Card className="text-center h-full bg-gradient-card hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${stat.bgColor} mb-2`}>
                      <IconComponent className={`h-8 w-8 ${stat.color}`} />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-foreground">
                        {stat.value}
                      </div>
                      <div className="text-lg font-semibold text-primary">
                        {stat.label}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {stat.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};