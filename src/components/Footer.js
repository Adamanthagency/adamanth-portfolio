import { EMAIL, FACEBOOK } from '@/lib/constants'

export default function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer className="w-full border-t border-gray-800 mt-12">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="text-sm text-gray-400">Built with care • © {year} Adamanth</div>
          <div className="text-sm text-gray-400">Motto: Ideas into Code, Code into Impact</div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          <a className="text-sm text-gray-300 hover:text-white" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a className="text-sm text-gray-300 hover:text-white" href={FACEBOOK} target="_blank" rel="noreferrer">Facebook</a>
        </div>
      </div>
    </footer>
  )
}
