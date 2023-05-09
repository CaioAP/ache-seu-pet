import Comment from './Comment';

export default class Post {
	constructor(
		readonly id: string | undefined,
		readonly name: string,
		readonly avatar: string | null,
		readonly description: string,
		readonly images: string[],
		readonly comments: Comment[]
	) {}

	addImage(image: string) {
		this.images.push(image);
	}

	addComment(comment: Comment) {
		this.comments.push(comment);
	}
}
