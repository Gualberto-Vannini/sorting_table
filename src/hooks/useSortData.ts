import {useEffect, useState} from 'react';

// Enum representing the sorting directions
enum SortDirection {
  ASC = 'asc',
  DESC = 'desc',
}
// Type representing the keys of the data object to be sorted
type SortKey<T> = keyof T;

/**
 * Custom hook to sort data based on a specified key and sort direction.
 *
 * @param data An array of objects to be sorted.
 * @param sortKey The key on which to sort the data.
 * @param sortDirection The direction of sorting, either 'asc' (ascending) or 'desc' (descending).
 * @returns The sorted data array based on the provided sort key and direction.
 *
 * @example
 * // Usage example in a functional component:
 *
 * const MyComponent = () => {
 *   const myData = [
 *     { name: 'John', age: 30 },
 *     { name: 'Alice', age: 25 },
 *     // ... other data objects
 *   ];
 *
 *   const sortKey = 'name';
 *   const sortDirection = SortDirection.ASC;
 *
 *   const sortedData = useSortData(myData, sortKey, sortDirection);
 *
 *   // ... rest of the component logic using the sortedData
 * }
 *
 * The hook can be used to sort an array of objects based on a specific key
 * and sort direction. Whenever the `data`, `sortKey`, or `sortDirection`
 * dependencies change, the hook will re-sort the data accordingly.
 */
const useSortData = <T extends Record<string, any>>(
  data: T[],
  sortKey: SortKey<T> | null,
  sortDirection: SortDirection,
) => {
  const [sortedData, setSortedData] = useState<T[]>([]);

  useEffect(() => {
    if (data && data.length > 0) {
      setSortedData(data);
    }
  }, [data]);

  useEffect(() => {
    if (sortKey) {
      setSortedData(prevSortedData => {
        const sorted = [...prevSortedData].sort((a, b) => {
          if (a[sortKey] !== b[sortKey]) {
            return sortDirection === SortDirection.ASC
              ? a[sortKey] > b[sortKey]
                ? 1
                : -1
              : b[sortKey] > a[sortKey]
              ? 1
              : -1;
          }
          return 0;
        });

        return sorted;
      });
    }
  }, [data, sortKey, sortDirection]);

  return sortedData;
};

export default useSortData;
