import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

const testimonials = [
  {
    name: "John Doe",
    avatar: "/avatars/01.png",
    title: "Software Engineer",
    description: "This design system has been a game-changer for our team. It's saved us countless hours.",
  },
  {
    name: "Jane Smith",
    avatar: "/avatars/02.png",
    title: "Product Manager",
    description: "I love how easy it is to create consistent and beautiful UIs with this system.",
  },
  {
    name: "Sam Wilson",
    avatar: "/avatars/03.png",
    title: "UX Designer",
    description: "The components are well-thought-out and a pleasure to work with.",
  },
];

export const Testimonials = () => {
  return (
    <section className="container py-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold">What Our Customers Say</h2>
        <p className="text-[20px] leading-[1.2] text-muted-foreground mt-2">
          Listen to the stories of our satisfied customers.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name}>
            <CardHeader className="flex-row items-center gap-4">
              <Avatar>
                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{testimonial.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </div>
            </CardHeader>
            <CardContent>
              <p>{testimonial.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
