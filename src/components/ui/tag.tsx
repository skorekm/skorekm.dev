export const Tag = ({ tag }: { tag: string }) => {
  return (
    <span
      key={tag}
      className="inline-flex items-center px-3 py-1 text-xs rounded-full 
        bg-accent/10 text-accent-foreground 
        transition-all duration-200 cursor-pointer
        "
    >
      #{tag}
    </span>
  )
}