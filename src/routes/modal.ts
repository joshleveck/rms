import { writable} from 'svelte/store';

export const isConfigOpen = writable(false);
export const isConfigCreateOpen = writable(false);


export const toggleConfig = () => {
  isConfigOpen.update(value => !value);
}

export const toggleAdd = () => {
  isConfigCreateOpen.update(value => !value);
}
