// components
import { Button } from "./ui/button";

// icons
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <section className="container mx-auto flex justify-between w-full pb-4">
      <p>&copy; 2025 All Rights Reserved</p>
      <div className="flex items-center gap-2">
        <Button size="icon" variant="ghost">
          <Facebook className="size-5" />
        </Button>
        <Button size="icon" variant="ghost">
          <Linkedin className="size-5" />
        </Button>
        <Button size="icon" variant="ghost">
          <Instagram className="size-5" />
        </Button>
        <Button size="icon" variant="ghost">
          <Github className="size-5" />
        </Button>
      </div>
    </section>
  );
}
