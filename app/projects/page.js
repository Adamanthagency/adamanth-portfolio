import ProjectCard from '@/components/ProjectCard'

const projects = [
  {
    title: 'Restaurant Website',
    description:
      'A responsive restaurant website built with HTML, CSS, and JavaScript. A clean single-page design with menu and navigation.',
    image: '/restaurant.png', // thumbnail screenshot saved in /public
    github: 'https://github.com/Adamanthagency/restaurant-website',
    demo: 'https://adamanthagency.github.io/restaurant-website/'
  },
  {
    title: 'Titan Turfworks',
    description:
      'A premium landscaping website with animations, testimonials, gallery, and live map integration. Built using pure HTML, CSS, and JS.',
    image: '/titan-thumb.jpg', // 👈 save screenshot in /public
    github: 'https://github.com/Adamanthagency/titan-turfworks',
    demo: 'https://adamanthagency.github.io/titan-turfworks/'
  }
]

export default function Projects() {
  return (
    <section>
      <h1 className="text-3xl font-semibold">Projects</h1>
      <p className="mt-4 text-gray-400">A selection of my work:</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  )
}
