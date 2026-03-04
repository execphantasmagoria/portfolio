<script lang="ts">
	import './layout.css';
	import { Bolt, Info } from '@lucide/svelte';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();

</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="fixed inset-y-0 left-0 z-10 flex">
	<div class="flex flex-col w-15 pt-10 border-r bg-gray-50 transition-all duration-300 ease-in-out hover:w-48 hover:pt-20 group">
			<a
				href="/"
				rel=""
				class="flex items-center gap-4 px-4 py-3 text-gray-700 hover:bg-gray-200"
			>
				<span class="text-lg"><Bolt /></span>
				<span class="ml-2 text-sm opacity-0 transition-all duration-200 group-hover:opacity-100">
					Home
				</span>
			</a>

						<a
				href="/about"
				rel=""
				class="flex items-center gap-4 px-4 py-3 text-gray-700 hover:bg-gray-200"
			>
				<span class="text-lg"><Info /></span>
				<span class="ml-2 text-sm opacity-0 transition-all duration-200 group-hover:opacity-100">
					About
				</span>
			</a>
	</div>
</div>


<main class="ml-20 min-h-screen p-4">
	{@render children()}
</main>
