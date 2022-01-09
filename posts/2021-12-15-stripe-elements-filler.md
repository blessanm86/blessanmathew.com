---
title: "Auto fill stripe elements during development"
date: "2021-12-15"
tags: ["general"]
excerpt: "My job involves creating different customer payment flows for different scenarios. So I have to deal with a lot of forms on a daily basis. Filling out forms to test a flow and especially during development can become very repetitive..."
---

### Auto fill stripe elements during development

If you just want to see the code, here is the [**link**](https://github.com/blessanm86/stripe-elements-filler) to the repo.

My job involves creating different customer payment flows for different scenarios. So I have to deal with a lot of forms on a daily basis. Filling out forms to test a flow and especially during development can become very repetitive. So to solve this issue we created a chrome extention. We simply call it the `dev-tools`.

Out dev tools can autofill forms with a simple short key `⌥ + enter`. Its a pretty simple setup if you have some idea about chrome extensions. Please refer their documentation if you are not familiar with chrome extensions.

We utilize their content scripts feature which basically allows us to inject javascript into any url patterns we list in the manifest file.

```javascript
//manifest.json
{
  "name": "dev-tools",
  ...
  "content_scripts": [
    {
      "matches": [
        "https://js.stripe.com/v3/elements-inner-card*"
      ],
      "js": ["content-script.js"]
    }
  ],
  "permissions": ["tabs", "storage"]
}
```

```javascript
//content-script.js
const formFillers = {
  directSales() {
    const fields = [
      { name: "firstName", value: "John" },
      { name: "lastName", value: "Doe" },
      { name: "postalCode", value: "12345" },
    ];
    fields.forEach(({ name, value }) => {
      document.getElementsByName(name)[0].value = value;
      document.getElementsByName(name)[0].dispatchEvent(new Event("input", { bubbles: true }));
    });

    document.getElementById("terms").checked = true;
    document.getElementById("terms").dispatchEvent(new Event("click", { bubbles: true }));
  },
};

Array.from(document.forms).forEach((form) => formFillers[form.name]());
```

The code is pretty simple, it loops through all the forms in the page and invokes a form filler function we have mapped to the form name.

#### This will not work with stripe elements

Each stripe elements is an iframe. We cannot simply manipulate a HTML element in an iframe from the outer frame.

#### all_frames for the win

In the manifest of the extension you can specify an option called `all_frames` for a content script. Be default chrome will only inject your content script to the top most frame of the page. All the inner frames will be ignored. If you enable `all_frames:true` for your content script, it will be injected into every frame in the page.

```javascript
{
  "matches": [
    "https://js.stripe.com/v3/elements-inner-card*"
  ],
  "all_frames": true,
  "js": ["content-script.js"]
}
```

So now that we can inject javascript into the element, we use the following code to fill the elements.

```javascript
const params = new URLSearchParams(window.location.href);
const name = params.get("componentName");

const values = {
  cardNumber: "4242424242424242",
  cardExpiry: "12/25",
  cardCvc: "123",
};

document.querySelector(`[data-elements-stable-field-name="${name}"]`).value = values[name];
document
  .querySelector(`[data-elements-stable-field-name="${name}"]`)
  .dispatchEvent(new Event("input", { bubbles: true }));
```

By parsing the url we get an idea of what element is being renderred and then we just find the input field and set the value.

That's it. I hope this helps.