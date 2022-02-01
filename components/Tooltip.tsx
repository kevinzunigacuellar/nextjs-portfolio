interface TooltipProps {
  text: string;
}

const Tooltip = ({ text }: TooltipProps) => {
  return (
    <span className="absolute w-auto px-2 py-1 min-w-max bottom-20 border-gray-300 translate-y-10 group-hover:translate-y-2 group-hover:sm:translate-y-1 rounded-lg bg-white text-gray-500 dark:text-gray-400 border text-xs font-medium scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 dark:bg-gray-800 dark:border-gray-600">
      {text}
    </span>
  );
};

export default Tooltip;
