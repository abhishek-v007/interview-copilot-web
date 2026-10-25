import { Container } from "@/components/layout/Container";

const products = [
  {
    name: "Web",
    title: "Prepare",
    body: "Landing, practice, resume context, job description, and history will live here. This first version ships the public site.",
  },
  {
    name: "Desktop",
    title: "Live interview",
    body: "The Electron app is a separate product. Use it during the interview to send a question and get a suggested answer.",
  },
];

export function ProductSplit() {
  return (
    <Container as="section" id="products" className="py-16 sm:py-20">
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Two products, one prep system</h2>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {products.map((product) => (
          <article key={product.name} className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{product.name}</p>
            <h3 className="mt-3 text-2xl font-semibold">{product.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{product.body}</p>
          </article>
        ))}
      </div>
    </Container>
  );
}
