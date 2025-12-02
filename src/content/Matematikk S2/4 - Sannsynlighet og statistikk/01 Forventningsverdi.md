

# **Forventningsverdi – gjennomsnittet på lang sikt**

Når vi jobber med stokastiske variabler, ønsker vi ofte å vite hva som er *det typiske utfallet* av et forsøk eller et spill. Enkelte utfall kan være positive, andre negative, noen veldig store og andre små. For å oppsummere all denne informasjonen bruker vi **forventningsverdien**.

Forventningsverdien forteller oss hvilket gjennomsnittlig resultat vi kan forvente på lang sikt dersom vi gjentar forsøket veldig mange ganger.

---


```formula

### Definisjon: Forventningsverdi

La $X$ være en stokastisk variabel som kan ta verdiene

$k_1, k_2, \ldots, k_m$

med tilhørende sannsynligheter

$P(X = k_1), \ldots, P(X = k_m)$.

Da er forventningsverdien:

$$
\mu = E(X) = \sum_{j=1}^{m} k_j \cdot P(X = k_j)
$$
```

Forventningsverdien er altså *det gjennomsnittlige utfallet*, der hvert mulig resultat er multiplisert med sannsynligheten for å inntreffe.

---

## **Eksempel: Terningspill**

Du deltar i et terningspill hvor du kaster en terning. Innsatsen til spillet er 4kr. Gevinsten er gitt som følger:
- Seks øyne: 8 kr.
- Fire eller fem øyne: 5kr
- Ett, to eller tre øyne: ingen gevinst.

Vi ser på spillet som en stokastisk variabel $Y$ med tre mulige verdier:

| $k$      | -4              | 1               | 4               |
| ---------- | --------------- | --------------- | --------------- |
| $P(Y=k)$ | $\frac{3}{6}$ | $\frac{2}{6}$ | $\frac{1}{6}$ |

---

### **a) Finn forventningsverdien til $Y$**

Vi bruker formelen:

$$
E(Y) = -4 \cdot \frac{3}{6} + 1 \cdot \frac{2}{6} + 4 \cdot \frac{1}{6}
$$

Vi regner ut trinn for trinn:

$$
-4 \cdot \frac{3}{6} = -2
$$

$$
1 \cdot \frac{2}{6} = \frac{1}{3}
$$

$$
4 \cdot \frac{1}{6} = \frac{2}{3}
$$

Til sammen:

$$
E(Y) = -2 + \frac{1}{3} + \frac{2}{3} = -1
$$

**Forventningsverdien er altså $-1$.**

---

### **b) Praktisk tolkning**

Forventningsverdien $\mu = -1$ betyr ikke at vi kommer til å få $-1$ i gevinst hver gang vi spiller.

I stedet betyr det:

> Hvis vi spiller *veldig mange ganger*, vil gjennomsnittlig gevinst per spill nærme seg $-1$.

En forventningsverdi kan:

* være et tall som aldri faktisk inntreffer i et enkelt forsøk
* være negativ selv om alle enkelte utfall er positive (eller omvendt)
* brukes til å vurdere om et spill eller et valg er “gunstig” på lang sikt

---

# Forventningsverdi med binomisk fordeling

```formula

### Forventningsverdi for binomisk fordelte variabler

For stokastiske variabler som er binomisk fordelt, er forventningsverdien gitt ved
$$
E(X) = n \cdot p
$$
der $n$ er antall forsøk og $p$ er sannsynligheten for suksess i hvert forsøk.
```
---

## **Hvorfor er forventningsverdi nyttig?**

Forventningsverdi brukes i:

* spill og sannsynlighetsregning
* økonomiske modeller
* risikovurdering
* statistiske beregninger
* maskinlæring og sannsynlighetsbaserte algoritmer

Det er et av de viktigste begrepene i hele sannsynlighetsteorien.

