import axios from 'axios';
import HttpClient from './HttpClient';

export default class AxiosAdapter<T> implements HttpClient<T> {
	async get(url: string): Promise<T> {
		const response = await axios.get(url);
		return response.data;
	}
}
