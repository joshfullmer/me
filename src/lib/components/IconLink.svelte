<script lang="ts">
	export let href: string;
</script>

<a {href} target="_blank" rel="noreferrer" class="duration-350 h-7 w-7 text-sky-500 transition hover:text-current">
	<slot />
</a>
