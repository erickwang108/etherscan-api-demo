import NodeCache from 'node-cache';

const defaultTTL = 1000 * 60 * 10; // 10 minutes
const cache = new NodeCache();

export const get = <T>(key: string) => cache.get<T>(key);
export const has = (key: string) => cache.has(key);
export const del = (key: string) => cache.del(key);
export const set = <T>(key: string, val: any, ttl = defaultTTL) => cache.set<T>(key, val, ttl);
