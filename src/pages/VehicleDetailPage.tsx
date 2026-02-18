import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Car,
  Gauge,
  MapPin,
  DollarSign,
  Calendar,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BACKEND_URL } from "@/utils/config";

const API_URL = `${BACKEND_URL}vehicles`;

interface PriceRange {
  low: number;
  high: number;
}

interface Vehicle {
  _id: string;
  url: string;
  title: string;
  make: string;
  model: string;
  year: number;
  price_range: PriceRange;
  location?: string;
  odometer?: string;
  images: string[];
  description?: string;
  auction_date?: string;
  reserve?: string;
  status?: string;
  source?: string;
}

const VehicleDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVehicleDetail = async () => {
      if (!id) return;

      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`${API_URL}/${id}`);
        if (!res.ok) {
          throw new Error(
            res.status === 404 ? "Vehicle not found" : "Failed to load vehicle",
          );
        }

        const data = await res.json();
        setVehicle(data);
      } catch (err: unknown) {
        const error = err instanceof Error ? err : new Error(String(err));
        console.error("Failed to fetch vehicle:", error);
        setError(error.message || "Error loading vehicle details");
      } finally {
        setLoading(false);
      }
    };

    fetchVehicleDetail();
  }, [id]);

  // Loading state
  if (loading) {
    return (
      <div className="pt-20 pb-16 min-h-screen bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <Skeleton className="h-[500px] w-full rounded-2xl" />
            </div>
            <div className="lg:col-span-2 space-y-6">
              <Skeleton className="h-10 w-3/4 rounded" />
              <Skeleton className="h-8 w-1/2 rounded" />
              <Skeleton className="h-32 w-full rounded" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !vehicle) {
    return (
      <div className="pt-24 pb-16 min-h-screen bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <div className="bg-white rounded-2xl shadow-sm p-10 max-w-lg mx-auto">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Oops!</h2>
            <p className="text-gray-600 mb-8">{error || "Vehicle not found"}</p>
            <Button size="lg" onClick={() => navigate("/find-a-car")}>
              Back to Vehicles
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const mainImage = vehicle.images?.[0] || "/images/car-placeholder.jpg";
  const isLive = vehicle.status?.toLowerCase() === "live";
  const priceText =
    vehicle.price_range.low === vehicle.price_range.high
      ? `$${vehicle.price_range.low.toLocaleString()}`
      : `$${vehicle.price_range.low.toLocaleString()} – $${vehicle.price_range.high.toLocaleString()}`;

  return (
    <div className="pt-20 pb-24 min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Back button */}
        <Button
          variant="ghost"
          className="mb-6 text-gray-600 hover:text-primary pl-0"
          onClick={() => navigate("/find-a-car")}
        >
          ← Back to Vehicles
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Left - Image */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
                <img
                  src={mainImage}
                  alt={vehicle.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/images/car1.png";
                  }}
                />
                {isLive && (
                  <Badge className="absolute top-4 right-4 bg-green-600 hover:bg-green-600 px-4 py-1.5 text-base">
                    LIVE AUCTION
                  </Badge>
                )}
              </div>
            </div>

            {/* Small thumbnails if more images exist */}
            {vehicle.images?.length > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-3">
                {vehicle.images.slice(0, 4).map((img, idx) => (
                  <div
                    key={idx}
                    className="aspect-square rounded-lg overflow-hidden border border-gray-200 cursor-pointer hover:opacity-90 transition"
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "/images/car-placeholder.jpg";
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right - Info */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-md p-4 border border-gray-200 sticky top-24">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {vehicle.title}
                </h1>
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="text-4xl font-extrabold text-primary">
                    {priceText}
                  </div>
                  {vehicle.reserve === "Yes" && (
                    <Badge
                      variant="outline"
                      className="text-amber-700 border-amber-600 bg-amber-50"
                    >
                      Reserve Set
                    </Badge>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5 mb-8">
                <Card className="border-none shadow-none bg-gray-50">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Year</p>
                        <p className="font-semibold">{vehicle.year}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-none bg-gray-50">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <Car className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Make / Model
                        </p>
                        <p className="font-semibold">{vehicle.make}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-none bg-gray-50">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Location
                        </p>
                        <p className="font-semibold">
                          {vehicle.location || "Online"}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-none bg-gray-50">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <DollarSign className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Odometer
                        </p>
                        <p className="font-semibold">
                          {vehicle.odometer || "N/A"}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Description */}
              {vehicle.description && vehicle.description.trim() !== "" && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-3">Description</h3>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {vehicle.description}
                  </p>
                </div>
              )}

              {/* Auction Info */}
              {vehicle.auction_date && (
                <div className="mb-8 p-5 bg-blue-50 rounded-xl border border-blue-100">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    Auction Information
                  </h3>
                  <p className="text-gray-700">
                    Auction ends:{" "}
                    <span className="font-medium">
                      {new Date(vehicle.auction_date).toLocaleString("en-US", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </span>
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 mt-8">
                <Button
                  size="lg"
                  className="flex-1 gap-2"
                  onClick={() =>
                    window.open(vehicle.url, "_blank", "noopener,noreferrer")
                  }
                >
                  <ExternalLink size={18} />
                  View on Trading Garage
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1"
                  onClick={() => navigate("/contact")}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetailPage;
