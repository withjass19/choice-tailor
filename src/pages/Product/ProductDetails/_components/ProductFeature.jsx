import { Shield, Award, Ruler, Scissors } from "lucide-react";

export default function ProductFeatures({ product }) {
  const features = [
    {
      icon: <Shield />,
      title: product?.category || "IAF Standard",
      desc: "Official specifications",
    },
    {
      icon: <Award />,
      title: "Premium Quality",
      desc: product?.fabric || "Expert stitching",
    },
    {
      icon: <Ruler />,
      title: product?.measurement_required ? "Custom Fit" : "Standard Fit",
      desc: product?.measurement_required ? "Tailored perfectly" : "Ready sizing",
    },
    {
      icon: <Scissors />,
      title: "Made to Order",
      desc: product?.allow_custom_notes ? "Custom notes allowed" : "After confirmation",
    },
  ];

  return (
    <div className="mt-12 rounded-xl border p-8">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((item) => (
          <div key={item.title} className="flex items-center gap-4">
            <div className="text-[#b89b3c]">{item.icon}</div>

            <div>
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}