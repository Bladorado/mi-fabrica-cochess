export default function LogisticaPage() {
  const inventario = [
    { id: 1, pieza: "Chasis Aluminio", stock: 45, estado: "OK" },
    { id: 2, pieza: "Motor Eléctrico v8", stock: 12, estado: "BAJO" },
    { id: 3, pieza: "Neumáticos Sport", stock: 156, estado: "OK" },
    { id: 4, pieza: "Baterías Litio", stock: 8, estado: "CRÍTICO" },
  ];

  return (
    <div className="space-y-6">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Gestión de Almacén</h1>
          <p className="text-slate-500">Control de stock y pedidos a proveedores.</p>
        </div>
        <button className="bg-slate-800 text-white px-4 py-2 rounded-lg text-sm">
          + Registrar Entrada
        </button>
      </header>

      {/* Tabla de Inventario */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">Pieza</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">Cantidad</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">Estado</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">Acción</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {inventario.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium text-slate-700">{item.pieza}</td>
                <td className="px-6 py-4 text-slate-600">{item.stock} unidades</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                    item.estado === 'OK' ? 'bg-green-100 text-green-700' : 
                    item.estado === 'BAJO' ? 'bg-orange-100 text-orange-700' : 
                    'bg-red-100 text-red-700'
                  }`}>
                    {item.estado}
                  </span>
                </td>
                <td className="px-6 py-4 text-blue-600 hover:underline cursor-pointer text-sm">
                  Pedir más
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}