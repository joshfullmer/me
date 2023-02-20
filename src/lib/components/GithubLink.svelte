<script lang="ts">
	import GithubIcon from './GithubIcon.svelte';
	import IconLink from './IconLink.svelte';

	const href = 'https://github.com/joshfullmer';
</script>

<IconLink {href}>
	<GithubIcon />
</IconLink>
