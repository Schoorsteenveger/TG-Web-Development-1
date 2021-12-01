// Met Roibin
const compareDates = (d1, d2) => {
    const msPerDay = 1000 * 3600 * 24;
    // const msPerDay = 1000 * 60 * 60 * 24;
    const date1 = new Date(d1).getTime();
    const date2 = new Date(d2).getTime();


    if (date1 > date2) {
        const difference = date1 - date2;
        return difference / msPerDay;

    }

    return (date2 - date1) / msPerDay;


    // console.log(difference);
}
const difference = compareDates("05/03/1989", "01/16/1972");
console.log(difference);

// Janou's wat kortere oplossing.

// const date1 = new Date ("01/16/1972");
// const date2 = new Date ("05/03/1989");

// const differenceMillseconds = date2.getTime() - date1.getTime();
// console.log(differenceMillseconds); 

// const differenceDays = differenceMillseconds /(1000 * 3600 * 24);
// console.log(differenceDays);
