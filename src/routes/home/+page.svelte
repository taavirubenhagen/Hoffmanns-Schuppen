<script lang="ts">
    import '$style';
    import {
        MediumHeading,
        SmallParagraph,
        Section,
    } from "$tavy";
    import {
        Button,
        TextSection,
    } from '$tavy/hoffmanns';
</script>


<!--
    Da der QR-Code auf den Anteilsscheinen hierhin weiterleitet,
    muss die Investor-Relations-Seite immer sofort erreichbar sein
-->
<Section className='p-8 md:p-16 center_col'>
    <img
        src="/images/anteilsausgabe.jpg" alt="Linus mit Anteil"
        class="fixed brightness-50"
    />
    <div class='relative z-10 text-white'>
        <MediumHeading>
            Eine Schülerfirma in der Hand der Schüler.
            <br/><br/>
        </MediumHeading>
    </div>
    <div class='mb-8 w-full flex flex-col gap-4 md:items-center'>
        <Button next onClick={() => window.location.href = '/investor-relations'}>
            Jetzt investieren
        </Button>
    </div>
</Section>