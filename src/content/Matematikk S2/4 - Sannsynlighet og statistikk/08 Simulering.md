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

## Simulering av normalfordeling

Vi kan også simulere normalfordelte data. Hvis vi vet at høyden til rekrutter er normalfordelt med $\mu = 180$ cm og $\sigma = 6$ cm, kan vi trekke tilfeldige "rekrutter".

```python
import random

# Simulere 5 rekrutter
for i in range(5):
    hoyde = random.gauss(180, 6)
    print(f"Rekrutt {i+1}: {hoyde:.1f} cm")
```

Dette er nyttig for å lage datasett vi kan trene på, eller for å undersøke egenskapene til et utvalg.

```formula
### Oppsummering - Simulering

1.  **Importer random:** `import random`
2.  **Lag en løkke:** `for i in range(antall):`
3.  **Utfør forsøket:** Bruk `randint`, `uniform` eller `choice`.
4.  **Telle opp:** Bruk `if`-setninger for å sjekke om utfallet var det du så etter.
5.  **Beregn frekvens:** $\frac{\text{Antall suksesser}}{\text{Totalt antall forsøk}}$.

Denne oppskriften kan brukes på nesten alle sannsynlighetsoppgaver!
```
