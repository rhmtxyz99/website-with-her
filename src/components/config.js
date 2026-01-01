const config = {
  /* 
  ████████████████████████████████████████
  🔧 BASIC SETTINGS (EDIT FREELY)
  ████████████████████████████████████████
  */

  // 🔐 Passcode Page
  correctPasscode: "2208", // Change this to any 4-digit code (the passcode for access)
  passcodeTitle: "Enter Passcode", // Title displayed on the passcode entry page
  successMessage: "Yayy!! :)", // Message shown upon successful passcode entry
  redirectMessage: "Redirecting...", // Message displayed while redirecting after success
  incorrectPasscodeMessage: "Kode sandi salah, petunjuk: tanggal dan bulan jadian!", // Message shown for incorrect passcode
  cancelButtonText: "Cancel", // Text for the cancel button

  // 🔍 Question Page
  searchPlaceholder: "Search Google or type a URL", // Placeholder text in the search input
  trendingTitle: "Trending searches", // Title for the trending searches section
  trendingSearches: [
    "Apa itu iti labu?", // Example trending search query
    "Mengapa dia (Rahmat🥰) sangat mencintaimu?", // Another example query
    `Viral! Rahmat Nusi ternyata kalo berq jongkok`, // A personalized trending search
  ],
  proTip: 'Pro tip: try searching "Sudah berapa lama kita bersama?" ;)', // Helpful tip for users

  // ⏳ Timer Page
  anniversaryDate: "2024-08-11", // 📅 Set your anniversary date here (used for the timer)
  timerTitle: "Kita telah bersama selama:", // Title displayed on the timer page
  timerMessage: "... dan akan selalu bersama <3", // Message shown alongside the timer
  timeUnits: {
    days: "Days", // Label for days in the timer
    hours: "Hours", // Label for hours in the timer
    minutes: "Minutes", // Label for minutes in the timer
    seconds: "Seconds", // Label for seconds in the timer
  },

  // 📸 Recap Page
  recapTitle: "Mari lihat kembali waktu kita saat bersama", // Title for the recap page
  clickMeText: "Click me!", // Text prompting users to interact

  recapSections: [
    { label: "Messages", path: "/recap/message", icon: "Image" }, // Section for messages
    { label: "Pictures", path: "/recap/pictures", icon: "Image" }, // Section for pictures
    { label: "Music", path: "/recap/music", icon: "Music" }, // Section for music
    
  ],

  // 🎵 Music Page
  musicTitle: "Lagu-lagu yang mengingatkanku padamu", // Title for the music page
  musicGallery: [
    {
      title: "Rahasia Hati", // Title of the song
      artist: "Nidji", // Artist of the song
      left: "5%", // Positioning on the page
      top: "5%", // Positioning on the page
    },
    {
      title: "HAL-L",
      artist: "Halstage",
      left: "40%",
      top: "15%",
    },
    {
      title: "Stand by me",
      artist: "Oasis",
      left: "15%",
      top: "40%",
    },
    {
      title: "Last Night on Earth",
      artist: "Green Day",
      left: "30%",
      top: "75%",
    },
    {
      title: "Spend it with you",
      artist: "Kodaline",
      left: "5%",
      top: "65%",
    },
    {
      title: "Wish You Were Here",
      artist: "Neck Deep",
      left: "25%",
      top: "90%",
    },
    {
      title: "Forever young",
      artist: "Alphaville",
      left: "35%",
      top: "50%",
    },
    {
      title: "Monolog",
      artist: "Pamungkas",
      left: "10%",
      top: "25%",
    },
  ],

    // 📝 Message Recap Page
    messageTitle: "Foto Kami 1", // Title for the messages recap page
    messageGallery: [
      { title: "August 06, 2025", description: "Hari yang indah untuk dikenang." }, // Message entry
      { title: "September 5, 2025", description: "Menyayangi momen bersama, 'Mencari buku kontrol KIPK kala itu'" },
      { title: "October 09, 2024", description: "Kisah kasih di lab komputer  ❤️" },
    ],
  
    // 📸 Picture Recap Page
    pictureTitle: "Foto Kami 2", // Title for the pictures recap page
    pictureGallery: [
      { title: "January 01, 2025", description: "Tahun baru 2025 🎉" }, // Picture entry
      { title: "August 22, 2025", description: "Anniversary 1 tahun 💕" },
      { title: "January 01, 2026", description: "Tahun baru 2026 🎉" },
    ],
  

  // 💌 Love Letter Page
  loveLetterMessage: "Hi, I love you so much💖", // Message displayed on the love letter page

  // 🎇 Closing Page
  closingMessage: "Thank you for everything, my love! 💖 Wishing us many more wonderful years together.", // Closing message displayed

  /* 
  ████████████████████████████████████████
  ⚠️ ADVANCED SETTINGS (DO NOT TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING)
  ████████████████████████████████████████
  */

  // 📌 Paths (Only change if you are a developer or modifying routes)
  redirectPath: "/question", // Path to redirect after passcode entry
  timerRedirectPath: "/timer", // Path to redirect to the timer page
  questionRedirectPath: "/question", // Path to redirect to the question page
  recapRedirectPath: "/recap", // Path to redirect to the recap page
  recapPreviousPage: "/timer", // Path to the previous page in the recap
  recapNextPage: "/letter", // Path to the next page in the recap
  letterNextPage: "/closing", // Path to the next page after the letter
  letterPreviousPage: "/letter", // Path to the previous page before the letter
  previousPageText: "Halaman sebelumnya", // Text for the previous page button
  nextPageText: "Halaman selanjutnya", // Text for the next page button

  // 🔍 Search Queries (Only change if modifying search functionality)
  correctSearchQueries: [
    "Sudah berapa lama kita bersama?", // Example of a correct search query
    "how long have we been together", // Another example of a correct search query
  ],
};

export default config;
