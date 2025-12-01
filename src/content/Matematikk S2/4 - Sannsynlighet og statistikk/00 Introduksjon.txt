# Sannsynlighet og Statistikk (S2)

Velkommen til kapittelet om sannsynlighet og statistikk for S2. Her skal vi se på binomiske forsøk, normalfordeling og hypotesetesting.

## Binomisk Sannsynlighet

Et binomisk forsøk er kjennetegnet ved:
1. Det gjøres $n$ uavhengige delforsøk.
2. I hvert delforsøk er det to mulige utfall: suksess eller fiasko.
3. Sannsynligheten for suksess, $p$, er konstant i alle delforsøkene.

Sannsynligheten for nøyaktig $k$ suksesser i $n$ forsøk er gitt ved formelen:

$$
P(X = k) = \binom{n}{k} \cdot p^k \cdot (1-p)^{n-k}
$$

Hvor $\binom{n}{k}$ er binomialkoeffisienten:

$$
\binom{n}{k} = \frac{n!}{k!(n-k)!}
$$

## Normalfordeling

Når $n$ blir stor, kan vi tilnærme en binomisk fordeling med en normalfordeling.

Tetthetsfunksjonen for en normalfordeling er gitt ved:

$$
f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}
$$

## Eksempel

La oss si vi kaster en terning 10 ganger. Hva er sannsynligheten for å få nøyaktig to seksere?

Her er $n = 10$, $k = 2$, og $p = \frac{1}{6}$.

$$
P(X = 2) = \binom{10}{2} \cdot \left(\frac{1}{6}\right)^2 \cdot \left(\frac{5}{6}\right)^8 \approx 0.2907
$$
