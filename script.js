function calculateScore() {
    let score = 0;

    for (let i = 1; i <= 10; i++) {
        const question = document.querySelector(`input[name="q${i}"]:checked`);
        if (question) {
            score += parseInt(question.value);
        }
    }

    const resultDiv = document.getElementById('result');
    if (score <= 5) {
        resultDiv.textContent = 'Low Addiction Level';
    } else if (score <= 10) {
        resultDiv.textContent = 'Moderate Addiction Level';
    } else {
        resultDiv.textContent = 'High Addiction Level';
    }
}
