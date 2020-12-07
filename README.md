### Simple markdown previewer (SMP)
--------------------------------------
This is a markdown previewer; built with [React](https://reactjs.org) and [Marked](https://marked.js.org)

#### Why this project?
Following my pushes in most of my projects repository on github, where I always mess up with the correct link syntax, for example: *instead of using [My portfolio site](https://chigboguorji.netlify.app)*, *I always mistakenly used(the wrong mark up ) -> (My portfolio site)[https://chigboguorji.netlify.app]*; which produces unexpected results.

To be able to combat this error which occur more often, and to preview my markdown files before pushing upstream - I built this previewer.

Moreso, it will be of a great use to developers working on a project and needed to draft a well written docs, and to preview the write-ups before pushing online.

#### Features

* **Draft** - Persist data using the browser _localStorage API_ (WIP)
* **Save** - Automatically save files generated using the _fileSystem API_ (WIP)
    * Add save button
    * Provide field where to input the name of file
 * **Extension** - Build a follow up browser(chrome) extension

#### Usage
This project uses [yarn](https://yarnpkg.com) as the package manager, you must have yarn installed
*  `Clone repo`
* `cd project directory`
* `yarn start`

#### Contributing to this project
If you're thinking of contributing to this projects - thanks!

Contributions are welcome, and they are greatly appreciated! Every little bit helps.
We'd love to accept your patches and contributions to this project.
You can contribute in many ways:

To ensure consistent code and workflow, please follow the following contributing guides while making a contribution.

##### Package manager
This repository uses and also uses `yarn` as the package manager.

##### Pull Requests
* Source control is using GitFlow - this means that develop is our default branch and main always follows our most recent release. New features should be branched from, and merge back into develop.

* Each commit should have 1 purpose. Fixing whitespace or refactoring should be split from feature additions or bug fixing.

##### Issues / Bug report

Report issues/bugs on [our issues tracker](https://github.com/chiorji/smp/issues)

##### If you're reporting a bug, please include:

* Your operating system name and version.
* Any details about your local setup that might be helpful in troubleshooting.
* Detailed steps to reproduce the bug.

##### Feedback
The best way to send feedback is to file an issue at [our issues tracker](https://github.com/chiorji/smp/issues)

##### Feature proposal
If you are proposing a feature:
* Explain in detail how it would work.
* Keep the scope as narrow as possible, to make it easier to implement.
* Remember that contributions are welcome :)