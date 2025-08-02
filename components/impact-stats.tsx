import { Heart, Users, Calendar } from "lucide-react"

export function ImpactStats() {
  const stats = [
    {
      icon: Heart,
      label: "Total Donations",
      value: "8",
      color: "text-red-500",
    },
    {
      icon: Users,
      label: "Patients Helped",
      value: "12",
      color: "text-blue-500",
    },
    {
      icon: Calendar,
      label: "Member Since",
      value: "2023",
      color: "text-green-500",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
            <stat.icon className={`w-8 h-8 ${stat.color}`} />
          </div>
        </div>
      ))}
    </div>
  )
}
