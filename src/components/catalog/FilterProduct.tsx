"use client";
import { useEffect, useState } from "react";
import { Range } from "react-range";

const categories = [
  "Teclados",
  "Mouses",
  "Headsets",
  "Microfones",
  "Gabinetes",
  "Controles",
  "Placa de Vídeo",
];

export interface FilterProductProps {
  onFilter: (selectedCategories: string[], minPrice: number, maxPrice: number) => void;
}

export default function FilterProduct({ onFilter }: FilterProductProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 10000]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prevCategories) => {
      const updatedCategories = prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category];

      return updatedCategories;
    });
  };

  useEffect(() => {
    onFilter(selectedCategories, priceRange[0], priceRange[1]);
  }, [selectedCategories, priceRange]);

  return (
    <div className="flex flex-col gap-4 p-4 w-[290px] bg-white shadow-md rounded-lg max-h-[480px] overflow-y-auto">
      <h3 className="font-bold text-lg text-black">Preço</h3>
      <div className="flex justify-between items-center mb-2">
        <span className="text-black">R$ {priceRange[0]}</span>
        <span className="text-black">R$ {priceRange[1]}</span>
      </div>
      <Range
        step={100}
        min={0}
        max={10000}
        values={priceRange}
        onChange={(values) => setPriceRange(values)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="h-2 bg-gray-300 rounded-full"
            style={{
              width: '100%',
              background: `linear-gradient(to right, #007bff ${priceRange[0] / 10000 * 100}%, #ccc ${priceRange[0] / 10000 * 100}%, #007bff ${priceRange[1] / 10000 * 100}%, #ccc ${priceRange[1] / 10000 * 100}%)`,
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            className="h-6 w-6 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        )}
      />

      <h3 className="font-bold text-lg mt-6 text-black">Categorias</h3>
      {categories.map((category) => (
        <label key={category} className="flex items-center gap-2 text-black">
          <input
            type="checkbox"
            value={category}
            onChange={() => handleCategoryChange(category)}
            checked={selectedCategories.includes(category)}
            className="text-black"
          />
          {category}
        </label>
      ))}
    </div>
  );
}
