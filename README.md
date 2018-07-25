<h1 align="center" style="border-bottom: none;">👨🏽‍💼 interview-api 💻</h1>
<h3 align="center">Simple API with a twist, to challenge interviewees with creative thinking.</h3>

<div align="center">

[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)
[![Build Status](https://travis-ci.org/chase-adams/interview-api.png?branch=master)](https://travis-ci.org/chase-adams/interview-api)
[![Docker Repository](https://img.shields.io/docker/build/chaseadams/interview-api.svg)](https://hub.docker.com/r/chaseadams/interview-api/)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

</div>

**interview-api** helps promote healthy software hiring practices by providing candidates an opportunity to showcase real-world skills.

## Inspiration

Tech thought-leaders including [Adrianne Jeffries](https://theoutline.com/post/1166/programmers-are-confessing-their-coding-sins-to-protest-a-broken-job-interview-process?zd=1&zi=76vosc6m), [Anil Dash](https://medium.com/make-better-software/against-the-whiteboard-f1df0013954f), [David Heinemeier Hansson](https://twitter.com/dhh/status/834146806594433025), [Jeff Atwood](https://blog.codinghorror.com/how-to-hire-a-programmer/), [Jon Evans](https://techcrunch.com/2015/03/21/the-terrible-technical-interview/), [Julie Bort](http://www.businessinsider.com/why-an-older-google-contract-programmer-left-google-2016-10), [Max Howell](https://twitter.com/mxcl/status/608682016205344768?lang=en), [Quincy Larson](https://medium.freecodecamp.org/why-is-hiring-broken-it-starts-at-the-whiteboard-34b088e5a5db), projects like [Hiring with Whiteboards](https://github.com/poteto/hiring-without-whiteboards) and [They Whiteboarded Me](http://they.whiteboarded.me/), and companies like [Foursquare](https://engineering.foursquare.com/improving-our-engineering-interview-process-106173ba25a9#.uuih4wg3m), [Slack](https://slack.engineering/a-walkthrough-guide-to-finding-an-engineering-job-at-slack-dc07dd7b0144), [Square](https://medium.com/square-corner-blog/why-we-pair-interview-c2ab4b599bd7), and [WebPT](https://www.webpt.com).

If you are a company looking for quality software engineers, whiteboard interviews are a thing of the past.

## Usage

### Public API

1.  Provide a machine for your interviewee to code with, or allow them to use their own.

2.  Don't tell them what the API does, just give them `https://api.cadams.io/v1/` and some overall direction (see [below](#a-few-considerations)) and let them build something awesome!

### Local

1.  Provide a machine for your interviewee to code with, or allow them to use their own (must have Docker installed).

2.  Instruct them to run the command: `docker run -d --name interview-api -p 3000:3000 chaseadams/interview-api`

3.  Don't tell them what the API does, just give them some overall direction (see [below](#a-few-considerations)) and let them build something awesome!

### A Few Considerations

#### Timeboxing

Find a time that works right for your needs. Maybe you want to see well-written code with unit tests - that will take much longer than an hour. Perhaps you care less about the written code and more about the design, and an hour is plenty of time.

_The recommended time is three hours_, to give the candidate enough time to research the interview-api, work on a solution, and implement a rough draft of it. However, depending on the role, this may be too little or too much time.

#### Unnecessary Assistance

- Port: If this project in Docker, there is no need to tell the candidate what port to use to access the API - it is in the command you give them.

- Path: The candidate should be able to find out what URL the real API information is under. This can be done either by using `docker exec` to get to the code in the Dockerfile, or by finding the _interview-api_ repository. Hence the twist! There are no Swagger docs.

#### Unnecessary Impediments

The goal of this project is to get rid of unnecessary impediments in the interview process - _don't add any with a restriction of IDE, OS, or if you are bold, technologies_. Any good programmer can learn those in time - what makes them stand out is the ability to design/build something awesome.

#### Preventing Pre-Prepared Solutions

You're going to have these if you're not careful. Once word spreads you use an open-source project and let developers write whatever they want, someone will come in with a pre-baked solution and ace the challenge.

Providing an original, randomized alteration to your instructions is key. Some examples of good guidelines are (please _do not_ use these):

> Interviewer: Please write an API (in any language) which consumes the _interview-api_ Docker container and gracefully handles any upstream intermittent failures.

There is intentionally opinion in this - what does "gracefully" mean to them? Does that mean retry with backoff, or does it mean transforming the error into something more meaningful? There is merit to both, depending on how the candidate imagined the usage of it.

> Interviewer: Please create a UI (in any language) which uses the _interview-api_ Docker container and displays a rating system using any characteristic(s) in the JSON payload.

Candidates have the freedom to build however/whatever they want, given the loose constraint that it must be a system which allows users to rate the startups. It could be an Amazon-flavored system, something more Tinder-inspired, or any novel idea.

> Interviewer: Please create an API (in any language) which acts as a proxy for the _interview-api_ Docker container and provides application-level caching.

This lets candidates improve upon the (intentionally flawed) _interview-api_ and create something better. It provides an opportunity for them to showcase the areas they think need to be fixed.

## License

The interview-api is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
