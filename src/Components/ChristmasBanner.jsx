import '../styles/ChristmasSnow.css';

function ChristmasBanner() {
    return (
        <div className="relative z-20 bg-gradient-to-r from-primary via-secondary to-primary py-3 px-4 text-center text-text-light font-heading font-bold text-sm md:text-base shadow-lg">
            <div className="flex items-center justify-center gap-3">
                <span className="text-xl christmas-pulse">🎄</span>
                <span>¡Felices Fiestas! Disfruta de nuestros mejores productos esta temporada</span>
                <span className="text-xl christmas-pulse">🎄</span>
            </div>
        </div>
    );
}

export default ChristmasBanner;
