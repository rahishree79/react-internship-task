# React Internship Tasks

## Task 2 - Stamina Burner

This project is built using React and Vite.  
It simulates a coding stamina tracker where stamina decreases when the user clicks the button.

---

# Virtual DOM Explanation

React uses the Virtual DOM to track changes in the stamina state efficiently.  
When the stamina value updates, React compares the updated Virtual DOM with the previous version and updates only the changed elements in the real DOM instead of reloading the entire page.

---

# Modulus Logic for 5th Click Bug

```javascript
if (totalTaps % 5 === 0) {
    remainingEnergy = energy - 15;
}
else {
    remainingEnergy = energy - 2;
}
```

---

# Differences Between Vite and Create React App (CRA)

| Vite | Create React App |
|------|------------------|
| Faster startup time | Slower startup time |
| Uses native ES modules | Uses Webpack |
| Better hot reload performance | Slower hot reload |

---

# Technologies Used

- React
- JavaScript
- Vite
- CSS
