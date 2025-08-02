import { Header } from "@/components/header"
import { ArrowLeft, Clock, MapPin, Heart, Phone, Calendar, User, AlertTriangle } from "lucide-react"
import Link from "next/link"

const timeSlots = [
  { time: "9:00 AM", available: true },
  { time: "11:00 AM", available: true },
  { time: "2:00 PM", available: false },
  { time: "4:00 PM", available: true },
]

export default function DonationRequestPage() {
  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link href="/" className="flex items-center text-red-600 hover:text-red-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
          <div className="flex items-center space-x-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-amber-600" />
            <h1 className="text-3xl font-bold text-gray-900">Urgent Donation Request</h1>
          </div>
          <div className="flex items-center space-x-2">
            <span className="bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1 rounded-full">CRITICAL</span>
            <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">O+ Blood Type</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Patient Information */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Patient Information</h2>
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Maria Santos</h3>
                  <p className="text-gray-600">Age: 16 years</p>
                  <p className="text-gray-700 mt-2">
                    16-year-old thalassemia patient requiring urgent transfusion before scheduled surgery. Maria has
                    been battling thalassemia since childhood and needs regular transfusions to maintain her health.
                  </p>
                </div>
              </div>
            </div>

            {/* Donation Details */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Donation Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-red-500" />
                  <div>
                    <p className="font-medium text-gray-900">Required By</p>
                    <p className="text-gray-600">January 8, 2025</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-red-500" />
                  <div>
                    <p className="font-medium text-gray-900">Blood Quantity</p>
                    <p className="text-gray-600">2 units (900ml)</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">Children's Hospital - Room 204</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-red-500" />
                  <div>
                    <p className="font-medium text-gray-900">Contact Doctor</p>
                    <p className="text-gray-600">Dr. Amanda Wilson</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Available Time Slots */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Available Time Slots</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {timeSlots.map((slot, index) => (
                  <button
                    key={index}
                    className={`p-3 rounded-lg border-2 text-center transition-colors ${
                      slot.available
                        ? "border-red-200 bg-red-50 hover:bg-red-100 text-red-700"
                        : "border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed"
                    }`}
                    disabled={!slot.available}
                  >
                    <Calendar className="w-4 h-4 mx-auto mb-1" />
                    <p className="text-sm font-medium">{slot.time}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-b from-red-50 to-pink-50 rounded-xl p-6 border border-red-100 sticky top-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Confirm Your Donation</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-medium">Jan 8, 2025</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-medium">9:00 AM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Location:</span>
                  <span className="font-medium">Children's Hospital</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Blood Type:</span>
                  <span className="font-medium">O+</span>
                </div>
              </div>

              <button className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 mb-3">
                Confirm Donation
              </button>

              <p className="text-xs text-gray-500 text-center">
                By confirming, you agree to donate blood at the specified time and location.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
