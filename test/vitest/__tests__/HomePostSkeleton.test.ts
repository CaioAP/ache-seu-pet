import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import HomePostSkeleton from 'src/components/HomePostSkeleton.vue';

installQuasarPlugin();

describe('Home Post Skeleton Component', () => {
	it('should mount the skeleton component', () => {
		const wrapper = mount(HomePostSkeleton);
		expect(wrapper).toBeTruthy();
		expect(wrapper.isVisible()).toBeTruthy();
		expect(wrapper.classes()).toContain('post-skeleton');
	});
});
