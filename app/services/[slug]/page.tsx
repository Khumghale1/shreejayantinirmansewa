import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { type SanityDocument } from "next-sanity"
import { client } from "../../sanity/client"
import { urlFor } from "../../sanity/image"
import { notFound } from "next/navigation"
import { PortableText } from "../../components/PortableText"

const SERVICE_QUERY = `*[
  _type == "service"
  && slug.current == $slug
][0]{_id, title, slug, description, body, features, image}`

const options = { next: { revalidate: 30 } }

export async function generateStaticParams() {
  const services = await client.fetch<SanityDocument[]>(
    `*[_type == "service" && defined(slug.current)]{slug}`,
    {},
    options
  )

  return services.map((service) => ({
    slug: service.slug.current,
  }))
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = await client.fetch<SanityDocument>(SERVICE_QUERY, { slug }, options)

  if (!service) {
    notFound()
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-16 md:py-24">
        <div className="absolute inset-0 z-0 opacity-30">
          {service.image ? (
            <Image
              src={urlFor(service.image).width(1920).height(1080).url()}
              alt={service.title}
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
              href="/services"
              className="mb-6 inline-flex items-center text-yellow-500 transition-colors hover:text-yellow-400"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">{service.title}</h1>
            <p className="text-xl text-gray-300">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Service Body Content */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[400px,1fr]">
            {/* Image - Left Side */}
            <div className="lg:sticky lg:top-8 lg:self-start">
              <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl lg:h-[500px]">
                {service.image ? (
                  <Image
                    src={urlFor(service.image).width(800).height(1000).url()}
                    alt={service.title}
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
              {service.body && (
                <div className="prose prose-lg max-w-none">
                  <PortableText value={service.body} />
                </div>
              )}

              {/* Features Section */}
              {service.features && service.features.length > 0 && (
                <div className="mt-12 rounded-lg bg-gray-50 p-8">
                  <h2 className="mb-6 text-3xl font-bold text-gray-900">Key Features</h2>
                  <ul className="grid gap-4 md:grid-cols-2">
                    {service.features.map((feature: string, i: number) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-3 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-yellow-500 text-sm text-white">
                          ✓
                        </span>
                        <span className="text-lg text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-yellow-500 px-8 py-4 text-lg font-medium text-black transition-colors hover:bg-yellow-400"
                >
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-md border-2 border-gray-300 px-8 py-4 text-lg font-medium text-gray-900 transition-colors hover:border-gray-400 hover:bg-gray-50"
                >
                  View Our Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">Why Choose Us</h2>
            <p className="mb-12 text-lg text-gray-700">
              At Shree Jayanti Nirman Sewa, we are committed to delivering exceptional results with every project.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 text-center shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Expert Team</h3>
              <p className="text-gray-700">Our skilled professionals bring years of experience to every project.</p>
            </div>

            <div className="rounded-lg bg-white p-6 text-center shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Quality Materials</h3>
              <p className="text-gray-700">We use only the highest quality materials for lasting results.</p>
            </div>

            <div className="rounded-lg bg-white p-6 text-center shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">On-Time Delivery</h3>
              <p className="text-gray-700">We complete projects on schedule without compromising quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white">Ready to Get Started?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
            Contact us today to discuss your project and receive a free consultation and quote.
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
