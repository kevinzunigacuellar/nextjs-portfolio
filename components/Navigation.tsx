import Link from "next/link";
import { motion, useCycle, Variants } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Guestbook", href: "/guestbook" },
  { name: "Bookshelf", href: "/bookshelf" },
  { name: "Blog", href: "/blog" },
];

const ulVariants: Variants = {
  open: {
    display: "block",
    className: "bg-red-500",
    transition: { staggerChildren: 0.1 },
  },
  closed: {
    display: "none",
    transition: {
      when: "beforeChildren",
    },
  },
};

const liVariants: Variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: -25 },
};

const Path = (props: any) => (
  <motion.path
    strokeLinecap="round"
    strokeLinejoin="round"
    stroke="hsl(0, 0%, 18%)"
    {...props}
  />
);

const Navigation = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav
      className="bg-gray-200 p-3"
      animate={isOpen ? "open" : "closed"}
    >
      <div className="flex justify-between items-center">
        <button onClick={() => toggleOpen()} className="block p-0.5 sm:hidden">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className="stroke-2 mt-1 ml-0.5"
          >
            <Path
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
            />
            <Path
              d="M 2 9.423 L 20 9.423"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <Path
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
            />
          </svg>
        </button>
        <nav>
          <ul className="hidden sm:flex">
            {navItems.map((navItem) => (
              <li key={navItem.name}>
                <Link href={navItem.href}>
                  <a
                    className="block py-1 px-3 bg-gray-200 rounded-lg hover:bg-gray-300"
                    onClick={() => toggleOpen()}
                  >
                    {navItem.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <motion.ul
        className="pt-3 pb-1 space-y-1 font-medium"
        variants={ulVariants}
      >
        {navItems.map((navItem) => (
          <motion.li key={navItem.name} variants={liVariants}>
            <Link href={navItem.href}>
              <a
                className="block py-1 px-3 bg-gray-200 rounded-lg hover:bg-gray-300"
                onClick={() => toggleOpen()}
              >
                {navItem.name}
              </a>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};

export default Navigation;
