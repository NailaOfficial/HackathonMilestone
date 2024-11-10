const form = document.getElementById('Resumeform') as HTMLFormElement;
const shareLinkButton = document.getElementById('shareLink') as HTMLButtonElement;
const downloadPDFButton = document.getElementById('downloadPDF') as HTMLButtonElement;
const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;
const profileImage = document.getElementById('profileImage') as HTMLImageElement;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    const resumeOutput = `
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
    `;
    document.getElementById('resumeOutput')!.innerHTML = resumeOutput;
});

shareLinkButton.addEventListener('click', () => {
    const resumeOutputDiv = document.getElementById('resumeOutput')!;
    const resumeHTML = resumeOutputDiv.innerHTML;
    const blob = new Blob([resumeHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    alert(`Shareable Link: ${url}`);
});

fileUpload.addEventListener('change', (e: Event) => {
    const target = e.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
        const file = target.files[0];
        const reader = new FileReader();
        reader.onload = (event: ProgressEvent<FileReader>) => {
            const imageUrl = event.target?.result as string;
            if (profileImage) {
                profileImage.src = imageUrl;
                profileImage.style.display = 'block';
            }
        };
        reader.readAsDataURL(file);
    }
});


downloadPDFButton.addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    doc.text(`Name: ${name}`, 10, 10);
    doc.text(`Email: ${email}`, 10, 20);
    doc.text(`Phone: ${phone}`, 10, 30);
    doc.text(`Education: ${education}`, 10, 40);
    doc.text(`Experience: ${experience}`, 10, 50);
    doc.text(`Skills: ${skills}`, 10, 60);

    doc.save('resume.pdf');
});
