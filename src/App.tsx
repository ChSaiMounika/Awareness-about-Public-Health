import { useState } from 'react';
import {
  Heart,
  Activity,
  Stethoscope,
  Shield,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Droplets,
  Moon,
  Apple,
  Brain,
  Sparkles,
  ChevronRight,
  AlertTriangle,
  Ambulance,
  Clock,
  Users,
  BookOpen,
  Calendar,
  TrendingUp,
  Award,
  CheckCircle,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  HeartPulse,
  Thermometer,
  Bug,
  Biohazard,
  Pill,
  Syringe,
  Hand,
  Salad,
  Dumbbell,
  BedDouble,
  BrainCircuit,
  ClipboardList,
  GraduationCap,
  History,
  Library,
  Play,
} from 'lucide-react';

type ActiveSection = 'home' | 'journey';

interface QuizAnswer {
  questionId: number;
  answer: string;
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<ActiveSection>('home');
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswer[]>([]);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [activeLearningTab, setActiveLearningTab] = useState<'activities' | 'learning' | 'timeline' | 'library'>('activities');

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Awareness Check', href: '#awareness' },
    { name: 'Diseases', href: '#diseases' },
    { name: 'Prevention', href: '#prevention' },
    { name: 'Resources', href: '#resources' },
    { name: 'Quiz', href: '#quiz' },
    { name: 'Contact', href: '#contact' },
  ];

  const healthQuestions = [
    {
      id: 1,
      question: 'How are you feeling today?',
      options: ['Excellent', 'Good', 'Fair', 'Not Well'],
      info: 'Regular self-assessment helps identify health patterns and early warning signs.',
    },
    {
      id: 2,
      question: 'Do you exercise regularly?',
      options: ['Daily', '3-4 times/week', 'Occasionally', 'Rarely'],
      info: 'Regular exercise reduces risk of chronic diseases by up to 50%.',
    },
    {
      id: 3,
      question: 'How many hours do you sleep daily?',
      options: ['8+ hours', '6-7 hours', '4-5 hours', 'Less than 4 hours'],
      info: 'Adults need 7-9 hours of quality sleep for optimal health.',
    },
    {
      id: 4,
      question: 'How much water do you drink every day?',
      options: ['8+ glasses', '5-7 glasses', '3-4 glasses', 'Less than 3 glasses'],
      info: 'Proper hydration is essential for body functions and disease prevention.',
    },
    {
      id: 5,
      question: 'Have you had a health checkup in the last year?',
      options: ['Yes', 'Planning to', 'Not yet', 'Not needed'],
      info: 'Annual checkups can detect health issues early when they are most treatable.',
    },
    {
      id: 6,
      question: 'Do you know the symptoms of Dengue?',
      options: ['Very familiar', 'Somewhat', 'Heard of it', 'No awareness'],
      info: 'Common symptoms: High fever, severe headache, joint pain, rash. Seek immediate medical help if suspected.',
    },
    {
      id: 7,
      question: 'Do you know the symptoms of Diabetes?',
      options: ['Very familiar', 'Somewhat', 'Heard of it', 'No awareness'],
      info: 'Warning signs: Frequent urination, excessive thirst, unexplained weight loss, fatigue.',
    },
    {
      id: 8,
      question: 'Are you aware of emergency health services?',
      options: ['Very aware', 'Somewhat', 'Limited', 'Not aware'],
      info: 'Know emergency numbers: 108 for Ambulance, 104 for Health Helpline. Save lives by acting fast!',
    },
  ];

  const awarenessTips = [
    {
      icon: Salad,
      title: 'Healthy Diet',
      description: 'Eat a balanced diet rich in fruits, vegetables, whole grains, and lean proteins to boost immunity.',
      color: 'bg-green-500',
    },
    {
      icon: Dumbbell,
      title: 'Exercise',
      description: 'Stay active with at least 150 minutes of moderate exercise per week for better health.',
      color: 'bg-blue-500',
    },
    {
      icon: Droplets,
      title: 'Hydration',
      description: 'Drink 8-10 glasses of water daily to keep your body functioning optimally.',
      color: 'bg-cyan-500',
    },
    {
      icon: BedDouble,
      title: 'Sleep',
      description: 'Get 7-9 hours of quality sleep each night to allow your body to rest and recover.',
      color: 'bg-indigo-500',
    },
    {
      icon: Hand,
      title: 'Hygiene',
      description: 'Practice good hygiene habits to prevent infections and stay healthy.',
      color: 'bg-teal-500',
    },
    {
      icon: Brain,
      title: 'Mental Well-being',
      description: 'Take care of your mental health through stress management and self-care practices.',
      color: 'bg-purple-500',
    },
  ];

  const diseases = [
    {
      name: 'Diabetes',
      icon: Activity,
      description: 'A chronic condition affecting how your body processes blood sugar (glucose).',
      symptoms: ['Increased thirst', 'Frequent urination', 'Fatigue', 'Blurred vision'],
      prevention: 'Regular exercise, healthy diet, maintain healthy weight',
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Dengue',
      icon: Bug,
      description: 'A mosquito-borne viral infection that can cause severe flu-like symptoms.',
      symptoms: ['High fever', 'Severe headache', 'Joint pain', 'Skin rash'],
      prevention: 'Use mosquito nets, eliminate standing water, wear protective clothing',
      color: 'from-red-500 to-red-600',
    },
    {
      name: 'Tuberculosis',
      icon: Biohazard,
      description: 'An infectious disease that mainly affects the lungs but can spread to other organs.',
      symptoms: ['Persistent cough', 'Weight loss', 'Night sweats', 'Fever'],
      prevention: 'Good ventilation, avoid close contact with infected persons, BCG vaccination',
      color: 'from-amber-500 to-amber-600',
    },
    {
      name: 'Malaria',
      icon: Thermometer,
      description: 'A life-threatening mosquito-borne disease caused by parasites.',
      symptoms: ['High fever', 'Chills', 'Headache', 'Nausea'],
      prevention: 'Use insecticide-treated nets, mosquito repellents, travel precautions',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      name: 'Heart Disease',
      icon: HeartPulse,
      description: 'Various conditions affecting the heart including coronary artery disease.',
      symptoms: ['Chest pain', 'Shortness of breath', 'Fatigue', 'Irregular heartbeat'],
      prevention: 'Regular exercise, quit smoking, manage stress, healthy diet',
      color: 'from-pink-500 to-pink-600',
    },
    {
      name: 'Cancer',
      icon: AlertTriangle,
      description: 'Uncontrolled cell growth that can spread to other parts of the body.',
      symptoms: ['Unexplained weight loss', 'Fatigue', 'Lumps', 'Changes in skin'],
      prevention: 'Avoid tobacco, limit alcohol, protect from sun, regular screenings',
      color: 'from-violet-500 to-violet-600',
    },
  ];

  const preventionCards = [
    {
      icon: Hand,
      title: 'Hand Hygiene',
      description: 'Wash hands regularly for at least 20 seconds with soap and water.',
    },
    {
      icon: Dumbbell,
      title: 'Stay Active',
      description: 'Exercise regularly to maintain a healthy weight and reduce disease risk.',
    },
    {
      icon: Salad,
      title: 'Balanced Nutrition',
      description: 'Include fruits, vegetables, and whole grains in your daily diet.',
    },
    {
      icon: BedDouble,
      title: 'Quality Sleep',
      description: 'Maintain a consistent sleep schedule for better immune function.',
    },
    {
      icon: Stethoscope,
      title: 'Regular Checkups',
      description: 'Get annual health screenings for early detection and prevention.',
    },
    {
      icon: Pill,
      title: 'Vaccination',
      description: 'Stay up-to-date with recommended vaccines for disease prevention.',
    },
  ];

  const resources = [
    { icon: BookOpen, title: 'Health Guidelines', description: 'Access official public health guidelines and recommendations.' },
    { icon: GraduationCap, title: 'Health Education', description: 'Learn about disease prevention and healthy lifestyle practices.' },
    { icon: Users, title: 'Community Programs', description: 'Join local health awareness and community wellness initiatives.' },
    { icon: Phone, title: 'Telehealth Services', description: 'Connect with healthcare professionals through virtual consultations.' },
  ];

  const timelineData = [
    {
      year: '2005',
      title: 'Lifestyle Disease Awareness Rise',
      description: 'Growing recognition of lifestyle-related diseases like diabetes and heart conditions.',
      icon: TrendingUp,
    },
    {
      year: '2010',
      title: 'Chronic Disease Prevention Focus',
      description: 'National programs targeting diabetes and cardiovascular disease prevention launched.',
      icon: Heart,
    },
    {
      year: '2015',
      title: 'Dengue Prevention Push',
      description: 'Increased awareness campaigns for mosquito-borne diseases like Dengue.',
      icon: Bug,
    },
    {
      year: '2020',
      title: 'COVID-19 Public Health Impact',
      description: 'Global pandemic transformed public health awareness and hygiene practices.',
      icon: Biohazard,
    },
    {
      year: '2023',
      title: 'Mental Health Awareness Growth',
      description: 'Mental health recognition and support systems expanded significantly.',
      icon: Brain,
    },
    {
      year: '2025',
      title: 'Modern Healthcare Prevention',
      description: 'AI and technology integration in preventive healthcare and early detection.',
      icon: Sparkles,
    },
  ];

  const dailyActivities = [
    {
      icon: Dumbbell,
      title: 'Daily Physical Activity',
      tips: ['Take a 30-minute walk', 'Use stairs instead of elevators', 'Try home workout routines', 'Stretch every hour if working at a desk'],
      color: 'bg-blue-500',
    },
    {
      icon: Salad,
      title: 'Healthy Food Habits',
      tips: ['Include vegetables in every meal', 'Reduce processed food intake', 'Plan balanced meals ahead', 'Limit sugary drinks and snacks'],
      color: 'bg-green-500',
    },
    {
      icon: Droplets,
      title: 'Water Intake Awareness',
      tips: ['Drink a glass of water first thing in morning', 'Carry a reusable water bottle', 'Set reminders to drink water', 'Replace soda with water'],
      color: 'bg-cyan-500',
    },
    {
      icon: BedDouble,
      title: 'Sleep Routine',
      tips: ['Maintain consistent sleep schedule', 'Avoid screens before bedtime', 'Create a comfortable sleep environment', 'Limit caffeine in evening hours'],
      color: 'bg-indigo-500',
    },
    {
      icon: Hand,
      title: 'Hygiene Habits',
      tips: ['Wash hands before and after meals', 'Maintain oral hygiene', 'Keep living spaces clean', 'Practice respiratory hygiene'],
      color: 'bg-teal-500',
    },
    {
      icon: Brain,
      title: 'Mental Wellness Activities',
      tips: ['Practice mindfulness or meditation', 'Maintain social connections', 'Take breaks when stressed', 'Seek professional help when needed'],
      color: 'bg-purple-500',
    },
  ];

  const learningTopics = [
    {
      title: 'Impact of Daily Habits',
      content: 'Your daily habits directly influence your long-term health. Small consistent changes in diet, exercise, and sleep patterns can significantly reduce the risk of chronic diseases.',
      icon: Activity,
    },
    {
      title: 'Balanced Nutrition Importance',
      content: 'A balanced diet provides essential nutrients for your body to function properly. Include proteins, carbohydrates, healthy fats, vitamins, and minerals in appropriate proportions.',
      icon: Apple,
    },
    {
      title: 'Exercise Benefits',
      content: 'Regular physical activity strengthens your heart, improves circulation, boosts immune function, and enhances mental well-being. Aim for at least 150 minutes per week.',
      icon: Dumbbell,
    },
    {
      title: 'Disease Prevention Methods',
      content: 'Prevention is better than cure. Regular screenings, vaccinations, and maintaining a healthy lifestyle can prevent many diseases before they develop.',
      icon: Shield,
    },
    {
      title: 'Early Health Awareness',
      content: 'Understanding warning signs and symptoms enables early intervention. Regular self-checks and health awareness save lives through early detection.',
      icon: AlertTriangle,
    },
  ];

  const medicalLibrary = [
    { title: 'Preventing Heart Disease: A Complete Guide', author: 'Dr. Sarah Chen, Cardiologist', category: 'Disease Prevention', summary: 'Comprehensive guide on cardiovascular health maintenance and prevention strategies.' },
    { title: 'The Science of Optimal Nutrition', author: 'Dr. Michael Roberts, Nutritionist', category: 'Nutrition', summary: 'Evidence-based nutrition advice for maintaining optimal health at every age.' },
    { title: 'Building Healthy Lifestyle Habits', author: 'Dr. Lisa Thompson, Wellness Expert', category: 'Healthy Lifestyle', summary: 'Practical strategies for creating sustainable healthy habits that last a lifetime.' },
    { title: 'Early Detection Saves Lives', author: 'Dr. James Miller, Oncologist', category: 'Early Detection', summary: 'The importance of regular screenings and recognizing early warning signs of disease.' },
    { title: 'Public Health Research Updates', author: 'Dr. Emily Watson, Epidemiologist', category: 'Public Health Research', summary: 'Latest findings in public health research and their implications for communities.' },
    { title: 'Medical Innovations in Prevention', author: 'Dr. David Park, Research Director', category: 'Medical Innovations', summary: 'Cutting-edge technologies and approaches transforming preventive healthcare.' },
  ];

  const quizQuestions = [
    {
      id: 1,
      question: 'Which habit helps prevent many diseases?',
      options: [
        { text: 'Regular exercise', correct: true },
        { text: 'Ignoring symptoms', correct: false },
        { text: 'Unhealthy food habits', correct: false },
        { text: 'Avoiding water', correct: false },
      ],
      category: 'Disease Prevention',
    },
    {
      id: 2,
      question: 'What is the best way to prevent the spread of infections?',
      options: [
        { text: 'Maintaining hygiene', correct: true },
        { text: 'Sharing personal items', correct: false },
        { text: 'Avoiding sleep', correct: false },
        { text: 'Skipping meals', correct: false },
      ],
      category: 'Hygiene Awareness',
    },
    {
      id: 3,
      question: 'Dengue is mainly spread through:',
      options: [
        { text: 'Mosquito bites', correct: true },
        { text: 'Food', correct: false },
        { text: 'Cold weather', correct: false },
        { text: 'Exercise', correct: false },
      ],
      category: 'Disease Prevention',
    },
    {
      id: 4,
      question: 'Which lifestyle choice supports heart health?',
      options: [
        { text: 'Balanced diet and physical activity', correct: true },
        { text: 'Smoking', correct: false },
        { text: 'Lack of sleep', correct: false },
        { text: 'High stress', correct: false },
      ],
      category: 'Healthy Lifestyle',
    },
    {
      id: 5,
      question: 'Why are regular health checkups important?',
      options: [
        { text: 'Early awareness and prevention', correct: true },
        { text: 'Only for emergencies', correct: false },
        { text: 'Not needed', correct: false },
        { text: 'To avoid healthy habits', correct: false },
      ],
      category: 'Emergency Health Knowledge',
    },
    {
      id: 6,
      question: 'Which is important for good mental health?',
      options: [
        { text: 'Proper sleep and stress management', correct: true },
        { text: 'Ignoring emotions', correct: false },
        { text: 'No physical activity', correct: false },
        { text: 'Poor lifestyle', correct: false },
      ],
      category: 'Healthy Lifestyle',
    },
  ];

  const handleQuizAnswer = (questionId: number, answer: string) => {
    const existing = quizAnswers.find(a => a.questionId === questionId);
    if (existing) {
      setQuizAnswers(prev =>
        prev.map(a =>
          a.questionId === questionId ? { ...a, answer } : a
        )
      );
    } else {
      setQuizAnswers(prev => [...prev, { questionId, answer }]);
    }
  };

  const calculateQuizScore = () => {
    let score = 0;
    quizQuestions.forEach(q => {
      const userAnswer = quizAnswers.find(a => a.questionId === q.id);
      if (userAnswer) {
        const correctOption = q.options.find(o => o.correct);
        if (correctOption && correctOption.text === userAnswer.answer) {
          score++;
        }
      }
    });
    return score;
  };

  const getKnowledgeLevel = (score: number) => {
    if (score >= 6) return { level: 'Expert', color: 'text-green-600' };
    if (score >= 4) return { level: 'Good', color: 'text-blue-600' };
    if (score >= 2) return { level: 'Basic', color: 'text-yellow-600' };
    return { level: 'Needs Improvement', color: 'text-red-600' };
  };

  const scrollToSection = (href: string) => {
    if (activeSection === 'journey') {
      setActiveSection('home');
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-800">HealthAware</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map(link => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* Health Journey Hub Button */}
            <div className="hidden md:flex items-center space-x-3">
              <button
                onClick={() => setActiveSection('journey')}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="w-4 h-4" />
                <span className="font-medium">Health Journey Hub</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-blue-600"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-3 space-y-2">
              {navLinks.map(link => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => {
                  setActiveSection('journey');
                  setMobileMenuOpen(false);
                }}
                className="flex items-center space-x-2 w-full px-3 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg"
              >
                <Sparkles className="w-4 h-4" />
                <span className="font-medium">Health Journey Hub</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content or Health Journey Hub */}
      {activeSection === 'home' ? (
        <main className="pt-16">
          {/* Hero Section */}
          <section id="hero" className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400">
              <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg')] bg-cover bg-center opacity-20"></div>
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Your Health Journey
                  <span className="block text-cyan-200">Starts Here</span>
                </h1>
                <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
                  Empowering communities with knowledge and resources to prevent diseases,
                  promote healthy living, and create a healthier tomorrow.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => scrollToSection('#awareness')}
                    className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Check Your Health Awareness
                  </button>
                  <button
                    onClick={() => setActiveSection('journey')}
                    className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
                  >
                    Start Your Journey
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-50 to-transparent"></div>
          </section>

          {/* Health Awareness Check Section */}
          <section id="awareness" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-4">
                  <ClipboardList className="w-4 h-4" />
                  <span>Self Assessment</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Health Awareness Check
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Take a moment to reflect on your health habits and awareness. These questions help you understand your current health status.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {healthQuestions.map((q, index) => (
                  <div
                    key={q.id}
                    className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 overflow-hidden group"
                  >
                    <div className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 mb-3">{q.question}</h3>
                          <div className="space-y-2">
                            {q.options.map((option, idx) => (
                              <label
                                key={idx}
                                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors duration-200"
                              >
                                <input
                                  type="radio"
                                  name={`question-${q.id}`}
                                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                                />
                                <span className="text-gray-600">{option}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <p className="text-sm text-blue-700 flex items-start space-x-2">
                          <Sparkles className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          <span>{q.info}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Health Awareness Tips Section */}
          <section id="tips" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-100 rounded-full text-green-600 text-sm font-medium mb-4">
                  <Heart className="w-4 h-4" />
                  <span>Healthy Living</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Health Awareness Tips
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Simple yet powerful habits that can transform your health and well-being.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {awarenessTips.map((tip, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className={`h-2 ${tip.color}`}></div>
                    <div className="p-6">
                      <div className={`w-14 h-14 ${tip.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <tip.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="font-semibold text-lg text-gray-800 mb-2">{tip.title}</h3>
                      <p className="text-gray-600">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* About Public Health Section */}
          <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-6">
                    <Stethoscope className="w-4 h-4" />
                    <span>About Us</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    About Public Health Awareness
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Public health awareness is crucial for building healthier communities. Our mission is to educate
                    people about disease prevention, promote healthy lifestyles, and provide access to essential
                    health resources.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Disease Prevention</h4>
                        <p className="text-gray-600 text-sm">Learn about preventive measures for common diseases.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Health Education</h4>
                        <p className="text-gray-600 text-sm">Empowering individuals with knowledge for better health choices.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Community Support</h4>
                        <p className="text-gray-600 text-sm">Building a network of health-conscious communities.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-8">
                    <img
                      src="https://images.pexels.com/photos/375887/pexels-photo-375887.jpeg"
                      alt="Healthcare professionals"
                      className="rounded-2xl shadow-lg w-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-800">50,000+</p>
                        <p className="text-sm text-gray-600">People Educated</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Common Diseases Section */}
          <section id="diseases" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-red-100 rounded-full text-red-600 text-sm font-medium mb-4">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Health Information</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Common Diseases
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Understanding these diseases can help you take preventive measures and recognize early symptoms.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {diseases.map((disease, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className={`h-24 bg-gradient-to-r ${disease.color} flex items-center justify-center`}>
                      <disease.icon className="w-12 h-12 text-white" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl text-gray-800 mb-2">{disease.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{disease.description}</p>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-700 text-sm mb-2">Common Symptoms:</h4>
                        <div className="flex flex-wrap gap-2">
                          {disease.symptoms.map((symptom, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                            >
                              {symptom}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="p-3 bg-green-50 rounded-lg">
                        <p className="text-sm text-green-700">
                          <span className="font-semibold">Prevention:</span> {disease.prevention}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Prevention Tips Section */}
          <section id="prevention" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-100 rounded-full text-green-600 text-sm font-medium mb-4">
                  <Shield className="w-4 h-4" />
                  <span>Stay Protected</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Prevention Tips
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Simple preventive measures that can significantly reduce your risk of diseases.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {preventionCards.map((card, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white to-green-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 group"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <card.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">{card.title}</h3>
                    <p className="text-gray-600">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Health Resources Section */}
          <section id="resources" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-100 rounded-full text-indigo-600 text-sm font-medium mb-4">
                  <BookOpen className="w-4 h-4" />
                  <span>Resources</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Health Resources
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Access our curated collection of health resources and educational materials.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {resources.map((resource, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <resource.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">{resource.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                    <button className="flex items-center text-indigo-600 font-medium text-sm group-hover:text-indigo-700">
                      Learn More
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Public Health Awareness Quiz Section */}
          <section id="quiz" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-100 rounded-full text-purple-600 text-sm font-medium mb-4">
                  <Award className="w-4 h-4" />
                  <span>Test Your Knowledge</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Test Your Public Health Awareness
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Take this quick quiz to assess your health knowledge. This is for educational purposes only, not medical diagnosis.
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 gap-6">
                  {quizQuestions.map((q, index) => (
                    <div
                      key={q.id}
                      className="bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 overflow-hidden"
                    >
                      <div className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <div className="mb-2">
                              <span className="text-xs font-medium px-2 py-1 bg-purple-100 text-purple-600 rounded-full">
                                {q.category}
                              </span>
                            </div>
                            <h3 className="font-semibold text-gray-800 mb-4">{q.question}</h3>
                            <div className="space-y-2">
                              {q.options.map((option, idx) => (
                                <label
                                  key={idx}
                                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-purple-50 cursor-pointer transition-all duration-200 border border-transparent hover:border-purple-200"
                                >
                                  <input
                                    type="radio"
                                    name={`quiz-${q.id}`}
                                    className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                                    onChange={() => handleQuizAnswer(q.id, option.text)}
                                  />
                                  <span className="text-gray-600">{option.text}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Submit Button */}
                <div className="mt-8 text-center">
                  <button
                    onClick={() => setQuizSubmitted(true)}
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2 mx-auto"
                  >
                    <Send className="w-5 h-5" />
                    <span>Submit Quiz</span>
                  </button>
                </div>

                {/* Quiz Results */}
                {quizSubmitted && (
                  <div className="mt-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 shadow-xl border border-green-200">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">Your Results</h3>
                      <div className="flex items-center justify-center space-x-8 my-6">
                        <div className="text-center">
                          <p className={`text-4xl font-bold ${getKnowledgeLevel(calculateQuizScore()).color}`}>
                            {calculateQuizScore()}/{quizQuestions.length}
                          </p>
                          <p className="text-gray-600">Score</p>
                        </div>
                        <div className="w-px h-16 bg-gray-200"></div>
                        <div className="text-center">
                          <p className={`text-xl font-bold ${getKnowledgeLevel(calculateQuizScore()).color}`}>
                            {getKnowledgeLevel(calculateQuizScore()).level}
                          </p>
                          <p className="text-gray-600">Knowledge Level</p>
                        </div>
                      </div>
                      <div className="mt-6">
                        <h4 className="font-semibold text-gray-800 mb-3">Recommended Topics to Learn More:</h4>
                        <div className="flex flex-wrap justify-center gap-2">
                          {calculateQuizScore() < 4 && (
                            <>
                              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Disease Prevention</span>
                              <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">Healthy Lifestyle</span>
                              <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Hygiene Awareness</span>
                            </>
                          )}
                          {calculateQuizScore() >= 4 && calculateQuizScore() < 6 && (
                            <>
                              <span className="px-3 py-1 bg-cyan-100 text-cyan-600 rounded-full text-sm">Advanced Nutrition</span>
                              <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm">Mental Health</span>
                            </>
                          )}
                          {calculateQuizScore() >= 6 && (
                            <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm">Keep up the great work!</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Emergency Contacts Section */}
          <section id="emergency" className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-red-100 rounded-full text-red-600 text-sm font-medium mb-4">
                  <Ambulance className="w-4 h-4" />
                  <span>24/7 Available</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Emergency Contacts
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Save these important emergency numbers. Quick access to healthcare services can save lives.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* 108 Ambulance */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
                  <div className="bg-gradient-to-r from-red-500 to-red-600 p-8 text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Ambulance className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">108 Ambulance</h3>
                  </div>
                  <div className="p-6 text-center">
                    <p className="text-5xl font-bold text-red-600 mb-4">108</p>
                    <p className="text-gray-600 mb-4">Free emergency ambulance service available 24/7 across India.</p>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>Available 24/7</span>
                    </div>
                  </div>
                </div>

                {/* 104 Health Helpline */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">104 Health Helpline</h3>
                  </div>
                  <div className="p-6 text-center">
                    <p className="text-5xl font-bold text-blue-600 mb-4">104</p>
                    <p className="text-gray-600 mb-4">Get health advice, information, and referrals from trained professionals.</p>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>Available 24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-6">
                    <Mail className="w-4 h-4" />
                    <span>Get in Touch</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    Contact Us
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Have questions or need assistance? We're here to help. Reach out to us through the form or contact information below.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Location</p>
                        <p className="text-gray-600">123 Health Street, Medical District, City</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Email</p>
                        <p className="text-gray-600">info@healthaware.org</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Phone className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Phone</p>
                        <p className="text-gray-600">+91 1800 123 4567</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8">
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="What is this about?"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your message..."
                      ></textarea>
                    </div>
                    <button
                      type="button"
                      className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-bold text-xl">HealthAware</span>
                  </div>
                  <p className="text-gray-400 mb-4">
                    Empowering communities with health knowledge and resources for a healthier tomorrow.
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-colors duration-200">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors duration-200">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-200">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors duration-200">
                      <Youtube className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    <li><button onClick={() => scrollToSection('#hero')} className="text-gray-400 hover:text-white transition-colors duration-200">Home</button></li>
                    <li><button onClick={() => scrollToSection('#awareness')} className="text-gray-400 hover:text-white transition-colors duration-200">Awareness Check</button></li>
                    <li><button onClick={() => scrollToSection('#diseases')} className="text-gray-400 hover:text-white transition-colors duration-200">Diseases</button></li>
                    <li><button onClick={() => scrollToSection('#prevention')} className="text-gray-400 hover:text-white transition-colors duration-200">Prevention</button></li>
                    <li><button onClick={() => scrollToSection('#quiz')} className="text-gray-400 hover:text-white transition-colors duration-200">Quiz</button></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-4">Resources</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Health Guidelines</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Publications</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Research</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">FAQs</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-4">Emergency</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2 text-gray-400">
                      <Phone className="w-4 h-4" />
                      <span>108 - Ambulance</span>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-400">
                      <Phone className="w-4 h-4" />
                      <span>104 - Health Helpline</span>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-400">
                      <Mail className="w-4 h-4" />
                      <span>info@healthaware.org</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
                <p>&copy; 2024 HealthAware. All rights reserved. This website is for educational purposes only, not medical diagnosis.</p>
              </div>
            </div>
          </footer>
        </main>
      ) : (
        /* Health Journey Hub Page */
        <main className="pt-16">
          {/* Journey Hub Hero */}
          <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600">
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg')] bg-cover bg-center opacity-10"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
              <button
                onClick={() => setActiveSection('home')}
                className="flex items-center space-x-2 text-white/80 hover:text-white mb-8 transition-colors duration-200"
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
                <span>Back to Home</span>
              </button>
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4" />
                  <span>Interactive Learning</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Health Journey Hub
                </h1>
                <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                  Your personalized space for health education, daily activities, and medical knowledge enhancement.
                </p>
              </div>

              {/* Tab Navigation */}
              <div className="flex flex-wrap justify-center gap-3 mt-12">
                <button
                  onClick={() => setActiveLearningTab('activities')}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeLearningTab === 'activities'
                      ? 'bg-white text-indigo-600 shadow-lg'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <Activity className="w-5 h-5" />
                    <span>Daily Activities</span>
                  </span>
                </button>
                <button
                  onClick={() => setActiveLearningTab('learning')}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeLearningTab === 'learning'
                      ? 'bg-white text-indigo-600 shadow-lg'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <GraduationCap className="w-5 h-5" />
                    <span>Learning Sessions</span>
                  </span>
                </button>
                <button
                  onClick={() => setActiveLearningTab('timeline')}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeLearningTab === 'timeline'
                      ? 'bg-white text-indigo-600 shadow-lg'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <History className="w-5 h-5" />
                    <span>Disease Timeline</span>
                  </span>
                </button>
                <button
                  onClick={() => setActiveLearningTab('library')}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeLearningTab === 'library'
                      ? 'bg-white text-indigo-600 shadow-lg'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <Library className="w-5 h-5" />
                    <span>Medical Library</span>
                  </span>
                </button>
              </div>
            </div>
          </section>

          {/* Tab Content */}
          <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Daily Activities Tab */}
              {activeLearningTab === 'activities' && (
                <div>
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Daily Health Activities</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      Practical tips and habits for a healthier lifestyle. Start with small changes today!
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {dailyActivities.map((activity, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                      >
                        <div className={`h-24 ${activity.color} flex items-center justify-center`}>
                          <activity.icon className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="p-6">
                          <h3 className="font-bold text-xl text-gray-800 mb-4">{activity.title}</h3>
                          <ul className="space-y-3">
                            {activity.tips.map((tip, idx) => (
                              <li key={idx} className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600">{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Learning Sessions Tab */}
              {activeLearningTab === 'learning' && (
                <div>
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Personal Health Learning Session</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      Understand the science behind healthy living and make informed choices.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {learningTopics.map((topic, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <topic.icon className="w-7 h-7 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg text-gray-800 mb-3">{topic.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{topic.content}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Disease Timeline Tab */}
              {activeLearningTab === 'timeline' && (
                <div>
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Disease Awareness Timeline</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      Two decades of health awareness evolution - from lifestyle diseases to modern prevention methods.
                    </p>
                  </div>

                  <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-green-200 hidden md:block"></div>

                    <div className="space-y-8">
                      {timelineData.map((item, index) => (
                        <div
                          key={index}
                          className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
                        >
                          {/* Content Card */}
                          <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                            <div className="bg-white rounded-2xl shadow-lg p-6 inline-block hover:shadow-xl transition-all duration-300">
                              <div className="flex items-center space-x-2 mb-2">
                                <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-bold rounded-full">
                                  {item.year}
                                </span>
                                <span className="font-semibold text-gray-800">{item.title}</span>
                              </div>
                              <p className="text-gray-600">{item.description}</p>
                            </div>
                          </div>

                          {/* Center Icon */}
                          <div className="hidden md:flex w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full items-center justify-center flex-shrink-0 shadow-lg z-10">
                            <item.icon className="w-7 h-7 text-white" />
                          </div>

                          {/* Empty space for alternating layout */}
                          <div className="flex-1 hidden md:block"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Medical Library Tab */}
              {activeLearningTab === 'library' && (
                <div>
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-100 rounded-full text-purple-600 text-sm font-medium mb-4">
                      <BookOpen className="w-4 h-4" />
                      <span>Expert Knowledge</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Medical Knowledge Library</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      Learn from doctors and researchers. Access curated articles on various health topics.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {medicalLibrary.map((article, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                      >
                        <div className="h-32 bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                          <BookOpen className="w-16 h-16 text-white/30 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="p-6">
                          <span className="text-xs font-medium px-2 py-1 bg-purple-100 text-purple-600 rounded-full">
                            {article.category}
                          </span>
                          <h3 className="font-bold text-lg text-gray-800 mt-3 mb-2">{article.title}</h3>
                          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                            <GraduationCap className="w-4 h-4" />
                            <span>{article.author}</span>
                          </div>
                          <p className="text-gray-600 text-sm mb-4">{article.summary}</p>
                          <button className="flex items-center space-x-2 text-purple-600 font-medium text-sm group-hover:text-purple-700">
                            <Play className="w-4 h-4" />
                            <span>Read More</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        </main>
      )}
    </div>
  );
}

export default App;
