import { Separator } from "@/components/ui/separator";
import {
  Briefcase,
  MapPin,
  MonitorCog,
  Music,
  Popcorn,
  Tv,
  Utensils,
} from "lucide-react";

export function AboutPage() {
  return (
    <div className="p-4 space-y-10">
      <h1 className="text-4xl font-semibold">About</h1>
      <p className="text-muted-foreground">
        Meet Diego, a skilled Full-stack Developer.
      </p>

      <div className="flex flex-col lg:flex-row w-full border rounded-lg">
        <img src="/me.png" className="w-96 lg:border-r lg:ml-1 pt-4" />
        <div className="w-full p-4 space-y-6">
          <h2 className="text-sm text-muted-foreground">INTRODUCTION</h2>
          <h3 className="text-xl">
            Front-end Developer passionate about tech and coffee
          </h3>
          <p>
            With around 6 years of experience in full-stack development, I am
            currently working remotely with Idea Maker. I enjoy creating dynamic
            user experiences and have experience with a range of technologies
            including React, Next.js, Tailwind CSS, Node, Rabbit-MQ.
          </p>
          <Separator />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <div className="flex items-center gap-1">
                <Music className="w-3 h-3 t" />
                <span className="text-sm">Music</span>
              </div>
              <span className="text-sm text-muted-foreground">Rock</span>
            </div>

            <div>
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3 t" />
                <span className="text-sm">City</span>
              </div>
              <span className="text-sm text-muted-foreground">
                Jaraguá do sul, SC
              </span>
            </div>

            <div>
              <div className="flex items-center gap-1">
                <Popcorn className="w-3 h-3 t" />
                <span className="text-sm">Movie</span>
              </div>
              <span className="text-sm text-muted-foreground">Avatar</span>
            </div>

            <div>
              <div className="flex items-center gap-1">
                <Tv className="w-3 h-3 t" />
                <span className="text-sm">TV Show</span>
              </div>
              <span className="text-sm text-muted-foreground">
                Supernatural
              </span>
            </div>

            <div>
              <div className="flex items-center gap-1">
                <Utensils className="w-3 h-3 t" />
                <span className="text-sm">Food</span>
              </div>
              <span className="text-sm text-muted-foreground">Burger</span>
            </div>

            <div>
              <div className="flex items-center gap-1">
                <MonitorCog className="w-3 h-3 t" />
                <span className="text-sm">System</span>
              </div>
              <span className="text-sm text-muted-foreground">
                Windows / Linux (WSL)
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border rounded-lg p-4">
        <div className="space-y-4">
          <h3>Career</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              <span className="text-sm">Full stack Developer</span>
            </div>

            <div className="space-y-2 pl-1">
              <p className="text-xs text-muted-foreground">
                Idea Maker • Remote
              </p>
              <p className="text-xs text-muted-foreground">
                April 2022 - Present
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
