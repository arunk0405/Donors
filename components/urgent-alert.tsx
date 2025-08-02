import { AlertTriangle, Clock, MapPin, Heart, Phone, ArrowRight } from "lucide-react"
import Link from "next/link"

interface UrgentAlertProps {
  isUrgent?: boolean
}

export function UrgentAlert({ isUrgent = true }: UrgentAlertProps) {
  if (!isUrgent) return null

  return (
    <div className="mb-8">
      <div className="flex items-center space-x-2 mb-4">
        <AlertTriangle className="w-5 h-5 text-amber-600" />
        <h2 className="text-lg font-semibold text-gray-900">Urgent Requests for Your Blood Type</h2>
      </div>

      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-3">
              <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2 py-1 rounded-full">CRITICAL</span>
              <span className="text-red-600 font-medium text-sm">O+</span>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">Patient: Maria Santos, Age 16</h3>

            <p className="text-gray-700 mb-4">
              16-year-old thalassemia patient requiring urgent transfusion before scheduled surgery.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-amber-600" />
                <span className="text-gray-600">Needed by: 1/8/2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span className="text-gray-600">Children's Hospital - Room 204</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-amber-600" />
                <span className="text-gray-600">2 units (900ml)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-amber-600" />
                <span className="text-gray-600">Dr. Amanda Wilson</span>
              </div>
            </div>
          </div>

          <Link
            href="/donation-request"
            className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg flex items-center space-x-2 transition-colors duration-200 ml-4"
          >
            <span>Respond</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
