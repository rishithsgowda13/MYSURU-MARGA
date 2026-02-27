import { Heart, MapPin, Star } from 'lucide-react';
import './PlaceCard.css';

function PlaceCard({ image, category, title, description, location, rating }) {
    // Simple mapping for category badge colors
    const getCategoryTheme = (cat) => {
        switch (cat) {
            case 'Local Artisans': return 'tag-artisan';
            case 'Hyperlocal Food': return 'tag-food';
            case 'Hidden Gems': return 'tag-nature';
            case 'Heritage': return 'tag-heritage';
            default: return 'tag-heritage';
        }
    };

    return (
        <div className="place-card group">
            <div className="card-image-wrapper">
                <img src={image} alt={title} className="card-image" loading="lazy" />

                {/* Category Badge overlay */}
                <div className={`card-badge ${getCategoryTheme(category)}`}>
                    {category}
                </div>

                {/* Favorite Icon overlay */}
                <button className="favorite-btn" aria-label="Save to favorites">
                    <Heart size={18} className="heart-icon" />
                </button>
            </div>

            <div className="card-content">
                <h3 className="card-title text-lg font-semibold">{title}</h3>
                <p className="card-desc text-secondary text-sm mt-2">{description}</p>

                <div className="card-footer flex justify-between items-center mt-4 text-xs">
                    <div className="flex items-center gap-2 text-secondary font-medium">
                        <MapPin size={14} />
                        <span>{location}</span>
                    </div>

                    <div className="flex items-center gap-2 font-bold" style={{ color: '#fbbf24' }}>
                        <Star size={14} fill="currentColor" stroke="none" />
                        <span className="text-secondary">{rating}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlaceCard;
