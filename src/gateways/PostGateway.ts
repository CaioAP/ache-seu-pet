import Post from 'src/entities/Post';

export default interface PostGateway {
	get(id: string): Promise<Post>;
}
