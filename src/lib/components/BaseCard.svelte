<script lang="ts">
	import { mdiHeart, mdiHeartOutline } from '@mdi/js';
	import Icon from './BaseIcon.svelte';

	export let id: number;

	const commentId = `card-${id}-comments`;

	$: image = '';
	$: alt = '';
	$: title = '';
	$: description = '';
	$: liked = false;

	const fetchData = (id: number) => {
		console.log(id);
		image =
			'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg';
		alt = 'cachorrinho';
		title = 'Rex';
		description = 'Lost on the central park';
	};

	const openComments = () => {};

	setTimeout(fetchData, 100, id);
</script>

<div class="card card-compact w-full bg-base-300 shadow-xl">
	<figure>
		<img src={image} {alt} />
	</figure>
	<div class="card-body">
		<div class="card-actions justify-between">
			<button
				class="btn btn-ghost p-0"
				on:click={() => {
					liked = !liked;
				}}
			>
				<Icon path={liked ? mdiHeart : mdiHeartOutline} size={32} />
			</button>
			<button class="btn btn-ghost p-0" on:click={openComments}>
				<Icon path={liked ? mdiHeart : mdiHeartOutline} size={32} />
			</button>
		</div>
		<h2 class="card-title">{title}</h2>
		<p>{description}</p>
	</div>
</div>

<button class="btn" on:click={openComments}>open modal</button>
<dialog id={commentId} class="modal modal-bottom sm:modal-middle">
	<div class="modal-box">
		<h3 class="font-bold text-lg">Comments</h3>
		<p class="py-4">Press ESC key or click the button below to close</p>
		<div class="modal-action">
			<form method="dialog">
				<!-- if there is a button in form, it will close the modal -->
				<button class="btn">Close</button>
			</form>
		</div>
	</div>
</dialog>
