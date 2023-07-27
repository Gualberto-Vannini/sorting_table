import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Enumeration of keys used with AsyncStorage.
 * You can add more keys for other AsyncStorage data.
 */
export enum AsyncStorageKeys {
  USERS = 'users',
  // Add more keys for other AsyncStorage data
}

/**
 * Get data from AsyncStorage with the given key.
 *
 * @param key The key associated with the data in AsyncStorage.
 * @returns The data fetched from AsyncStorage, or null if the data is not found.
 *
 * @example
 * // Usage example:
 * const userData = await getDataFromStorage<User[]>(AsyncStorageKeys.USERS);
 * if (userData) {
 *   // Data exists, handle it
 * } else {
 *   // Data not found or error occurred
 * }
 */
export const getDataFromStorage = async <T>(key: string): Promise<T | null> => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error getting data from AsyncStorage:', error);
    return null;
  }
};

/**
 * Set data in AsyncStorage with the given key.
 *
 * @param key The key to associate with the data in AsyncStorage.
 * @param data The data to store in AsyncStorage.
 *
 * @example
 * // Usage example:
 * const user = { id: 1, name: 'John' };
 * setDataInStorage<User>(AsyncStorageKeys.USERS, user);
 */
export const setDataInStorage = async <T>(
  key: string,
  data: T,
): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error setting data in AsyncStorage:', error);
  }
};

/**
 * Set the cache time for the given cacheKey in AsyncStorage.
 *
 * @param cacheKey The key for which to set the cache time.
 *
 * @example
 * // Usage example:
 * await setCacheTime(AsyncStorageKeys.USERS);
 * // The cache time for the USERS data is now set.
 */
export const setCacheTime = async (cacheKey: string): Promise<void> => {
  try {
    const currentTime = Date.now();
    await AsyncStorage.setItem(`${cacheKey}_cacheTime`, currentTime.toString());
  } catch (error) {
    console.error('Error setting cache time in AsyncStorage:', error);
  }
};
