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


<div style='font-family: "Roboto Slab"'>
    <Section className='bg-green-100 p-8 flex flex-col justify-between'>
        <div>
            <div style='font-family: "Roboto Serif"'>
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
        <div class='mb-0 w-full flex flex-col gap-4'>
            <!--TODO: PNG -> PDF-->
            <Button secondary download onClick={() => window.location.href = '/investor-relations/bedingungen/Bedingungen.pdf'}>
                Informationsblatt herunterladen
            </Button>
            <Button next onClick={() => alert('Bitte wende dich persönlich oder über IServ an unser Aktienteam')}>
                Jetzt kaufen
            </Button>
        </div>
    </Section>
</div>