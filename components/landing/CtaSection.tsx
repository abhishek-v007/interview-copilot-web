import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ROUTES } from "@/lib/routes";

export function CtaSection() {
  return (
    <Container as="section" className="pb-20 sm:pb-28">
      <div className="rounded-3xl border border-border bg-surface px-6 py-12 text-center sm:px-12">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ready to start preparing?</h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted">
          Open the prep workspace when you are ready. Account, resume, and history tools are
          coming next.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href={ROUTES.dashboard}>Start interview prep</Button>
        </div>
      </div>
    </Container>
  );
}
