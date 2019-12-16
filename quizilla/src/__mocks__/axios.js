'use-strict';
module.exports = {
    get: () => {
        return Promise.resolve({
            data: [
                {
                    results: [
                    {
                        category: "Mythology",
                        type: "multiple",
                        difficulty: "hard",
                        question: "Talos, the mythical giant bronze man, was the protector of which island?",
                        correct_answer: "Crete",
                        incorrect_answers: [
                            "Sardinia",
                            "Sicily",
                            "Cyprus"
                            ]
                        }
                    ]
                }
            ]
        })
    }
}