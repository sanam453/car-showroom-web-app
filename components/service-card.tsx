// components
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  buttonText: string;
}


export default function ServiceCard({ title, description, buttonText }: ServiceCardProps) {
  return (
    <Card className="relative bg-background border border-primary/15 hover:border-primary/20 transition ease-in-out bg-[radial-gradient(ellipse_at_top_center,rgba(120,65,1,.1)_0%,transparent_60%)] hover:bg-[radial-gradient(ellipse_at_top_center,rgba(120,65,1,.8)_0%,transparent_60%)]">
      <CardHeader>
        <CardTitle className="text-2xl font-medium text-secondary-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-secondary-foreground/80">
        {description}
      </CardContent>
      <CardFooter className="justify-center">
        <Button variant="outline">{buttonText}</Button>
      </CardFooter>
    </Card>
  );
}
