import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { type SanityDocument } from "next-sanity"
import { client } from "../sanity/client"
import { urlFor } from "../sanity/image"

const PROJECTS_QUERY = `*[
  _type == "project"
  && defined(slug.current)
]|order(order asc){_id, title, slug, description, category, location, image, order}`

const options = { next: { revalidate: 30 } }

export default async function ProjectsPage() {
  const projects = await client.fetch<SanityDocument[]>(PROJECTS_QUERY, {}, options)

  const categories = ["All", "Residential", "Commercial", "Renovation", "Interior Design"]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-16 md:py-24">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image src="/images/projects-hero.jpg" alt="Our projects" fill className="object-cover" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">Our Projects</h1>
            <p className="text-xl text-gray-300">
              Explore our portfolio of completed projects showcasing our expertise and craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {categories.map((category, i) => (
              <button
                key={i}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                  i === 0 ? "bg-yellow-500 text-black" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project._id}
                className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.image ? urlFor(project.image).width(800).height(600).url() : "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 rounded-full bg-yellow-500 px-3 py-1 text-xs font-medium text-black">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-1 text-xl font-bold text-gray-900">{project.title}</h3>
                  <p className="mb-3 text-sm text-yellow-600">{project.location}</p>
                  <p className="mb-4 text-gray-700">{project.description}</p>
                  <Link
                    href={`/projects/${project.slug.current}`}
                    className="inline-flex items-center text-sm font-medium text-yellow-600 hover:text-yellow-500"
                  >
                    View Project Details
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-100 py-16">
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
                <p className="text-lg text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white">Ready to Start Your Project?</h2>
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
