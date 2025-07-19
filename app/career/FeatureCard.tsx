// FeatureCard.js
export default function FeatureCard({ title }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md transition p-4 text-sm font-medium">
      {title}
    </div>
  )
}
