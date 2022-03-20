import { url } from 'src/utils/config'

export const Header: React.VFC = () => {
  const title = 'Japanese Word Cloud'

  const githubURL = 'https://github.com/ran350/web-wordcloud'
  const githubIcon = {
    path: url('/icons/GitHub.svg'),
    alt: 'GitHub',
  }

  return (
    <header className="px-16 py-2 border-b border-gray-200 w-full flex justify-between">
      <p className="text-2xl text-gray-600 font-noto_sans_jp">{title}</p>
      <a href={githubURL} className="text-red-400">
        <img src={githubIcon.path} alt={githubIcon.alt} className="w-6 h-full align-middle" />
      </a>
    </header>
  )
}
