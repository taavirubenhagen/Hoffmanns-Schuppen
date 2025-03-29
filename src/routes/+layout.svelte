<script lang="ts">
    import { page, navigating } from '$app/stores';
    import "$style";
    import { Section, LargeHeading, SmallParagraph, RawButton, SmallHeading, InlineButton } from "$design";
    import { Button, IconButton } from "$design/hoffmanns";


    let windowHeight: number;

    let menuExpanded = false;
</script>


<svelte:window bind:innerHeight={windowHeight}/>




<main
    class='relative h-screen overflow-x-hidden bg-white text-onBackground'
>
    <header class='fixed z-40 w-full h-16 {menuExpanded ? 'bg-background' : 'bg-primary'} px-8 md:px-16 flex justify-between items-center'>
        <IconButton inverted={!menuExpanded} name={menuExpanded ? 'close' : 'menu'} onClick={() => menuExpanded = !menuExpanded}/>
        <RawButton onClick={() => window.location.href = '/home'}>
            <div class='font-display {menuExpanded ? 'text-onBackground' : 'text-onPrimary'}'>
                <SmallParagraph>Hoffmann's Schuppen</SmallParagraph>
            </div>
        </RawButton>
        <!--<img src="/logos/logo_solid.png" alt="Logo" class="rounded-full h-10 bg-onPrimary">-->
        <IconButton inverted={!menuExpanded} name='instagram' onClick={() => window.location.href = 'https://instagram.com/hoffmanns.schuppen'}/>
    </header>
    <div
        class=
        'transition duration-long fixed z-30 {menuExpanded ? '-translate-x-0' : '-translate-x-full'}
        w-full h-full background p-8 md:p-16 pt-24 flex flex-col justify-between items-start'
    >
        <div class='flex flex-col items-start gap-4'>
            <!--['Investieren', '/investor-relations'],-->
            <!--['Über uns', '/ueber-uns'],-->
            {#each [
                ['Home', '/home'],
                ['Investieren', '/investor-relations'],
                ['Impressum', '/impressum'],
            ] as e}
                <RawButton onClick={() => window.location.href = e[1]}>
                    <SmallHeading>{e[0]}</SmallHeading>
                </RawButton>
            {/each}
        </div>
        <!--<div class='mt-32 w-full center_row text-center font-display'>
            <SmallParagraph>
                Technischer Verantwortlicher:
                <InlineButton openInNew onClick={() => window.location.href = 'https://instagram.com/taavirubenhagen'}>
                    Taavi Rübenhagen
                </InlineButton>
            </SmallParagraph>
        </div>-->
    </div>
    <slot/>
</main>