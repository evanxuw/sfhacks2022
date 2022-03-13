## 💡Inspiration 
Life can get hard sometimes. Whether in school, work, relationships, or physical health, we all face challenges that make us angry and disappointed. People often remove this frustration by cursing out loud and in the process hurt somebody else or by punching a wall, hurting themselves. Studies show that such actions, known as venting out, positively impact your mental health but negatively impact those around you. Venting out is good for you but venting out in the correct manner is even more important.

We are inspired by President Abraham Lincoln’s “hot letters” written during the civil war, ones that he wrote to vent out his frustration with his colleagues and enemies but never posted. Today we have many more sophisticated tools to vent out all our anger and we made a platform to do so in an effective manner. We call this platform VentOut

![3](https://user-images.githubusercontent.com/85804252/158043719-2a287e41-7f87-4110-8868-cfd9866d9f91.png)

---

## 🤔What it does 
When an individual is stressed, they often look for an outlet to release their tension, whether it be through friends, family or even just yelling out into the street. **VentOUT** takes this simple idea and creates a space where anyone can anonymously vocalize their feelings and see that they are not alone in their struggles.

**VentOUT** is a chat application created to make it easier for individuals to vent and vocalize their inner thoughts. We take in a user's audio message, transcribe it to text and post it in an anonymous space.  At the same time, we provide these individuals with positive resources to understand what is making them upset and encourage them to take appropriate action. We have identified 4 main categories where people face challenges with mental health: work, school, relationship, and health. For each of these categories, we provide users with a chat room to anonymously express their frustrations and curse out loud. In order to ensure there is no toxic profanity on our application, we filter out curse words said by the user in their frustration.

![4](https://user-images.githubusercontent.com/85804252/158043718-bd8f02c3-7b80-4cd5-936b-a8b57ed07f66.png)

---

## 🦾 How we built it
* __Frontend:__ React.js, Tailwind
* __Backend:__ Node, Express, Circle CI, AssemblyAI, Firebase
* __Deployment:__ Github Pages
* __Tools:__ Git


![How we built (1)](https://user-images.githubusercontent.com/85804252/158071482-ffe89529-bae8-4bdc-9d95-dbee0d218b54.png)

---


## 👨🏻‍🤝‍👨🏽 Mental Health Track

We began this hackathon with a singular aim: make an interface that allows users to vocalize their inner struggles in order to improve their mental health.  We are a team of 4 driven to build technology to tackle mental health issues.

[![About.png](https://i.postimg.cc/G26Q43qr/About.png)](https://postimg.cc/njY75Jyw)

---


## 🎨Best UI/UX

Our [Figma file](https://www.figma.com/file/vVXuAnUqqkYqYH49T2ojKW/SF-HACKATHON?node-id=6%3A25) consists of Wireframes, Mockups, and Design Documents we used to build our application.

We were heavily inspired by the revised version of **Iterative** design process, which not only includes visual design, but a full-fledged research cycle in which you must discover and define your problem before tackling your solution & then finally deploy it.

![Double-Diamond](https://i.postimg.cc/bvQV3jHt/doublediamonddesignprocess.png)

> 1. **Discover**: a deep dive into the problem we are trying to solve.
> 2. **Define**: synthesizing the information from the discovery phase into a problem definition.
> 3. **Develop**: think up solutions to the problem.
> 4. **Deliver**: pick the best solution and build that.

This time went for the minimalist **Tailwind UII** design. We utilized design tools like Figma,  Photoshop & Illustrator to prototype our designs before doing any coding. Through this, we are able to get iterative feedback so that we spend less time re-writing code.

![2](https://user-images.githubusercontent.com/85804252/158043682-f2b270de-4f97-414c-aeed-f75e99820bef.png)

---

## 📚Research 

Research is the key to empathizing with users: we found our specific user group early and that paves the way for our whole project. Here are a few of the resources that were helpful to us —

- https://www.mskcc.org/news/coping-grief-7-things-remember-when-dealing-loss
- https://www.suu.edu/blog/2018/08/ten-tips-for-healthy-relationships.html
- https://opportunity.org/learn/lists/10-habits-of-successful-students
- https://www.theatlantic.com/family/archive/2020/05/how-choose-fulfilling-career/611920/


## 🤝 Most Creative Use of GitHub

- GitHub makes it easy to implement the **CI/CD workflow** and makes the deployment process easy.
- **Deploying** the project on GitHub helped us to get the project deployed on the network to be accessed by other people.
Note ⚠️ — GitHub only allows static website to deploy, therefore we switched to Vercel for deployment.
- We are using GitHub for **Collaboration**. GitHub makes it easy to share code with others and helps a lot in collaboration. GitHub makes it easy to set up a project and get started.
- We also used GitHub for planning and keeping track of our project and its progress with the help of **GitHub project** management tool.

![github](https://user-images.githubusercontent.com/85804252/158076356-8ef2edbb-5c32-4ebe-87fa-62cee6ef6712.png)

---

## ⛅ Best Use of Google Cloud

Our application uses Firebase for the database to store chats and to authenticate users. Cloud Firestore is a flexible, scalable real-time, high-performance database for mobile, web, and server development from Firebase and Google Cloud. Firebase is a free service and easy to use and has sped up our development process significantly.

---

## 🤖 Best Use of AssemblyAI

We are using AssemblyAI's APIs to convert the speech to text. The user can convert his speech to text in the chatroom. We use the /transcript endpoint to make a call to the API using the audio user generates and send the transcript back to the frontend of the application. We also use the profanity check API to remove curse words from being displayed on our application. Although we implemented the functionality to use AssemblyAI in the backend, we didn't use it in the frontend because we needed an immediate response which was not possible through the API.

---

## 🛠 Best Usage of CI/CD sponsored by CircleCI

We are using CircleCI for continuous integration and deployment. CircleCI is a free service that provides continuous integration and deployment for your applications. It’s a great way to test our code, run our tests, and deploy our code.

---

## 🌐 Best Domain Name from Domain.com

- ventout.tech

---

## 🏅 Accomplishments that we're proud of
We are proud of finishing the project on time which seemed like a tough task as we had so many features to implement. Moreover, we learned a lot about GitHub Projects, Assembly AI, new web technologies, and libraries that we could incorporate into our project to meet our unique needs. And as always, working overnight was pretty fun! :)

---

## 🧠 Challenges we ran into

This project was especially an achievement for us because this time the experience was very different than what we have while building typical hackathon projects, which also includes heavy brainstorming, extensive research, and yes, hitting the final pin on the board.

---

## 📖 What we learned
**Proper sleep is very important! :p** Well, a lot of things, both summed up in technical & non-technical sides. Also not to mention, we enhanced our googling and Stackoverflow searching skill during the hackathon :)

**Note ⚠️ — API credentials have been revoked. If you want to run the same on your local, use your own credentials.**

---

## 🚀 What's next for VentOUT

- Building a mobile app to let users vent out on the go!



