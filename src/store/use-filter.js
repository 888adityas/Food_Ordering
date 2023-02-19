// pass array of objects and the string you want to search for, in the custom hook;
const useFilter = (arrOfObj, value) => {
    let filteredArray;
    if (value) {
        filteredArray = arrOfObj.filter((item) => item.name.toLowerCase().includes(value.trim()));
        return { filteredArray };
    } else {
        filteredArray = [...arrOfObj]
        return { filteredArray };
    }

}

export default useFilter;