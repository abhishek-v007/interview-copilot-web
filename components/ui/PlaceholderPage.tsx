import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { ROUTES } from "@/lib/routes";

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export function PlaceholderPage({
  title,
  description = "This area is planned for a later version of the web product. The initial release is the public landing page only.",
}: PlaceholderPageProps) {
  return (
    <Container className="flex flex-1 flex-col items-start py-16 sm:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Coming soon</p>
      <h1 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
      <p className="mt-4 max-w-xl text-base leading-7 text-muted sm:text-lg">{description}</p>
      <div className="mt-8">
        <Button href={ROUTES.home} variant="secondary">
          Back to home
        </Button>
      </div>
    </Container>
  );
}
