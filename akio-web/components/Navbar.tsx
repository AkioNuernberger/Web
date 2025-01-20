'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { cn } from "@/lib/utils"

interface NavItem {
  title: string
  href?: string
  children?: NavItem[]
  className?: string
}

const navigation: NavItem[] = [
  {
    title: "Akio Ishihara",
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
  const [isExpanded, setIsExpanded] = useState(false)

  if (item.children) {
    return (
      <div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center w-full py-2 text-gray-700 hover:text-gray-900 transition-colors"
        >
          <ChevronDown
            className={cn(
              "h-4 w-4 mr-2 transition-transform",
              isExpanded ? "rotate-0" : "-rotate-90"
            )}
          />
          <span>{item.title}</span>
        </button>
        {isExpanded && (
          <div className="ml-4 space-y-1">
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href || '#'}
                className="block py-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                onClick={onClick}
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
      onClick={onClick}
    >
      {item.title}
    </Link>
  )
}

const Navbar = () => {
  return (
    <nav className="w-full sm:w-48 h-auto sm:h-screen bg-gray-100 border-b sm:border-r border-gray-200 flex sm:flex-col justify-start fixed left-0 top-0 z-10 overflow-y-auto">
      <div className="w-full p-4 space-y-4">
        {navigation.map((item) => (
          <NavItemComponent key={item.title} item={item} />
        ))}
      </div>
    </nav>
  )
}

export default Navbar

