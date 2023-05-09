import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import IndexPage from 'src/pages/IndexPage.vue';
import HomePostSkeleton from 'src/components/HomePostSkeleton.vue';

installQuasarPlugin();

function sleep(time: number) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, time);
	});
}

describe('Index Page', () => {
	it('should mount the index page', () => {
		const wrapper = mount(IndexPage);
		expect(wrapper).toBeTruthy();
		expect(wrapper.isVisible()).toBeTruthy();
	});
	it('should mount the skeleton posts', () => {
		const wrapper = mount(IndexPage);
		const skeletonPosts = wrapper.findAllComponents(HomePostSkeleton);
		expect(skeletonPosts.length).toBe(3);
	});
	it('should unmout the skeleton posts after posts received', async () => {
		const wrapper = mount(IndexPage);
		await sleep(201);
		const skeletonPosts = wrapper.findAllComponents(HomePostSkeleton);
		expect(skeletonPosts.length).toBe(0);
	});
	it('should show a message if no posts were found', async () => {
		const wrapper = mount(IndexPage);
		await sleep(201);
		expect(wrapper.text()).toContain('Nenhum resultado encontrado!');
	});
});
