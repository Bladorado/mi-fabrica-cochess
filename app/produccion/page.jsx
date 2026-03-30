// app/produccion/page.js
import Link from "next/link";

export default function ProduccionPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Línea de Producción</h1>
      <p className="text-gray-600 mb-8">Gestión de ensamblado de chasis y motores en tiempo real.</p>

      {/* Aquí es donde los alumnos reutilizarían sus componentes Estacion.js */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center py-20 mb-4">
        <p className="text-gray-400 italic text-lg">
          [Aquí irá el panel de piezas que creamos en la lección anterior]
        </p>
      </div>
      <Link href="/">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
          Ir al Inicio
        </button>
      </Link>
    </div>
  );
}