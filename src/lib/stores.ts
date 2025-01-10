import { writable } from "svelte/store";
import type { User } from "./types";

export enum Page {
    LOGIN = "login",
    REGISTER = "register",
    HOME = "home",
}
export let currentPage = writable<Page>(Page.LOGIN);

export let token = writable<string | null>(null);
export let user = writable<User | null>(null);
