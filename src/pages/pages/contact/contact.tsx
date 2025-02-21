import { TriangleAlert } from "lucide-react";
import { Helmet } from "react-helmet-async";

export function ContactPage() {
  return (
    <>
      <Helmet title="Contact" />
      <div className="flex justify-center items-center gap-4 m-auto">
        <TriangleAlert className="size-8 text-muted-foreground" />
        <span className="text-2xl text-muted-foreground">Work in progress</span>
      </div>
    </>
  );
}
