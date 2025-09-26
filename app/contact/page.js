import { EMAIL, FACEBOOK } from '@/lib/constants'

export default function Contact(){
  return (
    <section>
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-4 text-gray-400">I'd love to hear from you. Reach out via email or find me on Facebook.</p>
      <div className="mt-6 space-y-3">
        <a className="block text-gray-200" href={`mailto:${EMAIL}`}>Email: {EMAIL}</a>
        <a className="block text-gray-200" href={FACEBOOK} target="_blank" rel="noreferrer">Facebook</a>
      </div>
    </section>
  )
}
