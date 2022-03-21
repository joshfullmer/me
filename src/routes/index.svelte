<script lang="ts">
  import GithubLink from '$lib/components/GithubLink.svelte';
  import LinkedInLink from '$lib/components/LinkedInLink.svelte';
  import Space from '$lib/components/Space.svelte';
  import Tab from '$lib/components/Tab.svelte';
  import Tooltip from '$lib/components/Tooltip.svelte';
  import TwitterLink from '$lib/components/TwitterLink.svelte';

  type Skill = {
    name: string;
    years: number;
  };
  /** This is a developer */
  type Developer = {
    /** Short description of developer */
    description: string;
    /** List of skills and skill durations */
    skills: Skill[];
  };

  /** Test */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const joshFullmer: Developer = {
    description: 'User-focused frontend developer',
    skills: [{ name: 'Vue', years: 3 }]
  };
</script>

{#if false}
  <TwitterLink />
  <LinkedInLink />
  <GithubLink />
{/if}

<div class="flex flex-col justify-center h-full text-3xl leading-loose mx-auto">
  <div class="flex">
    <span class="italic text-purple-400">const</span>
    <Space />
    <Tooltip>
      <span slot="activator" class="text-blue-400">joshFullmer</span>

      <div class="flex">
        <span class="italic text-purple-400">const</span>
        <Space />
        <span class="text-blue-400">joshFullmer</span>
        <span class="italic text-cyan-400">:<Space />Developer</span>
      </div>

      <svelte:fragment slot="description"
        >Describes the developer named Josh Fullmer.</svelte:fragment
      >
    </Tooltip>
    <span class="italic text-cyan-400">:</span>
    <Space />
    <Tooltip>
      <span slot="activator" class="italic text-cyan-400">Developer</span>

      <div class="flex flex-col">
        <div class="flex">
          <span class="text-purple-400">type</span>
          <Space />
          <span>Developer</span>
          <Space />
          <span class="text-purple-400">=</span>
          <Space />
          <span class="text-lime-400">{'{'}</span>
        </div>

        <div class="flex">
          <Tab />
          <span class="italic">description</span>
          <span class="italic text-cyan-400">:</span>
          <Space />
          <span class="italic text-yellow-400">string</span>
          <span>;</span>
        </div>

        <div class="flex">
          <Tab />
          <span class="italic">skills</span>
          <span class="italic text-cyan-400">:</span>
          <Space />
          <span class="italic text-cyan-400">Skill</span>
          <span class="text-pink-400">[]</span>
          <span>;</span>
        </div>

        <div class="flex">
          <span class="text-lime-400">{'}'}</span>
        </div>
      </div>

      <div slot="description" class="flex flex-col">
        <span> A web developer is a programmer or a coder who... </span>
        <a
          href="https://en.wikipedia.org/wiki/Web_developer"
          target="_blank"
          class="self-start text-blue-500 hover:underline underline-blue-500">See more...</a
        >
      </div>
    </Tooltip>
    <Space />
    <span class="text-purple-400">=</span>
    <Space />
    <span class="text-lime-400">{'{'}</span>
  </div>

  <div class="flex">
    <Tab />
    <Tooltip>
      <span slot="activator" class="italic">description</span>

      <div class="flex">(property)<Space />description:<Space />string;</div>

      <svelte:fragment slot="description">Short description of developer</svelte:fragment>
    </Tooltip>
    <span>:</span>
    <Space />
    <span class="text-green-400">'</span>
    <span class="italic text-green-400">User-focused frontend developer</span>
    <span class="text-green-400">'</span>
    <span>,</span>
  </div>

  <div class="flex">
    <Tab />
    <Tooltip>
      <span slot="activator" class="italic">skills</span>
      <div class="flex">(property)<Space />skills:<Space />Skill[];</div>
      <svelte:fragment slot="description">List of skills and skill durations</svelte:fragment>
    </Tooltip>
    <span>:</span>
    <Space />
    <span class="text-pink-400">{'['}</span>
    <span class="text-pink-400">{']'}</span>
  </div>

  <div class="flex">
    <span class="text-lime-400">{'}'}</span>
  </div>
</div>
