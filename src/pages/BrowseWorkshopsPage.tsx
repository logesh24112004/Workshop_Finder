import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WorkshopCard } from "@/components/WorkshopCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Search, 
  Filter, 
  SlidersHorizontal, 
  MapPin, 
  Calendar,
  DollarSign,
  Users,
  X
} from "lucide-react";

// Extended mock workshop data with more categories
const allWorkshops = [
  // Development Workshops
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
    category: "development",
    featured: true
  },
  {
    id: "4",
    title: "Full-Stack JavaScript Development",
    company: "Code Academy Plus",
    companyLogo: "/placeholder.svg",
    description: "Learn Node.js, Express, MongoDB, and React to build complete web applications from scratch.",
    duration: "8 weeks",
    startDate: "Jan 29, 2024",
    location: "Austin, TX",
    type: "in-person" as const,
    participants: 12,
    maxParticipants: 20,
    rating: 4.6,
    price: 899,
    category: "development",
    featured: false
  },
  {
    id: "7",
    title: "Vue.js Masterclass",
    company: "Frontend Masters",
    companyLogo: "/placeholder.svg",
    description: "Deep dive into Vue.js 3, Composition API, Vuex, and building scalable applications.",
    duration: "4 weeks",
    startDate: "Feb 15, 2024",
    location: "Online",
    type: "online" as const,
    participants: 45,
    maxParticipants: 60,
    rating: 4.7,
    price: 399,
    category: "development",
    featured: false
  },
  {
    id: "8",
    title: "Python Web Development with Django",
    company: "Python Institute",
    companyLogo: "/placeholder.svg",
    description: "Build robust web applications using Django framework, REST APIs, and deployment strategies.",
    duration: "6 weeks",
    startDate: "Mar 1, 2024",
    location: "Seattle, WA",
    type: "hybrid" as const,
    participants: 18,
    maxParticipants: 25,
    rating: 4.5,
    price: 650,
    category: "development",
    featured: false
  },
  {
    id: "9",
    title: "Mobile App Development with React Native",
    company: "Mobile Dev Academy",
    companyLogo: "/placeholder.svg",
    description: "Create cross-platform mobile applications using React Native and modern development tools.",
    duration: "5 weeks",
    startDate: "Feb 20, 2024",
    location: "Online",
    type: "online" as const,
    participants: 32,
    maxParticipants: 40,
    rating: 4.6,
    price: 550,
    category: "development",
    featured: false
  },

  // Data Science Workshops
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
    category: "data-science",
    featured: true
  },
  {
    id: "5",
    title: "Python for Data Analysis",
    company: "Analytics Pro",
    companyLogo: "/placeholder.svg",
    description: "Master Python libraries for data manipulation, visualization, and statistical analysis.",
    duration: "2 weeks",
    startDate: "Feb 5, 2024",
    location: "Online",
    type: "online" as const,
    participants: 89,
    maxParticipants: 100,
    rating: 4.5,
    price: 199,
    category: "data-science",
    featured: false
  },
  {
    id: "10",
    title: "Deep Learning with TensorFlow",
    company: "AI Research Lab",
    companyLogo: "/placeholder.svg",
    description: "Advanced deep learning techniques, neural networks, and practical AI applications.",
    duration: "6 weeks",
    startDate: "Mar 5, 2024",
    location: "Boston, MA",
    type: "in-person" as const,
    participants: 15,
    maxParticipants: 20,
    rating: 4.8,
    price: 1200,
    category: "data-science",
    featured: true
  },
  {
    id: "11",
    title: "Big Data Analytics with Spark",
    company: "Data Engineering Hub",
    companyLogo: "/placeholder.svg",
    description: "Process large datasets using Apache Spark, Hadoop, and distributed computing principles.",
    duration: "3 weeks",
    startDate: "Feb 25, 2024",
    location: "Online",
    type: "online" as const,
    participants: 67,
    maxParticipants: 80,
    rating: 4.4,
    price: 450,
    category: "data-science",
    featured: false
  },

  // Design Workshops
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
    category: "design",
    featured: true
  },
  {
    id: "12",
    title: "Graphic Design Fundamentals",
    company: "Creative Arts Institute",
    companyLogo: "/placeholder.svg",
    description: "Master typography, color theory, layout design, and Adobe Creative Suite tools.",
    duration: "4 weeks",
    startDate: "Feb 10, 2024",
    location: "Los Angeles, CA",
    type: "hybrid" as const,
    participants: 22,
    maxParticipants: 30,
    rating: 4.3,
    price: 380,
    category: "design",
    featured: false
  },
  {
    id: "13",
    title: "Web Design with Figma",
    company: "Digital Design Academy",
    companyLogo: "/placeholder.svg",
    description: "Create stunning web interfaces using Figma, from wireframes to high-fidelity prototypes.",
    duration: "2 weeks",
    startDate: "Mar 10, 2024",
    location: "Online",
    type: "online" as const,
    participants: 78,
    maxParticipants: 100,
    rating: 4.6,
    price: 250,
    category: "design",
    featured: false
  },

  // Marketing Workshops
  {
    id: "6",
    title: "Digital Marketing Mastery",
    company: "Growth Marketing Hub",
    companyLogo: "/placeholder.svg",
    description: "Learn SEO, social media marketing, content strategy, and paid advertising to grow businesses online.",
    duration: "5 weeks",
    startDate: "Feb 12, 2024",
    location: "Chicago, IL",
    type: "hybrid" as const,
    participants: 67,
    maxParticipants: 80,
    rating: 4.4,
    price: 350,
    category: "marketing",
    featured: false
  },
  {
    id: "14",
    title: "Social Media Strategy & Analytics",
    company: "Social Growth Co.",
    companyLogo: "/placeholder.svg",
    description: "Build effective social media campaigns and measure their impact using analytics tools.",
    duration: "3 weeks",
    startDate: "Feb 18, 2024",
    location: "Online",
    type: "online" as const,
    participants: 95,
    maxParticipants: 120,
    rating: 4.2,
    price: 199,
    category: "marketing",
    featured: false
  },
  {
    id: "15",
    title: "Content Marketing & SEO",
    company: "Content Masters",
    companyLogo: "/placeholder.svg",
    description: "Create compelling content that ranks well in search engines and drives organic traffic.",
    duration: "4 weeks",
    startDate: "Mar 15, 2024",
    location: "Denver, CO",
    type: "in-person" as const,
    participants: 28,
    maxParticipants: 35,
    rating: 4.5,
    price: 420,
    category: "marketing",
    featured: false
  },

  // Business Workshops
  {
    id: "16",
    title: "Startup Fundamentals & Pitch Deck",
    company: "Entrepreneur Academy",
    companyLogo: "/placeholder.svg",
    description: "Learn how to validate business ideas, create compelling pitch decks, and secure funding.",
    duration: "3 weeks",
    startDate: "Feb 22, 2024",
    location: "San Francisco, CA",
    type: "hybrid" as const,
    participants: 35,
    maxParticipants: 50,
    rating: 4.7,
    price: 599,
    category: "business",
    featured: true
  },
  {
    id: "17",
    title: "Project Management Professional",
    company: "PM Institute",
    companyLogo: "/placeholder.svg",
    description: "Master project management methodologies, tools, and leadership skills for successful project delivery.",
    duration: "6 weeks",
    startDate: "Mar 1, 2024",
    location: "Online",
    type: "online" as const,
    participants: 112,
    maxParticipants: 150,
    rating: 4.6,
    price: 750,
    category: "business",
    featured: false
  },
  {
    id: "18",
    title: "Financial Analysis & Modeling",
    company: "Finance Pro Academy",
    companyLogo: "/placeholder.svg",
    description: "Build financial models, analyze investment opportunities, and make data-driven business decisions.",
    duration: "4 weeks",
    startDate: "Feb 28, 2024",
    location: "New York, NY",
    type: "in-person" as const,
    participants: 24,
    maxParticipants: 30,
    rating: 4.8,
    price: 899,
    category: "business",
    featured: false
  },

  // Technology Workshops
  {
    id: "19",
    title: "Cloud Computing with AWS",
    company: "Cloud Tech Institute",
    companyLogo: "/placeholder.svg",
    description: "Master Amazon Web Services, cloud architecture, and deployment strategies for scalable applications.",
    duration: "5 weeks",
    startDate: "Mar 8, 2024",
    location: "Online",
    type: "online" as const,
    participants: 87,
    maxParticipants: 100,
    rating: 4.5,
    price: 650,
    category: "technology",
    featured: false
  },
  {
    id: "20",
    title: "DevOps & CI/CD Pipeline",
    company: "DevOps Academy",
    companyLogo: "/placeholder.svg",
    description: "Implement continuous integration and deployment using Docker, Kubernetes, and modern DevOps tools.",
    duration: "4 weeks",
    startDate: "Mar 12, 2024",
    location: "Austin, TX",
    type: "hybrid" as const,
    participants: 19,
    maxParticipants: 25,
    rating: 4.7,
    price: 799,
    category: "technology",
    featured: true
  },
  {
    id: "21",
    title: "Cybersecurity Fundamentals",
    company: "Security First Institute",
    companyLogo: "/placeholder.svg",
    description: "Learn ethical hacking, network security, and how to protect systems from cyber threats.",
    duration: "6 weeks",
    startDate: "Feb 26, 2024",
    location: "Washington, DC",
    type: "in-person" as const,
    participants: 16,
    maxParticipants: 20,
    rating: 4.9,
    price: 1100,
    category: "technology",
    featured: true
  }
];

const categories = [
  { id: "all", name: "All Categories" },
  { id: "development", name: "Development" },
  { id: "data-science", name: "Data Science" },
  { id: "design", name: "Design" },
  { id: "marketing", name: "Marketing" },
  { id: "business", name: "Business" },
  { id: "technology", name: "Technology" }
];

export const BrowseWorkshopsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedType, setSelectedType] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  // Update URL when category changes
  const updateCategory = (category: string) => {
    setSelectedCategory(category);
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  // Filter and sort workshops
  const filteredWorkshops = useMemo(() => {
    let filtered = allWorkshops.filter(workshop => {
      const matchesSearch = workshop.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          workshop.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          workshop.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || workshop.category === selectedCategory;
      
      const matchesType = selectedType === 'all' || workshop.type === selectedType;
      
      const matchesPrice = priceFilter === 'all' ||
                          (priceFilter === 'free' && workshop.price === 0) ||
                          (priceFilter === 'paid' && workshop.price > 0);
      
      return matchesSearch && matchesCategory && matchesType && matchesPrice;
    });

    // Sort workshops
    switch (sortBy) {
      case 'featured':
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'date':
        filtered.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, selectedType, priceFilter, sortBy]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedType('all');
    setPriceFilter('all');
    setSortBy('featured');
    setSearchParams({});
  };

  const activeFiltersCount = [
    selectedCategory !== 'all',
    selectedType !== 'all',
    priceFilter !== 'all',
    searchTerm !== ''
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="space-y-6 mb-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Browse Workshops</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover professional workshops and training programs from top organizations
            </p>
          </div>

          {/* Search and Filters */}
          <div className="space-y-4">
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search workshops, companies, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => updateCategory(category.id)}
                  className={selectedCategory === category.id ? "shadow-orange" : ""}
                >
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  Filters
                  {activeFiltersCount > 0 && (
                    <Badge variant="secondary" className="ml-1">
                      {activeFiltersCount}
                    </Badge>
                  )}
                </Button>

                {activeFiltersCount > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="flex items-center gap-2"
                  >
                    <X className="h-4 w-4" />
                    Clear All
                  </Button>
                )}
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="date">Start Date</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Expanded Filters */}
            {showFilters && (
              <Card>
                <CardContent className="p-6">
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Format</label>
                      <Select value={selectedType} onValueChange={setSelectedType}>
                        <SelectTrigger>
                          <SelectValue placeholder="All formats" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Formats</SelectItem>
                          <SelectItem value="online">Online</SelectItem>
                          <SelectItem value="in-person">In-Person</SelectItem>
                          <SelectItem value="hybrid">Hybrid</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Price</label>
                      <Select value={priceFilter} onValueChange={setPriceFilter}>
                        <SelectTrigger>
                          <SelectValue placeholder="All prices" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Prices</SelectItem>
                          <SelectItem value="free">Free</SelectItem>
                          <SelectItem value="paid">Paid</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Duration</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Any duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Any Duration</SelectItem>
                          <SelectItem value="short">1-3 days</SelectItem>
                          <SelectItem value="medium">1-4 weeks</SelectItem>
                          <SelectItem value="long">1+ months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {/* Results Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold">
                {selectedCategory !== 'all' 
                  ? `${categories.find(c => c.id === selectedCategory)?.name} Workshops`
                  : 'All Workshops'
                }
              </h2>
              <p className="text-muted-foreground">
                {filteredWorkshops.length} workshop{filteredWorkshops.length !== 1 ? 's' : ''} found
              </p>
            </div>
          </div>

          {/* Workshop Grid */}
          {filteredWorkshops.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWorkshops.map((workshop) => (
                <div key={workshop.id} className="animate-fade-in">
                  <WorkshopCard {...workshop} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="mx-auto w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-4">
                <Search className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No workshops found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search terms or filters
              </p>
              <Button onClick={clearFilters}>Clear Filters</Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};