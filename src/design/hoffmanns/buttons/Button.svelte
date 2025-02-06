<script lang="ts">
    import '$style';
    import {
        SmallParagraph,
        Icon,
        RawButton,
    } from '$design';

    export let mini = false;
    export let only = false;
    export let secondary = false;
    export let openInNew = false;
    export let previous = false;
    export let next = false;
    export let download = false;
    export let onClick: any;
</script>


<RawButton onClick={onClick}>
    <SmallParagraph>
        <div class=
            'rounded-lg {mini ? 'h-10' : 'h-12'} {only ? ( mini ? 'w-10' : 'w-12' ) : "px-4"}
            {secondary ? 'bg-green-300 text-black' : 'bg-primary text-white'}
            flex {only ? "justify-center" : "justify-between"} items-center font-display'
        >
            <slot/>&nbsp;&nbsp;
            <div class='inline relative {only ? "-left-0.5" : "top-0.5"}'>
                {#if openInNew}
                    <Icon inverted={!secondary} name="open-in-new"/>
                {:else if previous}
                    <Icon inverted={!secondary} name="arrow-back"/>
                {:else if next}
                    <Icon inverted={!secondary} name="arrow-forward"/>
                {:else if download}
                    <Icon inverted={!secondary} name="download"/>
                {/if}
            </div>
        </div>
    </SmallParagraph>
</RawButton>