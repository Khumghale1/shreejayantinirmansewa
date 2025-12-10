import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
// import TestimonialSlider from "@/components/testimonial-slider";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about/bgc.jpg"
            alt="Construction site"
            fill
            priority
            className="object-cover brightness-[0.6]"
          />
        </div>

        {/* Centered Content */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="max-w-3xl text-center px-4">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Building Your Future,{" "}
              <span className="text-yellow-400">Brick by Brick</span>
            </h1>
            <p className="mb-8 text-xl text-white">
              Quality construction services you can rely on for residential and
              commercial projects.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/services"
                className="inline-flex items-center rounded-md bg-yellow-500 px-6 py-3 font-medium text-black transition-colors hover:bg-yellow-400"
              >
                Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-md border border-white bg-transparent px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {[
              { number: "150+", label: "Projects Completed" },
              { number: "25+", label: "Years Experience" },
              { number: "50+", label: "Team Members" },
              { number: "98%", label: "Client Satisfaction" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl font-bold text-yellow-500">{stat.number}</p>
                <p className="text-lg text-white">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Our Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-700">
              We offer comprehensive construction solutions tailored to meet
              your specific needs and vision.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Residential Construction",
                description:
                  "We build homes tailored to your dreams with attention to detail and quality materials.",
                image: "/images/services/building1.jpg",
              },
              {
                title: "Commercial Projects",
                description:
                  "Modern solutions for business spaces designed for functionality and aesthetic appeal.",
                image: "/images/services/road1.jpg",


              },
              {
                title: "Renovations",
                description:
                  "Transform your existing spaces with our expert renovation and remodeling services.",
                image: "/images/services/renov1.jpg",

              },
            ].map((service, i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mb-4 text-gray-700">{service.description}</p>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-sm font-medium text-yellow-600 hover:text-yellow-500"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center rounded-md bg-yellow-500 px-6 py-3 font-medium text-black transition-colors hover:bg-yellow-400"
            >
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-gray-900 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Ready to Start Your Project?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
            Contact us today for a free consultation and quote. Let's bring your
            vision to life together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-yellow-500 px-6 py-3 font-medium text-black transition-colors hover:bg-yellow-400"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="tel:01-4993108"
              className="inline-flex items-center rounded-md border border-white bg-transparent px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
            >
              Call: 01-4993108
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Featured Projects
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-700">
              Take a look at some of our recent work that showcases our
              expertise and attention to detail.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Road Maintainance",
                location: "Kathmandu,nepal",
                image: "/images/projects/project1.jpg",
              },
              {
                title: "Office Complex",
                location: "Nepal",
                image: "/images/projects/project2.jpg",

              },
              {
                title: "Roadside Maintanance",
                location: "Riverside",
                image: "/images/projects/project3.jpg",
              },
            ].map((project, i) => (
              <div
                key={i}
                className="group relative h-80 overflow-hidden rounded-lg"
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="mb-1 text-xl font-bold">{project.title}</h3>
                  <p className="text-gray-300">{project.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center rounded-md border border-yellow-500 bg-transparent px-6 py-3 font-medium text-yellow-600 transition-colors hover:bg-yellow-500 hover:text-black"
            >
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials
      <TestimonialSlider /> */}
    </>
  );
}
