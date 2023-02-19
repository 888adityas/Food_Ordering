React concepts I have used:
- debounce with useEffect for search input
- useCallback because I have passed a function in useEffect

Problems I have Faced:
Prob 1 - cart animation does work on first click, after that did not work (with usEffect).
reason - execution of thread was so fast ,that it did't wait for the animation class to reset in the 
	CLEANUP function. it quickly resets and useEffect runs again ,so we could not see that resetting.

solution - use setTimeout() for delay in effect, so that your CLEANUP will have sufficient time for threads.

Prob 2 - filter method worked but once I added the filterd item I want , the array of items re-sets.
solution - was not returning the reducer state values properly in the add() function, there were 3 state variables
	and I was updating only 2. so the array is updated on the basis of default search value which is "" null.