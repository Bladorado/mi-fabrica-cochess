import Image from 'next/image';
// Importamos el archivo directamente para que Next.js extraiga sus medidas
import vitoLocal from '@/public/images/vito-silver.jpg';

export default function FichaLocal() {
  return (
    <div className="max-w-md border rounded-xl overflow-hidden shadow-lg bg-white">
      {/* IMPORTANTE: Al ser local, NO necesitamos width ni height si usamos la importación directa. 
          Next.js los calcula solo para evitar el Cumulative Layout Shift (saltos de página).
      */}
      <Image 
        src={vitoLocal}           // El objeto de la imagen importada
        alt="Mercedes Vito Plata" 
        priority                  // La marcamos como prioritaria (se carga de inmediato)
        placeholder="blur"        // Genera automáticamente un efecto borroso mientras carga
        quality={100}             // Subimos la calidad al máximo para ver detalles
        className="hover:scale-105 transition-transform duration-500" // Efecto visual con Tailwind
      />
      <div className="p-4">
        <h3 className="font-bold">Unidad de Stock Local</h3>
        <p className="text-sm text-gray-500">Imagen optimizada desde el servidor propio.</p>
      </div>
    </div>
  );
}