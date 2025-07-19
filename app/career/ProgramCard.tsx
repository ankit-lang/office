// ProgramCard.js  (not used above but here if you want separate cards)
"use client"
export default function ProgramCard({ name, desc, icon }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex items-center space-x-4">
      {icon && <img src={icon} alt="" className="h-12 w-12 object-contain" />}
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-gray-600">{desc}</p>
      </div>
    </div>
  )
}
