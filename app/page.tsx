import { Header } from "@/components/header"
import { WelcomeSection } from "@/components/welcome-section"
import { UrgentAlert } from "@/components/urgent-alert"
import { ImpactStats } from "@/components/impact-stats"

export default function DashboardPage() {
  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <WelcomeSection />
        <UrgentAlert isUrgent={true} />
        <ImpactStats />
      </main>
    </div>
  )
}
