import { useState } from 'react';
import { X, Search, List } from 'lucide-react';
import Chip from '../components/Chip';
import './MapPage.css';

const MOCK_CATEGORIES = ['All (12)', 'Hidden Gems (2)', 'Local Artisans (3)', 'Hyperlocal Food (4)'];

const LIST_PLACES = [
    {
        id: 1,
        title: 'Rosewood Inlay Worksh...',
        category: 'Local Artisans',
        rating: '4.4',
        location: 'Ashoka Road',
        image: 'https://images.unsplash.com/photo-1542898950-eafa65eac8ba?auto=format&fit=crop&q=80&w=200'
    },
    {
        id: 2,
        title: 'Traditional Mysore Pak ...',
        category: 'Hyperlocal Food',
        rating: '4.9',
        location: 'Sayyaji Rao Road',
        image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=200'
    },
    {
        id: 3,
        title: 'Chamundi Hill Sunrise P...',
        category: 'Hidden Gems',
        rating: '4.8',
        location: 'Chamundi Hills',
        image: 'https://images.unsplash.com/photo-1629235928739-1fb4d75471bd?auto=format&fit=crop&q=80&w=200'
    }
];

function MapPage() {
    const [showList, setShowList] = useState(true);

    return (
        <div className="map-page">
            {/* Map Background Mockup */}
            <div className="map-mockup">
                {/* Chips Overlay */}
                <div className="map-chips">
                    {MOCK_CATEGORIES.map((cat, i) => (
                        <Chip key={i} label={cat} isActive={i === 0} onClick={() => { }} />
                    ))}
                </div>

                {/* Mock Pins */}
                <div className="pin red" style={{ top: '35%', left: '40%' }}></div>
                <div className="pin green" style={{ top: '45%', left: '50%' }}></div>
                <div className="pin orange" style={{ top: '75%', left: '65%' }}></div>
                <div className="pin turquoise" style={{ top: '60%', left: '45%' }}></div>
            </div>

            {/* Floating Menu Button */}
            {!showList && (
                <button className="floating-menu" onClick={() => setShowList(true)}>
                    <List size={24} />
                </button>
            )}

            {/* Bottom Sheet List Mockup */}
            {showList && (
                <div className="bottom-sheet">
                    <div className="sheet-header flex justify-between items-center">
                        <h2 className="text-xl font-bold">12 Places on Map</h2>
                        <button onClick={() => setShowList(false)} className="close-sheet">
                            <X size={20} />
                        </button>
                    </div>

                    <div className="sheet-content">
                        {LIST_PLACES.map(place => (
                            <div key={place.id} className="list-item flex gap-4 items-center">
                                <img src={place.image} alt={place.title} className="item-thumb" />
                                <div className="item-info flex-1">
                                    <span className={`item-badge tag-${place.category.toLowerCase().replace(' ', '-')}`}>
                                        {place.category}
                                    </span>
                                    <h3 className="text-sm font-semibold mt-1">{place.title}</h3>
                                    <div className="flex items-center gap-1 text-xs text-secondary mt-1">
                                        <Search size={12} />
                                        <span>{place.location}</span>
                                    </div>
                                </div>
                                <div className="item-rating flex items-center gap-1 font-bold text-sm">
                                    <span style={{ color: '#fbbf24' }}>★</span>
                                    <span>{place.rating}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="sheet-handle" onClick={() => setShowList(false)}></div>
                </div>
            )}
        </div>
    );
}

export default MapPage;
