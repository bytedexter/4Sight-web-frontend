import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../constants';
import { CheckCircle, Lock, Trophy } from 'lucide-react';

const SeoGrader: React.FC = () => {
  const [step, setStep] = useState(0); // 0 to questions.length - 1 are questions. Length is gate. Length + 1 is result.
  const [answers, setAnswers] = useState<number[]>([]);
  const [gateForm, setGateForm] = useState({ name: '', phone: '' });

  const handleOptionSelect = (value: number) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    setStep(step + 1);
  };

  const handleGateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (gateForm.name && gateForm.phone) {
      setStep(step + 1);
    }
  };

  const totalScore = answers.reduce((a, b) => a + b, 0);
  const maxScore = QUIZ_QUESTIONS.length * 10;
  const percentage = Math.round((totalScore / maxScore) * 100);

  const getResultText = (pct: number) => {
    if (pct === 100) return { title: "SEO GOD MODE", color: "dark:text-neon-green text-accent-green" };
    if (pct > 50) return { title: "RISING STAR", color: "dark:text-neon-blue text-accent-blue" };
    return { title: "NEEDS 4SIGHT", color: "text-red-500" };
  };

  const resultData = getResultText(percentage);

  return (
    <section id="grader" className="py-24 dark:bg-gradient-to-b dark:from-transparent dark:to-black bg-gradient-to-b from-transparent to-slate-100">
      <div className="max-w-3xl mx-auto px-6">
        <div className="glass-panel rounded-[3rem] p-1 dark:border-white/20 border-slate-300 shadow-[0_0_50px_rgba(110,60,255,0.2)]">
          <div className="dark:bg-black/80 bg-white rounded-[2.8rem] p-8 md:p-12 min-h-[400px] flex flex-col justify-center items-center text-center relative overflow-hidden">

            {/* Header */}
            <div className="absolute top-8 left-0 w-full text-center">
              <span className="uppercase tracking-widest text-[10px] dark:text-gray-500 text-slate-500 font-bold">Free Utility</span>
              <h3 className="text-xl font-bold dark:text-white text-slate-900">SEO Maturity Grader</h3>
            </div>

            {/* Content Logic */}
            {step < QUIZ_QUESTIONS.length && (
              <div className="w-full max-w-md animate-fade-in-up mt-8">
                <div className="flex justify-between text-xs dark:text-gray-500 text-slate-500 mb-4 font-mono">
                  <span>QUESTION {step + 1} / {QUIZ_QUESTIONS.length}</span>
                  <span>{Math.round(((step) / QUIZ_QUESTIONS.length) * 100)}% COMPLETE</span>
                </div>
                <h4 className="text-2xl font-bold mb-8 dark:text-white text-slate-900">{QUIZ_QUESTIONS[step].text}</h4>
                <div className="flex flex-col gap-3">
                  {QUIZ_QUESTIONS[step].options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOptionSelect(opt.value)}
                      className="w-full p-4 rounded-xl dark:border-white/10 border-slate-200 border dark:hover:bg-white/10 hover:bg-slate-100 dark:hover:border-neon-purple hover:border-accent-purple transition-all text-left font-medium dark:text-white text-slate-800"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === QUIZ_QUESTIONS.length && (
              <div className="w-full max-w-md animate-fade-in-up">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 dark:bg-white/5 bg-slate-100 rounded-full flex items-center justify-center dark:text-neon-blue text-accent-blue">
                    <Lock size={32} />
                  </div>
                </div>
                <h4 className="text-2xl font-bold mb-2 dark:text-white text-slate-900">Unlock Your Score</h4>
                <p className="dark:text-gray-400 text-slate-500 mb-8 text-sm">Enter your details to reveal your personalized SEO report.</p>

                <form onSubmit={handleGateSubmit} className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="dark:bg-white/5 bg-slate-50 dark:border-white/10 border-slate-200 border rounded-xl p-4 dark:text-white text-slate-900 dark:placeholder-gray-500 placeholder-slate-400 focus:outline-none focus:border-neon-blue transition-colors"
                    value={gateForm.name}
                    onChange={(e) => setGateForm({ ...gateForm, name: e.target.value })}
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className="dark:bg-white/5 bg-slate-50 dark:border-white/10 border-slate-200 border rounded-xl p-4 dark:text-white text-slate-900 dark:placeholder-gray-500 placeholder-slate-400 focus:outline-none focus:border-neon-blue transition-colors"
                    value={gateForm.phone}
                    onChange={(e) => setGateForm({ ...gateForm, phone: e.target.value })}
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold p-4 rounded-xl hover:opacity-90 transition-opacity mt-2"
                  >
                    Reveal Score
                  </button>
                </form>
              </div>
            )}

            {step > QUIZ_QUESTIONS.length && (
              <div className="w-full max-w-md animate-pulse-once">
                <div className="mb-6 flex justify-center">
                  <Trophy size={64} className={resultData.color} />
                </div>
                <h4 className="text-lg dark:text-gray-400 text-slate-500 mb-2">Your Maturity Level</h4>
                <h2 className={`text-5xl font-extrabold mb-6 ${resultData.color}`}>{resultData.title}</h2>
                <div className="text-6xl font-black dark:text-white text-slate-900 mb-8">
                  {percentage}<span className="text-2xl dark:text-gray-500 text-slate-400">%</span>
                </div>
                <p className="dark:text-gray-300 text-slate-600 mb-8">
                  {percentage < 50
                    ? "Your site is invisible to Google. 4Sight can fix this in < 24 hours."
                    : "You're doing great, but 4Sight can push you to the top spot."}
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="dark:bg-white dark:text-black bg-slate-900 text-white px-8 py-3 rounded-full font-bold dark:hover:bg-gray-200 hover:bg-slate-800 transition-colors"
                >
                  Start Over
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoGrader;

