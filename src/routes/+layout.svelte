<script lang="ts">
    import { page, navigating } from '$app/stores';
    import { cursorPosition, globalScrollY } from "$state";
    import "$style";
    import { Section, LargeHeading, Cursor } from "$tavy";
    import { Button } from "$tavy/hoffmanns";


    let windowHeight: number;

    const routes = $page.url.href.split('/').slice(3);
    const legalFooterVisible = !(
        routes.includes('hoffmanns-schuppen') ||
        routes.includes('website')
    );
</script>


<svelte:window bind:innerHeight={windowHeight}/>




<main
    on:mousemove={(event) => $cursorPosition = [event.clientX, event.clientY]}
    on:scroll={(event) => {
        scrollY = event?.currentTarget?.scrollTop;
        globalScrollY.set(event?.currentTarget?.scrollTop);
    }}
    class='relative h-screen overflow-x-hidden cursor-none bg-white text-onBackground'
>
    <Cursor/>
    <header class='fixed w-full h-16 bg-secondary px-8 md:px-16 flex justify-between items-center'>
        <img src="/logos/logo_solid.png" alt="Logo" class="rounded-full h-12 bg-onPrimary">
        <Button secondary onClick={() => {}}>
            Investieren
        </Button>
    </header>
    {#if $navigating}
        <Section>
            <LargeHeading>
                Loading ↺
            </LargeHeading>
        </Section>
    {:else}
        <!-- TODO: Add standard scrollbar effects -->
        <slot/>
    {/if}
</main>