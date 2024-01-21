const qAForm = document.getElementById('qA');
const contactInput = document.getElementById('contact');
const questionInput = document.getElementById('question');

contactForm.addEventListener('submit', async e => {
    e.preventDefault();

    if (questionInput.value) {
        console.log("test")
        await fetch('http://localhost:8000/q-and-a/add', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contact: contactInput.value,
                question: questionInput.value,
            }),
        });
        contactInput.value = '';
        questionInput.value = '';
        console.log('add q and a complete')
    } else {
        console.error("need question")
    }
  
});