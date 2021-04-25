#Part 3

1. The bug was that the two numbers are stored as strings and because of this when they are added together they are appended into one string rather than being added together numerically.
2. In order to fix this I would convert the input received for both num1 and num2 respectively into a Number type via the Number() function. This way when the + operator is applied it will actually give us a sum rather than appending the two strings. The screenshot can be seen below with my fix being the addition of Number() surrounding the two inputs on line 3 and line 4. I also ran through it using the debugger to show the new result was correct as can be seen on line 9. ![fixed addition](/part3/part3-question2.png) The screenshot can also be found within the screenshots folder as part3-question2.png in case the embedded one is hard to read.
3. The new file name was `citylots.json`
4. The file `part2.js` initiated the download of the new file.
5. `11.7 mb` is the size of the new file. 
6. It took roughly 59ms to download. After testing the speed 10 times that was the average and it fell anywhere between 58-61ms each time.
7. My User-Agent is: `Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36` 
8. The response came from an Apache server.
9. The file was last modified `Tue, 26 Jan 2021 22:14:13 GMT`
10. The Content-Type is `application/json`
11. The method inside of part2.js that initiated the file was the `fetchData` function that called the `fetch('./citylots.json')` method.