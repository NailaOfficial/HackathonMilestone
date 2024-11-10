document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('Resumeform') as HTMLFormElement | null;
    const resumeOutput = document.getElementById('resumeOutput') as HTMLElement | null;

    if (form && resumeOutput) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = (document.getElementById('name') as HTMLInputElement).value;
            const email = (document.getElementById('email') as HTMLInputElement).value;
            const phone = (document.getElementById('phone') as HTMLInputElement).value;
            const education = (document.getElementById('education') as HTMLTextAreaElement).value;
            const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
            const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

            resumeOutput.innerHTML = `
                <h2>Generated Resume</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Education:</strong> ${education}</p>
                <p><strong>Experience:</strong> ${experience}</p>
                <p><strong>Skills:</strong> ${skills}</p>
            `;
        });
    } else {
        console.error("Form or output element not found!");
    }
});
