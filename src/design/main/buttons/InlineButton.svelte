<script lang="ts">
    import '$style';
    import { Icon, RawButton } from '$design';
    import { SmallParagraph } from '$design';

    export let invisible = false;
    export let inverted = false;
    export let openInNew = false;
    export let onClick: any;
</script>


<RawButton onClick={onClick}>
    <div class="inline-flex gap-2 {invisible ? '' : 'underline underline-offset-4'}">
        <SmallParagraph>
            <slot/>
        </SmallParagraph>
        {#if openInNew}
            <Icon inverted={inverted} name="open-in-new"/>
        {/if}
    </div>
</RawButton>