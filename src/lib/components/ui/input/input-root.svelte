<script lang="ts">
	import { scale } from 'svelte/transition';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { cn, uuid } from '$lib/helpers';
	import type { Action } from 'svelte/action';
	import Description from './input-description.svelte';
	import Error from './input-error.svelte';
	import Label from '../label.svelte';
	import { XCircle } from 'lucide-svelte';
	import Prefix from './input-prefix.svelte';
	import Suffix from './input-suffix.svelte';
	import { inputStyles, type InputEvents } from '.';
	import type { ExplicitBuilderReturn } from '@melt-ui/svelte/internal/helpers';

	type $$Props = HTMLInputAttributes & {
		use?: Action<HTMLElement, any> | ExplicitBuilderReturn<any, any, any, any>;
		description?: string;
		label?: string;
		error?: boolean | string;
	};
	type $$Events = InputEvents;

	let className: $$Props['class'] = undefined;
	export let value: $$Props['value'] = undefined;
	export let description: $$Props['description'] = undefined;
	export let label: $$Props['label'] = undefined;
	export let error: $$Props['error'] = undefined;
	export let required: $$Props['required'] = undefined;
	export let id: $$Props['id'] = uuid();
	export let use: Action<HTMLElement, any> | ExplicitBuilderReturn<any, any, any, any> = () => {};
	export { className as class };
</script>

<div>
	{#if label}
		<Label for={id} class="mb-1.5" {required}>
			{label}
		</Label>
	{/if}
	{#if description}
		<Description>
			{description}
		</Description>
	{/if}

	<slot {Description} />
	<div class={cn('relative group w-full')}>
		<input
			class={cn(inputStyles(), $$slots.prefix && 'pl-10', $$slots.suffix && 'pr-10', className)}
			id={label ? id : undefined}
			data-invalid={error || undefined}
			bind:value
			on:blur
			on:change
			on:click
			on:focus
			on:keydown
			on:keypress
			on:keyup
			on:mouseover
			on:mouseenter
			on:mouseleave
			on:paste
			on:input
			use:use
			{...$$restProps}
		/>
		{#if $$slots.prefix}
			<Prefix>
				<slot name="prefix" />
			</Prefix>
		{/if}
		{#if $$slots.suffix}
			<Suffix>
				<slot name="suffix" />
			</Suffix>
		{:else if error}
			<Suffix>
				<span transition:scale={{ start: 0.5, duration: 200 }}>
					<XCircle class="text-error" size="16" />
				</span>
			</Suffix>
		{/if}
	</div>
	{#if error !== '' && typeof error === 'string'}
		<Error>
			{error}
		</Error>
	{/if}
</div>
