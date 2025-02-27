const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
    ],
    enrollStudent: function(sectionNum) {
        const section = this.sections.find(section => section.sectionNum === sectionNum);
        section.enrolled++;
        displaySections(this.sections);
        // if section > 0 
        // this.sections[sectionNum].enrolled++;
    }
};

function getCourse(course) {
    document.getElementById("courseName").textContent = course.name;
    document.getElementById("courseCode").textContent = course.code;
}

function getSections(section) {
    return `
    <tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td>
    </tr>`;
}

function displaySections(sections) {
    const html = sections.map(getSections).join('');
    document.getElementById("sections").innerHTML = html;
}

getCourse(aCourse);
displaySections(aCourse.sections);