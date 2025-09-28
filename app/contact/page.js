export default function Contact() {
  return (
    <section>
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-4 text-gray-400">
        I’d love to hear from you. Whether it’s a project, a question, or just to say hi — feel free to reach out.
      </p>
      <div className="mt-6 space-y-3">
        <a
          className="block text-gray-200 hover:text-indigo-400 transition"
          href="mailto:adamanthagency@gmail.com"
        >
          📧 Email: adamanthagency@gmail.com
        </a>
        <a
          className="block text-gray-200 hover:text-indigo-400 transition"
          href="https://www.facebook.com/Adamanthagency"
          target="_blank"
          rel="noreferrer"
        >
          🌐 Facebook: facebook.com/Adamanthagency
        </a>
      </div>
    </section>
  )
}
