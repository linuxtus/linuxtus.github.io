---
layout: post
title: 1 Minute To Make Google Index Website Instantly
description: Strategy to get your website indexed by Google within 1 minutes. Also learn how to setup the Google Indexing API
thumbnail-img: "/assets/img/posts/13/1-minute-to-make-google-index-your-website-instantly.webp"
lang: en
categories:
- tutorial
tags: google web
---

You spend all your time and effort into updating your website and when you finally publish it, you find out that it takes hours, days to get indexed by Google. In this post, I will guide you on how to use Google Index API to get your website content indexed by google instantly.

<div class="bg-light sidebar-module sidebar-module-inset" id="toc"></div>

## Why Is It Important To Get Your Website Indexed By Google?

Google is the biggest search engine out there and it processes billions of searches per day. Thus, it is the biggest source of organic traffic, which is also the most valuable traffic, ever.

Here’s why Get Google to Instantly Index Your Website is important

* Rank faster (especially important for time-sensitive content)
* Increase your chances of ranking above your competition
* Keep search results up-to-date for higher quality user traffic

Although Google is really very very efficient in indexing pages all around the World Wide Web, due to the huge number of indexing requests, it cannot simply provide fast indexing service to all the websites.

Thanks to Google’s Indexing API, it’s now possible for you to get your website to rank faster.

## How To Setup Google Indexing API?

### Step 1: Create a new Google API Project

Go to the [Google API Console](https://console.developers.google.com/flows/enableapi?apiid=indexing.googleapis.com&credential=client_key) and create a new project to get google index your website.

{% picture lazy-load /assets/img/posts/13/create-google-api-project.webp --alt Create Google API to index your website instant %}

### Step 2: Now create a [Service Account](https://console.developers.google.com/iam-admin/serviceaccounts)

Once you’ve created your project, create a service account by opening the [service accounts page.](https://console.developers.google.com/iam-admin/serviceaccounts)  After selecting the project you want to create a service account for, you’ll be taken to the following page, where you simply need to click the Create Service Account button highlighted below:

{% picture lazy-load /assets/img/posts/13/select-service-account-project.webp --alt Create Service Account to get google index your website faster %}

Next, you need to enter a name (any names) and description (option) for the newly created service account.

Make sure you copied the whole Service Account ID because you will need it later. Then, click on the Create button at the bottom:

{% picture lazy-load /assets/img/posts/13/indexing-api-service-account-information.webp --alt Index API Service Account Information %}

Click Create and Continue to proceed to the next step, where you need to change the role to Owner and, as you might’ve guessed, click continue once again…

{% picture lazy-load /assets/img/posts/13/set-service-account-permissions-owner.webp --alt Set Service Account Permissions Owner %}

Once you’ve set the role to Owner as shown above, simply click continue to save that change and then click done. Now, you need to download the file that contains your API key. It can be done by simply click the three vertical dots in the Actions column, and then select Manage keys as shown below:

{% picture lazy-load /assets/img/posts/13/manage-api-keys-google.webp --alt Manage API Keys Google %}

You will then be taken to the following page when you can click Add Key and then select the Create new key option. Choose the default JSON format when prompted in the overlay, and click Create:

{% picture lazy-load /assets/img/posts/13/service-account-create-key.webp --alt Create Key Indexing Google API %}

### Step 3: Add the Service Account as an owner of your Google Search Console Property

Open the [Google Search Console,](https://www.google.com/webmasters/tools/home) select your property, and then click on Settings near the bottom:

{% picture lazy-load /assets/img/posts/13/open-settings-in-google-search-console.webp --alt Open Settings in Google Search Console %}

Click on Users and Permissions, and click on the three dots next to your account, and then click on Manage property owners:

{% picture lazy-load /assets/img/posts/13/manage-property-owners-in-google-search-console.webp --alt Manage Property Owners In Google Search Console %}

A page will open in a new tab. Scroll to the bottom and click on the Add an owner button in the Verified Owners section. Enter the Service account ID (the one you copied out earlier) in the new owner’s email address field and click Continue:

{% picture lazy-load /assets/img/posts/13/add-service-account-id-to-verified-owners.webp --alt Add Service Account ID To Verified Owners %}

Switch back to the previous tab and refresh it. You should now see the Service account listed as a new Owner.

{% picture lazy-load /assets/img/posts/13/google-service-account-added-to-google-search-console-users.webp --alt Google Service Account Added To Google Search Console %}

## Steps To Set Up Google Indexing API On Your WordPress Site

### Step 1: Install RankMath Plugin to use Instant Index Feature

You can follow this detailed guide: [Installing Rank Math Through the Admin Panel](https://rankmath.com/kb/installing-through-the-admin-panel/) from [RankMath](https://rankmath.com/) to install RankMath Plugin

### Step 2: Configure Rank Math Plugin To Get Work With Google Index Instant

#### Insert your API Key in the plugin settings

Navigate to Rank Math > Instant Indexing Settings in your WordPress admin area, and under the Google API Settings tab, paste in the contents of your JSON file (which you downloaded), or just upload the file.

Select the Post Types where you want the Indexing API to ping Google to crawl your website as soon as a post is published, updated, or deleted and click on Save Changes.

{% picture lazy-load /assets/img/posts/13/configuring-google-instant-indexing-api-json.webp --alt Configure Google Instants Indexing RankMath %}

#### Now it’s time to use Google’s indexing API to get any post or page on your site indexed almost instantly.

From the top of the page, select the Console tab. The screen should resemble the one seen below.

{% picture lazy-load /assets/img/posts/13/console-tab-under-rank-math-instant-indexing.webp --alt Console Tab Under Rank Math Instant Indexing %}

In the Instant Indexing area, type a URL (or more) and select Google: Publish/update URL as the Action. Then, on the Send to API button, click.

{% picture lazy-load /assets/img/posts/13/send-urls-to-api-for-instant-indexing.webp --alt Send URLs to API for Instant Indexing Goolge %}

You should receive a response from the API in a fraction of a second, similar to the one below.

{% picture lazy-load /assets/img/posts/13/instant-indexing-api-success-message.webp --alt Instant Indexing API Success Message %}

To remove a URL from the index or retrieve the current state of a URL, use the Remove URL or Get URL Status actions.

## Steps To Get Google Index Instantly Using Python

### Step 1: Create a new Notebook on Google Colaboratory

On this Google Colab new notebook, you must upload the JSON file (which file downloaded). To the left, you will see there is a menu where one of the sections is called “Files”, from which you can upload any document you want to use on your script.

Read more: [Dark Mode for Google Colaboratory](https://tgbao.me/use-dark-mode-google-colab/)

### Step 2: Paste this code to Google Colab Cell

```
from oauth2client.service_account import ServiceAccountCredentials
import httplib2
import json

JSON_KEY_FILE = "<Your name json file>"
SCOPES = ["https://www.googleapis.com/auth/indexing"]

credentials = ServiceAccountCredentials.from_json_keyfile_name(JSON_KEY_FILE, scopes=SCOPES)
http = credentials.authorize(httplib2.Http())

def indexURL(urls, http):
    ENDPOINT = "https://indexing.googleapis.com/v3/urlNotifications:publish"

    for u in urls:
        content = {}
        content['url'] = u.strip()
        content['type'] = "URL_UPDATED"
        json_ctn = json.dumps(content)    

        response, content = http.request(ENDPOINT, method="POST", body=json_ctn)
        result = json.loads(content.decode())

        # For debug purpose only
        if("error" in result):
            print("Error({} - {}): {}".format(result["error"]["code"], result["error"]["status"], result["error"]["message"]))
        else:
            print("urlNotificationMetadata.url: {}".format(result["urlNotificationMetadata"]["url"]))
            print("urlNotificationMetadata.latestUpdate.url: {}".format(result["urlNotificationMetadata"]["latestUpdate"]["url"]))
            print("urlNotificationMetadata.latestUpdate.type: {}".format(result["urlNotificationMetadata"]["latestUpdate"]["type"]))
            print("urlNotificationMetadata.latestUpdate.notifyTime: {}".format(result["urlNotificationMetadata"]["latestUpdate"]["notifyTime"]))

URLS = [
    “https://your-web/example”,
    “https://your-web/example-2”,
]

indexURL(URLS, http)

```

Now, just by modifying the URL, you want to send you can force indexing. But keep in mind, [Here](https://developers.google.com/search/apis/indexing-api/v3/quota-pricing) is a rundown of the daily and per-minute quotas you have with the API: unless you use the batch script, it will be hard to use all of them

Once you have done, you will just need to press run to make it work. If you have followed all steps correctly you will see an answer under the script, where you should check it includes the message “Status: 200”. This means that you setup correctly.

You can index your website instant by using google index API without Google Colab. You can [Download Python](https://tgbao.me/install-python-ubuntu/) and run script by yourself.

## Conclusion

In this post, I introduced you how to setup Google Indexing API, to help Google index your website faster, thus, It will rank higher, Increase your chances of ranking above your competition and also Keep search results up-to-date for higher quality user traffic