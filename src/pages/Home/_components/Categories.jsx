import { IoAirplane } from "react-icons/io5";
import {
  BadgeModel,
  BeltModel,
  CapModel,
  machineModel,
  namePlate,
  RankModel,
  ShirtModel,
  ShoesModel,
} from "../../../assets/images";
import CategroyCard from "../../../components/CategoryCard/CategoryCard";

const CategoriesList = [
  {
    id: 1,
    categroy: "IAF Uniforms",
    image: ShirtModel,
    width: "95px",
  },
  {
    id: 2,
    categroy: "Custom Stitching",
    image: machineModel,
  },
  {
    id: 3,
    categroy: "Caps",
    image: CapModel,
  },
  {
    id: 4,
    categroy: "Belts",
    image: BeltModel,
  },
  {
    id: 5,
    categroy: "Badges",
    image: BadgeModel,
  },
  {
    id: 6,
    categroy: "Name Plates",
    image: namePlate,
  },
  {
    id: 7,
    categroy: "Rank Accessories",
    image: RankModel,
  },
  {
    id: 8,
    categroy: "Shoes",
    image: ShoesModel,
  },
];

export default function Categories() {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-12">
      
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Shop by Category
        </h2>

        <div className="mt-3 flex items-center justify-center gap-3">
          <span className="h-px w-12 md:w-20 bg-[#b89b3c]" />
          <IoAirplane className="text-[#8b762c] text-lg" />
          <span className="h-px w-12 md:w-20 bg-[#b89b3c]" />
        </div>
      </div>

      {/* Categories Grid */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-4">
        {CategoriesList.map((item) => (
          <div key={item.id}>
            <CategroyCard
              width={item.width}
              categroy={item.categroy}
              image={item.image}
            />
          </div>
        ))}
      </div>

    </section>
  );
}