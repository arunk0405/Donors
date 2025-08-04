import { Header } from "@/components/header"
import { ArrowLeft, Calendar, MapPin, Heart } from "lucide-react"
import Link from "next/link"

const donationHistory = [
  {
    id: 1,
    date: "12/1/2024",
    location: "Children's Hospital - Room 204",
    volume: "450ml",
    patientName: "Alex M.",
    status: "Completed",
  },
  {
    id: 2,
    date: "10/15/2024",
    location: "City Medical Center",
    volume: "450ml",
    patientName: "Emma K.",
    status: "Completed",
  },
  {
    id: 3,
    date: "8/22/2024",
    location: "St. Mary's Hospital",
    volume: "450ml",
    patientName: "David L.",
    status: "Completed",
  },
  {
    id: 4,
    date: "6/10/2024",
    location: "Regional Blood Bank",
    volume: "450ml",
    patientName: "Sarah P.",
    status: "Completed",
  },
  {
    id: 5,
    date: "4/5/2024",
    location: "Downtown Clinic",
    volume: "450ml",
    patientName: "Michael R.",
    status: "Completed",
  },
]

export default function HistoryPage() {
  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20">
        <div className="mb-8">
          <Link href="/" className="flex items-center text-red-600 hover:text-red-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Donation History</h1>
          <p className="text-gray-600 mt-2">Track all your life-saving contributions</p>
        </div>

        <div className="space-y-4">
          {donationHistory.map((donation) => (
            <div
              key={donation.id}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-red-500 fill-current" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-4 mb-2">
                      <h3 className="font-semibold text-gray-900">Patient: {donation.patientName}</h3>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                        {donation.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{donation.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{donation.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Heart className="w-4 h-4" />
                        <span>{donation.volume}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
