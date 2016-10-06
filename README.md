

### Heroku Scheduler

This is my attempt to emulate the Heroku Scheduler dashboard. I built it

using Angular JS, and styled with a little bootstrap for polish.

##### I. Data Modeling.

The problem itself as simple, but to my mind that was not an excuse to forego

structuring my plan of attack. This might be due to my Rails background,

but I started by thinking of the different entities that might be present

in the toy app. There really was only one: the Job. And that entity had

the following attributes:

- name

- dyno size tier

- frequency

- the last time the job ran

- next due date.

I then thought about the different states. My Rails background revealed itself

once more, so I thought about the RESTful resources involved. Ultimately,

'jobs' were the sole resource in this toy app, so my routes revolved

around that.


##### II. Technological Overview.

AngularJS was designed with the MVC pattern in mind. The Model constituted

the single source of truth, and the Controller passed on that truth to

the View for display. Two-way binding also streamlined data transfer between

the Model and the View.

Business logic was kept in the services. They handled serving the truth

that was present in the Model. This allowed me to keep my controller

and directives slim, minimizing cognitive overhead and thus improving

maintainability. Both the controller and the directives served only to

couple the services with the view in order for the latter to have the data

that ought to be presented.

Directives were helpful in that they segregated the different parts of the

view. There's a parent 'job panel' that has its own scope, and the children

'edit' and 'show' panels are prototypically-linked to that scope. You'll

see this in the fact that I omitted the 'scope' property for both of those

child panels. This allowed the two child panels to easily send data to the

parent, which stood to hold sole responsibility for sharing knowledge

on user interaction with the rest of the app through the service.

Speaking of services, you'll notice that there are several. The most important

one, however, is the Job service. This one was in charge of procuring and

serving the data that lied at the heart of this app: a dataset of jobs.

The other services handled more specific needs in the app, such as the choices

available for the 'next due' option in the edit panel.

All told, this is a simple front-end problem; but I took pains to ensure

that my code remained readable, maintainable, and followed best practices.
