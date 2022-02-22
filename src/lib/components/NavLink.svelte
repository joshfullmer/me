<script lang="ts">
import { page } from '$app/stores'
export let href = ''

function isActive(href: string, path: string): boolean {
  if (href === '/') return path === '/'

  return path.includes(href)
}

$: active = isActive(href, $page.url.pathname)
$: activeClass = active
  ? 'text-gray-500 cursor-default hover:decoration-wavy hover:decoration-red-500'
  : 'hover:decoration-sky-400'
</script>

<a {href} class="flex {activeClass} transition-[text-decoration-color] duration-350 decoration-transparent hover:underline hover:underline-offset-4">
  <slot {active}/>
</a>
