# Firebase onAuthStateChanged Unsubscribe

This repository demonstrates a common error when using Firebase's `onAuthStateChanged` listener: forgetting to unsubscribe.  Failing to unsubscribe leads to memory leaks and can prevent proper cleanup when a user signs out or the component unmounts.

The `authBug.js` file showcases the problematic code. The solution, `authBugSolution.js`, demonstrates how to correctly unsubscribe using the returned unsubscribe function.