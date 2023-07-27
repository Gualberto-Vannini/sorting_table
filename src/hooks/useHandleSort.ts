import {useCallback, useState} from 'react';

// Enum representing the sorting directions
enum SortDirection {
  ASC = 'asc',
  DESC = 'desc',
}

// Type representing the keys of the data object to be sorted
type SortKey<T> = keyof T;

/**
 * Custom hook for handling sorting functionality in a React component.
 *
 * @returns An object with the following properties:
 *  - sortDirection: The current sorting direction ('asc' or 'desc').
 *  - sortKey: The current sorting key (the property name of the data objects to be sorted).
 *  - handleSort: A memoized callback function to toggle sorting for a specific key.
 *
 * @example
 * // Usage example in a functional component:
 *
 * const MyComponent = () => {
 *   const { sortKey, sortDirection, handleSort } = useHandleSort<Data>();
 *
 *   // ... rest of the component logic
 * }
 *
 * where 'Data' is the type of the data objects being sorted.
 */

const useHandleSort = <T extends Record<string, any>>() => {
  const [sortDirection, setSortDirection] = useState<SortDirection>(
    SortDirection.ASC,
  );
  const [sortKey, setSortKey] = useState<SortKey<T> | null>(null);

  const handleSort = useCallback(
    (key: SortKey<T>) => {
      if (key === sortKey) {
        setSortDirection(
          sortDirection === SortDirection.ASC
            ? SortDirection.DESC
            : SortDirection.ASC,
        );
      } else {
        setSortKey(key);
        setSortDirection(SortDirection.ASC);
      }
    },
    [sortDirection, sortKey],
  );

  return {sortKey, sortDirection, handleSort};
};

export default useHandleSort;
