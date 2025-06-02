function corrigirQuiz(){
    let score = 0;

    const resposta_1 = document.getElementById("q1").value;
    const resposta_2 = document.getElementById("q2").value;
    const resposta_3 = document.getElementById("q3").value;
    const resposta_4 = document.getElementById("q4").value;
    const resposta_5 = document.getElementById("q5").value;

    if (resposta_1 === "C") score++;
    if (resposta_2 === "C") score++;
    if (resposta_3 === "B") score++;
    if (resposta_4 === "B") score++;
    if (resposta_5 === "D") score++;

    document.getElementById("resultado").textContent = `Obrigado por participar! Sua pontuação foi: ${score}/5`;
}