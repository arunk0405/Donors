export function WelcomeSection() {
  return (
    <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 mb-8 border border-red-100">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
            SJ
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              Welcome back, Sarah!
              <span className="ml-2">👋</span>
            </h2>
            <p className="text-gray-600 mt-1">Thank you for being a hero. Your O+ blood type is precious.</p>
          </div>
        </div>

        <div className="text-right hidden sm:block">
          <p className="text-sm text-gray-500">Last donation</p>
          <p className="text-lg font-semibold text-gray-900">12/1/2024</p>
        </div>
      </div>
    </div>
  )
}
