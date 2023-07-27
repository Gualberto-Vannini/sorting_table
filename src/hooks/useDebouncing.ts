import {useEffect, useState, useMemo} from 'react';

/**
 * Custom hook for handling search functionality with debouncing in a React component.
 *
 * @param initialData The initial data array to perform search on.
 * @param debounceTime The time in milliseconds to debounce the search input.
 * @returns The filtered data array based on the search query.
 */
const useDebouncedSearch = <T extends Record<string, any>>(
  initialData: T[],
  debounceTime: number,
) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredData, setFilteredData] = useState<T[]>([]); // Initialize with an empty array

  const searchKeys = useMemo(() => {
    return initialData.length > 0 ? Object.keys(initialData[0]) : [];
  }, [initialData]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      const lowerCaseQuery = searchQuery.toLowerCase().trim();
      const filtered = initialData.filter(item => {
        return searchKeys.some(key => {
          const propertyValue = String(item[key]).toLowerCase();
          return propertyValue.includes(lowerCaseQuery);
        });
      });
      setFilteredData(filtered);
    }, debounceTime);

    return () => clearTimeout(timerId);
  }, [searchQuery, initialData, debounceTime, searchKeys]);

  return {searchQuery, setSearchQuery, filteredData};
};

export default useDebouncedSearch;
