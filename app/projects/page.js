import ProjectCard from '@/components/ProjectCard'

const projects = [
  {
    title: 'Restaurant Website',
    description: 'A responsive restaurant website built with HTML, CSS, and JavaScript. Features an elegant menu layout, menu filtering, and smooth navigation.',
    image: '/restaurant.png',
    github: 'https://github.com/Hackernewer/restaurant-website',
    demo: 'https://hackernewer.github.io/restaurant-website'
  }
]

export default function Projects(){
  return (
    <section>
      <h1 className="text-3xl font-semibold">Projects</h1>
      <p className="mt-4 text-gray-400">A selection of work — one example is shown below.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  )
}
{projects.map((p) => (
  <ProjectCard key={p.title} {...p} />
))}
