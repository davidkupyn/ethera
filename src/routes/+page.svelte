<script lang="ts">
	import Button from '$lib/components/ui/button.svelte';
	import { ArrowRight } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { fade, scale } from 'svelte/transition';

	export let data;
	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

{#key mounted}
	<main class="flex min-h-[calc(100dvh)] justify-start items-center flex-col pt-24 md:pt-32 pb-9">
		<div class="p-6 flex flex-col justify-center items-center gap-8">
			<h1
				in:scale={{ duration: 500, start: 0.9 }}
				class="text-center font-display antialiased py-2.5 [text-wrap:balance] text-4xl md:text-6xl bg-clip-text transition-all duration-1000 text-transparent bg-gradient-to-t selection:text-base-950 dark:selection:text-base-50 from-base-950 via-base-900 to-base-700 md:to-base-500 dark:from-base-400 dark:via-base-100 tracking-tighter dark:to-base-50"
			>
				Accelerate Your
				<span
					class="bg-clip-text ml-1 text-transparent bg-gradient-to-t from-accent-focus to-accent selection:text-accent-500 dark:selection:text-accent-400"
				>
					Development.
				</span>
			</h1>
			<p
				in:fade={{ duration: 500 }}
				class="text-center text-sm [text-wrap:balance] bg-clip-text max-w-xl text-transparent transition-all delay-500 duration-1000 bg-gradient-to-t from-base-700 to-base-500 dark:from-base-400 dark:to-base-50 md:text-lg selection:text-foreground"
			>
				A dynamic stack blending Lucia, Drizzle ORM, Tailwind CSS, and SvelteKit for swift and
				elegant web development.
			</p>
			{#if !data.user_email}
				<span in:scale|global={{ duration: 500, opacity: 0.9, start: 0.8 }}>
					<Button size="lg" href="/sign-up">
						Get started
						<ArrowRight class="group-hover:translate-x-1 transition" size="16" />
					</Button>
				</span>
			{/if}
		</div>
	</main>
{/key}
