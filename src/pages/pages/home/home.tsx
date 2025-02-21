import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { TextAnimate } from "@/components/magicui/text-animate";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { cn } from "@/lib/utils";
import { Github, Instagram, Linkedin } from "lucide-react";
import { Helmet } from "react-helmet-async";

export function HomePage() {
  return (
    <>
      <Helmet title="Home" />
      <div className="flex-1 flex flex-col items-center gap-2 z-10">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] -z-10",
            "inset-x-0 inset-y-[5%] h-[80%] skew-y-12"
          )}
        />
        <div className="space-y-2 m-auto">
          <TypingAnimation className="text-center">
            Diego Krause
          </TypingAnimation>
          <TextAnimate
            className="ml-1 text-center lg:text-left text-muted-foreground"
            animation="blurInUp"
            by="character"
            once
          >
            Full stack developer
          </TextAnimate>
        </div>
        <p className="text-sm font-light text-muted-foreground mt-auto">
          Brazil - Jaraguá do sul, SC.
        </p>
        <div className="flex gap-3">
          <a
            href="https://instagram.com/diego.krause/"
            target="_blank"
            className="cursor-pointer"
            title="Instagram"
          >
            <Instagram className="h-4 w-4 text-muted-foreground" />
          </a>
          <a
            href="https://linkedin.com/in/diego-emanuel-krause-251783118/"
            target="_blank"
            className="cursor-pointer"
            title="Linkedin"
          >
            <Linkedin className="h-4 w-4 text-muted-foreground" />
          </a>
          <a
            href="https://github.com/krausediego/"
            target="_blank"
            className="cursor-pointer"
            title="Github"
          >
            <Github className="h-4 w-4 text-muted-foreground" />
          </a>
        </div>
      </div>
    </>
  );
}
