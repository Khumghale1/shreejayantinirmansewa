import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Award, Clock, Users, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-16 md:py-24">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image src="/images/about/about2.jpg" alt="Construction team" fill className="object-cover" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">About Shree Jayanti Nirman Sewa.</h1>
            <p className="text-xl text-gray-300">
              Where vision meets expertise to create exceptional structures that stand the test of time.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="order-2 md:order-1">
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">Who We Are</h2>
              <p className="mb-6 text-lg text-gray-700">
                Welcome to Shree Jayanti Nirman Sewa, where we transform your vision into reality. Our team of experts
                specializes in delivering high-quality construction services tailored to meet your needs. With years of
                experience, we ensure every project is completed with excellence and attention to detail.
              </p>
              <p className="text-lg text-gray-700">
                 We've grown from a small local contractor to a respected name in the construction
                industry, serving both residential and commercial clients across the region. Our success is built on a
                foundation of quality workmanship, integrity, and customer satisfaction.
              </p>
            </div>
            <div className="relative order-1 h-[400px] overflow-hidden rounded-lg shadow-xl md:order-2">
              <Image src="/images/about/about3.jpg" alt="Construction team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">Our Mission</h2>
            <p className="mb-8 text-xl text-gray-700">
              At Shree Jayanti Nirman Sewa, our mission is to create lasting structures that combine innovation, sustainability,
              and craftsmanship. We are committed to delivering projects that exceed client expectations while adhering
              to the highest standards of safety and quality.
            </p>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
              {[
                {
                  icon: <Award className="h-10 w-10 text-yellow-500" />,
                  title: "Excellence",
                  description: "Striving for the highest quality in every project",
                },
                {
                  icon: <Clock className="h-10 w-10 text-yellow-500" />,
                  title: "Timeliness",
                  description: "Delivering projects on schedule, every time",
                },
                {
                  icon: <Users className="h-10 w-10 text-yellow-500" />,
                  title: "Collaboration",
                  description: "Working closely with clients at every stage",
                },
                {
                  icon: <Shield className="h-10 w-10 text-yellow-500" />,
                  title: "Integrity",
                  description: "Honest and transparent in all our dealings",
                },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  {item.icon}
                  <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                  <p className="text-center text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-900">Our Core Values</h2>
            <ul className="space-y-6">
              {[
                {
                  title: "Integrity",
                  description: "We uphold transparency and honesty in all our projects.",
                },
                {
                  title: "Quality",
                  description: "Delivering excellence in every detail is our priority.",
                },
                {
                  title: "Innovation",
                  description: "We embrace cutting-edge technology and design.",
                },
                {
                  title: "Sustainability",
                  description: "We promote eco-friendly practices and materials.",
                },
                {
                  title: "Customer Focus",
                  description: "Your satisfaction is at the heart of everything we do.",
                },
              ].map((value, i) => (
                <li key={i} className="flex items-start rounded-lg bg-gray-50 p-6 shadow-sm">
                  <CheckCircle className="mr-4 h-6 w-6 flex-shrink-0 text-yellow-500" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                    <p className="text-gray-700">{value.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

    

      {/* Team Section */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-gray-900">Meet Our Team</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "John Doe",
                position: "Founder & CEO",
                bio: "With over 20 years of experience, John leads the company with a focus on innovation and quality.",
                image: "/images/team1.jpg",
              },
              {
                name: "Jane Smith",
                position: "Lead Architect",
                bio: "Jane specializes in creating modern, sustainable designs that bring visions to life.",
                image: "/images/team2.jpg",
              },
              {
                name: "Mark Lee",
                position: "Project Manager",
                bio: "Mark ensures all projects are delivered on time, within budget, and to the highest standards.",
                image: "/images/team3.jpg",
              },
            ].map((member, i) => (
              <div key={i} className="overflow-hidden rounded-lg bg-gray-50 shadow-md transition-all hover:shadow-lg">
                <div className="relative h-80 w-full">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="mb-1 text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="mb-4 text-yellow-600">{member.position}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white">Ready to Work With Us?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
            Contact us today to discuss your project needs and how we can help bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-yellow-500 px-6 py-3 font-medium text-black transition-colors hover:bg-yellow-400"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
