import { Github, Instagram, Linkedin } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern'
import { TextAnimate } from '@/components/magicui/text-animate'
import { TypingAnimation } from '@/components/magicui/typing-animation'
import { cn } from '@/lib/utils'

export function HomePage() {
  return (
    <>
      <Helmet title="Home" />
      <div className="z-10 flex flex-1 flex-col items-center gap-2">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            '-z-10 [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]',
            'inset-x-0 inset-y-[5%] h-[80%] skew-y-12',
          )}
        />
        <div className="m-auto space-y-2">
          <TypingAnimation className="text-center">
            Diego Krause
          </TypingAnimation>
          <TextAnimate
            className="ml-1 text-center text-muted-foreground lg:text-left"
            animation="blurInUp"
            by="character"
            once
          >
            Full stack developer
          </TextAnimate>
        </div>
        <p className="mt-auto text-sm font-light text-muted-foreground">
          Brazil - Jaraguá do sul, SC.
        </p>
        <div className="flex gap-3">
          <a
            href="https://instagram.com/diego.krause/"
            target="_blank"
            className="cursor-pointer"
            title="Instagram"
            rel="noreferrer"
          >
            <Instagram className="h-4 w-4 text-muted-foreground" />
          </a>
          <a
            href="https://linkedin.com/in/diego-emanuel-krause-251783118/"
            target="_blank"
            className="cursor-pointer"
            title="Linkedin"
            rel="noreferrer"
          >
            <Linkedin className="h-4 w-4 text-muted-foreground" />
          </a>
          <a
            href="https://github.com/krausediego/"
            target="_blank"
            className="cursor-pointer"
            title="Github"
            rel="noreferrer"
          >
            <Github className="h-4 w-4 text-muted-foreground" />
          </a>
        </div>
      </div>
    </>
  )
}
