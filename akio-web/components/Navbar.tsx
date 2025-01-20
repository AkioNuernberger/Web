'use client'

import { useState, createContext, useContext } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { cn } from "@/lib/utils"

// Create a context for the navbar state
export const NavbarContext = createContext<{
  isExpanded: boolean;
  setIsExpanded: (value: boolean) => void;
}>({
  isExpanded: false,
  setIsExpanded: () => {},
});

// Add a hook to use the navbar context
export const useNavbar = () => useContext(NavbarContext);

interface NavItem {
  title: string
  href?: string
  children?: NavItem[]
  className?: string
}

const navigation: NavItem[] = [
  {
    title: "Akio Nuernberger",
    href: '/',
    className: "font-bold text-xl pt-3 mb-4 block"
  },
  {
    title: 'Pages',
    children: [
      { title: 'User Manual - Akio', href: '/pages/user-manual-akio' },
      { title: "Thoughts on topics", href: '/pages/articles' }
    ]
  },
  {
    title: 'Business',
    children: [
      { title: 'Contact', href: '/business/contact' }
    ]
  }
]

const NavItemComponent = ({ 
  item, 
  onClick 
}: { 
  item: NavItem, 
  onClick?: () => void 
}) => {
  const [isLocalExpanded, setIsLocalExpanded] = useState(false)
  const { setIsExpanded } = useNavbar()

  if (item.children) {
    return (
      <div className="w-full">
        <button
          onClick={() => {
            const newExpandedState = !isLocalExpanded;
            setIsLocalExpanded(newExpandedState)
            setIsExpanded(newExpandedState)
          }}
          className="flex items-center w-full py-2 text-gray-700 hover:text-gray-900 transition-colors"
        >
          <ChevronDown
            className={cn(
              "h-4 w-4 mr-2 transition-transform",
              isLocalExpanded ? "rotate-0" : "-rotate-90"
            )}
          />
          <span>{item.title}</span>
        </button>
        {isLocalExpanded && (
          <div className="ml-4 space-y-1">
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href || '#'}
                className="block py-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => {
                  setIsExpanded(false)
                  setIsLocalExpanded(false)
                  onClick?.()
                }}
              >
                {child.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <Link
      href={item.href || '#'}
      className={cn(
        "block py-2 text-gray-700 hover:text-gray-900 transition-colors",
        item.className
      )}
      onClick={() => {
        setIsExpanded(false)
        onClick?.()
      }}
    >
      {item.title}
    </Link>
  )
}

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <NavbarContext.Provider value={{ isExpanded, setIsExpanded }}>
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 right-4 z-20 sm:hidden bg-white p-2 rounded-lg shadow-lg"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      <nav className={cn(
        "fixed left-0 top-0 z-10 h-screen bg-gray-100 border-r border-gray-200 overflow-y-auto transition-all duration-300",
        "w-full sm:w-48",
        isExpanded ? "sm:w-64" : "sm:w-48",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
      )}>
        <div className="w-full p-4 space-y-4">
          {navigation.map((item) => (
            <NavItemComponent 
              key={item.title} 
              item={item} 
              onClick={() => {
                setIsMobileMenuOpen(false)
                setIsExpanded(false)
              }}
            />
          ))}
        </div>
      </nav>
    </NavbarContext.Provider>
  )
}

export default Navbar

