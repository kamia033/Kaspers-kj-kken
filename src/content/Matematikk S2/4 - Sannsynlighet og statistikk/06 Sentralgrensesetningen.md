# Sentralgrensesetningen

Hvorfor er normalfordelingen så viktig? Hvorfor ser vi den overalt i naturen? Svaret ligger i **Sentralgrensesetningen** (Central Limit Theorem).

Dette er kanskje det viktigste resultatet i hele statistikken. Kort fortalt sier den at hvis du summerer opp mange uavhengige tilfeldige variabler, vil summen (og gjennomsnittet) bli normalfordelt – nesten uansett hvilken fordeling variablene hadde opprinnelig!

## Hva sier setningen?

Anta at vi har $n$ uavhengige stokastiske variabler $X_1, X_2, ..., X_n$ som alle har samme forventningsverdi $\mu$ og samme standardavvik $\sigma$.

Vi ser på summen av disse variablene:
$$ S = X_1 + X_2 + ... + X_n $$

Fra regnereglene for forventning og varians vet vi allerede at:
*   $E(S) = n \cdot \mu$
*   $Var(S) = n \cdot \sigma^2 \Rightarrow SD(S) = \sqrt{n} \cdot \sigma$

```formula
### Sentralgrensesetningen

Vi lar $S = X_1 + X_2 + ... + X_n$. Når $n$ blir stor nok, vil fordelingen
til summen $S$ være tilnærmet **normalfordelt** 
med forventningsverdi $n\mu$ og standardavvik $\sqrt{n}\sigma$.

$$ S \approx N(n\mu, \sqrt{n}\sigma) $$

Dette gjelder selv om $X$-ene selv *ikke* er normalfordelte.
```

### Hvor stor må $n$ være?
En tommelfingerregel er at tilnærmingen er god nok når $n \ge 30$. Hvis den opprinnelige fordelingen ligner litt på en normalfordeling (er symmetrisk og fin), kan $n$ være mye mindre.

---

## Eksempel: Terningkast

Kast med én terning er uniformt fordelt. Sannsynligheten for 1, 2, ..., 6 er like stor ($1/6$). Dette ligner ikke på en bjellekurve i det hele tatt.

Men hva skjer hvis vi kaster 100 terninger og ser på summen av øynene?

For én terning har vi:
*   $\mu = 3.5$
*   $\sigma \approx 1.71$

For summen av $n=100$ terninger får vi ifølge sentralgrensesetningen:
*   Forventet sum: $E(S) = 100 \cdot 3.5 = 350$
*   Standardavvik for sum: $SD(S) = \sqrt{100} \cdot 1.71 = 10 \cdot 1.71 = 17.1$

Summen av 100 terninger vil være tilnærmet normalfordelt $N(350, 17.1)$.

Dette gjør at vi kan regne ut sannsynligheter, f.eks. "Hva er sannsynligheten for at summen blir over 370?", ved å bruke normalfordelingstabellen, selv om det egentlig handler om terninger!

---

## Oppgaver

### Oppgave 1: Sum av terninger 🌶️
Du kaster 50 terninger.
1. Finn forventet sum av antall øyne.
2. Finn standardavviket til summen (bruk at $\sigma \approx 1.71$ for én terning).
3. Bruk normalfordelingstilnærming til å finne sannsynligheten for at summen blir mindre enn 160.

### Oppgave 2: Vektkontroll 🌶️🌶️
En produsent pakker poser med potetgull. Vekten av hver pose varierer litt, med forventning $\mu = 200$ gram og standardavvik $\sigma = 5$ gram. Vi antar at vektene er uavhengige, men vi vet ikke om de er normalfordelte.
En eske inneholder 40 poser.

1. Hva er forventet totalvekt for innholdet i esken?
2. Hva er standardavviket for totalvekten?
3. Hva er sannsynligheten for at totalvekten i esken er under 7950 gram?

### Oppgave 3: Gjennomsnittshøyde 🌶️🌶️
Høyden til en tilfeldig person i en befolkning har $\mu = 170$ cm og $\sigma = 10$ cm.
Vi plukker ut et tilfeldig utvalg på 36 personer og måler gjennomsnittshøyden deres $\bar{X}$.

1. Hva er forventningsverdien til gjennomsnittet $\bar{X}$? (Hint: $E(\bar{X}) = E(S/n) = \frac{1}{n}E(S)$)
2. Hva er standardavviket til gjennomsnittet $\bar{X}$? (Standardfeilen).
3. Hva er sannsynligheten for at gjennomsnittshøyden i utvalget er over 173 cm?

---

## Fasit

**Oppgave 1**
1. $E(S) = 50 \cdot 3.5 = 175$
2. $SD(S) = \sqrt{50} \cdot 1.71 \approx 7.07 \cdot 1.71 \approx 12.1$
3. $P(S < 160)$. $Z = \frac{160 - 175}{12.1} \approx -1.24$. Fra tabell: $P(Z < -1.24) \approx 0.1075$ (ca 10.8%).

**Oppgave 2**
1. $E(S) = 40 \cdot 200 = 8000$ gram.
2. $SD(S) = \sqrt{40} \cdot 5 \approx 6.32 \cdot 5 = 31.6$ gram.
3. $P(S < 7950)$. $Z = \frac{7950 - 8000}{31.6} \approx -1.58$. $P(Z < -1.58) \approx 0.057$ (5.7%).

**Oppgave 3**
1. $E(\bar{X}) = \mu = 170$ cm.
2. $SD(\bar{X}) = \frac{\sigma}{\sqrt{n}} = \frac{10}{\sqrt{36}} = \frac{10}{6} \approx 1.67$ cm.
3. $P(\bar{X} > 173)$. $Z = \frac{173 - 170}{1.67} \approx 1.80$. $P(Z > 1.80) = 1 - 0.9641 = 0.0359$ (ca 3.6%).
