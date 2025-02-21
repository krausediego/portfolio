import { Helmet } from "react-helmet-async";
import { Career } from "./career";
import { Introduction } from "./introduction";

export function AboutPage() {
  return (
    <>
      <Helmet title="About" />

      <div className="p-4 space-y-10">
        <h1 className="text-4xl font-semibold">About</h1>

        <p className="text-muted-foreground">
          Meet Diego, a skilled Full-stack Developer.
        </p>

        <Introduction />
        <Career />
      </div>
    </>
  );
}
