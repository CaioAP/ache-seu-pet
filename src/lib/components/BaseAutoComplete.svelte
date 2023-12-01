<script lang="ts">
	import type Country from '../../interfaces/Country';

	export let selected: Country | null = null;
	export let items: Country[] = [];
	export let className: string = 'input input-bordered';

	$: visible = false;
	$: inputValue = '';
	$: filteredItems = items.filter((item) => {
		return item.name.toLowerCase().includes(inputValue.toLowerCase());
	});

	const openDropdown = () => {
		visible = true;
	};
	const closeDropdown = () => {
		// do not remove setTimeout
		// it is used to ensure calling after selectItem when an item is clicked
		setTimeout(() => {
			if (!selected) {
				inputValue = '';
			}
			visible = false;
		}, 10);
	};
	const selectItem = (item: Country) => {
		selected = item;
		inputValue = item.name;
		closeDropdown();
	};
</script>

<div class="dropdown">
	<input
		class={className}
		placeholder="Pick a country"
		bind:value={inputValue}
		on:focus={openDropdown}
		on:blur={closeDropdown}
	/>
	{#if visible}
		<ul
			class="dropdown-content z-[1] menu p-2 shadow bg-base-300 rounded-box w-52 max-h-80 flex-nowrap overflow-auto"
		>
			{#each filteredItems as item}
				<li>
					<button on:click|preventDefault={() => selectItem(item)}>
						{item.name}
					</button>
				</li>
			{/each}
		</ul>
	{/if}
</div>
