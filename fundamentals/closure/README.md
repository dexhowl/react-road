# Closure

This small project is a demonstation of how closures can help solve issues of variable scope. 

## Definition
- A `Closure` is the combination of a function bundled together with references to it's surrounding state. 

---
You'll find tha this project shows not just the solution but how we get there in a few steps. 

## Changelog

`5c48bfd` - Here this project is created with no unique identifier for each employee aside from the variable name. As variable names are subject to change this is not an ideal way to store these values. 

`c1817e1` - Created a variable `id` to represent the new unique identifier. There is also a built in auto-incrementer that prevents us from having to keep track of them manually.

`0e804a9` - The caveat to the previous commit is revealed here. Unfortunately because of the scope of our `id` variable it's not safe to keep this implementation of our unique identifier. 

`449118a` - Here we implement a `factory pattern` to solve this issue. Moving our `id` variable back inside our outer function, we are able to pass the value of id to the inner function and manipulate it. 
- Keep in mind, with this implementation, we are no longer giving access to the variable on a global level. 
 - To demo this, you can try to `console.log(id)` or `id = ''` outside the function before the employee names are passed to our factory. 
 - You should notice there's no impact when trying to change the value of `id` and that you receive and error of `undefined` when attepmting to `console.log(id)` as a result of this change in scope.    

 ## Factory Pattern (Optional)
 - I'll admit I don't totally understand this concept yet but it seems this is similar to a `Class` but without the need for a constructor. Maybe it's closer to an `Interface`.
 - The main idea thus far seems to be that this pattern can be used to create multiple objects that share the same properties. On the other hand, a `Class` and constructor will create an entirely new instance, not an object.
 - At the core, it's an additional method of providing encapsulation and managing state. 