
import React from 'react';

function Footer() {
    return (
        // 1. Cambiamos el fondo de bg-gray-800 a bg-secondary (Marrón Cobre).
        // 2. Cambiamos el texto a text-light (Blanco) para asegurar contraste.
        // 3. Añadimos font-body para consistencia y un poco más de padding (py-4) para que no se vea tan comprimido.
        <footer className="bg-secondary text-text-light text-center py-4 font-body">
            <p className="text-sm">Diseño web &copy; Pauin Tech</p>
            {/* Opcional: Podríamos agregar aquí un pequeño mensaje de "Granja el Sol - Calidad Familiar" */}
        </footer>
    )
}

export default Footer