import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Clock,
  CheckCircle,
  XCircle,
  RotateCcw,
  Trophy,
  Star,
  Brain,
} from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

const TriviaPage: React.FC = () => {
  const [gameState, setGameState] = useState<"menu" | "playing" | "finished">(
    "menu"
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>([]);

  const questions: Question[] = [
    {
      id: 1,
      question:
        "Which author wrote the famous quote: 'To be or not to be, that is the question'?",
      options: [
        "Charles Dickens",
        "William Shakespeare",
        "Jane Austen",
        "Mark Twain",
      ],
      correctAnswer: 1,
      explanation:
        "This iconic line is from Hamlet's soliloquy in Shakespeare's play 'Hamlet'.",
      category: "Literature",
    },
    {
      id: 2,
      question: "In which novel does the character Atticus Finch appear?",
      options: [
        "To Kill a Mockingbird",
        "Of Mice and Men",
        "The Great Gatsby",
        "1984",
      ],
      correctAnswer: 0,
      explanation:
        "Atticus Finch is the moral hero in Harper Lee's 'To Kill a Mockingbird'.",
      category: "Literature",
    },
    {
      id: 3,
      question: "What is the opening line of George Orwell's '1984'?",
      options: [
        "In a hole in the ground there lived a hobbit",
        "Call me Ishmael",
        "It was the best of times, it was the worst of times",
        "It was a bright cold day in April, and the clocks were striking thirteen",
      ],
      correctAnswer: 3,
      explanation:
        "This famous opening immediately establishes the dystopian setting of Orwell's masterpiece.",
      category: "Literature",
    },
    {
      id: 4,
      question:
        "Who said: 'The only way to do great work is to love what you do'?",
      options: [
        "Albert Einstein",
        "Steve Jobs",
        "Maya Angelou",
        "Winston Churchill",
      ],
      correctAnswer: 1,
      explanation:
        "Steve Jobs shared this wisdom in his famous Stanford commencement speech.",
      category: "Quotes",
    },
    {
      id: 5,
      question: "Which Greek philosopher said: 'I know that I know nothing'?",
      options: ["Aristotle", "Plato", "Socrates", "Pythagoras"],
      correctAnswer: 2,
      explanation:
        "This paradoxical statement represents Socratic wisdom and intellectual humility.",
      category: "Philosophy",
    },
  ];

  const currentQuestion = questions[currentQuestionIndex];

  // Timer effect
  useEffect(() => {
    if (gameState === "playing" && !showResult && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResult) {
      handleTimeUp();
    }
  }, [gameState, timeLeft, showResult]);

  const startGame = () => {
    setGameState("playing");
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimeLeft(30);
    setAnsweredQuestions(new Array(questions.length).fill(false));
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    setShowResult(true);
    const newAnsweredQuestions = [...answeredQuestions];
    newAnsweredQuestions[currentQuestionIndex] = true;
    setAnsweredQuestions(newAnsweredQuestions);

    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setTimeLeft(30);
    } else {
      setGameState("finished");
    }
  };

  const handleTimeUp = () => {
    setShowResult(true);
    const newAnsweredQuestions = [...answeredQuestions];
    newAnsweredQuestions[currentQuestionIndex] = true;
    setAnsweredQuestions(newAnsweredQuestions);
  };

  const resetGame = () => {
    setGameState("menu");
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setTimeLeft(30);
    setAnsweredQuestions([]);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80)
      return { message: "Excellent!", icon: Trophy, color: "text-yellow-400" };
    if (percentage >= 60)
      return { message: "Good job!", icon: Star, color: "text-blue-400" };
    return { message: "Keep learning!", icon: Brain, color: "text-gray-400" };
  };

  // Menu Screen
  if (gameState === "menu") {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-100">
        <header className="bg-gray-800 border-b border-gray-700 px-4 py-4">
          <div className="max-w-4xl mx-auto flex items-center">
            <button className="text-gray-300 hover:text-blue-300 mr-4">
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-2xl font-bold text-gray-100">Trivia</h1>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="bg-gray-800 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <Brain className="text-blue-400 mx-auto mb-6" size={64} />
              <h2 className="text-3xl font-bold mb-4">Test Your Knowledge</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Challenge yourself with questions about literature, quotes, and
                famous stories. Each question has a 30-second timer!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-700 rounded-xl p-4">
                  <h3 className="font-semibold text-blue-400">Questions</h3>
                  <p className="text-2xl font-bold">{questions.length}</p>
                </div>
                <div className="bg-gray-700 rounded-xl p-4">
                  <h3 className="font-semibold text-blue-400">
                    Time per Question
                  </h3>
                  <p className="text-2xl font-bold">30s</p>
                </div>
                <div className="bg-gray-700 rounded-xl p-4">
                  <h3 className="font-semibold text-blue-400">Categories</h3>
                  <p className="text-2xl font-bold">3</p>
                </div>
              </div>

              <button
                onClick={startGame}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Start Trivia
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Game Screen
  if (gameState === "playing") {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-100">
        <header className="bg-gray-800 border-b border-gray-700 px-4 py-4">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={resetGame}
                className="text-gray-300 hover:text-blue-300 mr-4"
              >
                <ArrowLeft size={24} />
              </button>
              <h1 className="text-2xl font-bold text-gray-100">
                Question {currentQuestionIndex + 1} of {questions.length}
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-blue-400">
                <Trophy size={20} className="mr-1" />
                <span className="font-semibold">{score}</span>
              </div>
              <div
                className={`flex items-center ${
                  timeLeft <= 10 ? "text-red-400" : "text-gray-300"
                }`}
              >
                <Clock size={20} className="mr-1" />
                <span className="font-semibold">{timeLeft}s</span>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Progress</span>
              <span>
                {Math.round(
                  ((currentQuestionIndex + 1) / questions.length) * 100
                )}
                %
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${
                    ((currentQuestionIndex + 1) / questions.length) * 100
                  }%`,
                }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-gray-800 rounded-2xl p-8 shadow-lg mb-8">
            <div className="mb-6">
              <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                {currentQuestion.category}
              </span>
            </div>

            <h2 className="text-2xl font-bold mb-8 leading-relaxed">
              {currentQuestion.question}
            </h2>

            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                    selectedAnswer === index
                      ? showResult
                        ? index === currentQuestion.correctAnswer
                          ? "border-green-500 bg-green-900/20 text-green-300"
                          : "border-red-500 bg-red-900/20 text-red-300"
                        : "border-blue-500 bg-blue-900/20 text-blue-300"
                      : showResult && index === currentQuestion.correctAnswer
                      ? "border-green-500 bg-green-900/20 text-green-300"
                      : "border-gray-600 bg-gray-700 hover:border-gray-500 hover:bg-gray-650"
                  }`}
                >
                  <div className="flex items-center">
                    <span className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-sm font-medium mr-3">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="flex-1">{option}</span>
                    {showResult && (
                      <div className="ml-3">
                        {index === currentQuestion.correctAnswer ? (
                          <CheckCircle className="text-green-400" size={24} />
                        ) : selectedAnswer === index ? (
                          <XCircle className="text-red-400" size={24} />
                        ) : null}
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {showResult && (
              <div className="mt-6 p-4 bg-gray-700 rounded-xl">
                <p className="text-gray-300">{currentQuestion.explanation}</p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4">
            {!showResult ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-8 py-3 rounded-xl font-semibold transition-all"
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all"
              >
                {currentQuestionIndex < questions.length - 1
                  ? "Next Question"
                  : "Finish Game"}
              </button>
            )}
          </div>
        </main>
      </div>
    );
  }

  // Results Screen
  if (gameState === "finished") {
    const scoreInfo = getScoreMessage();
    const ScoreIcon = scoreInfo.icon;

    return (
      <div className="min-h-screen bg-gray-900 text-gray-100">
        <header className="bg-gray-800 border-b border-gray-700 px-4 py-4">
          <div className="max-w-4xl mx-auto flex items-center">
            <button
              onClick={resetGame}
              className="text-gray-300 hover:text-blue-300 mr-4"
            >
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-2xl font-bold text-gray-100">Quiz Complete!</h1>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="bg-gray-800 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <ScoreIcon
                className={`mx-auto mb-6 ${scoreInfo.color}`}
                size={64}
              />
              <h2 className="text-3xl font-bold mb-4">{scoreInfo.message}</h2>

              <div className="mb-8">
                <div className="text-6xl font-bold text-blue-400 mb-2">
                  {score}/{questions.length}
                </div>
                <p className="text-gray-300 text-lg">
                  You answered {score} out of {questions.length} questions
                  correctly
                </p>
                <p className="text-gray-400">
                  That's {Math.round((score / questions.length) * 100)}%
                  accuracy!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={startGame}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all flex items-center justify-center"
                >
                  <RotateCcw className="mr-2" size={20} />
                  Play Again
                </button>
                <button
                  onClick={resetGame}
                  className="bg-gray-700 hover:bg-gray-600 text-gray-100 px-8 py-3 rounded-xl font-semibold transition-all"
                >
                  Back to Menu
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return null;
};

export default TriviaPage;
