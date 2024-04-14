<script lang="ts">
    import { page, navigating } from '$app/stores';
    import { cursorPosition, globalScrollY } from "$state";
    import "$style";
    import { Section, LargeHeading, Cursor } from "$tavy";
    import { Button } from "$tavy/hoffmanns";
  import Icon from '$tavy/main/icons/icon.svelte';


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
        <div class='w-1/3 flex'>
            <Icon inverted name='menu'/>
        </div>
        <img src="/logos/logo_solid.png" alt="Logo" class="rounded-full h-10 bg-onPrimary">
        <div class='w-1/3 flex justify-end'>
            <Button mini secondary onClick={() => {}}>
                Investieren
            </Button>
        </div>
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