<script lang="ts">
	import { page } from '$app/stores';
	export let href = '';
	export let title = '';

	function isActive(href: string, path: string): boolean {
		if (href === '/') return path === '/';

		return path.includes(href);
	}

	$: active = isActive(href, $page.url.pathname);
	$: activeClass = active
		? 'text-gray-500 cursor-default hover:decoration-wavy hover:decoration-red-500'
		: 'hover:decoration-sky-400';

	export let external = false;
	$: target = external ? '_blank' : undefined;
</script>

<a
	{href}
	{title}
	{target}
	class="flex {activeClass} decoration-transparent transition-[text-decoration-color] duration-500 hover:underline hover:underline-offset-4"
>
	<slot {active} />
</a>
