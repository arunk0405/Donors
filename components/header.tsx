import { Heart, User, History } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-red-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-white fill-current" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">BloodConnect</h1>
              <p className="text-xs text-gray-500">Donor Dashboard</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2 text-red-600 font-medium">
              <Heart className="w-4 h-4" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/profile"
              className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
            >
              <User className="w-4 h-4" />
              <span>Profile</span>
            </Link>
            <Link
              href="/history"
              className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
            >
              <History className="w-4 h-4" />
              <span>History</span>
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
          <Link href="/" className="flex flex-col items-center text-red-600">
            <Heart className="w-5 h-5" />
            <span className="text-xs mt-1">Dashboard</span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center text-gray-600">
            <User className="w-5 h-5" />
            <span className="text-xs mt-1">Profile</span>
          </Link>
          <Link href="/history" className="flex flex-col items-center text-gray-600">
            <History className="w-5 h-5" />
            <span className="text-xs mt-1">History</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
