

# **Varians – et mål på spredning**

Når vi jobber med stokastiske variabler, er *forventningsverdien* et viktig begrep: Den forteller oss hva vi i gjennomsnitt kan forvente oss av et utfall hvis vi gjentar et forsøk mange ganger.

Men forventningsverdien sier ikke noe om *hvor mye resultatene varierer*. To spill kan ha lik forventet gevinst, men svært ulik variasjon fra gang til gang.

Derfor trenger vi et mål på *spredning*. Det vanligste målet for dette er **variansen**.

---

## **Kvadratavvik**

For å kunne måle spredning ser vi på avstanden mellom et mulig utfall og forventningsverdien. Denne avstanden kalles *avviket*. For at positive og negative avvik ikke skal «kansellere ut» hverandre, kvadrerer vi avviket.

Kvadratavviket for et utfall med verdi $k$ og forventningsverdi $\mu$ er:

$$
(k - \mu)^2
$$

* $k$ = verdien av et mulig utfall
* $\mu$ = forventningsverdien

---

## **Definisjon: Varians**

```formula
La $X$ være en stokastisk variabel med mulige verdier $k_1, k_2, \dots, k_m$ og forventningsverdi $\mu$.


Variansen til $X$ er gitt ved:

$$
\sigma^2 = \text{Var}(X) = \sum_{j=1}^{m} (k_j - \mu)^2 \cdot P(X = k_j)
$$
```
Variansen er altså det gjennomsnittlige kvadratavviket, der hvert avvik vektes med sannsynligheten for utfallet. Jo større varians, desto større spredning i resultatene.

---

## **Eksempel: Terningspill med en terning**

Du deltar i et terningspill hvor du kaster en terning. Innsatsen til spillet er 4kr. Gevinsten er gitt som følger:
- Seks øyne: 8 kr.
- Fire eller fem øyne: 5kr
- Ett, to eller tre øyne: ingen gevinst.


Vi ser på spillet som en stokastisk variabel $Y$ med tre mulige verdier:

| $k$ | $-4$ | $1$ | $4$ |
| :--- | :--- | :--- | :--- |
| $P(Y=k)$ | $\frac{3}{6}$ | $\frac{2}{6}$ | $\frac{1}{6}$ |

---

### **a) Finn forventningsverdien til $Y$**

$$
\mu = E(Y) = -4 \cdot \frac{3}{6} + 1 \cdot \frac{2}{6} + 4 \cdot \frac{1}{6}
$$

$$
\mu = -2 + \frac{1}{3} + \frac{2}{3} = -1
$$

---

### **b) Finn variansen til $Y$**

Vi bruker formelen:

$$
\sigma^2 = \sum (k_j - \mu)^2 \cdot P(Y = k_j)
$$

$$
= (-4 - (-1))^2 \cdot \frac{3}{6} + (1 - (-1))^2 \cdot \frac{2}{6} + (4 - (-1))^2 \cdot \frac{1}{6}
$$

$$
= 9 \cdot \frac{3}{6} + 4 \cdot \frac{2}{6} + 25 \cdot \frac{1}{6}
$$

$$
= \frac{27 + 8 + 25}{6} = \frac{60}{6} = 10
$$

**Variansen er altså 10.**

---

### **c) Praktisk tolkning**

Hvis vi spiller dette spillet mange ganger, vil det *gjennomsnittlige kvadrerte avviket* mellom netto gevinst og forventningsverdien være 10.

Det betyr at resultatene varierer ganske mye rundt forventningsverdien $\mu = -1$. En høy varians indikerer stor spredning i mulige utfall.

---

# **Standardavvik**

Variansen er et nyttig mål på spredning, men den har en ulempe: Den er oppgitt i *kvadrerte enheter*. Hvis vi måler gevinst i kroner, blir variansen oppgitt i "kroner²" – noe som er vanskelig å tolke intuitivt.

For å få et spredingsmål i samme enhet som den opprinnelige variabelen, tar vi kvadratroten av variansen. Dette kalles **standardavviket**.

---

## **Definisjon: Standardavvik**

Standardavviket til en stokastisk variabel $X$ er gitt ved:

$$
\sigma = \sqrt{\text{Var}(X)} = \sqrt{\sigma^2}
$$

Standardavviket måler den *typiske avstanden* mellom et utfall og forventningsverdien, og oppgis i samme enhet som variabelen selv.

---

## **Eksempel (fortsettelse)**

Vi fant at variansen til terningspillet var $\sigma^2 = 10$.

Standardavviket blir da:

$$
\sigma = \sqrt{10} \approx 3{,}16 \text{ kr}
$$

**Tolkning:** Det typiske avviket fra forventningsverdien er omtrent 3,16 kr. Dette gir oss en mer håndgripelig forståelse av hvor mye resultatene varierer enn variansen alene.

---

# **Varians og standardavvik for binomisk fordeling**

Når vi har en binomisk fordeling, finnes det en enkel formel for varians.

Vi har tidligere sett at forventningsverdien  til en binomisk fordelt stokastisk variabel er $\mu = np$.
```formula
Variansen er for en binomisk fordelt stokastisk variabel gitt ved:

$$
\sigma^2 = np(1-p)
$$
Hvor $n$ er antall forsøk og $p$ er sannsynligheten for suksess i hvert forsøk.

Standardavviket er dermed

$$
\sigma = \sqrt{np(1-p)}
$$
```
---

## **Eksempel: Myntkast**

Du kaster en mynt 100 ganger. Da er $X$ binomisk fordelt med $n = 100$ og $p = 0{,}5$.

### a) Hvor mange ganger kan du forvente mynt?

La $X$ være antall ganger du får mynt. 

**Forventningsverdi:**
$$
\mu = np = 100 \cdot 0{,}5 = 50
$$

### b) Hvor stort er standardavviket?


$$
\sigma = \sqrt{np(1-p)} = \sqrt{100 \cdot 0{,}5 \cdot 0{,}5} = \sqrt{25} = 5
$$

**Tolkning:** Vi forventer i gjennomsnitt 50 mynter, med et typisk avvik på 5. Det betyr at resultatet oftest vil ligge i området rundt 45–55 mynter.

---

## **Sammendrag**

* **Varians** ($\sigma^2$): Gjennomsnittlig kvadratavvik – oppgis i kvadrerte enheter
* **Standardavvik** ($\sigma$): Kvadratroten av variansen – oppgis i samme enhet som variabelen

Begge er mål på spredning, men standardavviket er ofte lettere å tolke i praksis.

