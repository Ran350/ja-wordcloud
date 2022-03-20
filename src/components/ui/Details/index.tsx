import type { ReactNode, VFC } from 'react'

type Props = {
  summary: string

  ariaLabel: string
  children: ReactNode
}
export const Details: VFC<Props> = ({ ariaLabel, summary, children }) => {
  return (
    <details aria-label={ariaLabel} className="relative">
      <summary
        className="rounded px-4 py-2 bg-white border border-gray-200 
                          text-sm select-none"
      >
        {summary}
      </summary>

      {children}
    </details>
  )
}
