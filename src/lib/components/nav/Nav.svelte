<script lang="ts">
	import NavLink from '$lib/components/nav/NavLink.svelte';
	import { cn } from '$lib/utils/cn.util';
</script>

<nav class="flex gap-4">
	<NavLink href="/" title="Home" let:active>
		<em class={cn(!active && 'text-red-500')}>this</em>
	</NavLink>

	<NavLink href="/about" title="About me" let:active>
		<span class={cn(!active && 'text-violet-400')}>.</span>

		<span class={cn(!active && 'text-blue-400')}>about</span>

		<span class={cn(!active && 'text-lime-400')}>()</span>
	</NavLink>

	<NavLink href="/apps" title="Sample apps" let:active>
		<span class={cn(!active && 'text-yellow-400')}>App</span>

		<span class={cn(!active && 'text-lime-400')}>[]</span>
	</NavLink>

	<NavLink href="mailto:joshfullmer9@gmail.com" title="Contact me" external let:active>
		<span class={cn(!active && 'text-violet-400')}>.</span>

		<span class={cn(!active && 'text-blue-400')}>contact</span>

		<span class={cn(!active && 'text-lime-400')}>()</span>
	</NavLink>
</nav>
