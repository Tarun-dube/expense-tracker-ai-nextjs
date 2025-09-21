import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className='font-sans bg-gradient-to-br from-gray-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-800 dark:to-rose-900/20 text-gray-800 dark:text-gray-200 transition-all duration-300 min-h-screen'>
      {/* Hero Section */}
      <section className='relative overflow-hidden flex flex-col items-center justify-center text-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-rose-500/10 via-red-500/5 to-pink-500/10 dark:from-rose-900/30 dark:via-red-900/20 dark:to-pink-900/30'>
        <div className='absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10'></div>
        <div className='relative z-10 max-w-4xl mx-auto w-full'>
          <div className='inline-flex items-center gap-2 bg-rose-50 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg'>
            <span className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-rose-500 dark:bg-rose-400 rounded-full animate-pulse'></span>
            <span className='hidden sm:inline'>Powered by AI Technology</span>
            <span className='sm:hidden'>AI Technology</span>
          </div>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-gray-100 leading-tight'>
            About{' '}
            <span className='bg-gradient-to-r from-rose-600 via-red-500 to-pink-500 bg-clip-text text-transparent'>
              ExpenseTracker AI
            </span>
          </h1>
          <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0'>
            Your intelligent companion for tracking expenses and managing your
            finances with cutting-edge AI-powered insights.
          </p>
          <div className='mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-0'>
            <Link
              href='/sign-up'
              className='group relative overflow-hidden bg-gradient-to-r from-rose-600 via-red-500 to-pink-500 hover:from-rose-700 hover:via-red-600 hover:to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:-translate-y-0.5'
            >
              <span className='relative z-10'>Start Your Journey</span>
              <div className='absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
            </Link>
            <Link
              href='/contact'
              className='group border-2 border-rose-500/20 dark:border-rose-400/20 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/20 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-200 backdrop-blur-sm'
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm relative overflow-hidden'>
        <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 via-red-500 to-pink-500'></div>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='inline-flex items-center gap-2 bg-rose-50 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6'>
            <span className='w-1.5 h-1.5 bg-rose-500 dark:bg-rose-400 rounded-full'></span>
            Our Mission
          </div>
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-gray-100 px-2 sm:px-0'>
            Transforming Financial Management with{' '}
            <span className='text-rose-600 dark:text-rose-400'>AI</span>
          </h2>
          <p className='text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto'>
            At ExpenseTracker AI, we leverage cutting-edge artificial
            intelligence to revolutionize how individuals achieve financial
            wellness. Our AI analyzes your spending patterns to deliver
            personalized recommendations and actionable insights that lead to
            better budgeting and financial freedom.
          </p>
          <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-900/20 dark:to-red-900/20 p-6 rounded-2xl border border-rose-100 dark:border-rose-800/50'>
              <div className='text-3xl font-bold text-rose-600 dark:text-rose-400 mb-2'>
                10K+
              </div>
              <div className='text-gray-600 dark:text-gray-400 font-medium'>
                Active Users
              </div>
            </div>
            <div className='bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-6 rounded-2xl border border-red-100 dark:border-red-800/50'>
              <div className='text-3xl font-bold text-red-600 dark:text-red-400 mb-2'>
                $2M+
              </div>
              <div className='text-gray-600 dark:text-gray-400 font-medium'>
                Money Tracked
              </div>
            </div>
            <div className='bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-6 rounded-2xl border border-pink-100 dark:border-pink-800/50'>
              <div className='text-3xl font-bold text-pink-600 dark:text-pink-400 mb-2'>
                99%
              </div>
              <div className='text-gray-600 dark:text-gray-400 font-medium'>
                Satisfaction Rate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ... keep rest of sections with the same pattern (replace emerald/green/teal → rose/red/pink) ... */}

    </div>
  );
};

export default AboutPage;
