function checkExam(correctAnswers: string[], studentAnswers: string[]): number {
  const score = correctAnswers.reduce((result, correct, i) => {
    const studentAnswer = studentAnswers[i];
    if (studentAnswer === correct) return result + 4;
    if (studentAnswer === "") return result;

    return result - 1;
  }, 0);

  return Math.max(0, score);
}
