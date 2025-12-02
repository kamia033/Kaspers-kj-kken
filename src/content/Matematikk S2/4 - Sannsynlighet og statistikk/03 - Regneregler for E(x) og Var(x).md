

# Forventning og variasjon



## Regneregler for forventning og varians




```formula

### Lineær transformasjon av én variabel

La $X$ være en stokastisk variabel, og la $a$ og $b$ være konstanter. Da gjelder:

$E(aX + b) = aE(X) + b$

og

$\operatorname{Var}(aX + b) = a^2\operatorname{Var}(X)$
```


> **Merk:** Konstanten $b$ påvirker ikke variansen.

---

```formula

### Sum av to variabler

For to stokastiske variabler $X$ og $Y$ gjelder:

$E(X + Y) = E(X) + E(Y)$

og, hvis $X$ og $Y$ er uavhengige:

$\operatorname{Var}(X + Y) = \operatorname{Var}(X) + \operatorname{Var}(Y)$
```


```formula
### Sum av flere variabler
For flere uavhengige variabler $X_1, X_2, \dots, X_n$ gjelder:

$$
 E\bigl(X_1 + \cdots + X_n\bigr) = E(X_1) + \cdots + E(X_n)
$$
og
$$
\mathrm{Var}\bigl(X_1 + \cdots + X_n\bigr) = \mathrm{Var}(X_1) + \cdots + \mathrm{Var}(X_n)
$$
```
---

## Eksempel 1: Vi kaster en terning tre ganger

Vi kaster en terning tre ganger. La $X_1$, $X_2$ og $X_3$ være øyne per kast. Vi finner først forventning og varians for ett enkelt kast.
Da har vi:
$$
E(X_i) = \frac{7}{2}
\qquad\text{og}\qquad
\operatorname{Var}(X_i) = \frac{35}{12}
$$

Vi lager den stokastiske variabelen $S$ som er summen av de tre kastene:
$$
S = X_1 + X_2 + X_3.
$$

### a) Finn forventningsverdi for $S$.

Siden forventningen er lineær:
$$
E(S) = E(X_1) + E(X_2) + E(X_3)
= 3\cdot\frac{7}{2}
= \frac{21}{2}
= 10{,}5.
$$

### b) Finn varians for $S$.

Fordi kastene er uavhengige:
$$
\operatorname{Var}(S)
= 3\cdot\frac{35}{12}
= \frac{105}{12}
= 8{,}75.
$$

---

## Eksempel 2: Rulett – gevinst og tap

Vi ser på et rulettspill med tallene 1–36 (0 regnes ikke med).
En spiller satser **10 euro** på tallene 1–6.
Hvis kula lander på ett av disse tallene, får hun **60 euro utbetalt**.
Ellers taper hun innsatsen sin.

La $X$ være en stokastisk variabel som beskriver om spilleren vinner eller taper:

| $X$ | Betydning        | Sannsynlighet   |
| --- | ---------------- | --------------- |
| $1$ | spilleren vinner | $\frac{6}{37}$  |
| $0$ | spilleren taper  | $\frac{31}{37}$ |

Nettogevinsten er definert som
$$
Y = 60X - 10.
$$

### a) Finn forventningsverdi for $Y$

Først regner vi ut forventningsverdien for $X$:
$$
E(X) = \frac{6}{37}.
$$

Deretter kan vi bruke den lineære sammenhengen for å finne forventningsverdien for $Y$:
$$
E(Y) = E(60X - 10)
= 60E(X) - 10
= 60\cdot\frac{6}{37} - 10
= \frac{360}{37} - 10
= -0{,}27\text{ euro}.
$$

Dette betyr at spilleren i gjennomsnitt taper 27 cent per spill.

---

### b) Finn varians for nettogevinsten $Y$

Vi ser igjen på den lineære sammenehengen:
$$
Y = 60X - 10,
$$

og bruker regelen for varians under skalering:

$$
\operatorname{Var}(Y) = 60^2\operatorname{Var}(X).
$$

Så for å finne $\operatorname{Var}(Y)$, må vi først finne $\operatorname{Var}(X)$. $\operatorname{Var}(X)$ er binomisk fordelt, siden det bare er to mulige utfall (vinne eller tape), og utfallet av et spill ikke påvirker utfallet av et annet. Variansen for en binomisk fordelt variabel er gitt ved formelen:


$$
\operatorname{Var}(X) = p(1-p)

$$
hvor $p$ er sannsynligheten for å vinne. Her er $p = \frac{6}{37}$, så vi får:
$$
\operatorname{Var}(X)
= \frac{6}{37}\left(1 - \frac{6}{37}\right)

= \frac{6}{37}\cdot\frac{31}{37}
= \frac{186}{1369}.
$$

Dermed:
$$
\operatorname{Var}(Y)
= 3600 \cdot \frac{186}{1369}
= \frac{669600}{1369}
\approx 489{,}12.
$$

Standardavviket blir
$$
\sigma_Y = \sqrt{489{,}12} \approx 22{,}12\text{ euro}.
$$

---
### c) Gi en praktisk tolkning av standardavviket

Selv om forventet tap per spill bare er **27 cent**, varierer de faktiske utfallene **svært mye** fra runde til runde:

* Ved tap: –10 euro
* Ved gevinst: +50 euro

Standardavviket på omtrent **22 euro** forteller at:

* Et *typisk* enkeltspill vil ligge rundt **20–50 euro fra gjennomsnittet**, altså svært langt fra det lille forventede tapet.
* Spillet har dermed **høy risiko per runde**, selv om det langsiktige tapet er lite når man snitter mange spill.

Kort sagt:

**Store svingninger per spill, lite forventet tap over tid.**
