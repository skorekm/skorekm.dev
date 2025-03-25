export const Tag = ({ tag }: { tag: string }) => {
  return (
    <span
      key={tag}
      className="inline-flex items-center px-3 py-1 rounded-full 
        bg-accent/10 text-accent-foreground text-sm
        transition-all duration-200
        "
    >
      {tag}
    </span>
  )
}