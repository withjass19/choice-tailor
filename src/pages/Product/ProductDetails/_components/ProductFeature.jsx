import {
  Shield,
  Award,
  Ruler,
  Scissors,
} from "lucide-react";

const features = [
  {
    icon: <Shield />,
    title: "IAF Standard",
    desc: "Official specifications",
  },
  {
    icon: <Award />,
    title: "Premium Quality",
    desc: "Expert stitching",
  },
  {
    icon: <Ruler />,
    title: "Custom Fit",
    desc: "Tailored perfectly",
  },
  {
    icon: <Scissors />,
    title: "Made to Order",
    desc: "After confirmation",
  },
];

export default function ProductFeatures() {
  return (
    <div className="mt-12 border rounded-xl p-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-4"
          >
            <div className="text-[#b89b3c]">
              {item.icon}
            </div>

            <div>
              <h3 className="font-bold">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}