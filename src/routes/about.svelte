<script>
  import Space from '$lib/components/code/Space.svelte';
  import Tab from '$lib/components/code/Tab.svelte';
  import DownloadIcon from '$lib/components/DownloadIcon.svelte';
  import GithubLink from '$lib/components/GithubLink.svelte';
  import LinkedInLink from '$lib/components/LinkedInLink.svelte';
  import Tooltip from '$lib/components/shared/Tooltip.svelte';
  import TwitterLink from '$lib/components/TwitterLink.svelte';
</script>

<div class="flex flex-col items-center mt-8 overflow-y-auto">
  <h2 class="flex mb-8 text-2xl">
    <Tooltip>
      <span slot="activator">joshFullmer</span>

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
    <span class="text-purple-400">.</span>
    <Tooltip>
      <span slot="activator" class="text-blue-400 italic">about</span>
      <div class="flex">
        (property)<Space />about:<Space />()<Space /><span class="text-purple-400 italic">=></span
        ><Space />string;
      </div>
      <svelte:fragment slot="description"
        >Returns summary of work experience and skills</svelte:fragment
      >
    </Tooltip>
    <span class="text-lime-400">()</span>
  </h2>

  <!-- Body -->
  <div class="flex flex-col max-w-[60%]">
    <!-- Buttons -->
    <div class="flex gap-2 items-center mb-8">
      <LinkedInLink />
      <GithubLink />
      <TwitterLink />
      <div class="flex items-center">
        <span class="text-gray-500">Download my</span><Space /><a
          href="josh-fullmer-resume.pdf"
          download
          class="inline-flex items-center gap-2 px-3 py-2 text-sky-400 ring-2 ring-sky-800 rounded hover:text-gray-300 hover:bg-gray-700 active:bg-gray-900"
        >
          <span>resume</span>
          <DownloadIcon />
        </a>
      </div>
    </div>

    <div class="flex leading-loose mb-8">
      I am a user-focused front-end web developer. I'm from Phoenix, AZ and live in Gulf Breeze, FL.
    </div>

    <h3 class="mb-4">
      <span class="text-sky-400">Technical Skills</span><Space /><span class="text-gray-500"
        >~years</span
      >
    </h3>

    <div class="flex flex-col flex-wrap leading-loose max-h-[175px] mb-8">
      <p>HTML<Space /><span class="text-gray-500">-<Space />5</span></p>
      <p>CSS<Space /><span class="text-gray-500">-<Space />5</span></p>
      <p>JavaScript<Space /><span class="text-gray-500">-<Space />5</span></p>
      <p>Vue<Space /><span class="text-gray-500">-<Space />3</span></p>
      <p>GraphQL<Space /><span class="text-gray-500">-<Space />3</span></p>
      <p>TypeScript<Space /><span class="text-gray-500">-<Space />3</span></p>
      <p>Express<Space /><span class="text-gray-500">-<Space />3</span></p>
      <p>Firebase<Space /><span class="text-gray-500">-<Space />3</span></p>
      <p>React<Space /><span class="text-gray-500">-<Space />1</span></p>
      <p>Python<Space /><span class="text-gray-500">-<Space />2</span></p>
    </div>

    <h3 class="mb-4 text-sky-400">Work Experience</h3>

    <div class="flex flex-col mb-8 leading-loose">
      <div class="flex flex-col mb-4">
        <span class="font-semibold">Software Engineer III</span>
        <span class="text-gray-500">@ Keap</span>
        <span class="text-gray-500">Apr 2019 - now</span>
      </div>
      <div class="flex flex-col mb-4">
        <span class="font-semibold">Data Engineer & Project Manager</span>
        <span class="text-gray-500">@ Keap</span>
        <span class="text-gray-500">June 2015 - Apr 2019</span>
      </div>
      <div class="flex flex-col mb-4">
        <span class="font-semibold">Technical Customer Support</span>
        <span class="text-gray-500">@ Keap</span>
        <span class="text-gray-500">Sept 2013 - June 2015</span>
      </div>
    </div>

    <h3 class="mb-4 text-sky-400">This site</h3>

    <div class="flex flex-col mb-20">
      <span class="mb-4">This site was lovingly built with:</span>

      <div class="flex flex-col flex-wrap max-h-[90px]">
        <span class="mx-4">SvelteKit</span>
        <span class="mx-4">TypeScript</span>
        <span class="mx-4">Tailwind CSS</span>
        <span class="mx-4">Vite</span>
        <span class="mx-4">pnpm</span>
        <span class="mx-4">Vercel</span>
      </div>
    </div>
  </div>
</div>
