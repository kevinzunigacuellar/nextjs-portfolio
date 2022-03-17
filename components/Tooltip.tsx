function Tooltip({ text }: { text: string }) {
  return (
    <span
      className="absolute bottom-20 w-auto min-w-max translate-y-10 scale-0 rounded-lg border border-gray-300
     bg-white px-2 py-1 text-xs font-medium text-gray-500 opacity-0 shadow transition-all duration-200
     group-hover:translate-y-2 group-hover:scale-100 group-hover:opacity-100 dark:border-gray-600 dark:bg-gray-800
     dark:text-gray-400 dark:shadow-black/60 group-hover:sm:translate-y-1"
    >
      {text}
    </span>
  )
}

export default Tooltip
