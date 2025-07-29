import { Stack, Separator, Label, DefaultButton, Text } from '@fluentui/react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const nevigation = useNavigate();
  const goOrders = () => {
    nevigation('/about');
  }
  return (
    <div className="App">
      <div className="main-container">
        <h1>What is Cypress?</h1>
        <div style={{ padding: "20px", backgroundColor: "#f3f2f1" }}>
          <Stack tokens={{ childrenGap: 20 }}>

            <Text variant="xLarge" style={{ color: "#0078d4", fontWeight: "bold" }}>
              Step 1: What is Cypress?
            </Text>
            <Text variant="medium">
            Before we talk about what is Cypress, let's consider an important question: if your web application is built with modern JavaScript frameworks like React, Angular, or Vue.js, and you need to write automation tests, what's the first tool or framework that comes to your mind? The answer is Selenium. However, for automating tests specifically in modern JavaScript applications, Cypress can be a more effective solution.

Now lets understand what is Cypress:- Cypress is an open-source end-to-end testing framework designed specifically for web applications.

Cypress is widely used for automation testing,  specifically  applications built with modern JavaScript frameworks like React, Angular, and Vue. 
So cypress is a web automation tool or framework.

Does cypress supports Cross browser testing :- Answer we will read from its documentation 
https://docs.cypress.io/app/guides/cross-browser-testing#__docusaurus_skipToContent_fallback

But Selenium supports multiple Cross browser testing rather than cypress.
Cypress is also widely used for writing component-based unit test cases, as well as for end-to-end automation testing in modern JavaScript frameworks.
In Cypress, you can write automated tests using JavaScript. If you're already familiar with JavaScript, you can quickly get up to speed with Cypress. In just one day, you can learn the basics of Cypress, and by the next day, you'll be able to start writing automated test cases. This makes Cypress an accessible tool for developers who are familiar with JavaScript.

However, when it comes to writing automated test cases in Selenium and other frameworks, you need to have a strong understanding of Java or other programming languages. This requirement can make it more challenging for those who are not familiar with these languages.

te


Question - Can we perform end-to-end automation testing for a JavaScript web application using Selenium? 
Answer:- Yes, Selenium is a popular tool for end-to-end (E2E) testing of web applications, including those built with JavaScript frameworks like React, Angular, and Vue. Selenium allows you to automate interactions with web pages, simulate user actions, and validate expected behavior across different browsers, making it suitable for E2E testing in complex web applications. 
Selenium WebDriver can be used with JavaScript by setting it up with Node.js and integrating with a testing framework like Mocha or Jest. Here’s a quick overview of how to get started:

Question :- Which is the best automation testing framework for a JavaScript web application: Selenium or Cypress?

Answer When it comes to choosing between Selenium and Cypress for automating JavaScript web applications, it’s essential to consider their distinct strengths and limitations. Both frameworks are powerful, but they are best suited to different needs and scenarios

Cypress: Built specifically for modern web applications, Cypress is designed to work exclusively with JavaScript/TypeScript apps, offering a fast, easy-to-use testing experience within the browser.

Selenium: A versatile, cross-language tool, Selenium supports multiple languages (Java, C#, Python, etc.) and can automate any web application, across almost all browsers. Selenium's flexibility makes it ideal for scenarios where you need cross-browser support and language flexibility.
            </Text>
            <Separator />

            <Stack horizontal tokens={{ childrenGap: 30 }}>
              <Stack.Item>
                <Label>Cross-browser Testing</Label>
                <Text variant="small">
                  Cypress doesn’t support multiple cross-browser testing out of the box. For more information,
                  {/* <Link ref="https://docs.cypress.io/app/guides/cross-browser-testing#__docusaurus_skipToContent_fallback" target="_blank">
                    check the documentation.
                  </Link> */}
                </Text>
              </Stack.Item>
              <Stack.Item>
                <Label>Selenium vs Cypress</Label>
                <Text variant="small">
                  Selenium is cross-language and supports extensive browser testing. Cypress is ideal for JavaScript testing within the browser.
                </Text>
              </Stack.Item>
            </Stack>

            <Separator />

            <Text variant="xLarge" style={{ color: "#0078d4", fontWeight: "bold" }}>
              Step 2: Cypress Setup
            </Text>
            <Stack tokens={{ childrenGap: 10 }}>
              <Text variant="medium">Download & install Node.js and Visual Studio Code.</Text>
              <Text variant="medium">Create a new project folder and initialize with <code>npm init</code>.</Text>
              <Text variant="medium">Install Cypress: <code>npm install cypress --save-dev</code></Text>
              <DefaultButton text="Start Cypress" iconProps={{ iconName: "Play" }} onClick={() => alert('Starting Cypress...')} />
            </Stack>

            <Separator />

            <Text variant="xLarge" style={{ color: "#0078d4", fontWeight: "bold" }}>
              XPath & CSS Selectors
            </Text>
            <Stack tokens={{ childrenGap: 10 }}>
              <Text variant="medium">To use XPath in Cypress, install the plugin: <code>npm install -d cypress-xpath</code>.</Text>
              <Text variant="medium">Include the reference in <code>command.js</code>:</Text>
              <Text variant="small" style={{ backgroundColor: "#f4f4f4", padding: "5px" }}>
            ///&lt;reference types='cypress-xpath' /&gt;
              </Text>
            </Stack>

          </Stack>
        </div>
      </div>
      <button onClick={goOrders} className="btn btn-success">Go to order</button>
    </div>
  );
}

export default Home;
