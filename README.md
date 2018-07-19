<h1 align="center" style="border-bottom: none;">👨🏽‍💼 interview-api 💻</h1>
<h3 align="center">Simple API with a twist, to challenge interviewees with creative thinking.</h3>

**interview-api** helps promote healthy software hiring practices by providing candidates an opportunity to showcase real-world skills.

## Inspiration

Tech thought-leaders including [Adrianne Jeffries](https://theoutline.com/post/1166/programmers-are-confessing-their-coding-sins-to-protest-a-broken-job-interview-process?zd=1&zi=76vosc6m), [Anil Dash](https://medium.com/make-better-software/against-the-whiteboard-f1df0013954f), [David Heinemeier Hansson](https://twitter.com/dhh/status/834146806594433025), [Jeff Atwood](https://blog.codinghorror.com/how-to-hire-a-programmer/), [Jon Evans](https://techcrunch.com/2015/03/21/the-terrible-technical-interview/), [Julie Bort](http://www.businessinsider.com/why-an-older-google-contract-programmer-left-google-2016-10), [Max Howell](https://twitter.com/mxcl/status/608682016205344768?lang=en), [Quincy Larson](https://medium.freecodecamp.org/why-is-hiring-broken-it-starts-at-the-whiteboard-34b088e5a5db), projects like [Hiring with Whiteboards](https://github.com/poteto/hiring-without-whiteboards) and [They Whiteboarded Me](http://they.whiteboarded.me/), and companies like [Foursquare](https://engineering.foursquare.com/improving-our-engineering-interview-process-106173ba25a9#.uuih4wg3m), [Slack](https://slack.engineering/a-walkthrough-guide-to-finding-an-engineering-job-at-slack-dc07dd7b0144), [Square](https://medium.com/square-corner-blog/why-we-pair-interview-c2ab4b599bd7), and [WebPT](https://www.webpt.com).

## Usage

1.  Provide a machine for your interviewee to code with, or allow them to use their own (must have Docker installed).

2.  Instruct them to run the command:

`docker run -d --name interview-api -p 3000:3000 chase-adams/interview-api`

3.  Don't tell them what the API does, just give them some overall direction (see [below](#preventing-pre-prepared-solutions)) and let them build something awesome!

### A Few Considerations

#### Timeboxing

Find a time that works right for your needs. Maybe you want to see well-written code with unit tests - that will take much longer than an hour. Perhaps you care less about the written code and more about the design, and an hour is plenty of time.

**The recommended time is three hours**, to give the candidate enough time to research the interview-api, work on a solution, and implement a rough draft of it. However, depending on the role, this may be too little or too much time.

#### Preventing Pre-Prepared Solutions

You're going to have these if you're not careful. Once word spreads you use an open-source project and let developers write whatever they want, someone will come in with a pre-baked solution and ace the challenge.

Providing an original, randomized alteration to the instructions is key. Some examples of good guidelines are (please **do not** use these):

> Interviewer: Please write an API (in any language) which consumes the _interview-api_ Docker container and gracefully handles any upstream intermittent failures.

There is intentionally opinion in this - what does "gracefully" mean to them? Does that mean retry with backoff, or does it mean transforming the error into something more meaningful? There is merit to both, depending on how the candidate imagined the usage of it.

> Interviewer: Please create a UI (in any language) which uses the _interview-api_ Docker container and displays a rating system using any characteristic(s) in the JSON payload.

Candidates have the freedom to build however/whatever they want, given the loose constraint that it must be a system which allows users to rate the startups. It could be an Amazon-flavored system, something more Tinder-inspired, or any novel idea.

> Interviewer: Please create an API (in any language) which acts as a proxy for the _interview-api_ Docker container and provides application-level caching.

This lets candidates improve upon the (flawed) _interview-api_ and create something better. It provides an opportunity for them to showcase the areas they thought needed to be fixed.

#### Unnecessary Impediments

The goal of this project is to get rid of unnecessary impediments in the interview process - **don't add any with a restriction of IDE, OS, or if you are bold, technologies**. Any good programmer can learn those in time - what makes them stand out is the ability to design/build something awesome.

## License

The interview-api is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
