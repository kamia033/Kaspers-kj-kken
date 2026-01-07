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

```formula
### Binomisk tilnærming

Anta at $X$ er binomisk fordelt. Dersom $n$ er tilstrekkelig stor, er $X$ tilnærmet normalfordelt med forventningsverdi $np$ og standardavvik $\sqrt{np(1-p)}$.

$$ X \approx N(np, \sqrt{np(1-p)}) $$
```

### Eksempel: Defekte lyspærer

En fabrikk produserer lyspærer, og vi vet at 5 % av pærene er defekte. En butikk kjøper inn et parti på 1000 lyspærer. Vi lar $X$ være antall defekte pærer i partiet.

Vi har et binomisk forsøk med $n=1000$ og $p=0.05$.
Forventningsverdien og standardavviket er:
$$ \mu = 1000 \cdot 0.05 = 50 $$
$$ \sigma = \sqrt{1000 \cdot 0.05 \cdot 0.95} = \sqrt{47.5} \approx 6.89 $$

Vi bruker normaltilnærming for å finne sannsynligheten for at det er flere enn 60 defekte pærer, dvs. $P(X > 60)$.

Vi standardiserer variabelen:
$$ Z = \frac{60 - 50}{6.89} \approx 1.45 $$

$$ P(X > 60) \approx P(Z > 1.45) = 1 - P(Z \le 1.45) = 1 - 0.9265 = 0.0735 $$

Det er altså ca. 7.4 % sannsynlighet for at det er flere enn 60 defekte pærer.

---

## Oppgaver

### Oppgave 1: Sum av terninger 🌶️
Du kaster 50 terninger.
1. Finn forventet sum av antall øyne.
2. Finn standardavviket til summen (bruk at $\sigma \approx 1.71$ for én terning).
3. Bruk normalfordelingstilnærming til å finne sannsynligheten for at summen blir mindre enn 160.

### Oppgave 2: Sum av terninger (mange kast) (4.59) 🌶️
Anta at du kaster én terning 100 ganger. Hva er sannsynligheten for at summen av antall øyne blir:
1. Høyst 330
2. Minst 360

### Oppgave 3: Vektkontroll 🌶️🌶️
En produsent pakker poser med potetgull. Vekten av hver pose varierer litt, med forventning $\mu = 200$ gram og standardavvik $\sigma = 5$ gram. Vi antar at vektene er uavhengige, men vi vet ikke om de er normalfordelte.
En eske inneholder 40 poser.

1. Hva er forventet totalvekt for innholdet i esken?
2. Hva er standardavviket for totalvekten?
3. Hva er sannsynligheten for at totalvekten i esken er under 7950 gram?

### Oppgave 4: Gjennomsnittshøyde 🌶️🌶️
Høyden til en tilfeldig person i en befolkning har $\mu = 170$ cm og $\sigma = 10$ cm.
Vi plukker ut et tilfeldig utvalg på 36 personer og måler gjennomsnittshøyden deres $\bar{X}$.

1. Hva er forventningsverdien til gjennomsnittet $\bar{X}$? (Hint: $E(\bar{X}) = E(S/n) = \frac{1}{n}E(S)$)
2. Hva er standardavviket til gjennomsnittet $\bar{X}$? (Standardfeilen).
3. Hva er sannsynligheten for at gjennomsnittshøyden i utvalget er over 173 cm?

### Oppgave 5: Binomisk tilnærming - Terningkast  🌶️🌶️
Tenk deg at du kaster en terning 600 ganger.
1. Bestem sannsynligheten for at du får:
    a) Høyst 85 seksere
    b) Minst 115 seksere

### Oppgave 6: Binomisk tilnærming - Myntkast  🌶️🌶️
Tenk deg at du kaster et pengestykke 1200 ganger. La $X$ være antall mynt du får.
1. Bestem sannsynlighetene:
    a) $P(X \le 580)$
    b) $P(X \ge 620)$
    c) $P(590 \le X \le 610)$


### Oppgave 7: Frøspiring  🌶️🌶️
En bestemt type frø spirer med 70 % sannsynlighet.
På et gartneri sår de 1000 frø og ser om de spirer.
1. Bestem sannsynligheten for at:
    a) Høyst 670 frø vil spire
    b) Minst 725 frø vil spire
    c) Mellom 680 og 720 frø vil spire


### Oppgave 8: Meningsmåling 🌶️🌶️🌶️
Tenk deg at Venstre på et tidspunkt har oppslutning blant 4,2 % av velgerne. Et meningsmålingsinstitutt spør et tilfeldig utvalg på 1000 personer over 18 år hvilket parti de ville ha stemt på hvis det hadde vært stortingsvalg.

1. Bestem sannsynligheten for at oppslutningen om Venstre i meningsmålingen (antall velgere som svarer Venstre) blir:
   
a) Høyst 3,5 % (husk at $X$ er antall personer, så finn antallet først)

b) Minst 5,0 %

c) Mellom 3,8 % og 5,5 %


---

## Fasit

**Oppgave 1**
1. $E(S) = 50 \cdot 3.5 = 175$
2. $SD(S) = \sqrt{50} \cdot 1.71 \approx 7.07 \cdot 1.71 \approx 12.1$
3. $P(S < 160)$. $Z = \frac{160 - 175}{12.1} \approx -1.24$. Fra tabell: $P(Z < -1.24) \approx 0.1075$ (ca 10.8%).

**Oppgave 2**
$E(S) = 350, SD(S) \approx 10 \cdot 1.71 = 17.1$
1. $P(S \le 330) \Rightarrow Z = \frac{330-350}{17.1} \approx -1.17$. $P(Z \le -1.17) = 0.121$.
2. $P(S \ge 360) \Rightarrow Z = \frac{360-350}{17.1} \approx 0.585$. $P(Z \ge 0.585) = 1 - 0.722 = 0.278$.

**Oppgave 3**
1. $E(S) = 40 \cdot 200 = 8000$ gram.
2. $SD(S) = \sqrt{40} \cdot 5 \approx 6.32 \cdot 5 = 31.6$ gram.
3. $P(S < 7950)$. $Z = \frac{7950 - 8000}{31.6} \approx -1.58$. $P(Z < -1.58) \approx 0.057$ (5.7%).

**Oppgave 4**
1. $E(\bar{X}) = \mu = 170$ cm.
2. $SD(\bar{X}) = \frac{\sigma}{\sqrt{n}} = \frac{10}{\sqrt{36}} = \frac{10}{6} \approx 1.67$ cm.
3. $P(\bar{X} > 173)$. $Z = \frac{173 - 170}{1.67} \approx 1.80$. $P(Z > 1.80) = 1 - 0.9641 = 0.0359$ (ca 3.6%).

**Oppgave 5**
$X \sim B(600, 1/6)$. $\mu = 100, \sigma = \sqrt{600\cdot \frac{1}{6} \cdot \frac{5}{6}} = \sqrt{83.33} \approx 9.13$.
1. a) $P(X \le 85) \Rightarrow Z = \frac{85-100}{9.13} = -1.64$. $P=0.051$.
   b) $P(X \ge 115) \Rightarrow Z = \frac{115-100}{9.13} = 1.64$. $P=0.051$.

**Oppgave 6**
$X \sim B(1200, 0.5)$. $\mu = 600, \sigma = \sqrt{1200 \cdot 0.25} = \sqrt{300} \approx 17.32$.
1. a) $P(X \le 580) \Rightarrow Z = \frac{580-600}{17.32} = -1.15$. $P=0.125$.
   b) $P(X \ge 620) \Rightarrow Z = 1.15$. $P=0.125$.
   c) $P(590 \le X \le 610) \Rightarrow Z \in [-0.58, 0.58]$. $P = 0.719 - 0.281 = 0.438$.

**Oppgave 7**
$X \sim B(1000, 0.7)$. $\mu=700, \sigma=\sqrt{1000 \cdot 0.7 \cdot 0.3} = \sqrt{210} \approx 14.49$.
1. a) $Z=\frac{670-700}{14.49}=-2.07 \Rightarrow P=0.0192$.
   b) $Z=\frac{725-700}{14.49}=1.73 \Rightarrow P=0.0418$.
   c) $Z \in [-1.38, 1.38] \Rightarrow P=0.832$.

**Oppgave 8**
$X \sim B(1000, 0.042)$. $\mu = 42, \sigma = \sqrt{1000 \cdot 0.042 \cdot 0.958} \approx 6.34$.
*Merk: $3.5\%$ av 1000 er $X=35$. $5.0\%$ er $X=50$. $3.8\%$ er $38$, $5.5\%$ er $55$.*
1. a) $P(X \le 35) \Rightarrow Z = \frac{35-42}{6.34} \approx -1.10 \Rightarrow P=0.136$.
   b) $P(X \ge 50) \Rightarrow Z = \frac{50-42}{6.34} \approx 1.26 \Rightarrow P=0.104$.
   c) $P(38 \le X \le 55) \Rightarrow Z \in [-0.63, 2.05] \Rightarrow P=0.9798 - 0.2643 = 0.716$.




