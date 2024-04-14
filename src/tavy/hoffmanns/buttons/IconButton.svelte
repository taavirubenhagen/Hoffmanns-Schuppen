<script lang="ts">
    import '$style';
    import {
        Icon,
        RawButton,
    } from '$tavy';

    export let inverted = false;
    export let name: string;
    export let onClick: any;
</script>


<RawButton onClick={onClick}>
    <Icon inverted={inverted} name={name}/>
</RawButton>