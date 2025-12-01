

# Regneregel 1: Summen av stokastiske variabler

Når vi jobber med stokastiske variabler, handler mange problemer om å finne en total: summen av flere kast, samlet kostnad, samlet vekt, eller hvor mange suksesser som skjer i en serie forsøk. Derfor er det viktig å forstå hvordan forventning og varians oppfører seg når vi legger sammen tilfeldige størrelser.

---

## Forventning av en sum

Forventningsverdien er det langsiktige gjennomsnittet. En sentral regel er at forventninger alltid kan legges sammen:

$$
E(X + Y) = E(X) + E(Y)
$$

Dette gjelder uansett om variablene er avhengige eller uavhengige.

---

## Varians av en sum

Variansen sier noe om hvor mye en stokastisk variabel varierer. Hvis to variabler er uavhengige, kan vi legge sammen variansene:

$$
\mathrm{Var}(X + Y) = \mathrm{Var}(X) + \mathrm{Var}(Y)
$$

Hvis variablene ikke er uavhengige, må man ta hensyn til hvordan de henger sammen. Men i de fleste skoleeksempler forutsetter vi uavhengighet.

---

## Summen av mange uavhengige variabler

For flere uavhengige variabler $X_1, X_2, \dots, X_n$ gjelder:

$$
E\bigl(X_1 + \cdots + X_n\bigr) = E(X_1) + \cdots + E(X_n)
$$

$$
\mathrm{Var}\bigl(X_1 + \cdots + X_n\bigr) = \mathrm{Var}(X_1) + \cdots + \mathrm{Var}(X_n)
$$

Dette er grunnlaget for binomiske fordelinger og andre modeller der mange like forsøk summeres.

---

# Eksempler

## Eksempel 1: Vekten av frukt

Anta at et eple har tilfeldig vekt $X$ og en pære har tilfeldig vekt $Y$. Vi vet at

$$
E(X) = 50\ \text{g}, \qquad E(Y) = 70\ \text{g}
$$

Forventet totalvekt er da:

$$
E(X + Y) = 50 + 70 = 120\ \text{g}
$$

Vi trenger ikke vite noe om fordelingen—det holder å legge sammen forventningsverdiene.

---

## Eksempel 2: To terninger

La $X$ og $Y$ være øynene på hver sin terning. Da er de uavhengige. For én terning vet vi:

$$
E(X) = \tfrac{7}{2}, \qquad \mathrm{Var}(X) = \tfrac{35}{12}
$$

Summen $Z = X + Y$ får da:

$$
E(Z) = 7
$$

$$
\mathrm{Var}(Z) = \tfrac{35}{6}
$$

---

# Regneregel 2: Lineære uttrykk $aX + b$

Noen ganger skalerer eller forskyver vi stokastiske variabler. Det kan være lønn, målinger, poengsummer eller andre mengder. Slike situasjoner beskrives av uttrykket $aX + b$.

For enhver stokastisk variabel $X$ og konstante tall $a$ og $b$ gjelder:

$$
E(aX + b) = aE(X) + b
$$

$$
\mathrm{Var}(aX + b) = a^2\,\mathrm{Var}(X)
$$

Å legge til en konstant endrer ikke variansen, mens skalering med $a$ både skalerer forventningen og gjør variansen større (med faktor $a^2$).

---

## Eksempel: Oles ukelønn

La $X$ være det tilfeldige antallet timer Ole jobber i løpet av en uke. Han tjener 50 kr per time, så lønnen uten tillegg er:

$$
Y = 50X
$$

Hvis Ole i tillegg får 100 kr fast hver uke, får vi:

$$
Z = 50X + 100
$$

Anta at

$$
E(X) = 10, \qquad \mathrm{Var}(X) = 4
$$

### Uten fast tillegg

$$
E(Y) = 50 \cdot 10 = 500
$$

$$
\mathrm{Var}(Y) = 50^2 \cdot 4 = 10000
$$

$$
SD(Y) = \sqrt{10000} = 100
$$

### Med fast tillegg

$$
E(Z) = 500 + 100 = 600
$$

$$
\mathrm{Var}(Z) = 10000
$$

Det faste tillegget påvirker bare gjennomsnittet, ikke variasjonen.

---

# Del 4: Binomisk fordeling

Når vi gjentar et forsøk som bare kan gi «suksess» eller «ikke suksess», kan ett forsøk beskrives som en Bernoulli-variabel:

$$
P(F = 1) = p, \qquad P(F = 0) = 1 - p
$$

$$
E(F) = p, \qquad \mathrm{Var}(F) = p(1 - p)
$$

Hvis vi gjør $n$ slike uavhengige forsøk, blir summen

$$
X = F_1 + \cdots + F_n
$$

binomisk fordelt, og vi får:

$$
E(X) = np
$$

$$
\mathrm{Var}(X) = np(1 - p)
$$

$$
SD(X) = \sqrt{np(1 - p)}
$$

---

## Eksempel: Spiring av frø

Et frø spirer med sannsynlighet $p = 0.9$. Vi planter 200 frø.

$$
E(X) = 200 \cdot 0.9 = 180
$$

$$
\mathrm{Var}(X) = 200 \cdot 0.9 \cdot 0.1 = 18
$$

$$
SD(X) = \sqrt{18} \approx 4.24
$$

Vi kan dermed forvente omtrent 180 spirte frø, med en vanlig variasjon rundt 4 frø.

---

# Oppgaver

### Oppgave 1: Sum av terningkast

Du kaster en vanlig terning fire ganger. La $S$ være summen av de fire kastene.

1. Finn $E(S)$.
2. Finn $Var(S)$.
3. Hva forteller standardavviket om hvor mye summen vanligvis varierer?
4. Forklar hvorfor variansen øker når vi kaster flere ganger.

**Fasit til del 1–2:**

$$
E(S) = 14, \qquad Var(S) = \frac{35}{3}
$$

---

### Oppgave 2: To mynter

Du kaster to uavhengige mynter. Krone gir verdien 1, mynt gir verdien 0. La $X$ og $Y$ være utfallet av hvert kast, og sett $Z = X + Y$.

1. Finn $E(X)$ og $Var(X)$.
2. Finn $E(Z)$ og $Var(Z)$.
3. Finn $P(Z = 2)$.
4. Finn $P(Z = 0)$.

**Fasit til del 1–2:**

$$
E(Z) = 1, \qquad Var(Z) = \tfrac12
$$

---

### Oppgave 3: Kantineforbruk

På en skole kjøper 400 elever mat uavhengig av hverandre. For hver elev er forbruket per uke en stokastisk variabel $X$ med

$$
E(X) = 900 \text{ kr}, \qquad SD(X) = 500 \text{ kr}
$$

La $S$ være totalforbruket.

1. Finn $E(S)$.
2. Finn $Var(S)$ og $SD(S)$.
3. Hva betyr standardavviket til $S$ i praksis?
4. Sammenlign variasjonen i én elevs forbruk med variasjonen i $S$.

**Fasit til del 1–2:**

$$
E(S) = 360000, \qquad SD(S) = 10000
$$

---

### Oppgave 4: Spiretest

Et frø spirer med sannsynlighet $p = 0.85$. Du planter 100 frø. La $X$ være antall frø som spirer.

1. Forklar hvorfor $X$ er binomisk fordelt.
2. Finn $E(X)$, $Var(X)$ og $SD(X)$.
3. Hvor mange spirer ville du «vanligvis» forvente?
4. Bruk standardavviket til å diskutere om det er sannsynlig at færre enn 75 frø spirer.

