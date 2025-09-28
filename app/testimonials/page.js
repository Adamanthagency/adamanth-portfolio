export default function Testimonials() {
  const testimonials = [
    {
      name: "Olivia Martinez",
      text: "Adamanth built us a professional website that instantly gave our business more credibility. Communication was smooth and the results exceeded expectations."
    },
    {
      name: "James Walker",
      text: "Working with Adamanth was a game-changer. He understood exactly what I needed, delivered on time, and the site looks amazing."
    },
    {
      name: "Sophia Adeyemi",
      text: "Fast, reliable, and highly skilled. If you need someone who actually listens and delivers quality, Adamanth is the person."
    }
  ]

  return (
    <section>
      <h1 className="text-3xl font-semibold">Testimonials</h1>
      <p className="mt-4 text-gray-400">Here’s what clients have said about working with me:</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="p-6 rounded-xl bg-gray-800 border border-gray-700 shadow-lg hover:shadow-xl transition">
            <p className="text-gray-300 italic">"{t.text}"</p>
            <div className="mt-3 text-sm font-semibold text-gray-400">— {t.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
