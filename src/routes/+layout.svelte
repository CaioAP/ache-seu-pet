<script lang="ts">
	import TheDrawer from '$lib/components/TheDrawer.svelte';
	import TheHeader from '$lib/components/TheHeader.svelte';
	import '../app.css';
</script>

<TheDrawer>
	<TheHeader slot="navbar" />

	<slot />
</TheDrawer>
