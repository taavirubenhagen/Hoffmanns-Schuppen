<script lang="ts">
    import '$style';

    export let className = '';

    let windowHeight: number;
</script>


<svelte:window bind:innerHeight={windowHeight}/>


<div class='{className} mt-16' style='min-height: calc({windowHeight}px - 4rem);'>
    <slot/>
</div>