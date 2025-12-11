import { PortableText as PortableTextComponent, PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '../sanity/image'

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className="mb-4 mt-8 text-3xl font-bold text-gray-900">{children}</h2>,
    h3: ({ children }) => <h3 className="mb-3 mt-6 text-2xl font-bold text-gray-900">{children}</h3>,
    h4: ({ children }) => <h4 className="mb-2 mt-4 text-xl font-bold text-gray-900">{children}</h4>,
    normal: ({ children }) => <p className="mb-4 text-lg leading-relaxed text-gray-700">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-yellow-500 bg-gray-50 p-4 italic text-gray-700">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="mb-4 ml-6 list-disc space-y-2 text-gray-700">{children}</ul>,
    number: ({ children }) => <ol className="mb-4 ml-6 list-decimal space-y-2 text-gray-700">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="text-lg">{children}</li>,
    number: ({ children }) => <li className="text-lg">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-gray-900">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="rounded bg-gray-100 px-2 py-1 font-mono text-sm text-gray-800">{children}</code>
    ),
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-yellow-600 underline hover:text-yellow-700"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null
      return (
        <figure className="my-8">
          <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
            <Image
              src={urlFor(value).width(1200).height(800).url()}
              alt={value.alt || 'Image'}
              fill
              className="object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-gray-600">{value.caption}</figcaption>
          )}
        </figure>
      )
    },
  },
}

export function PortableText({ value }: { value: any }) {
  return <PortableTextComponent value={value} components={components} />
}
