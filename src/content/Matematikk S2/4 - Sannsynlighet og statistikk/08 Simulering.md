# Simulering

Simulering av stokastiske forsøk handler om å bruke programmering til å utføre et tilfeldig forsøk veldig mange ganger. Dette lar oss estimere sannsynligheter som kanskje er vanskelige å regne ut for hånd, eller bekrefte teoretiske beregninger.

Dette prinsippet hviler på **De store talls lov**, som sier at hvis vi gjentar et forsøk mange nok ganger, vil den *relative frekvensen* nærme seg den *teoretiske sannsynligheten*.

## Python-modulen `random`

Python har et innebygd bibliotek som heter `random` for å generere tilfeldige tall.

De mest brukte funksjonene er:

*   `random.randint(a, b)`: Trekker et tilfeldig **heltall** fra og med `a` til og med `b`.
    *   *Eksempel:* `random.randint(1, 6)` simulerer et terningkast.
*   `random.uniform(a, b)`: Trekker et tilfeldig **desimaltall** mellom `a` og `b`.
    *   *Eksempel:* `random.uniform(0, 10)` kan være lengden på en fisk.
*   `random.choice(liste)`: Velger et tilfeldig element fra en liste.
    *   *Eksempel:* `random.choice(["Kron", "Mynt"])`.
*   `random.random()`: Trekker et desimaltall mellom 0 og 1.

```python
import random

terning = random.randint(1, 6)
print(f"Du fikk: {terning}")
```

---

## Simulering av myntkast

La oss si at vi vil sjekke om en mynt er rettferdig. Vi vet at sannsynligheten for "Kron" skal være $0.5$. La oss simulere 10 000 kast.

````example
### Eksempel 1: Myntkast

Vi lar datamaskinen "kaste" mynten 10 000 ganger. Vi teller opp hvor mange ganger vi får Kron.

```python
import random

antall_kast = 10000
antall_kron = 0

for i in range(antall_kast):
    # Vi kan si at 1 betyr Kron, og 2 betyr Mynt
    kast = random.randint(1, 2)
    
    if kast == 1:
        antall_kron += 1

andel_kron = antall_kron / antall_kast

print(f"Antall kast: {antall_kast}")
print(f"Antall kron: {antall_kron}")
print(f"Relativ frekvens: {andel_kron}")
```

Kjører du denne koden, vil du se at `andel_kron` legger seg veldig nær $0.5$.
````

---

## Kast med to terninger

Hva er sannsynligheten for at summen av øynene på to terninger blir 12?
Teoretisk vet vi at det bare er én kombinasjon (6 + 6) av 36 mulige utfall.
$$P(\text{Sum} = 12) = \frac{1}{36} \approx 0.0277$$

La oss simulere dette!

````example
### Eksempel 2: To terninger

Vi kaster to terninger 100 000 ganger og sjekker hvor ofte summen blir 12.

```python
import random

antall_forsok = 100000
suksesser = 0

for i in range(antall_forsok):
    t1 = random.randint(1, 6)
    t2 = random.randint(1, 6)
    
    if t1 + t2 == 12:
        suksesser += 1

sannsynlighet = suksesser / antall_forsok
print(f"Estimert sannsynlighet: {sannsynlighet:.4f}")
print(f"Teoretisk sannsynlighet: {1/36:.4f}")
```

Hvis du øker `antall_forsok`, vil estimatet bli mer og mer nøyaktig (Takket være De store talls lov).
````

---

## Simulering av binomiske forsøk

Et binomisk forsøk består av $n$ uavhengige delforsøk hvor sannsynligheten for suksess $p$ er den samme hver gang. Vi kan simulere dette ved å kjøre en løkke inni en løkke, men ofte er det enklere å tenke på hvert delforsøk for seg.

Datamaskinen vet ikke hva "binomisk" er, men vi kan lære den det ved å simulere ett og ett utfall.

````example
### Eksempel 3: Gjette på prøve

Tenk deg en flervalgsprøve med 10 spørsmål ($n=10$). Hvert spørsmål har 4 svaralternativer, hvorav ett er riktig ($p=0.25$). Du må ha minst 6 rette for å bestå. Hva er sannsynligheten for å bestå hvis du gjetter helt tilfeldig?

Her simulerer vi prøven 100 000 ganger. I hver prøve trekker vi 10 tilfeldige tall for å sjekke om vi svarer rett.

```python
import random

antall_simuleringer = 100000
bestatt = 0

for i in range(antall_simuleringer):
    poeng = 0
    # Simulerer en prøve med 10 spørsmål
    for sporsmal in range(10):
        # random.random() gir et tall mellom 0 og 1.
        # Hvis tallet er mindre enn 0.25, sier vi at vi gjettet riktig.
        if random.random() < 0.25:
            poeng += 1
    
    # Sjekker om prøven er bestått (minst 6 poeng)
    if poeng >= 6:
        bestatt += 1

sannsynlighet = bestatt / antall_simuleringer
print(f"Sannsynlighet for å bestå: {sannsynlighet:.4f}")
```

Kjører du denne, vil du se at sjansen for å bestå ved ren gjetting er veldig liten (under $2\%$).
````

---

## Simulering av normalfordeling

Vi kan også simulere normalfordelte data ved hjelp av funksjonen `random.gauss(mu, sigma)`. Her må vi oppgi forventningsverdi ($\mu$) og standardavvik ($\sigma$).

Dette er spesielt nyttig for å finne sannsynligheter i normalfordelinger uten å måtte bruke Z-tabell eller integralregning.

````example
### Eksempel 4: Rekrutthøyder

Anta at høyden til rekrutter er normalfordelt med $\mu = 180$ cm og $\sigma = 6$ cm. Hva er sannsynligheten for at en tilfeldig valgt rekrutt er høyere enn 190 cm?

```python
import random

antall_forsok = 100000
hoye_rekrutter = 0

mu = 180
sigma = 6

for i in range(antall_forsok):
    # Trekker en tilfeldig høyde fra normalfordelingen
    hoyde = random.gauss(mu, sigma)
    
    if hoyde > 190:
        hoye_rekrutter += 1

sannsynlighet = hoye_rekrutter / antall_forsok
print(f"Sannsynlighet for høyde > 190 cm: {sannsynlighet:.4f}")
```
````

### Hvorfor simulere normalfordeling?

Selv om vi kan regne ut dette eksakt, lar simulering oss svare på mer kompliserte spørsmål enkelt. For eksempel: "Hva er sannsynligheten for at gjennomsnittshøyden av 10 rekrutter er over 185 cm?". Dette krever mer avansert matematikk å regne ut for hånd (Sentralgrensesetningen), men i programmering er det bare å legge til en liten løkke som trekker 10 stykker og regner snittet.

```formula
### Oppsummering - Simulering

1.  **Importer random:** `import random`
2.  **Definer modellen:** Bestem deg for `randint` (terning), `random < p` (binomisk) eller `gauss` (normal).
3.  **Lag en løkke:** `for i in range(mange_ganger):`
4.  **Utfør forsøket:** Simuler ett "scenario" (ett terningkast, én prøve, én person).
5.  **Telle opp:** Sjekk om resultatet oppfylte kravet ditt, og øk telleren.
6.  **Beregn relativ frekvens:** $\frac{\text{Antall gunstige}}{\text{Antall simuleringer}}$.

Denne oppskriften kan brukes på nesten alle sannsynlighetsoppgaver i S2!
```

---

## Oppgaver

### Oppgave 1: Yatzy
I spillet Yatzy kaster man 5 terninger. "Yatzy" betyr at alle 5 terningene viser samme antall øyne (f.eks. fem 6-ere).
Lag et program som simulerer 100 000 kast med 5 terninger, og beregner sannsynligheten for å få Yatzy på ett kast.

*Hint: Du kan lage en liste med 5 terninger, f.eks. `[random.randint(1, 6) for _ in range(5)]`, og sjekke om alle er like.*

### Oppgave 2: Straffespark (Binomisk)
En fotballspiller scorer mål på 80 % av straffesparkene sine ($p=0.8$).
Bruk simulering til å finne sannsynligheten for at spilleren scorer på **minst 9 av 10** straffespark.

### Oppgave 3: Lakseoppdrett (Normalfordeling)
Vekten på laks i et oppdrettsanlegg er normalfordelt med forventningsverdi $\mu = 4.5$ kg og standardavvik $\sigma = 0.8$ kg.
Simuler en trekning av 50 000 laks.
a) Finn sannsynligheten for at en tilfeldig laks veier mer enn 6 kg.
b) Finn sannsynligheten for at en tilfeldig laks veier mellom 4 kg og 5 kg.

<details>
<summary>Fasit</summary>

*   **Oppgave 1:** $P(\text{Yatzy}) \approx 0.00077$ (Teoretisk: $\frac{1}{1296}$)
*   **Oppgave 2:** $P(X \geq 9) \approx 0.376$ ($37.6 \ \%$)
*   **Oppgave 3a:** $P(X > 6) \approx 0.030$ ($3.0 \ \%$)
*   **Oppgave 3b:** $P(4 < X < 5) \approx 0.468$ ($46.8 \ \%$)

</details>

