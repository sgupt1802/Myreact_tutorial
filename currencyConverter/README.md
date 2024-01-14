## Step by Step breakdown of project
- **Step1:** So first we made our own custom hook-useCurrencyInfo to get the latest currency exchange rates through an API call using the fetch statement.We converted the data in the JSON format and through the useState hook, we set the data.We amde the use of useEffect hook to recall the function when the currency gets changed.

- **Step2:** After this we made our own JSX for the input boxes named InputBox.jsx. We took all the parameters label, amount,onAmountChange onCurrencyChange,currencyOptions (empty array),
selectCurrency = "usd",amountDisable = false,
currencyDisable = false,

   - We placed all these parameters in the return, "on AmountChange" and "onCurrencyChange" are for the onchange function in the input. The "amount" is for the current amount that needs to be converted.

  - In the "select" tag we have to give all the options available for exchange. Hence the value in it is "selectCurrency". After this we made the loop using the .map() function for each currency (we also used the key for the loop) 

- **Step3:** In the end the InputBox component has to be rendered in the App.jsx. The from,to,amount and converted amount has to be changed in the actual DOM by react so they are the Props to the InputBox component. All the props were made by the useState hook in App.jsx. "currencyInfo" variable is made for the custom hook to get the latest exchange rate.

    - Object.keys() function is used to get the list of other currencies and it was assigned to "options".

    - The "swap" and the "convert" methods were designed.

    - The props made earlier were passed to the InputBox and onCurrencyChange and onAmountChange methods were designed in the props.
##  Hence the project was made. 