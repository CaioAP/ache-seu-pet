export default interface HttpClient<T> {
	get(url: string): Promise<T>;
}
