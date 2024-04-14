<script lang="ts">
    import '$style';
    import {
        LargeHeading, MediumHeading,
        Section,
    } from "$tavy";
  import SmallParagraph from '$tavy/main/text/paragraphs/SmallParagraph.svelte';
    import {
        Button,
        TextSection,
    } from '$tavy/hoffmanns';
</script>


<Section className='p-8 md:p-16 flex flex-col justify-between'>
    <div>
        <div class='font-display'>
            <MediumHeading>
                Für eine Schülerfirma, die den Schülern gehört.
                <br/><br/>
            </MediumHeading>
        </div>
        <SmallParagraph>
            Unsere Aktien beteiligen dich direkt am Erfolg von Hoffmann's Schuppen.
            Für 5€ erhälst du eine Aktie, die dir Anspruch auf einen Anteil des Firmenkapitals gibt.
            Du kannst deine Aktien jederzeit wieder an uns zurückgeben
            und bekommst die bis dahin mit deinem Investment erzielten Gewinne ausgezahlt.
            Die genauen Konditionen, die mit dem Aktienkauf einhergehen, findest du auf dem Informationsblatt.
        </SmallParagraph>
    </div>
    <div class='mb-8 w-full flex flex-col gap-4'>
        <!--TODO: PNG -> PDF-->
        <Button secondary download onClick={() => window.location.href = '/aktien/Bedingungen.pdf'}>
            Informationsblatt herunterladen
        </Button>
        <Button next onClick={() => alert('Bitte wende dich persönlich oder über IServ an unser Aktienteam.')}>
            Jetzt kaufen
        </Button>
    </div>
</Section>