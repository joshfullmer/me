<script lang="ts">
	import Icon from '$lib/components/kotoba/Icon.svelte';

	export let icon = '';
</script>

<button class="rounded-lg p-2 hover:bg-gray-600">
	<Icon {icon} />
</button>
