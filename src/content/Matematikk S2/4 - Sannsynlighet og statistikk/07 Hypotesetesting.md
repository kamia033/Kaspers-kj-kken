# Hypotesetesting

I statistikk handler hypotesetesting om å bruke data fra en stikkprøve til å avgjøre om en påstand om en populasjon er sannsynlig eller ikke. Vi tester en "mistanke" mot den etablerte sannheten.

## Viktige begreper

For å gjennomføre en hypotesetest må vi først definere to hypoteser:

1.  **Nullhypotese ($H_0$):** Dette er "standard-tilstanden". Vi antar at det *ikke* er noen endring, effekt eller forskjell. Vi tror på denne inntil det motsatte er bevist.
    *   *Eksempel:* En mynt er rettferdig ($p = 0.5$).
2.  **Alternativ hypotese ($H_1$):** Dette er det vi prøver å bevise. Vi tror at noe har endret seg.
    *   *Eksempel:* Mynten er jukset med ($p > 0.5$).

### Signifikansnivå og P-verdi

Hvordan avgjør vi hvem som har rett? Vi ser på **sannsynligheten** for resultatet vårt dersom $H_0$ var sann.

*   **P-verdi:** Sannsynligheten for å observere det resultatet vi fikk (eller noe enda mer ekstremt), *gitt at nullhypotesen er sann*.
    *   Hvis p-verdien er **lav** (veldig usannsynlig), forkaster vi $H_0$ og tror på $H_1$.
    *   Hvis p-verdien er **høy** (ganske vanlig), beholder vi $H_0$.

*   **Signifikansnivå ($\alpha$):** Grensen vi setter for "lav sannsynlighet". Vanligvis er $\alpha = 0.05$ (5 %).
    *   Hvis $p < \alpha$: Forkast $H_0$ (Resultatet er **signifikant**).
    *   Hvis $p > \alpha$: Behold $H_0$ (Ikke grunnlag for å si at noe er endret).

---

## 1. Hypotesetesting i binomiske forsøk

Her tester vi om sannsynligheten $p$ i en binomisk modell ($X \sim B(n, p)$) har endret seg.

```formula
### Fremgangsmåte (Binomisk)

1. **Sett opp hypoteser:**
   $H_0: p = p_0$ (Ingen endring)
   $H_1: p > p_0$, $p < p_0$ eller $p \ne p_0$

2. **Anta at $H_0$ er sann:**
   Vi regner med $X \sim B(n, p_0)$.
   *   Hvis $np(1-p) \ge 5$: Bruk normaltilnærming med $\mu = np_0$ og $\sigma = \sqrt{np_0(1-p_0)}$.
   *   Hvis ikke: Bruk **eksakt binomisk fordeling** på kalkulator/GeoGebra.

3. **Beregn p-verdi:**
   Finn sannsynligheten for observasjonen din.
   Hvis du observerte $x$ suksesser og $H_1: p > p_0$, finn $P(X \ge x)$.

4. **Konklusjon:**
   Er $P(X \ge x) < \alpha$? I så fall har vi bevist $H_1$.
```

```example
### Eksempel: Jukseterning?

Du mistenker at en terning gir "sekser" oftere enn den skal.
Du kaster terningen $n=600$ ganger og får $X=120$ seksere.
Er dette nok til å si at terningen er jukset med? (Bruk $\alpha = 0.05$).

**Løsning:**

1.  **Hypoteser:**
    $H_0: p = 1/6$ (Terningen er rettferdig)
    $H_1: p > 1/6$ (Terningen gir for mange seksere)

2.  **Sjekk normaltilnærming:**
    Under $H_0$ er forventningen $\mu = 600 \cdot \frac{1}{6} = 100$.
    Standardavviket $\sigma = \sqrt{600 \cdot \frac{1}{6} \cdot \frac{5}{6}} = \sqrt{83.33} \approx 9.13$.

3.  **Beregn p-verdi:**
    Vi fikk $X=120$. Hvor sannsynlig er det å få 120 eller flere seksere hvis terningen er ærlig?
    Vi standardiserer:
    $$ Z = \frac{120 - 100}{9.13} = \frac{20}{9.13} \approx 2.19 $$
    
    Vi slår opp $Z=2.19$ i tabellen (eller bruker kalkulator) og finner $P(Z < 2.19) = 0.9857$.
    P-verdien er da halen til høyre:
    $$ P(X \ge 120) \approx 1 - 0.9857 = 0.0143 $$

4.  **Konklusjon:**
    $P = 0.0143$ (ca. 1,4 %).
    Dette er mindre enn signifikansnivået på 0,05.
    Hendingen er så usannsynlig at vi **forkaster $H_0$**. Vi har grunnlag for å si at terningen gir for mange seksere.



**Hvorfor forkaster vi $H_0$?:** Vi satte en grense: Hvis resultatet er så rart at det bare skjer 5 av 100 ganger med en ekte terning, så stoler vi ikke på den lenger. Resultatet vårt var enda rarere – det skjer bare 1,4 av 100 ganger. Derfor konkluderer vi med at det ikke er tilfeldig; terningen må være fikset.
```

---

## 2. Hypotesetesting av gjennomsnitt

Her tester vi om forventningsverdien $\mu$ i en populasjon har endret seg, basert på gjennomsnittet $\bar{X}$ i et utvalg.

```formula
### Fremgangsmåte (Gjennomsnitt)

1. **Hypoteser:**
   $H_0: \mu = \mu_0$
   $H_1: \mu \ne \mu_0$ (eller < / >)

2. **Anta at $H_0$ er sann:**
   Gjennomsnittet $\bar{X}$ er normalfordelt med:
   Forventning $\mu_0$ og standardavvik $\frac{\sigma}{\sqrt{n}}$.

3. **Testobservator (Z-test):**
   $$ Z = \frac{\bar{X} - \mu_0}{\frac{\sigma}{\sqrt{n}}} $$

4. **Konklusjon:**
   Finn p-verdi fra Z. Hvis p-verdi < $\alpha$, forkast $H_0$.
```

```example
### Eksempel: Potetgullposer

En fabrikk påstår at posene deres inneholder $\mu = 250$ g. Standardavviket er kjent til $\sigma = 10$ g.
Du mistenker at de fyller for lite. Du veier $n=50$ poser og finner et gjennomsnitt på $\bar{X} = 247$ g.
Gir dette grunnlag for å si at de jukser? ($\alpha = 0.05$).

**Løsning:**

1.  **Hypoteser:**
    $H_0: \mu = 250$ (De snakker sant)
    $H_1: \mu < 250$ (De fyller for lite)

2.  **Testobservator (Z):**
    $$ Z = \frac{247 - 250}{\frac{10}{\sqrt{50}}} = \frac{-3}{\frac{10}{7.07}} = \frac{-3}{1.41} \approx -2.13 $$

3.  **P-verdi:**
    Vi skal finne sannsynligheten for å få et så lavt gjennomsnitt.
    $P(Z < -2.13)$. Fra tabell: $0.0166$.

4.  **Konklusjon:**
    $P = 0.0166$ (ca. 1,7 %).
    Siden $0.0166 < 0.05$, **forkaster vi $H_0$**.
    Det er statistisk belegg for å hevde at fabrikken fyller for lite i posene.
```

---

## Oppgaver

### Del A: Binomiske forsøk

#### Oppgave 1: Myntkast 🌶️
Du kaster en mynt 100 ganger og får 62 kron. Du mistenker at mynten gir kron oftere enn mynt.
1. Sett opp $H_0$ og $H_1$.
2. Bruk normaltilnærming til å finne p-verdien.
3. Konkluder med 5 % signifikansnivå.

#### Oppgave 2: Spireevne 🌶️
En frøleverandør garanterer at spireevnen på en frøtype er 80 %. En gartner mistenker at spireevnen er lavere. Han sår 200 frø, og 150 av dem spirer.
1. Hva blir nullhypotesen og den alternative hypotesen?
2. Sjekk om vilkårene for normaltilnærming er oppfylt.
3. Gjennomfør hypotesetesten med 5 % signifikansnivå. Har gartneren rett?

#### Oppgave 3: Ny medisin 🌶️
En bestemt medisin gir bivirkninger hos 10 % av pasientene. Et legemiddelfirma utvikler en ny variant som skal gi færre bivirkninger. De tester medisinen på 500 pasienter, og 40 av dem får bivirkninger.
1. Sett opp hypotesene.
2. Finn p-verdien for testen.
3. Kan legemiddelfirmaet konkludere med at den nye medisinen gir færre bivirkninger? (Bruk $\alpha = 0.05$).

#### Oppgave 4: Valgresultat 🌶️
Ved forrige kommunevalg fikk parti A 20 % av stemmene. I en fersk meningsmåling med 1000 respondenter svarer 225 personer at de vil stemme på parti A. Partisekretæren jubler og mener de har hatt en fremgang.
1. Sett opp hypotesen til partisekretæren som $H_1$.
2. Er fremgangen statistisk signifikant på 5 %-nivå?
3. Hva hvis signifikansnivået var 1 %?

#### Oppgave 5: Kvalitetskontroll (Tosidig test) 🌶️🌶️
En maskin produserer deler hvor 5 % forventes å være defekte. Hvis andelen avviker fra dette (enten for høyt eller for lavt), må maskinen kalibreres. Et utvalg på 400 deler viser 32 defekte.
1. Her tester vi om $p \ne 0.05$. Hva blir $H_0$ og $H_1$?
2. Gjennomfør testen med $\alpha = 0.05$. Husk at siden hypotesen er tosidig ("avviker"), må signifikansnivået deles på to i hver hale (eller p-verdien dobles).
3. Må maskinen kalibreres?

#### Oppgave 6: Tankelesning? (Eksakt fordeling) 🌶️🌶️
En person hevder å være synsk og kan gjette fargen på kort (rød eller svart) uten å se dem. Av 20 kort gjetter personen riktig på 16 kort.
1. Sett opp hypoteser for at personen bare gjetter tilfeldig ($p=0.5$) mot at personen har evner ($p > 0.5$).
2. Sjekk kravet til normaltilnærming. Er vi i grenseland?
3. Bruk eksakt binomisk kalkulator (eller GeoGebra) til å finne sannsynligheten for å gjette riktig 16 eller flere ganger ved ren gjetning.
4. Er resultatet signifikant ($\alpha = 0.05$)?

---

### Del B: Gjennomsnitt

#### Oppgave 7: Reaksjonstid 🌶️🌶️
Gjennomsnittlig reaksjonstid for sjåfører antas å være $\mu = 0.8$ sekunder med $\sigma = 0.15$ sekunder.
En forsker hevder at eldre sjåfører reagerer tregere. Han tester 40 eldre sjåfører og finner et snitt på $\bar{X} = 0.85$ sekunder.
1. Sett opp hypotesene.
2. Gjennomfør testen med $\alpha = 0.05$. Har forskeren rett?
3. Ville konklusjonen blitt den samme med $\alpha = 0.01$?

---

## Fasit

**Oppgave 1 (Myntkast)**
1. $H_0: p = 0.5$, $H_1: p > 0.5$.
2. $\mu = 50$, $\sigma = 5$. $Z = \frac{62-50}{5} = 2.4$. $p = 1 - 0.9918 = 0.0082$.
3. $0.0082 < 0.05$. Forkast $H_0$.

**Oppgave 2 (Spireevne)**
1. $H_0: p=0.8$, $H_1: p<0.8$.
2. $np(1-p) = 200 \cdot 0.8 \cdot 0.2 = 32 > 5$. OK.
3. $\mu = 160$, $\sigma = \sqrt{32} \approx 5.66$. $Z = \frac{150-160}{5.66} \approx -1.77$.
   $p = P(Z < -1.77) = 0.0384$.
   $p < 0.05$, så vi forkaster $H_0$. Gartneren har rett.

**Oppgave 3 (Ny medisin)**
1. $H_0: p=0.1$, $H_1: p<0.1$.
2. $\mu = 50$, $\sigma = \sqrt{500 \cdot 0.1 \cdot 0.9} = \sqrt{45} \approx 6.71$.
   $Z = \frac{40-50}{6.71} \approx -1.49$.
   $p = P(Z < -1.49) = 0.0681$.
3. $p > 0.05$. Vi beholder $H_0$. Vi kan **ikke** konkludere med at medisinen virker bedre (resultatet er ikke signifikant).

**Oppgave 4 (Valgresultat)**
1. $H_1: p > 0.20$. ($H_0: p = 0.20$).
2. $\mu = 200$, $\sigma = \sqrt{1000 \cdot 0.2 \cdot 0.8} = \sqrt{160} \approx 12.65$.
   $Z = \frac{225 - 200}{12.65} \approx 1.98$.
   $p = P(Z > 1.98) = 1 - 0.9761 = 0.0239$.
   $p < 0.05$. Fremgangen er signifikant.
3. Hvis $\alpha = 0.01$: $0.0239 > 0.01$. Da ville vi ikke forkastet $H_0$.

**Oppgave 5 (Kvalitetskontroll)**
1. $H_0: p = 0.05$, $H_1: p \ne 0.05$.
2. $\mu = 20$, $\sigma = \sqrt{400 \cdot 0.05 \cdot 0.95} = \sqrt{19} \approx 4.36$.
   $Z = \frac{32 - 20}{4.36} \approx 2.75$.
   $P(Z > 2.75) = 1 - 0.9970 = 0.0030$.
   Siden testen er tosidig, er p-verdien $2 \cdot 0.0030 = 0.0060$.
3. $0.0060 < 0.05$. Vi forkaster $H_0$. Maskinen må kalibreres.

**Oppgave 6 (Tankelesning)**
1. $H_0: p=0.5$, $H_1: p>0.5$.
2. $np(1-p) = 20 \cdot 0.5 \cdot 0.5 = 5$. Det er akkurat på grensen, så eksakt beregning er tryggest.
3. Eksakt $P(X \ge 16)$ i $B(20, 0.5)$:
   $P(X=16)+...+P(X=20) \approx 0.0046 + 0.0011 + 0.0002 + 0.0000 + 0.0000 \approx 0.0059$.
4. $0.0059 < 0.05$. Resultatet er signifikant. Personen er enten ekstremt heldig, eller så...

**Oppgave 7 (Reaksjonstid)**
1. $H_0: \mu = 0.8$, $H_1: \mu > 0.8$ (Tregere betyr høyere tid).
2. $Z = \frac{0.85 - 0.80}{\frac{0.15}{\sqrt{40}}} = \frac{0.05}{0.0237} \approx 2.11$.
   $p = P(Z > 2.11) = 1 - 0.9826 = 0.0174$.
   Siden $0.0174 < 0.05$, forkaster vi $H_0$. Forskeren har rett på 5 %-nivå.
3. Med $\alpha = 0.01$ er kravet strengere. Siden $0.0174 > 0.01$, ville vi **ikke** forkastet $H_0$. Da ville vi ikke hatt sterke nok bevis.
