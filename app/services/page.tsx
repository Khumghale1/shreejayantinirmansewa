import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { type SanityDocument } from "next-sanity"
import { client } from "../sanity/client"
import { urlFor } from "../sanity/image"

const SERVICES_QUERY = `*[
  _type == "service"
  && defined(slug.current)
]|order(order asc){_id, title, slug, description, features, image, order}`

const options = { next: { revalidate: 30 } }

export default async function ServicesPage() {
  const services = await client.fetch<SanityDocument[]>(SERVICES_QUERY, {}, options)

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-16 md:py-24">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image src="/images/services-hero.jpg" alt="Construction services" fill className="object-cover" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">Our Services</h1>
            <p className="text-xl text-gray-300">
              Comprehensive construction solutions tailored to meet your specific needs and vision.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">What We Offer</h2>
            <p className="mb-12 text-lg text-gray-700">
              At Shree Jayanti Nirman Sewa, we offer a wide range of services tailored to meet your specific needs. From
              residential construction to commercial projects, our team of experts is ready to bring your vision to
              life.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service._id}
                href={`/services/${service.slug.current}`}
                className="group overflow-hidden rounded-lg bg-gray-50 shadow-md transition-all hover:shadow-lg"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image ? urlFor(service.image).width(800).height(600).url() : "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{service.title}</h3>
                  <p className="text-gray-700">{service.description.substring(0, 100)}...</p>
                  <div className="mt-4 inline-flex items-center text-yellow-600">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">Our Process</h2>
            <p className="mb-12 text-lg text-gray-700">
              We follow a structured approach to ensure your project is completed successfully from start to finish.
            </p>
          </div>

          <div className="relative">
            {/* Process timeline line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-yellow-500 md:left-1/2 md:-ml-0.5"></div>

            <div className="space-y-12">
              {[
                {
                  step: 1,
                  title: "Initial Consultation",
                  description: "We meet to discuss your vision, requirements, and budget for the project.",
                },
                {
                  step: 2,
                  title: "Design & Planning",
                  description: "Our team creates detailed plans and designs based on your requirements.",
                },
                {
                  step: 3,
                  title: "Proposal & Contract",
                  description: "We provide a comprehensive proposal including timeline and cost estimates.",
                },
                {
                  step: 4,
                  title: "Construction",
                  description: "Our skilled team brings your project to life with quality craftsmanship.",
                },
                {
                  step: 5,
                  title: "Quality Inspection",
                  description: "We conduct thorough inspections to ensure everything meets our high standards.",
                },
                {
                  step: 6,
                  title: "Project Completion",
                  description: "We deliver your finished project and provide any necessary follow-up support.",
                },
              ].map((process, i) => (
                <div key={i} className="relative">
                  {/* Step circle */}
                  <div className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-white md:left-1/2 md:-ml-4">
                    {process.step}
                  </div>

                  <div
                    className={`ml-12 md:ml-0 ${
                      i % 2 === 0 ? "md:mr-auto md:pr-8 md:text-right" : "md:ml-auto md:pl-8"
                    } md:w-5/12`}
                  >
                    <h3 className="mb-2 text-xl font-bold text-gray-900">{process.title}</h3>
                    <p className="text-gray-700">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white">Ready to Start Your Project?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
            Contact us today for a free consultation and quote. Let's bring your vision to life together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-yellow-500 px-6 py-3 font-medium text-black transition-colors hover:bg-yellow-400"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
