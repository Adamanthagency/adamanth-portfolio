export default function Projects(){
  return (
    <section>
      <h1 className="text-3xl font-semibold">Projects</h1>
      <p className="mt-4 text-gray-400">A selection of work — coming soon.</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1,2,3,4].map(i => (
          <div key={i} className="p-6 rounded-xl bg-gray-800 border border-gray-700">
            <div className="h-36 bg-gray-900 rounded-md flex items-center justify-center text-gray-500">Coming soon</div>
            <div className="mt-4">
              <h3 className="font-medium">Project {i}</h3>
              <p className="text-sm text-gray-400">Details arriving soon.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
