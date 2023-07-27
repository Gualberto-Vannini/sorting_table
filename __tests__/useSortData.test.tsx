import {renderHook} from '@testing-library/react-hooks';
import useSortData from '../src/hooks/useSortData';

const mockData = [
  {name: 'Alice', age: 25},
  {name: 'Bob', age: 30},
  {name: 'Charlie', age: 22},
];

enum SortDirection {
  ASC = 'asc',
  DESC = 'desc',
}

describe('useSortData hook', () => {
  test('should return the same data when sortKey is null', () => {
    // Render the hook with mockData and null sortKey in ascending order
    const {result} = renderHook(() =>
      useSortData(mockData, null, SortDirection.ASC),
    );

    // The sortedData should be the same as the original mockData
    expect(result.current).toEqual(mockData);
  });

  test('should sort data by sortKey in ascending order', () => {
    // Render the hook with mockData and 'age' as sortKey in ascending order
    const {result} = renderHook(() =>
      useSortData(mockData, 'age', SortDirection.ASC),
    );

    // The expectedSortedData is the mockData sorted by 'age' in ascending order
    const expectedSortedData = [
      {name: 'Charlie', age: 22},
      {name: 'Alice', age: 25},
      {name: 'Bob', age: 30},
    ];

    // The sortedData should match the expectedSortedData
    expect(result.current).toEqual(expectedSortedData);
  });

  test('should sort data by sortKey in descending order', () => {
    // Render the hook with mockData and 'name' as sortKey in descending order
    const {result} = renderHook(() =>
      useSortData(mockData, 'name', SortDirection.DESC),
    );

    // The expectedSortedData is the mockData sorted by 'name' in descending order
    const expectedSortedData = [
      {name: 'Charlie', age: 22},
      {name: 'Bob', age: 30},
      {name: 'Alice', age: 25},
    ];

    // The sortedData should match the expectedSortedData
    expect(result.current).toEqual(expectedSortedData);
  });
});
