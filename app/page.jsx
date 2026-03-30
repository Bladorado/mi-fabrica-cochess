import Image from "next/image";
import vitoImg from "@/public/render-vito.png"

export default function Home() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-4xl font-extrabold text-slate-800">Panel General: Planta Vitoria</h1>
        <p className="text-slate-500">Bienvenido al sistema de gestión centralizada de AutoFabrik.</p>
      </header>

      {/* Tarjetas de Resumen Rápido */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
          <h3 className="text-sm font-medium text-gray-500 uppercase">Producción Hoy</h3>
          <p className="text-3xl font-bold text-slate-800">142 Vehículos</p>
          <span className="text-green-500 text-sm">↑ 12% vs ayer</span>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-500">
          <h3 className="text-sm font-medium text-gray-500 uppercase">Alertas Activas</h3>
          <p className="text-3xl font-bold text-slate-800">3 Avisos</p>
          <span className="text-orange-500 text-sm">Revisión en Sección Pintura</span>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
          <h3 className="text-sm font-medium text-gray-500 uppercase">Eficiencia Energética</h3>
          <p className="text-3xl font-bold text-slate-800">94.2%</p>
          <span className="text-slate-400 text-sm">Optimización activa</span>
        </div>
      </div>

      {/* Sección de Acceso Rápido con Imagen */}
      <div className="bg-rose-50 rounded-2xl p-8 text-black flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">¿Listo para comenzar el turno?</h2>
          <p className="text-slate-600 mb-6">Accede a la línea de producción para monitorizar el ensamblaje en tiempo real o revisa el stock de piezas en el almacén.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
            Abrir Panel de Producción
          </button>
        </div>
        <Image
          src={vitoImg}
          alt="Mercedes Vito Eléctrica"
          className="rounded-lg shadow-2xl w-sm"
          placeholder="blur" // Muestra una versión borrosa mientras carga
        />
      </div>
    </div>
  );
}
