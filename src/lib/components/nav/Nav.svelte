<script lang="ts">
	import NavLink from '$lib/components/nav/NavLink.svelte';
</script>

<nav class="flex gap-4">
	<NavLink href="/" title="Home" let:active>
		{@const activeClass = active ? '' : 'text-red-500'}
		<em class={activeClass}>this</em>
	</NavLink>

	<NavLink href="/about" title="About me" let:active>
		{@const activeDotClass = active ? '' : 'text-violet-400'}
		<span class={activeDotClass}>.</span>

		{@const activeFunctionClass = active ? '' : 'text-blue-400'}
		<span class={activeFunctionClass}>about</span>

		{@const activeParensClass = active ? '' : 'text-lime-400'}
		<span class={activeParensClass}>()</span>
	</NavLink>

	<NavLink href="/apps" title="Sample apps" let:active>
		{@const activeObjectClass = active ? '' : 'text-yellow-400'}
		<span class={activeObjectClass}>App</span>

		{@const activeArrayClass = active ? '' : 'text-lime-400'}
		<span class={activeArrayClass}>[]</span>
	</NavLink>

	<NavLink href="mailto:joshfullmer9@gmail.com" title="Contact me" external let:active>
		{@const activeDotClass = active ? '' : 'text-violet-400'}
		<span class={activeDotClass}>.</span>

		{@const activeFunctionClass = active ? '' : 'text-blue-400'}
		<span class={activeFunctionClass}>contact</span>

		{@const activeParensClass = active ? '' : 'text-lime-400'}
		<span class={activeParensClass}>()</span>
	</NavLink>
</nav>
