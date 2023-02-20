<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.error?.message}</title>
</svelte:head>

<h1>{$page.error?.message}</h1>
