<script lang="ts">
import NavLink from "./NavLink.svelte";
</script>

<nav class="flex gap-4">
  <NavLink href="/" let:active>
    {@const activeClass = active ? '' : 'text-red-500'}
    <em class={activeClass}>this</em>
  </NavLink>

  <NavLink href="/jobs" let:active>
    {@const activeObjectClass = active ? '' : 'text-yellow-400'}
    <span class={activeObjectClass}>Job</span>

    {@const activeArrayClass = active ? '' : 'text-lime-400'}
    <span class={activeArrayClass}>[]</span>
  </NavLink>

  <NavLink href="/apps" let:active>
    {@const activeObjectClass = active ? '' : 'text-yellow-400'}
    <span class={activeObjectClass}>App</span>

    {@const activeArrayClass = active ? '' : 'text-lime-400'}
    <span class={activeArrayClass}>[]</span>
  </NavLink>

  <NavLink href="/contact" let:active>
    {@const activeThisClass = active ? '' : 'text-red-500'}
    <em class={activeThisClass}>this</em>

    {@const activeDotClass = active ? '' : 'text-violet-400'}
    <span class={activeDotClass}>.</span>

    {@const activeFunctionClass = active ? '' : 'text-sky-400'}
    <span class={activeFunctionClass}>contact</span>

    {@const activeParensClass = active ? '' : 'text-pink-400'}
    <span class={activeParensClass}>()</span>
  </NavLink>
</nav>
