// useDebouncedSearch.test.js
import {renderHook, act} from '@testing-library/react-hooks';
import useDebouncedSearch from '../src/hooks/useDebouncing';

describe('useDebouncedSearch', () => {
  // Mock initial data for testing
  const mockData = [
    {name: 'John', age: 30},
    {name: 'Alice', age: 25},
    // Add more data as needed
  ];

  // Debounce time for testing (in milliseconds)
  const debounceTime = 300;

  it('should initialize with empty searchQuery and filteredData', () => {
    const {result} = renderHook(() =>
      useDebouncedSearch(mockData, debounceTime),
    );

    expect(result.current.searchQuery).toBe('');
    expect(result.current.filteredData).toEqual([]);
  });

  it('should update searchQuery when setSearchQuery is called', () => {
    const {result} = renderHook(() =>
      useDebouncedSearch(mockData, debounceTime),
    );

    act(() => {
      result.current.setSearchQuery('John');
    });

    expect(result.current.searchQuery).toBe('John');
  });

  it('should filter data based on searchQuery', async () => {
    const {result, waitForNextUpdate} = renderHook(() =>
      useDebouncedSearch(mockData, debounceTime),
    );

    act(() => {
      result.current.setSearchQuery('John');
    });

    // Wait for debounce time to pass
    await waitForNextUpdate();

    // Expect the filtered data to contain only the data matching the search query
    expect(result.current.filteredData).toEqual([{name: 'John', age: 30}]);
  });
});
