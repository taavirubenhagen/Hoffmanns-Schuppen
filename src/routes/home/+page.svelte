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
    
    const imagePaths = ["verkaufsstand.jpeg", "sek_2_team.jpg", "foto.jpg", "hq.jpg", "linus_mit_anteil.jpg", "flaschen.jpg"];
    let imageIndex = 0;
    
    let previousImage = () => imageIndex < 0 ? imageIndex = imagePaths.length - 1 : imageIndex--;
    let nextImage = () => imageIndex >= imagePaths.length - 1 ? imageIndex = 0 : imageIndex++;
</script>


<!--
    Da der QR-Code auf den Anteilsscheinen hierhin weiterleitet,
    muss die Investor-Relations-Seite immer sofort erreichbar sein
-->
<Section className='p-8 md:p-16 bg-background flex flex-col justify-end items-center md:text-center'>
    <!--<img
        src="/images/verkaufsstand.jpeg" alt="Team"
        class="fixed left-0 -top-16 w-screen h-screen brightness-50 object-cover"
    />-->
    <div class="relative p-6 w-full sm:w-2/3 md:w-1/2 lg:w-1/4">
        <img
            src="images/life/{imagePaths[imageIndex]}" alt="Team"
            class="aspect-square rounded-lg w-full brightness-90 object-cover"
        />
        <div class="absolute left-0 bottom-0 w-full flex justify-between">
            <Button secondary only previous onClick={previousImage}></Button>
            <Button secondary only next onClick={nextImage}></Button>
        </div>
    </div>
    <div class="h-16"></div>
    <div>
        <MediumHeading>
        Eine Schülerfirma in der Hand der Schüler*innen.
        <br/><br/>
        </MediumHeading>
        Zum Mitmachen schreibt uns gerne bei IServ oder Insta an.
    </div>
</Section>