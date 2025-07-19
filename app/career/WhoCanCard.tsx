// WhoCanCard.js
export default function WhoCanCard({ icon, title, text }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center space-y-4">
      <img src={icon} alt="" className="h-48 w-48 mx-auto object-contain" />
      <h3 className="font-semibold">{title}</h3>
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  )
}
