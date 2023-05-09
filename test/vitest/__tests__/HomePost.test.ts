import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import HomePost from 'src/components/HomePost.vue';
import PostGateway from 'src/gateways/PostGateway';
import Post from 'src/entities/Post';

installQuasarPlugin();

describe('Home Post Component', () => {
	it('should mount the post component', () => {
		const postGateway: PostGateway = {
			async get(id: string): Promise<Post> {
				return new Post(id, 'Joao da Silva', null, 'Perdi meu pet', [], []);
			},
		};
		const wrapper = mount(HomePost, {
			propsData: {
				id: '1',
			},
			global: {
				provide: {
					postGateway,
				},
			},
		});
		expect(wrapper).toBeTruthy();
		expect(wrapper.isVisible()).toBeTruthy();
		expect(wrapper.classes()).toContain('post');
	});
});
