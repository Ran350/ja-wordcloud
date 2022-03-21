type Props = {
  summary: string
  ariaLabel: string
  children: React.ReactNode
}
export const Details: React.VFC<Props> = ({ ariaLabel, summary, children }) => {
  return (
    <details aria-label={ariaLabel} className="relative">
      <summary
        className="rounded px-4 py-2 bg-white border border-gray-200 text-sm 
                  select-none w-full"
      >
        {summary}
      </summary>

      <div className="w-full absolute block z-10 -top-6">{children}</div>
    </details>
  )
}
