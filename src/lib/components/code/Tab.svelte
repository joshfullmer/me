<script lang="ts">
  import Space from './Space.svelte';

  export let count = 1;
  const SPACES_PER_TAB = 2;
</script>

{#each Array(count) as _}
  <Space count={SPACES_PER_TAB} />
{/each}
