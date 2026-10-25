"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ROUTES } from "@/lib/routes";

const navItems = [
  { href: "/#product", label: "Product" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#products", label: "Web vs desktop" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href={ROUTES.home} className="text-sm font-semibold tracking-tight">
          Interview Copilot
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={ROUTES.dashboard}>Start interview prep</Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 items-center rounded-lg border border-border px-3 text-sm md:hidden"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-border bg-background md:hidden">
          <Container className="flex flex-col gap-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button href={ROUTES.dashboard} onClick={() => setOpen(false)}>
              Start interview prep
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
