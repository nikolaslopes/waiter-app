import axios from "axios";

export const baseURL = "http://192.168.1.11:8080";

export const httpClient = axios.create({
	baseURL: baseURL,
});
