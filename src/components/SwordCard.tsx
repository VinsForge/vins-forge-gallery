
import { Link } from "react-router-dom";
import { Sword } from "@/data/swords";

interface SwordCardProps {
  sword: Sword;
}

const SwordCard = ({ sword }: SwordCardProps) => {
  return (
    <Link 
      to={`/sword/${sword.id}`}
      className="group bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10"
    >
      <div className="aspect-w-4 aspect-h-3 bg-slate-700">
        <img
          src={sword.images[0]} // Use first image from the array
          alt={sword.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
          {sword.name}
        </h3>
        <p className="text-amber-400 font-medium mb-3">{sword.type}</p>
        <p className="text-gray-300 text-sm line-clamp-3">{sword.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-amber-400 font-semibold">{sword.forgeTime}</span>
          <span className="text-gray-400 text-sm">View Details →</span>
        </div>
      </div>
    </Link>
  );
};

export default SwordCard;
