# Hva er Normalfordeling

Tar vi mange uavhengige målinger av størrelser, for eksempel høyden til mennesker, og plotter resultatene i et diagram, vil resultatene ofte følge en bestemt kurve. Det er et enormt antall naturlige fenomener som følger denne kurven. På grunn av dette, siden den er såpass normal, kalles denne kurven **normalfordelingen**.


![Normalfordeling](/assets/S2/hoydenormal.svg)


# Summen av tre terningkast

Vi kaster én terning tre ganger og lar
- X₁, X₂, X₃ være antall øyne i hvert kast
- S = X₁ + X₂ + X₃ være summen av øyne

Målet er å finne forventningsverdi, varians, standardavvik og si noe om sannsynlighetsfordelingen til S.

---

## Grunnlag: ett terningkast

For et enkelt kast (rettferdig terning):
- E(Xᵢ) = 7/2
- Var(Xᵢ) = 35/12

Kastene er uavhengige.

---

## Forventning og varians for summen S

```formula
S = X₁ + X₂ + X₃
```

- Forventning (lineæritet):
  ```
  E(S) = E(X₁) + E(X₂) + E(X₃)
       = 3 · 7/2
       = 21/2
       = 10,5
  ```

- Varians (uavhengige kast):
  ```
  Var(S) = Var(X₁) + Var(X₂) + Var(X₃)
         = 3 · 35/12
         = 35/4
         = 8,75
  ```

- Standardavvik:
  ```
  SD(S) = σ = √Var(S) = √8,75 ≈ 2,96
  ```

---

## Hvilke summer kan S ta?

Når vi kaster tre terninger, kan S ta heltallsverdiene fra 3 til 18.

- Minste sum: 1 + 1 + 1 = 3
- Største sum: 6 + 6 + 6 = 18

---

## Den eksakte fordelingen til S (diskret, ikke normal)

S er summen av tre uavhengige, like fordelte terningkast. Fordelingen er den såkalte diskrete «terningkonvolusjonen». Sannsynlighetene er ikke like store; de danner en «pyramideform» som topper rundt midten.

Antall måter å oppnå en sum s på, for tre terninger, er:

| s  | antall utfall |
|----|----------------|
| 3  | 1              |
| 4  | 3              |
| 5  | 6              |
| 6  | 10             |
| 7  | 15             |
| 8  | 21             |
| 9  | 25             |
| 10 | 27             |
| 11 | 27             |
| 12 | 25             |
| 13 | 21             |
| 14 | 15             |
| 15 | 10             |
| 16 | 6              |
| 17 | 3              |
| 18 | 1              |

Siden det er 6³ = 216 mulige utfall totalt, blir for eksempel:
- P(S = 10) = 27/216 = 0,125
- P(S = 11) = 27/216 = 0,125
- P(S = 9) = 25/216 ≈ 0,116
- P(S = 8) = 21/216 ≈ 0,097

Toppene ligger ved 10 og 11.

---

## Hva med «68% mellom μ − σ og μ + σ»?

> Viktig: 68%-regelen (empiriregelen) gjelder nøyaktig for normalfordelingen. S her er diskret og ikke normalfordelt. Likevel kan normaltilnærming brukes som en tilnærming for summer av flere uavhengige variabler.

For tre terninger er «normaltilnærming» bare moderat god. Dersom vi likevel bruker den:

- μ = 10,5 og σ ≈ 2,96
- μ − σ ≈ 7,54 og μ + σ ≈ 13,46

Hvis vi oversetter til heltallssummer, ser vi på S ∈ {8, 9, 10, 11, 12, 13}. Med den eksakte fordelingen kan vi regne den sanne sannsynligheten:

```
P(8 ≤ S ≤ 13)
= (21 + 25 + 27 + 27 + 25 + 21) / 216
= 146 / 216
≈ 0,676
≈ 67,6%
```

Dette ligger svært nær 68%, og forklarer hvorfor normalideen « fungerer » her – men det er fordi vi tilfeldigvis fikk en verdi nær 68% når vi summerte de nøyaktige diskrete sannsynlighetene.

---

## Oppsummering

- E(S) = 10,5
- Var(S) = 8,75 og SD(S) ≈ 2,96
- S kan være fra 3 til 18, med størst sannsynlighet rundt 10–11
- Den eksakte sannsynligheten for å få mellom 8 og 13 (inklusive) er 146/216 ≈ 67,6%
- Normalfordelingen er en nyttig tilnærming for summer av uavhengige variabler, men for tre terninger bør du helst bruke de eksakte diskrete sannsynlighetene (tabellen over).