import {renderHook, act} from '@testing-library/react-hooks';
import useHandleSort from '../src/hooks/useHandleSort';

describe('useHandleSort hook', () => {
  test('should initialize with default values', () => {
    // Render the hook and get the hook's result object
    const {result} = renderHook(() => useHandleSort());

    // Check if the initial sortKey is null and sortDirection is 'asc'
    expect(result.current.sortKey).toBe(null);
    expect(result.current.sortDirection).toBe('asc');
  });

  test('should update sortKey and sortDirection when calling handleSort', () => {
    // Render the hook and get the hook's result object
    const {result} = renderHook(() => useHandleSort());

    // Call handleSort with 'name' as the sortKey
    act(() => {
      result.current.handleSort('name');
    });

    // Check if the sortKey is 'name' and sortDirection is 'asc'
    expect(result.current.sortKey).toBe('name');
    expect(result.current.sortDirection).toBe('asc');

    // Call handleSort again with 'name' as the sortKey
    act(() => {
      result.current.handleSort('name');
    });

    // Check if the sortKey is 'name' and sortDirection is 'desc'
    expect(result.current.sortKey).toBe('name');
    expect(result.current.sortDirection).toBe('desc');

    // Call handleSort with 'age' as the sortKey
    act(() => {
      result.current.handleSort('age');
    });

    // Check if the sortKey is 'age' and sortDirection is 'asc'
    expect(result.current.sortKey).toBe('age');
    expect(result.current.sortDirection).toBe('asc');
  });
});
