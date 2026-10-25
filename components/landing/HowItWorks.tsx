import { Container } from "@/components/layout/Container";

const steps = [
  {
    step: "01",
    title: "Set the role",
    body: "Start with the position you are interviewing for so answers stay specific.",
  },
  {
    step: "02",
    title: "Add your context",
    body: "Bring in resume and job-description details when those workflows ship.",
  },
  {
    step: "03",
    title: "Practice the answer",
    body: "Generate a spoken-style response, review key points, and refine before the call.",
  },
];

export function HowItWorks() {
  return (
    <Container as="section" id="how-it-works" className="py-16 sm:py-20">
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">How interview prep works</h2>
      <ol className="mt-10 grid gap-4 md:grid-cols-3">
        {steps.map((item) => (
          <li key={item.step} className="rounded-2xl border border-border p-6">
            <p className="text-xs font-semibold tracking-[0.16em] text-accent">{item.step}</p>
            <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{item.body}</p>
          </li>
        ))}
      </ol>
    </Container>
  );
}
