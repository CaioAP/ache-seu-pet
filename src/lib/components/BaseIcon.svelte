<script lang="ts">
	export let path: string = '';
	export let size: number = 24;
	export let viewbox: string = '0 0 24 24';
	export let flip = 'none';
	export let rotate = 0;

	$: defaults = {
		size: 24,
		viewbox: '0 0 24 24'
	};
	$: sizeValue = size || defaults.size;
	$: viewboxValue = viewbox || defaults.viewbox;
	$: sx = ['both', 'horizontal'].includes(flip) ? '-1' : '1';
	$: sy = ['both', 'vertical'].includes(flip) ? '-1' : '1';
	$: r = isNaN(rotate) ? rotate : rotate + 'deg';
</script>

<svg
	width={sizeValue}
	height={sizeValue}
	viewBox={viewboxValue}
	style="--sx: {sx}; --sy: {sy}; --r: {r}"
	{...$$restProps}
>
	<path d={path} />
</svg>

<style>
	svg {
		transform: rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1));
	}

	path {
		fill: currentColor;
	}
</style>
