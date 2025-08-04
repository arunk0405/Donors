"use client"

import { Heart, User, History } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header className="bg-white shadow-sm border-b border-red-100 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-white fill-current" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Need for Care</h1>
              <p className="text-xs text-gray-500">Donor Dashboard</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`flex items-center space-x-2 font-medium transition-colors relative pb-1 ${
                isActive("/") 
                  ? "text-red-600" 
                  : "text-gray-600 hover:text-red-600"
              }`}
            >
              <Heart className="w-4 h-4" />
              <span>Dashboard</span>
              {isActive("/") && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 rounded-full"></div>
              )}
            </Link>
            <Link
              href="/profile"
              className={`flex items-center space-x-2 font-medium transition-colors relative pb-1 ${
                isActive("/profile") 
                  ? "text-red-600" 
                  : "text-gray-600 hover:text-red-600"
              }`}
            >
              <User className="w-4 h-4" />
              <span>Profile</span>
              {isActive("/profile") && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 rounded-full"></div>
              )}
            </Link>
            <Link
              href="/history"
              className={`flex items-center space-x-2 font-medium transition-colors relative pb-1 ${
                isActive("/history") 
                  ? "text-red-600" 
                  : "text-gray-600 hover:text-red-600"
              }`}
            >
              <History className="w-4 h-4" />
              <span>History</span>
              {isActive("/history") && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 rounded-full"></div>
              )}
            </Link>
          </nav>

          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-gray-900">Sarah Johnson</p>
              <p className="text-xs text-gray-500">O+</p>
            </div>
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
              SJ
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-around py-2 border-t border-red-100">
          <Link 
            href="/" 
            className={`flex flex-col items-center transition-colors relative px-4 py-1 rounded-lg ${
              isActive("/") 
                ? "text-red-600 bg-red-50" 
                : "text-gray-600 hover:text-red-600"
            }`}
          >
            <Heart className="w-5 h-5" />
            <span className="text-xs mt-1">Dashboard</span>
          </Link>
          <Link 
            href="/profile" 
            className={`flex flex-col items-center transition-colors relative px-4 py-1 rounded-lg ${
              isActive("/profile") 
                ? "text-red-600 bg-red-50" 
                : "text-gray-600 hover:text-red-600"
            }`}
          >
            <User className="w-5 h-5" />
            <span className="text-xs mt-1">Profile</span>
          </Link>
          <Link 
            href="/history" 
            className={`flex flex-col items-center transition-colors relative px-4 py-1 rounded-lg ${
              isActive("/history") 
                ? "text-red-600 bg-red-50" 
                : "text-gray-600 hover:text-red-600"
            }`}
          >
            <History className="w-5 h-5" />
            <span className="text-xs mt-1">History</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
