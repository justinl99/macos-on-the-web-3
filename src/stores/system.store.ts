import { writable } from 'svelte/store';

export const systemNeedsUpdate = writable(false);
export const systemNeedsError = writable(false);
