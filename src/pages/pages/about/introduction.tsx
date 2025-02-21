import { Separator } from "@/components/ui/separator";
import { MapPin, MonitorCog, Music, Popcorn, Tv, Utensils } from "lucide-react";
import { ReactNode } from "react";

interface Info {
  icon: ReactNode;
  title: string;
  value: string;
}

const personalInfo: Info[] = [
  {
    icon: <Music className="w-3 h-3" />,
    title: "Music",
    value: "Rock",
  },
  {
    icon: <MapPin className="w-3 h-3" />,
    title: "City",
    value: "Jaraguá do Sul, SC",
  },
  {
    icon: <Popcorn className="w-3 h-3" />,
    title: "Movie",
    value: "Avatar",
  },
  {
    icon: <Tv className="w-3 h-3" />,
    title: "TV Show",
    value: "Supernatural",
  },
  {
    icon: <Utensils className="w-3 h-3" />,
    title: "Food",
    value: "Burger",
  },
  {
    icon: <MonitorCog className="w-3 h-3" />,
    title: "System",
    value: "Windows / Linux (WSL)",
  },
];

const PersonalInfoCard = ({ icon, title, value }: Info) => (
  <div>
    <div className="flex items-center gap-1">
      {icon}
      <span className="text-sm">{title}</span>
    </div>
    <span className="text-sm text-muted-foreground">{value}</span>
  </div>
);

export function Introduction() {
  return (
    <div className="flex flex-col lg:flex-row w-full border rounded-lg">
      <img
        src="/me.png"
        className="w-96 lg:border-r lg:ml-1 pt-4"
        alt="Profile"
      />

      <div className="w-full p-4 space-y-6">
        <h2 className="text-sm text-muted-foreground">INTRODUCTION</h2>

        <h3 className="text-xl font-semibold">
          Front-end Developer passionate about tech and coffee
        </h3>

        <p>
          With around 6 years of experience in full-stack development, I am
          currently working remotely with Idea Maker. I enjoy creating dynamic
          user experiences and have experience with a range of technologies
          including React, Next.js, Tailwind CSS, Node, and RabbitMQ.
        </p>

        <Separator />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {personalInfo.map((info, index) => (
            <PersonalInfoCard key={index} {...info} />
          ))}
        </div>
      </div>
    </div>
  );
}
