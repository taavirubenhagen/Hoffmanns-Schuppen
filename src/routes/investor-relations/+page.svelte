<script lang="ts">
    import '$style';
    import {
        MediumHeading,
        Section,
    } from "$design";
  import SmallParagraph from '$design/main/text/paragraphs/SmallParagraph.svelte';
    import {
        Button,
        TextSection,
    } from '$design/hoffmanns';
</script>


<Section className='p-8 md:p-16 flex flex-col justify-between'>
    <div>
        <MediumHeading>
            Für eine Schülerfirma, die den Schülern gehört.
            <br/><br/>
        </MediumHeading>
        <SmallParagraph>
            Unsere Anteile beteiligen dich direkt am Erfolg von Hoffmann's Schuppen.
            Du erhälst Anspruch auf einen Anteil des Firmenkapitals und kannst dir
            die mit deinem Investment erzielten Gewinne jederzeit auszahlen lassen.
            Die genauen Konditionen findest du auf dem Informationsblatt;
            wende dich zum Kaufen am besten direkt an ein Mitglied.
        </SmallParagraph>
    </div>
    <div class='mb-8 w-full flex flex-col gap-4'>
        <Button secondary download onClick={() => window.location.href = '/anteile/Kursverlauf.pdf'}>
            Kursverlauf bewundern
        </Button>
        <Button download onClick={() => window.location.href = '/anteile/Bedingungen.pdf'}>
            Informationsblatt herunterladen
        </Button>
    </div>
</Section>