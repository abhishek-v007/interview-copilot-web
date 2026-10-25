import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ROUTES } from "@/lib/routes";

export function Hero() {
  return (
    <Container as="section" className="py-16 sm:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
        AI interview preparation
      </p>
      <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
        Walk into interviews with answers you have already practiced.
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
        Interview Copilot helps you prepare for the role, rehearse strong answers, and keep
        context from your resume and job description in one place.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href={ROUTES.dashboard}>Start interview prep</Button>
        <Button href="/#product" variant="secondary">
          See how it works
        </Button>
      </div>
    </Container>
  );
}
