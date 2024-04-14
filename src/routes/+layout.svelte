<script lang="ts">
    import { page, navigating } from '$app/stores';
    import { cursorPosition, globalScrollY } from "$state";
    import "$style";
    import { Section, LargeHeading, Cursor, SmallHeading } from "$tavy";
    import { Button, IconButton } from "$tavy/hoffmanns";
  import Icon from '$tavy/main/icons/icon.svelte';
  import SmallParagraph from '$tavy/main/text/paragraphs/SmallParagraph.svelte';


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
        <IconButton inverted name='menu' onClick={() => alert('Mehr Website-Inhalte folgen!')}/>
        <div class='font-display text-onPrimary'>
            <SmallParagraph>Hoffmann's Schuppen</SmallParagraph>
        </div>
        <!--<img src="/logos/logo_solid.png" alt="Logo" class="rounded-full h-10 bg-onPrimary">-->
        <IconButton inverted name='euro' onClick={() => window.location.href = '/investor-relations'}/>
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