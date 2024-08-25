<script lang="ts">
    import '$style';
    import {
        MediumHeading,
        SmallParagraph,
        Section,
    } from "$design";
    import {
        Button,
        TextSection,
    } from '$design/hoffmanns';
</script>


<!--
    Da der QR-Code auf den Anteilsscheinen hierhin weiterleitet,
    muss die Investor-Relations-Seite immer sofort erreichbar sein
-->
<Section className='p-8 md:p-16 center_col'>
    <img
        src="/images/glueckliches_team.jpg" alt="Team"
        class="fixed min-h-screen brightness-50"
    />
    <div class='relative z-10 text-white'>
        <MediumHeading>
            Eine Schülerfirma in der Hand der Schüler.
            
            <br/><br/>
        </MediumHeading>
    </div>
    <div class='mb-8 w-full flex flex-col gap-4 md:items-center'>
        <Button next onClick={() => window.location.href = '/ueber-uns'}>
            Wer wir sind
        </Button>
    </div>
</Section>