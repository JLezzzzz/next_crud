import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <Hero heading='CRUD Authentication inventory app' 
    description='Full stack application Built by Next.js, TypeScript, ShadCN, NeonAuth, StachAuth, Prisma, Uploadthing with SQL server'
    className= 'mx-auto max-w-6xl'
    image={{
    src: "/assets/images/jsdProfile.JPG",
    alt: "Hero section demo image showing interface components",
  }}
    />
  );
}
