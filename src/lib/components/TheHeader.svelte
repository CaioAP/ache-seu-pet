<script lang="ts">
	import AutoComplete from './BaseAutoComplete.svelte';
	import { countries } from '../countries.js';
	import {
		mdiMenu,
		mdiAccountOutline,
		mdiCogOutline,
		mdiLogout
	} from '@mdi/js';
	import Icon from './BaseIcon.svelte';

	$: selectedCountry = null;
</script>

<div class="w-full h-26 navbar bg-base-300">
	<div class="flex-1 lg:hidden">
		<label
			for="my-drawer-3"
			aria-label="open sidebar"
			class="btn btn-square btn-ghost"
		>
			<Icon path={mdiMenu} />
		</label>
	</div>
	<!-- <div class="flex-1 px-2 mx-2 hidden">Navbar Title</div> -->
	<div class="flex-none gap-2">
		<div class="form-control">
			<AutoComplete
				items={countries}
				bind:selected={selectedCountry}
				className="input input-bordered md:w-auto"
			/>
		</div>
		<div class="dropdown dropdown-end">
			<div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
				<div class="w-10 rounded-full">
					<img
						alt="Tailwind CSS Navbar component"
						src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
					/>
				</div>
			</div>
			<ul
				class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-300 rounded-box w-32"
			>
				<li><a><Icon path={mdiAccountOutline} size={16} /> Profile</a></li>
				<li><a><Icon path={mdiCogOutline} size={16} /> Settings</a></li>
				<li><a><Icon path={mdiLogout} size={16} /> Logout</a></li>
			</ul>
		</div>
	</div>
</div>
