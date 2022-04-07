<script lang="ts">
  export let count = 1;
</script>

<span>
  {#each Array(count) as _}
    &nbsp;
  {/each}
</span>
