import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowLeft, MapPin, Calendar, User } from "lucide-react"
import { type SanityDocument } from "next-sanity"
import { client } from "../../sanity/client"
import { urlFor } from "../../sanity/image"
import { notFound } from "next/navigation"
import { PortableText } from "../../components/PortableText"

const PROJECT_QUERY = `*[
  _type == "project"
  && slug.current == $slug
][0]{_id, title, slug, description, body, category, location, image, gallery, technologies, client, completedAt}`

const options = { next: { revalidate: 30 } }

export async function generateStaticParams() {
  const projects = await client.fetch<SanityDocument[]>(
    `*[_type == "project" && defined(slug.current)]{slug}`,
    {},
    options
  )

  return projects.map((project) => ({
    slug: project.slug.current,
  }))
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = await client.fetch<SanityDocument>(PROJECT_QUERY, { slug }, options)

  if (!project) {
    notFound()
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-16 md:py-24">
        <div className="absolute inset-0 z-0 opacity-30">
          {project.image ? (
            <Image
              src={urlFor(project.image).width(1920).height(1080).url()}
              alt={project.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="h-full w-full bg-gray-800" />
          )}
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/projects"
              className="mb-6 inline-flex items-center text-yellow-500 transition-colors hover:text-yellow-400"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
            <div className="mb-4 inline-block rounded-full bg-yellow-500 px-4 py-1 text-sm font-medium text-black">
              {project.category}
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">{project.title}</h1>
            <p className="text-xl text-gray-300">{project.description}</p>

            {/* Project Meta Info */}
            <div className="mt-8 flex flex-wrap gap-6 text-gray-300">
              {project.location && (
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  <span>{project.location}</span>
                </div>
              )}
              {project.completedAt && (
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  <span>{new Date(project.completedAt).toLocaleDateString()}</span>
                </div>
              )}
              {project.client && (
                <div className="flex items-center">
                  <User className="mr-2 h-5 w-5" />
                  <span>{project.client}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Body Content */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[400px,1fr]">
            {/* Image - Left Side */}
            <div className="lg:sticky lg:top-8 lg:self-start">
              <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl lg:h-[500px]">
                {project.image ? (
                  <Image
                    src={urlFor(project.image).width(800).height(1000).url()}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gray-200">
                    <p className="text-gray-500">No image available</p>
                  </div>
                )}
              </div>
            </div>

            {/* Body Content - Right Side */}
            <div>
              {/* Body Content */}
              {project.body && (
                <div className="prose prose-lg max-w-none">
                  <PortableText value={project.body} />
                </div>
              )}

              {/* Technologies */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="mt-12 rounded-lg bg-gray-50 p-8">
                  <h2 className="mb-6 text-3xl font-bold text-gray-900">Technologies & Materials</h2>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech: string, i: number) => (
                      <span
                        key={i}
                        className="rounded-full bg-yellow-500 px-4 py-2 text-sm font-medium text-black"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-yellow-500 px-8 py-4 text-lg font-medium text-black transition-colors hover:bg-yellow-400"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-md border-2 border-gray-300 px-8 py-4 text-lg font-medium text-gray-900 transition-colors hover:border-gray-400 hover:bg-gray-50"
                >
                  View More Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Project Gallery</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((image: any, i: number) => (
                <div key={i} className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={urlFor(image).width(800).height(600).url()}
                    alt={`${project.title} - Image ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white">Inspired by This Project?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
            Contact us today to discuss how we can bring your vision to life with the same level of quality and
            craftsmanship.
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
