<script lang="ts">
    import { page, navigating } from '$app/stores';
    import { cursorPosition, globalScrollY } from "$state";
    import "$style";
    import { Section, LargeHeading, Cursor, SmallParagraph, RawButton, SmallHeading } from "$tavy";
    import { Button, IconButton } from "$tavy/hoffmanns";


    let windowHeight: number;

    let menuExpanded = false;
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
        <IconButton inverted name={menuExpanded ? 'close' : 'menu'} onClick={() => alert('Mehr Website-Inhalte folgen!')}/>
        <div class='font-display text-onPrimary'>
            <SmallParagraph>Hoffmann's Schuppen</SmallParagraph>
        </div>
        <!--<img src="/logos/logo_solid.png" alt="Logo" class="rounded-full h-10 bg-onPrimary">-->
        <IconButton inverted name='euro' onClick={() => window.location.href = '/investor-relations'}/>
    </header>
    <div
        class=
        'transition duration-long fixed z-30 {menuExpanded ? '-translate-x-0' : '-translate-x-full'}
        w-full h-full background p-8 pt-24 flex flex-col items-start gap-1'
    >
        {#each [
            ['Investieren', '/investor-relations'],
            ['Impressum', '/impressum'],
        ] as e}
            <RawButton onClick={() => window.location.href = e[1]}>
                <SmallHeading>{e[0]}</SmallHeading>
            </RawButton>
        {/each}
    </div>
    <slot/>
</main>