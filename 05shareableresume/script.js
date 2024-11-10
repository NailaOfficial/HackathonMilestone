var form = document.getElementById('Resumeform');
var shareLinkButton = document.getElementById('shareLink');
var downloadPDFButton = document.getElementById('downloadPDF');
var fileUpload = document.getElementById('fileUpload');
var profileImage = document.getElementById('profileImage');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    
    var resumeOutput = "\n        <h2>".concat(name, "</h2>\n        <p>Email: ").concat(email, "</p>\n        <p>Phone: ").concat(phone, "</p>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n    ");
    document.getElementById('resumeOutput').innerHTML = resumeOutput;
});

shareLinkButton.addEventListener('click', function () {
    var resumeOutputDiv = document.getElementById('resumeOutput');
    var resumeHTML = resumeOutputDiv.innerHTML;
    var blob = new Blob([resumeHTML], { type: 'text/html' });
    var url = URL.createObjectURL(blob);
    alert("Shareable Link: ".concat(url));
});

fileUpload.addEventListener('change', function (e) {
    var target = e.target;
    if (target.files && target.files.length > 0) {
        var file = target.files[0];
        var reader = new FileReader();
        reader.onload = function (event) {
            var _a;
            var imageUrl = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
            if (profileImage) {
                profileImage.src = imageUrl;
                profileImage.style.display = 'block';
            }
        };
        reader.readAsDataURL(file);
    }
});

downloadPDFButton.addEventListener('click', function () {
    var jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    doc.text("Name: ".concat(name), 10, 10);
    doc.text("Email: ".concat(email), 10, 20);
    doc.text("Phone: ".concat(phone), 10, 30);
    doc.text("Education: ".concat(education), 10, 40);
    doc.text("Experience: ".concat(experience), 10, 50);
    doc.text("Skills: ".concat(skills), 10, 60);
    doc.save('resume.pdf');
});
