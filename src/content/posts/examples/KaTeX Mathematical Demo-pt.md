---
title: Demonstração Matemática KaTeX
published: 2025-04-01
lang: pt
abbrlink: katex-mathematical-demo
---

KaTeX é uma biblioteca JavaScript que funciona em diferentes navegadores para apresentar notação matemática em navegadores web. Ela coloca ênfase especial em ser rápida e fácil de usar. Ela foi inicialmente desenvolvida por Khan Academy, e tornou-se um entre os cinco projetos mais populares do GitHub.

## Teoria dos Grupos

Teorema de Burnside, por vezes também chamado de teorema da contagem de Burnside, teorema de Cauchy-Frobenius ou o teorema de contagem de órbitas.

Sendo $\wedge$ uma ação de grupo de um grupo finito $G$ em uma série finita $X$. Então o número $t$ de órbitas de ação é dado pela fórmula:

$$
t=\frac{1}{|G|}\sum_{g\in G}|\text{Fix}(g)|
$$

Para cada integral $n\ge2$, o grupo quociente $\mathbb{Z}/n\mathbb{Z}$ é um grupo cíclico gerado por $1+n\mathbb{Z}$ e por isso $\color{red}{\mathbb{Z}/n\mathbb{Z}\cong\mathbb{Z}_n}$.

O grupo quociente $\mathbb{R}/\mathbb{Z}$ é isomórfico à $([0,1),+_1)$, o grupo de números reais no intervalo $[0,1)$, sob adição de módulo 1.

Teorema do Isomorfismo. Sendo $\phi\colon(G,\circ)\to(H,*)$ um homomorfismo. Então a função

$$
\begin{aligned}
f\colon G/\text{Ker}(\phi)&\to\text{Im}(\phi)\\
x\text{Ker}(\phi)&\mapsto\phi(x)
\end{aligned}
$$

é um isomorfismo, então

$$
G/\text{Ker}(\phi)\cong \text{Im}(\phi)
$$

## Teorema de Taylor

Sendo a função $f$ $(n+1)$-vezes diferenciável em um intervalo aberto contendo os pontos $a$ e $x$. Então

$$
 f(x)=f(a)+f'(a)(x-a)+\cdots+\frac{f^{(n)}(a)}{n!}(x-a)^n+R_n(x)
$$

onde

$$
 R_n(x)=\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1},
$$

para algum $c$ entre $a$ e $x$.

$\KaTeX$ não possui a opção de alinhar pela direita, então uma coluna extra alinhada é utilizada pelos números da equação. Eles são empurrados para a direita com espaçamento mkern, padrão \mkern100mu. Ambos alinhamentos & ambientes de alinhamento* podem ser usados, assim como \tag e \notag.

## Ambiente de alinhamento

$$
\begin{align}
\frac{\pi}{4n^2} &= \frac{4^n(n!)^2}{2n^2(2n)!}n(2n-1)J_{n-1}-\frac{4^n(n!)^2}{2n^2(2n)!}2n^2J_n \tag{1} \\
&= \frac{4^n}{4(2n)!}\left(\frac{n!}{n}\right)^22n(2n-1)J_{n-1}-\frac{4^n(n!)^2}{(2n)!}J_n \tag{$\ddagger$} \\
&= \frac{4^{n-1}((n-1)!)^2}{(2n-2)!}J_{n-1}-\frac{4^n(n!)^2}{(2n)!}J_n \tag{2}
\end{align}
$$

## Ambientes de alinhamento*

$$
\begin{align}
\frac{4^N(N!)^2}{(2N)!}J_N &\leq \frac{4^N(N!)^2}{(2N)!}\frac{\pi^2}{4}\frac{1}{2n+2}I_{2N} \tag{*} \\
&= \frac{\pi^2}{8(N+1)}\frac{4^N(N!)^2}{(2N)!}I_{2N} \\
&= \frac{\pi^2}{8(N+1)}\frac{\pi}{2} \tag{**} \\
&= \frac{\pi^3}{16(N+1)} \\
\frac{x}{\sin x} &\leq \frac{\pi}{2} \tag{3} \\
\text{so} \qquad\qquad x &\leq \frac{\pi}{2}\sin x \tag{4}
\end{align}
$$

## Soma de uma Série

$$
\begin{align*}
\sum_{i=1}^{k+1}i &= \left(\sum_{i=1}^{k}i\right) +(k+1) \tag{1} \\
&= \frac{k(k+1)}{2}+k+1 \tag{2} \\
&= \frac{k(k+1)+2(k+1)}{2} \tag{3} \\
&= \frac{(k+1)(k+2)}{2} \tag{4} \\
&= \frac{(k+1)((k+1)+1)}{2} \tag{5}
\end{align*}
$$

## Notação de Produto

$$
1 + \frac{q^2}{(1-q)}+\frac{q^6}{(1-q)(1-q^2)}+\cdots
= \prod_{j=0}^{\infty}\frac{1}{(1-q^{5j+2})(1-q^{5j+3})},
\text{ for }\lvert q\rvert < 1.
$$

## Produto Vetorial

$$
\mathbf{V}_1 \times \mathbf{V}_2 = \begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\[1ex]
\frac{\partial X}{\partial u} & \frac{\partial Y}{\partial u} & 0 \\[2.5ex]
\frac{\partial X}{\partial v} & \frac{\partial Y}{\partial v} & 0
\end{vmatrix}
$$

## Equações de Maxwell

$$
\begin{align*}
\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &= \frac{4\pi}{c}\vec{\mathbf{j}} \\
\nabla \cdot \vec{\mathbf{E}} &= 4 \pi \rho \\
\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} &= \vec{\mathbf{0}} \\
\nabla \cdot \vec{\mathbf{B}} &= 0
\end{align*}
$$

## Letras Gregas

$$
\begin{align*}
&\Gamma\ \Delta\ \Theta\ \Lambda\ \Xi\ \Pi\ \Sigma\ \Upsilon\ \Phi\ \Psi\ \Omega\\
&\alpha\ \beta\ \gamma\ \delta\ \epsilon\ \zeta\ \eta\ \theta\ \iota\ \kappa\ \lambda\ \mu\ \nu\ \xi\ \omicron\ \pi\ \rho\ \sigma\ \tau\ \upsilon\ \phi\ \chi\ \psi\ \omega\ \varepsilon\ \vartheta\ \varpi\ \varrho\ \varsigma\ \varphi
\end{align*}
$$

## Setas

$$
\begin{align*}
&\gets\ \to\ \leftarrow\ \rightarrow\ \uparrow\ \Uparrow\ \downarrow\ \Downarrow\ \updownarrow\ \Updownarrow\\
&\Leftarrow\ \Rightarrow\ \leftrightarrow\ \Leftrightarrow\ \mapsto\ \hookleftarrow\\
&\leftharpoonup\ \leftharpoondown\ \rightleftharpoons\ \longleftarrow\ \Longleftarrow\ \longrightarrow\\
&\Longrightarrow\ \longleftrightarrow\ \Longleftrightarrow\ \longmapsto\ \hookrightarrow\ \rightharpoonup\\
&\rightharpoondown\ \leadsto\ \nearrow\ \searrow\ \swarrow\ \nwarrow
\end{align*}
$$

## Símbolos

$$
\begin{align*}
&\surd\ \barwedge\ \veebar\ \odot\ \oplus\ \otimes\ \oslash\ \circledcirc\ \boxdot\ \bigtriangleup\\
&\bigtriangledown\ \dagger\ \diamond\ \star\ \triangleleft\ \triangleright\ \angle\ \infty\ \prime\ \triangle
\end{align*}
$$

*Amostras retiradas de [KaTeX Live Demo](https://sixthform.info/katex/examples/demo.html)*
