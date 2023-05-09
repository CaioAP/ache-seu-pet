import Comment from 'src/entities/Comment';
import Post from 'src/entities/Post';
import { describe, expect, it } from 'vitest';

describe('Post', () => {
	it('should create a post', function () {
		const post = new Post('1', 'Joao da Silva', null, 'Perdi meu pet', [], []);
		expect(post).toHaveProperty('id', '1');
	});
	it('should add an image to a post', function () {
		const post = new Post('1', 'Joao da Silva', null, 'Perdi meu pet', [], []);
		post.addImage('image.png');
		expect(post.images).toHaveLength(1);
		expect(post.images[0]).toBe('image.png');
	});
	it('should add a comment to a post', function () {
		const post = new Post('1', 'Joao da Silva', null, 'Perdi meu pet', [], []);
		const comment = new Comment('1', 'Joao da Silva', 'Eu achei', new Date());
		post.addComment(comment);
		expect(post.comments).toHaveLength(1);
		expect(post.comments[0]).toHaveProperty('id', '1');
	});
});
