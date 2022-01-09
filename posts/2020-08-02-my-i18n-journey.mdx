---
title: "My i18n Journey"
date: "2020-08-02"
tags: ["general"]
excerpt: "In this post I would like to layout how we handle I18n and L10n in Zalon. This is basically a write up of a presentation I did at a company recently, So it might be a bit heavy on text..."
---

### My i18n Journey

In this post I would like to layout how we handle I18n and L10n in Zalon. This is basically a write up of a presentation I did at a company recently, So it might be a bit heavy on text. If you would rather see the slides, [here you go](https://docs.google.com/presentation/d/1c7Ar5ja0xx9hNuvLOVAmuGRorEc924AbvWRQw3VCiPE/edit#slide=id.g1d669f99c2_0_94).

I currently work as frontend developer for a company called Zalon in Germany. Zalon is a curated shopping service with multiple production apps facing customers, stylists and some used internally.

I'll be using some terms throughout this post. So let me list them down first.

1. **Internationalisation (i18n)** - Internationalisation is the design and development of a product, application or document content that enables easy localisation for target audiences that vary in culture, region, or language.

2. **Localisation (L10n)** - Localisation refers to the adaptation of a product, application or document content to meet the language, cultural and other requirements of a specific target market (a locale).

3. **Language** - German is an example of a language.

4. **Locale** - Its similar to a language but its tied to a geographical area. de-DE refer to the german language in Germany.

5. **Source Language** - It is the default language of your software. Most I18n tools require you to specify it as it will be the fallback language when translations don't exist for a particular locale. In our case it's English.

6. **Message** - Its basically a key and a value. The key is whats used in your application and the value is the copy that should be rendered.

7. **Initial Copy** - It is the initial copy that is written while a feature is being designed. This is the starting copy the developers use while working on the feature. They use this as a basis to setup new messages to upload to the translation tool

8. **Master Copy** - It is the final copy written in the source language. It is considered the source of truth. The other locale copy are a literal translation of the master copy.

## Lets go back to 2016

I joined Zalon back in 2016. Zalon was already present in the DACH area. We were supporting 1 language (_de_) and 3 locales ( _de-DE_, _de-AT_, _de-CH_). So the I18n work for all the applications were already done. Which means the copy was externalised as messages in a _messages.json_ file and the translations of these messages were managed in a tool named [**Transfiex**](https://www.transifex.com/) (**Tx**). We used [**react-intl**](https://formatjs.io/docs/react-intl/) as the I18n library in all of our frontend web applications.

### Workflow back in the day

1. A feature team comprised of 6 people - A product specialist, UX
   designer, 2 backend engineers and 2 frontend engineers. When
   developing new features, the team sat and designed it together, the
   initial copy that went into the design spec were written by the
   designer and product specialist. Once the design specs were ready,
   the dev team would move onto building the feature and setting up the
   messages with the initial copy.

2. The product specialist and the designer would brief the copywriter about the feature and the initial copy.

3. The copywriter would translate the initial copy and handover the translations back to the team via email or slack messages.

4. The engineers were responsible for putting in the translations into Tx.

### There were problems...

Overtime we started to notice a lot of problem with our workflow. The new copywriters that joined the team became increasingly frustrated. Here are some of the problems identified by them.

1. There was no concept of a source language within our team or workflow. The initial copy was a mixed bag of English and German. This was hard for our non German speaking colleagues in tech who ended up using a single German word at times to refer a feature. This was confusing for new joiners. The problem was more amplified when we decided to expand to new countries and the new copywriters couldn't understand the existing copy and were heavily reliant on old team members to help them understand a feature.

2. We only had 1 copywriter that acted as both a UX copywriter and brand copywriter. The copywriter was doing literal translations of the provided initial copy. And if the initial copy was in German they were just making sure there were no mistakes. UX Copywriting is a skill that we were overlooking. The tone and the wording can make a huge difference on how a customer perceives a feature and can influence the overall success.

3. The copywriters were dependent on developers to see their work live. Every time they wanted to make a change, an engineer would have to put the change in Tx and do a deployment. This whole loop was around 2 hrs.

4. There was no information trail when trying to understand a feature. It was scattered among Jira tickets, emails and slack messages.

We engineers had our own set of problems and all of them were related to the Tx.

1. Tx is file based. What that means is, you upload your externally managed messages file to Tx and this acts as the source of truth. For every addition of new messages, we had to edit the messages file and upload it to Tx for us to be able to add translations for it. We wished we could've completely manage additions/deletions of messages in Tx itself along with managing translations.

2. Tx doesn't have the concept of branching. It was pretty easy to overwrite somebody else's work. This is because of the issue mentioned above. If you upload an edited messages file without the changes of someone else, you may accidentally delete the translations they have in the tool.

3. Tx only allows for a single fallback. When you setup a project you need to specify the source language and that becomes the fallback language. So when you request for a key from Tx, it will look for it in the locale requested, if it can't find a value it will return the value from the source locale. We wanted multi level fallback. Take Germany and Austria for an example. The copy for these countries are 90% the same. We only want to add austrian copy when there really is something different for that locale. We wanted to specify a fallback like `de-AT -> de-DE -> en`

### We got better...

As we expanded to more countries, the number of copywriters had risen from 1 to 4 people. They liked to call themselves the copypaste team 😀. They made it their mission to improve the workflow as they suffered the most getting things up and ready before country launches.

1. Their first decision was announcing that English would be the source language and all new master copy would be written in English before translation work would begin.

2. The copywriting team insisted on having a representative from their team in every feature team. They were to attend in all team standups and important meetings. The idea was that a copywriter should be involved in the very beginning of a feature design to better understand the feature and to provide their expertise on communication and presentation. This copywriter would also be responsible for providing the initial copy for the devs and later brief the rest of the copy team. Later the copy team would work together on handing over the master copy which would replace the initial copy. The engineers were responsible for putting in the master copy into Tx.

3. The copy team was given access to Tx so that they could directly put in their translations.

4. Now the information trail for a feature started from a Jira ticket that acted as the functional specification. The ticket linked to a Figma board that was the design spec and the copy in Figma was the master copy.

We also fixed our tooling problems

1. We externalised the messages file into its own git repo. We used the git pr workflow to manage the messages file. We setup node scripts that would ensure our local file was in sync with the remote file before it could be uploaded to Tx.

2. We handled the issue of multi fallback in our download script with simple object simple merging before generating the final files.

3. We setup auto deployment of translations to s3 via lambdas. The applications were configured to dynamically load translations from s3 when on production. The copywriters were could now modify and see their changes live without the support of devs.

## Back to 2020

Zalon now serves 6 countries supporting 4 languages and 8 locales. Every feature team has a new member from the copy team.

### Our current workflow

1. Teams design the feature together and the copywriter provides the initial copy for devs to start on.
2. The team copywriter briefs the copy team and the copy team writes the master copy.
3. The master copy is handed over to the devs who replace the initial copy with it and make it available in Tx.
4. The copywriters are responsible for putting in their respective locale copy in Tx.
5. The translations go live automatically with our auto deployment script that runs every 30 mins.

### Whats next?

Things can always be improved but we feel we are at descent state at the moment. There are other tools such as [Phrase](https://phrase.com/) that seem like a good alternative to Tx but we haven't really evaluated it. Might be something for you.

Let me know what you think... thanks for reading this long post. I hope you got something from it.