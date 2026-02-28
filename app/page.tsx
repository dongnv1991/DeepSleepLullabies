export default function Home() {
  return (
    <>
      {/* Header / Navigation */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-primary/10 bg-background-dark/80">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary/20 p-2 rounded-full">
              <span className="material-symbols-outlined text-primary fill-1">bedtime</span>
            </div>
            <h2 className="text-xl font-bold tracking-tight text-slate-100">DeepSleep <span className="text-primary font-medium text-lg">Lullabies</span></h2>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#about">About</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#playlists">Playlists</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#benefits">Benefits</a>
            <a href="https://www.youtube.com/channel/UCRy4hSrAmQ344kerJdywpNg?sub_confirmation=1" target="_blank" rel="noopener noreferrer" className="bg-periwinkle text-background-dark px-6 py-2.5 rounded-full text-sm font-bold hover:brightness-110 transition-all">
              Subscribe
            </a>
          </div>
        </nav>
      </header>
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-b from-night-purple via-[#35274D] to-[#402F5A]">
          <div className="absolute top-40 right-[10%] w-32 h-32 bg-baby-blue/20 rounded-full blur-3xl moon-glow"></div>
          <div className="absolute top-20 left-[15%] opacity-40">
            <span className="material-symbols-outlined text-primary text-xs">auto_awesome</span>
          </div>
          <div className="absolute bottom-40 right-[20%] opacity-30">
            <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
          </div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <span className="material-symbols-outlined text-primary text-sm">music_note</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Scientifically Sound Sleep</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-100 leading-[1.1] mb-6">
              Gentle Piano Lullabies for <span className="text-primary">Deep, Peaceful</span> Baby Sleep
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Designed to mimic a mother\'s heartbeat and natural frequencies to help your little one drift into a calm, restorative slumber.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://www.youtube.com/channel/UCRy4hSrAmQ344kerJdywpNg" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-periwinkle text-background-dark px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform">
                <span className="material-symbols-outlined">play_circle</span>
                Listen on YouTube
              </a>
              <a href="#playlists" className="w-full sm:w-auto bg-slate-100/10 text-slate-100 backdrop-blur-sm border border-slate-100/20 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-100/20 transition-all text-center">
                Explore Playlists
              </a>
            </div>
          </div>
          {/* Soft Moon Graphic */}
          <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]"></div>
        </section>
        {/* About Section */}
        <section className="py-24 px-6 bg-background-light dark:bg-background-dark" id="about">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-4">Why DeepSleep Lullabies?</h2>
              <p className="text-slate-500 dark:text-slate-400">Pure piano melodies at 432Hz tuning, specifically crafted for newborns and infants.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white dark:bg-background-dark/50 border border-primary/10 p-8 rounded-xl card-glow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary">pace</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Ultra Slow Tempo</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">Matches a baby\'s resting heart rate to naturally induce relaxation and lower cortisol levels.</p>
              </div>
              <div className="bg-white dark:bg-background-dark/50 border border-primary/10 p-8 rounded-xl card-glow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary">piano</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Pure Piano</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">No harsh electronic synthesizers or over-processed sounds—only organic, high-fidelity piano tones.</p>
              </div>
              <div className="bg-white dark:bg-background-dark/50 border border-primary/10 p-8 rounded-xl card-glow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary">volume_off</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Minimal Sounds</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">Free from distracting background layers to prevent overstimulation during light sleep cycles.</p>
              </div>
              <div className="bg-white dark:bg-background-dark/50 border border-primary/10 p-8 rounded-xl card-glow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary">waves</span>
                </div>
                <h3 className="text-xl font-bold mb-3">432Hz Tuning</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">Resonating with natural vibrations to promote a deeper, more restorative state of rest.</p>
              </div>
            </div>
          </div>
        </section>
        {/* Featured Videos */}
        <section className="py-24 px-6 bg-[#211830] dark:bg-[#1A1326]" id="videos">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="text-4xl font-bold mb-4">Featured Videos</h2>
                <p className="text-slate-500 dark:text-slate-400 max-w-xl">Listen to our most popular baby sleep lullabies. 432Hz tuning for maximum relaxation.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <a href="https://youtu.be/UR21flslTqI" target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-primary/10 card-glow">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://i.ytimg.com/vi/UR21flslTqI/maxresdefault.jpg')" }}></div>
                  <div className="absolute inset-0 flex items-center justify-center bg-background-dark/20 group-hover:bg-background-dark/10 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center text-background-dark group-hover:scale-110 transition-transform shadow-lg">
                      <span className="material-symbols-outlined text-4xl ml-1">play_arrow</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-black/60 text-white text-xs font-bold px-2 py-1 rounded">2 HOURS</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">2 Hours Baby Sleep Piano Music 🎹 Gentle Lullaby for Deep & Calm Sleep</h3>
              </a>
              <a href="https://youtu.be/UkwqbLIbGK4" target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-primary/10 card-glow">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://i.ytimg.com/vi/UkwqbLIbGK4/maxresdefault.jpg')" }}></div>
                  <div className="absolute inset-0 flex items-center justify-center bg-background-dark/20 group-hover:bg-background-dark/10 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center text-background-dark group-hover:scale-110 transition-transform shadow-lg">
                      <span className="material-symbols-outlined text-4xl ml-1">play_arrow</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-black/60 text-white text-xs font-bold px-2 py-1 rounded">2 HOURS</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">2 Hours Very Slow Baby Sleep Piano 🎹 Soft Lullaby for Peaceful Sleep</h3>
              </a>
              <a href="https://youtu.be/W-y966G5ESg" target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-primary/10 card-glow">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://i.ytimg.com/vi/W-y966G5ESg/maxresdefault.jpg')" }}></div>
                  <div className="absolute inset-0 flex items-center justify-center bg-background-dark/20 group-hover:bg-background-dark/10 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center text-background-dark group-hover:scale-110 transition-transform shadow-lg">
                      <span className="material-symbols-outlined text-4xl ml-1">play_arrow</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-black/60 text-white text-xs font-bold px-2 py-1 rounded">1 HOUR</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">Baby Sleep Music with Rain White Noise 🌙Slow Lullaby for Deep Sleep</h3>
              </a>
            </div>
          </div>
        </section>
        {/* Featured Playlists */}
        <section className="py-24 px-6 bg-background-light dark:bg-background-dark" id="playlists">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="text-4xl font-bold mb-4">Curated Playlists</h2>
                <p className="text-slate-500 dark:text-slate-400 max-w-xl">Find the perfect duration and atmosphere for your baby\'s sleep needs, from short naps to full nights.</p>
              </div>
              <a href="https://www.youtube.com/channel/UCRy4hSrAmQ344kerJdywpNg" target="_blank" rel="noopener noreferrer" className="bg-primary/20 text-primary border border-primary/30 px-6 py-3 rounded-full font-bold hover:bg-primary/30 transition-all flex items-center gap-2">
                View Full Channel
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <a href="https://www.youtube.com/watch?v=4jCFu5kCdFI&list=PLqC6jmhVfVrJFM1mreUi85lz8R-BV_5qE" target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-primary/10 card-glow">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://i.ytimg.com/vi/4jCFu5kCdFI/maxresdefault.jpg')" }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-primary/90 text-background-dark text-xs font-black px-2 py-1 rounded">PLAYLIST</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Baby Sleep Music Box</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Baby Sleep Music Box 🎠Gentle Lullabies for Deep & Peaceful Sleep</p>
              </a>
              <a href="https://www.youtube.com/watch?v=UkwqbLIbGK4&list=PLqC6jmhVfVrIzvya9N9GWFIHpQpGLio5h" target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-primary/10 card-glow">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://i.ytimg.com/vi/UkwqbLIbGK4/maxresdefault.jpg')" }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-primary/90 text-background-dark text-xs font-black px-2 py-1 rounded">ESSENTIAL</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Baby Sleep Music with Lullabies & Rain White Noise</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Baby Sleep Music with Lullabies & Rain White Noise 🌧️Calming Sounds for Deep & Peaceful Sleep</p>
              </a>
              <a href="https://www.youtube.com/watch?v=YBbtLNFs-1U&list=PLqC6jmhVfVrLysjCdSujs7p-xMI8lFu-T" target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-primary/10 card-glow">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://i.ytimg.com/vi/YBbtLNFs-1U/maxresdefault.jpg')" }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-primary/90 text-background-dark text-xs font-black px-2 py-1 rounded">ATMOSPHERIC</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Baby Sleep Piano Music 🎹Gentle Lullabies for Deep & Calm Sleep</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Soft reverb and slow keys for deep relaxation.</p>
              </a>
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-24 px-6 relative overflow-hidden" id="benefits">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative">
              <div className="w-full aspect-square rounded-full bg-primary/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
              <div className="relative z-10 p-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Sleeping Baby Silhouette" className="w-full h-auto drop-shadow-2xl opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDogNN25G2UASis0CCluyXRHwZnAV4S7kZ4RRoxh1z0JDBXIiDH-7s4tWz-e68eHAEfp7j4ob3P-ybvWSZ9KlPO_xEwj6qCtLO8cMbiefaXdngSw75zu0RLV0EQiSsZ-RLLuZLNpetgBxFagRVTic2p5ayuM-BHkh-guuRYBiqYmu8JN7VZkbVnzqSYdE_3-se6EMiYWRm_gs7ZK0GEFif83abWqD3OBfbgWZuVqHTrUIgB8Q9JK9Y2vJrLrwuBi_tYfHb3opxe5aZx" />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl font-bold mb-8">How Our Lullabies Help Your Baby</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">bed</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Longer Sleep Cycles</h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">Our compositions avoid sudden changes in dynamics, preventing the Moro reflex and helping babies transition between sleep stages smoothly.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">psychology</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Reduced Overstimulation</h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">By filtering out high frequencies and complex arrangements, we create a sensory environment that is easy for a developing brain to process.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">routine</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Consistent Routine</h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">Sound is a powerful cue. Playing our lullabies nightly signals to your baby\'s nervous system that it is time to wind down.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials */}
        <section className="py-24 px-6 bg-primary/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold">Trusted by 100,000+ Parents</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-background-dark p-8 rounded-xl border border-primary/10 shadow-sm">
                <div className="flex gap-1 text-primary mb-6">
                  <span className="material-symbols-outlined fill-1">star</span>
                  <span className="material-symbols-outlined fill-1">star</span>
                  <span className="material-symbols-outlined fill-1">star</span>
                  <span className="material-symbols-outlined fill-1">star</span>
                  <span className="material-symbols-outlined fill-1">star</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 italic mb-6 leading-relaxed">"The only thing that worked for my 4-month-old. The tempo is so slow and steady, he’s out within 10 minutes every single night."</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">SM</div>
                  <span className="font-bold text-sm">Sarah Miller</span>
                </div>
              </div>
              <div className="bg-white dark:bg-background-dark p-8 rounded-xl border border-primary/10 shadow-sm">
                <div className="flex gap-1 text-primary mb-6">
                  <span className="material-symbols-outlined fill-1">star</span>
                  <span className="material-symbols-outlined fill-1">star</span>
                  <span className="material-symbols-outlined fill-1">star</span>
                  <span className="material-symbols-outlined fill-1">star</span>
                  <span className="material-symbols-outlined fill-1">star</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 italic mb-6 leading-relaxed">"We tried white noise, rain sounds, and other music. DeepSleep is different. It’s calming for the parents too!"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">JD</div>
                  <span className="font-bold text-sm">James David</span>
                </div>
              </div>
              <div className="bg-white dark:bg-background-dark p-8 rounded-xl border border-primary/10 shadow-sm">
                <div className="flex gap-1 text-primary mb-6">
                  <span className="material-symbols-outlined fill-1">star</span>
                  <span className="material-symbols-outlined fill-1">star</span>
                  <span className="material-symbols-outlined fill-1">star</span>
                  <span className="material-symbols-outlined fill-1">star</span>
                  <span className="material-symbols-outlined fill-1">star</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 italic mb-6 leading-relaxed">"Love the 8-hour loops. We don\'t have to worry about the music stopping in the middle of the night."</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">EL</div>
                  <span className="font-bold text-sm">Emma Lewis</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Subscribe Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#402F5A] to-night-purple rounded-xl p-12 md:p-20 text-center border border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-slate-100 mb-6">Join Thousands of Parents Sleeping Better Tonight</h2>
              <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">Get notified when we release new scientifically-tuned sleep tracks. Free on YouTube, forever.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://www.youtube.com/channel/UCRy4hSrAmQ344kerJdywpNg?sub_confirmation=1" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-colors">
                  <span className="material-symbols-outlined">subscriptions</span>
                  Subscribe on YouTube
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-background-dark border-t border-primary/10 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/20 p-2 rounded-full">
                  <span className="material-symbols-outlined text-primary fill-1">bedtime</span>
                </div>
                <h2 className="text-xl font-bold tracking-tight text-slate-100">DeepSleep <span className="text-primary">Lullabies</span></h2>
              </div>
              <p className="text-slate-400 max-w-sm leading-relaxed mb-6">
                The world\'s most gentle piano lullabies, tuned to the heart of a sleeping child. Helping families find peace, one note at a time.
              </p>
              <div className="flex gap-4">
                <a className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-all" href="https://www.youtube.com/channel/UCRy4hSrAmQ344kerJdywpNg" target="_blank" rel="noopener noreferrer">
                  <span className="material-symbols-outlined">play_arrow</span>
                </a>
                <a className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-all" href="mailto:vitsneakers2023@gmail.com">
                  <span className="material-symbols-outlined">mail</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-slate-100 mb-6 uppercase text-xs tracking-widest">Resources</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a className="hover:text-primary transition-colors" href="#">Sleep Science</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">432Hz Benefits</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Parenting Tips</a></li>
                <li><a className="hover:text-primary transition-colors" href="https://www.youtube.com/channel/UCRy4hSrAmQ344kerJdywpNg" target="_blank" rel="noopener noreferrer">YouTube Channel</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-100 mb-6 uppercase text-xs tracking-widest">Company</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a className="hover:text-primary transition-colors" href="#">About Us</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
            <p>© 2024 DeepSleep Lullabies. All rights reserved.</p>
            <p>Designed for peaceful nights.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
