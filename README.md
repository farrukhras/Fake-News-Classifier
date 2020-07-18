# Faker-Detector

A user friendly application designed for verifying the authenticity of COVID related news reports.  

## Inspiration
Recently, with the explosion of social media, the issue of fake news has become extremely prevalent, resulting in many illegal and dangerous activities. With deceptive words, online social network users can get infected by these online fake news easily, which has brought about tremendous effects on the offline society already. When misinformation is repeated and amplified, including by influential people, the grave danger is that information which is based on truth, ends up having only marginal impact. This project thus aims to detect any such fake news that might have spread due to social networking and social messaging platforms.

## What it does
Faker-Detector is an application which allows you to verify whether a certain news related to COVID is true or false. It provides a simplistic, user friendly interface in which users simply have to enter the text of the news which they want to verify and produces a result in terms of whether the news is True or False.

## How we built it
Our Machine Learning Model was trained using fastai, an easy to use and a very well established deep learning library. The web application was built using React, Flask, JavaScript, CSS and HTML.

## Challenges we ran into
The data set used in building this application was extremely biased and required significant formatting to be usable. In addition to this, there were a few difficulties in using fastai as we were working with it for the first time. We tried to make a simple UI for deploying and using the app on web. However, we faced a lot of difficulties in deploying the model. We were successful in making a UI for the app, but we could not link the model to the web app.

## Accomplishments that we're proud of
We were immensely proud to create an application that allows people to verify the authenticity of different news reports regarding COVID and this, in turn, would significantly improve the trustworthiness of the information found online.

## What we learned
We learned how to train models using fastai. Moreover, the concept of flask was also a new chapter in our development lives.

## What's next for Faker-Detector
We will try to expand it and make it able to detect fake news related to other social issues. In addition to this, we intend to further improve its UI and make it more interactive for users. Furthermore, we will be working towards converting the model into a web app and deploying it so that people can use it in their daily lives and benefit from it.
