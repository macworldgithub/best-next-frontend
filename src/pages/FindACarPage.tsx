import { useState } from "react";
import { Car, Fuel, Gauge, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const carTypes = ["Sedan", "SUV", "Hatchback", "Ute", "Van", "Coupe"];
const fuelTypes = ["Petrol", "Diesel", "Hybrid", "Electric"];

const sampleCars = [
  {
    name: "Toyota Camry 2023",
    type: "Sedan",
    price: "$32,990",
    fuel: "Hybrid",
    km: "15,200 km",
    image: "/images/car1.png",
  },
  {
    name: "Mazda CX-5 2022",
    type: "SUV",
    price: "$38,500",
    fuel: "Petrol",
    km: "28,400 km",
    image: "/images/car1.png",
  },
  {
    name: "Hyundai i30 2023",
    type: "Hatchback",
    price: "$24,990",
    fuel: "Petrol",
    km: "8,100 km",
    image: "/images/car1.png",
  },
  {
    name: "Ford Ranger 2022",
    type: "Ute",
    price: "$52,900",
    fuel: "Diesel",
    km: "35,600 km",
    image: "/images/car1.png",
  },
  {
    name: "Kia EV6 2023",
    type: "SUV",
    price: "$58,990",
    fuel: "Electric",
    km: "12,000 km",
    image: "/images/car1.png",
  },
  {
    name: "Toyota Kluger 2023",
    type: "SUV",
    price: "$48,500",
    fuel: "Hybrid",
    km: "19,700 km",
    image: "/images/car1.png",
  },
];

const FindACarPage = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedFuel, setSelectedFuel] = useState<string | null>(null);

  const filteredCars = sampleCars.filter((car) => {
    if (selectedType && car.type !== selectedType) return false;
    if (selectedFuel && car.fuel !== selectedFuel) return false;
    return true;
  });

  return (
    <div className="pt-24">
      <section className="hero-gradient py-20">
        <div className="container mx-auto text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Browse Vehicles
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground font-display mb-6">
            Find Your <span className="text-gradient-amber">Perfect Car</span>
          </h1>
          <p className="text-lg text-secondary-foreground/60 max-w-2xl mx-auto">
            Browse quality new and preowned vehicles. Filter by type, fuel, and
            budget to find your match.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto max-w-6xl">
          {/* Filters */}
          <div className="bg-card rounded-2xl p-6 card-elevated mb-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-card-foreground block mb-3">
                  Car Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {carTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() =>
                        setSelectedType(selectedType === type ? null : type)
                      }
                      className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                        selectedType === type
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border text-card-foreground hover:border-primary/50"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-card-foreground block mb-3">
                  Fuel Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {fuelTypes.map((fuel) => (
                    <button
                      key={fuel}
                      onClick={() =>
                        setSelectedFuel(selectedFuel === fuel ? null : fuel)
                      }
                      className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                        selectedFuel === fuel
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border text-card-foreground hover:border-primary/50"
                      }`}
                    >
                      {fuel}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.map((car) => (
              <div
                key={car.name}
                className="bg-card rounded-2xl overflow-hidden card-elevated group"
              >
                <div className="h-48 bg-muted flex items-center justify-center overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-card-foreground">
                      {car.name}
                    </h3>
                    <span className="text-primary font-bold">{car.price}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Car className="w-4 h-4" />
                      {car.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <Fuel className="w-4 h-4" />
                      {car.fuel}
                    </span>
                    <span className="flex items-center gap-1">
                      <Gauge className="w-4 h-4" />
                      {car.km}
                    </span>
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredCars.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No cars match your filters. Try adjusting your criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default FindACarPage;
