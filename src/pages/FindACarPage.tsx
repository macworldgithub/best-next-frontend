import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Car, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BACKEND_URL } from "@/utils/config";

const carTypes = ["Sedan", "SUV", "Hatchback", "Ute", "Van", "Coupe"];
const paths = ["new", "preowned"];

const API_URL = `${BACKEND_URL}vehicles`;

const FindACarPage = () => {
  const navigate = useNavigate();
  const [vehicles, setVehicles] = useState([]);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [path, setPath] = useState("preowned");

  const [budgetMin, setBudgetMin] = useState("");
  const [budgetMax, setBudgetMax] = useState("");

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchVehicles = async () => {
    try {
      setLoading(true);

      const params = new URLSearchParams({
        path: path,
        page: page.toString(),
        page_size: "9",
      });

      if (selectedType) params.append("interest", selectedType);
      if (budgetMin) params.append("budget_min", budgetMin);
      if (budgetMax) params.append("budget_max", budgetMax);

      const res = await fetch(`${API_URL}?${params.toString()}`);
      const data = await res.json();

      setVehicles(data.vehicles || []);
      setTotalPages(data.total_pages || 1);
    } catch (err) {
      console.error("Failed to fetch vehicles", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, [selectedType, path, budgetMin, budgetMax, page]);

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-16 bg-background">
        <div className="container mx-auto max-w-6xl">
          {/* Filters */}
          <div className="bg-card rounded-2xl p-6 mb-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Path */}
            <div>
              <label className="text-sm font-medium block mb-2">
                Vehicle Type
              </label>
              <select
                value={path}
                onChange={(e) => {
                  setPath(e.target.value);
                  setPage(1);
                }}
                className="w-full border rounded-lg p-2"
              >
                {paths.map((p) => (
                  <option key={p} value={p}>
                    {p.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>

            {/* Budget Min */}
            <div>
              <label className="text-sm font-medium block mb-2">
                Budget Min
              </label>
              <input
                type="number"
                value={budgetMin}
                onChange={(e) => {
                  setBudgetMin(e.target.value);
                  setPage(1);
                }}
                placeholder="e.g. 5000"
                className="w-full border rounded-lg p-2"
              />
            </div>

            {/* Budget Max */}
            <div>
              <label className="text-sm font-medium block mb-2">
                Budget Max
              </label>
              <input
                type="number"
                value={budgetMax}
                onChange={(e) => {
                  setBudgetMax(e.target.value);
                  setPage(1);
                }}
                placeholder="e.g. 30000"
                className="w-full border rounded-lg p-2"
              />
            </div>

            {/* Car Type */}
            <div>
              <label className="text-sm font-medium block mb-2">Car Type</label>
              <div className="flex flex-wrap gap-2">
                {carTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => {
                      setSelectedType(selectedType === type ? null : type);
                      setPage(1);
                    }}
                    className={`px-3 py-1 rounded border text-sm ${
                      selectedType === type
                        ? "bg-primary text-white"
                        : "border-gray-300"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Loading */}
          {loading && (
            <div className="text-center py-10">Loading vehicles...</div>
          )}

          {/* Vehicles Grid */}
          {!loading && vehicles.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vehicles.map((car) => (
                <div key={car._id} className="bg-card rounded-2xl shadow">
                  <div className="h-48 bg-gray-100 flex items-center justify-center">
                    <img
                      src={car.images || "/images/car1.png"}
                      alt={car.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-5">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-bold">{car.title}</h3>
                      <span className="text-primary font-bold">
                        ${car.price_range?.low} - ${car.price_range?.high}
                      </span>
                    </div>

                    <div className="flex gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Car className="w-4 h-4" />
                        {car.make}
                      </span>

                      <span className="flex items-center gap-1">
                        <Gauge className="w-4 h-4" />
                        {car.year}
                      </span>
                    </div>

                    <Button
                      className="w-full"
                      onClick={() => navigate(`/vehicle/${car._id}`)}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* No Results */}
          {!loading && vehicles.length === 0 && (
            <div className="text-center py-16 text-gray-500">
              No vehicles found
            </div>
          )}

          {/* Pagination */}
          <div className="flex justify-center gap-3 mt-10">
            <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
              Prev
            </Button>

            <span className="px-3 py-2">
              Page {page} / {totalPages || 1}
            </span>

            <Button
              disabled={page === totalPages || totalPages === 0}
              onClick={() => setPage(page + 1)}
            >
              Next
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FindACarPage;
