---
layout: single
title:  "Overcomplicated take on In person Secret Santa allocation"
date:   2024-12-24 15:43:00 +0530
categories: cryptography
toc: true
toc_sticky: true
author_profile: false
tags: [protocols]
---

## How it started

On a random friday, amist random discussions, [Bibek dae](https://bewakes.com) suggsted that we have some sort of decentralized protocol to allocate names for secret santa this year.

I was certain that some implemntation of this must exist and indeed that was true.
<!-- Add some here -->
However, running nodes didn't seem like a fun activity for a bunch of people sitting around (or could be, yet to try it out) and not everyone is equally comfortable with tech.

It was also possible to use many of the online services which promise to do the allocation for you. This delegates the task to a trusted third party which maynot be that much an issue. The real concern could be the sensitive contact informtion we are sharing with those services.

Since, all of us would be in person, I set out to find a method that would involve little to no tech and would be simple enough to explain in a few minutes. Afterall, the real beauty of cryptography is only revealed when one fully comprehends the algorithm and all its steps and still is amused by the implications.

## The Naive Approach

The easiest idea is to draw names from a bowl. We make a chit with each person's name that is then picked randomly. The result is however a permutation and not a [derangement](https://en.wikipedia.org/wiki/Derangement) as we desired. We can simply repeat if someone objects and can prove that they got their own name by revealing their chit. On average, how many times do we need to repeat this before no one is assiged themselves as their own secret santa?

Let us suppose we have $$n$$ people.

The number of possible permutations is $$n!$$ which is the usual factorial function.

The number of possible derangements is $$!n$$ where $$!n$$ can be defined recursively as [^1]

[^1]: [Wikipedia: Derangements -> Counting Dearangements](https://en.wikipedia.org/wiki/Derangement#Counting_derangements)

$$ !n = (n-1)(!(n-1) + !(n-2)) $$

The probabilty of getting a derangement is thus $$ \frac{!n}{n!} $$. A plot of these values looks like 
<!-- add plot and link to plot here -->

As you must have guessed from the plot, the value does indeed converge to $$ \frac{1}{e}$$ !

We can get the average number of rounds needed by computing the expected value of the random variable with a geometric distribution. If the success probability is $$p$$, then the expected value is given by[^2]

$$ E(\mathbb{X}) = \frac{1}{p}$$

[^2]: [Wikipedia: Geometric Distribution -> Moments and Cumulants](https://en.wikipedia.org/wiki/Geometric_distribution#Moments_and_cumulants)

The average number of rounds needed will be then $$e$$ which is approximately $$2.71828$$. Its not a lot but still leaves room to improve. Afterall, it would be satisying to have a valid allocation in the very first attempt. Also, would it not be awesome to have a way to ensure that we can find out if someone doesnot bring a gift but not reveal other allocations in the process.

## Figuring out Requirements

Before we go on exploring further ideas, it might be helpful to elucidate the exact requirements. Sjouke Mauw Et al. lay out the following requirements in the paper Security Protocols for Secret Santa. [^3]

[^3]: [Security Protocols for Secret Santa by Sjouke Mauw Et al.](http://link.springer.com/10.1007/978-3-662-45921-8_26)

![Secret Santa Problem Requirements](/assets/images/secret-santa-problem-specification.png)

## A better Approach

![Secret Santa Allocation Algorithm 2](/assets/images/secret-santa-soln-stack-exchange.png)

## Adding Verifiability

The above scheme lacks verifiability.

To gain that, we can utilize a tamper proof mailing packets. We place all of them in the packet and seal it. Everyone signs it and it is deligated to an individual. They need to reproduce it at the gift distribution and everyone can verify their signatures.

We have made another assumption here. 
"People would love to see who their secret santa is but not at the cost of everyone knowing that they know it"

To add that, we could have a box that can only be open if everyone agrees.

Then we could place the envelops in the box and check if someone doesn't receive a gift.

The question is that given the existence of such a box, is there something clever that can be done?

## Future Works

- Could any of these schemes made to work when we have restrictions? say for example we have ideas where we have restriction on the possible assignments.

- Can the verifiability be modularized and abstracted to decouple it from the specifics of secret santa problem?

## References