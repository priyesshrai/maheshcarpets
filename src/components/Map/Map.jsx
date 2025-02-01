"use client";
import dynamic from "next/dynamic";
import Loader from "../Loader/Loader";
const WorldMap = dynamic(() => import("@/components/ui/world-map"), { loading: () => <Loader /> });

export default function Map() {
  return (
    <div className=" py-10 px-8 dark:bg-black bg-white w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-6xl dark:text-white text-black" style={{ fontFamily: "var(--font-jura)" }}>
          <span>
            Our Presence
          </span>
        </p>
      </div>
      <WorldMap
        dots={[
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: -40.9006, lng: 174.8860 },
            label: "New Zealand"
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: -33.8688, lng: 151.2093 },
            label: "Australia"
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 1.3521, lng: 103.8198 },
            label: "Singapore"
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 21.0285, lng: 105.8542 },
            label: "Vietnam"
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 37.5665, lng: 126.9780 },
            label: "South Korea"
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 35.6895, lng: 139.6917 },
            label: "Japan"
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 39.9042, lng: 116.4074 },
            label: "China"
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 33.8886, lng: 35.4955 },
            label: "Lebanon"
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: -25.7479, lng: 28.2293 },
            label: "South Africa"
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 55.7558, lng: 37.6173 },
            label: "Russia"
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 41.9028, lng: 12.4964 },
            label: "Italy"
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 40.4168, lng: -3.7038 },
            label: "Spain"
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 52.5200, lng: 13.4050 },
            label: "Germany"
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 48.8566, lng: 2.3522 },
            label: "France"
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 48.2082, lng: 16.3738 },
            label: "Austria"
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 30.0444, lng: 31.2357 },
            label: "Egypt"
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 31.7683, lng: 35.2137 },
            label: "Israel"
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 51.1694, lng: 71.4491 },
            label: "Kazakhstan"
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 39.9334, lng: 32.8597 },
            label: "Turkey"
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: -15.7942, lng: -47.8822 },
            label: "Brazil"
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: -33.4489, lng: -70.6693 },
            label: "Chile"
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 50.8503, lng: 4.3517 },
            label: "Belgium"
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 59.3293, lng: 18.0686 },
            label: "Sweden"
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 60.1695, lng: 24.9354 },
            label: "Finland"
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 45.4215, lng: -75.6972 },
            label: "Canada"
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 19.4326, lng: -99.1332 },
            label: "Mexico"
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 37.9838, lng: 23.7275 },
            label: "Greece"
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 51.5074, lng: -0.1278 },
            label: "United Kingdom"
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 35.6892, lng: 51.3890 },
            label: "Iran"
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 24.4539, lng: 54.3773 },
            label: "UAE"
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 52.3676, lng: 4.9041 },
            label: "Netherlands"
          },
          {
            start: { lat: 25.31037917230665, lng: 82.98868979688532 },
            end: { lat: 55.6761, lng: 12.5683 },
            label: "Denmark"
          }
        ]}
      />
    </div>
  )
}


