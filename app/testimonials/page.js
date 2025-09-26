export default function Testimonials(){
  return (
    <section>
      <h1 className="text-3xl font-semibold">Testimonials</h1>
      <p className="mt-4 text-gray-400">What people say — placeholders below.</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1,2,3].map(i => (
          <div key={i} className="p-6 rounded-xl bg-gray-800 border border-gray-700">
            <p className="text-gray-300">"Adamanth did an excellent job — creative, thoughtful, and fast."</p>
            <div className="mt-3 text-sm text-gray-400">— Happy Client {i}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

