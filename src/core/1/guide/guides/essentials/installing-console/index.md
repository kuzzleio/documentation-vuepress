---
code: false
type: page
title: Install Kuzzle Admin Console
order: 100
---

# Installing Kuzzle Admin Console

The Kuzzle Admin Console is a web application that lets you manage Kuzzle, including **data**, **real-time notifications** and **security**.

If you don't want to install Kuzzle Admin Console yourself you can use our <a href="http://console.kuzzle.io/">publicly hosted</a> Kuzzle Admin Console. Otherwise, grab the source code [here](https://github.com/kuzzleio/kuzzle-admin-console/releases) and install it on your own environment.

In both cases the configuration is the same and you'll be able to select which [Kuzzle](/core/1/guide/guides/essentials/installing-console/#connect-to-kuzzle) installation you want to manage.

<div class="alert alert-info">
Having trouble? Get in touch with us on <a href="https://gitter.im/kuzzleio/kuzzle">Gitter!</a> We're happy to help.
</div>

## Connect to Kuzzle

The Kuzzle Admin Console automatically searches for Kuzzle on `localhost:7512` and will be prompt you to introduce your own host and port if it is not detected.

At any time, you can reconfigure Kuzzle Admin Console to connect to any Kuzzle installation by clicking on the **"Choose Environment"** dropdown menu and then selecting **"Create new"**. This feature allows you to manage multiple Kuzzle installations on a single Kuzzle Admin Console.

![Kuzzle Admin Console is trying to connect to Kuzzle](kuzbo-connecting.png)

To create a connection to Kuzzle, provide its **name** (e.g. "Development" or "My First Kuzzle"), **address** (or hostname) and **port**. Optionally, select a **color** to identify the connection (e.g. red could be used to identify production environments).

<div class="alert alert-success">Your Kuzzle Admin Console is now connected to Kuzzle.</div>

<div class="alert alert-info">
Having trouble? Get in touch with us on <a href="https://gitter.im/kuzzleio/kuzzle">Gitter!</a> We're happy to help.
</div>

## Create an Admin Account

At this point Kuzzle is not secure and any `anonymous` user has full access. The Kuzzle Admin Console configurator will automatically request that an Admin Account be created. For the purpose of this tutorial, leave the **reset default and anonymous rights** unchecked, as we will use the `anonymous` account in the next steps.

![Kuzzle Admin Console requests that an admin account be created](kuzbo-firstadmin.png)

Once the Admin Account credentials have been created, use them to login.

<div class="alert alert-success">You can now manage Kuzzle via the Kuzzle Admin Console.</div>

<div class="alert alert-info">
Having trouble? Get in touch with us on <a href="https://gitter.im/kuzzleio/kuzzle">Gitter!</a> We're happy to help.
</div>
