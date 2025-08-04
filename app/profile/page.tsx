import { Header } from "@/components/header"
import { ArrowLeft, Trophy, Medal, Award, Crown, Star } from "lucide-react"
import Link from "next/link"

const badges = [
  { id: 1, name: "5-Time Donor", icon: Medal, color: "bg-yellow-100 text-yellow-800", earned: true },
  { id: 2, name: "Life Saver", icon: Award, color: "bg-red-100 text-red-800", earned: true },
  { id: 3, name: "Hero Badge", icon: Star, color: "bg-blue-100 text-blue-800", earned: true },
  { id: 4, name: "10-Time Donor", icon: Trophy, color: "bg-purple-100 text-purple-800", earned: false },
  { id: 5, name: "Champion", icon: Crown, color: "bg-green-100 text-green-800", earned: false },
]

const leaderboard = [
  { rank: 1, name: "Michael Johnson", donations: 45, bloodType: "O+" },
  { rank: 2, name: "Emily Davis", donations: 38, bloodType: "A+" },
  { rank: 3, name: "David Wilson", donations: 32, bloodType: "B+" },
  { rank: 4, name: "Sarah Johnson", donations: 8, bloodType: "O+", current: true },
  { rank: 5, name: "Lisa Brown", donations: 7, bloodType: "AB+" },
]

export default function ProfilePage() {
  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20">
        <div className="mb-8">
          <Link href="/" className="flex items-center text-red-600 hover:text-red-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
          <p className="text-gray-600 mt-2">Your achievements and rankings</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Badges Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Your Badges</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {badges.map((badge) => (
                  <div
                    key={badge.id}
                    className={`p-4 rounded-lg border-2 ${badge.earned ? "border-solid" : "border-dashed border-gray-300 opacity-50"}`}
                  >
                    <div className="text-center">
                      <div
                        className={`w-12 h-12 ${badge.earned ? badge.color : "bg-gray-100 text-gray-400"} rounded-full flex items-center justify-center mx-auto mb-3`}
                      >
                        <badge.icon className="w-6 h-6" />
                      </div>
                      <h3 className={`font-medium ${badge.earned ? "text-gray-900" : "text-gray-400"}`}>
                        {badge.name}
                      </h3>
                      {!badge.earned && <p className="text-xs text-gray-400 mt-1">Not earned yet</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Leaderboard Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Top Donors</h2>
              <div className="space-y-3">
                {leaderboard.map((donor) => (
                  <div
                    key={donor.rank}
                    className={`flex items-center justify-between p-3 rounded-lg ${donor.current ? "bg-red-50 border border-red-200" : "bg-gray-50"}`}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-6 h-6 ${donor.rank <= 3 ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-600"} rounded-full flex items-center justify-center text-xs font-bold`}
                      >
                        {donor.rank}
                      </div>
                      <div>
                        <p className={`text-sm font-medium ${donor.current ? "text-red-700" : "text-gray-900"}`}>
                          {donor.name} {donor.current && "(You)"}
                        </p>
                        <p className="text-xs text-gray-500">{donor.bloodType}</p>
                      </div>
                    </div>
                    <span className={`text-sm font-bold ${donor.current ? "text-red-600" : "text-gray-600"}`}>
                      {donor.donations}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
