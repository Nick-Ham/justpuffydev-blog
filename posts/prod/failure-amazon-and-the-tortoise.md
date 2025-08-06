---
title: "Failure, Amazon, and the Tortoise"
date: "2025-08-04"
---

I failed an Amazon OA today.

I'm a 4+ year engineer, been programming on and off since I was 14, and my brain runs at the speed of a tortoise. That fact is now public record in the form of this post.

Why am I sharing this? To prove myself a failure? Not really. I want to paint a picture of what this experience has been like — how it’s humbling, how it’s not, and what I’m going to do from here. Maybe if you’re a newgrad you might feel a little better knowing someone with experience is struggling too. And maybe it’ll be useful to someone out there who's still figuring out what kind of engineer they want to be.

### Background: Engineer vs Engine Man

First of all, my experience; I did not graduate college. I *went*, but I hated my classes so much (mostly random things I thought were useless) and the only programming classes I had were things I could’ve aced in my sleep years prior. I eventually withdrew, feeling guilty that I was wasting someone else's money on school that seemed to not be any help. Since then, I've spent most of my time working in game engines, making a mix of C++ engine work and scripts in GDScript. *Most* of that time is spent professionally in Unreal, at a job I got about a year after dropping out of school, but probably an equivalent amount is spent of my own time working on my own projects in Godot. Feel free to go look at my repos on my [GitHub][1] (The source for this site is on there too, please go roast me if you want). Because this hasn't been very 'normal' CS dev work, I never have (and still don't) feel like an engineer.

### Game Dev Experience or Big Tech

The cool part about experience in game engines is that I think games are actually pretty complex and iterative pieces of adaptive software. If you want to grow your system and architecture chops *really* fast, I think they are the best thing to work in. You can only get away with shoving everything into a player script before you run into some severe limitations, and even industry professionals struggle with how complex certain things like behavior trees and state machines can get. To use this blog as an example, it is simple, is technically a complete MVP, and is significantly less complex than getting basically any reasonable MVP running for a game. The downside of this experience is I’m not sure I want to go into gamedev anymore ... and now I don't know what to do about it.

Down the rabbit hole of listings and trying to figure out what other lower level engineers focus on *in the real world*, I've discovered a few things:

1. Full stack seems to be like 80% of listings. So uh, here we are
2. If you want to actually progress in your career and be forced to grow and adapt, FAANG is probably where it’s at (or some startup that will make you sink or swim)

Not necessarily those letters or in that order, but '***Big Tech***'. I never even pictured myself thinking about trying for big tech, since I always thought I was too dumb for it. But where brain small, motivation Big!... or something like that.

### YeetCode

I felt like I was ready for the long game, and started applying months ago. I went so long with no responses, getting ghosted, changing my resume, trying on a different hat, that when I finally got invited to take Amazon's OA, I actually thought it was some sort of filter just to get me to stop applying. And yet there I was, with less than a week to take it. I knew it would be 2 LeetCode problems and some other jazz, though the other jazz didn't scare me. Why wasn’t I practicing LeetCode in that whome time I was applying? Well, I did do *some*, but mainly: I thought my gamedev work and side projects *were* my practice. I figured:

> I've been an engineer for awhile... maybe I can cram LeetCode?

I cannot cram the LeetCode.

### Realizing I'm Getting Gapped

Maybe someone can, but ***I*** can't. I discovered very quickly just how hard deciphering LeetCode yourself is — particularly when you are missing the fundamental algorithms that I guess a lot of undergrads learn in those later classes I never got to experience. I've designed systems for game work that have to be performant (enough for a real-time game environment). I've had to optimize networking bandwidth to keep the client as close as possible, set up ai batching to keep too much navigation off of tick... but I never really learned just how powerful `std::unordered_map`, or how easy it is to get access down to O(1). I can tell from hearing a customer or user issue what system needs to be built and where the bottlenecks will be... but I couldn't figure out in 45 minutes how to rebuild a wildcard pattern matcher. I’ve built so many bad systems and tools over the years, that I understand the importance of event-driven architecture, or component and decoration led tooling... **but I didn’t know TwoPointers**.

*Oh and yeah, I know Two Pointers now. Still never going to use that at my job.*

Moral of the story, I'm still not sure exactly what the connection between LeetCode and real engineering concepts are — maybe it makes a bigger difference in big-data environments ... or maybe, I'm just not really an engineer yet?

Possibly I've been just using engineering to get done what I wanted, but never really embraced the field as an identity.

Either way, now I've gone through my personal stages of grief:

- Oh god what have I done
- How could I be so stupid
- I am and will always be that stupid
- I need to just keep trudging along working
- I am a tortoise

### Become Tortoise

I am ready to try and be one of you; the engineers. I've been playing long enough at this game of pretend, it's time to put the work in. I'll keep working on this blog, and keep working on LeetCode. I've considered going back to finish my degree, whatever it takes, even if it’s years — because like I always tell myself:

> I am the tortoise,
> Not the hare.

P.S. I am continuing to work on extending the site. And I've added something very simple already! If you have any comments, feedback, or want to roast me directly, feel free to reach me at [nick@justpuffy.dev](mailto:nick@justpuffy.dev)

[1]: https://github.com/Nick-Ham
