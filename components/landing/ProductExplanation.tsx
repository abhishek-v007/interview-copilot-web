import { Container } from "@/components/layout/Container";

const features = [
  {
    title: "Role-specific prep",
    body: "Frame every answer around the job you are interviewing for, not a generic script.",
  },
  {
    title: "Resume-aware answers",
    body: "Turn your experience into concise talking points you can actually say in the room.",
  },
  {
    title: "Practice before the live round",
    body: "Rehearse common and role-specific questions so the desktop copilot is a backup, not a crutch.",
  },
];

export function ProductExplanation() {
  return (
    <Container as="section" id="product" className="py-16 sm:py-20">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Built for interview prep, not just prompts</h2>
        <p className="mt-4 text-base leading-7 text-muted">
          The web app is where you get ready: understand the role, organize your story, and
          practice answers. The desktop app is a separate live companion during the interview.
        </p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <article key={feature.title} className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{feature.body}</p>
          </article>
        ))}
      </div>
    </Container>
  );
}
