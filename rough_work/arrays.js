//Activity 1

const steps = ["one", "two", "three"];
function listTemplate(step)
{
return `<li>${step}</li>`; // return a string of HTML
}
const stepsHtml = steps.map(listTemplate); // use map to convert the list from strings to HTML
// document.querySelector("#myList").innerHTML = stepsHtml.join(" "); // set the innerHTML

//Activity 2

const grades = ['A', 'B', 'A', 'C', 'B', 'A'];

function countGrades(grade)
{
    if (grade === 'A')
    {
        return 4;
    }
    else if (grade === 'B')
    {
        return 3;
    }
    else if (grade === 'C')
    {
        return 2;
    }
}

const gpaPoints = grades.map(countGrades);
console.log(gpaPoints);

//Activity 3
const gpa = gpaPoints.reduce((total, points) => total + points, 0) / gpaPoints.length;
console.log(gpa);
