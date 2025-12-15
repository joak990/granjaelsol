import { Star } from 'lucide-react';

function RenderStars({ calificacion = 5 }) {
    return (
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    size={16}
                    className={i < calificacion ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                />
            ))}
        </div>
    );
}

export default RenderStars;
