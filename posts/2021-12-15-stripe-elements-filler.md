---
title: "Auto fill stripe elements during development"
date: "2021-12-15"
---

If you just want to see the code, here is the [**link**](https://github.com/blessanm86/stripe-elements-filler) to the repo.

I work in the payments team of my company and my job involves creating endless customer payment flows for different scenarios. So I have to deal with a lot of forms on a daily basis. Filling out forms to test a flow and especially during development can become very repetitive. So to solve that we created a chrome extention. We simply call it the `dev-tools`.

Out dev tools can autofill forms with a simple short key `⌥ + enter`. Its a pretty simple setup if you have some idea about chrome extensions. Im not trying to explain how to create a chrome extension. Their docs are pretty good on that.

We utilize their content scripts feature which basically injects javascript into any url patterns we list on the manifest file.

Its looks something like this.

![This is an image with some code](/images/form-filler.png)

The code is pretty simple, it loops through all the forms in the page and we have a function mapped to different form names. These mapped functions are form fillers.

##### This will not work with stripe elements

The thing about stripe elments are that they are little iframes. Each element is an iframe. We cannot simply manipulate a HTML element in an iframe.

##### all_frames for the win

In the manifest of the extension you can specify an option called `all_frames`. Be default chrome will only inject your content script to the top left of the page. All the inner frames will be ignored. If you enable `all_frames:true` for your content script, it will be injected into every frame in the page.

So now that we can inject javascript into the element, we use the following code to fill the elements.

![This is an image with some code](/images/stripe-filler.png)

By parsing the url we get an idea of what element is being renderred and then we just find the input field and set the value.

That's it. I hope this helps.