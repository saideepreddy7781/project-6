import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dumbbell,
  Users,
  Calendar,
  Trophy,
  ChevronRight,
  Clock,
  Target,
  Flame,
  Star,
  ShoppingBag,
  Smartphone,
  Video,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const calculateBMI = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (h > 0 && w > 0) {
      setBmi(Number((w / (h * h)).toFixed(1)));
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Dumbbell className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold tracking-tight">NGB</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Button variant="ghost">Classes</Button>
              <Button variant="ghost">Trainers</Button>
              <Button variant="ghost">Pricing</Button>
              <Button variant="ghost">Contact</Button>
              <Button className="bg-primary hover:bg-primary/90">
                Start Free Trial
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 animate-in">
              <div className="flex flex-col space-y-4">
                <Button variant="ghost">Classes</Button>
                <Button variant="ghost">Trainers</Button>
                <Button variant="ghost">Pricing</Button>
                <Button variant="ghost">Contact</Button>
                <Button className="bg-primary hover:bg-primary/90">
                  Start Free Trial
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary to-secondary/50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>
        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
              Transform Your Life with{" "}
              <span className="text-primary">NGB Fitness</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join the ultimate fitness experience. Start your journey today with our
              state-of-the-art facilities and expert trainers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="h-12 px-8 text-lg">
                Start Free Trial
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 text-lg border-2"
              >
                Book a Tour
                <Video className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold tracking-tight">
              Why Choose NGB?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience fitness excellence with our premium equipment and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Dumbbell className="h-10 w-10" />,
                title: "Latest Equipment",
                description:
                  "State-of-the-art machines and free weights for every workout style",
              },
              {
                icon: <Users className="h-10 w-10" />,
                title: "Expert Trainers",
                description:
                  "Certified professionals to guide your fitness journey",
              },
              {
                icon: <Target className="h-10 w-10" />,
                title: "Personalized Programs",
                description:
                  "Customized workout plans tailored to your goals",
              },
              {
                icon: <Clock className="h-10 w-10" />,
                title: "24/7 Access",
                description:
                  "Train on your schedule with round-the-clock facility access",
              },
              {
                icon: <Smartphone className="h-10 w-10" />,
                title: "Mobile App",
                description:
                  "Track workouts and book classes from your phone",
              },
              {
                icon: <ShoppingBag className="h-10 w-10" />,
                title: "Pro Shop",
                description:
                  "Premium supplements and workout gear available on-site",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-2"
              >
                <CardHeader>
                  <div className="p-4 w-fit rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-2xl mt-6">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold tracking-tight">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your fitness journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Basic",
                price: "$49",
                period: "per month",
                description: "Perfect for getting started",
                features: [
                  "Access to gym facilities",
                  "Basic equipment usage",
                  "2 group classes per month",
                  "Locker room access",
                ],
                popular: false,
              },
              {
                title: "Pro",
                price: "$89",
                period: "per month",
                description: "Most popular choice",
                features: [
                  "All Basic features",
                  "Unlimited group classes",
                  "1 personal training session",
                  "Nutrition consultation",
                  "Mobile app access",
                ],
                popular: true,
              },
              {
                title: "Elite",
                price: "$149",
                period: "per month",
                description: "For serious athletes",
                features: [
                  "All Pro features",
                  "4 personal training sessions",
                  "Monthly massage",
                  "Priority booking",
                  "VIP lounge access",
                ],
                popular: false,
              },
            ].map((plan) => (
              <Card
                key={plan.title}
                className={`relative ${
                  plan.popular
                    ? "border-primary border-2 shadow-lg scale-105"
                    : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                  <CardDescription className="mt-2">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Trophy className="h-5 w-5 mr-3 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular ? "bg-primary" : "bg-secondary"
                    }`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <Card className="bg-primary text-white">
            <CardContent className="flex flex-col items-center p-16 text-center space-y-8">
              <Calendar className="h-16 w-16" />
              <h2 className="text-4xl font-bold tracking-tight">
                Start Your Fitness Journey Today
              </h2>
              <p className="text-xl max-w-2xl opacity-90">
                Join thousands of members who have already transformed their lives.
                First week free, no commitment required.
              </p>
              <div className="flex flex-wrap gap-6 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="h-12 px-8 text-lg"
                >
                  Start Free Trial
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-8 text-lg border-2 text-white hover:text-primary"
                >
                  Book a Tour
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/30 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <Dumbbell className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold">NGB</span>
              </div>
              <p className="text-muted-foreground">
                Transforming lives through fitness excellence since 2024.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Button variant="link" className="p-0 h-auto">
                    About Us
                  </Button>
                </li>
                <li>
                  <Button variant="link" className="p-0 h-auto">
                    Classes
                  </Button>
                </li>
                <li>
                  <Button variant="link" className="p-0 h-auto">
                    Schedule
                  </Button>
                </li>
                <li>
                  <Button variant="link" className="p-0 h-auto">
                    Contact
                  </Button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>123 Fitness Street</li>
                <li>New York, NY 10001</li>
                <li>+1 (555) 123-4567</li>
                <li>hello@ngb.fitness</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t text-center text-muted-foreground">
            <p>© 2024 NGB Fitness. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;