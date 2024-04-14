<script lang="ts">
    import '$style';
    import {
        SmallParagraph,
        Icon,
        RawButton,
    } from '$tavy';

    export let secondary = false;
    export let openInNew = false;
    export let next = false;
    export let download = false;
    export let onClick: any;
</script>


<RawButton onClick={onClick}>
    <div class=
        'rounded-lg h-12 px-4
        {secondary ? 'bg-green-300 text-black' : 'bg-green-900 text-white'}
        center_row font-body'
    >
        <SmallParagraph>
            <slot/>
            <div class='inline relative top-0.5'>
                {#if openInNew}
                    <Icon inverted={!secondary} name="open-in-new"/>
                {:else if next}
                    <Icon inverted={!secondary} name="arrow-forward"/>
                {:else if download}
                    <Icon inverted={!secondary} name="download"/>
                {/if}
            </div>
        </SmallParagraph>
    </div>
</RawButton>