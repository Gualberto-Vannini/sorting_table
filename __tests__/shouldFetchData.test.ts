import AsyncStorage from '@react-native-async-storage/async-storage';
import shouldFetchData from '../src/utils/helpers/shouldFetchData';

// Mock AsyncStorage to avoid actual storage operations during testing
jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
}));

describe('shouldFetchData', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return true if data is not available in cache', async () => {
    // Mock AsyncStorage to return null for both cachedData and lastCacheTime
    (
      AsyncStorage.getItem as jest.MockedFunction<typeof AsyncStorage.getItem>
    ).mockResolvedValueOnce(null);
    (
      AsyncStorage.getItem as jest.MockedFunction<typeof AsyncStorage.getItem>
    ).mockResolvedValueOnce(null);

    const cacheKey = 'testKey';
    const result = await shouldFetchData(cacheKey);

    expect(result).toBe(true);
    expect(AsyncStorage.getItem).toHaveBeenCalledTimes(2);
    expect(AsyncStorage.getItem).toHaveBeenCalledWith(cacheKey);
    expect(AsyncStorage.getItem).toHaveBeenCalledWith(`${cacheKey}_cacheTime`);
  });

  it('should return true if cache is expired', async () => {
    // Mock AsyncStorage to return cachedData and an expired lastCacheTime (30 seconds ago)
    const cachedData = 'cachedData';
    const lastCacheTime = (Date.now() - 30000).toString(); // Expired cache (30 seconds ago)

    (
      AsyncStorage.getItem as jest.MockedFunction<typeof AsyncStorage.getItem>
    ).mockResolvedValueOnce(cachedData);
    (
      AsyncStorage.getItem as jest.MockedFunction<typeof AsyncStorage.getItem>
    ).mockResolvedValueOnce(lastCacheTime);

    const cacheKey = 'testKey';
    const result = await shouldFetchData(cacheKey);

    expect(result).toBe(true);
    expect(AsyncStorage.getItem).toHaveBeenCalledTimes(2);
    expect(AsyncStorage.getItem).toHaveBeenCalledWith(cacheKey);
    expect(AsyncStorage.getItem).toHaveBeenCalledWith(`${cacheKey}_cacheTime`);
  });

  it('should return false if cache is not expired', async () => {
    // Mock AsyncStorage to return cachedData and a recent lastCacheTime (10 seconds ago)
    const cachedData = 'cachedData';
    const lastCacheTime = (Date.now() - 10000).toString(); // Cache not expired (10 seconds ago)

    (
      AsyncStorage.getItem as jest.MockedFunction<typeof AsyncStorage.getItem>
    ).mockResolvedValueOnce(cachedData);
    (
      AsyncStorage.getItem as jest.MockedFunction<typeof AsyncStorage.getItem>
    ).mockResolvedValueOnce(lastCacheTime);

    const cacheKey = 'testKey';
    const result = await shouldFetchData(cacheKey);

    expect(result).toBe(false);
    expect(AsyncStorage.getItem).toHaveBeenCalledTimes(2);
    expect(AsyncStorage.getItem).toHaveBeenCalledWith(cacheKey);
    expect(AsyncStorage.getItem).toHaveBeenCalledWith(`${cacheKey}_cacheTime`);
  });

  it('should return false if an error occurs', async () => {
    // Mock AsyncStorage to return cachedData and then throw an error
    (
      AsyncStorage.getItem as jest.MockedFunction<typeof AsyncStorage.getItem>
    ).mockReturnValueOnce(Promise.resolve('cachedData'));
    (
      AsyncStorage.getItem as jest.MockedFunction<typeof AsyncStorage.getItem>
    ).mockRejectedValueOnce(new Error('Cache error'));

    const cacheKey = 'testKey';
    const result = await shouldFetchData(cacheKey);

    expect(result).toBe(false);
    expect(AsyncStorage.getItem).toHaveBeenCalledTimes(2);
    expect(AsyncStorage.getItem).toHaveBeenCalledWith(cacheKey);
    expect(AsyncStorage.getItem).toHaveBeenCalledWith(`${cacheKey}_cacheTime`);
  });
});
