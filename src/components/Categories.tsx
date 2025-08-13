import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Palette, 
  TrendingUp, 
  Briefcase, 
  Globe,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: "development",
    name: "Development",
    description: "Web, Mobile & Software Development",
    icon: Code2,
    count: 5,
    color: "bg-blue-500",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: "data-science",
    name: "Data Science",
    description: "AI, ML & Data Analytics",
    icon: Database,
    count: 4,
    color: "bg-green-500",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    id: "design",
    name: "Design",
    description: "UX/UI & Graphic Design",
    icon: Palette,
    count: 3,
    color: "bg-purple-500",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: "marketing",
    name: "Marketing",
    description: "Digital Marketing & Growth",
    icon: TrendingUp,
    count: 3,
    color: "bg-orange-500",
    gradient: "from-orange-500 to-red-500"
  },
  {
    id: "business",
    name: "Business",
    description: "Leadership & Management",
    icon: Briefcase,
    count: 3,
    color: "bg-indigo-500",
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    id: "technology",
    name: "Technology",
    description: "Cloud, DevOps & Infrastructure",
    icon: Globe,
    count: 3,
    color: "bg-teal-500",
    gradient: "from-teal-500 to-cyan-500"
  }
];

export const Categories = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Browse by Category
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find workshops tailored to your interests and career goals
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Link 
                key={category.id} 
                to={`/workshops?category=${category.id}`}
                className="block animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 bg-gradient-card group-hover:bg-background">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Icon with gradient background */}
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} text-white shadow-lg`}>
                        <IconComponent className="h-6 w-6" />
                      </div>

                      {/* Category info */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                            {category.name}
                          </h3>
                          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                        <p className="text-muted-foreground">
                          {category.description}
                        </p>
                      </div>

                      {/* Workshop count */}
                      <div className="flex items-center justify-between pt-2 border-t">
                        <Badge variant="secondary" className="text-xs">
                          {category.count} workshops
                        </Badge>
                        <span className="text-sm font-medium text-primary">
                          Explore →
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};