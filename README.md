nodeshift-angular
=================

A Quickstart project for the OpenShift cloud platform that includes node.js, angular.js and foundation.


OpenShift Start
---------------

1. Create an [OpenShift Online](http://openshift.redhat.com/app/account/new) account.
2. Install [Rhc Client](https://www.openshift.com/developers/rhc-client-tools-install) tools and run 'rhc setup'.


Install on OpenShift
--------------------

Create the application, this example will produce an application named *nodeapp*:

```bash
  $ rhc app create nodeapp nodejs --from-code=git://github.com/InsuDra/nodeshift-angular.git
```

At this point the rhc tool will create the application on the OpenShift cloud, clone the code from the supplied repo, install/start your gear and clone the repo from the OpenShift cloud to a folder on your local machine.

To change node.js version or to add dependencies edit package.json file:

```javascript
  "engines": {
    "node": "0.10.17"
  },

  "dependencies": {
    "ejs": "*",
    "express": "*",
    "express-ejs-layouts": "*"
  },
```

Commit these changes and push them to OpenShift.

```bash
  ~nodeapp/ $ git add package.json
  ~nodeapp/ $ git commit -m 'Updating version and dependencies'
  ~nodeapp/ $ git push
```

The last command pushes the changes on to the OpenShift cloud, this will trigger a restart of your gear and install the new version and dependencies before starting the service again.

Additional updates can be made via the same `git add`, `git commit`, and `git push` workflow.


Credits
-------

Based on mix of openshift quickstart projects:  
https://github.com/ramr/nodejs-custom-version-openshift  
https://github.com/ryanj/nodejs-custom-version-openshift  
https://github.com/openshift-quickstart/nodejs-custom-version-openshift  