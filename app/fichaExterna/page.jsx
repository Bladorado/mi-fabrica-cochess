import Image from 'next/image';

export default function FichaExterna() {
  // URL permitida previamente en next.config.mjs
  const urlExterna = "https://images.unsplash.com/photo-1518709268805-4e9042af9f23";

  return (
    <div className="space-y-4">
      <h3 className="font-bold text-lg text-slate-800">Carga desde Servidor Externo</h3>
      
      {/* OJO: Para usar 'fill', el contenedor padre DEBE tener 'relative'.
          Le damos una altura fija (h-64) para obligar a la imagen a adaptarse.
      */}
      <div className="relative w-full h-64 border-2 border-dashed border-blue-300 rounded-2xl overflow-hidden">
        <Image 
          src={urlExterna}
          alt="Vista de la planta industrial externa"
          fill                    // La imagen se estira hasta llenar el div padre
          sizes="(max-width: 768px) 100vw, 50vw" // Ayuda al navegador a elegir el tamaño óptimo
          className="object-cover" // ¡CRÍTICO! Hace que la imagen se recorte en lugar de deformarse
          priority={false}        // Esta imagen no es urgente (Lazy Loading por defecto)
        />
      </div>

      <ul className="text-xs text-gray-600 list-disc pl-5">
        <li><strong>fill:</strong> Elimina la necesidad de poner width/height manual.</li>
        <li><strong>object-cover:</strong> Evita que la furgoneta se vea aplastada.</li>
        <li><strong>sizes:</strong> Optimiza la descarga según el tamaño de la pantalla.</li>
      </ul>
    </div>
  );
}