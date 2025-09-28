export default function Resume() {
  return (
    <section>
      <h1 className="text-3xl font-semibold">Resume</h1>
      <p className="mt-4 text-gray-400">
        Download my resume to see a full overview of my skills and projects.
      </p>
      <div className="mt-6">
        <a
          href="/Adamanth_Resume_Final.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  )
}
