import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PLACEHOLDER_PAGES, ROUTES } from "@/lib/routes";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Link href={ROUTES.home} className="text-sm font-semibold">
            Interview Copilot
          </Link>
          <p className="mt-2 max-w-sm text-sm leading-6 text-muted">
            Prepare on the web. Get live answer support on the desktop app.
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm text-muted">
          {PLACEHOLDER_PAGES.map((page) => (
            <Link key={page.href} href={page.href} className="hover:text-foreground">
              {page.title}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
