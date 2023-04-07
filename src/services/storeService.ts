 class StoreService {
    private storage: Storage;
  
    constructor(storage: Storage) {
      this.storage = storage;
    }
  
    get<T>(key: string): T | null {
      const data = this.storage.getItem(key);
      if (data) {
        return JSON.parse(data) as T;
      }
      return null;
    }
  
    set<T>(key: string, value: T): void {
      this.storage.setItem(key, JSON.stringify(value));
    }
  
    remove(key: string): void {
      this.storage.removeItem(key);
    }
  
    clear(): void {
      this.storage.clear();
    }
  }

  export const LocalStorageService = new StoreService(localStorage);
  
