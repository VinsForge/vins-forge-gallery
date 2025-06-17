
import { Link } from "react-router-dom";
import { Sword } from "@/data/swords";

interface SwordCardProps {
  sword: Sword;
}

const SwordCard = ({ sword }: SwordCardProps) => {
  return (
    <Link to={`/sword/${sword.id}`} className="group">
      <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-slate-700 hover:border-amber-600/50">
        <div className="aspect-w-16 aspect-h-12 overflow-hidden">
          <img
            src={sword.image}
            alt={sword.name}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
            {sword.name}
          </h3>
          <p className="text-amber-400 text-sm font-medium mb-3">
            {sword.type}
          </p>
          <p className="text-gray-300 text-sm line-clamp-3">
            {sword.description}
          </p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-amber-400 font-medium">
              {sword.specifications.length}
            </span>
            <span className="text-xs text-gray-400 bg-slate-700 px-2 py-1 rounded">
              {sword.forgeTime}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SwordCard;
