import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Briefcase } from "lucide-react";

interface Job {
  role: string;
  enterprise: string;
  date: string;
}

const jobs: Job[] = [
  {
    role: "Full stack developer",
    enterprise: "Idea Maker • Remote",
    date: "April 2022 - Present",
  },
  {
    role: "Full stack developer",
    enterprise: "Freelancer • Remote",
    date: "January 2020 - 2022",
  },
  {
    role: "Front end developer",
    enterprise: "TO UP • Jaraguá do Sul, Brazil",
    date: "May 2019 - 2020",
  },
  {
    role: "Front end developer",
    enterprise: "iColabora • Jaraguá do Sul, Brazil",
    date: "January 2019 - 2019",
  },
  {
    role: "Programming Enthusiast",
    enterprise: "Myself",
    date: "2016 - 2019",
  },
];

const JobItem = ({
  role,
  enterprise,
  date,
  isCurrent,
}: Job & { isCurrent?: boolean }) => (
  <div className="space-y-2">
    <div className="flex items-center gap-2">
      {isCurrent && <Briefcase className="h-4 w-4" />}
      <span className="text-sm">{role}</span>
    </div>
    <div className="space-y-2">
      <p className="text-xs text-muted-foreground">{enterprise}</p>
      <p className="text-xs text-muted-foreground">{date}</p>
    </div>
  </div>
);

export function Career() {
  const currentJobs = jobs.filter((job) => job.date.includes("Present"));
  const previousJobs = jobs.filter((job) => !job.date.includes("Present"));

  return (
    <div className="w-full border rounded-lg p-4 space-y-4">
      <h3>Career</h3>

      {currentJobs.map((job, index) => (
        <JobItem key={index} {...job} isCurrent />
      ))}

      {previousJobs.length > 0 && (
        <Accordion type="single" collapsible>
          <AccordionItem value="careers">
            <AccordionTrigger className="text-muted-foreground">
              Show previous roles
            </AccordionTrigger>
            <AccordionContent className="space-y-6">
              {previousJobs.map((job, index) => (
                <JobItem key={index} {...job} />
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </div>
  );
}
