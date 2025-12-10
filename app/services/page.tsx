import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      id: "residential",
      title: "Residential Construction",
      description:
        "We build modern and durable homes with high-quality materials, attention to detail, and a focus on client satisfaction.",
      features: [
        "Custom home building",
        "Home additions and extensions",
        "Basement finishing",
        "Garage construction",
        "Outdoor living spaces",
      ],
      image: "/images/residential.jpg",
    },
    {
      id: "commercial",
      title: "Commercial Projects",
      description:
        "Our team provides innovative and efficient solutions for business spaces, including offices, retail stores, and industrial buildings.",
      features: [
        "Office buildings",
        "Retail spaces",
        "Restaurants and hospitality",
        "Industrial facilities",
        "Medical offices",
      ],
      image: "/images/commercial.jpg",
    },
    {
      id: "renovations",
      title: "Renovations",
      description:
        "Transform your space with expert renovation services for kitchens, bathrooms, living areas, and more.",
      features: [
        "Kitchen remodeling",
        "Bathroom renovations",
        "Whole house renovations",
        "Historic restorations",
        "Commercial renovations",
      ],
      image: "/images/renovation.jpg",
    },
    {
      id: "architectural",
      title: "Architectural Design",
      description:
        "Work with our in-house architects to create stunning and functional designs that reflect your vision and needs.",
      features: [
        "Custom architectural plans",
        "3D modeling and visualization",
        "Sustainable design",
        "Permit acquisition assistance",
        "Building code compliance",
      ],
      image: "/images/architectural.jpg",
    },
    {
      id: "interior",
      title: "Interior Design",
      description:
        "Enhance the look and feel of your home or office with our professional interior design services, tailored to match your style.",
      features: [
        "Space planning",
        "Color consultation",
        "Furniture selection",
        "Lighting design",
        "Material and finish selection",
      ],
      image: "/images/interior.jpg",
    },
    {
      id: "landscaping",
      title: "Landscaping",
      description:
        "Create beautiful outdoor spaces with our landscaping services, including garden design, hardscaping, and maintenance.",
      features: ["Garden design", "Hardscaping", "Outdoor kitchens", "Water features", "Landscape lighting"],
      image: "/images/landscaping.jpg",
    },
    {
      id: "project-management",
      title: "Project Management",
      description:
        "From planning to execution, our project management services ensure your construction projects are completed on time and within budget.",
      features: [
        "Budget development and management",
        "Schedule creation and tracking",
        "Contractor coordination",
        "Quality control",
        "Progress reporting",
      ],
      image: "/images/project-management.jpg",
    },
    {
      id: "green-building",
      title: "Green Building Solutions",
      description:
        "Adopt sustainable construction practices with our eco-friendly materials and energy-efficient designs.",
      features: [
        "Energy-efficient design",
        "Sustainable materials",
        "Solar panel installation",
        "Water conservation systems",
        "LEED certification assistance",
      ],
      image: "/images/green-building.jpg",
    },
  ]

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
            {services.slice(0, 6).map((service) => (
              <Link
                key={service.id}
                href={`#${service.id}`}
                className="group overflow-hidden rounded-lg bg-gray-50 shadow-md transition-all hover:shadow-lg"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
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

      {/* Detailed Services */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-gray-900">Our Services in Detail</h2>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                id={service.id}
                key={service.id}
                className={`grid gap-8 md:grid-cols-2 md:items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className={`${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
                  <h3 className="mb-4 text-2xl font-bold text-gray-900">{service.title}</h3>
                  <p className="mb-6 text-lg text-gray-700">{service.description}</p>
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500 text-white">
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-md bg-yellow-500 px-6 py-3 font-medium text-black transition-colors hover:bg-yellow-400"
                  >
                    Request a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                <div
                  className={`relative h-[400px] overflow-hidden rounded-lg shadow-xl ${
                    index % 2 === 1 ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
              </div>
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
