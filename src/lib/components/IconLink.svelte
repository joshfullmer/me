<script lang="ts">
  export let href: string;
</script>

<a {href} target="_blank" class="h-7 w-7 transition duration-350 text-sky-500 hover:text-current">
  <slot />
</a>
