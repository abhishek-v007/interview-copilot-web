import { CtaSection } from "@/components/landing/CtaSection";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { ProductExplanation } from "@/components/landing/ProductExplanation";
import { ProductSplit } from "@/components/landing/ProductSplit";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductExplanation />
      <HowItWorks />
      <ProductSplit />
      <CtaSection />
    </>
  );
}
