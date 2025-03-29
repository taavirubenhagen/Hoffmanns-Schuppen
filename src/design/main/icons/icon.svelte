<script lang="ts">
    export let name: string;
    export let inverted = false;
    // Defaults to fit 'text-base'
    export let size = 16;

    const src = `/icons/${name}.svg`;
</script>


<img
    src={src}
    alt={name}
    class='{inverted ? 'invert' : ''}'
    style='height: {size / 16 * 1.25}rem;'
/>