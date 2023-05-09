import Post from 'src/entities/Post';
import HttpClient from 'src/infra/http/HttpClient';
import PostGateway from './PostGateway';

export default class PostGatewayHttp implements PostGateway {
	constructor(
		readonly httpClient: HttpClient<Post>,
		readonly baseUrl: string
	) {}

	async get(id: string): Promise<Post> {
		return await this.httpClient.get(`${this.baseUrl}/post/${id}`);
	}
}
