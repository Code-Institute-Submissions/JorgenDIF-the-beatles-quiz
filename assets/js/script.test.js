// Test case 1: Check if the questions array is defined
test('questions array is defined', () => {
  expect(questions).toBeDefined();
});

// Test case 2: Check if the questions array is not empty
test('questions array is not empty', () => {
  expect(questions.length).toBeGreaterThan(0);
});

// Test case 3: Check if each question has a difficulty property
test('each question has a difficulty property', () => {
  questions.forEach((question) => {
    expect(question.difficulty).toBeDefined();
  });
});

// Test case 4: Check if each question has a question property
test('each question has a question property', () => {
  questions.forEach((question) => {
    expect(question.question).toBeDefined();
  });
});

// Test case 5: Check if each question has an answers array
test('each question has an answers array', () => {
  questions.forEach((question) => {
    expect(question.answers).toBeDefined();
    expect(Array.isArray(question.answers)).toBe(true);
  });
});

// Test case 6: Check if each answer in the answers array has a text property
test('each answer has a text property', () => {
  questions.forEach((question) => {
    question.answers.forEach((answer) => {
      expect(answer.text).toBeDefined();
    });
  });
});

// Test case 7: Check if each answer in the answers array has a correct property
test('each answer has a correct property', () => {
  questions.forEach((question) => {
    question.answers.forEach((answer) => {
      expect(answer.correct).toBeDefined();
    });
  });
});