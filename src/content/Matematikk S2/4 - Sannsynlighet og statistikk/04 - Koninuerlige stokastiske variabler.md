
# Kontinuerlige stokastiske variabler

Hittil har vi sett på **endelige** (diskrete) stokastiske variabler. Dette er variabler som har et bestemt antall mulige verdier, for eksempel antall øyne på en terning eller antall kron i et myntkast.

I mange situasjoner i virkeligheten kan vi ikke bruke endelige variabler. Vi må bruke variabler som kan ha *hvilken som helst verdi* innenfor et intervall. Disse kaller vi **kontinuerlige stokastiske variabler**.

Typiske eksempler er:

  * Vekten til en nyfødt baby (f.eks. 3,456 kg...)
  * Tiden mellom to oppringinger til et sentralbord (f.eks. 12,4 sekunder...)
  * Temperaturen på et gitt tidspunkt


## Sannsynlighet som integral

For en kontinuerlig stokastisk variabel $X$ er sannsynligheten for at variabelen havner i et bestemt område gitt ved **arealet under grafen** til tetthetsfunksjonen $f$.

Matematisk beregner vi areal under kurver ved hjelp av integralregning.

```formula
### Sannsynlighet i et intervall

La $X$ være en kontinuerlig stokastisk variabel med tetthetsfunksjon $f$.
Sannsynligheten for at $X$ ligger mellom $a$ og $b$ er:

$$
P(a \leq X \leq b) = \int_a^b f(x) \, dx
$$
```

> Summen av arealet under hele tetthetsfunksjonen må alltid være lik 1. Hvorfor?

### Punktsannsynlighet er null

Et viktig (og kanskje overraskende) trekk ved kontinuerlige variabler er at sannsynligheten for å treffe *nøyaktig* én bestemt verdi er null. Arealet av en strek (et intervall fra $a$ til $a$) er null.

$$
P(X = a) = \int_a^a f(x) \, dx = 0
$$

Derfor spiller det ingen rolle om vi bruker "mindre enn" ($<$) eller "mindre enn eller lik" ($\leq$) i ulikhetene:

$$
P(a \leq X \leq b) = P(a < X < b)
$$

> **Merk:** I praksis måler vi aldri helt nøyaktig. Hvis vi sier at en baby veier "nøyaktig 3,5 kg", mener vi egentlig at vekten ligger i avrundingsintervallet $[3,495, 3,505]$. Dette intervallet har et areal som er større enn 0.

-----

## Forventning og varians

For endelige variabler brukte vi summer ($\Sigma$) for å finne gjennomsnitt og spredning. For kontinuerlige variabler bytter vi ut summetegnet med integraltegnet ($\int$).

```formula
### Definisjoner

For en kontinuerlig stokastisk variabel $X$ med tetthetsfunksjon $f$ gjelder:

**Forventningsverdi:**
$$
\mu = E(X) = \int x \cdot f(x) \, dx
$$

**Varians:**
$$
\sigma^2 = \operatorname{Var}(X) = \int (x - \mu)^2 \cdot f(x) \, dx
$$

*Integralene tas over hele definisjonsmengden til $f$.*
```

> Regnereglene for forventning og varians (som lineær transformasjon) gjelder også for kontinuerlige variabler.


-----

## Eksponentialfordeling

En mye brukt modell for kontinuerlige variabler er **eksponentialfordelingen**. Denne brukes ofte til å modellere **tid**, for eksempel:

  * Tiden mellom to jordskjelv.
  * Levetiden til en lyspære.
  * Tiden mellom nerveimpulser i en nervefiber.

<!-- end list -->

```formula
### Eksponentialfordeling

En variabel $X$ er eksponentielt fordelt dersom tetthetsfunksjonen er gitt ved:

$$
f(x) = c \cdot e^{-cx}
$$

der $x \geq 0$ og $c > 0$ er en parameter.

For denne fordelingen gjelder:

$$
E(X) = \frac{1}{c} \qquad \text{og} \qquad \operatorname{Var}(X) = \frac{1}{c^2}
$$
```

-----

## Eksempel: Regne med tetthetsfunksjon

En kontinuerlig stokastisk variabel $X$ har tetthetsfunksjonen gitt ved:

$$
f(x) = 3e^{-3x} \quad \text{for } x \geq 0
$$

Dette er en eksponentialfordeling med $c=3$.

### a) Finn sannsynligheten for at $X$ er mellom 0,2 og 0,5

Vi bruker definisjonen på sannsynlighet som integral:

$$
P(0,2 \leq X \leq 0,5) = \int_{0,2}^{0,5} 3e^{-3x} \, dx
$$

Vi løser integralet:

$$
\begin{aligned}
&= \left[ -e^{-3x} \right]_{0,2}^{0,5} \\
&= (-e^{-3 \cdot 0,5}) - (-e^{-3 \cdot 0,2}) \\
&= -e^{-1,5} + e^{-0,6} \\
&\approx -0,223 + 0,549 \\
&= 0,326
\end{aligned}
$$

Det er altså **32,6 %** sannsynlighet for at verdien havner i dette intervallet.

### b) Finn forventning og standardavvik

Siden vi ser at dette er en eksponentialfordeling med $c=3$, kan vi bruke formlene direkte i stedet for å integrere manuelt.

**Forventningsverdi:**

$$
E(X) = \frac{1}{c} = \frac{1}{3}
$$

**Varians:**

$$
\operatorname{Var}(X) = \frac{1}{c^2} = \frac{1}{3^2} = \frac{1}{9}
$$

**Standardavvik:**

$$
\sigma = \sqrt{\operatorname{Var}(X)} = \sqrt{\frac{1}{9}} = \frac{1}{3}
$$

Dersom vi ikke husker formlene for eksponentialfordeling, eller funksjonen er en annen, må vi bruke de generelle integralformlene for $E(X)$ og $\operatorname{Var}(X)$.

-----

# Oppgaver
---
## Oppgave 1: Sannsynlighetstetthet og areal

En kontinuerlig stokastisk variabel $X$ har sannsynlighetstettheten $f(x)$ definert i intervallet $0 \leq x \leq 4$.

$$f(x)=kx^2$$


Utenfor dette intervallet er $f(x)=0$.


### a) Bestem konstanten $k$ slik at $f(x)$ er en gyldig sannsynlighetstetthet. 
(Husk at det totale arealet under grafen må være lik 1).

### b) Bestem sannsynligheten $P(1 \leq X \leq 3)$.


## Oppgave 2: Eksponentialfordeling og levetid

Levetiden $T$ (i år) til en bestemt type elektronisk komponent kan modelleres med en eksponentialfordeling med parameter $c=0,2$. Sannsynlighetstettheten er da gitt ved:
$$f(t)=0,2e^{-0,2t} \quad \text{for } t \geq 0$$

### a) Hva er forventet levetid $E(T)$ for en slik komponent?

### b) Hva er sannsynligheten for at en komponent svikter i løpet av de første 5 årene, det vil si $P(T \leq 5)$?

### c) Bestem variansen $\operatorname{Var}(T)$ for levetiden.

## Oppgave 3: Forventningsverdi
En kontinuerlig stokastisk variabel $Y$ har sannsynlighetstettheten $f(y)$ definert i intervallet $0 \leq y \leq 2$. Utenfor dette intervallet er $f(y)=0$.
$$f(y)=2-y$$

Merk: Sjekk gjerne først at dette er en gyldig tetthetsfunksjon ved å integrere over intervallet $[0,2]$.

### a) Bestem forventningsverdien $E(Y)$.

### b) Finn sannsynligheten for at $Y$ er større enn eller lik forventningsverdien, $P(Y \geq E(Y))$.

## Fasit

### Oppgave 1
**a)** $k = \frac{3}{64}$
**b)** $P(1 \leq X \leq 3) = \frac{13}{32} \approx 0,406$

---

### Oppgave 2
**a)** $E(T) = 5$ år
**b)** $P(T \leq 5) = 1 - e^{-1} \approx 0,632$
**c)** $\operatorname{Var}(T) = 25$

---

### Oppgave 3
**a)** $E(Y) = \frac{4}{3}$
**b)** $P(Y \geq E(Y)) = \frac{2}{9} \approx 0,222$