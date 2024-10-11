"use client";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";

export default function SearchBar({ onSearch }: { onSearch: (searchTerm: string) => void }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchTerm); 
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); 
  };

  return (
    <form
      className="flex justify-between gap-4 bg-white border border-gray-300 p-2 rounded-md flex-1 max-w-md mx-auto"
      onSubmit={handleSearch}
    >
      <button className="flex items-center gap-2 bg-transparent outline-none">
        <IconSearch size={16} stroke={2} color="gray" />
      </button>
      <input
        type="text"
        name="name"
        placeholder="O que você está buscando?"
        className="flex-1 bg-transparent outline-none"
        value={searchTerm}
        onChange={handleInputChange} 
      />
    </form>
  );
}
