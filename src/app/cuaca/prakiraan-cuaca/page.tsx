"use client";
import { useState, useEffect, useRef } from "react";
import Container from "@/components/Container";

interface Wilayah {
  kode: string;
  nama: string;
  provinceName: string;
}

export default function PrakiraanCuacaGeneralPage() {
  const [query, setQuery] = useState<string>(""); 
  const [suggestions, setSuggestions] = useState<Wilayah[]>([]); 
  const [loading, setLoading] = useState<boolean>(false);
  const isSuggestionClicked = useRef<boolean>(false); 

  useEffect(() => {
    if (query.length < 3 || isSuggestionClicked.current) {
      setSuggestions([]);
      isSuggestionClicked.current = false; 
      return;
    }

    const fetchSuggestions = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/search/search-by-name?q=${query}`);
        const result = await response.json();
        setSuggestions(result.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };

    const delayFetch = setTimeout(fetchSuggestions, 500); 
    return () => clearTimeout(delayFetch);
  }, [query]);

  return (
    <Container>
      <p>Halaman Utama</p>

      <input
        type="text"
        placeholder="Cari wilayah..."
        value={query}
        onChange={(e) => {
          isSuggestionClicked.current = false; // Set false saat pengguna mengetik
          setQuery(e.target.value);
        }}
        className="border p-2 w-full"
      />

      {/* Suggestion Dropdown */}
      {suggestions.length > 0 && (
        <ul className="border mt-1 rounded-md bg-white absolute w-1/2">
          {loading && <li className="p-2 text-gray-500">Loading...</li>}
          {suggestions.map((item, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => {
                setQuery(item.nama);
                setSuggestions([]); // Hapus suggestion jika di-click
                isSuggestionClicked.current = true; // Tandai bahwa pengguna telah memilih
              }}
            >
              {item.kode} {item.nama}, {item.provinceName}
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}
