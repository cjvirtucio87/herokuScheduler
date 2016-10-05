ENTITIES
Job
- name
- amount of dynos
- frequency
- last time that the job ran
- next due date

STATES
jobs
jobs.index
- url: '/'
jobs.show
- url: '/:id'
- has an edit button
- has a remove button
- has fields
jobs.edit
- url: '/:id/edit'
- fields become inputs
jobs.new
- url: '/new'
- new empty form is appended to index
- save form, then form is appended to index
- cancel form, form disappears
