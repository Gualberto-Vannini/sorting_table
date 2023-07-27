import AsyncStorage from '@react-native-async-storage/async-storage';

const CACHE_EXPIRATION_TIME = 20000; // 20 seconds in milliseconds

/**
 * Check if data needs to be fetched based on the cache status.
 *
 * @param cacheKey The key to identify the data in AsyncStorage.
 * @returns A Promise that resolves to a boolean indicating whether data needs to be fetched or not.
 *
 * @example
 * // Usage example:
 * const fetchNeeded = await shouldFetchData('users');
 * if (fetchNeeded) {
 *   // Fetch data from the server
 * } else {
 *   // Data is available and not expired, no need to fetch
 * }
 */
const shouldFetchData = async (cacheKey: string): Promise<boolean> => {
  try {
    const cachedData = await AsyncStorage.getItem(cacheKey);
    const lastCacheTime = await AsyncStorage.getItem(`${cacheKey}_cacheTime`);

    if (!cachedData || !lastCacheTime) {
      return true; // Data is not available, or lastCacheTime is null, fetch needed
    } else {
      const lastCacheTimeUTC = parseInt(lastCacheTime, 10); // Convert lastCacheTime to number
      const currentTimeUTC = Date.now();

      if (currentTimeUTC - lastCacheTimeUTC > CACHE_EXPIRATION_TIME) {
        return true; // Data is available but expired, fetch needed
      } else {
        return false; // Data is available and not expired, no need to fetch
      }
    }
  } catch (error) {
    console.error('Error checking cache:', error);
    return false; // In case of an error, consider it as not available
  }
};

export default shouldFetchData;
